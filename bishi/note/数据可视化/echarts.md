echarts 是一个使用 JavaScript 实现的开源可视化库

## 常见的基本图表

柱状图 折线图 散点图 饼图 地图 雷达图 仪表盘

地图的使用方式：百度地图API 矢量地图

局部调色盘 全局调色盘 局部调色盘 直接样式 高亮样式

总耗时中间件 
响应头中间件(设置mime类型和跨域) 
业务逻辑中间件（拼接url地址，读取本地文件）

## websocket
# 后端：
1.下载安装包，创建对象new WebSocket.Server({port:??})，绑定端口号
2.监听事件
  连接事件：对客户端的连接事件进行监听connection
  接收数据事件：对客户端连接对象进行message事件的监听

  (client代表的是客户端连接的socket对象，
  msg代表客户端发给服务端的数据)

  wss.on('connection', client => {
    client.on('message', msg => {
      client.send()
    })
  })    
3.发送数据给客户端
  client.send()

# 前端：
1.创建对象new WebSocket('ws://localhost:???')
2.监听事件
  连接成功的事件：ws.onopen()
  接收数据的事件：ws.onmessage()
  关闭连接的事件：ws.onclose()

3.发送数据
  ws.send()


## 使用webSocket
# 后端：
将监听事件的代码放到一个函数中并将其导出

# 服务器接收数据字段的约定
  {
    'action': 'getData',
    'socketType: 'trendData',
    'chartName': 'trend',
    'value': ''
  }

action代表行为：
  getData: 代表获取数据
  fulScreen: 代表产生了全屏切换
  themeChange: 代表产生主题切换

socketType代表前端响应函数的标识

chartName代表图标的名称，可用来拼接路径，确认哪个图标，切换主题可不传递

value代表具体的数据
  全屏事件，true代表全屏，反之
  主体切换，可选值chalk、vintage


# 服务器发送数据字段的约定
当接收的action为getData
  去除数据中的chartName字段，拼接json文件的路径，读取文件内容
  在接受到的数据基础之上增加data字段，值为读取的文件内容

接收到的action不为getData
  原封不动的将从客户端收到的数据转发给处于连接状态的客户端

  wss.clients.forEach(client => {
          client.send(msg.toString())
  })  遍历

# 前端
创建socket
  定义类SocketService,并定义成单例模式,在main.js创建实例并执行connect

  定义连接服务器的方法connect，在connect方法上创建对象，监听事件

  存储回调函数(根据socketType注册方法)
    registerCallBack(socketType, callBack) {
    this.callBackMapping[socketType] = callBack
    }
  当触发监听事件onmessage，callBack接收data数据

  接收数据的处理,判断是否有回调函数(socketType)，在判断action类型，传入data数据

  定义发送数据的方法

  挂载SocketService对象到Vue的原型上

  实际场景：在created注册，mounted发送，destryed取消

优化
  防止组件调用send方法是socket还未连接成功，增加connect属性，连接成功为true直接调用send，失败延时调用(定时器)

  断开重连，在onclose延时连接服务器(调用connect)


切换主题
图表的主题
  this.chartInstance.dispose()
  this.initCharts()
  this.updateChart()
  this.screenAdapter()

主屏幕的主题 工具定义个对象一个对象

都通过store的theme属性控制
