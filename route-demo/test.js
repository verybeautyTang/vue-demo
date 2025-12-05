// **要求**：实现一个函数 `transformData`，将扁平化的数据转换成树形结构。
const input = [
  { id: 1, name: '部门A', parentId: null },
  { id: 2, name: '部门B', parentId: 1 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 2 },
  { id: 5, name: '部门E', parentId: null },
]

function transformData(data) {
  // 创建id到节点的映射
  const nodeMap = new Map()
  const tree = []

  // 第一次遍历：初始化所有节点
  data.forEach((item) => {
    nodeMap.set(item.id, { ...item, children: [] })
  })

  // 第二次遍历：建立父子关系
  data.forEach((item) => {
    const node = nodeMap.get(item.id)

    if (item.parentId === null) {
      // 根节点
      tree.push(node)
    } else {
      // 找到父节点并添加到其children中
      const parent = nodeMap.get(item.parentId)
      if (parent) {
        parent.children.push(node)
      }
    }
  })

  return tree
}
console.log(JSON.stringify(transformData(input), null, 2))

function debounce(fn, delay) {
  // 请实现
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

// 测试用例
const mockFn = () => console.log('执行了', Date.now())
const debouncedFn = debounce(mockFn, 1000)

debouncedFn() // 1000ms 后执行
debouncedFn() // 重新计时
debouncedFn() // 重新计时

function throttle(fn, interval) {
  let timer = null
  let lastTime = 0
  return function (...args) {
    const currentTime = Date.now()
    const diffTime = currentTime - lastTime

    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    // 立即执行？
    if (diffTime >= interval) {
      fn.apply(this, args)
      lastTime = currentTime
    } else {
      // 剩余时间后执行？
      timer = setTimeout(() => {
        fn.apply(this, args)
        lastTime = Date.now()
        timer = null
      }, interval - diffTime)
    }
  }
}

const mockFn1 = () => console.log('执行了', Date.now())
const throttledFn = throttle(mockFn1, 1000)

setInterval(() => {
  throttledFn() // 每 1000ms 执行一次
}, 100)

function concurrentRequest(urls, maxConcurrent) {
  // 请实现
  // 提示：可以使用 Promise、async/await、队列等方式实现
  const data = []
  let currentIndex = 0
  let finishCount = 0

  return new Promise((resolve) => {
    // 1、启动并发
    function startRequest() {
      if (currentIndex >= urls.length || !urls.length) {
        return
      }
      let idx = currentIndex++
      let url = urls[idx]

      mockRequest(url)
        .then((res) => {
          data[idx] = res
          finishCount++
          // 2、完成请求
          if (finishCount === urls.length) {
            resolve(data)
          }
          // 3、继续请求
          startRequest()
        })
        .catch((err) => {
          data[idx] = err
          finishCount++
          if (finishCount === urls.length) {
            resolve(data)
          }
          startRequest()
        })
    }
    const initConcurrent = Math.min(maxConcurrent, urls.length)
    for (let i = 0; i < initConcurrent; i++) {
      startRequest()
    }
  })
}
const urls = [
  'https://example.com/img1.jpg',
  'https://example.com/img2.jpg',
  'https://example.com/img3.jpg',
  'https://example.com/img4.jpg',
  'https://example.com/img5.jpg',
  'https://example.com/img6.jpg',
]
concurrentRequest(urls, 3).then(() => {
  console.log('所有图片下载完成')
})

function mockRequest(url, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${url} 下载完成`)
      resolve(url)
    }, delay)
  })
}
