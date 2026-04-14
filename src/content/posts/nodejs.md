---
title: "NodeJs"
published: 2025-10-27
updated: 2026-04-12
description: "我没感觉用处有多大，但还是硬着头皮看完了网课"
tags: ["NodeJs", "学习笔记"]
category: "学习笔记"
image: "/images/covers/NodeJs.webp"
draft: false
---

<img src="/images/nodejs_images/media/image1.webp" alt="" width="553" height="292" />

<img src="/images/nodejs_images/media/image2.webp" alt="" width="553" height="147" />

<img src="/images/nodejs_images/media/image3.webp" alt="" width="481" height="55" />

<img src="/images/nodejs_images/media/image4.webp" alt="" width="553" height="350" />

在终端内输入node xxx(文件名)来运行js文件

<img src="/images/nodejs_images/media/image5.webp" alt="" width="553" height="163" />

# fs模块-读写文件

<img src="/images/nodejs_images/media/image6.webp" alt="" width="553" height="81" />

<img src="/images/nodejs_images/media/image7.webp" alt="" width="191" height="140" />

<img src="/images/nodejs_images/media/image8.webp" alt="" width="553" height="329" />

Buffer数据流是数据在计算机内部的表示形式(字节)

<img src="/images/nodejs_images/media/image9.webp" alt="" width="553" height="64" />

需要用data.toString()转成正常字符串

<img src="/images/nodejs_images/media/image10.webp" alt="" width="516" height="36" />

<img src="/images/nodejs_images/media/image11.webp" alt="" width="553" height="59" />

<img src="/images/nodejs_images/media/image12.webp" alt="" width="553" height="297" />

# path

<img src="/images/nodejs_images/media/image13.webp" alt="" width="633" height="25" />

即以终端所在文件夹为起点，访问文件夹外的文件无需找父目录

<img src="/images/nodejs_images/media/image14.webp" alt="" width="620" height="62" />

windows和mac的路径分隔符不同

<img src="/images/nodejs_images/media/image15.webp" alt="" width="553" height="111" />

<img src="/images/nodejs_images/media/image16.webp" alt="" width="342" height="117" />

<img src="/images/nodejs_images/media/image17.webp" alt="" width="553" height="71" />

<img src="/images/nodejs_images/media/image18.webp" alt="" width="553" height="242" />

# 通过正则表达式去掉换行符和回车符以压缩html文件

<img src="/images/nodejs_images/media/image19.webp" alt="" width="553" height="261" />

# 基于http模块创建web服务

<img src="/images/nodejs_images/media/image20.webp" alt="" width="553" height="262" />

<img src="/images/nodejs_images/media/image21.webp" alt="" width="553" height="256" />

3000为端口号，1000左右以下的端口号被特殊占用，尽量设大

## 创建web请求服务

<img src="/images/nodejs_images/media/image22.webp" alt="" width="553" height="137" />

<img src="/images/nodejs_images/media/image23.webp" alt="" width="553" height="437" />

通过req.url判断请求的资源位于本机何处

注意setHeader里的文本类型要改成html

最后要设置监听端口

# Nodejs的模块化

<img src="/images/nodejs_images/media/image24.webp" alt="" width="413" height="109" />

## CommonJS标准（nodejs默认标准）

<img src="/images/nodejs_images/media/image25.webp" alt="" width="553" height="40" />

<img src="/images/nodejs_images/media/image26.webp" alt="" width="553" height="36" />

<img src="/images/nodejs_images/media/image27.webp" alt="" width="313" height="119" /><img src="/images/nodejs_images/media/image28.webp" alt="" width="450" height="104" />

<img src="/images/nodejs_images/media/image29.webp" alt="" width="612" height="300" />

<img src="/images/nodejs_images/media/image30.webp" alt="" width="553" height="245" />

## ECMAScript标准-默认导出导入

<img src="/images/nodejs_images/media/image31.webp" alt="" width="408" height="105" />

<img src="/images/nodejs_images/media/image32.webp" alt="" width="301" height="25" />

<img src="/images/nodejs_images/media/image33.webp" alt="" width="553" height="17" />

<img src="/images/nodejs_images/media/image34.webp" alt="" width="553" height="337" />

<img src="/images/nodejs_images/media/image35.webp" alt="" width="553" height="128" />

<img src="/images/nodejs_images/media/image36.webp" alt="" width="278" height="134" />

## ECMAScript标准-命名导出导入

<img src="/images/nodejs_images/media/image37.webp" alt="" width="553" height="39" />

<img src="/images/nodejs_images/media/image38.webp" alt="" width="553" height="131" />

<img src="/images/nodejs_images/media/image39.webp" alt="" width="553" height="68" />

<img src="/images/nodejs_images/media/image40.webp" alt="" width="553" height="87" />

<img src="/images/nodejs_images/media/image41.webp" alt="" width="290" height="103" />

# 包

<img src="/images/nodejs_images/media/image42.webp" alt="" width="449" height="38" />

<img src="/images/nodejs_images/media/image43.webp" alt="" width="368" height="110" />

<img src="/images/nodejs_images/media/image44.webp" alt="" width="553" height="30" />

<img src="/images/nodejs_images/media/image45.webp" alt="" width="599" height="21" />

<img src="/images/nodejs_images/media/image46.webp" alt="" width="553" height="188" />

index的内容及作用

<img src="/images/nodejs_images/media/image47.webp" alt="" width="450" height="344" />

## npm-软件包管理器

<img src="/images/nodejs_images/media/image48.webp" alt="" width="596" height="196" />

<img src="/images/nodejs_images/media/image49.webp" alt="" width="553" height="112" /><img src="/images/nodejs_images/media/image50.webp" alt="" width="553" height="259" />

<img src="/images/nodejs_images/media/image51.webp" alt="" width="553" height="183" />

## 安装所有依赖

<img src="/images/nodejs_images/media/image52.webp" alt="" width="422" height="233" />

## 全局软件包nodemon

<img src="/images/nodejs_images/media/image53.webp" alt="" width="553" height="149" />

<img src="/images/nodejs_images/media/image54.webp" alt="" width="553" height="112" />
