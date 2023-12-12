<template>
  <MobileNav v-if="isMobileTerminal" />
  <PcNav v-else />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import MobileNav from './mobile/index.vue'
import PcNav from './pc/index.vue'
import { useStore } from 'vuex'

const store = useStore()

store.dispatch('category/useCategoriesData')
</script>
