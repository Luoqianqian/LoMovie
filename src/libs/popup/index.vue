<template>
  <div>
    <Teleport to="body">
      <!-- 遮罩 -->
      <transition name="fade">
        <div
          v-if="isOpen"
          @click="$emit('update:isOpen', false)"
          class=" w-screen h-screen bg-zinc-900/80 fixed top-0 left0 z-30"
        >
        </div>
      </transition>
      <!-- 内容 -->
      <transition name="popup-down-up">
        <div 
          v-if="isOpen"
          class=" w-screen bg-white z-40 fixed bottom-0 "
          v-bind="$attrs"
        >
          <slot />
      </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean
})

defineEmits(['update:isOpen'])


</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active {
  transition: all 0.3s;
}

.popup-down-up-leave-active {
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>