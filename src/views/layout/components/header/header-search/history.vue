<!-- 搜索历史 -->
<template>
  <div>
    <div>
      <span>最近搜索</span>
      <m-svg-con
        class="w-3 h-3 ml-2 p-1cursor-pointer duration-300 rounded-sm hover:bg-zinc-100"
        fillClass="fill-zinc-400"
        name="delete"
        @click="onDeleteAll"
      >
      </m-svg-con>
    </div>
    <div>
      <div 
        v-for="(item, index) in $store.getters.histories" 
        :key="index"
        @click="onItemClick(item)"
      >
          <span>{{ item }}</span>
          <m-svg-icon
            name="delete"
            class="w-2.5 h-2.5 p-0.5 ml-1 duration-300 rounded-sm hover:bg-zinc-100"
            @click="onDeleteSingle(index)"
          ></m-svg-icon>
      </div>
 
    </div>
  </div>
</template>

<script>
// 点击item触发父组件搜索事件
const emits = defineEmits(['itemClick'])
const onItemClick = (item) => {
  emits('itemClick', item)
}
// 删除所有历史记录
const onDeleteAll = () => {}

// 删除单个历史记录
const onDeleteSingle = () => {}
</script>
