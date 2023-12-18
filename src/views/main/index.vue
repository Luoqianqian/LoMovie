<template>
  <div class=" h-full overflow-auto">
    <navigation-vue></navigation-vue>
    <div class=" my-3 mx-auto max-w-screen-lg">
      <list-vue></list-vue>
    </div>
  </div>
</template>

<script setup>
import NavigationVue from './components/navigation/index.vue'
import ListVue from './components/list/index.vue'
</script>
