<template>
  <m-popover>
    <template #reference>
      <div class=" relative flex justify-center items-center">
        <img v-lazy class=" w-4 h-4 " src="/vite.svg" />
        <m-svg-icons class=" w-4 h-4" name="down-arrow"></m-svg-icons>
      </div>
    </template>
    <div class=" w-[120px]">
      <div
        v-for="item in menuArr"
        :key="item.id"
        class=" hover:bg-zinc-100 flex items-center cursor-default text-xs gap-1 pl-3 py-2"
      >
        <m-svg-icon class=" w-3 h-3" :name="item.icon"></m-svg-icon>
        <span class=" tracking-widest"> {{ item.title }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
// 构建 menu 数据源
const menuArr = [
  {
    id: 0,
    title: '个人资料',
    icon: 'profile',
    path: '/profile'
  },
  {
    id: 1,
    title: '升级 VIP',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    id: 2,
    title: '退出登录',
    icon: 'logout',
    path: ''
  }
]

</script>

<style>

</style>