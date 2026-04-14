---
title: "Js进阶"
published: 2026-01-03
updated: 2026-04-12
description: "请输入文本"
tags: ["JavaScript", "学习笔记"]
category: "学习笔记"
image: "/images/covers/JavaScript.webp"
draft: false
---

# 作用域

## 局部作用域

### 函数作用域

<img src="/images/js进阶_images/media/image1.webp" alt="" width="553" height="392" />

### 块作用域

<img src="/images/js进阶_images/media/image2.webp" alt="" width="553" height="209" />

## 全局作用域

<img src="/images/js进阶_images/media/image3.webp" alt="" width="614" height="321" />

## 作用域链

<img src="/images/js进阶_images/media/image4.webp" alt="" width="553" height="101" />

<img src="/images/js进阶_images/media/image5.webp" alt="" width="553" height="284" />

# JS垃圾回收机制与算法

<img src="/images/js进阶_images/media/image6.webp" alt="" width="553" height="318" />

<img src="/images/js进阶_images/media/image7.webp" alt="" width="655" height="84" />

### 引用计数

<img src="/images/js进阶_images/media/image8.webp" alt="" width="553" height="40" />

<img src="/images/js进阶_images/media/image9.webp" alt="" width="553" height="202" />

<img src="/images/js进阶_images/media/image10.webp" alt="" width="553" height="273" />

### 标记清除法

<img src="/images/js进阶_images/media/image11.webp" alt="" width="636" height="177" />

## 闭包

<img src="/images/js进阶_images/media/image12.webp" alt="" width="553" height="87" />

<img src="/images/js进阶_images/media/image13.webp" alt="" width="553" height="71" />

<img src="/images/js进阶_images/media/image14.webp" alt="" width="553" height="87" />

<img src="/images/js进阶_images/media/image15.webp" alt="" width="356" height="260" />
<img src="/images/js进阶_images/media/image16.webp" alt="" width="178" height="63" />

## 变量提升

<img src="/images/js进阶_images/media/image17.webp" alt="" width="663" height="26" />

<img src="/images/js进阶_images/media/image18.webp" alt="" width="553" height="51" />

# 函数进阶

## 函数提升

<img src="/images/js进阶_images/media/image19.webp" alt="" width="553" height="181" />

<img src="/images/js进阶_images/media/image20.webp" alt="" width="553" height="102" />

<img src="/images/js进阶_images/media/image21.webp" alt="" width="332" height="143" />

## 函数参数

### 动态参数

<img src="/images/js进阶_images/media/image22.webp" alt="" width="651" height="26" />

<img src="/images/js进阶_images/media/image23.webp" alt="" width="553" height="379" />

### 剩余参数

<img src="/images/js进阶_images/media/image24.webp" alt="" width="553" height="361" />

<img src="/images/js进阶_images/media/image25.webp" alt="" width="553" height="361" />

箭头函数内没有arguments，只能用剩余参数

#### 展开运算符

<img src="/images/js进阶_images/media/image26.webp" alt="" width="553" height="203" />

<img src="/images/js进阶_images/media/image27.webp" alt="" width="209" height="78" />

<img src="/images/js进阶_images/media/image28.webp" alt="" width="553" height="50" />

<img src="/images/js进阶_images/media/image29.webp" alt="" width="553" height="487" />

## 箭头函数

### 基本语法

<img src="/images/js进阶_images/media/image30.webp" alt="" width="639" height="46" />

<img src="/images/js进阶_images/media/image31.webp" alt="" width="662" height="179" />

<img src="/images/js进阶_images/media/image32.webp" alt="" width="324" height="30" />

<img src="/images/js进阶_images/media/image33.webp" alt="" width="689" height="25" />

<img src="/images/js进阶_images/media/image34.webp" alt="" width="553" height="151" />

只有一行，为了区分函数体的花括号和对象的花括号而加上小括号

<img src="/images/js进阶_images/media/image35.webp" alt="" width="369" height="269" />

<img src="/images/js进阶_images/media/image36.webp" alt="" width="553" height="215" />

### 箭头函数参数

<img src="/images/js进阶_images/media/image37.webp" alt="" width="617" height="84" />

### 箭头函数this

<img src="/images/js进阶_images/media/image38.webp" alt="" width="682" height="25" />

<img src="/images/js进阶_images/media/image39.webp" alt="" width="553" height="189" />

<img src="/images/js进阶_images/media/image40.webp" alt="" width="553" height="35" />

<img src="/images/js进阶_images/media/image41.webp" alt="" width="553" height="205" />

<img src="/images/js进阶_images/media/image42.webp" alt="" width="397" height="340" />

注意是否存在谁调用了具名/无名函数，以确定this指向

<img src="/images/js进阶_images/media/image43.webp" alt="" width="395" height="288" />

## 处理this

### 普通函数this的指向

<img src="/images/js进阶_images/media/image44.webp" alt="" width="553" height="30" />

<img src="/images/js进阶_images/media/image45.webp" alt="" width="418" height="26" />

<img src="/images/js进阶_images/media/image46.webp" alt="" width="430" height="28" />

<img src="/images/js进阶_images/media/image47.webp" alt="" width="351" height="159" />

开启严格模式的方法

<img src="/images/js进阶_images/media/image48.webp" alt="" width="553" height="200" />

这里setTimeout虽然在btn内，但是setTimeout是普通函数，实际上是window在调用，因此里面的this指向window

### 箭头函数this的指向

<img src="/images/js进阶_images/media/image49.webp" alt="" width="607" height="109" />

<img src="/images/js进阶_images/media/image50.webp" alt="" width="632" height="77" />

<img src="/images/js进阶_images/media/image51.webp" alt="" width="553" height="62" />

<img src="/images/js进阶_images/media/image52.webp" alt="" width="553" height="236" />

### 改变this的指向：call() apply() (重点)bind()

<img src="/images/js进阶_images/media/image53.webp" alt="" width="553" height="271" />

传入多余的参数，则多余的参数会被忽略

<img src="/images/js进阶_images/media/image54.webp" alt="" width="483" height="243" />

<img src="/images/js进阶_images/media/image55.webp" alt="" width="371" height="264" />

<img src="/images/js进阶_images/media/image56.webp" alt="" width="473" height="263" />

<img src="/images/js进阶_images/media/image57.webp" alt="" width="553" height="249" />

<img src="/images/js进阶_images/media/image58.webp" alt="" width="553" height="141" />

<img src="/images/js进阶_images/media/image59.webp" alt="" width="553" height="271" />

<img src="/images/js进阶_images/media/image60.webp" alt="" width="553" height="31" />

<img src="/images/js进阶_images/media/image61.webp" alt="" width="393" height="28" /><img src="/images/js进阶_images/media/image62.webp" alt="" width="97" height="23" />

<img src="/images/js进阶_images/media/image63.webp" alt="" width="553" height="155" />

<img src="/images/js进阶_images/media/image64.webp" alt="" width="553" height="236" />

直接使用匿名函数调用bind，再用返回的匿名函数作为参数去传递

# 解构赋值

## 数组解构

<img src="/images/js进阶_images/media/image65.webp" alt="" width="650" height="141" />

<img src="/images/js进阶_images/media/image66.webp" alt="" width="553" height="238" />

<img src="/images/js进阶_images/media/image67.webp" alt="" width="553" height="45" />

### 应用与特殊情况

<img src="/images/js进阶_images/media/image68.webp" alt="" width="350" height="43" />

<img src="/images/js进阶_images/media/image69.webp" alt="" width="327" height="184" />

<img src="/images/js进阶_images/media/image70.webp" alt="" width="472" height="279" />

<img src="/images/js进阶_images/media/image71.webp" alt="" width="479" height="194" />

<img src="/images/js进阶_images/media/image72.webp" alt="" width="480" height="164" />

<img src="/images/js进阶_images/media/image73.webp" alt="" width="477" height="167" />

<img src="/images/js进阶_images/media/image74.webp" alt="" width="486" height="174" />

<img src="/images/js进阶_images/media/image75.webp" alt="" width="553" height="183" />

<img src="/images/js进阶_images/media/image76.webp" alt="" width="459" height="206" />

<img src="/images/js进阶_images/media/image77.webp" alt="" width="553" height="182" />

## 对象解构 注意属性名要与变量名一致

<img src="/images/js进阶_images/media/image78.webp" alt="" width="553" height="32" />

<img src="/images/js进阶_images/media/image79.webp" alt="" width="553" height="142" />

<img src="/images/js进阶_images/media/image80.webp" alt="" width="553" height="352" />

**属性名与变量名必须一致**

<img src="/images/js进阶_images/media/image81.webp" alt="" width="553" height="99" />

**对解构的属性名重新改名**

<img src="/images/js进阶_images/media/image82.webp" alt="" width="553" height="110" />

**数组对象结合的解构**

<img src="/images/js进阶_images/media/image83.webp" alt="" width="337" height="248" />

**多级对象解构，注意子级要加上子对象名**

<img src="/images/js进阶_images/media/image84.webp" alt="" width="553" height="264" />

注：可以只对一部分属性进行解构，忽略其他属性即可

**解构的数据同时作为形参**

<img src="/images/js进阶_images/media/image85.webp" alt="" width="553" height="226" />

# forEach遍历数组（区别map，不返回数组）

<img src="/images/js进阶_images/media/image86.webp" alt="" width="616" height="211" />

<img src="/images/js进阶_images/media/image87.webp" alt="" width="553" height="144" />

<img src="/images/js进阶_images/media/image88.webp" alt="" width="499" height="95" />

map的function内可以填返回值，会返回到新的数组

而forEach不返回数组

# 对象进阶

## 创建对象的三种方式

<img src="/images/js进阶_images/media/image89.webp" alt="" width="553" height="397" />

## 构造函数

<img src="/images/js进阶_images/media/image90.webp" alt="" width="636" height="74" />

<img src="/images/js进阶_images/media/image91.webp" alt="" width="656" height="189" />

<img src="/images/js进阶_images/media/image92.webp" alt="" width="322" height="152" />

<img src="/images/js进阶_images/media/image93.webp" alt="" width="447" height="340" />

<img src="/images/js进阶_images/media/image94.webp" alt="" width="553" height="306" />

## 实例化执行过程

<img src="/images/js进阶_images/media/image95.webp" alt="" width="426" height="252" />

## 实例成员/静态成员

<img src="/images/js进阶_images/media/image96.webp" alt="" width="553" height="66" />

<img src="/images/js进阶_images/media/image97.webp" alt="" width="553" height="280" />

<img src="/images/js进阶_images/media/image98.webp" alt="" width="553" height="73" />

<img src="/images/js进阶_images/media/image99.webp" alt="" width="396" height="194" />

- 实例方法：通过this绑定，每个实例都有自己的一份。

- 静态方法：直接添加到构造函数上的方法，只能通过构造函数访问，实例不能访问。

<img src="/images/js进阶_images/media/image100.webp" alt="" width="354" height="335" />

<img src="/images/js进阶_images/media/image101.webp" alt="" width="553" height="273" />

<img src="/images/js进阶_images/media/image102.webp" alt="" width="394" height="158" />

# 基本包装类与内置构造函数

<img src="/images/js进阶_images/media/image103.webp" alt="" width="376" height="163" />

const str = ‘content’等价于

const str = new String(‘content’)

## Object

<img src="/images/js进阶_images/media/image104.webp" alt="" width="553" height="271" />

### Object . keys/values(my_obj)：获得所有键/值

<img src="/images/js进阶_images/media/image105.webp" alt="" width="553" height="291" />

<img src="/images/js进阶_images/media/image106.webp" alt="" width="553" height="321" />

### Object . assign(target_obj , my_obj)：对象拷贝/追加属性

<img src="/images/js进阶_images/media/image107.webp" alt="" width="402" height="190" />

<img src="/images/js进阶_images/media/image108.webp" alt="" width="488" height="146" />

## Array

<img src="/images/js进阶_images/media/image109.webp" alt="" width="553" height="125" />

### my_arr.reduce：累计器

<img src="/images/js进阶_images/media/image110.webp" alt="" width="553" height="209" />

<img src="/images/js进阶_images/media/image111.webp" alt="" width="553" height="144" />

<img src="/images/js进阶_images/media/image112.webp" alt="" width="553" height="360" />

<img src="/images/js进阶_images/media/image113.webp" alt="" width="553" height="41" />

<img src="/images/js进阶_images/media/image114.webp" alt="" width="460" height="418" />

### 数组其他方法

<img src="/images/js进阶_images/media/image115.webp" alt="" width="553" height="246" />

#### find 查找某个元素

<img src="/images/js进阶_images/media/image116.webp" alt="" width="553" height="175" />

<img src="/images/js进阶_images/media/image117.webp" alt="" width="553" height="51" />

#### every 比对全部元素

<img src="/images/js进阶_images/media/image118.webp" alt="" width="553" height="83" />

### String

<img src="/images/js进阶_images/media/image119.webp" alt="" width="553" height="329" />

#### split 分割字符串

<img src="/images/js进阶_images/media/image120.webp" alt="" width="363" height="131" />

#### substring 截取字符串

<img src="/images/js进阶_images/media/image121.webp" alt="" width="553" height="82" />

输出<img src="/images/js进阶_images/media/image122.webp" alt="" width="484" height="36" />

<img src="/images/js进阶_images/media/image123.webp" alt="" width="553" height="78" />

以上面的字符串微粒，str.substring(5,6)相当于取索引号为5的字“核”

#### startsWith 判断是否以某字符串开头

<img src="/images/js进阶_images/media/image124.webp" alt="" width="553" height="135" />

#### includes 判断是否包含某个子字符串

<img src="/images/js进阶_images/media/image125.webp" alt="" width="553" height="202" />

### Number my_num . toFixed()设置小数位长度

<img src="/images/js进阶_images/media/image126.webp" alt="" width="553" height="201" />

# 面向对象：通过构造函数与原型实现

## 构造函数：体现了封装特性

<img src="/images/js进阶_images/media/image127.webp" alt="" width="619" height="80" />

<img src="/images/js进阶_images/media/image128.webp" alt="" width="470" height="136" />

<img src="/images/js进阶_images/media/image129.webp" alt="" width="458" height="268" />

<img src="/images/js进阶_images/media/image130.webp" alt="" width="648" height="68" />

<img src="/images/js进阶_images/media/image131.webp" alt="" width="553" height="197" />

## 原型对象prototype：构造函数的属性所指向的对象

<img src="/images/js进阶_images/media/image132.webp" alt="" width="581" height="151" />

<img src="/images/js进阶_images/media/image133.webp" alt="" width="553" height="479" />

<img src="/images/js进阶_images/media/image134.webp" alt="" width="553" height="286" />

**原型对象与构造函数的this都指向实例对象**

**在构造函数创建对象后定义的原型属性，之前创建的对象仍然具备该属性**

### 通过原型扩展数组函数max/min与sum

<img src="/images/js进阶_images/media/image135.webp" alt="" width="553" height="451" />

<img src="/images/js进阶_images/media/image136.webp" alt="" width="553" height="101" />

### constructor属性

<img src="/images/js进阶_images/media/image137.webp" alt="" width="619" height="61" />

构造函数的prototype属性指向原型对象，原型对象的constructor属性指向构造函数<img src="/images/js进阶_images/media/image138.webp" alt="" width="604" height="70" />

对象形式赋值原型会覆盖原有内容，应该补充constructor

## 对象原型\_ \_proto\_ \_ 每个实例对象都有的只读属性，指向原型对象

<img src="/images/js进阶_images/media/image139.webp" alt="" width="610" height="48" />

<img src="/images/js进阶_images/media/image140.webp" alt="" width="553" height="118" />

**注意\_\_proto\_\_是只读的**

<img src="/images/js进阶_images/media/image141.webp" alt="" width="553" height="192" />

<img src="/images/js进阶_images/media/image142.webp" alt="" width="578" height="317" />

## 原型继承

令子类构造函数的prototype属性指向父类构造函数的实例（并包含constructor），使得继承后的子类构造函数的prototype可以有自己的属性而不因与其他子类共有prototype而受影响

<img src="/images/js进阶_images/media/image143.webp" alt="" width="553" height="389" />

## 原型链

任意构造函数的prototype属性指向该构造函数所对应的原型对象，而该原型对象也有一个\_\_proto\_\_属性指向该原型对象的对象原型。

事实上，这个\_\_proto\_\_属性指向的是object的原型对象(object.
prototype)，这意味着构造函数所对应的原型对象并不是由该构造函数所创建，而是object构造函数创建，因此才指向object的原型

而object.prototype也有\_\_proto\_\_属性，但再无更高级的指向，因此指向null

<img src="/images/js进阶_images/media/image144.webp" alt="" width="603" height="48" />

<img src="/images/js进阶_images/media/image145.webp" alt="" width="627" height="278" />

<img src="/images/js进阶_images/media/image146.webp" alt="" width="585" height="164" />

<img src="/images/js进阶_images/media/image147.webp" alt="" width="553" height="40" />

返回true

# 深浅拷贝

## 浅拷贝：对象内的对象不会被真正拷贝，只能指向同个对象

<img src="/images/js进阶_images/media/image148.webp" alt="" width="553" height="444" />

拷贝的时候，单层对象没问题，多层对象只会被拷贝第一层

<img src="/images/js进阶_images/media/image149.webp" alt="" width="489" height="286" />

## 深拷贝

<img src="/images/js进阶_images/media/image150.webp" alt="" width="292" height="182" />

### 递归

<img src="/images/js进阶_images/media/image151.webp" alt="" width="574" height="455" />

通过递归与对象的键值对实现深拷贝，首先在函数内实现浅拷贝，其次要在实现浅拷贝时判断元素是否属于数组/对象类型，如果是则**需要为当前被拷贝的属性赋值空数组/对象**，随后为其递归。

一定要**先写array再写object**，因为**数组属于对象**

### 引用lodash.js，用\_.cloneDeep()函数实现

<img src="/images/js进阶_images/media/image152.webp" alt="" width="553" height="77" />

### 利用JSON转字符串实现

<img src="/images/js进阶_images/media/image153.webp" alt="" width="553" height="196" />

js无法实现undefined类型以及方法，有一定缺陷

<img src="/images/js进阶_images/media/image154.webp" alt="" width="612" height="171" />

# 异常处理

## throw抛出异常（抛出Error对象）

<img src="/images/js进阶_images/media/image155.webp" alt="" width="553" height="288" />

<img src="/images/js进阶_images/media/image156.webp" alt="" width="553" height="164" />

## try catch finally

<img src="/images/js进阶_images/media/image157.webp" alt="" width="454" height="356" />

<img src="/images/js进阶_images/media/image158.webp" alt="" width="553" height="166" />

## debugger 断点调试

<img src="/images/js进阶_images/media/image159.webp" alt="" width="551" height="228" />

# 防抖与节流

<img src="/images/js进阶_images/media/image160.webp" alt="" width="610" height="83" />

## 防抖debounce：单位时间内频繁触发事件，只执行最后一次

<img src="/images/js进阶_images/media/image161.webp" alt="" width="486" height="368" />

### 利用防抖优化性能

<img src="/images/js进阶_images/media/image162.webp" alt="" width="553" height="184" />

<img src="/images/js进阶_images/media/image163.webp" alt="" width="276" height="120" />

<img src="/images/js进阶_images/media/image164.webp" alt="" width="601" height="490" />

<img src="/images/js进阶_images/media/image165.webp" alt="" width="553" height="228" />

**手写防抖函数：利用定时器setTimeout**

<img src="/images/js进阶_images/media/image166.webp" alt="" width="553" height="116" />

<img src="/images/js进阶_images/media/image167.webp" alt="" width="553" height="268" />

为了让事件每次触发都重新重置一次计时器，需要将重置逻辑作为新的函数写在返回值。重置逻辑为：先判断并清除已有的计时器函数，再创建新的计时器函数。

定时器标识应该声明在该函数之前，作为局外的一个变量

fn的调用写在计时器函数内部

### 节流 throttle：单位时间内频繁触发事件只执行第一次

<img src="/images/js进阶_images/media/image168.webp" alt="" width="553" height="325" />

<img src="/images/js进阶_images/media/image169.webp" alt="" width="280" height="102" />

<img src="/images/js进阶_images/media/image170.webp" alt="" width="591" height="418" />

<img src="/images/js进阶_images/media/image171.webp" alt="" width="603" height="21" />

**手写节流函数**

<img src="/images/js进阶_images/media/image172.webp" alt="" width="553" height="216" />

<img src="/images/js进阶_images/media/image173.webp" alt="" width="553" height="306" />

返回值的设置情况同防抖一样，不同的是判断逻辑改为：是否存在定时器，若存在则开启新的定时器，否则无操作。并且在调用完函数后，需要将定时器标志重设为null

不使用clearTimeout的原因是：setTimeout里无法使用clearTimeo
ut，而且就算清除了定时器，timer还会保留定时器编号。因此将timer设置为null，等待定时器自然关闭即可

# 模块化export和import

三种导出方式：

命名导出(分别导出、统一导出、重命名导出)、

默认导出(直接默认导出、先定义后默认导出、默认导出对象/类、默认导出类)、

混合导出

## 命名导出

可以导出多个值，导入时需要相同的名称

### 分别导出

<img src="/images/js进阶_images/media/image174.webp" alt="" width="301" height="72" />

### 统一导出

<img src="/images/js进阶_images/media/image175.webp" alt="" width="245" height="148" />

### 重命名导出 使用as重命名

<img src="/images/js进阶_images/media/image176.webp" alt="" width="407" height="108" />

## 命名导出的导入方式

<img src="/images/js进阶_images/media/image177.webp" alt="" width="553" height="234" />

## 默认导出 export default

一个模块只能有一个默认导出

## 直接默认导出

<img src="/images/js进阶_images/media/image178.webp" alt="" width="396" height="132" />

## 先定义后默认导出

<img src="/images/js进阶_images/media/image179.webp" alt="" width="381" height="116" />

### 默认导出对象/类

<img src="/images/js进阶_images/media/image180.webp" alt="" width="288" height="174" />

## 默认导出类

<img src="/images/js进阶_images/media/image181.webp" alt="" width="382" height="200" />

## 默认导出的导入方式

<img src="/images/js进阶_images/media/image182.webp" alt="" width="408" height="136" />

## 混合导出 同时使用默认导出和命名导出

<img src="/images/js进阶_images/media/image183.webp" alt="" width="532" height="224" />

## 混合导出的导入方式

### 分别导入

<img src="/images/js进阶_images/media/image184.webp" alt="" width="553" height="74" />

### 先导入默认再导入命名

<img src="/images/js进阶_images/media/image185.webp" alt="" width="408" height="100" />

### 全部导入

<img src="/images/js进阶_images/media/image186.webp" alt="" width="439" height="134" />

## 注意事项

<img src="/images/js进阶_images/media/image187.webp" alt="" width="553" height="124" />

<img src="/images/js进阶_images/media/image188.webp" alt="" width="553" height="248" />

<img src="/images/js进阶_images/media/image189.webp" alt="" width="553" height="169" />

<img src="/images/js进阶_images/media/image190.webp" alt="" width="553" height="159" />
