import Watch from "./watch.js"

class Compile {
  constructor(vm, el) {
    this.vm = vm
    this.el = document.querySelector(el)
    this.fragment = null
    this.init()
  }
  init() {
    if (this.el) {
      this.fragment = this.handleFragment(this.el)
      this.compileElement(this.fragment)
      this.el.appendChild(this.fragment)
    } else {
      console.log('元素不存在')
    }
  }
  // 创建添加页面片段
  handleFragment(el) {
    const fragment = document.createDocumentFragment()
    let child = el.firstChild
    while (child) {
      // 将Dom元素移入fragment中
      fragment.appendChild(child)
      child = el.firstChild
    }
    return fragment
  }
  // 解析页面片段
  compileElement(el) {
    // 所有子节点
    const childNodes = el.childNodes
    Array.prototype.forEach.call(childNodes, node => {
      const reg = /\{\{\s*(.*?)\s*\}\}/
      const text = node.textContent
      if (this.isElementNode(node)) {
        // 绑定事件v-指令
        this.compile(node)
      } else if (this.isTextNode(node) && reg.test(text)) {
        // 渲染页面{{}}
        this.compileText(node, reg.exec(text)[1])
      }
      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node)
      }
    })
  }
  // 添加订阅{{}}
  compileText(node, key) {
    let value = this.vm.data[key]
    // 初始化渲染
    this.updateText(node, value)
    new Watch(this.vm, key, (val) => {
      this.updateText(node, val)
    })
  }
  //解析v-指令
  compile(node) {
    const attrs = node.attributes
    Array.prototype.forEach.call(attrs, attr => {
      let attrName = attr.name
      if (this.isDirecitve(attrName)) {
        const key = attr.value
        const dir = attrName.substring(2)
        // 绑定事件on
        if (this.isEventDirective(dir)) {
          const eventType = dir.split(':')[1]
          this.compileEvent(node, key, eventType)
        } else {
          // v-model
          this.compileModel(node, key)
        }
      }
    })
  }
  // 绑定事件on
  compileEvent(node, key, eventType) {
    const fn = this.vm.methods[key]
    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(this.vm))
    }
  }
  // v-model
  compileModel(node, key) {
    const value = this.vm[key]
    // 初始化
    this.modelUpdate(node, value)
    new Watch(this.vm, key, (val) => {
      this.modelUpdate(node, val)
    })
    // input事件
    node.addEventListener('input', (event) => {
      const NewVal = event.target.value
      this.vm[key] = NewVal
    })
  }
  isTextNode(node) {
    return node.nodeType === 3
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
  isDirecitve(attr) {
    return attr.indexOf('v-') === 0
  }
  isEventDirective(dir) {
    return dir.indexOf('on:') === 0
  }
  updateText(node, value) {
    node.textContent = value || ''
  }
  modelUpdate(node, value) {
    node.value = value || ''
  }
}

export default Compile