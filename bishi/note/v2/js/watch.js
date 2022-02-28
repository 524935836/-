import { Dep } from './observer.js'

class Watch {
  constructor(vm, type, fn) {
    this.vm = vm
    this.type = type
    this.fn = fn
    this.value = this.getMes()
  }
  getMes() {
    Dep.target = this
    let value = this.vm.data[this.type]
    Dep.target = null
    return value
  }
  updated() {
    this.run()
  }
  run() {
    let value = this.vm.data[this.type]
    let oldVal = this.value
    if(value !== oldVal) {
      this.fn.call(this.vm, value, oldVal)
    }
  }
}

export default Watch