1. 抽象表达:
1) Promise 是一门新的技术(ES6 规范)
2) Promise 是 JS 中进行异步编程的新解决方案
备注：旧方案是单纯使用回调函数
2. 具体表达:
1) 从语法上来说: Promise 是一个构造函数
2) 从功能上来说: promise 对象用来封装一个异步操作并可以获取其成功/
失败的结果值

 promise  的状态改变
1. pending 变为 resolved
2. pending 变为 rejected
说明: 只有这 2 种, 且一个 promise 对象只能改变一次
无论变为成功还是失败, 都会有一个结果数据
成功的结果数据一般称为 value, 失败的结果数据一般称为 reason

 then/catch 的最后一行返回一个永远 pending 的 promise 即可中断调用链

 return new Promise((resolve, reject) => {})


 ## async await
 async修饰的函数返回promise对象，promise的状态由返回值决定

 await右侧的表达式一般为promise对象，如果表达式为promise，await返回的时promise成功的值，如果表达式是其他值，直接将此值作为await的返回值
 如果await的promise失败了，就会抛出错误，需要通过 try...catch 捕获处理