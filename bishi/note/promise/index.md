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