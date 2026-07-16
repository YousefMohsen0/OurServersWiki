import z from 'zod'

const FeedbackSchema = z.object({
  message: z.string().min(5).max(1000),
  type: z.enum(['suggestion', 'appreciation', 'other']),
  page: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-Z0-9\-/]+$/, 'Invalid page path'),
  heading: z.string().min(3).max(99).optional()
})

type FeedbackType = z.infer<typeof FeedbackSchema>

type FeedbackEnv = {
  WEBHOOK_URL?: string
}

const feedbackLabels: Record<FeedbackType['type'], string> = {
  suggestion: '💡 عندي اقتراح',
  appreciation: '👍 شكرًا علي شغلكم',
  other: '📂 حاجة تانية'
}

function sanitizeForDiscord(input: string): string {
  return input.replace(/```/g, "'''")
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const onRequest = async ({
  request,
  env
}: {
  request: Request
  env: FeedbackEnv
}) => {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: {
        Allow: 'POST'
      }
    })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400)
  }

  const parsed = await FeedbackSchema.safeParseAsync(body)
  if (!parsed.success) {
    return jsonResponse(
      {
        error: 'Validation failed',
        details: parsed.error.flatten()
      },
      400
    )
  }

  const { message, page, type, heading } = parsed.data
  const pageURL = page.startsWith('/')
    ? `https://osw.pages.dev${page}`
    : `https://osw.pages.dev/${page}`

  const fields = [
    {
      name: 'Page',
      value: `[${page}](${pageURL})`,
      inline: true
    },
    {
      name: 'Message',
      value: sanitizeForDiscord(message),
      inline: false
    }
  ]

  if (heading) {
    fields.unshift({
      name: 'Section',
      value: sanitizeForDiscord(heading),
      inline: true
    })
  }

  const webhookUrl = env.WEBHOOK_URL
  if (!webhookUrl) {
    console.error('WEBHOOK_URL is not configured')
    return jsonResponse({ error: 'Webhook not configured' }, 500)
  }
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'Feedback',
      avatar_url: 'https://osw.pages.dev/feedback-avatar.jpg',
      embeds: [
        {
          color: 3447003,
          title: feedbackLabels[type],
          fields
        }
      ]
    })
  })

  if (!response.ok) {
    const bodyText = await response
      .text()
      .catch(() => 'Unable to read response body')
    console.error(
      `Discord webhook failed: ${response.status} ${response.statusText} - ${bodyText}`
    )
    return jsonResponse({ error: 'Failed to send feedback to Discord' }, 502)
  }

  return jsonResponse({ status: 'ok' })
}
