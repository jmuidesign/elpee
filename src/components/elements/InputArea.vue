<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  modelValue: string
  rows?: number
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div class="flex flex-col-reverse mb-4">
    <textarea
      v-model="value"
      class="peer border py-1 px-2 text-sm focus:border-blue-600 outline-none rounded"
      :rows="rows"
    />
    <label class="text-sm block leading-none mb-2 peer-focus:text-blue-600">
      {{ label }}
    </label>
  </div>
</template>
