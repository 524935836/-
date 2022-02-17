## 浅拷贝
创建一个新的对象
拷贝值，如果属性是一般对象，拷贝的就是基本类型的值，如果属性是引用数据类型，拷贝的是内存地址的值
Object.assign、展开运算符...、Array.prototype.concat()、.Array.prototype.slice()

## 深拷贝
如果属性是引用数据类型，就会开放一个新的空间
JSON.parse(JSON.stringify())
如果json里有 function,undefined，则序列化的结果会把 function,undefined 丢失
如果json里有NaN、Infinity和-Infinity，则序列化的结果会变成null；
如果对象中存在循环引用的情况也无法实现深拷贝