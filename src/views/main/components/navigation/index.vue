<template>
  <mobileNav v-if="isMobileTerminal" :data="categorys" />
  <pcNav v-else />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNav from './mobile/index.vue'
import pcNav from './pc/index.vue'
import { getCategory } from '@/api/category.js'
import { ref } from 'vue'

const categorys = ref([])

const getCategoryData = async () => {
  const categoryData = await getCategory()
  categorys.value = categoryData
}

getCategoryData()

</script>
