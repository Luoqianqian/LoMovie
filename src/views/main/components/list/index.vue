<template>
  <div>
    <m-infinite-list
      v-model:loading="isLoading"
      :isFinished="isFinished"
      @onLoad="getData"
    >
      <m-waterfall
        :data="movies"
        :column="isMobileTerminal? 2 : 5"
        :picturePreReading="false"
        class="w-full px-1"
      >
        <template v-slot="{ item, width }">
          <ItemVue :item="item" :width="width" />
        </template>
      </m-waterfall>
    </m-infinite-list>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getMoviesList } from '@/api/movies.js'
import ItemVue from './item.vue'
import { isMobileTerminal } from '@/utils/flexible.js'

const moviesTotal = 60

const query = {
  page: 1,
  size: 20,
  category: ''
}

// 数据是否在加载中
const isLoading = ref(false)
// 数据是否全部加载完成
const isFinished = ref(false)
// 数据源
const movies = ref([])

const getData = async () => { 
  // 如果数据已经全部加载完毕，中断请求
  if(isFinished.value) return 

  // 如果已经请求过数据，page+1
  if(movies.value.length) {
    query.page += 1
  }

  const res = await getMoviesList(query)
  if (query.page === 1) {
    movies.value = res
  } else {
    movies.value.push(...res)
  }
  if(movies.value.length >= moviesTotal) {
    isFinished.value = true
  }
  isLoading.value = false
}
</script>
