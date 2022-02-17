## symbol
Reflect.ownKeys(obj),返回一个由目标对象自身的属性键组成的数组（包括symbol）
向对象添加方法
Symbol.for创建
不能与其他数据进行运算

Symbol的方法将作为对象的属性

Symbol.iterator,只要用iterator，就可以完成遍历操作


a) 创建返回一个指针对象，指向当前数据结构的起始位置,对象内有next方法
b) 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
c) 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
d) 每调用 next 方法返回一个包含 value 和 done 属性的对象