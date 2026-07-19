import { execFileSync } from 'node:child_process'
import crypto from 'node:crypto'
import fs from 'node:fs'

const DAYS = 30
const OUTPUT_FILE = 'docs/posts/changelog-sites.md'

const IGNORED_FILES = [
  'docs/posts.md',
  'docs/unsafe.md',
  'docs/sandbox.md',
  'docs/feedback.md',
  'docs/index.md',
  'docs/startpage.md',
  'docs/updates.md',
  OUTPUT_FILE
]

const IGNORED_DIRS = ['docs/posts/', 'docs/.vitepress/']

function isIgnored(file) {
  return (
    !file ||
    IGNORED_FILES.includes(file) ||
    IGNORED_DIRS.some((dir) => file.startsWith(dir))
  )
}

function getAllDocFiles(dir) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const child = `${dir}/${entry.name}`
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.some((d) => `${child}/`.startsWith(d))) continue
      results.push(...getAllDocFiles(child))
    } else if (entry.name.endsWith('.md') && !isIgnored(child)) {
      results.push(child)
    }
  }
  return results
}

function generateChangelog() {
  console.log(`Checking for latest site updates in the last ${DAYS} days...`)

  if (!fs.existsSync('docs')) {
    console.error('Error: "docs" directory not found in the current working directory.')
    return
  }

  let gitDirArgs = []
  const isShallow =
    fs.existsSync('.git/shallow') || fs.existsSync('.git-temp/shallow')

  if (isShallow) {
    console.log(`Shallow clone detected. Fetching history for the last ${DAYS} days...`)
    try {
      execFileSync('git', [
        'fetch',
        `--shallow-since=${DAYS + 1} days ago`,
        '--tags'
      ])
    } catch (e) {
      console.warn('Warning: Failed to unshallow repository. Results may be incomplete.')
    }
  }

  if (!fs.existsSync('.git')) {
    console.log('No .git directory found. Attempting to fetch temporary history...')
    try {
      const REPO_URL = 'https://github.com/YousefMohsen0/OurServersWiki.git'
      const TEMP_GIT_DIR = '.git-temp'

      if (fs.existsSync(TEMP_GIT_DIR))
        fs.rmSync(TEMP_GIT_DIR, { recursive: true, force: true })

      execFileSync('git', [
        'clone',
        '--bare',
        '--filter=blob:none',
        `--shallow-since=${DAYS + 1} days ago`,
        REPO_URL,
        TEMP_GIT_DIR
      ])
      gitDirArgs = [`--git-dir=${TEMP_GIT_DIR}`]
      console.log('Temporary history fetched successfully.')
    } catch (e) {
      console.warn('Warning: Failed to fetch temporary Git history. Skipping generation.')
      return
    }
  }

  if (process.cwd() === '/app') {
    try {
      execFileSync('git', [
        ...gitDirArgs,
        'config',
        '--global',
        '--add',
        'safe.directory',
        '/app'
      ])
    } catch (e) { /* ignore */ }
  }

  // Get just the commit messages first, no diffs, sorted newest to oldest
  const logMsgs = execFileSync(
    'git',
    [
      ...gitDirArgs,
      'log',
      `--since=${DAYS} days ago`,
      '--pretty=format:---COMMIT---%H---MSG---%s',
      'docs/'
    ],
    { maxBuffer: 10 * 1024 * 1024 }
  ).toString()

  const commits = logMsgs.split('---COMMIT---').filter(Boolean)

  // Skip mass-import / initial scaffold commits
  const SKIP_MSG_PATTERNS = [
    /initial\s+(?:osw|vitepress|import|scaffold|setup)/i,
    /import\s+(?:all|existing|initial)/i,
    /mass\s+import/i,
    /initial\s+commit/i
  ]

  // Find the latest commit that actually changed site links (not just typos/metadata)
  let latestSiteChangeCommit = null
  let latestSiteChangeMsg = ''

  for (const commit of commits) {
    const lines = commit.split('\n')
    const header = lines[0]
    const [hash, ...msgParts] = header.split('---MSG---')
    const msg = msgParts.join('---MSG---')

    if (SKIP_MSG_PATTERNS.some((p) => p.test(msg))) {
      continue
    }

    // Get full diff for this single commit
    const diffOutput = execFileSync(
      'git',
      [
        ...gitDirArgs,
        'show',
        hash.trim(),
        '--pretty=format:',
        '-p',
        '--unified=0',
        'docs/'
      ],
      { maxBuffer: 10 * 1024 * 1024 }
    ).toString()

    const diffLines = diffOutput.split('\n')
    let currentFile = ''
    let currentLineNum = 0
    const additions = []
    const deletions = []

    for (let i = 0; i < diffLines.length; i++) {
      const line = diffLines[i]
      if (line.startsWith('diff --git')) {
        currentFile = line.split(' b/')[1]
        currentLineNum = 0
        continue
      }

      if (isIgnored(currentFile)) {
        continue
      }

      if (line.startsWith('@@ ')) {
        const match = line.match(/^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/)
        if (match) {
          currentLineNum = parseInt(match[1], 10)
        }
        continue
      }

      if (line.startsWith('-')) {
        if (line.includes('](')) {
          deletions.push({
            text: line.substring(1),
            file: currentFile,
            lineNum: currentLineNum
          })
        }
        currentLineNum++
      } else if (line.startsWith('+')) {
        if (line.includes('](')) {
          additions.push(line.substring(1))
        }
      } else if (line.startsWith(' ')) {
        currentLineNum++
      }
    }

    // Check if this commit has actual site link changes (additions or removals with URLs)
    const hasAdditions = additions.some(add => add.includes(']('))
    const hasRemovals = deletions.some(del => del.text.includes(']('))

    if (hasAdditions || hasRemovals) {
      latestSiteChangeCommit = { hash: hash.trim(), msg, additions, deletions }
      break
    }
  }

  const allCurrentDocs = getAllDocFiles('docs')
    .map((file) => fs.readFileSync(file, 'utf-8'))
    .join('\n')

  // Generate Markdown
  const frontmatter = `---
title: تحديثات المواقع
description: شوف آخر التحديثات والروابط المتغيرة هنا
date: ${new Date().toISOString().split('T')[0]}
next: false
prev: false
footer: true
---

<Post authors="YousefMohsen"/>

<div dir="rtl">

**هيظهرلك هنا آخر روابط اتضافت او اتبدلت او اتشالت في آخر ${DAYS} يوم.**

***
`

  let markdown = frontmatter

  if (!latestSiteChangeCommit) {
    markdown += `مفيش تحديثات للمواقع في آخر ${DAYS} يوم.
</div>`
  } else {
    const { hash, msg, additions, deletions } = latestSiteChangeCommit
    const prMatch = msg.match(/\(#(\d+)\)/) || msg.match(/Merge pull request #(\d+)/)
    const pr = prMatch ? prMatch[1] : null
    const shortHash = hash.slice(0, 7)
    const commitLink = `[\`${shortHash}\`](https://github.com/YousefMohsen0/OurServersWiki/commit/${hash})`
    const prLink = pr ? ` ([PR #${pr}](https://github.com/YousefMohsen0/OurServersWiki/pull/${pr}))` : ''
    const cleanMsg = msg.replace(/:?\s*updated \d+ pages/i, '').trim()

    markdown += `## آخر تحديث (${shortHash})${prLink ? ` - [PR #${pr}](${prLink.match(/#\d+/)?.[0] || '#' + pr})` : ''}

`
    markdown += `**${cleanMsg || 'تحديث للمواقع'}**

`

    // Process additions
    const realAdditions = additions.filter(a => a.includes(']('))
    if (realAdditions.length > 0) {
      markdown += `### ▷ روابط اتضافت (${realAdditions.length})

`
      for (const add of realAdditions) {
        let cleanText = add.trim()
        cleanText = cleanText.replace(/^\*+\s*/, '')
        cleanText = cleanText.replace(/^⭐\s*/, '')
        markdown += `* ${cleanText}
`
      }
      markdown += `
`
    }

    // Process removals
    const realRemovals = deletions.filter(d => d.text.includes(']('))
    if (realRemovals.length > 0) {
      markdown += `### ▷ روابط اتشالت (${realRemovals.length})

`
      for (const del of realRemovals) {
        const fileHash = crypto.createHash('sha256').update(del.file).digest('hex')
        const lineAnchor = del.lineNum ? `L${del.lineNum}` : ''
        const commitLinkForDel = `https://github.com/YousefMohsen0/OurServersWiki/commit/${hash}#diff-${fileHash}${lineAnchor}`

        const linkMatch = del.text.match(/^(.*\[.*?\]\(.*?\)(?:\*\*)?)(.*)/)
        let searchablePart = del.text
        let hiddenPart = ''

        if (linkMatch) {
          searchablePart = linkMatch[1]
          hiddenPart = linkMatch[2]
        }

        const stripLinks = (t) =>
          t
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
            .replace(/https?:\/\/[^\s)]+/g, '')
            .replace(/\s+/g, ' ')

        const cleanSearchable = stripLinks(searchablePart).trim()
        let cleanHidden = stripLinks(hiddenPart)

        if (
          hiddenPart.trim().startsWith('-') &&
          !cleanHidden.trim().startsWith('-')
        ) {
          cleanHidden = ` - ${cleanHidden.trim()}`
        }

        markdown += `- ${cleanSearchable} <!-- search-exclude -->${cleanHidden} (اتشال في [\`${shortHash}\`](${commitLinkForDel})${pr ? `, [PR #${pr}](https://github.com/YousefMohsen0/OurServersWiki/pull/${pr})` : ''})<!-- /search-exclude -->\n`
      }
      markdown += `
`
    }

    markdown += `</div>`
  }

  fs.writeFileSync(OUTPUT_FILE, markdown)
  console.log(`Successfully generated ${OUTPUT_FILE}. Latest update: ${latestSiteChangeCommit ? 'found' : 'none'}`)

  if (gitDirArgs.length > 0) {
    try {
      const tempDir = gitDirArgs[0].split('=')[1]
      fs.rmSync(tempDir, { recursive: true, force: true })
    } catch (e) { /* ignore */ }
  }
}

try {
  generateChangelog()
} catch (error) {
  console.error('Error generating changelog:', error)
  process.exit(1)
}