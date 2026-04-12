---
title: "Js基础"
published: 2025-09-22
updated: 2026-04-12
description: "说实在的，跟java很像"
tags: ["JavaScript", "学习笔记"]
category: "学习笔记"
cover: "/images/your-cover-image.jpg"
draft: false
---

# 书写位置

## html内部，写在body区域底部

<img src="./js基础_images/media/image1.png" alt="" width="400" height="176" />

如果仅仅是某段样式要用，也可写在body内

## html外部及引入方式

可以将js文件打包为文件夹再引入相对路径

此时script标签内的代码会被忽略

<img src="./js基础_images/media/image2.png" alt="" width="553" height="76" />

## 内联方式（直接写在标签内）

<img src="./js基础_images/media/image3.png" alt="" width="553" height="72" />

# 输入输出语法

<img src="./js基础_images/media/image4.png" alt="" width="613" height="78" />

<img src="./js基础_images/media/image5.png" alt="" width="609" height="28" />

## 输出语法

<img src="./js基础_images/media/image6.png" alt="" width="553" height="217" />

如document.write(‘\<h1\>一级标题\</h1\>’)会显示标题

<img src="./js基础_images/media/image7.png" alt="" width="460" height="359" />

可以用+号连接输出内容

**confirm确认框:由用户决定返回true或false**

## 输入语法

<img src="./js基础_images/media/image8.png" alt="" width="504" height="311" />

输入的数据作为prompt的返回值，括号内为提示文本

<img src="./js基础_images/media/image9.png" alt="" width="553" height="32" />

# 变量的基本使用

## let

<img src="./js基础_images/media/image10.png" alt="" width="553" height="326" />

## 变量初始化

<img src="./js基础_images/media/image11.png" alt="" width="420" height="93" />

## 初始化多个变量

<img src="./js基础_images/media/image12.png" alt="" width="553" height="200" />

## 更新变量

<img src="./js基础_images/media/image13.png" alt="" width="300" height="100" />

## var与let的区别

<img src="./js基础_images/media/image14.png" alt="" width="553" height="276" />

# 常量使用的注意点（数组和对象建议用const声明）

使用const进行声明，不变的数据应该比let更优先使用

数组和对象作为引用数据类型，可以在使用const声明的情况下修改被引用的数据内容，即可将其看做保存的地址不变的指针

# 数组

## 声明数组

<img src="./js基础_images/media/image15.png" alt="" width="394" height="158" />

## 初始化（注意是中括号）

<img src="./js基础_images/media/image16.png" alt="" width="467" height="144" />

<img src="./js基础_images/media/image17.png" alt="" width="433" height="64" />

## 取值

<img src="./js基础_images/media/image18.png" alt="" width="553" height="271" />

## 一些属性

**数组长度**arr.length

**添加元素**

arr.push(新增元素) 注意：该方法返回length

<img src="./js基础_images/media/image19.png" alt="" width="553" height="22" />

<img src="./js基础_images/media/image20.png" alt="" width="553" height="51" />

arr.unshift(新增元素) 注意：该方法返回length

<img src="./js基础_images/media/image21.png" alt="" width="623" height="25" />

<img src="./js基础_images/media/image22.png" alt="" width="646" height="53" />

**删除元素**

arr.pop() 注意：该方法返回删除的元素值

<img src="./js基础_images/media/image23.png" alt="" width="553" height="36" />

<img src="./js基础_images/media/image24.png" alt="" width="256" height="70" />

arr.shift() 注意：该方法返回删除的元素值

<img src="./js基础_images/media/image25.png" alt="" width="553" height="32" />

<img src="./js基础_images/media/image26.png" alt="" width="270" height="66" />

arr.splice(起始位置，删除元素个数)

<img src="./js基础_images/media/image27.png" alt="" width="363" height="30" />

<img src="./js基础_images/media/image28.png" alt="" width="553" height="37" />

<img src="./js基础_images/media/image29.png" alt="" width="354" height="66" />

<img src="./js基础_images/media/image30.png" alt="" width="528" height="158" />

例：arr.splice(n,1)，删除下标为n的元素

arr.splice(n)，删除下标n及之后的元素

# 常量

<img src="./js基础_images/media/image31.png" alt="" width="579" height="352" />

## 数组展开运算符...

<img src="./js基础_images/media/image32.png" alt="" width="553" height="241" />

# 数据类型

**基本数据类型/简单数据类型：放到栈里面**

Number string Boolean undefined null

**引用数据类型：放到堆里面**

Object Array Date

## 数字型Number 包括整数、小数、正负数和NaN

**运算符**

<img src="./js基础_images/media/image33.png" alt="" width="553" height="241" />

## 字符串类型string

<img src="./js基础_images/media/image34.png" alt="" width="592" height="39" />

<img src="./js基础_images/media/image35.png" alt="" width="615" height="91" />

### 字符串拼接：使用+号

<img src="./js基础_images/media/image36.png" alt="" width="399" height="79" />

<img src="./js基础_images/media/image37.png" alt="" width="553" height="42" />

### 模板字符串：使用 \` 符号，拼接字符串与变量

<img src="./js基础_images/media/image38.png" alt="" width="553" height="161" />

<img src="./js基础_images/media/image39.png" alt="" width="553" height="40" />

\${}里可以写运算式，打印时打印计算结果

## 布尔类型boolean

<img src="./js基础_images/media/image40.png" alt="" width="614" height="29" />

## 未定义类型undefined：无赋值

<img src="./js基础_images/media/image41.png" alt="" width="492" height="36" />

<img src="./js基础_images/media/image42.png" alt="" width="553" height="32" />

<img src="./js基础_images/media/image43.png" alt="" width="473" height="38" />

<img src="./js基础_images/media/image44.png" alt="" width="523" height="81" />

<img src="./js基础_images/media/image45.png" alt="" width="553" height="36" />

<img src="./js基础_images/media/image46.png" alt="" width="631" height="36" />

## 空类型null：有赋值，内容为空

<img src="./js基础_images/media/image47.png" alt="" width="630" height="20" />

<img src="./js基础_images/media/image48.png" alt="" width="271" height="95" />
<img src="./js基础_images/media/image49.png" alt="" width="279" height="86" />

<img src="./js基础_images/media/image50.png" alt="" width="553" height="120" />

<img src="./js基础_images/media/image51.png" alt="" width="599" height="89" />

## null = = indefined为真，而null = = = undefined为假

## 检测数据类型：typeof

<img src="./js基础_images/media/image52.png" alt="" width="595" height="160" />

prompt等表单和框返回的默认的是字符串类型

# 类型转换

## 隐式转换

<img src="./js基础_images/media/image53.png" alt="" width="553" height="283" />

<img src="./js基础_images/media/image54.png" alt="" width="553" height="130" />

**有内容的字符串经过减法运算也是NaN**<img src="./js基础_images/media/image55.png" alt="" width="553" height="42" />

## 显式转换

**转换为数字型**

<img src="./js基础_images/media/image56.png" alt="" width="627" height="118" />

<img src="./js基础_images/media/image57.png" alt="" width="262" height="154" />

**parse会自动取开头的数字，切掉末尾**

**转换为Boolean型**

<img src="./js基础_images/media/image58.png" alt="" width="553" height="54" />

# js中的比较运算符和

<img src="./js基础_images/media/image59.png" alt="" width="316" height="97" />
<img src="./js基础_images/media/image60.png" alt="" width="236" height="96" />

<img src="./js基础_images/media/image61.png" alt="" width="553" height="52" />

<img src="./js基础_images/media/image62.png" alt="" width="553" height="107" />

<img src="./js基础_images/media/image63.png" alt="" width="553" height="32" />

<img src="./js基础_images/media/image64.png" alt="" width="506" height="187" />

<img src="./js基础_images/media/image65.png" alt="" width="470" height="50" />

**switch的值比较使用全等===**

<img src="./js基础_images/media/image66.png" alt="" width="553" height="76" />

<img src="./js基础_images/media/image67.png" alt="" width="553" height="75" />

# if和for、while等语句省略

没有do while，注意for括号内是let i = 1

# 函数

## 函数的声明和调用

<img src="./js基础_images/media/image68.png" alt="" width="357" height="119" />

<img src="./js基础_images/media/image69.png" alt="" width="553" height="86" />

函数可以写在紧挨着\<script\>的内部的顶部

## 函数传参和调用函数

<img src="./js基础_images/media/image70.png" alt="" width="381" height="118" />

<img src="./js基础_images/media/image70.png" alt="" width="383" height="118" />

<img src="./js基础_images/media/image71.png" alt="" width="270" height="42" />
<img src="./js基础_images/media/image72.png" alt="" width="231" height="42" />

可以给函数加上形式参数默认值

<img src="./js基础_images/media/image73.png" alt="" width="553" height="196" />

## 通过逻辑中断设置默认参数值

<img src="./js基础_images/media/image74.png" alt="" width="517" height="314" />

## 函数返回值（不返回return则返回undefined）

<img src="./js基础_images/media/image75.png" alt="" width="553" height="393" />

## 函数作用域的全局变量（不提倡）

在函数内部，如果变量没有声明直接赋值，则该变量视作全局变量

对该变量的修改会确实修改域外的变量

该方法在严格模式下会报错。

<img src="./js基础_images/media/image76.png" alt="" width="553" height="240" />

## 匿名函数 无法直接使用

<img src="./js基础_images/media/image77.png" alt="" width="553" height="124" />

<img src="./js基础_images/media/image78.png" alt="" width="553" height="138" />

### 函数表达式

<img src="./js基础_images/media/image79.png" alt="" width="553" height="30" />

<img src="./js基础_images/media/image80.png" alt="" width="553" height="166" />

<img src="./js基础_images/media/image81.png" alt="" width="553" height="68" />

<img src="./js基础_images/media/image82.png" alt="" width="553" height="206" />

### 立即执行函数（无需调用直接执行，必须加分号）

两个括号，第二个括号的含义是立即调用函数

立即执行函数也可以加实参和形参，避免全局污染

<img src="./js基础_images/media/image83.png" alt="" width="553" height="333" />

<img src="./js基础_images/media/image84.png" alt="" width="553" height="71" />

# 对象 （object类）

## 创建对象 使用let声明

<img src="./js基础_images/media/image85.png" alt="" width="396" height="86" />

<img src="./js基础_images/media/image86.png" alt="" width="553" height="59" />

<img src="./js基础_images/media/image87.png" alt="" width="497" height="280" />

对象由**属性**和**方法**组成

## 对象属性（类似css的写法，但是用逗号分隔）

<img src="./js基础_images/media/image88.png" alt="" width="553" height="301" />

注意：引号的添加不改变属性的唯一性。

即‘name’和name是同一个属性，引号只是方便取名

<img src="./js基础_images/media/image89.png" alt="" width="367" height="172" />

## 对象属性使用：增删查改

<img src="./js基础_images/media/image90.png" alt="" width="553" height="215" />

调用属性的另一种方式：对象名\[ '属性名' \]，类似字典

这种方式只可用于调用带引号的属性，

如上面的obj \[ 'good-name' \]

<img src="./js基础_images/media/image91.png" alt="" width="553" height="308" />

## 对象方法

<img src="./js基础_images/media/image92.png" alt="" width="553" height="379" />

<img src="./js基础_images/media/image93.png" alt="" width="553" height="508" />

实际上对象中的方法是一个特殊的属性，其值是匿名函数，因此创建方式跟属性相同。可以添加形参实参

引号的使用方式也跟普通属性相同

## 遍历对象

由于对象无序切长度未知，无法使用for(let i=0;i\<a.length;i++)遍历

而是使用**for**(let k **in** obj)，调用属性值的方式类似数组

当用于遍历**数组**时，**k是索引号**，并且**是string型**而不是数字

当用于遍历**对象**时，**k是属性名，也是string型**

对象**属性名**是**k**，对象**属性值**是**obj \[ k
\]**（中括号内**不需要引号**）

<img src="./js基础_images/media/image94.png" alt="" width="553" height="303" />

遍历常用于**对象数组**，该类数组一般作为配置的数据信息

遍历的方式与数组相同

<img src="./js基础_images/media/image95.png" alt="" width="553" height="278" />

## js内置对象Math

<img src="./js基础_images/media/image96.png" alt="" width="553" height="453" />

round：四舍五入

对数组找最大最小值可用展开运算符Math.max(…\[1,2,3,4\])

## 生成随机数Math.floor( Math.random()\*(M-N+1) )+N

<img src="./js基础_images/media/image97.png" alt="" width="553" height="120" />

将10之后的小数舍去即可取到10

<img src="./js基础_images/media/image98.png" alt="" width="553" height="226" />

getRandom函数，取M到N包含两端的随机数

<img src="./js基础_images/media/image99.png" alt="" width="602" height="112" />
