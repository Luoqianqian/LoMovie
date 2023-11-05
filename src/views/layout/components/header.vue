<template>
  <div class=" flex px-3 justify-between gap-2 h-[72px] items-center border-b border-zinc-100">
    <m-svg-icon class=" w-6 h-6" name="pig" ></m-svg-icon>
    <headerSearch></headerSearch>
    <headerTheme></headerTheme>
    <headerMy></headerMy>
  </div>
</template>

<script setup>
import headerMy from './header/headerMy.vue'
import headerSearch from './header/headerSearch.vue'
import headerTheme from './header/headerTheme.vue'
</script>