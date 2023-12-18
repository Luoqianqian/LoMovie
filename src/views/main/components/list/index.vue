<template>
  <div>
    <m-infinite-list
      v-model="isLoading"
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
import { ref, watch } from 'vue';
import { getMoviesList } from '@/api/movies.js'
import ItemVue from './item.vue'
import { isMobileTerminal } from '@/utils/flexible.js'
import { useStore } from 'vuex';

const moviesTotal = 60

const store = useStore()

let query = {
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
    movies.value = res || []
  } else {
    movies.value.push(...res)
  }
  // 如果查找的数据不够20
  if(res.length < 20) {
    isFinished.value = true
  }
  // 请求的数据
  if(movies.value.length >= moviesTotal) {
    isFinished.value = true
  }
  isLoading.value = false
}

// 修改请求参数，重新发起请求
const resetQuery = (newQuery) => {
  query = {...query, ...newQuery}
  // 重置状态
  isFinished.value = false
  // 清空movie值，会自动触发重新加载
  movies.value = []
}

// 监听searchText内容，触发修改请求参数
watch(() => store.getters.searchText, (val) => {
  resetQuery({
    page: 1, 
    searchText: val
  })
})
// 监听currentCategory变化，触发更改请求参数
watch(() => store.getters.currentCatagory, (currentCatagory) => {
  resetQuery({
    page: 1,
    catagory: currentCatagory.value
  })
})
</script>
