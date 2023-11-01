import { computed } from 'vue';

/**
 * 判断当前是否为移动设备
 */
export const isMobileTerminal = computed(() => {
  // 方式1：
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
  // return width.value < PC_DEVICE_WIDTH
})