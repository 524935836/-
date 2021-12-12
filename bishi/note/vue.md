## v-if 和 v-show

都是条件渲染，动态显示 dom 元素

v-if 通过条件判断动态添加或删除 dom 元素
v-show 通过设置元素 display 样式属性

频繁的场景切换用 v-show

v-if 有更高的切换消耗；v-show 有更高的初始渲染消耗

## vuex 是什么

专门在 vue 中实现集中式状态管理的一个 vue 插件，对多个组件的共享状态进行集中式管理,且适用于任意组件间通信

什么时候使用 vue？  
1.多个组件依赖同一个状态 2.来自不同组件的行为需要变更同一个状态

## vuex

安装 store --------const store = new Vuex.Store() {store}
actions-用于响应数组中的动作 this.$storedispatch
mutations-用户操作数据       this.$store.commit
state-用于存储数据 this.$store.state
getters-用于将 state 中的数据进行加工    this.$store.getters

## mapMutations 用于生成与 mutations 对话的方法，写在 method

让代码更好维护，让多种数据分类更加明确
使用 modules，需要开启命名空间...map...('模块名字',[...])
不用 map 的写法：除了 state 外，其他都要 dispatch|commit|getters('模块名字/方法',...)

## mapActions 用于生成与 actions 对话的方法

## mapGetters 用于映射 getters 中的数据为计算属性

## mapState 用于映射 state 中的数据为计算属性

mapActions 与 mapMutations 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。

使用方法：
对象写法：在 computed{...mapState({sum:'sum',xuexiao:'xuexiao'})}
数组写法：在 computed{...mapState(['sum','xuexiao'])}

## computed 和 watch 之间的区别

1.computed 能完成的功能，watch 都可以完成
2.watch 能完成的功能，computed 不一定能完成，例如：watch 可以进行异步操作

## vue 生命周期

created：初始化，数据监测，数据代理
mounted：开启定时器，发送网络请求，订阅消息，绑定自定义事件
beforeDestroy：关闭定时器，取消订阅消息，解绑自定义事件

## 路由

路由是一组 key-value 的对应关系

多个路由需要经过路由器管理
