<template>
  <div>
    <!-- 蒙版 全屏 -->
    <transition name="fade">
      <div 
        v-if="isVisable"
        @click="close"
        class=" w-screen h-screen bg-zinc-900/80 fixed top-0 left-0"
      >
      </div>
    </transition>

    <!-- 内容 -->
    <transition name="up">
      <div
        v-if="isVisable"
        class=" w-[80%] fixed top-1/3 left-[50%] translate-x-[-50%] z-50 rounded-sm px-4 py-2 "
      >
        <!-- 标题 -->
        <div>
          {{ title }}
        </div>
        <!-- 内容 -->
        <div>
          {{ content }}
        </div>
        <!-- 按钮 -->
        <div class=" flex justify-end">
          <m-button type="info" @click="onCancelHandler">
            {{ cancelText }}
          </m-button>
          <m-button type="primary" @click="onConfirmHandler">
            {{ confirmText }}
          </m-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: {
    type: String
  },
  content: {
    type: String,
    retuired: true
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  cancelHandler: {
    type: Function
  },
  confirmHandler: {
    type: Function
  },
  close: {
    type: Function
  }
})

const duration = '0.5s'

const isVisable = ref(false)

/**
 * confirm 关闭，保留动画执行时长再关闭
 */
const close = () => {
  isVisable.value = false
  setTimeout(() => {
    if(props.close) {
      props.close()
    }
  }, parseInt(duration.replace('0.', '').replace('s', '')) * 100)
}

// 取消按钮点击事件
const onCancelHandler = () => {
  if(props.cancelHandler) {
    props.cancelHandler()
  }
  close()
}

// 确定按钮点击事件
const onConfirmHandler = () => {
  if(props.confirmHandler) {
    props.confirmHandler()
  }
  close()
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all v-bind(duration);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.up-enter-active,
.up-leave-active {
  transition: all v-bind(duration);
}

.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 100px, 0);
}
</style>
