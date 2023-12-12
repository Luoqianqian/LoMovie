<template>
  <div 
    class=" flex dark:bg-zinc-800 dark:border-b-zinc-700 px-3 justify-between gap-5 h-[72px] items-center border-b border-zinc-100"
  >
    <m-svg-icon 
      class=" w-8 h-8" 
      name="home" 
      fillClass="fill-zinc-800 dark:fill-zinc-300" 
      @click="onToHome"
    ></m-svg-icon>
    <HeaderSearch></HeaderSearch>
    <HeaderTheme></HeaderTheme>
    <HeaderMy></HeaderMy>
  </div>
</template>

<script setup>
import HeaderMy from './header/headerMy.vue'
import HeaderSearch from './header/header-search/index.vue'
import HeaderTheme from './header/headerTheme.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const onToHome = () => {
  router.push('/')
}

</script>