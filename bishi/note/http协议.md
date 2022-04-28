## http 协议

规定了浏览器与万维网服务器之间互相通信的规则

主要规定了两块内容：请求报文和响应报文，格式和参数对应包含了行 头 空 体

请求行 请求类型 请求路径 协议版本

响应行 协议版本 响应状态码 响应状态字符串

```
200 请求成功
201 创建成功
204 删除成功

301 重定向到别的网址

400 请求地址不存在或者包含不支持的参数
401 未授权
403 被禁止访问
404 请求的资源不存在

500 服务器内部错误
```

## cookie
服务器设置响应头，添加数据到cookies，前端添加请求头
#### 1.什么是 cookie

cookie 是服务器产生的保存在客户端的一段文本信息，格式是键值对

###### cookie 分为两类

1.会话级 Cookie：保存在内存，当浏览器关闭会自动消失

2.持久化 Cookie：保存在硬盘，当浏览器关闭不会自动消失，他的生命周期取决于失效时间

###### cookie 是如何实现鉴权的？

第一步：客户端第一次访问服务器时生成 cookie，然后通过响应头中的 set-cookie 传输到客户端，然后在客户端保存

第二步：客户端第 2 次访问服务器时，请求头会自动带上客户端保存的 cookie，然后和服务器 cookie 进行对比

###### cookie 的缺点

服务器生成保存在客户端，对于一些重要信息，用户名，密码通过 cookie 不安全

## token（无状态，后端不需要记录信息，每次请求每次解密就行）

再次访问时服务器端对 token 值的处理：服务器对浏览器传来的 token 值进行解密，解密完成后进行用户数据的查询，如果查询成功，则通过认证，实现状态保持，所以，即时有了多台服务器，服务器也只是做了**token 的解密和用户数据的查询**，它不需要在服务端去保留用户的认证信息或者会话信息，这就意味着基于 token 认证机制的应用不需要去考虑用户在哪一台服务器登录了，这就为应用的扩展提供了便利，解决了 session 扩展性的弊端。

## cookie、session、token

相同点：都是用来鉴权的，都是服务器产生的

不同点：

1.cookie 存储在客户端，session 存储在服务器内存，token 存储在服务器硬盘中，session 和 token 安全性比 cookie 高

2.token 优势是比 session 更省资源，不需要管理 sessionid

jwt:与token不同点，jwt不需要查数据库，它所需要的基础信息可以直接放到jwt里
## readystate 是 xhr 对象的属性，表示代理当前所处的状态 0 1 2 3 4
            const x = new XMLHttpRequest();
            x.open("GET",'/data');
            x.send();
            x.onreadystatechange = function(){
                if(x.readyState === 4){
                    if(x.status >= 200 && x.status < 300){
                        console.log(x.response);
                    }
                }
            }
0 未初始化
1 表示 open 方法调用完毕
2 表示 send 方法调用完毕
3 表示服务器返回部分结果
4 表示服务端返回全部结果

## AJAX

AJAX 全称为 Asynchronous JavaScript And XML，就是异步的 JS 和 XML
通过 AJAX 可以在浏览器中向服务器发送异步请求，最大的优势：无刷新获取数据。
XML 和 HTML 类似，不同的是 HTML 中都是预定义标签，而 XML 中没有预定义标签，全都是自定义标签，用来表示一些数据。

## Koa2

中间件：洋葱模型的中间件，服务器处理请求的代码称为中间件，先进后出

## async await promise

可以直接 catch 返回 promise 失败的结果，防止 await 抛出错误
const data = await Promise.reject('失败').catch(e => e)

调用 then 返回的新的 promise 的结果状态由什么决定  
1.如果抛出异常，新的 promise 变为 rejected  
2.如果返回的是非 promise 的任意值，新 promise 的结果为 resolve  
3.如果返回的是另一个新 promise，此 promise 的结果就会成为新 promise 的结果


## xss攻击a标签的javescript
服务器接收url没有做转义，加上了script代码，渲染到了页面上会被执行
别人的代码插入到自己的网页

通过转义字符串可以防止xss攻击
对于链接跳转，如a标签，要检验其内容，禁止以javescript开头的链接
HttpOnly 防止劫取 Cookie

防止浏览器执行恶意代码

反射型 Xss: 恶意 JavaScript 来自网络请求。（有漏动的查询参数后添加恶意的代码，经过服务器返回html）
存储型 Xss: 恶意 JavaScript 来自数据库。
基于 Dom: 漏洞存在于前端而不是后端。（通过前端代码获取url，设置html）

通过对输入（和url参数）进行过滤，对输出进行编码（转义），cookies设置http-only