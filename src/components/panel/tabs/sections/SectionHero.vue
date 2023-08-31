<script setup lang="ts">
import { useContent } from '@/composables/content'
import { InputArea, InputImage } from '@components/elements'

const { heroTitle, heroText, updateHeroImage } = useContent()
</script>

<template>
  <InputArea v-model="heroTitle" label="Title" />
  <InputArea v-model="heroText" label="Text" :rows="7" />
  <InputImage label="Image" @change="updateHeroImage" />
</template>
