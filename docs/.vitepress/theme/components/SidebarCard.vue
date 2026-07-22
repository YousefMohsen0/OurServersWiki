<script setup lang="ts">
import Field from './CardField.vue'
import ColorPicker from './ColorPicker.vue'
import InputField from './InputField.vue'
import ThemeSelector from './ThemeSelector.vue'
import ToggleIndexes from './ToggleIndexes.vue'
import ToggleStarred from './ToggleStarred.vue'
</script>

<template>
  <div
    class="bg-$vp-c-bg hover:bg-$vp-c-bg/40 border-$vp-c-default-soft hover:border-primary transition-border relative z-0 rounded-lg border-2 border-solid p-5 duration-500"
  >
    <div class="align-center mb-4 flex justify-between">
      <div class="text-$vp-c-text-1 lh-relaxed text-sm font-bold">ايموجيز</div>
    </div>
    <Field icon="i-twemoji-globe-with-meridians">فهارس</Field>
    <Field icon="i-twemoji-repeat-button">روابط الأقسام</Field>
    <Field icon="i-twemoji-star">أقتراحات</Field>
    <div class="align-center mb-4 mt-4 flex justify-between">
      <div class="text-$vp-c-text-1 lh-relaxed text-sm font-bold">اختيارات</div>
    </div>
    <InputField id="toggle-starred" label="اظهر النجوم بس ">
      <template #display>
        <ToggleStarred />
      </template>
    </InputField>
    <InputField id="toggle-indexes" label="اظهر الفهارس بس ">
      <template #display>
        <ToggleIndexes />
      </template>
    </InputField>

    <div class="mt-4">
      <ColorPicker />
    </div>

    <div class="mt-6 pt-6 border-t border-$vp-c-divider">
      <ThemeSelector />
    </div>
  </div>
</template>

<style scoped>
</style>