export default class Promise {
  PromiseStatus = 'pending'
  PromiseResult = null
  callbacks = []
  constructor(executor) {
    let resolve = (data) => {
      if(this.PromiseStatus !== 'pending') return
      this.PromiseStatus = 'fulfilled'
      this.PromiseResult = data
      this.callbacks.forEach(item => {
        item.onResolvedCallback()
      })
    }
    let reject = (data) => {
      if(this.PromiseStatus !== 'pending') return
      this.PromiseStatus = 'reject'
      this.PromiseResult = data
      this.callbacks.forEach(item => {
        item.onRejectCallback()
      })
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(
    onResolved = v => v,
    onRejected = e => { throw e }
  ) {
    const promise = new Promise((resolve, reject) => {
      let thenCallback = (type) => {
        setTimeout(() => {
          try {
            let res = type(this.PromiseResult)
            if(res === promise) throw new TypeError('Chaining cycle detected for promise #<Promise>')
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
        thenCallback(onResolved)
      }
      if (this.PromiseStatus === 'reject') {
        thenCallback(onRejected)
      }
      if (this.PromiseStatus === 'pending') {
        this.callbacks.push({
          onResolvedCallback() {
            thenCallback(onResolved)
          },
          onRejectCallback() {
            thenCallback(onRejected)
          }
        })
      }
    })
    return promise
  }
  catch(v) {
    return this.then(undefined, v)
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
  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(item => {
        item.then(resolve, reject)
      })
    })
  }
}