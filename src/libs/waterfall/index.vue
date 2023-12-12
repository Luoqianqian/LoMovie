<template>
  <div
    class=" relative bg-white"
    :style="{height: containerHeight + 'px'}"
    ref="containerTarget"
  >
    <template v-if="columnWidth && data.length">
      <div
        class=" m-waterfall-item absolute"
        :style="{
          width: columnWidth + 'px',
          left: item._style?.left + 'px',
          top: item._style?.top + 'px',
        }"
        v-for="(item, index) in data"
        :key="index"
      >
        <slot :item="item" :width="columnWidth"  />
      </div>
    </template>
  </div>
</template>

<script setup>
import { nextTick, 
  onMounted, 
  onUnmounted, 
  ref, 
  computed,
  watch, 
  watchEffect
} from "vue"

import {
  getImgs,
  onCompleteImgs,
  getImgElements,
  getMinHeightColumn,
  getMinHeight,
  getMaxHeight
} from './utils.js'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  column: {
    type: Number,
    default: 2
  },
  columnSpacing: {
    type: Number,
    default: 20
  },
  rowSpacing: {
    default: 20,
    type: Number
  },
  picturePreReading: {
    type: Boolean,
    default: true,
  }
})

// 容器的总高度，由最高列决定
const containerHeight = ref(0)
// 记录每列高度
const columnHeightObj = ref({})
// 循环初始化每列高度为0
const useColumnHeightObj = () => {
  for(let i=0; i<props.column; i++) {
    columnHeightObj.value[i] = 0
  }
}
// 容器实例
const containerTarget = ref(null)
// 容器总宽度(不包含padding、margin、bording)
const containerWidth = ref(0)
// 容器左边距
const containerLeft = ref(0)

// 计算容器宽度
const useContainerWidth = () => {
  const { paddingLeft, paddingRight } = getComputedStyle(containerTarget.value, null)
  containerLeft.value = parseFloat(paddingLeft)
  containerWidth.value = containerTarget.value.offsetWidth - 
  parseFloat(paddingLeft) -
  parseFloat(paddingRight)
}
// 列宽
const columnWidth = ref(0)

const columnSpacingTotal = computed(() => { 
  return ( props.column - 1 ) * props.columnSpacing 
})

const useColumnWidth = () => {
  useContainerWidth()
  columnWidth.value = (containerWidth.value - columnSpacingTotal.value) / props.column
}
// 挂载后计算列宽
onMounted(() => {
  useColumnWidth()
})
// item 高度集合
let itemHeights = []
// 预加载图片，监听所有图片加载完成
const waitImgComplete = () => {
  itemHeights = []
  // 拿到所有item
  const itemElements = [...document.getElementsByClassName('m-waterfall-item')]
  // 拿到所有item里面的img
  const imgElements = getImgElements(itemElements)
  // 拿到所有图片
  const imgs = getImgs(imgElements)
  // 通过promise.all监听所有图片加载完成，就可以获取图片高度
  onCompleteImgs(imgs).then(() => {
    itemElements.forEach(element => {
      console.log(element)
      itemHeights.push(element.offsetHeight)
    });
    console.log(itemHeights)
      // 渲染位置
    useItemLocation()
  })

}

// 图片不需要预加载时，计算item高度

const useItemHeight = () => {
  itemHeights = []

  // 拿到所有元素
  let itemElements = Array.from(document.getElementsByClassName('m-waterfall-item'))
  // 计算item高度, offsetHeight包括padding,border
  itemElements.forEach((el) => {
    itemHeights.push(el.offsetHeight)
  })
  useItemLocation()
}

// 为每个 item 生成位置属性
const useItemLocation = () => {
  props.data.forEach((item, index) => {
    // 避免重复计算
    if(item._style) return
    item._style = {}
    item._style.left = getItemLeft()
    item._style.top = getItemTop()
    // 指定列高度
    increasingHeight(index)
  })
  // 指定容器高度
  containerHeight.value = getMaxHeight(columnHeightObj.value)
}
// 返回下一个item的left
const getItemLeft = () => {
  // 最小高度所在的列 * （列宽 + 间距） + 容器左边距
  const column = getMinHeightColumn(columnHeightObj.value)
  const left = column * (columnWidth.value + props.columnSpacing) + containerLeft.value
  return left
}
// 返回下一个item的top
const getItemTop = () => {
  // 列高对象中的最小高度
  return getMinHeight(columnHeightObj.value)
}

const increasingHeight = (index) => {
  // 最小高度所在的列
  const minHeightColumn = getMinHeightColumn(columnHeightObj.value)
  // 最小高度列 增加 新高度
  columnHeightObj.value[minHeightColumn] += 
  itemHeights[index] + props.rowSpacing
}

// 在组件销毁时，清除所有的_style
onUnmounted(() => {
  props.data.forEach((item) => {
    delete item._style
  })
})
// data数据变化时，触发重新计算
watch(
  () => props.data, 
  (newVal) => {
    console.log('数据重置了')
    // 重置数据源
    const resetColumnHeight = newVal.every((item) => !item._style)
    if(resetColumnHeight) {
      useColumnHeightObj()
    }
    // 在 DOM 更新之后执行回调函数,确保Dom更新后拿数据
    nextTick(() => {
      if(props.picturePreReading) {
        console.log('pre')
        waitImgComplete()
      } else {
        useItemHeight()
      }
    })
  },
  {
    immediate: false,
    deep: true
  }
)

/**
 * 监听列数变化，重新构建瀑布流
 */
const reset = () => {
  setTimeout(() => {
    // 重新计算列宽
    useColumnWidth()
    props.data.forEach((item) => {
      item._style = null
    })
  }, 200)
}

watch(
  () => props.column,
  () => {
    if (props.picturePreReading) {
      // 在 picturePreReading 为 true 的前提下，需要首先为列宽滞空，列宽滞空之后，会取消瀑布流渲染
      columnWidth.value = 0
      // 等待页面渲染之后，重新执行计算。否则在 item 没有指定过高度的前提下，计算出的 item 高度会不正确
      nextTick(reset)
    } else {
      reset()
    }
  }
)

</script>
