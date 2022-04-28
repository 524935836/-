export default class Promise {
  PromiseStatus = 'pending'
  PromiseResult = null
  callbacks = []
  constructor(executor) {
    let resolve = (data) => {
      if (this.PromiseStatus !== 'pending') return
      this.PromiseStatus = 'fulfilled'
      this.PromiseResult = data
      this.callbacks.forEach(item => {
        item.onresolvedCallback()
      })
    }
    let reject = (data) => {
      if (this.PromiseStatus !== 'pending') return
      this.PromiseStatus = 'reject'
      this.PromiseResult = data
      this.callbacks.forEach(item => {
        item.onrejectedCallback()
      })
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then(onresolved = v => v,
    onrejected = e => { throw e }
  ) {
    return new Promise((resolve, reject) => {
      let thenCallback = (type) => {
        setTimeout(() => {
          try {
            let res = type(this.PromiseResult)
            if (res instanceof Promise) {
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } catch (e) {
            reject(e)
          }
        })
      }
      if (this.PromiseStatus === 'fulfilled') {
        thenCallback(onresolved)
      }
      if (this.PromiseStatus === 'reject') {
        thenCallback(onrejected)
      }
      if (this.PromiseStatus === 'pending') {
        this.callbacks.push({
          onresolvedCallback() {
            thenCallback(onresolved)
          },
          onrejectedCallback() {
            thenCallback(onrejected)
          }
        })
      }
    })
  }
  catch(e) {
    return this.then(undefined, e)
  }
  static resolve(v) {
    return new Promise((resolve, reject) => {
      if(v instanceof Promise) {
        v.then(resolve, reject)
      } else {
        resolve(v)
      }
    })
  }
  static reject(e) {
    return new Promise((resolve, reject) => {
      reject(e)
    })
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      promises.reduce((pre, cur, index) => {
        cur.then(v => {
          pre[index] = v
          if(Object.keys(pre).length === promises.length) {
            resolve(pre)
          }
        }, reject)
        return pre
      }, [])
    })
  }
  static race(promise) {
    return new Promise((resolve, reject) => {
      promise.forEach(promise => {
        promise.then(resolve, reject)
      })
    })
  }
}