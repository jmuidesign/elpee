<script setup lang="ts">
import { ref } from 'vue'

import Icon from '../elements/Icon.vue'
import { TabDesign, TabLinks, TabContent } from './tabs'

import type { IconType } from '../elements/type'

const tabs = [
  {
    component: TabDesign,
    icon: 'sparkies' as IconType,
    name: 'Design',
  },
  {
    component: TabLinks,
    icon: 'link' as IconType,
    name: 'Links',
  },
  {
    component: TabContent,
    icon: 'listBullet' as IconType,
    name: 'Content',
  },
]

const tabOpen = ref(false)
const tabIndex = ref(0)

const toggleTab = (index: number) => {
  if (!tabOpen.value) {
    tabOpen.value = true
  } else if (tabIndex.value === index) {
    tabOpen.value = false
  }

  tabIndex.value = index
}
</script>

<template>
  <div class="relative">
    <div class="flex flex-col p-2 gap-2 border-r border-black h-full">
      <button
        v-for="(tab, i) in tabs"
        :class="['tab', { active: i === tabIndex && tabOpen }]"
        @click="toggleTab(i)"
      >
        <Icon :name="tab.icon" />
      </button>
    </div>
    <div v-show="tabOpen" class="panel-level">
      <div class="flex justify-between items-center mb-4">
        <div>{{ tabs[tabIndex].name }}</div>
        <button @click="toggleTab(tabIndex)">
          <Icon name="xMark" />
        </button>
      </div>
      <component :is="tabs[tabIndex].component" :tab-open="tabOpen" />
    </div>
  </div>
</template>

<style>
.panel-level {
  @apply p-4 w-56 border-r border-black shrink-0 absolute top-0 left-full bg-white h-full;
}
</style>

<style scoped>
.tab {
  @apply leading-none p-1 rounded border border-black text-black hover:border-blue-600 hover:text-blue-600;
}

.tab.active {
  @apply border-blue-600 text-blue-600;
}
</style>
