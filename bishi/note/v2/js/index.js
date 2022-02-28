import { Observer } from "./observer.js"
import Compile from './compile.js'

class Vue {
  constructor(options) {
    this.data = options.data
    this.methods = options.methods
    // 数据劫持
    new Observer(this.data)
    // 数据代理
    Object.keys(this.data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return this.data[key]
        },
        set(newVal) {
          this.data[key] = newVal
        }
      })
    })
    // 解析页面添加订阅
    new Compile(this, options.el)
    // 挂载
    options.mounted.call(this)
  }
}

export default Vue