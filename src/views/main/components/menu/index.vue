<template>
  <div class=" h-[80vh] p-2">
    <ul class=" overflow-y-scroll flex flex-col gap-2 ">
      <h2>所有分类</h2>
      <li 
        v-for="(item, index) in categorys" :key="item.id"
        @click="$emit('onItemClick', index)"
        class=" active:bg-slate-100 p-1 cursor-default"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>

const props = defineProps({
  categorys: {
    type: Array,
    required: true
  }
})
// 所有事件手动注册
defineEmits(['onItemClick'])

</script>

<style>

</style>