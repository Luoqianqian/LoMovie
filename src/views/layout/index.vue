<template>
  <div class=" h-screen">
    <HeaderVue class=" h-header" />
    <div class=" h-main">
      <router-view></router-view>
    </div>
    <FloatingVue />
  </div>
</template>

<script setup>
import FloatingVue from './components/floating.vue'
import HeaderVue from './components/header.vue'
</script>
