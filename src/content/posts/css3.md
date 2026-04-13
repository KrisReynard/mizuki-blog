---
title: "CSS3"
published: 2025-09-20
updated: 2026-04-12
description: "CSS续作"
tags: ["CSS", "学习笔记"]
category: "学习笔记"
image: "/images/covers/CSS3.jpeg"
draft: false
---

## CSS3新增选择器

## 属性选择器 权重0010

<img src="/images/css3_images/media/image1.png" alt="" width="553" height="237" />

以xx开头/结尾和含有xx指的是属性值的双引号内含有，通过正则表达式检测。而不是指标签内的属性位置

不添加元素名仅有中括号部分则表示选择所有具备该属性的元素

在js内选择则是document.querySelector(‘\[属性\]’)

## 结构伪类选择器 权重0010

<img src="/images/css3_images/media/image2.png" alt="" width="604" height="292" />

<img src="/images/css3_images/media/image3.png" alt="" width="355" height="83" />

<img src="/images/css3_images/media/image4.png" alt="" width="634" height="305" />

<img src="/images/css3_images/media/image5.png" alt="" width="640" height="85" />

### 反选 :not(反选内容)

除了第一个tr，对剩余子代进行悬停时的修改

<img src="/images/css3_images/media/image6.png" alt="" width="553" height="124" />

## 伪元素选择器 权重0010

<img src="/images/css3_images/media/image7.png" alt="" width="628" height="31" />

<img src="/images/css3_images/media/image8.png" alt="" width="553" height="125" />

<img src="/images/css3_images/media/image9.png" alt="" width="553" height="182" />

创建的元素均属子元素，父元素加上伪元素(div::before)的权重是2

### 伪元素字体图标

<img src="/images/css3_images/media/image10.png" alt="" width="304" height="218" />

# CSS3盒子模型 box-sizing

<img src="/images/css3_images/media/image11.png" alt="" width="553" height="202" />

# CSS滤镜 filter

<img src="/images/css3_images/media/image12.png" alt="" width="553" height="48" />

<img src="/images/css3_images/media/image13.png" alt="" width="553" height="29" />

# calc函数

<img src="/images/css3_images/media/image14.png" alt="" width="553" height="228" />

# CSS3过渡效果 transition

常与hover搭配使用

<img src="/images/css3_images/media/image15.png" alt="" width="654" height="240" />

<img src="/images/css3_images/media/image16.png" alt="" width="553" height="214" />

transition加在变化前的标签，变化后的属性仍放在变化后的hover

同时修改多个属性，用逗号隔开：

<img src="/images/css3_images/media/image17.png" alt="" width="553" height="42" />

要所有属性都变化，也可以将属性名改成all

# CSS 2D转换transform

移动translate 旋转rotate 缩放scale

## 移动translate

<img src="/images/css3_images/media/image18.png" alt="" width="553" height="110" />

<img src="/images/css3_images/media/image19.png" alt="" width="553" height="128" />

<img src="/images/css3_images/media/image20.png" alt="" width="566" height="131" />

xy均为正数，则元素往右下角移动，类似于精灵图移动方向

translate可以用于**制作过渡效果**

## 旋转rotate

<img src="/images/css3_images/media/image21.png" alt="" width="553" height="401" />

## 缩放scale

<img src="/images/css3_images/media/image22.png" alt="" width="553" height="309" />

scale的缩放是**脱标**的，不影响其他盒子

## 转换中心点transform-origin

<img src="/images/css3_images/media/image23.png" alt="" width="553" height="302" />

## 综合写法

<img src="/images/css3_images/media/image24.png" alt="" width="640" height="105" />

# CSS动画animation 使用@keyframes（关键帧）

<img src="/images/css3_images/media/image25.png" alt="" width="509" height="415" />

注：元素可以添加多个动画，用逗号分割各组animation的参数

<img src="/images/css3_images/media/image26.png" alt="" width="509" height="389" />

<img src="/images/css3_images/media/image27.png" alt="" width="412" height="386" />

<img src="/images/css3_images/media/image28.png" alt="" width="553" height="141" />

<img src="/images/css3_images/media/image29.png" alt="" width="602" height="360" />

## 简写：先移动后旋转

<img src="/images/css3_images/media/image30.png" alt="" width="627" height="100" />

<img src="/images/css3_images/media/image31.png" alt="" width="626" height="131" />

## 速度曲线的细节与步长steps()

<img src="/images/css3_images/media/image32.png" alt="" width="603" height="334" />

用精灵图和steps实现动画效果：

首先建立盒子，刚好放得下一帧，随后根据帧数设置steps参数，最后设置播放速度、循环等

# 3D转换 

记得给子元素绝对定位，父元素相对定位，实现**脱标**先让图片重叠

## 3d移动translate3d

<img src="/images/css3_images/media/image33.png" alt="" width="553" height="123" />

<img src="/images/css3_images/media/image34.png" alt="" width="645" height="166" />

translate和translate3d的值不能省略，不需要则填0

## 透视perspective 单位px，模拟视觉点到平面的距离

<img src="/images/css3_images/media/image35.png" alt="" width="553" height="203" />

<img src="/images/css3_images/media/image36.png" alt="" width="553" height="90" />

x、y、z都有数值，则是矢量叠加的方向作轴

## 3d旋转rotate3d

<img src="/images/css3_images/media/image37.png" alt="" width="553" height="108" />

注意沿着什么轴旋转是把这个轴当轴心

<img src="/images/css3_images/media/image38.png" alt="" width="553" height="228" />

## 3d呈现 transform-style

如果不设置子元素立体，则会给3d的子元素做成2d效果

<img src="/images/css3_images/media/image39.png" alt="" width="553" height="193" />

# 浏览器私有前缀

<img src="/images/css3_images/media/image40.png" alt="" width="553" height="221" />

<img src="/images/css3_images/media/image41.png" alt="" width="553" height="336" />

# 弹性盒子display:flex或inline-flex

<img src="/images/css3_images/media/image42.png" alt="" width="605" height="126" />

## 属性flex-direction 选定轴排列

<img src="/images/css3_images/media/image43.png" alt="" width="553" height="362" />

row-reverse column

<img src="/images/css3_images/media/image44.png" alt="" width="264" height="168" />
<img src="/images/css3_images/media/image45.png" alt="" width="274" height="175" />

## 属性justify-content 主轴排列方式

<img src="/images/css3_images/media/image46.png" alt="" width="553" height="27" />

<img src="/images/css3_images/media/image47.png" alt="" width="567" height="22" />

<img src="/images/css3_images/media/image48.png" alt="" width="621" height="329" />

<img src="/images/css3_images/media/image49.png" alt="" width="592" height="295" />

## 属性align-items 侧轴排列方式

<img src="/images/css3_images/media/image50.png" alt="" width="553" height="42" />

<img src="/images/css3_images/media/image51.png" alt="" width="553" height="39" />

<img src="/images/css3_images/media/image52.png" alt="" width="597" height="164" />

flex-start flex-end

<img src="/images/css3_images/media/image53.png" alt="" width="268" height="169" />
<img src="/images/css3_images/media/image54.png" alt="" width="267" height="171" />

## 属性flex-wrap 换行方式

<img src="/images/css3_images/media/image55.png" alt="" width="553" height="31" />

<img src="/images/css3_images/media/image56.png" alt="" width="553" height="88" />

## 属性align-content 每行按侧轴对齐方式（控制wrap的行为）

<img src="/images/css3_images/media/image57.png" alt="" width="553" height="30" />

<img src="/images/css3_images/media/image58.png" alt="" width="553" height="192" />

## 弹性子元素属性：排序order:整数值

<img src="/images/css3_images/media/image59.png" alt="" width="553" height="217" />

## 弹性子元素属性：align-self 子元素自身在侧轴的对齐方式

<img src="/images/css3_images/media/image60.png" alt="" width="553" height="34" />

<img src="/images/css3_images/media/image61.png" alt="" width="553" height="188" />

<img src="/images/css3_images/media/image62.png" alt="" width="407" height="258" />

## 弹性子元素属性：flex 指定子元素如何分配空间

<img src="/images/css3_images/media/image63.png" alt="" width="617" height="28" />

<img src="/images/css3_images/media/image64.png" alt="" width="398" height="313" />
