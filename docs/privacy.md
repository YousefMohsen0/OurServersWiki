<div dir="rtl">

# ► حجب الإعلانات

::: tip
* **ملحوظة** - مواقع كتير فيها إعلانات أو نوافذ منبثقة أو تحويلات، عشان كده بننصحك جدًا تستخدم مانع إعلانات. ما تشغلش كذا مانع إعلانات عام مع بعض (زي uBlock Origin و AdGuard) عشان [تتجنب الأعطال](https://x.com/gorhill/status/1033706103782170625). ينفع تجمع بين مانعات الإعلانات العامة وأدوات زي SponsorBlock. وبرضه خد بالك إن النسخة الكاملة من uBO أحسن بكتير من النسخة الخفيفة.
:::

***

* ↪️ **[حاجبات إعلانات Spotify](/audio#spotify-tools)**
* ↪️ **[حاجبات إعلانات Twitch](/social-media-tools#twitch-adblockers)**
* ↪️ **[تخطي تحويلات الروابط](/internet-tools#redirect-bypass)**
* ↪️ **[تخطي الحوائط المدفوعة للمقالات](/internet-tools#paywall-bypass)**
* ⭐ **[uBlock Origin](https://github.com/gorhill/uBlock)**، [AdGuard](https://github.com/AdguardTeam/AdguardBrowserExtension) أو [uBO Lite](https://github.com/uBlockOrigin/uBOL-home) (MV3) / [ملحوظة](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/ubo-lite.md) - مانعات إعلانات / [إضافات مالهاش لازمة](https://github.com/arkenfox/user.js/wiki/4.1-Extensions/#-dont-bother)
* ⭐ **الإبلاغ عن المشاكل** - [uAssets](https://github.com/uBlockOrigin/uAssets/issues) / [Hosts](https://github.com/uBlockOrigin/uAssets/discussions/27472) / [AdGuard](https://reports.adguard.com/new_issue.html) / [EasyList](https://github.com/easylist/easylist/issues)
* ⭐ **[SponsorBlock](https://sponsor.ajay.app/)** - تخطي إعلانات يوتيوب الممولة / [X](https://x.com/SponsorBlock) / [Subreddit](https://www.reddit.com/r/SponsorBlock/) / [Discord](https://discord.gg/SponsorBlock) / [GitHub](https://github.com/ajayyy/SponsorBlock)
* ⭐ **أدوات SponsorBlock** - [Bookmarklet](https://github.com/mchangrh/sb.js) / [Script](https://greasyfork.org/en/scripts/453320) / [Ports](https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports) / [Database](https://sb.ltn.fi/) / [Chromecast](https://github.com/gabe565/CastSponsorSkip)
* [Disblock Origin](https://codeberg.org/AllPurposeMat/Disblock-Origin) أو [Discord Adblock](https://codeberg.org/ridge/Discord-AdBlock) - إخفاء Nitro و Boost Ads بتوع Discord
* [Popup Blocker (strict)](https://github.com/schomery/popup-blocker)، [Popupblocker All](https://addons.mozilla.org/firefox/addon/popupblockerall/) / [2](https://chromewebstore.google.com/detail/popupblocker/doklmegfghlnanggfgligimnnikiekde) أو [PopUpOFF](https://popupoff.org/) - حاجبات النوافذ المنبثقة / [Userscript](https://github.com/AdguardTeam/PopupBlocker)
* [BehindTheOverlay](https://github.com/NicolaeNMV/BehindTheOverlay) - إخفاء الطبقات اللي بتغطي الموقع
* [BilibiliSponsorBlock](https://www.bsbsb.top/) - تخطي إعلانات Bilibili الممولة / [GitHub](https://github.com/hanydd/BilibiliSponsorBlock)

***

## ▷ فلاتر حجب الإعلانات

::: tip
* **ملحوظة** - راجع فلاتر uBO الإضافية من الإعدادات الأول قبل ما تجرب أي قوائم فلترة من طرف تالت.
:::

***

* 🌐 **[FilterLists](https://filterlists.com/)** - دليل لقوائم الفلاتر والهوست ليست
* ⭐ **[LegitimateURLShortener](https://raw.githubusercontent.com/DandelionSprout/adfilt/refs/heads/master/LegitimateURLShortener.txt)** - قواعد تنظيف باراميترات الروابط / تتستخدم مع حماية تتبع الروابط في AdGuard
* ⭐ **[Hagezi Blocklists](https://github.com/hagezi/dns-blocklists)** / [2](https://gitlab.com/hagezi/mirror) - تجميعة بلوك ليست / استخدم النسخ Mini / [ملحوظة](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/hagezi.md)
* [blacklist](https://github.com/anudeepND/blacklist) - تجميعة بلوك ليست / [ملحوظة عن الـ whitelist](https://github.com/anudeepND/blacklist#common-issues)
* [FMHY Filterlist](https://github.com/fmhy/FMHYFilterlist) - فلتر للمواقع غير الآمنة
* [AI uBlock Blacklist](https://github.com/alvi-se/ai-ublock-blacklist) - بيمنع المواقع المولدة بالذكاء الاصطناعي
* [⁠Huge AI Blocklist](https://github.com/laylavish/uBlockOrigin-HUGE-AI-Blocklist) - بيشيل صور الذكاء الاصطناعي من محركات البحث 

***

## ▷ حجب الإعلانات من الـ DNS

::: tip
* **ملحوظة** - لو هدفك إنك تمنع إعلانات المتصفح، الأفضل تفضل على uBlock Origin بس، لأن الفلاتر الإضافية ممكن تعمل تعارضات أو anti-adblock.
:::

***

* 🌐 **[DNS Providers](https://adguard-dns.io/kb/general/dns-providers/)** - دليل لمزوّدي DNS
* ↪️ **[Free DNS Resolvers](/storage#free-dns-resolvers)**
* ⭐ **[Pi-Hole](https://pi-hole.net/)** - حجب إعلانات DNS مستضاف عندك / [X](https://x.com/The_Pi_Hole) / [Subreddit](https://reddit.com/r/pihole/) / [GitHub](https://github.com/pi-hole)
* ⭐ **أدوات Pi-Hole** - [Filters](https://firebog.net/)، [2](https://github.com/zachlagden/Pi-hole-Optimized-Blocklists) / [Tray App](https://github.com/PinchToDebug/Pihole-Tray/) / [Android Server](https://github.com/DesktopECHO/Pi-hole-for-Android) (root)
* ⭐ **[AdGuard Home](https://adguard.com/en/adguard-home/overview.html)** - حجب إعلانات DNS مستضاف عندك / [Balena-AdGuard](https://github.com/klutchell/balena-adguard) / [X](https://x.com/adguard) / [Subreddit](https://reddit.com/r/Adguard) / [Telegram](https://t.me/adguarden) / [GitHub](https://github.com/AdguardTeam/AdGuardHome)
* ⭐ **[Mullvad DNS](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/)** - حجب/فلترة DNS / [Extension](https://mullvad.net/en/download/browser/extension) / [GitHub](https://github.com/mullvad)
* [DNS Speed Test](https://dnsspeedtest.online/) / [GitHub](https://github.com/BrainicHQ/DoHSpeedTest)، [DNS Perf](https://dnsperf.com/dns-speed-benchmark) أو [NameBench](https://code.google.com/archive/p/namebench/) - اختبارات سرعة DNS
* [YogaDNS](https://yogadns.com/) - عميل DNS مخصص لويندوز
* [NextDNS](https://nextdns.io) - خدمة حجب DNS قابلة للتخصيص / [Guide](https://github.com/yokoffing/NextDNS-Config) / [Video](https://youtu.be/WUG57ynLb8I) / [GitHub](https://github.com/nextdns/nextdns)
* [LibreDNS](https://libredns.gr/) - حجب DNS / [GitLab](https://gitlab.com/libreops/libredns)
* [Tiarap](https://doh.tiar.app/) - حجب DNS / [GitHub](https://github.com/pengelana/blocklist)
* [Rethink DNS](https://rethinkdns.com/configure) - حجب DNS / [Subreddit](https://www.reddit.com/r/rethinkdns/) / [Telegram](https://t.me/rethinkdns)
* [DNSWarden](https://dnswarden.com/) - حجب DNS / [GitHub](https://github.com/bhanupratapys/dnswarden)
* [Blocky](https://0xerr0r.github.io/blocky/latest/) - حجب DNS / [GitHub](https://github.com/0xERR0R/blocky)
* [AdGuard DNS](https://adguard-dns.io/) - خدمة حجب DNS قابلة للتخصيص / [X](https://x.com/adguard) / [Subreddit](https://reddit.com/r/Adguard) / [Telegram](https://t.me/adguarden)
* [Control D](https://controld.com/free-dns) - خدمة حجب DNS قابلة للتخصيص / [X](https://x.com/controldns) / [Subreddit](https://reddit.com/r/ControlD/) / [Discord](https://discord.gg/dns)
* [NxFilter](https://nxfilter.org/) - حجب DNS مستضاف عندك وقابل للتخصيص / [Subreddit](https://reddit.com/r/nxfilter)
* [TBlock](https://tblock.me/) - عميل حجب DNS / [Source Code](https://codeberg.org/tblock/tblock)
* [Diversion](https://diversion.ch/) - مدير حجب إعلانات لراوترات Asuswrt-Merlin
* [Phishing Army](https://phishing.army/) - بلوك ليست DNS لمواقع التصيّد / [X](https://x.com/PhishingArmy)
* [Technitium](https://technitium.com/dns) - سيرفر DNS مستضاف عندك / [Subreddit](https://reddit.com/r/technitium/) / [GitHub](https://github.com/TechnitiumSoftware/DnsServer)

***

## ▷ فلاتر DNS

* ⭐ **[Hagezi Blocklists](https://github.com/hagezi/dns-blocklists)** - بلوك ليست دومينات من كذا مصدر / استخدم النسخة الكاملة / [ملحوظة](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/hagezi.md)
* ⭐ **[OISD](https://oisd.nl/)** - بلوك ليست دومينات من كذا مصدر / [GitHub](https://github.com/sjhgvr/oisd)
* [hBlock](https://github.com/hectorm/hblock)
* [Hosts File Aggregator](https://github.com/StevenBlack/hosts)
* [Spamhaus](https://www.spamhaus.org/blocklists/) / [X](https://x.com/spamhaus)
* [black-mirror](https://github.com/T145/black-mirror)
* [Scam Blocklist](https://github.com/durablenapkin/scamblocklist)
* [neodevhost](https://github.com/neodevpro/neodevhost)
* [1Hosts](https://o0.pages.dev/) / [2](https://badmojr.github.io/1Hosts/) / [GitHub](https://github.com/badmojr/1Hosts)

***

## ▷ [حجب الإعلانات على لينكس](/system-tools#adblock-privacy)

***

## ▷ [حجب الإعلانات على ماك](/system-tools#mac-adblock-privacy)

***

## ▷ [حجب الإعلانات على أندرويد](/privacy#android-adblocking)

***

## ▷ [حجب الإعلانات على iOS](/privacy#ios-adblocking)

***

# ► مضادات الفيروسات / مكافحة البرمجيات الخبيثة

::: tip
* **ملحوظة** - الأفضل تسيب الحماية اللحظية في Windows Defender شغالة. لو لقيت اكتشافات غلط على ملفات زي الباتشات، تقدر تختار ‘Allow on device’، أو تستبعد الملف من ‘Exclusions’ لو طلع False Positive. [معلومات أكتر](https://wispydocs.pages.dev/windows/#antivirus).
:::

***

* ↪️ **[Virtual Machines](/system-tools#virtual-machines)**
* ⭐ **[Malwarebytes](https://www.malwarebytes.com/)** / [X](https://x.com/malwarebytes) أو [ESET](https://rentry.co/FMHYB64#eset) - مضاد فيروسات
* ⭐ **[AdwCleaner](https://www.malwarebytes.com/adwcleaner/)** - ضد الـ Adware / [X](https://x.com/malwarebytes)
* ⭐ **[Triage](https://tria.ge/)**، [ANY.RUN](https://any.run/) / [Discord](https://discord.gg/anyrun) / [Note](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/anyrun-note.md) أو [Cuckoo](https://cuckoo.cert.ee/) / [2](https://sandbox.pikker.ee/) - Sandboxes أونلاين
* ⭐ **[Security / Antivirus Multireddit](https://www.reddit.com/user/goretsky/m/security/)** - مجتمعات Reddit
* ⭐ **[FMHY SafeGuard](https://fmhy.github.io/FMHY-SafeGuard/)** - بيكشف إذا كان الموقع الحالي موثوق أو لأ / [GitHub](https://github.com/fmhy/FMHY-SafeGuard)
* [BleepingComputer](https://www.bleepingcomputer.com/forums/f/22/virus-trojan-spyware-and-malware-removal-help/)، [Malwarebytes Forums](https://forums.malwarebytes.com/forum/7-windows-malware-removal-help-support/) أو [Sysnative](https://www.sysnative.com/forums/forums/security-arena.66/) - منتديات إزالة المالوير / [ملحوظة](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/malware-removal-forums.md)
* [⁠rifteyy](https://rifteyy.org/) - أدلة ومقالات لإزالة المالوير
* [Sandboxie Plus](https://sandboxie-plus.com/) - بيئة Sandbox / [Guide](https://clarasguide.valeena.workers.dev/Guides/sandboxie-guide/) / [GitHub](https://github.com/sandboxie-plus/Sandboxie)
* [Windows Sandbox](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview) - بيئة Sandbox كاملة داخل آلة افتراضية
* [Dangerzone](https://dangerzone.rocks/) - تحويل ملفات PDF الخبيثة لملفات آمنة / [GitHub](https://github.com/freedomofpress/dangerzone)
* [⁠Ransomware.live](https://www.ransomware.live/) - مراقب مباشر للـ Ransomware
* [No More Ransom](https://www.nomoreransom.org/en/decryption-tools.html) - أدوات فك تشفير الـ Ransomware
* [ID Ransomware](https://id-ransomware.malwarehunterteam.com/) - أداة تحديد نوع الـ Ransomware
* [ConfigureDefender](https://github.com/AndyFul/ConfigureDefender) - ضبط إعدادات Windows Defender

***

## ▷ فاحصات الملفات

* 🌐 **[The Second Opinion](https://jijirae.github.io/thesecondopinion/index.html)** - فاحصات مالوير محمولة / أدوات إزالة / [GitHub](https://github.com/jijirae/thesecondopinion/)
* ⭐ **[VirusTotal](https://www.virustotal.com/)** / [Scan Results Guide](https://clarasguide.valeena.workers.dev/Guides/vtguide/) أو **[Hybrid Analysis](https://hybrid-analysis.com/)** - فاحص ملفات أونلاين
* ⭐ **أدوات VirusTotal** - [CLI](https://github.com/VirusTotal/vt-cli) / [Uploader](https://github.com/SamuelTulach/VirusTotalUploader) / [Lite Version](https://www.virustotal.com/old-browsers/)
* [⁠Threat Insights Portal](https://www.threat.rip/) - فاحص ملفات أونلاين / محتاج تسجيل / [Discord](https://discord.com/invite/p2YbdzJ6f2)
* [Jotti](https://virusscan.jotti.org/en) - فاحص ملفات أونلاين
* [Filescan.io](https://www.filescan.io/) أو [⁠MetaDefender Cloud](https://metadefender.com/) - فاحص ملفات أونلاين / [X](https://x.com/filescan_itsec) / [GitHub](https://github.com/filescanio)
* [Farbar](https://www.bleepingcomputer.com/download/farbar-recovery-scan-tool/) - فاحص ملفات محلي / [Guide](https://www.bleepingcomputer.com/forums/t/781976/)
* [Microsoft Safety Scanner](https://learn.microsoft.com/en-us/defender-endpoint/safety-scanner-download) - فاحص AV عند الطلب
* [Manalyzer](https://manalyzer.org/) - فاحص لملفات PE / [GitHub](https://github.com/JusticeRage/Manalyze)
* [YARA](https://virustotal.github.io/yara/) - أداة لتحديد المالوير / [GitHub](https://github.com/virustotal/yara)
* [Winitor](https://www.winitor.com/) - تقييم لملفات EXE المشبوهة
* [pyWhat](https://github.com/bee-san/pyWhat) - يعرّف أي حاجة / [Discord](https://discord.com/invite/zYTM3rZM4T)
* [Grype](https://github.com/anchore/grype) - فاحص ثغرات لصور الحاويات

***

## ▷ التحقق من موثوقية المواقع

* ⭐ **[URL Void](https://www.urlvoid.com/)** - فحص بـ 35 محرك بلوك ليست
* ⭐ **[URLScan](https://urlscan.io/)** - تقرير مفصل / API
* ⭐ **[Trend Micro](https://global.sitesafety.trendmicro.com/)** - تقييم أمان أساسي / وسوم المحتوى
* [ScamAdviser](https://www.scamadviser.com/) - درجة الثقة
* [IsLegitSite](https://www.islegitsite.com/) - فحص بـ 9 محركات بلوك ليست
* [ZScaler](https://zulu.zscaler.com/)
* [Talos](https://talosintelligence.com/) - تقييم السمعة / وسوم المحتوى / علامة بلوك ليست

***

# ► الخصوصية / الأمان

* ↪️ **[SMS Verification Sites](/storage#sms-verification-sites)**
* ↪️ **[File Encryption](/file-tools#file-encryption)**
* ↪️ **[Drive Formatting / File Deletion](/file-tools#formatting-deletion)**
* ↪️ **[Photo Forensics / Metadata](/image-tools#photo-forensics-metadata)**
* ↪️ **[أنظمة أندرويد مركزة على الخصوصية](/privacy#operating-systems)**
* ⭐ **[Whonix](https://www.whonix.org/)** / [Subreddit](https://www.reddit.com/r/Whonix) / [X](https://twitter.com/Whonix) / [Telegram](https://t.me/s/Whonix) / [GitHub](https://github.com/Whonix)، **[Qubes](https://www.qubes-os.org/)** / [Subreddit](https://www.reddit.com/r/Qubes) / [X](https://twitter.com/QubesOS) / [GitHub](https://github.com/QubesOS) أو **[Tails](https://tails.net/)** / [X](https://twitter.com/Tails_live) / [Telegram](https://t.me/torproject) / [GitHub](https://github.com/torproject) - أنظمة تشغيل مركزة على الخصوصية
* [W10Privacy](https://www.w10privacy.de/english-home/) - أدوات للخصوصية وحماية البيانات
* [Telemetry.md](https://gist.github.com/ave9858/a2153957afb053f7d0e7ffdd6c3dcb89) - تعطيل Telemetry في Windows 10/11
* [Agent DVR](https://www.ispyconnect.com/) / [Subreddit](https://www.reddit.com/r/ispyconnect/)، [Frigate](https://frigate.video/) / [GitHub](https://github.com/blakeblackshear/frigate)، [Smart Sec Cam](https://github.com/scottbarnesg/smart-sec-cam) أو [ZoneMinder](https://zoneminder.com/) / [Discord](https://discord.gg/tHYyP9k66q) / [GitHub](https://github.com/ZoneMinder/ZoneMinder/) - أنظمة كاميرات أمان
* [⁠go2rtc](https://github.com/AlexxIT/go2rtc) - جسر لكاميرات الأمان + مدير للستريمات
* [Team Elite](https://www.te-home.net/) - برامج أمان
* [YourDigitalRights](https://yourdigitalrights.org/) - يساعدك تخلي الجهات تمسح بياناتك الشخصية
* [Big Ass Data Broker Opt-Out List](https://github.com/yaelwrites/Big-Ass-Data-Broker-Opt-Out-List)، [⁠Serus](https://www.serus.ai/) أو [⁠Data Broker Watch](https://databrokerswatch.org/) - طرق إزالة بياناتك من وسطاء البيانات والانسحاب منهم
* [⁠DataRequests](https://www.datarequests.org/) - مولد طلبات GDPR / أدوات / [GitHub](https://github.com/datenanfragen)
* [Surfer Protocol](https://github.com/Surfer-Org/Protocol) - أداة لتصدير بيانات المستخدم عبر منصات متعددة / [Discord](https://discord.gg/5KQkWApkYC)
* [GnuPG](https://gnupg.org/) - أداة لتشفير البيانات والتواصل / [Installer](https://www.gpg4win.org/) / [Key Manager](https://github.com/orhun/gpg-tui)
* [PrivNote](https://privnote.com/)، [PrivateBin](https://privatebin.net/)، [SafeNote](https://safenote.co/) / [GitHub](https://github.com/devrolabs)، [Burn.Link](https://burn.link/)، [ThisLinkWillSelfDestruct](https://thislinkwillselfdestruct.com/)، [s.cr](https://s.cr/)، [Yopass](https://yopass.se/) / [GitHub](https://github.com/jhaals/yopass)، [Hemmelig](https://hemmelig.app/) / [GitHub](https://github.com/HemmeligOrg/Hemmelig.app)، [Burn My Note](https://www.burnmynote.link/) أو [OneTimeSecret](https://onetimesecret.com/) / [GitHub](https://github.com/onetimesecret/onetimesecret) - رسائل وملحوظات بتتمسح لوحدها
* [⁠Portable Secret](https://alcazarsec.github.io/portable-secret/) - ملفات HTML مستقلة بتفك التشفير محليًا في المتصفح / [GitHub](https://github.com/alcazarsec/portable-secret)
* [Forensic Focus](https://www.forensicfocus.com/forums/) - منتديات نقاش في الأدلة الجنائية الرقمية / [Discord](https://discord.gg/97zKvTXHeS)
* [SurveillanceWatch](https://www.surveillancewatch.io/) - علاقات شركات المراقبة
* [ALPR Watch](https://alprwatch.org/)، [⁠FlockHopper](https://dontgetflocked.com/) أو [DeFlock](https://deflock.org/) / [Discord](https://discord.gg/aV7v4R3sKT) / [GitHub](https://github.com/FoggedLens/deflock) - خرائط وكاميرات قراءة لوحات السيارات المدعومة بالذكاء الاصطناعي / ALPR
* [EyesOnFlock](https://eyesonflock.com/) - قاعدة بيانات ومتابعة لمراقبة Flock
* [Have I Been Flocked?](https://haveibeenflocked.com/) - اتأكد إذا كانت لوحتك اتسجلت عند Flock
* [ALPR Watch](https://alpr.watch/) - يتابع اجتماعات تقنيات المراقبة في الحكومات المحلية
* [People Over Papers](https://iceout.org/en/) أو [ICE Map](https://www.icemap.dev/) - معلومات وخرائط عن نشاط ICE
* [If An Agent Knocks](https://docs.google.com/document/d/176Yds1p63Q3iaKilw0luChMzlJhODdiPvF2I4g9eIXo/) - أفضل الممارسات لو اتواصل معاك عملاء

***

## ▷ فهارس الخصوصية

* ⭐ **[The Hitchhiker’s Guide](https://anonymousplanet.net/)** - دليل لإخفاء الهوية أونلاين / [GitHub](https://github.com/Anon-Planet/thgtoa)
* ⭐ **[The OPSEC Bible](http://opbible7nans45sg33cbyeiwqmlp5fu7lklu6jd6f3mivrjeqadco5yd.onion/)** (.onion)، [2](https://bible.beginnerprivacy.com/opsec/) - دليل لإخفاء الهوية أونلاين
* ⭐ **[Surveillance Self-Defense](https://ssd.eff.org/)** - دليل تعليمي
* ⭐ **[The New Oil](https://thenewoil.org/)** - دليل تعليمي / [GitHub](https://github.com/tnonate/thenewoil)
* ⭐ **[No Trace](https://www.notrace.how/)** - دليل تعليمي / [.onion](http://i4pd4zpyhrojnyx5l3d2siauy4almteocqow4bp2lqxyocrfy6prycad.onion/)
* ⭐ **[Awesome Privacy](https://awesome-privacy.xyz/)** / [GitHub](https://github.com/lissy93/awesome-privacy)، [Awesome Security Hardening](https://github.com/decalage2/awesome-security-hardening) أو [pluja's Awesome Privacy](https://pluja.github.io/awesome-privacy/) / [GitHub](https://github.com/pluja/awesome-privacy) - تطبيقات وخدمات للخصوصية
* ⭐ **[Privacy Guides](https://www.privacyguides.org/)**، [2](https://privacyguides.github.io/privacyguides.org/)، [3](https://privacyguides-org-production.b-cdn.net/en/) - دليل تعليمي / [Discuss](https://discuss.privacyguides.net/) / [.onion](http://www.xoe4vn5uwdztif6goazfbmogh6wh5jc4up35bqdflu6bkdc5cas5vjqd.onion/) / [Matrix](https://matrix.to/#/#privacyguides:matrix.org) / [GitHub](https://github.com/privacyguides/privacyguides.org)
* ⭐ **[Consumer Rights Wiki](https://consumerrights.wiki/)** - بيوثق ممارسات بتأثر على حقوق المستهلك / [Extension](https://github.com/FULU-Foundation/CRW-Extension) / [Discord](https://discord.gg/8w5rSNAXRf)
* [Digital Defense](https://digital-defense.io/) - checklist شخصية للخصوصية والأمان / [GitHub](https://github.com/lissy93/personal-security-checklist)
* [Defensive Computing Checklist](https://defensivecomputingchecklist.com/) - دليل تعليمي
* [⁠Whonix Wiki](https://www.whonix.org/wiki) - دليل تعليمي / [Forum](https://forums.whonix.org/)
* [⁠Kicksecure Wiki](https://www.kicksecure.com/wiki) - دليل تعليمي / [Forum](https://forums.kicksecure.com/)
* [OPSEC guide](https://whos-zycher.github.io/opsec-guide/) - دليل تعليمي
* [PrivSec](https://privsec.dev/) - دليل تعليمي / [GitHub](https://github.com/PrivSec-dev)
* [Beginner Privacy](https://beginnerprivacy.com/) - دليل للمبتدئين في الخصوصية / checklist / [Mastodon](https://mastodon.social/@BeginnerPrivacy) / [Source Code](https://codeberg.org/BeginnerPrivacy) / [GitHub](https://github.com/beginnerprivacy/beginnerprivacy.com)
* [Hostux](https://hostux.network/) - أدوات خصوصية / [Source Code](https://git.hostux.net/valere/hostux.network)
* [Privacy Settings](https://github.com/StellarSand/privacy-settings) - أدلة لإعدادات الخصوصية
* [Privacy Not Included](https://www.mozillafoundation.org/en/privacynotincluded/) - تقييمات خصوصية المنتجات
* [EncryptedList](https://encryptedlist.xyz/) - قائمة خدمات/تطبيقات مشفرة
* [Awesome Vehicle Security](https://github.com/jaredthecoder/awesome-vehicle-security) - مصادر لأمان المركبات

***

## ▷ أمان الشبكات

* ⭐ **[Safing Portmaster](https://safing.io/)** - مراقب شبكة / DNS Resolver / Firewall / [X](https://twitter.com/SafingIO) / [Discord](https://discord.com/invite/9ScnccuXaZ) / [GitHub](https://github.com/safing)
* [I2P](https://geti2p.net/en/) - طبقة شبكة خاصة ومشفرة / [Client](https://i2pd.website/) / [Subreddit](https://www.reddit.com/r/i2p/) / [GitLab](https://i2pgit.org/)
* [Freenet](https://freenet.org/) - ويب P2P لامركزي / [GitHub](https://github.com/freenet/web)
* [Hyphanet](https://www.hyphanet.org/) - ويب P2P لامركزي / [GitHub](https://github.com/hyphanet)
* [⁠RustNet](https://github.com/domcyrus/rustnet) - واجهة TUI لمراقبة الشبكة
* [Simplewall](https://github.com/henrypp/simplewall) - Firewall
* [Fort](https://github.com/tnodir/fort) - Firewall
* [WFC](https://www.binisoft.org/wfc.php) - Firewall

***

## ▷ [خصوصية لينكس](/system-tools#adblock-privacy)

***

## ▷ [خصوصية ماك](/system-tools#mac-adblock-privacy)

***

## ▷ [خصوصية أندرويد](/privacy#android-privacy)

***

## ▷ [خصوصية iOS](/privacy#ios-privacy)

***

## ▷ خصوصية الويب

* 🌐 **[Google Alt List](https://www.techspot.com/article/2752-all-google-alternatives/)**، [r/degoogle](https://www.reddit.com/r/degoogle) أو [No More Google](https://nomoregoogle.com/) - بدائل لتطبيقات Google
* ↪️ **[Encode / Decode URLs](/text-tools#encode-decode)**
* ⭐ **[PrivacySpy](https://privacyspy.org/)** / [GitHub](https://github.com/politiwatch/privacyspy) أو [ToS;DR](https://tosdr.org/) / [Discord](https://discord.gg/tosdr) / [GitHub](https://github.com/tosdr) - سياسات الخصوصية للمواقع
* ⭐ **[JustDeleteMe](https://justdeleteme.xyz/)** / [GitHub](https://github.com/jdm-contrib/jdm) أو [JustDeleteAccount](https://www.justdeleteaccount.com/) - تلاقي أو تمسح الحسابات القديمة
* [Phish Report](https://phish.report/)، [OpenPhish](https://openphish.com/)، [Netcraft Report](https://report.netcraft.com/report)، [isitPhishing](https://isitphishing.org/)، [PhishStats](https://phishstats.info/) / [Telegram](https://t.me/joinchat/AAAAAElZRwd0aBrYTaHHcQ) / [GitHub](https://github.com/eschultze/phishstats-api-network) أو [PhishTank](https://phishtank.org/) - الإبلاغ عن مواقع التصيّد
* [DNS Jumper](https://www.sordum.org/7952/dns-jumper-v2-3/) - مبدل DNS
* [⁠OnionHop](https://www.onionhop.de/) - عميل شبكة Tor / Onion Routing / [GitHub](https://github.com/center2055/OnionHop)
* [tweetXer](https://github.com/lucahammer/tweetXer) - حذف منشورات X.com
* [delete-likes-from-x-com.md](https://gist.github.com/aymericbeaumet/d1d6799a1b765c3c8bc0b675b1a1547d) - حذف لايكات / مفضلات X.com
* [Power Delete Suite](https://github.com/j0be/PowerDeleteSuite) - حذف تلقائي لمنشورات Reddit

***

## ▷ خصوصية المتصفح

* 🌐 **[Browser Privacy Guides](https://www.privacyguides.org/en/desktop-browsers)** - أدلة خصوصية وإعداد المتصفح
* ↪️ **[Browser Comparisons](/internet-tools#browser-tools)**
* ↪️ **[Android Privacy Browsers](/internet-tools#android-browsers)**
* ⭐ **[Tor Browser](https://www.torproject.org/)**، [2](https://tor.eff.org/) - متصفح بتوجيه Onion / [TG Downloads / Bridges](https://t.me/torproject) / [.onion](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/) / [GitLab](https://gitlab.torproject.org/tpo/applications/tor-browser)
* ⭐ **[Mullvad Browser](https://mullvad.net/en/browser)** - فورك من Tor Browser (من غير شبكة Tor) / [GitHub](https://github.com/mullvad)
* ⭐ **[arkenfox](https://github.com/arkenfox/user.js)** - تعديلات خصوصية لفايرفوكس / [Video](https://youtu.be/F7-bW2y6lcI) / [GUI](https://arkenfox.github.io/gui/) / [Warning](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/general-tweak-warning.md)
* ⭐ **[LibreWolf](https://librewolf.net/)** - نسخة فايرفوكس مخصصة ومركزة على الخصوصية / [Auto-Updater](https://github.com/ltguillaume/librewolf-winupdater)، [2](https://codeberg.org/ltguillaume/librewolf-winupdater) / [Subreddit](https://www.reddit.com/r/LibreWolf) / [Source Code](https://codeberg.org/librewolf)
* [⁠Phoenix](https://codeberg.org/celenity/Phoenix) - تعديل خصوصية لفايرفوكس / [GitHub](https://github.com/celenityy/Phoenix) / [Warning](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/general-tweak-warning.md)
* [Brave Browser](https://brave.com/) - متصفح Chromium مع خصوصية / [Debloat / Hardening](https://github.com/ChaoticSi1ence/SlimBrave-Neo) / [Subreddit](https://www.reddit.com/r/brave_browser/) / [GitHub](https://github.com/brave/brave-browser)
* [Encrypted SNI](https://www.cloudflare.com/ssl/encrypted-sni/) - اختبار Cloudflare للمتصفح
* [⁠Disable JavaScript](https://disable-javascript.org/) - دليل لتعطيل JavaScript / ممكن يكسر مواقع / محتاج Whitelist

***

## ▷ خصوصية كلمات السر / 2FA

* 🌐 **[2FA Directory](https://2fa.directory/)** - قائمة بالمواقع اللي بتدعم 2FA / [GitHub](https://github.com/2factorauth/twofactorauth)
* ↪️ **[Password Managers](/internet-tools#password-managers)**
* ⭐ **[Ente Auth](https://ente.com/auth/)** - 2FA / كل المنصات / [X](https://x.com/enteio) / [Subreddit](https://reddit.com/r/enteio) / [Discord](https://discord.gg/z2YVKkycX3) / [GitHub](https://github.com/ente-io/ente)
* ⭐ **[Aegis](https://getaegis.app/)** - 2FA / أندرويد / [GitHub](https://github.com/beemdevelopment/Aegis)
* ⭐ **[Stratum](https://stratumauth.com)** - 2FA / أندرويد / [GitHub](https://github.com/stratumauth/app)
* ⭐ **[Password Strength Chart](https://i.ibb.co/B2Vz3hSj/89x5g3t4xrxe1.png)**
* [2FAS](https://2fas.com/) - 2FA / Android، iOS / [X](https://x.com/2FAS_com) / [Subreddit](https://www.reddit.com/r/2fas_com/) / [Discord](https://discord.gg/q4cP6qh2g5) / [GitHub](https://github.com/twofas)
* [⁠Proton Authenticator](https://proton.me/authenticator) - 2FA / كل المنصات / [Discord](https://discord.com/invite/proton) / [GitHub](https://github.com/orgs/protonpass/repositories)
* [Mauth](https://github.com/X1nto/Mauth) - 2FA / Android
* [FreeOTPPlus](https://github.com/helloworld1/FreeOTPPlus) - 2FA / أندرويد
* [KeePassXC](https://keepassxc.org/) - 2FA / محلي / Windows، macOS، Linux / [Resources](https://github.com/lgg/awesome-keepass) / [Guide](https://keepassxc.org/docs/KeePassXC_GettingStarted) / [Video](https://youtu.be/ckWPHaQwft8) / [GitHub](https://github.com/keepassxreboot/keepassxc)
* [AuthMe](https://authme.levminer.com/) - 2FA / Windows، macOS، Linux / [GitHub](https://github.com/Levminer/authme)
* [Yubioath](https://developers.yubico.com/yubioath-flutter/) - 2FA / بيدعم YubiKey / Windows، Android / [X](https://x.com/yubico) / [GitHub](https://github.com/Yubico/yubioath-flutter)
* [OTPClient](https://github.com/paolostivanin/OTPClient) - 2FA / Linux
* [Sentinel](https://getsentinel.io/) - 2FA / macOS، Android، iOS
* [OTP Auth](https://apps.apple.com/app/otp-auth/id659877384) - 2FA / iOS
* [Tofu](https://www.tofuauth.com/) - 2FA / iOS / [GitHub](https://github.com/iKenndac/Tofu)
* [Authenticator](https://authenticator.cc/) - إضافة متصفح للـ 2FA / [GitHub](https://github.com/Authenticator-Extension/Authenticator)
* [2FAuth](https://docs.2fauth.app/) - مستضاف عندك / ويب / [GitHub](https://github.com/Bubka/2FAuth)
* [VaultWarden](https://github.com/dani-garcia/vaultwarden) - Backend غير رسمي لسيرفر Bitwarden / مستضاف عندك
* [OTP Helper](https://github.com/jd1378/otphelper) - استخراج رموز OTP
* [steamguard-cli](https://github.com/dyc3/steamguard-cli) - توليد أكواد Steam 2FA

***

## ▷ برامج المراسلة المشفرة

::: tip
* **ملحوظة** - خليك فاكر إن حتى لو E2EE شغال، الميتاداتا ممكن تفضل ظاهرة لسيرفرِك المنزلي ولسيرفرات الناس اللي بتكلمهم.
:::

***

* 🌐 **[Eylenburg Comparisons](https://eylenburg.github.io/im_comparison.htm)**، [SecuChart](https://bkil.gitlab.io/secuchart/)، [Messenger-Matrix](https://www.messenger-matrix.de/messenger-matrix-en.html) أو [Secure Messaging Apps](https://www.securemessagingapps.com/) - فهارس ومقارنات لتطبيقات الشات
* 🌐 **[Matrix Clients](https://matrix.org/ecosystem/clients/)** / [Mod Bot](https://github.com/matrix-org/mjolnir) / [Resources](https://matrix.org/ecosystem/) / [Servers](https://tatsumoto-ren.github.io/blog/list-of-matrix-servers.html)، [2](https://tatsumoto.neocities.org/blog/list-of-matrix-servers.html)، [3](https://gitlab.com/famedly/conduit)، [4](https://joinmatrix.org/servers/)، [5](https://archive.md/4xZE4)، [6](https://wiki.asra.gr/en:public_servers)
* ⭐ **[SimpleX](https://simplex.chat/)** - كل المنصات / [GitHub](https://github.com/simplex-chat)
* ⭐ **[Molly](https://github.com/mollyim/mollyim-android)** - نسخة Signal مقوّاة أمنيًا / فيها NSFW شوية
* ⭐ **[Signal](https://signal.org/)** - كل المنصات / محتاج رقم موبايل / [Stickers](https://signalstickers.org/) / [GitHub](https://github.com/signalapp)
* ⭐ **[Briar](https://briarproject.org/)** / [Desktop](https://briarproject.org/download-briar-desktop/) / [GitLab](https://code.briarproject.org/briar/briar)
* [Wire](https://wire.com/en/download/) - كل المنصات / محتاج رقم موبايل / [GitHub](https://github.com/wireapp)
* [Session](https://getsession.org/) - كل المنصات / [GitHub](https://github.com/session-foundation)
* [Keybase](https://keybase.io/) - كل المنصات / [GitHub](https://github.com/keybase/client)
* [Jami](https://jami.net/) - كل المنصات / [GitLab](https://git.jami.net/savoirfairelinux/jami-project)
* [Tox](https://tox.chat/) / [GitHub](https://github.com/TokTok/c-toxcore) أو [qTox](https://qtox.github.io/) / [GitHub](https://github.com/TokTok/qTox) - كل المنصات
* [Cabal](https://cabal.chat/) - P2P / من غير سيرفر لكل المنصات / [GitHub](https://github.com/cabal-club)
* [Linphone](https://www.linphone.org/) - كل المنصات / [GitLab](https://gitlab.linphone.org/explore/projects)
* [Berty](https://berty.tech/) / Android، iOS / [GitHub](https://github.com/berty/berty)
* [Ricochet Refresh](https://www.ricochetrefresh.net/) / Windows، macOS، Linux / [GitHub](https://github.com/blueprint-freespeech/ricochet-refresh)
* [Cwtch](https://docs.cwtch.im) / Windows، macOS، Linux، Android / [GitLab](https://git.openprivacy.ca/cwtch.im/cwtch)
* [Delta Chat](https://delta.chat/) - ماسنجر لامركزي مبني على البريد / Windows، macOS، Linux، Android
* [Status](https://status.app/) / Android، iOS / [GitHub](https://github.com/status-im)
* [Damus](https://damus.io/) أو [MySudo](https://anonyome.com/individuals/mysudo/) / Android، iOS
* [Databag](https://github.com/balzack/databag) - Self-Hosted / Android, iOS, Web / [GitHub](https://github.com/balzack/databag)
* [ssh-chat](https://github.com/shazow/ssh-chat) or [Devzat](https://github.com/quackduck/devzat) - SSH Chat

***

## ▷ خصوصية البريد

* 🌐 **[⁠OpenPGP Email Encryption](https://www.openpgp.org/software/)** - فهرس لعملاء البريد المشفر OpenPGP
* ↪️ **[Temp Mail Sites](/internet-tools#temp-mail)** - تعمل إيميلات مؤقتة / disposable
* ↪️ **[Email Aliasing](/internet-tools#email-aliasing)** - تعمل إيميلات مجهولة دائمة
* ⭐ **[Proton Mail](https://proton.me/mail)** - 1 جيجا مجاني / بريد مشفر / بيتحذف بعد سنة من عدم الاستخدام / [.onion](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion/) / [Subreddit](https://www.reddit.com/r/ProtonMail/) / [More Storage](https://proton.me/support/more-free-storage-existing-users) / [Discord](https://discord.com/invite/proton) / [GitHub](https://github.com/ProtonMail)
* ⭐ **[Tuta](https://tuta.com/)** - 1 جيجا مجاني / بريد مشفر / بيتحذف بعد 6 شهور من عدم الاستخدام / [Subreddit](https://www.reddit.com/r/tutanota/) / [GitHub](https://github.com/tutao/tutanota)
* [Disroot](https://disroot.org/en/services/email) - 1 جيجا مجاني / بريد مشفر
* [DNMX](https://dnmx.cc/) - بريد مبني على Onion
* [Mailvelope](https://mailvelope.com/) - يدي الإيميلات تشفير PGP / [GitHub](https://github.com/mailvelope/mailvelope)
* [Email Privacy Tester](https://www.emailprivacytester.com/) - اختبار خصوصية البريد / [GitLab](https://gitlab.com/mikecardwell/ept3)
* [SecLists](https://seclists.org/) - أرشيف لقوائم مراسلات الأمان

***

## ▷ متابعة تسريبات البيانات

* ⭐ **[Have I Been Pwned?](https://haveibeenpwned.com/)** / [GitHub](https://github.com/HaveIBeenPwned) أو [F-Secure](https://www.f-secure.com/en/identity-theft-checker) / [X](https://x.com/FSecure) - متابعة تسريبات الإيميلات
* ⭐ **[Have I Been Pwned Passwords](https://haveibeenpwned.com/Passwords)** - فحص تسريب كلمات السر
* [Mozilla Monitor](https://monitor.mozilla.org/) - فحص تسريبات البيانات / محتاج تسجيل / [GitHub](https://github.com/mozilla/blurts-server)
* [BreachDirectory](https://breachdirectory.org)، [Leak Lookup](https://leak-lookup.com/)، [Trufflehog](https://trufflesecurity.com/) / [Discord](https://discord.gg/8Hzbrnkr7E) / [GitHub](https://github.com/trufflesecurity/trufflehog) أو [LeakPeek](https://leakpeek.com/) / [Discord](https://discord.com/invite/mNxhSRWKwq) - محركات بحث لتسريبات البيانات
* [Intelligence X](https://intelx.io/) - فحص تسريب كلمات السر / [GitHub](https://github.com/IntelligenceX)
* [ScatteredSecrets](https://scatteredsecrets.com/) - فحص تسريب كلمات السر / محتاج تسجيل
* [BreachDetective](https://breachdetective.com/) - فحص تسريب كلمات السر / محتاج تسجيل

***

## ▷ البصمة والتتبع

* ⭐ **[CreepJS](https://abrahamjuliot.github.io/creepjs)**، [webkay](https://webkay.robinlinus.com/)، [browserrecon](https://www.computec.ch/projekte/browserrecon/?s=scan)، [TZP](https://arkenfox.github.io/TZP/tzp.html)، [Cover Your Tracks](https://coveryourtracks.eff.org/)، [⁠DeviceInfo](https://www.deviceinfo.me/)، [⁠BrowserScan](https://www.browserscan.net/) أو [PersonalData](https://personaldata.info/) - اختبارات التتبع والبصمة
* [ClearURLs](https://docs.clearurls.xyz) / [GitHub](https://github.com/ClearURLs/Addon) / [GitLab](https://gitlab.com/KevinRoebert/ClearUrls) أو [URLCleaner](https://urlcleaner.net/) - تنظيف الروابط / إزالة عناصر التتبع / ممكن يكسر مواقع
* [Webbkoll](https://webbkoll.5july.net/) أو [Blacklight](https://themarkup.org/blacklight) - معلومات التتبع الخاصة بالمواقع
* [Data Removal Guide](https://inteltechniques.com/workbook.html) - حذف بياناتك أونلاين
* [GameIndustry](https://gameindustry.eu/en/) - حجب المتتبعات في ألعاب الكمبيوتر / الموبايل
* [BrowserLeaks](https://browserleaks.com/)، [Do I leak?](https://www.top10vpn.com/tools/do-i-leak/) أو [IPLeak.net](https://ipleak.net) - اختبارات تسريب الـ IP
* [JShelter](https://jshelter.org/) / [Source Code](https://pagure.io/JShelter/webextension) أو [Chameleon](https://github.com/00x127/Chameleon) - منع البصمة / إضافات / [Warning](https://github.com/arkenfox/user.js/issues/1729#issuecomment-1739135479)
* [Locale Switcher](https://chromewebstore.google.com/detail/locale-switcher/kngfjpghaokedippaapkfihdlmmlafcc)، [2](https://addons.mozilla.org/en-US/firefox/addon/languageswitch) - تغيير لغة المتصفح / [GitHub](https://github.com/locale-switcher/locale-switcher)
* [AnonymousRedirect](https://adguardteam.github.io/AnonymousRedirect/) - تعمية الروابط
* [X.com Direct](https://greasyfork.org/en/scripts/404632) - بيشيل تتبع t.co من X.com

***

## ▷ محركات البحث

* 🌐 **[Search Engine Party](https://searchengine.party/)** - مقارنات لمحركات البحث المركزة على الخصوصية / [GitLab](https://gitlab.com/nitrohorse/search-engines-compare)
* ↪️ **[SearX Instances](/storage#searx-instances)** - دليل مثيلات SearX / [Docs / Hosting](https://docs.searxng.org/) / [.onion](http://searxspbitokayvkhzhsnljde7rqmn7rvoga6e4waeub3h7ug3nghoad.onion/) / [Matrix](https://matrix.to/#/#searxng:matrix.org) / [GitHub](https://github.com/searxng)
* ⭐ **[Brave Search](https://search.brave.com/)** - مستقل / بيدعم DDG Bangs / [.onion](https://search.brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion/)
* ⭐ **[Startpage](https://www.startpage.com/)** - مبني على Google / [Subreddit](https://www.reddit.com/r/StartpageSearch/)
* ⭐ **[DuckDuckGo](https://start.duckduckgo.com/)** - بحث متعدد / مبني على Bing / [AI Free](https://noai.duckduckgo.com/) / [Lite](https://lite.duckduckgo.com/) / [HTML](https://html.duckduckgo.com/) / [Shortcuts](https://duckduckgo.com/bangs)، [2](https://github.com/dmlls/yang) / [Subreddit](https://www.reddit.com/r/duckduckgo/)
* ⭐ **[4get](https://4get.canine.tools/)**، [2](https://4get.ca/) - بحث متعدد / [Instances](https://4get.ca/instances) / [Source Code](https://git.lolcat.ca/lolcat/4get)
* [LibreY](https://search.davidovski.xyz/instances.php) - بحث متعدد / [GitHub](https://github.com/Ahwxorg/librey/)
* [⁠Nilch](https://nilch.org/) - بحث متعدد من غير AI
* [search!](https://search.tiago.zip/) - بحث متعدد من غير AI / [GitHub](https://github.com/tiagozip/metasearch)
* [Mojeek](https://www.mojeek.com/) - مستقل / [Subreddit](https://www.reddit.com/r/mojeek/)
* [YaCy](https://yacy.net/) - لامركزي / مستقل P2P / [GitHub](https://github.com/yacy/yacy_search_server)
* [Degoog](https://github.com/degoog-org/degoog) - بحث متعدد / [GitHub](https://github.com/fccview/degoog)

***

# ► الشبكات الافتراضية الخاصة (VPN)

::: tip
* **ملحوظة** - غالبًا الأفضل تستخدم VPN مدفوع، خصوصًا لو الخصوصية أو السرعة مهمين عندك. الـ VPN المجاني غالبًا مفيد بس لفك الحجب عن مواقع. وافتكر تعمل [bind](https://wispydocs.pages.dev/torrenting/) للـ VPN مع العميل عشان تتجنب رسائل الـ ISP.
:::

***

* 🌐 **[Techlore Chart](https://vpn.techlore.tech/)** - جداول مقارنة للـ VPN
* 🌐 **[VPN Relationships](https://kumu.io/Windscribe/vpn-relationships)**، [2](https://windscribe.com/vpnmap) - خريطة علاقات الـ VPN
* ⭐ **[Cloudflare One](https://one.one.one.one/)** - مجاني / غير محدود / [Wireguard](https://rentry.co/foss-warp) (kill switch) / [Config Generator](https://colab.research.google.com/drive/1fomBbh0mRxpVoGAY5gYT5zPBnFKsLV9o?usp=sharing) / [Discord](https://discord.com/invite/cloudflaredev) / [Alt Client](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/alt-warp-clients.md)
* ⭐ **[Proton VPN](https://protonvpn.com)** - مجاني ومدفوع / غير محدود / [Wireguard](https://protonvpn.com/support/wireguard-configurations) / [Subreddit](https://www.reddit.com/r/ProtonVPN/) / [Telegram](https://t.me/proton_privacy) / [Discord](https://discord.com/invite/proton) / [GitHub](https://github.com/ProtonVPN/) / [Torrent Guide](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/proton-torrenting.md)
* ⭐ **[Windscribe](https://windscribe.com)** - مجاني ومدفوع / 10 جيجا شهري / ممنوع تورنت في الخطة المجانية / [Subreddit](https://www.reddit.com/r/Windscribe/) / [GitHub](https://github.com/windscribe)
* ⭐ **[AirVPN](https://airvpn.org/)** - مدفوع / [.onion](https://airvpn3epnw2fnsbx5x2ppzjs6vxtdarldas7wjyqvhscj7x43fxylqd.onion/) / [GitHub](https://github.com/AirVPN) / [GitLab](https://gitlab.com/AirVPN)
* ⭐ **[Mullvad VPN](https://mullvad.net/)** - مدفوع / [No-Log](https://mullvad.net/en/blog/2023/4/20/mullvad-vpn-was-subject-to-a-search-warrant-customer-data-not-compromised/) / [No Port Forwarding](https://mullvad.net/en/blog/removing-the-support-for-forwarded-ports) / [.onion](https://ao54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion) / [GitHub](https://github.com/mullvad)
* ⭐ **[IVPN](https://www.ivpn.net/)** - مدفوع / [No-Log](https://www.ivpn.net/knowledgebase/privacy/how-do-we-react-when-requested-by-an-authority-for-information-relating-to-a-customer/) / [No Port Forwarding](https://www.ivpn.net/blog/gradual-removal-of-port-forwarding/) / [Subreddit](https://www.reddit.com/r/IVPN/) / [GitHub](https://github.com/ivpn)
* [Firefox VPN](https://support.mozilla.org/en-US/kb/built-in-vpn) - مجاني / 50 جيجا شهري
* [Nym](https://nym.com/) - مدفوع / [5-Hop Mixnet](https://nym.com/mixnet) / [Subreddit](https://www.reddit.com/r/nym/) / [GitHub](https://github.com/nymtech/nym)
* [RiseupVPN](https://riseup.net/en/vpn) - مجاني / غير محدود / من غير Port Forwarding / [GitHub](https://github.com/riseupnet)
* [PrivadoVPN](https://privadovpn.com/freevpn) - مجاني / 10 جيجا شهري / تقدر تعمل حسابات غير محدودة عبر [Temp Mail](/internet-tools#temp-mail)
* [Bitmask](https://bitmask.net/) - مجاني / غير محدود / [Android](https://0xacab.org/leap/bitmask_android) / [GitLab](https://0xacab.org/leap/bitmask-vpn)

***

## ▷ سيرفرات VPN

* ⭐ **[WireGuard](https://www.wireguard.com/)** - نفق VPN / [Guide](https://www.wireguard.com/quickstart/) / [Web UI](https://github.com/wg-easy/wg-easy) / [Source Code](https://www.wireguard.com/repositories/)
* ⭐ **[Tailscale](https://tailscale.com/)** أو **[⁠NetBird](https://netbird.io/)** - شبكة WireGuard Mesh
* [Amnezia](https://amnezia.org/)، [2](https://storage.googleapis.com/amnezia/amnezia.org) - سيرفر VPN / [Subreddit](https://www.reddit.com/r/AmneziaVPN/) / [Discord](https://discord.com/invite/JfrKFScw6N) / [Telegram](https://t.me/amnezia_vpn_en) / [GitHub](https://github.com/amnezia-vpn)
* [OpenVPN](https://openvpn.net/) - سيرفر VPN
* [WGDashboard](https://wgdashboard.dev/) - لوحة WireGuard / AmneziaWG / [Subreddit](https://www.reddit.com/r/WGDashboard/) / [Discord](https://discord.gg/72TwzjeuWm) / [GitHub](https://github.com/donaldzou/WGDashboard)
* [⁠Twingate](https://www.twingate.com/) - نفق وصول Zero Trust
* [⁠Headscale](https://github.com/juanfont/headscale) - Tailscale مستضاف عندك
* [⁠Nebula](https://github.com/slackhq/nebula) أو [ZeroTier](https://www.zerotier.com/) - سيرفر Mesh VPN
* [IPsec VPN](https://github.com/hwdsl2/setup-ipsec-vpn) - سيرفر VPN
* [Cloudflare Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) - نفق للتطبيقات / بديل للـ VPN / [WireGuard](https://gist.github.com/WildeBeast2521/adabae243e0b83e344ceef0422c3fa6d)
* [Cloud WireGuard Guide](https://github.com/rajannpatel/Pi-Hole-on-Google-Compute-Engine-Free-Tier-with-Full-Tunnel-and-Split-Tunnel-Wireguard-VPN-Configs) - WireGuard + Pi-hole VPN باستخدام Google Cloud
* [tinc VPN](https://www.tinc-vpn.org/) - نفق VPN / [GitHub](https://github.com/gsliepen/tinc) / [GitLab](https://gitlab.com/gsliepen/tinc)
* [WireHole](https://github.com/IAmStoxe/wirehole) - WireGuard + Pi-hole VPN / [Web UI](https://github.com/10h30/wirehole-ui)
* [OpenConnect](https://gitlab.com/openconnect/openconnect) - SSL VPN / [GUI](https://openconnect.github.io/openconnect-gui/) 
* [Pritunl](https://pritunl.com/) - سيرفر VPN / [GitHub](https://github.com/pritunl/pritunl)
* [Algo VPN](https://blog.trailofbits.com/2016/12/12/meet-algo-the-vpn-that-works/) - Cloud VPN / [GitHub](https://github.com/trailofbits/algo)
* [SShuttle](https://sshuttle.readthedocs.io/en) - سيرفر SSH VPN / [GitHub](https://github.com/sshuttle/sshuttle)
* [DSVPN](https://github.com/jedisct1/dsvpn) - سيرفر VPN بسيط
* [Openconnect](https://ocserv.gitlab.io/www/index.html) - سيرفر SSL VPN

***

## ▷ أدوات VPN

* ↪️ **[Free VPN Configs](/storage#free-vpn-configs)**
* ⭐ **[VPN Binding Guide](https://wispydocs.pages.dev/torrenting/)** - اربط الـ VPN ببرنامج التورنت عشان تتجنب رسائل الـ ISP
* [⁠WireSock](https://wiresock.net/) أو [⁠Tunnl](https://tunnl.to/) - عمل Split Tunneling للـ WireGuard
* [WG Tunnel](https://wgtunnel.com/) - عميل WireGuard / AmneziaWG / Android / [Desktop](https://wgtunnel.com/blog/desktop-launch/) / [Telegram](https://t.me/wgtunnel) / [GitHub](https://github.com/wgtunnel)
* [VPN Hotspot](https://github.com/Mygod/VPNHotspot) - مشاركة اتصال الـ VPN عبر Hotspot / Android rooted
* [Gluetun](https://github.com/qdm12/gluetun) - VPN باستخدام Docker

***

# ► بروكسي

* [Lantern](https://lantern.io/) - تطبيق بروكسي / [GitHub](https://github.com/getlantern/lantern)
* [Psiphon](https://psiphon.ca/) - تطبيق VPN / Proxy هجين
* [FreeSocks](https://freesocks.org/) - تطبيق Shadowsocks / [GitHub](https://github.com/unredacted/freesocks-control-plane)
* [Snowflake](https://snowflake.torproject.org/) - إضافة بروكسي Tor للمتصفح
* [Censor Tracker](https://censortracker.org/) / [Telegram](https://t.me/CensorTracker_feedback) / [GitHub](https://github.com/censortracker/censortracker)، [SmartProxy](https://github.com/salarcode/SmartProxy)، [FoxyProxy](https://getfoxyproxy.org/) أو [ZeroOmega](https://github.com/zero-peak/ZeroOmega) - إضافات بروكسي
* [Acrylic](https://mayakron.altervista.org/) - بروكسي DNS محلي
* [SimpleDnsCrypt](https://github.com/instantsc/SimpleDnsCrypt) أو [DNSCrypt](https://dnscrypt.info/) / [GitHub](https://github.com/DNSCrypt/dnscrypt-proxy) - بروكسي لتشفير DNS محلي

***

## ▷ سيرفرات بروكسي

* ⭐ **[3X-UI](https://github.com/MHSanaei/3x-ui)** - لوحة بروكسي / [Telegram](https://t.me/XrayUI) / **[Guide](https://wispydocs.pages.dev/network-censorship-circumvention/)**
* ⭐ **[Project X](https://github.com/XTLS/Xray-core)** - نواة بروكسي Xray / [Telegram](https://t.me/projectXray)، [2](https://t.me/projectVless)
* [NaïveProxy](https://github.com/klzgrad/naiveproxy) - بروكسي مبني على Chromium
* [Hysteria](https://v2.hysteria.network/) - بروتوكول بروكسي مركز على السرعة / [Telegram](https://t.me/hysteria_github) / [GitHub](https://github.com/apernet/hysteria)
* [Shadowsocks](https://shadowsocks.org/) - بروتوكول بروكسي بسيط / [GitHub](https://github.com/shadowsocks)
* [sing-box](https://sing-box.sagernet.org/) - نواة بروكسي / [Telegram](https://t.me/yapug) / [GitHub](https://github.com/SagerNet/sing-box)
* [Amnezia](https://amnezia.org/self-hosted)، [2](https://storage.googleapis.com/amnezia/amnezia.org) - سيرفر متعدد البروتوكولات / [Subreddit](https://www.reddit.com/r/AmneziaVPN/) / [Discord](https://discord.com/invite/JfrKFScw6N) / [Telegram](https://t.me/amnezia_vpn_en) / [GitHub](https://github.com/amnezia-vpn)
* [Hiddify Manager](https://hiddify.com/) - لوحة بروكسي / [Telegram](https://t.me/hiddify) / [GitHub](https://github.com/hiddify/Hiddify-Manager)
* [Outline](https://getoutline.org/)- سيرفر Shadowsocks / [Guide](https://docs.getoutline.com/s/hosting/) / [Subreddit](https://www.reddit.com/r/outlinevpn/) / [GitHub](https://github.com/Jigsaw-Code/) 
* [VpnHood](https://github.com/vpnhood/VpnHood) - سيرفر بروكسي
* [Scramjet](https://docs.titaniumnetwork.org/proxies/scramjet/) / [GitHub](https://github.com/MercuryWorkshop/scramjet/) أو [Nebula](https://github.com/NebulaServices/Nebula) - سيرفر بروكسي ويب
* [Nginx Proxy Manager](https://nginxproxymanager.com) - واجهة Reverse Proxy / [Subreddit](https://reddit.com/r/nginxproxymanager) / [GitHub](https://github.com/NginxProxyManager/nginx-proxy-manager)


***

## ▷ عملاء البروكسي

* ⭐ **[v2rayN](https://github.com/2dust/v2rayN)** - عميل بروكسي / Windows، macOS، Linux
* ⭐ **[NekoBox](https://matsuridayo.github.io/)** - عميل بروكسي / Android / [GitHub](https://github.com/MatsuriDayo/NekoBoxForAndroid/)
* [v2rayNG](https://github.com/2dust/v2rayNG) أو [MahsaNG](https://github.com/GFW-knocker/MahsaNG) / [Telegram](https://t.me/s/mahsa_net)، [2](https://t.me/+YIlqV-fl9y4zMmRk) - عميل بروكسي / Android
* [Hiddify](https://hiddify.com/) - عميل بروكسي / كل المنصات / [Telegram](https://t.me/hiddify) / [GitHub](https://github.com/hiddify)
* [Amnezia](https://amnezia.org/)، [2](https://storage.googleapis.com/amnezia/amnezia.org) - عميل بروكسي / كل المنصات / [Subreddit](https://www.reddit.com/r/AmneziaVPN/) / [Discord](https://discord.com/invite/JfrKFScw6N) / [Telegram](https://t.me/amnezia_vpn_en) / [GitHub](https://github.com/amnezia-vpn)
* [Shadowsocks](https://shadowsocks.org/doc/getting-started.html#gui-clients) - عميل Shadowsocks / كل المنصات / [GitHub](https://github.com/shadowsocks)
* [sing-box](https://sing-box.sagernet.org/clients/) - عميل بروكسي / macOS، Android / [Telegram](https://t.me/yapug) / [GitHub](https://github.com/SagerNet/sing-box)
* [Throne](https://throneproj.github.io/) - عميل بروكسي / واجهة Sing-Box / Windows، macOS، Linux / [GitHub](https://github.com/throneproj/Throne)
* [V2Box](https://play.google.com/store/apps/details?id=dev.hexasoftware.v2box) / Android أو [V2Box](https://apps.apple.com/us/app/v2box-v2ray-client/id6446814690) / iOS - عميل بروكسي
* [ClashVerge](https://www.clashverge.dev/) - عميل بروكسي / Windows، macOS، Linux / [GitHub](https://github.com/clash-verge-rev/clash-verge-rev)
* [Streisand](https://streisand.pages.dev/) - عميل بروكسي / macOS، iOS
* [⁠FlClash](https://github.com/chen08209/FlClash/blob/main/README.md) / Windows, macOS, Linux, Android
* [husi](https://github.com/xchacha20-poly1305/husi) - عميل بروكسي / Android
* [⁠Exclave](https://github.com/dyhkwong/Exclave) - عميل بروكسي / Android
* [Proxifier](https://www.proxifier.com/) - يضيف وظيفة البروكسي للتطبيقات / Windows، macOS، Android
* [wireproxy](https://github.com/whyvl/wireproxy) - WireGuard كبروكسي / Windows، macOS، Linux

***

## ▷ مقاومة الحجب

* ↪️ **[Great Firewall Bypass](/misc#great-firewall)**
* ⭐ **[⁠Project Atlas](https://project-atlas-dbb.pages.dev/)** - دليل لتجاوز الحجب
* ⭐ **[⁠Net4people](https://github.com/net4people/bbs/issues)** - نقاش عالمي عن طرق تجاوز الحجب
* ⭐ **[ByeDPIAndroid](https://github.com/dovecoteescapee/ByeDPIAndroid)**، - أداة لتغيير حزم الشبكة / Android
* ⭐ **[zapret](https://github.com/bol-van/zapret2)**، **[SpoofDPI](https://github.com/xvzc/SpoofDPI)** أو **[GoodbyeDPI](https://github.com/ValdikSS/GoodbyeDPI/)** - أدوات لتغيير حزم الشبكة
* ⭐ **[DNSveil](https://msasanmh.github.io/DNSveil/)** - عميل DNS / [GitHub](https://github.com/msasanmh/DNSveil)
* [⁠Geph](https://geph.io/) - بروكسي لتجاوز الحجب / [GitHub](https://github.com/geph-official)
* [DNSTT.XYZ](https://dnstt.xyz/) / [Telegram](https://t.me/dnstt_xyz) / [GitHub](https://github.com/dnstt-xyz/dnstt_xyz_app)، [⁠HTTP Injector](https://play.google.com/store/apps/details?id=com.evozi.injector)، [⁠HTTP Custom](https://play.google.com/store/apps/details?id=xyz.easypro.httpcustom)، [⁠NetMod VPN](https://play.google.com/store/apps/details?id=com.netmod.syna)، [SlipNet](https://github.com/anonvector/SlipNet) / [Troubleshooting](https://t.me/SlipNet_app) / [Telegram](https://t.me/slipnet_chat)، [⁠WhiteDNS](https://github.com/iampedii/WhiteDNS) أو [DarkTunnel](https://play.google.com/store/apps/details?id=net.darktunnel.app) - أنفاق DNS للموبايل / تجاوز الحجب
* [⁠FilterWatch](https://filter.watch/english/) - أخبار ومقالات عن الحجب
* [ByeByeDPI](https://github.com/romanvht/ByeByeDPI/blob/master/README-en.md)، [Rethink DNS](https://rethinkdns.com/app)، [⁠Paqet](https://github.com/hanselime/paqet)، [PowerTunnel](https://github.com/krlvm/PowerTunnel) أو [Green Tunnel](https://github.com/SadeghHayeri/GreenTunnel) - تغيير حزم الشبكة / بروكسي على مستوى الباكت
* [YouTubeUnblock](https://github.com/Waujito/youtubeUnblock) - فتح يوتيوب مع SNI spoof / OpenWrt / Entware Routers
* [Scamalytics](https://scamalytics.com/) - فحص قوائم حظر الـ IP

***

## ▷ مواقع بروكسي

::: tip
* **ملحوظة** - خليك فاكر إن مواقع البروكسي كتير بتسجل معلومات زي عنوان الـ IP والمواقع اللي زرتها، فهتبقى مفيدة لفك الحجب، لكن مش مفيدة قوي للخصوصية.
:::

***

* ↪️ **[Proxy Lists](/storage#proxy-lists)**
* [Titanium Network](https://titaniumnetwork.org/services/) - بروكسي متعدد / [Instances](https://discord.gg/unblock) / [Discord](https://discord.gg/unblock) / [GitHub](https://github.com/titaniumnetwork-dev)
* [SSLSecureProxy](https://www.sslsecureproxy.com/)، [2](https://www.4everproxy.com/)، [3](https://www.hideip.co/)
* [ProxyOf2](https://proxyof2.com/)
* [Phantom](https://phantom.lol/) / [Discord](https://discord.com/invite/goshadow)
* [Reflect4](https://reflect4.me/)، [CroxyProxy](https://www.croxyproxy.com/) أو [Blockaway](https://www.blockaway.net/)
* [ProxyPal](https://proxypal.net/) / [Telegram](https://t.me/PlainProxies)
* [Proxyium](https://proxyium.com/)
* [Startpage](https://www.startpage.com/) - استخدم Anon View / [Subreddit](https://www.reddit.com/r/StartpageSearch/)
* [Google Translate](https://translate.google.com/) / [Note](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/google-translate-note.md)
* [Proxy Checker](https://proxy-checker.net/)، [proxy-scraper](https://github.com/iw4p/proxy-scraper) أو [proxy-scraper-checker](https://github.com/monosans/proxy-scraper-checker) - أدوات سحب وفحص البروكسي
* [CheckSocks5](https://checksocks5.com/) - فاحص SOCKS5 Proxy
* [Knaben.info](https://knaben.info/) - بروكسي لمواقع التورنت

</div>