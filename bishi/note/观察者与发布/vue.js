(function () {
  function defineReactive(data, key, value) {
    observe(value)
    let dep = new Dep()
    Object.defineProperty(data, key, {
      get() {
        // 添加订阅，watch实例，只添加一次
        if(Dep.target) {
          console.log(111)
          dep.subscribe(Dep.target)
        }
        return value
      },
      set(newVal) {
        if(value === newVal) return
        value = newVal
        // 发布
        dep.publish()
      }
    })
  }
  
  function observe(data) {
    if (!data || typeof data !== 'object') return
    // 非对象继续遍历劫持
    Object.keys(data).forEach(key => {
      defineReactive(data, key, data[key])
    })
  }
  
  function Dep() {
    this.list = []
  }
  
  Dep.prototype = {
    subscribe(fn) {
      this.list.push(fn)
    },
    publish() {
      this.list.forEach(fn => {
        fn.update()
      })
    }
  }
// 订阅者
  function Watch(vm, type, fn) {
    this.vm = vm
    this.type = type
    this.fn = fn
    // 执行一次，订阅
    this.value = this.get()
  }
  
  Watch.prototype = {
    update() {
      this.run()
    },
    run() {
      // 新值
      let value = this.vm.data[this.type]
      let oldVal = this.value
      if(value !== oldVal) {
        console.log(222)
        this.fn.call(this.vm, value, oldVal)
      }
    },
    get() {
      Dep.target = this
      // 初始化执行，触发get
      let value = this.vm.data[this.type]
      Dep.target = null
      return value
    }
  }
  
  function Vue(data, el, type) {
    this.data = data
    observe(data)
    // 数据劫持
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return this.data[key]
        },
        set(value) {
          this.data[key] = value
        }
      })
    })
    // 初始化
    el.innerHTML = this.data[type]
    // 订阅
    new Watch(this, type, function (value) {
      el.innerHTML = value
    })
    return this
  }
  
  return window.Vue = Vue
})()