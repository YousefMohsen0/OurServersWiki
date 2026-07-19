/**
 *  Copyright (c) 2025 taskylizard. Apache License 2.0.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import type { SiteConfig } from 'vitepress'
import { Feed } from 'feed'
import { createContentLoader } from 'vitepress'
import { meta } from './constants'

export async function generateMeta(context: SiteConfig, hostname: string) {
  const { pageData } = context
  const url = `${hostname}/${pageData.relativePath.replace(/index\.md$/, '')}`

  return [
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:title', content: pageData.title }],
    [
      'meta',
      {
        property: 'og:description',
        content: pageData.description
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: `${hostname}/og.png`
      }
    ],
    [
      'meta',
      {
        property: 'og:image:alt',
        // Ensure content is always a string, even if pageData.title is undefined
        content: pageData.title ? `${pageData.title} | ${meta.name}` : meta.name
      }
    ]
  ]
}

export async function generateImages(context: SiteConfig) {
  // implementation
}

export async function generateFeed(config: SiteConfig) {
  const feed = new Feed({
    title: meta.name,
    description: meta.description,
    id: meta.hostname,
    link: meta.hostname,
    language: 'en',
    image: `${meta.hostname}/pwa_icon.png`,
    favicon: `${meta.hostname}/logo.ico`,
    copyright: `Copyright (c) 2025-present taskylizard`
  })

  const posts = await createContentLoader('posts/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${meta.hostname}${url}`,
      link: `${meta.hostname}${url}`,
      description: frontmatter.synopsis,
      content: html,
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.authorlink
        }
      ],
      date: frontmatter.date
    })
  }
}
