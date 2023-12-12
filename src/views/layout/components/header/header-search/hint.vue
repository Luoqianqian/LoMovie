<!-- 搜索提示 -->
<template>
  <div>
    <div 
      v-for="(item, index) in hintData"
      :key="index"
      @click="onItemClick"
    >
      {{ item.value }}
    </div>
  </div>
</template>

<script setup>
import { getHint } from '@/api/movies.js'
import { watch } from 'vue'
// 接收搜索文本
const props = defineProps({
  searchText: String,
})

// 处理搜索提示数据
const hintData = ref([])

const getHintData = async (value) => {
  hintData.value = await getHint(value)
}
// 搜索文本改变触发重新获取搜索提示
watch(() => props.searchText, () => {
  getHintData(props.searchText)
})

</script>