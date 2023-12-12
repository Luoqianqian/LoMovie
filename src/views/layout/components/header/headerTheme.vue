<template>
  <m-popover placement="bottom-left">
    <template #reference>
      <m-svg-icon class=" w-4 h-4" :name="svgName" fillClass="fill-zinc-900 dark:fill-zinc-300" /> 
    </template>
    <div class="w-[120px] overflow-hidden">
      <div 
        class=" flex py-2 px-3 gap-1 justify-center items-center cursor-default hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs w-[120px]" 
        v-for="item in themeArr" 
        :key="item.id"
        @click="onItemClick(item.type)"
      >
        <m-svg-icon 
          class=" w-3 h-3" 
          :name="item.icon"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        />
        <span class=" tracking-widest dark:text-zinc-300">{{ item.name }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
import { themeArr } from '@/constants'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 根据主题模式找到对应的icon
const svgName = computed(() => {
  const findTheme = themeArr.find((item) => {
    return item.type === store.getters.getThemeType
  })
  return findTheme?.icon || themeArr[0].icon
})

const onItemClick = (type) => {
  store.commit('theme/changeThemeType', type)
}

</script>
