<template>
  <div 
    class=" bg-white relative"
    @click="onImgClick"
  >
    <img ref="imgTarget" :src="item.img_url" alt="item" :style="{height: (width / item.width) * item.height + 'px'}"/>
    <div
      class="hidden opacity-0 w-full h-full bg-zinc-900/50 absolute top-0 left-0 rounded duration-300 group-hover:opacity-100 xl:block"
    >
      <m-button class="absolute top-1.5 left-1.5" @click="onShareClick"
        >分享</m-button
      >
      <m-button
        class="absolute top-1.5 right-1.5"
        type="info"
        icon="heart"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
      />
      <m-button
        class="absolute bottom-1.5 left-1.5 bg-zinc-100/70"
        type="info"
        size="small"
        icon="download"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
        @click="onDownload"
      />
      <m-button
        class="absolute bottom-1.5 right-1.5 bg-zinc-100/70"
        type="info"
        size="small"
        icon="full"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
        @click="onImgFullScreen"
      />
    </div>
    <div>{{ item.movie_title }}</div>
    <div><span>评分：</span>{{ item.score }}</div>
  </div>

</template>

<script setup>
import { useFullscreen, useElementBounding } from '@vueuse/core'
import { ref, computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  width: {
    type: Number,
    default: 0
  }
})

const emits = defineEmits(['click'])

const itemHeight = computed(() => {
  return item.height? (width / item.width) * item.height: 280
})

const imgTarget = ref(null)

const { 
  x: imgContainerX,
  y: imgContainerY,
  width: imgContainerWidth,
  height: imgContainerHeight
} = useElementBounding(imgTarget)
const imgContainerCenter = computed(() => {
  return {
    translateX: parseInt(imgContainerX.value + imgContainerWidth.value / 2),
    translateY: parseInt(imgContainerY.value + imgContainerHeight.value / 2)
  }
})

// img 跳转处理，记录图片的中心点（x|y位置 + 宽|高的一半）
const onImgClick = () => {

}

const onShareClick = () => {}

const onDownload = () => {}

const { enter: onImgFullScreen } = useFullscreen(imgTarget)

</script>
