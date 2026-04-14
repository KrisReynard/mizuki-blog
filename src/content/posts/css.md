---
title: "CSS"
published: 2025-08-18
updated: 2026-04-12
description: "我说CSS是文科全靠背"
tags: ["CSS", "学习笔记"]
category: "学习笔记"
image: "/images/covers/CSS.webp"
draft: false
---

<img src="/images/css_images/media/image1.webp" alt="" width="412" height="136" />

CSS规则：选择器+声明

选择器是用于指定CSS样式的HTML标签，花括号内是具体样式

属性和属性值以键值对形式出现，冒号分割，分号结束

CSS一般写在head里，使用style标签

CSS书写顺序

<img src="/images/css_images/media/image2.webp" alt="" width="651" height="113" />

# 消除浏览器差异而进行CSS初始化

<img src="/images/css_images/media/image3.webp" alt="" width="553" height="325" />

# 选择器分类

分为**基础选择器**和**复合选择器**

## 基础选择器

由**单个选择器**组成

分为：**标签选择器**、**类选择器**、**id选择器**和**通配符选择器**

### 标签选择器

用html标签名称作为选择器，为该类标签统一指定样式

无需符号作开头

<img src="/images/css_images/media/image4.webp" alt="" width="160" height="147" />

### 类选择器 .class

差异化选择标签，可以单独选择一个或几个标签

先给要添加样式的标签添加一个统一的类名，再进行选择

类名中可以有短横-跟下划线\_，选择时以.做开头

<img src="/images/css_images/media/image5.webp" alt="" width="458" height="58" />

<img src="/images/css_images/media/image6.webp" alt="" width="460" height="299" />

可以给一个标签指定多个类名，这些类名都可以选出这个标签

<img src="/images/css_images/media/image7.webp" alt="" width="553" height="259" />

### id选择器 \#id

以#做开头，不能有重复id

id选择器一般用于页面唯一性元素，常与js搭配使用

<img src="/images/css_images/media/image8.webp" alt="" width="275" height="206" />

### 通配符选择器 \*

以\*定义，选取页面内所有元素

在特殊情况下使用

<img src="/images/css_images/media/image9.webp" alt="" width="534" height="314" />

## 复合选择器（见后面）

复合选择器是对基本选择器进行组合形成的

# CSS字体属性

定义**字体系列**、**大小**、**粗细**和**文字样式**（如斜体）

## 字体系列 font-family

用font-family属性定义字体系列

<img src="/images/css_images/media/image10.webp" alt="" width="553" height="50" />

可以定义多个字体，要以逗号分割

字体名可以不加引号。果有字体名包含空格，要加引号分隔开

默认使用第一个字体，如果不支持则使用下一个字体，应尽量使用系统默认自带的字体

<img src="/images/css_images/media/image11.webp" alt="" width="553" height="28" />

可以把字体统一添加到body标签

## 字体大小 font-size

用font-size属性定义字体系列

<img src="/images/css_images/media/image12.webp" alt="" width="254" height="99" />

注意加上单位px（像素）

谷歌浏览器默认16px，但不同浏览器不同，应尽量给明确值

可以给body标签统一字体大小

标题标签比较特殊，需要单独指定文字大小

## 字体粗细 font-weight

用font-weight属性定义字体粗细

<img src="/images/css_images/media/image13.webp" alt="" width="358" height="120" />

属性值有：normal / bold / bolder / lighter / 数字

实际开发提倡数字表示加粗和变细，400为正常

可以将其放在名为bold的class里，代替b标签

<img src="/images/css_images/media/image14.webp" alt="" width="553" height="128" />

## 文字样式 font-style

用font-style属性定义文字样式

<img src="/images/css_images/media/image15.webp" alt="" width="553" height="222" />

平时一般不加斜体，反而是给斜体标签改为不倾斜

### 字体复合属性 font

使用font属性设置复合属性

按照指定格式统一设置文字样式，可以节约代码

<img src="/images/css_images/media/image16.webp" alt="" width="553" height="72" />

line-height是行距，单位px，图示的斜杠也要加

顺序不能更换，各属性以空格隔开

不需要的属性可以省略取默认值，但必须保留size和family

<img src="/images/css_images/media/image17.webp" alt="" width="236" height="34" />

# 文本属性

定义文本外观，如**颜色**、**对齐**、**装饰**、**缩进**、**行间距**

**white-space: nowrap，强制文本一行显示**

## 文本颜色 color

color属性定义文本颜色

<img src="/images/css_images/media/image18.webp" alt="" width="553" height="284" />

## 对齐文本 text-align

text-align属性设置水平对齐方式

<img src="/images/css_images/media/image19.webp" alt="" width="322" height="114" />

<img src="/images/css_images/media/image20.webp" alt="" width="444" height="159" />

注意，给图片加居中对齐，加在图片标签内不会有效果，要给图片的父标签加居中对齐

## 装饰文本 text-decoration

用text-decoration设置，给文本添加下划线、上划线、删除线等

<img src="/images/css_images/media/image21.webp" alt="" width="553" height="142" />

<img src="/images/css_images/media/image22.webp" alt="" width="553" height="201" />

由于超链接a自带下划线，可以以此去掉a自带的下划线

<img src="/images/css_images/media/image23.webp" alt="" width="363" height="133" />

## 文本缩进 text-indent

用text-indent指定文本第一行的缩进，通常修饰段落

<img src="/images/css_images/media/image24.webp" alt="" width="259" height="124" /><img src="/images/css_images/media/image25.webp" alt="" width="272" height="124" />

设置的缩进单位是px或em，甚至可以是负值

em是相对于当前元素1个文字的大小，如果当前元素没有设置大小则会按照父元素设置

## 行距 text-height

用text-height设置行间距

<img src="/images/css_images/media/image26.webp" alt="" width="275" height="110" />
<img src="/images/css_images/media/image27.webp" alt="" width="489" height="163" />

在这里修改的主要是上下间距

如果文字大小等于行距，则相当于只有文本高度

# CSS引入方式

按书写的位置分为三类：行内式、嵌入式、链接式

## 内部样式表（嵌入式）

将css代码写到html页面内部，单独放到一个style标签内

该标签可以放在任何地方，但一般放在head内

结构和样式未完全分离，称为嵌入式引入

<img src="/images/css_images/media/image28.webp" alt="" width="223" height="165" />

## 行内样式表（行内式、内联样式表）

在元素标签的style属性设置css样式，适合简单修改

<img src="/images/css_images/media/image29.webp" alt="" width="651" height="30" />

## 外部样式表（链接式）

样式单独写到CSS文件中，之后引入到html文件，用于实际开发

先建立.css文件，并在该文件内书写样式，不需要style标签

再在html页面内用\<link\>标签引入该文件（写在head）

<img src="/images/css_images/media/image30.webp" alt="" width="553" height="44" />

# Emment语法

<img src="/images/css_images/media/image31.webp" alt="" width="553" height="283" />

例：div.或div.类名 div#或div#名字 div.demo\$\*5 ul\>li\*3 div{内容}
input:submit（元素:属性值）

input

<img src="/images/css_images/media/image32.webp" alt="" width="420" height="187" />

# 复合选择器

复合选择器是由两个或多个基本选择器，通过不同方式进行组合形成的，可以更准确高效选择目标元素

包括：**后代选择器**、**子选择器**、**并集选择器**、**伪类选择器**

## 后代选择器（重要）（（所有子级）

又叫包含选择器，可以选择父元素内的子元素

<img src="/images/css_images/media/image33.webp" alt="" width="553" height="42" />

<img src="/images/css_images/media/image34.webp" alt="" width="553" height="358" />

## 子选择器（重要）（相邻子级）

<img src="/images/css_images/media/image35.webp" alt="" width="553" height="384" />

## 并集选择器

<img src="/images/css_images/media/image36.webp" alt="" width="553" height="317" />

一般会把用到的元素各起一行竖着写

## 伪类选择器

<img src="/images/css_images/media/image37.webp" alt="" width="553" height="54" />

### 链接伪类选择器

<img src="/images/css_images/media/image38.webp" alt="" width="553" height="130" />

<img src="/images/css_images/media/image39.webp" alt="" width="553" height="65" />

<img src="/images/css_images/media/image40.webp" alt="" width="553" height="318" />

### input: focus伪类选择器

<img src="/images/css_images/media/image41.webp" alt="" width="553" height="139" />

<img src="/images/css_images/media/image42.webp" alt="" width="553" height="212" />

# 元素显示模式

按照元素显示的方式分为块元素和行内元素

<img src="/images/css_images/media/image43.webp" alt="" width="553" height="164" />

## 块元素

<img src="/images/css_images/media/image44.webp" alt="" width="553" height="345" />

## 行内元素(一般不能再放块元素)

<img src="/images/css_images/media/image45.webp" alt="" width="553" height="328" />

## 行内块元素

<img src="/images/css_images/media/image46.webp" alt="" width="553" height="202" />

## 显示模式的转换（display属性，常用block）

<img src="/images/css_images/media/image47.webp" alt="" width="553" height="50" />

<img src="/images/css_images/media/image48.webp" alt="" width="278" height="102" /><img src="/images/css_images/media/image49.webp" alt="" width="278" height="129" />

想要让链接内文字垂直居中，则需要将行高设置为与盒子高度相等

# 背景

背景属性有：

背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定

<img src="/images/css_images/media/image50.webp" alt="" width="553" height="236" />

## 背景颜色background-color

<img src="/images/css_images/media/image51.webp" alt="" width="553" height="122" />

<img src="/images/css_images/media/image52.webp" alt="" width="490" height="244" />

opacity属性也可以改不透明度

## 背景图片background-image

背景图片会覆盖背景颜色，实际开发常用于logo或者装饰图片、较大的背景图片、精灵图等，易于控制位置

<img src="/images/css_images/media/image53.webp" alt="" width="553" height="49" />

<img src="/images/css_images/media/image54.webp" alt="" width="553" height="130" />

<img src="/images/css_images/media/image55.webp" alt="" width="553" height="193" />

## 背景平铺background-repeat

<img src="/images/css_images/media/image56.webp" alt="" width="553" height="245" />

## 背景图片位置background-position

<img src="/images/css_images/media/image57.webp" alt="" width="553" height="273" />

<img src="/images/css_images/media/image58.webp" alt="" width="553" height="84" />

<img src="/images/css_images/media/image59.webp" alt="" width="553" height="120" />

<img src="/images/css_images/media/image60.webp" alt="" width="553" height="52" />

## 背景附着（背景图像固定）background-attachment

设置背景图像是否固定或者随着页面的其余部分滚动

<img src="/images/css_images/media/image61.webp" alt="" width="553" height="296" />

## 背景属性复合写法background

<img src="/images/css_images/media/image62.webp" alt="" width="615" height="92" />

<img src="/images/css_images/media/image63.webp" alt="" width="620" height="33" />

<img src="/images/css_images/media/image64.webp" alt="" width="652" height="26" />

# 三大特性

层叠性、继承性、优先级

## 层叠性

<img src="/images/css_images/media/image65.webp" alt="" width="553" height="286" />

## 继承性：子标签继承父标签样式

<img src="/images/css_images/media/image66.webp" alt="" width="553" height="242" />

行高的继承：可以不使用px，而是字体大小倍数

<img src="/images/css_images/media/image67.webp" alt="" width="553" height="221" />

## 优先级：选择器权重

<img src="/images/css_images/media/image68.webp" alt="" width="627" height="207" />

important使用：在属性值后添加!important

<img src="/images/css_images/media/image69.webp" alt="" width="553" height="141" />

不管父元素的权重多高，子元素继承父元素的权重一定是0

**复合选择器的权重相互叠加，不会进位：**

如下，只执行ul li这个复合选择器的样式

<img src="/images/css_images/media/image70.webp" alt="" width="495" height="233" />

如下，只会执行第一个，需要为.pink前添加.nav

<img src="/images/css_images/media/image71.webp" alt="" width="553" height="325" />

# 盒子

## **盒子模型组成**

<img src="/images/css_images/media/image72.webp" alt="" width="611" height="343" />

## 边框（粗细、样式、颜色）

<img src="/images/css_images/media/image73.webp" alt="" width="606" height="299" />

常见样式：**solid**实线，**dash**虚线，**dotted**点线

**边框简写**

<img src="/images/css_images/media/image74.webp" alt="" width="345" height="40" />

**单独的边框设置**

<img src="/images/css_images/media/image75.webp" alt="" width="603" height="31" />

**层叠性：**通过就近原则将单独设置的边框写在最后，使单独设置的优先级更高

上边框红，其他边框蓝

<img src="/images/css_images/media/image76.webp" alt="" width="553" height="98" />

### 表格相邻单元格边框border-collapse

<img src="/images/css_images/media/image77.webp" alt="" width="553" height="202" />

### 边框影响盒子实际大小

<img src="/images/css_images/media/image78.webp" alt="" width="553" height="126" />

## 内边距padding

<img src="/images/css_images/media/image79.webp" alt="" width="553" height="32" />

<img src="/images/css_images/media/image80.webp" alt="" width="553" height="185" />

复合写法：按值个数决定值内容

<img src="/images/css_images/media/image81.webp" alt="" width="553" height="135" />

### 内边距会撑大盒子，影响盒子实际大小

<img src="/images/css_images/media/image82.webp" alt="" width="553" height="153" />

<img src="/images/css_images/media/image83.webp" alt="" width="553" height="23" />

父元素有设置宽高，子元素没有，子元素的内边距也不会撑开宽高

<img src="/images/css_images/media/image84.webp" alt="" width="636" height="75" />

#  盒子外间距margin

<img src="/images/css_images/media/image85.webp" alt="" width="553" height="225" />

margin的简写方式与padding一致

## 外边距应用：水平居中

<img src="/images/css_images/media/image86.webp" alt="" width="553" height="437" />

<img src="/images/css_images/media/image87.webp" alt="" width="682" height="19" />

## 外边距合并/塌陷

相邻垂直的块元素，外边距垂直合并：尽量只给一个margin

<img src="/images/css_images/media/image88.webp" alt="" width="553" height="99" />

<img src="/images/css_images/media/image89.webp" alt="" width="357" height="214" />

<img src="/images/css_images/media/image90.webp" alt="" width="196" height="61" />

嵌套垂直的块元素，外边距塌陷：

<img src="/images/css_images/media/image91.webp" alt="" width="653" height="66" />

<img src="/images/css_images/media/image92.webp" alt="" width="553" height="213" />

<img src="/images/css_images/media/image93.webp" alt="" width="268" height="145" />

边框可以将颜色设置为transparent（透明）

## 清除默认内外边距（css最先写的代码）

<img src="/images/css_images/media/image94.webp" alt="" width="636" height="48" />

<img src="/images/css_images/media/image95.webp" alt="" width="553" height="208" />

<img src="/images/css_images/media/image96.webp" alt="" width="653" height="48" />

## 盒子圆角边框 border-radius

精准写法如border-top-right-radius

<img src="/images/css_images/media/image97.webp" alt="" width="649" height="205" />

<img src="/images/css_images/media/image98.webp" alt="" width="633" height="209" />

参数可以是**数值**或**百分比**

**圆形：**

当半径是**正方形边长**的一半(或者值为50%)，则会作出圆形

**圆角矩形：**

当半径是**长方形高度**的一半(或者值为50%)，则会作出圆角矩形

**该属性跟多个值：**

按照顺时针，可以用四个值分别设置四个角

**分开设置：**

<img src="/images/css_images/media/image99.webp" alt="" width="651" height="54" />

## 盒子阴影 box-shadow

<img src="/images/css_images/media/image100.webp" alt="" width="625" height="454" />

<img src="/images/css_images/media/image101.webp" alt="" width="553" height="123" />

# 文字阴影 text-shadow

<img src="/images/css_images/media/image102.webp" alt="" width="553" height="319" />

# 布局方式：标准流、浮动、定位

## 常见网页布局

<img src="/images/css_images/media/image103.webp" alt="" width="417" height="193" />

<img src="/images/css_images/media/image104.webp" alt="" width="242" height="185" />

## 标准流

<img src="/images/css_images/media/image105.webp" alt="" width="616" height="359" />

# CSS浮动 (float) 改变元素标签默认排列方式

<img src="/images/css_images/media/image106.webp" alt="" width="620" height="85" />

<img src="/images/css_images/media/image107.webp" alt="" width="650" height="38" />

## 设置浮动

<img src="/images/css_images/media/image108.webp" alt="" width="553" height="309" />

## 浮动特性

<img src="/images/css_images/media/image109.webp" alt="" width="335" height="111" />

**脱标：浮动的盒子会压住后面的标准流盒子，类似图层**

<img src="/images/css_images/media/image110.webp" alt="" width="438" height="67" />

3.浮动盒子不会压住下面标准流盒子里的文字和图片(文字环绕效果)

**浮动盒子前面的标准流盒子不会被压住**

<img src="/images/css_images/media/image111.webp" alt="" width="223" height="113" />

**排列：一行内显示并且元素顶端对齐**

<img src="/images/css_images/media/image112.webp" alt="" width="650" height="56" />

**行内块特性**

<img src="/images/css_images/media/image113.webp" alt="" width="627" height="133" />

## 浮动的使用

### 浮动元素搭配标准流的父元素

<img src="/images/css_images/media/image114.webp" alt="" width="671" height="67" />

例如ul作标准父元素，添加多个li作浮动子元素

注意，子元素的margin值是子元素之间的，不会撑开定高的父盒子

### 浮动元素的兄弟元素也应浮动

<img src="/images/css_images/media/image115.webp" alt="" width="553" height="60" />

# 清除浮动

# 定位

<img src="/images/css_images/media/image116.webp" alt="" width="553" height="103" />

## 定位模式：子绝父相

<img src="/images/css_images/media/image117.webp" alt="" width="553" height="179" />

### 静态定位（无定位）static

<img src="/images/css_images/media/image118.webp" alt="" width="370" height="238" />

### 相对定位（相对自身）relative

<img src="/images/css_images/media/image119.webp" alt="" width="553" height="235" />

### 绝对定位 absolute

<img src="/images/css_images/media/image120.webp" alt="" width="553" height="156" />

绝对定位特点：

<img src="/images/css_images/media/image121.webp" alt="" width="602" height="92" />

### 绝对定位的盒子居中实现

<img src="/images/css_images/media/image122.webp" alt="" width="611" height="94" />

### 子绝父相

子级是绝对定位的话，父级应是相对定位

<img src="/images/css_images/media/image123.webp" alt="" width="553" height="213" />

## 固定定位 fixed

将元素固定在浏览器可视区的位置

<img src="/images/css_images/media/image124.webp" alt="" width="553" height="96" />

<img src="/images/css_images/media/image125.webp" alt="" width="553" height="249" />

### 固定定位定位在版心附近的算法

<img src="/images/css_images/media/image126.webp" alt="" width="553" height="195" />

<img src="/images/css_images/media/image127.webp" alt="" width="397" height="141" />

## 粘性定位

跟页面滚动搭配使用，当元素碰到浏览器视窗时变为固定定位

可以认为是相对定位和固定定位的结合

<img src="/images/css_images/media/image128.webp" alt="" width="553" height="42" />

<img src="/images/css_images/media/image129.webp" alt="" width="553" height="191" />

## 定位的拓展

**1.定位的特殊特性**

<img src="/images/css_images/media/image130.webp" alt="" width="553" height="100" />

**2.脱标的盒子不会触发外边距塌陷**

<img src="/images/css_images/media/image131.webp" alt="" width="553" height="45" />

**3.绝对定位/固定定位会完全压住盒子**

<img src="/images/css_images/media/image132.webp" alt="" width="553" height="97" />

## 定位的叠放次序 z-index

<img src="/images/css_images/media/image133.webp" alt="" width="553" height="22" />

<img src="/images/css_images/media/image134.webp" alt="" width="541" height="153" />

## 边偏移

<img src="/images/css_images/media/image135.webp" alt="" width="553" height="189" />

# 元素的显示与隐藏

<img src="/images/css_images/media/image136.webp" alt="" width="553" height="71" />

## 显示方式display：none

<img src="/images/css_images/media/image137.webp" alt="" width="553" height="190" />

## 可见性visibility：hidden

<img src="/images/css_images/media/image138.webp" alt="" width="553" height="214" />

## 溢出显示设置overflow：hidden

<img src="/images/css_images/media/image139.webp" alt="" width="553" height="276" />

# 精灵图(sprites) 使用background-position设置xy偏移实现

将小背景图像整合到大图片，减少请求次数以提高页面加载速度

<img src="/images/css_images/media/image140.webp" alt="" width="553" height="258" />

<img src="/images/css_images/media/image141.webp" alt="" width="553" height="109" />

<img src="/images/css_images/media/image142.webp" alt="" width="553" height="26" />

精灵图缺点：

<img src="/images/css_images/media/image143.webp" alt="" width="287" height="110" />

# 字体图标 iconfont

<img src="/images/css_images/media/image144.webp" alt="" width="626" height="46" />

<img src="/images/css_images/media/image145.webp" alt="" width="625" height="112" />

<img src="/images/css_images/media/image146.webp" alt="" width="602" height="73" />

**一、字体图标下载**

<img src="/images/css_images/media/image147.webp" alt="" width="630" height="209" />

**二、字体图标引入**

<img src="/images/css_images/media/image148.webp" alt="" width="461" height="47" />

<img src="/images/css_images/media/image149.webp" alt="" width="661" height="75" />

<img src="/images/css_images/media/image150.webp" alt="" width="648" height="269" />

iconmoon为自定义的字体名字

<img src="/images/css_images/media/image151.webp" alt="" width="225" height="48" />

复制<img src="/images/css_images/media/image152.webp" alt="" width="22" height="26" />并作为文本插入(如插入span)，再给span声明字体

**三、字体图标追加**

<img src="/images/css_images/media/image153.webp" alt="" width="660" height="66" />

# CSS三角（通过边框制作三角）

<img src="/images/css_images/media/image154.webp" alt="" width="553" height="502" />

实现其他三角形：拉长边框再切割

<img src="/images/css_images/media/image155.webp" alt="" width="355" height="172" /><img src="/images/css_images/media/image156.webp" alt="" width="165" height="166" />

<img src="/images/css_images/media/image157.webp" alt="" width="323" height="185" /><img src="/images/css_images/media/image158.webp" alt="" width="118" height="192" />

<img src="/images/css_images/media/image159.webp" alt="" width="553" height="409" />

# 用户界面样式

## 鼠标样式 cursor

<img src="/images/css_images/media/image160.webp" alt="" width="553" height="367" />

## 取消表单轮廓线outline

<img src="/images/css_images/media/image161.webp" alt="" width="553" height="81" />

## 防止拖拽文本域 resize

<img src="/images/css_images/media/image162.webp" alt="" width="417" height="119" />

## verticle-aglign实现垂直对齐

<img src="/images/css_images/media/image163.webp" alt="" width="652" height="381" />

## 解决图片底部默认空白缝隙（图片与文字默认基线对齐）

<img src="/images/css_images/media/image164.webp" alt="" width="553" height="156" />

## 溢出文字以省略号显示

**单行文本**

<img src="/images/css_images/media/image165.webp" alt="" width="553" height="221" />

**多行文本**

<img src="/images/css_images/media/image166.webp" alt="" width="553" height="39" />

<img src="/images/css_images/media/image167.webp" alt="" width="553" height="351" />

# 常见布局技巧

## margin负值的使用

避免边框并列，并正常显示出边框

<img src="/images/css_images/media/image168.webp" alt="" width="655" height="81" />

## 文字围绕浮动元素

文字为直接输入的标准流，文字前插入浮动的图片

<img src="/images/css_images/media/image169.webp" alt="" width="553" height="180" />
