class Observer {
  constructor(data) {
    this.data = data
    this.walk(data)
  }
  walk(data) {
    if(!data || typeof data !== 'object') return

    Object.keys(data).forEach(key => {
      this.defineReative(data, key, data[key])
    })
  }
  defineReative(data, key, value) {
    this.walk(value)
    // 每有一个属性创建dep实例
    let dep = new Dep()
    Object.defineProperty(data, key, {
      get() {
        if(Dep.target) {
          dep.subscribe(Dep.target)
        }
        return value
      },
      set(NewVal) {
        if(NewVal === value) {
          return
        }
        value = NewVal
        dep.publish()
      }
    })
  }
}

class Dep {
  list = []
  static target = null
  publish() {
    this.list.forEach(fn => {
      fn.updated()
    })
  }
  subscribe(fn) {
    this.list.push(fn)
  }
}

export {Observer, Dep}