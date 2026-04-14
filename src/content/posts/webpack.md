---
title: "webpack"
published: 2025-11-01
updated: 2026-04-12
description: "你知道吗，其实我更想学vite"
tags: ["webpack", "学习笔记"]
category: "学习笔记"
image: "/images/covers/webpack.webp"
draft: false
---

<img src="/images/webpack_images/media/image1.webp" alt="" width="553" height="255" />

<img src="/images/webpack_images/media/image2.webp" alt="" width="611" height="172" />

# 修改打包入口与出口

默认打包入口是src文件夹下的index.js

默认打包出口是dist文件夹下的main.js

<img src="/images/webpack_images/media/image3.webp" alt="" width="553" height="249" />

<img src="/images/webpack_images/media/image4.webp" alt="" width="211" height="178" />

<img src="/images/webpack_images/media/image5.webp" alt="" width="553" height="281" />

如果打包成config对象，一定要赋值给module.export

# 打包html：使用插件（给webpack提供功能）

<img src="/images/webpack_images/media/image6.webp" alt="" width="553" height="133" />

<img src="/images/webpack_images/media/image7.webp" alt="" width="553" height="90" />

注意要在webpack的配置文件中用require引入html配置包

<img src="/images/webpack_images/media/image8.webp" alt="" width="553" height="327" />

# 打包css：使用加载器（让webpack识别更多文件）

<img src="/images/webpack_images/media/image9.webp" alt="" width="553" height="91" />

<img src="/images/webpack_images/media/image10.webp" alt="" width="553" height="75" />

<img src="/images/webpack_images/media/image11.webp" alt="" width="553" height="163" />

为了让css能够被一起打包，需要在index.js内引入css文件

<img src="/images/webpack_images/media/image12.webp" alt="" width="550" height="86" />

<img src="/images/webpack_images/media/image13.webp" alt="" width="553" height="269" />

css跟js打包在一起放在js文件内

## 优化打包过程：将打包后的css从js提取

<img src="/images/webpack_images/media/image14.webp" alt="" width="553" height="209" />

<img src="/images/webpack_images/media/image15.webp" alt="" width="553" height="54" />

<img src="/images/webpack_images/media/image16.webp" alt="" width="553" height="90" />

<img src="/images/webpack_images/media/image17.webp" alt="" width="553" height="416" />

注意：webpack的配置文件内加载插件一定要先require引入，再new一个新的

设置出口与html/js同级还需要添加相对路径参数

<img src="/images/webpack_images/media/image18.webp" alt="" width="525" height="115" />

## 优化打包-对css进行压缩

<img src="/images/webpack_images/media/image19.webp" alt="" width="553" height="264" />

<img src="/images/webpack_images/media/image20.webp" alt="" width="553" height="74" />

<img src="/images/webpack_images/media/image21.webp" alt="" width="553" height="324" />

添加‘…’使js的压缩不受影响

# 打包less为css

<img src="/images/webpack_images/media/image22.webp" alt="" width="553" height="185" /><img src="/images/webpack_images/media/image23.webp" alt="" width="553" height="80" />

<img src="/images/webpack_images/media/image24.webp" alt="" width="553" height="44" /><img src="/images/webpack_images/media/image25.webp" alt="" width="553" height="244" />

# 打包图片等：webpack5自带资源模块

<img src="/images/webpack_images/media/image26.webp" alt="" width="553" height="36" />

<img src="/images/webpack_images/media/image27.webp" alt="" width="553" height="159" />

<img src="/images/webpack_images/media/image28.webp" alt="" width="489" height="399" />

<img src="/images/webpack_images/media/image29.webp" alt="" width="553" height="93" />

<img src="/images/webpack_images/media/image30.webp" alt="" width="553" height="146" />

<img src="/images/webpack_images/media/image31.webp" alt="" width="553" height="170" />

如果要把图片导入js或是通过js在html创建图片，需要通过对象的方式引入图片

<img src="/images/webpack_images/media/image32.webp" alt="" width="654" height="122" />

# 搭建开发环境（自动打包+live server）

<img src="/images/webpack_images/media/image33.webp" alt="" width="553" height="180" />

<img src="/images/webpack_images/media/image34.webp" alt="" width="553" height="159" />

<img src="/images/webpack_images/media/image35.webp" alt="" width="553" height="85" />

配置模式的命令在webpack.config.js里

<img src="/images/webpack_images/media/image36.webp" alt="" width="325" height="162" />

配置自定义命令的位置在所用包目录下的package.json里

<img src="/images/webpack_images/media/image37.webp" alt="" width="553" height="169" />

服务器默认以public文件夹作为提供给浏览器的静态资源根目录

创建的默认端口为8080，即localhost:8080，会自动访问html

要访问页面内容可以加上目录，即localhost:8080/index.html

除此之外，dist目录(出口)也作为另一个根目录，可以加载其他资源

如localhost:8080/html/index.html

<img src="/images/webpack_images/media/image38.webp" alt="" width="647" height="70" />

也可以在public下新增一个html，使用location.href强制跳转访问

<img src="/images/webpack_images/media/image39.webp" alt="" width="665" height="230" />

## 打包模式

<img src="/images/webpack_images/media/image40.webp" alt="" width="553" height="183" />

<img src="/images/webpack_images/media/image41.webp" alt="" width="553" height="187" />

webpack内：

<img src="/images/webpack_images/media/image42.webp" alt="" width="256" height="120" />

package内：

<img src="/images/webpack_images/media/image43.webp" alt="" width="553" height="124" />

## 打包模式应用

<img src="/images/webpack_images/media/image44.webp" alt="" width="553" height="97" />

<img src="/images/webpack_images/media/image45.webp" alt="" width="553" height="137" />

<img src="/images/webpack_images/media/image46.webp" alt="" width="553" height="86" />

<img src="/images/webpack_images/media/image47.webp" alt="" width="553" height="93" />

<img src="/images/webpack_images/media/image48.webp" alt="" width="553" height="242" />

# 注入环境变量

<img src="/images/webpack_images/media/image49.webp" alt="" width="553" height="103" />

<img src="/images/webpack_images/media/image50.webp" alt="" width="553" height="260" />

在webpack.config.js内配置上述代码

在实际代码内使用自己加的变量

# 开发环境调错（source map）

<img src="/images/webpack_images/media/image51.webp" alt="" width="553" height="103" />

<img src="/images/webpack_images/media/image52.webp" alt="" width="329" height="120" />

<img src="/images/webpack_images/media/image53.webp" alt="" width="553" height="48" />

<img src="/images/webpack_images/media/image54.webp" alt="" width="553" height="247" />

# 解析别名alias

<img src="/images/webpack_images/media/image55.webp" alt="" width="629" height="59" />

<img src="/images/webpack_images/media/image56.webp" alt="" width="553" height="21" />

在webpack內配置

<img src="/images/webpack_images/media/image57.webp" alt="" width="553" height="281" />

<img src="/images/webpack_images/media/image58.webp" alt="" width="553" height="32" />

# webpack优化：CDN使用

<img src="/images/webpack_images/media/image59.webp" alt="" width="553" height="84" />

<img src="/images/webpack_images/media/image60.webp" alt="" width="553" height="38" />

<img src="/images/webpack_images/media/image61.webp" alt="" width="575" height="79" />

<img src="/images/webpack_images/media/image62.webp" alt="" width="553" height="189" />

<img src="/images/webpack_images/media/image63.webp" alt="" width="553" height="201" />

<img src="/images/webpack_images/media/image64.webp" alt="" width="553" height="59" />

# 多页面打包

<img src="/images/webpack_images/media/image65.webp" alt="" width="579" height="50" />

<img src="/images/webpack_images/media/image66.webp" alt="" width="401" height="125" />

如图，把entry和out设置为对象

在entry中**设置为属性名的模块名**，webpack会在输出时用来**替换output中的\[name\]**

plugins中每个html模块都要有对应的html插件对象，同时还要**新增chunks属性**，**其值为entry中的属性**（模块名）

其他模块（如css）同理

注:template指向html，而entry指向js

<img src="/images/webpack_images/media/image67.webp" alt="" width="553" height="503" />

## 优化多页面打包：提取公共代码

<img src="/images/webpack_images/media/image68.webp" alt="" width="553" height="177" />

<img src="/images/webpack_images/media/image69.webp" alt="" width="553" height="339" />
