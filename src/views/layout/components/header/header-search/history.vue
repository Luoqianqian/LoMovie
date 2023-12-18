<!-- 搜索历史 -->
<template>
  <div class=" py-1 px-2">
    <div class=" flex items-center">
      <span>最近搜索</span>
      <m-svg-icon
        class="w-4 h-4 ml-2 p-1cursor-pointer duration-300 rounded-sm hover:bg-zinc-100"
        fillClass="fill-zinc-400"
        name="delete"
        @click="onDeleteAll"
      >
      </m-svg-icon>
    </div>
    <div class=" flex gap-2 mt-2">
      <div 
        v-for="(item, index) in $store.getters.histories" 
        :key="index"
        @click="onItemClick(item)"
        class="flex items-center hover:cursor-default"
      >
          <span>{{ item }}</span>
          <m-svg-icon
            name="delete"
            fillClass="fill-zinc-400"
            class="w-6 h-6 p-1.5 duration-300 rounded-sm hover:bg-zinc-100"
            @click="onDeleteSingle(index)"
          ></m-svg-icon>
      </div>
 
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
// import { confirm } from '@/libs'

const store = useStore()

// 点击item触发父组件搜索事件
const emits = defineEmits(['itemClick'])
const onItemClick = (value) => {
  emits('itemClick', value)
}
// 删除所有历史记录
const onDeleteAll = () => {
  store.commit('search/deleteAllHistory')
  // confirm('确定清除所有历史记录吗？').then(() => {
  //   store.commit('search/deleteAllHistory')
  // })
}

// 删除单个历史记录
const onDeleteSingle = (index) => {
  store.commit('search/deleteHistory', index)
}
</script>
