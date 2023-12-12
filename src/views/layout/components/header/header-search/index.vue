<template>
  <m-search 
    v-model="keyWords"
    @search="onSearchHandler"
    @clear="onSearchHandler"
  >
    <template #dropdown>
      <!-- 搜索提示 -->
      <hint-vue v-show="keyWords" @itemClick="onSearchHandler" :searchText="keyWords"></hint-vue>
      <!-- 搜索记录 -->
      <div>{{ keyWords }}</div>
    </template>
  </m-search>
</template>

<script setup>
import { ref } from "vue";
import hintVue from "./hint.vue";

const keyWords = ref('')

const onSearchHandler = (val) => {
  keyWords.value = val
  if(val) {
    store.commit('search/addHistory', val)
    store.commit('app/changeSearchText', val)
  }
}

</script>
