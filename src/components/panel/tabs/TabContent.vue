<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  SectionHero,
  SectionPartners,
  SectionServices,
  SectionAdvantages,
  SectionTestimonials,
  SectionFAQ,
} from './sections'

const sections = [
  {
    name: 'Hero',
    component: SectionHero,
  },
  {
    name: 'Partners',
    component: SectionPartners,
  },
  {
    name: 'Services',
    component: SectionServices,
  },
  {
    name: 'Advantages',
    component: SectionAdvantages,
  },
  {
    name: 'Testimonials',
    component: SectionTestimonials,
  },
  {
    name: 'FAQ',
    component: SectionFAQ,
  },
]

const props = defineProps<{
  tabOpen: boolean
}>()

const sectionOpen = ref(false)
const sectionIndex = ref(0)

const toggleSection = (index: number) => {
  if (!sectionOpen.value) {
    sectionOpen.value = true
  } else if (sectionIndex.value === index) {
    sectionOpen.value = false
  }

  sectionIndex.value = index
}

watch(
  () => props.tabOpen,
  () => (sectionOpen.value = false)
)
</script>
<template>
  <div class="flex flex-col gap-2 items-start">
    <button
      v-for="(section, i) in sections"
      :class="['section', { active: i === sectionIndex && sectionOpen }]"
      @click="toggleSection(i)"
    >
      {{ section.name }}
    </button>
  </div>
  <div v-show="sectionOpen" class="panel-level">
    <div class="mb-4">{{ sections[sectionIndex].name }}</div>
    <component :is="sections[sectionIndex].component" />
  </div>
</template>

<style scoped>
.panel-level {
  @apply translate-x-px;
}

.section {
  @apply text-sm py-1 px-2 rounded w-full text-left bg-gray-100 hover:bg-gray-200;
}

.section.active {
  @apply bg-gray-200;
}
</style>
