<template>
  <m-search 
    v-model="keyWords"
  >
    <template #dropdown>
      <div>{{ keyWords }}</div>
    </template>
  </m-search>
</template>

<script setup>
import { ref } from "vue";

const keyWords = ref('')

</script>

<style>

</style>