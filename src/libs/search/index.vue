<template>
  <div
    ref="containerTarget"
    class=" flex group relative w-full p-0.5 items-center gap-1 border-white hover:bg-red-100/50 rounded-full bg-zinc-100"
  >
    <!-- 搜索图标 -->
    <m-svg-icon class=" w-4 h-4 absolute left-2 " name="search" color="#707070"></m-svg-icon>
    <!-- 输入框 -->
    <input 
      v-model="inputValue"
      @focus="onFocusHandler"
      @blur="onBlurHandler"
      @keyup.enter="onSearchHandler"
      type="text"
      class=" w-full rounded-full pl-7 h-[45px] bg-zinc-100 outline-none duration-500 border text-sm hover:bg-white dark:focus:border-zinc-200 focus:border-red-300"
      placeholder="search" />
    <!-- 删除按钮 -->
    <m-svg-icon @click="onClearClick" v-show="inputValue" name="input-delete" class=" w-4 h-4 absolute right-14 duration-500"></m-svg-icon>
    <!-- 分割线 -->
    <div class=" opacity-0 w-[2px] h-5 bg-zinc-100 duration-500 absolute right-12 group-hover:opacity-100"></div>
    <!-- 通用组件：搜索按钮 -->
    <m-button class=" absolute right-4 rounded-full opacity-0 duration-500 group-hover:opacity-100 " icon="search" iconColor="#ffffff"></m-button>
      <!-- 下拉区 -->
    <transition name="slide">
      <div 
        class=" w-full max-h-[368px] overflow-auto absolute left-0 top-[56px] border border-zinc-200 z-10 rounded-lg bg-white hover:shadow-lg "
        v-if="$slots.dropdown"
        v-show="isFocus"
      >
        <slot name="dropdown" />
      </div>
    </transition>
 </div>
</template>

<script setup>
import { ref } from 'vue'
import { useVModel, onClickOutside } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['blur', 'search', 'input', 'focus','update:modelValue', 'clear'])

// 输入文本
const inputValue = useVModel(props, 'modelValue', emits)

// 清空文本
const onClearClick = () => {
  inputValue.value = ''
  emits('search', inputValue.value)
}

// 触发搜索
const onSearchHandler = () => {
  emits('search', inputValue.value)
}

// 监听焦点行为
const isFocus = ref(false)
const containerTarget = ref(null)

const onFocusHandler =  () => {
  isFocus.value = true
  emits('focus')
}

// 失去焦点
const onBlurHandler = () => {
  emits('blur')
}

// 点击区域外隐藏 dropdown
onClickOutside(containerTarget, () => {
  isFocus.value = false
})

</script>

<style>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}
</style>