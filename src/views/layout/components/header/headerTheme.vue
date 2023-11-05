<template>
  <m-popover placement="bottom-left">
    <template #reference>
      <m-svg-icon class=" w-4 h-4" name="theme-light" /> 
    </template>
    <div>
      <div class=" flex py-2 px-3 gap-1 justify-start items-center cursor-default hover:bg-zinc-100 text-xs w-[120px]" v-for="item in themeArr" :key="item.id">
        <m-svg-icon class=" w-3 h-3" :name="item.icon" />
        <span class=" tracking-widest">{{ item.name }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM, themeArr } from '@/constants'

</script>

<style>

</style>