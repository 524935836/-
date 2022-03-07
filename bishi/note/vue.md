## vue 是什么

构建用户界面的渐进式 JavaScript 框架
渐进式：自底向上逐层应用，从一个轻量小巧的核心库逐渐递进到使用各式各样的插件库

# 特点

1.采用组件化模式，提高代码复用率，且然代码更好维护
2，声明式编码，让编码人员无需直接操作 DOM，提高开发效率  
3.使用虚拟 DOM+优秀的 Diff 算法，尽可能复用 DOM 节点

## 项目结构

public 文件夹：一般放置一些静态资源，webpack 进行打包时候会原封不动的打包到 dist 文件夹中，代理服务器根目录

src 文件夹下的 assets：一般放置多个组件共用的静态资源，webpack 打包时会将静态资源当作一个模块打包在 js 文件里

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
# actions-用于响应数组中的动作 this.$storedispatch 可以包含异步操作
Action 提交的是 mutation，而不是直接变更状态。

# mutations-用户操作数据       this.$store.commit 必须是同步函数
通过调用commmit改变数据

# state-用于存储数据 this.$store.state
# getters-用于将 state 中的数据进行加工    this.$store.getters

#Module
Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

默认情况下，getter、action、mutation注册在全局，state处于局部状态，
开启命名空间， getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
rootState 和 rootGetters可以访问局部，，将 { root: true } 作为第三参数传给 dispatch 或 commit也可以访问局部
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

computed是属性访问，而methods是函数调用
computed带有缓存功能，而methods不是

## vue 生命周期

created：初始化，数据监测，数据代理
mounted：开启定时器，发送网络请求，订阅消息，绑定自定义事件
beforeDestroy：关闭定时器，取消订阅消息，解绑自定义事件

## 路由

路由是一组 key-value 的对应关系

多个路由需要经过路由器管理

路由懒加载：把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

## 传参给路由组件

编程式路由书写方式：字符串，模板字符串，对象

params：声明占位符，不能同时使用 path 与 params,用 name
面试题

可传与不可传： 后面加个？，例如：:key?
传个空值解决方法：params: {this.key: '' || undefined}
以上两种不解决会出现路径问题

query:
props：三种方法
布尔模式
对象模式
函数模式

## nextTick

在下次 DOM 更新 循环结束之后 执行延迟回调。在修改数据之后(可以在 watch 使用 nextTick 得到 v-for 遍历的数据) 立即使用这个方法，获取更新后的 DOM。

## $props $attrs $listeners

包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。

## 数据代理
数据代理：通过一个对象代理对另一个对象的操作

## v-text v-html
v-html可以解析标签

## Objec.defineProperty
由于 Object.defineProperty 只能对属性进行劫持，需要遍历对象的每个属性，如果属性值也是对象，则需要深度遍历。而 Proxy 直接代理对象，不需要遍历操作。

Object.defineProperty对新增属性需要手动进行Observe。

## reflect
返回true 或 false，reactive通过使用proxy来实现响应式（数据劫持），reflect操作源对象的数据,
第三个参数传递this

## ref toRef
toRef：可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。

person = reactive({})
ref(person.name) 读出了基本类型.打包成了一个新的ref，没有与person建立联系
toRef(person, 'name') 简化属性

## MVVM模型
1. M：模型(Model) ：data中的数据
2. V：视图(View) ：模板代码
3. VM：视图模型(ViewModel)：Vue实例

实现mvvm主要包含两个方面，数据变化更新视图，视图变化更新数据：

## 闭包
每个组件都有自己的私有作用域，确保各组件数据不会互相干扰

## DOM-Diff
用JS对象模拟DOM（虚拟DOM）
把此虚拟DOM转成真实DOM并插入页面中（render）
如果有事件发生修改了虚拟DOM，比较两棵虚拟DOM树的差异，得到差异对象（diff）
把差异对象应用到真正的DOM树上（patch）