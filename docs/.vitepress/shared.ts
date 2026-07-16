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

import type { DefaultTheme } from 'vitepress'

// @unocss-include

export const meta = {
  name: 'OSW',
  description: 'The largest collection of free stuff on the internet!',
  hostname: 'https://osw.pages.dev',
  keywords: ['stream', 'movies', 'gaming', 'reading', 'anime'],
  build: {
    api: true,
    nsfw: true
  }
}

export const excluded = [
  'readme.md',
  'single-page',
  'single-page.md',
  'feedback.md',
  'index.md',
  'sandbox.md',
  'startpage.md'
]

// Strip the URL scheme and a leading "www." so "https://www.pi-hole.net/x" and
// "pi-hole.net/x" compare the same way. Shared by the build-time index
// (constants.ts) and the client search box so they normalize identically.
export const stripSchemeAndWww = (value: string) =>
  value.replace(/^[a-z][a-z0-9+.-]*:\/\//, '').replace(/^www\./, '')

const TRACKING_QUERY_PARAMS = new Set([
  'fbclid',
  'gclid',
  'gbraid',
  'mc_cid',
  'mc_eid',
  'wbraid'
])

export function normalizeSearchUrl(value: string) {
  const stripped = stripSchemeAndWww(value)
  const hashIndex = stripped.indexOf('#')
  const withoutHash = hashIndex === -1 ? stripped : stripped.slice(0, hashIndex)
  const hash = hashIndex === -1 ? '' : stripped.slice(hashIndex + 1)
  const queryIndex = withoutHash.indexOf('?')

  if (queryIndex === -1) return hash ? `${withoutHash}#${hash}` : withoutHash

  const hostPath = withoutHash.slice(0, queryIndex)
  const params = new URLSearchParams(withoutHash.slice(queryIndex + 1))
  for (const key of [...params.keys()]) {
    if (key.startsWith('utm_') || TRACKING_QUERY_PARAMS.has(key)) {
      params.delete(key)
    }
  }

  const query = params.toString()
  return `${hostPath}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`
}

const safeEnv = (key: string) =>
  typeof process !== 'undefined' ? process.env?.[key] : undefined

// Treat the common falsy spellings as "off", not just the exact string 'false'.
const isFalsy = (val?: string) =>
  ['false', '0', 'no', 'off'].includes((val ?? '').trim().toLowerCase())

if (isFalsy(safeEnv('OSW_BUILD_NSFW') ?? safeEnv('FMHY_BUILD_NSFW'))) {
  meta.build.nsfw = false
}
if (isFalsy(safeEnv('OSW_BUILD_API') ?? safeEnv('FMHY_BUILD_API'))) {
  meta.build.api = false
}

const formatCommitRef = (commitRef: string) =>
  `<a href="https://github.com/YousefMohsen0/OurServersWiki/commit/${commitRef}">${commitRef.slice(0, 8)}</a>`

const cfStart = safeEnv('CF_PAGES_COMMIT_SHA')
const commitStart = safeEnv('COMMIT_REF')

export const commitRef =
  safeEnv('CF_PAGES') && cfStart
    ? formatCommitRef(cfStart)
    : commitStart
      ? formatCommitRef(commitStart)
      : 'dev'

export const feedback = `<a href="/feedback" class="feedback-footer">Made with ❤ thanks to FMHY</a>`

export const socialLinks: DefaultTheme.SocialLink[] = [
  { icon: 'github', link: 'https://github.com/YousefMohsen0/OurServersWiki' }
]

export const nav: DefaultTheme.NavItem[] = [
  { text: '📑 كتالوج', link: '/posts/changelog-sites' },
  { text: '📖 Glossary', link: 'https://rentry.org/The-Piracy-Glossary' },
  {
    text: '🌱 زيادة',
    items: [
      { text: '🌐 بحث', link: '/posts/search' },
      { text: '❓ اسئلة شائعة', link: '/other/FAQ' },
      { text: '🚀 الصفحة الرئيسية', link: '/startpage' },
      { text: '🏞 Wallpapers', link: '/other/wallpapers' },
      { text: '💙 Feedback', link: '/feedback' }
    ]
  }
]

export const sidebar: DefaultTheme.Sidebar | DefaultTheme.NavItemWithLink[] = [
  {
    text: '<span class="i-twemoji:books"></span> دليل المبتدئين',
    link: '/beginners-guide'
  },
  {
    text: '<span class="i-twemoji:newspaper"></span> تحديثات',
    link: '/posts'
  },
  {
    text: '<span class="i-twemoji:light-bulb"></span> مساهمة',
    link: '/other/contributing'
  },
  {
    text: 'الويكي',
    collapsed: false,
    items: [
      {
        text: '<span class="i-twemoji:name-badge"></span> منع الاعلانات / الخصوصية',
        link: '/privacy'
      },
      {
        text: '<span class="i-twemoji:robot"></span> ذكاء اصطناعي / AI',
        link: '/ai'
      },
      {
        text: '<span class="i-twemoji:television"></span> افلام / مسلسلات',
        link: '/video'
      },
      {
        text: '<span class="i-twemoji:musical-note"></span> موسيقى / بودكاست / راديو',
        link: '/audio'
      },
      {
        text: '<span class="i-twemoji:video-game"></span> العاب / محاكاة',
        link: '/gaming'
      },
      {
        text: '<span class="i-twemoji:green-book"></span> كتب / روايات / مانجا',
        link: '/reading'
      },
      {
        text: '<span class="i-twemoji:floppy-disk"></span> التنزيل',
        link: '/downloading'
      },
      {
        text: '<span class="i-twemoji:cyclone"></span> تورنيت / P2P',
        link: '/torrenting'
      },
      {
        text: '<span class="i-twemoji:brain"></span> تعليمي',
        link: '/educational'
      },
      {
        text: '<span class="i-twemoji:mobile-phone"></span> اندرويد',
        link: '/mobile'
      },
      {
        text: '<span class="i-twemoji:shinto-shrine"></span> اوتاكو / انمي',
        link: '/otaku'
      },
      {
        text: '<span class="i-twemoji:file-folder"></span> متنوع',
        link: '/misc'
      }
    ]
  },
  {
    text: 'ادوات',
    collapsed: false,
    items: [
      {
        text: '<span class="i-twemoji:laptop"></span> ادوات النظام',
        link: '/system-tools'
      },
      {
        text: '<span class="i-twemoji:card-file-box"></span> ادوات الملفات',
        link: '/file-tools'
      },
      {
        text: '<span class="i-twemoji:paperclip"></span> ادوات الانترنت',
        link: '/internet-tools'
      },
      {
        text: '<span class="i-twemoji:left-speech-bubble"></span> ادوات وسائل التواصل',
        link: '/social-media-tools'
      },
      {
        text: '<span class="i-twemoji:memo"></span> ادوات النص',
        link: '/text-tools'
      },
      {
        text: '<span class="i-twemoji:alien-monster"></span> ادوات العاب',
        link: '/gaming-tools'
      },
      {
        text: '<span class="i-twemoji:camera"></span> ادوات الصور',
        link: '/image-tools'
      },
      {
        text: '<span class="i-twemoji:videocassette"></span> ادوات الفيديو',
        link: '/video-tools'
      },
      {
        text: '<span class="i-twemoji:speaker-high-volume"></span> ادوات الصوت',
        link: '/audio#audio-tools'
      },
      {
        text: '<span class="i-twemoji:red-apple"></span> ادوات التعليم',
        link: '/educational#educational-tools'
      },
      {
        text: '<span class="i-twemoji:man-technologist"></span> ادوات المطورين',
        link: '/developer-tools'
      }
    ]
  },
  {
    text: 'More',
    collapsed: true,
    items: [
      ...(meta.build.nsfw
        ? [
            {
              text: '<span class="i-twemoji:warning"></span> المواقع غير الآمنة',
              link: '/unsafe'
            }
          ]
        : []),
      {
        text: '<span class="i-twemoji:wastebasket"></span> المواقع المزالة مؤخرًا',
        link: '/recently-removed'
      },
      {
        text: '<span class="i-twemoji:package"></span> تخزين',
        link: '/storage'
      }
    ]
  }
]
