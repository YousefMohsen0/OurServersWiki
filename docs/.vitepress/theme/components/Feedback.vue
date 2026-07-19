<script setup lang="ts">
import type { FeedbackType } from '../../types/Feedback'
import { useRouter } from 'vitepress'
import { computed, reactive, ref } from 'vue'
import { feedbackOptions, getFeedbackOption } from '../../types/Feedback'

const props = defineProps<{
  heading?: string
}>()

const prompts = [
  'عاش!',
  'سيبلي رأيك!',
  'قولي اي الي ناقص في OWS',
  'رأيك يهمنا💡',
  'اي رأيك؟',
  'احنا بنشكر دهمك 🙏',
  'ساعدنا نخلي OSW احسن 🤝',
  'محتاجين مساعدتك👋',
  'رأيك هيفيدنا جدا 💯',
  'اظن انك مش محتاج تقول حاجة 😉',
  'عندك 10 ثواني عشان تقول رأيك 1...2...3 💣',
  'رأيك مهم ويساعدنا نخلي OWS احسن.',
  'الفضائيين بيراقبوك 👽'
]

function getPrompt() {
  return prompts[Math.floor(Math.random() * prompts.length)]
}

const messages = {
  suggestion: [
    'اكيد عندك فكرة حلوة!',
    '1000 IQ!',
    'هيعجبني جدا اني اشوف رأيك و احطو في الwiki',
    'اهلا! متحمس جدا اسمع رأيك!'
  ],
  appreciation: [
    'نحن نقدر مساعدتك!',
    'ديما بدور علي طرقة اتحسين بيها الموقع!',
    'تعليقك مهم ويساعدنا نخلي OSW احسن.'
  ],
  other: [
    'نحن دائماً نبحث عن طرق لتحسين!',
    'تعليقك مهم ويساعدنا نخلي OSW احسن.'
  ]
}

function getMessage(type: FeedbackType['type']) {
  return messages[type][Math.floor(Math.random() * messages[type].length)]
}

const loading = ref<boolean>(false)
const error = ref<unknown>(null)
const success = ref<boolean>(false)

const isDisabled = computed(() => {
  return (
    !feedback.message.length ||
    feedback.message.length < 5 ||
    feedback.message.length > 1000
  )
})

const router = useRouter()

const feedback = reactive<{
  message: string
  page: string
  type?: FeedbackType['type']
}>({
  page: router.route.path,
  message: ''
})

const selectedOption = ref(feedbackOptions[0])

const feedbackUrl =
  import.meta.env.VITE_FEEDBACK_URL ||
  (import.meta.env.DEV ? 'http://localhost:3000/feedback' : '/feedback')

function selectType(type: FeedbackType['type']) {
  feedback.type = type
  selectedOption.value = getFeedbackOption(type)!
}

async function handleSubmit() {
  loading.value = true
  error.value = null

  const body: FeedbackType = {
    message: feedback.message,
    type: feedback.type!,
    page: feedback.page,
    ...(props.heading && { heading: props.heading })
  }

  try {
    const response = await fetch(feedbackUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const text = await response.text()
    let data: any = null
    if (text) {
      try {
        data = JSON.parse(text)
      } catch {
        data = null
      }
    }

    if (!response.ok) {
      if (data?.message || data?.error) {
        error.value = data.message || data.error
      } else {
        error.value = `Server error: ${response.status} ${response.statusText}`
      }
      return
    }

    if (!data) {
      error.value = 'Server returned invalid JSON response.'
      return
    }

    if (data.error) {
      error.value = data.message || data.error || 'Failed to send feedback'
      return
    }

    if (data.status === 'ok') {
      success.value = true
    }
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : 'An unexpected error occurred'
  } finally {
    loading.value = false
  }
}

const isCardShown = ref<boolean>(false)
const helpfulText = props.heading
  ? 'اي رأيك في الحتة دي?'
  : 'اي رأيك في الصفحة دي?'
const helpfulDescription = props.heading
  ? 'قولنا ازاي الحتة دي كانت مفيدة.'
  : 'قولنا ازاي الصفحة دي كانت مفيدة.'

const prompt = computed(() => getPrompt())
const message = computed(() => getMessage(feedback.type!))
const toggleCard = () => (isCardShown.value = !isCardShown.value)
const resetFeedback = () => {
  feedback.type = undefined
  error.value = null
}
</script>

<template>
  <div dir="rtl">
    <template v-if="props.heading">
      <button
        class="bg-$vp-c-default-soft text-primary border-$vp-c-default-soft hover:border-primary ml-3 inline-flex h-7 items-center justify-center whitespace-nowrap rounded-md border-2 border-solid px-1.5 py-3.5 text-sm font-medium transition-all duration-300 sm:h-6"
        @click="toggleCard()"
      >
        <span
          :class="isCardShown === false ? `i-lucide:mail` : `i-lucide:mail-x`"
        />
      </button>
    </template>
    <template v-else>
      <div
        class="mt-2 p-4 border-2 border-solid bg-$vp-c-bg-alt border-$vp-c-divider rounded-xl col-span-3 transition-colors duration-250"
      >
        <div class="flex items-start md:items-center gap-3">
          <div class="pt-1 md:pt-0">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center bg-$vp-c-brand-3"
            >
              <span
                :class="
                  isCardShown === false
                    ? `i-lucide:mail w-6 h-6 text-white`
                    : `i-lucide:mail-x w-6 h-6 text-white`
                "
              />
            </div>
          </div>
          <div
            class="flex-grow flex items-start md:items-center gap-3 flex-col md:flex-row"
          >
            <div class="flex-grow">
              <div class="font-semibold text-$vp-c-text-1">عندك تعليق؟</div>
              <div class="text-sm text-$vp-c-text-2">
                احب اسمع رأيك عن الصفحة دي.
              </div>
            </div>
            <div>
              <button
                class="bg-[#25262B] inline-block text-center rounded-full px-4 py-2.5 text-sm font-medium border-2 border-solid text-white border-$vp-c-divider"
                @click="toggleCard()"
              >
                ابعت تعليقك
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <Transition name="fade" mode="out-in">
      <div
        v-if="isCardShown"
        dir="rtl"
        class="border-$vp-c-divider bg-$vp-c-bg-alt b-rd-4 m-[2rem 0] mt-4 border-2 border-solid p-6"
      >
        <Transition name="fade" mode="out-in">
          <div v-if="!feedback.type">
            <p class="heading">
              {{ helpfulText }}
            </p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="item in feedbackOptions"
                :key="item.value"
                class="bg-[#25262B] border-$vp-c-default-soft hover:border-primary mt-2 select-none rounded border-2 border-solid font-bold transition-all duration-250 rounded-lg text-[14px] text-white font-500 leading-normal m-0 px-3 py-1.5 text-center align-middle whitespace-nowrap"
                @click="selectType(item.value)"
              >
                <span>{{ item.label }}</span>
              </button>
            </div>
          </div>
          <div v-else-if="feedback.type && !success">
            <div>
              <p class="desc">{{ helpfulDescription }} - {{ prompt }}</p>
              <span>{{ getFeedbackOption(feedback.type)?.label }}</span>
            </div>
            <p class="heading" v-text="message"></p>
            <div v-if="feedback.type === 'suggestion'" class="mb-2 text-sm">
              <p>
                اقراء
                <a href="/other/contributing">طريقة المساهمة</a>
                قبل ارسال تعليقك
              </p>
            </div>
            <div
              v-if="error"
              class="error-msg mb-4 p-3 rounded-lg bg-red-900/20 border border-red-500/50 text-red-300 text-xs"
            >
              <span class="font-bold">Error:</span>
              {{
                typeof error === 'string'
                  ? error
                  : (error as any).message || 'حصل خطأ جرب تاني.'
              }}
            </div>
            <textarea
              v-model="feedback.message"
              autofocus
              class="bg-$vp-c-bg-alt text-$vp-c-text-2 w-full h-[100px] border border-$vp-c-divider rounded px-3 py-1.5 border-$vp-c-divider bg-$vp-c-bg-alt b-rd-4 border-2 border-solid"
              placeholder="اي الwiki الحلوة فشخ دي!"
              @input="error = null"
            />
            <p class="desc mb-2">
              ضيف الdiscord بتاعنك لو عايز تتكلم معانا مباشرةً و تشارك رأيك في
              الwiki
              <a
                class="text-primary text-underline font-semibold"
                href="https://discord.gg/"
              >
                .
              </a>
            </p>
            <div class="flex flex-row gap-2">
              <button
                class="bg-$vp-c-default-soft text-primary border-$vp-c-default-soft inline-flex h-7 items-center justify-center whitespace-nowrap rounded-md border-2 border-solid px-1.5 py-3.5 text-sm font-medium transition-all duration-300 sm:h-6"
                @click="resetFeedback()"
              >
                <span class="i-lucide:panel-left-close">close</span>
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="isDisabled || loading"
                :style="
                  isDisabled || loading
                    ? {}
                    : {
                        'background-color': 'var(--vp-button-brand-bg)',
                        'border-color': 'var(--vp-button-brand-border)',
                        color: 'var(--vp-button-brand-text)'
                      }
                "
                @click="handleSubmit()"
              >
                {{ loading ? 'ارسال...' : 'ابعت رأيك 📩' }}
              </button>
            </div>
          </div>
          <div v-else>
            <p class="heading">شكرا علي تعليقك!</p>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="css">
.btn {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  transition:
    border-color 0.25s,
    background-color 0.25s;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  padding: 0.375rem 0.75rem;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
}

.btn:disabled {
  opacity: 0.5;
}

.btn:hover {
  border-color: var(--vp-c-brand);
}

.btn-primary {
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  border-color: var(--vp-button-brand-border);
}

.btn-primary:hover {
  background-color: var(--vp-button-brand-hover-bg);
  border-color: var(--vp-button-brand-hover-border);
}

.heading {
  font-size: 1.2rem;
  font-weight: 700;
}

.desc {
  display: block;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* RTL styles */
[dir='rtl'] {
  text-align: right;
  direction: rtl;
}

[dir='rtl'] .flex {
  flex-direction: row-reverse;
}

[dir='rtl'] .flex-row {
  flex-direction: row-reverse;
}

[dir='rtl'] [class*='i-lucide:'] {
  transform: scaleX(-1);
}

[dir='rtl'] button {
  text-align: right;
}

[dir='rtl'] .ml-3 {
  margin-left: 0;
  margin-right: 0.75rem;
}

/* Ensure icon div appears on the right */
[dir='rtl'] .flex.items-start > div:first-child {
  order: 2;
}

[dir='rtl'] .flex.items-start > div:nth-child(2) {
  order: 1;
}
</style>
