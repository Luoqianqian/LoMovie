<template>
  <div>
    <!-- 内容瀑布流 -->
    <slot />
    <div ref="loadingTarget" class=" h-10 py-4">
      <!-- 加载更多 -->
      <m-svg-icon v-show="isLoading" class="w-4 h-4 mx-auto fill-zinc-400" name="infinite-load"></m-svg-icon>
      <!-- 全部加载完成 -->
      <p v-if="isFinished" class=" text-center text-zinc-400">全部加载完成</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useIntersectionObserver, useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  isFinished: {
    type: Boolean,
    default: false
  }
})
// 注册事件：触发load,更新loading状态
const emits = defineEmits(['onLoad', 'update:modelValue' ])

// 处理loading状态
const isLoading = useVModel(props, 'modelValue', emits)

// 可见元素
const loadingTarget = ref(null)
const isTargetInersecting = ref(false)
useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
  isTargetInersecting.value = isIntersecting
  emitLoad()
})

// 触发load
const emitLoad = () => {
  // 如果元素可见 & 非加载中状态 & 未全部加载完成， 请求数据
  if(isTargetInersecting.value && !isLoading.value && !props.isFinished) {
    isLoading.value = true
    emits('onLoad')
  }
}
// isLoading状态变化，触发数据加载
watch(isLoading, () => {
  // 数据加载完成一次后，loaind状态修改为false再次触发数据加载，数据没有及时显示会再次触发数据加载
  setTimeout(() => {
    emitLoad()
  }, 100)
})

</script>
