<template>
  <m-search 
    v-model="searchText"
    @search="onSearchHandler"
    @clear="onSearchHandler"
  >
    <template #dropdown>
      <!-- 搜索提示 -->
      <hint-vue 
        v-show="searchText" 
        @itemClick="onSearchHandler" 
        :searchText="searchText"
      ></hint-vue>
      <!-- 搜索记录 -->
      <history-vue v-show="!searchText" @itemClick="onSearchHandler" ></history-vue>
    </template>
  </m-search>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import HintVue from "./hint.vue"
import HistoryVue from "./history.vue";

const store = useStore()

const searchText = ref('')
// 搜索处理
const onSearchHandler = (val) => {
  searchText.value = val
  if(val) {
    // 添加到搜索记录中
    store.commit('search/addHistory', val)
    // 触发修改搜索文本
    store.commit('app/changeSearchText', val)
  }
}

</script>
