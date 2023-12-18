<!-- 搜索提示 -->
<template>
  <div>
    <div 
      v-for="(item, index) in hintData"
      :key="index"
      @click="onItemClick(item.movie_title)"
    >
      <p class=" w-full py-1 px-2 hover:cursor-default hover:bg-zinc-100" v-html="highlightText(item.movie_title)"></p>
    </div>
  </div>
</template>

<script setup>
import { getHint } from '@/api/movies.js'
import { ref } from 'vue'
import { watchDebounced } from '@vueuse/core'

// 接收搜索文本
const props = defineProps({
  searchText: String,
})

// 处理搜索提示数据
const hintData = ref([])

const getHintData = async () => {
  hintData.value = await getHint(props.searchText)
}
// 搜索文本改变触发重新获取搜索提示
watchDebounced(() => props.searchText, getHintData)

// item 被点击触发父组件的搜索处理
const emits = defineEmits(['itemClick'])

const onItemClick = (value) => {
  emits('itemClick', value)
}

// 高亮处理searchText
const highlightText = (text) => {
  // 生成高亮标签
  const highlightStr = `<span class="text-zinc-900 dark:text-zinc-200">${props.searchText}</span>`
  // 正则找出文本中等于searchText的文本用高亮文本替换
  const reg = new RegExp(props.searchText, 'gi')
  // 替换
  return text.replace(reg, highlightStr)
}

</script>