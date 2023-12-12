<template>
  <div class=" relative"  @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <!-- 具名插槽触发pop -->
    <div ref="referenceTarget">
      <slot name="reference" />
    </div>
    <!-- 匿名插槽pop -->
    <transition name="slide">
      <div
        v-if="isVisable"
        class=" absolute z-20 bg-white dark:border-zinc-700 dark:bg-zinc-800 border bg-right rounded"
        ref="contentTarget"
        :style="contentStyle"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";

// 延迟关闭时长
const DELAY_TIME = 150

const PROP_TOP_LEFT = 'top-left'
const PROP_TOP_RIGHT = 'top-right'
const PROP_BOTTOM_LEFT = 'bottom-left'
const PROP_BOTTOM_RIGHT = 'bottom-right'

// 定义指定位置的 Enum
const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT
]

const props = defineProps({
  placement: {
    type: String,
    default: PROP_BOTTOM_LEFT,
    // validator(val) {
    //   const result = placementEnum.includes(val)
    //   if(!result) {
    //     throw new Error(`你的 placement 必须是 ${placementEnum.join('、')} 中的一个`)
    //   } 
    // }
  }
})

const isVisable = ref(false)
let timeout = null

const onMouseLeave = () => {
  timeout = setTimeout(() => {
    isVisable.value = false
    timeout = null
  }, DELAY_TIME)
}
const onMouseEnter = () => {
  isVisable.value = true
  if(timeout) {
    clearTimeout(timeout)
  }
}

// 计算元素尺寸
const referenceTarget = ref(null)
const contentTarget = ref(null)
const useElementSize = (target) => {
  if(!target) return {}
  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
}

// 计算弹层位置
const contentStyle = ref({
  top: 0,
  left: 0
})

watch(isVisable, (val) => {
  if(!val) return
  // 等待渲染成功之后
  nextTick(() => {
    switch (props.placement) {
      // 左上
      case PROP_TOP_LEFT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      // 右上
      case PROP_TOP_RIGHT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          useElementSize(referenceTarget.value).width + 'px'
        break
      // 左下
      case PROP_BOTTOM_LEFT:
        contentStyle.value.top =
          useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      // 右下
      case PROP_BOTTOM_RIGHT:
        contentStyle.value.top =
          useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left =
          useElementSize(referenceTarget.value).width + 'px'
        break
    }
  })
})

</script>

<style>
.slide-enter-from,
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
</style>