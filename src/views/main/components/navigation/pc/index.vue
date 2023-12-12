<template>
  <div 
    class="w-full sticky top-1 left-0 py-2 dark:text-zinc-100 dark:bg-zinc-800"
  >
    <ul 
      class=" w-1/2 mx-auto px-[20px] relative flex justify-center duration-200 flex-wrap overflow-x-auto overflow-hidden "
      :class="[isUnfold ? `h-full` : `h-[28px]`]"
    >
      <div 
        class=" absolute bottom-0 right-0 rounded-lg duration-200 p-2 dark:hover:bg-zinc-900 hover:bg-zinc-100 "
        @click="triggerHandle"
      >
        <m-svg-icon
          class=" w-2.5 h-2.5" 
          :name="isUnfold? `fold` : `unfold`"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
      </div>
      <li 
        v-for="(item, index) in $store.getters.getCategories" 
        :key="item.id"
        @click="onCategoryClick(index)"
        class=" shrink-0 px-2.5 font-bold py-1 text-sm rounded-lg cursor-default"
        :class="{ 'bg-zinc-200 dark:text-zinc-800': index === currentCategory}"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from 'vuex'

const store = useStore()
const currentCategory = ref(0)
const isUnfold = ref(false)

const triggerHandle = () => {
  isUnfold.value = !isUnfold.value
}

const onCategoryClick = (index) => {
  currentCategory.value = index
}


</script>
