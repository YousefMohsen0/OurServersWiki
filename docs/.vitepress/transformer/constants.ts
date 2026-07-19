import { meta } from '../constants'

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
interface Header {
  [file: string]: { title: string; description: string }
}

export const headers: Header = {
  'privacy.md': {
    title: 'منع الاعلانات / الخصوصية',
    description: 'منع الاعلانات, VPNs, Proxies, Antiviruses'
  },
  'ai.md': {
    title: 'ذكاء اصطناعي / AI',
    description: 'شات , كتابة, صور, ادوات شات'
  },
  'mobile.md': {
    title: 'تلفون',
    description: 'برامج, تهكير, محاكي'
  },
  'audio.md': {
    title: 'موسيقى / بودكاست / راديو',
    description: 'استماع, تحميل, تورينت'
  },
  'beginners-guide.md': {
    title: 'دليل المبتدئين',
    description: 'دليل للمبتدئين + الأسئلة الشائعة'
  },
  'downloading.md': {
    title: 'تحميل',
    description: 'مواقع التحميل, تحميل البرامج'
  },
  'educational.md': {
    title: 'تعليمي',
    description: 'دورات, أفلام وثائقية, مصادر تعلم'
  },
  'gaming.md': {
    title: 'العاب / محاكاة',
    description: 'تحميل الالعاب, ROMs, ادوات العاب, محاكيات'
  },
  'misc.md': {
    title: 'متنوع',
    description: 'اضافات, Indexes, اخبار, صحة'
  },
  'nsfwpiracy.md': {
    title: 'NSFW',
    description: 'NSFW Indexes, Streaming, Downloading'
  },
  'reading.md': {
    title: 'كتب / كوميكس / مانجا',
    description: 'كتب, كوميكس, مانجا, روايات, كتب صوتية'
  },
  'gaming-tools.md': {
    title: 'ادوات العاب',
    description: 'ادوات العاب, Game Launchers, Multiplayer'
  },
  'developer-tools.md': {
    title: 'ادوات المطورين',
    description: 'Git, Hosting, App Dev, Software Dev'
  },
  'image-tools.md': {
    title: 'ادوات الصور',
    description: 'معدل الصور, ai الصور, ضغط الصور'
  },
  'audio-tools.md': {
    title: 'ادوات الصوت',
    description: 'مشغلي الصوت, تعديل الصوت, تحميل الصوت'
  },
  'system-tools.md': {
    title: 'ادوات النظام',
    description: 'ادوات النظام, ادوات الهاردوير, Windows ISOs, التخصيص'
  },
  'file-tools.md': {
    title: 'ادوات الملفات',
    description: 'مدير التحميل, استضافة الملفات, أرشيف الملفات'
  },
  'video-tools.md': {
    title: 'ادوات الفيديو',
    description: 'مشغلات الفيديو, محررات الفيديو, البث المباشر, الرسوم المتحركة'
  },
  'text-tools.md': {
    title: 'ادوات النص',
    description: 'محررات النص, Pastebins, الخطوط, المترجمات'
  },
  'internet-tools.md': {
    title: 'ادوات الانترنت',
    description: 'متصفحات, Extensions, محركات بحث'
  },
  'social-media-tools.md': {
    title: 'ادوات التواصل الاجتماعي',
    description: 'ادوات Discord, ادوات Reddit, ادوات YouTube'
  },
  'storage.md': {
    title: 'تخزين',
    description: 'الصفحة كبير علي انها تتحط في الصفحة الرئيسية'
  },
  'torrenting.md': {
    title: 'نورنت',
    description: 'برامج تورينت, مواقع تورينت, Trackers'
  },
  'video.md': {
    title: 'افلام / مسلسلات',
    description: 'بث الفيديو, تحميل الفيديو, تورينت الفيديو'
  },
  'otaku.md': {
    title: 'اوتاكو',
    description: 'كل ما يخص الاوتاكو من انمي و مانجا و اخبار'
  },
  'base64.md': {
    title: 'Base64',
    description: 'Base64 storage'
  },
  'unsafe.md': {
    title: 'المواقع غير الآمنة',
    description: 'المواقع غير الآمنة.'
  },
  'recently-removed.md': {
    title: 'المواقع المزالة مؤخرًا',
    description: 'قائمة بالمواقع المزالة مؤخرًا من الwiki.'
  }
} as const

export const excluded = [
  'readme.md',
  'single-page',
  'feedback.md',
  'index.md',
  'sandbox.md',
  'startpage.md'
]

export function getHeader(id: string) {
  const title =
    '<div dir="rtl" class="space-y-2 not-prose"><h1 class="text-4xl font-extrabold tracking-tight text-primary underline lg:text-5xl lg:leading-[3.5rem]">'

  const description = '<p class="text-black dark:text-text-2">'

  const feedback = meta.build.api ? '<Feedback />' : ''

  const data = headers[id]
  let header = '---\n'
  header += `title: "${data.title}"\n`
  header += `description: ${data.description}\n`
  header += '---\n'
  header += `${title}${data.title}</h1>\n`
  header += `${description}${data.description}</p></div>\n\n${feedback}\n\n`
  return header
}
