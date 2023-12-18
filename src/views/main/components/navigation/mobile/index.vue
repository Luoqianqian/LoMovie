<template>
  <div class="sticky left-0 top-[-1px] z-10 bg-zinc-100 dark:bg-zinc-900">
    <ul 
      class=" relative text-zinc-600 flex text-xs p-2 items-center overflow-x-auto overflow-hidden last:mr-6"
      ref="ulTarget"
    >
      <!-- category item -->
      <li 
        v-for="(item, index) in $store.getters.catagories"
        :key="item.id"
        @click="onItemClick(index)"
        class=" shrink-0 px-2.5 py-1 z-10 "
        :class="{'text-zinc-100': $store.getters.currentCatagoryIndex === index}"
        :ref="setItemRef"
      >
      {{ item.name }}
      </li>
      <!-- 汉堡按钮 -->
      <li 
        class=" bg-zinc-100 dark:bg-zinc-900 fixed z-20 px-1 right-0 top-2.5 flex items-center shadow-l-white"
        @click="isOpenPopup = !isOpenPopup"
      >
        <m-svg-icon class=" h-4 w-4" name="hamburger"> </m-svg-icon>
      </li>
      <!-- 滑块 -->
      <li 
        class=" absolute bg-zinc-900 h-[22px] rounded-lg duration-200"
        :style="sliderStyle"
      ></li>
    </ul>
    <m-popup v-model:isOpen="isOpenPopup">
      <Menu :categories="$store.getters.getCategories" @onItemClick="onItemClick" />
    </m-popup>
  </div>
</template>

<script setup>
import { onBeforeUpdate, ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import Menu from '@/views/main/components/menu/index.vue'

const isOpenPopup = ref(false)
const currentCategoryIndex = ref(0)
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})

let itemRefs = []

const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  } 
}

const ulTarget = ref(null)
// 返回响应式对象
const { x } = useScroll(ulTarget)
watch(currentCategoryIndex, (val) => {
  // 获取选中元素的宽度和left
  const { left, width } = itemRefs[val].getBoundingClientRect()
  sliderStyle.value = {
    // 横向偏移量 = ul滚动距离 + 元素left - ul pendding
    transform: `translateX(${x.value + left - 8 + 'px'})`,
    width: width + 'px'
  } 
})

const onItemClick = (index) => {
  currentCategoryIndex.value = index
  isOpenPopup.value = false
}

onBeforeUpdate(() => {
  itemRefs = []
})

</script>