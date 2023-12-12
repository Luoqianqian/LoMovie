// 从item中抽离imgeElement
export const getImgElements = (itemElements) => {
  const imgElements = []
  itemElements.forEach((el) => {
    imgElements.push(...el.getElementsByTagName('img'))
  })
  return imgElements
}

/**
 * 生成所有的图片链接数组
 */
export const getImgs = (imgElements) => {
  return imgElements.map((imgElement) => {
    return imgElement.src
  })
}

// 监听图片数组加载完成 通过（promise.all完成）
export const onCompleteImgs = (imgs) => {
  const promiseAll = []
  // 为每张图片构建promise
  imgs.forEach((img, index) => {
    promiseAll[index] = new Promise((resolve, reject) => {
      const imgObj = new Image()
      imgObj.src = img
      imgObj.onload = () => {
        resolve({img, index})
      }
    })
  })
  return Promise.all(promiseAll)
}

/**
 * 返回列高对象中的最小高度所在的列
 */
export const getMinHeightColumn = (columnHeightObj) => {
  const minHeight = getMinHeight(columnHeightObj)
  return Object.keys(columnHeightObj).find((key) => {
    return columnHeightObj[key] === minHeight
  })
}

/**
 * 返回列高对象中的最小的高度
 */
export const getMinHeight = (columnHeightObj) => {
  const columnHeightArr = Object.values(columnHeightObj)
  return Math.min(...columnHeightArr)
}

/**
 * 返回列高对象中的最大的高度
 */
export const getMaxHeight = (columnHeightObj) => {
  const columnHeightArr = Object.values(columnHeightObj)
  return Math.max(...columnHeightArr)
}