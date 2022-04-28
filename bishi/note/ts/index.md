指定变量的类型，ts编译器会自动检查值是否符合类型声明，符合就赋值，否则报错

## 字面量
let b: 'male' | 'female'

## any
任意类型，关闭了ts类型检测
可以赋值给任意变量

## unknown
未知类型
不可以赋值给任意变量(安全)
或者类型断言 
let e: unknown
s = e as string 或
s = <string>e   都是断言

## void never
void返回空值

function a(): void {}

never不会返回结果，如抛出错误

## object
加上问号表示可选，
-[propName: string]: any表示可以有多个任意类型的属性(额外的属性检查)
let b: { name: string, age?: number, [propName: string]: any} 

设置函数结构的类型声明
let d: (a:number, b: number) => number

## array
let e: string[] 或
let e: Array<number>

## 元组tuple 固定长度的数组
let h: [string, string]

## 枚举 enum 枚举类型可以为一组数值赋予友好的名字。
enum Gender{
  Male = 0,
  Female = 1
}

## & 同时
let j: {name: string} & {age:number}
j = {name:'zxk', age: 17}

## 类型别名
type myType = 1 | 2 | 3 | 4
let k: myType

## 泛型
一个方法可以支持多种类型的数据。

把泛型变量T当做类型的一部分使用，或是整个类型

## 接口 实现接口(类)，子类需要声明
接口的作用就是为这些类型命名

除了描述带有属性的普通对象外，接口也可以描述函数类型。

与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。(实现接口)

interface LabelledValue {
  label: string;
}

# 类静态部分与实例部分的区别
当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。

# 继承接口 和类一样，接口也可以相互继承。

# 接口继承类

接口继承类，类实现接口，

当子类继承一个父类并需要实现一个接口，接口也要继承父类


## 类
private 当成员被标记成 private时，它就不能在声明它的类的外部访问。

protected protected成员在派生类中仍然可以访问。

readonly 属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

# 参数属性
参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样。

# 抽象类 用来继承
抽象类做为其它派生类的基类使用。它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。

抽象方法没有方法体，只有方法声明。

abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。必须在派生类中实现

然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符

abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

抽象方法可当做类的实例方法，添加访问修饰符；但是接口不可以
