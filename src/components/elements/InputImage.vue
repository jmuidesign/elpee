<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@components/elements'

defineProps<{
  label: string
}>()

const fileUrl = ref('')

const emits = defineEmits(['change'])

const generateFileUrl = (file: Blob) => {
  const reader = new FileReader()

  reader.onload = () => {
    fileUrl.value = reader.result as string
    emits('change', file)
  }
  reader.readAsDataURL(file)
}
const handleFile = (event: any) => {
  const file = event.target.files[0]

  if (file) generateFileUrl(file)
}
</script>

<template>
  <label class="text-sm block leading-none mb-2">
    {{ label }}
  </label>
  <div class="group relative">
    <img v-if="fileUrl" class="object-cover w-full h-48" :src="fileUrl" />
    <template v-else>
      <div class="w-full h-48 bg-gray-100 group-hover:bg-gray-200" />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black p-1"
      >
        <Icon name="plus" />
      </div>
    </template>
    <input
      class="absolute top-0 w-full h-full opacity-0 cursor-pointer"
      type="file"
      @change="handleFile"
    />
  </div>
</template>
