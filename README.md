# OSW - Our Server's Wiki

[![GitHub stars](https://img.shields.io/github/stars/YousefMohsen0/OurServersWiki?style=for-the-badge&logo=github)](https://github.com/YousefMohsen0/OurServersWiki/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/YousefMohsen0/OurServersWiki?style=for-the-badge&logo=github)](https://github.com/YousefMohsen0/OurServersWiki/network/members)
[![Cloudflare](https://img.shields.io/badge/hosted%20on-Cloudflare-F38020?style=for-the-badge&logo=cloudflare)](https://pages.cloudflare.com/)
[![English README](https://img.shields.io/badge/README-English-111827?style=for-the-badge)](README.en.md)

OSW هو نسخة/تفريع من FMHY معمولة عشان تبقى ويكي خاص بسيرفرنا، وركزنا فيها على تنظيم المصادر، سهولة التصفح، وإمكانية أي حد يساهم.

## المشروع ده إيه؟

الريبو ده فيه:

- الموقع الرئيسي بتاع الويكي مبني بـ VitePress
- API/Worker خاص بالـ feedback وبعض الخدمات المساعدة
- إعدادات النشر على Cloudflare Pages وCloudflare Workers
- إعداد Docker عشان تشغل نسخة محلية بسرعة

## الريبو فيه إيه؟

- `docs/`: محتوى الويكي نفسه
- `api/`: الـ Worker/API بتاع المشروع
- `functions/`: وظائف زيادة مرتبطة بالواجهة
- `scripts/`: سكربتات البيلد والتنضيف وتوليد الصفحات
- `Dockerfile` و`docker-compose.yaml`: تشغيل عن طريق Docker

## تشغيله على جهازك

### اللي محتاجه

- Node.js 22 أو أحدث
- pnpm
- Git

### التثبيت والتشغيل

```bash
pnpm install
pnpm docs:dev
```

لو محتاج الـ API محلي كمان:

```bash
pnpm api:dev
```

غالبًا الموقع هيبقى على البورت `5173` والـ API على `3000`.

## Docker

لو عايز تشغل نسخة جاهزة بـ Docker:

```bash
docker compose up --build
```

بعدها افتح:

- `http://localhost:4173`

### ملاحظة مهمة عن Docker

ملف Docker بيبني الويكي بس وبيخدمه عن طريق Nginx. لو محتاج الـ API، فغالبًا هتنشره كـ Worker منفصل أو تشغله محليًا بـ `pnpm api:dev`.

## البيلد قبل النشر

عشان تبني نسخة الإنتاج للموقع:

```bash
pnpm docs:build
```

وعشان تبني الـ API:

```bash
pnpm api:build
```

## النشر

### Cloudflare Pages

ده المكان المناسب لنشر واجهة الويكي الثابتة.

- Build command: `pnpm install --frozen-lockfile && pnpm docs:build`
- Output directory: `docs/.vitepress/dist`
- Path/Root: `/`

### Cloudflare Worker

الـ API بيتنشر لوحده كـ Worker.

```bash
pnpm exec wrangler secret put WEBHOOK_URL
pnpm api:build
pnpm api:deploy
```

## تساهم إزاي

أفضل طريقة عشان تساهم:

1. اعمل fork للريبو.
2. اعمل branch جديد للتغييرات.
3. نفّذ التعديلات عندك محليًا.
4. جرّب البيلد أو التشغيل المحلي.
5. افتح Pull Request واضح يشرح إيه اللي اتغير وليه.

### قبل ما تبعت PR

- اتأكد إن الصفحة شغالة محليًا
- اتأكد إن النصوص والمراجع صح
- متضيفش روابط مش متجربة أو مش مناسبة لمعايير الويكي
- لو التغيير كبير أو هيكلي، ناقشه الأول قبل ما تفتح PR

## تضيف محتوى جديد إزاي

لو عايز تضيف مصادر أو صفحات جديدة:

- اتأكد الأول إن المحتوى مش موجود بالفعل
- بص على ستايل الصفحات الموجودة جوه `docs/`
- حافظ على نفس طريقة التنسيق والترتيب
- اكتب وصف بسيط وواضح

## تبعت Feedback أو تبلغ عن مشكلة إزاي

لو عندك:

- مشكلة في الموقع
- رابط بايظ
- اقتراح إضافة
- تعديل على تصنيف أو ترتيب
- ملاحظة على صفحة معيّنة

فأحسن اختيارات غالبًا هي:

- تفتح Issue على GitHub
- تبعت Feedback من نظام الملاحظات الموجود في المشروع
- أو تكلمني على Discord لو التغيير كبير أو محتاج نقاش

## لو عايز نسخة خاصة بيك

لو ناوي تعمل نسخة باسمك أو لسيرفرك:

1. اعمل fork.
2. غيّر الاسم والبراند والروابط العامة.
3. راجع الصفحات اللي بتشير لـ FMHY أو بدّلها بما يناسب OSW.
4. حدّث إعدادات النشر بتاعتك على GitHub وCloudflare.
5. امسح أو غيّر أي أسرار أو إعدادات مش بتاعتك.

## شكل الشارات والروابط الصغيرة

لو عايز نفس شكل الشارات أو الأزرار الصغيرة اللي فوق في الـ README، ده مثال بسيط:

```md
[![Stars](https://img.shields.io/github/stars/YOUR-OWNER/YOUR-REPO?style=for-the-badge)](https://github.com/YOUR-OWNER/YOUR-REPO/stargazers)
[![Forks](https://img.shields.io/github/forks/YOUR-OWNER/YOUR-REPO?style=for-the-badge)](https://github.com/YOUR-OWNER/YOUR-REPO/network/members)
[![Issues](https://img.shields.io/github/issues/YOUR-OWNER/YOUR-REPO?style=for-the-badge)](https://github.com/YOUR-OWNER/YOUR-REPO/issues)
```

لو عايز شارة لعدد النجوم أو الفorks، بس غيّر `YOUR-OWNER/YOUR-REPO` لاسم الريبو الحقيقي بتاعك.

## لينكات مفيدة

- النسخة الإنجليزية: [README.en.md](README.en.md)
- دليل المساهمة: [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)
- إعدادات النشر: [DEPLOYMENT.md](DEPLOYMENT.md)

## ملاحظة عن الاسم

OSW اختصار لـ Our Server Wiki، وهو تفريع/نسخة مبنية من FMHY ومتظبطة عشان تناسب احتياجنا ومحتوانا الخاص.