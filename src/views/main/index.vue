<template>
  <div class=" h-full overflow-auto">
    <NavigationVue />
    <div class=" my-3 mx-auto max-w-screen-lg">
      <ListVue></ListVue>
    </div>
  </div>
</template>

<script setup>
import NavigationVue from './components/navigation/index.vue'
import ListVue from './components/list/index.vue'
</script>
