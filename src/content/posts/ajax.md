---
title: "Ajax"
published: 2025-10-20
updated: 2026-04-12
description: "浅学ajax"
tags: ["Ajax", "学习笔记"]
category: "学习笔记"
image: "/images/covers/Ajax.png"
draft: false
---

# AXIOS使用

\<script
src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"\>\</script\>

<img src="/images/ajax_images/media/image1.png" alt="" width="553" height="298" />

<img src="/images/ajax_images/media/image2.png" alt="" width="553" height="261" />

引入axios库，获取result并打印，在控制台内查看result包含的东西，再利用其获取数据

有axios(config)、axios.操作( ‘url’ , config)两种方法

操作指get、post等，url为字符串，config为对象，第一种方法的config内应该至少包含了url和method来表示链接和操作

<img src="/images/ajax_images/media/image3.png" alt="" width="577" height="384" />

<img src="/images/ajax_images/media/image4.png" alt="" width="553" height="174" />

多个数据使用花括号写成对象形式

## URL的组成

<img src="/images/ajax_images/media/image5.png" alt="" width="553" height="107" />

### url查询参数 axios : params

<img src="/images/ajax_images/media/image6.png" alt="" width="553" height="59" />

<img src="/images/ajax_images/media/image7.png" alt="" width="553" height="103" />

**利用axio提交查询参数**

<img src="/images/ajax_images/media/image8.png" alt="" width="553" height="71" />

<img src="/images/ajax_images/media/image9.png" alt="" width="588" height="215" />

**后端返回的数据保存在result里，通过打印到控制台可查看**

<img src="/images/ajax_images/media/image10.png" alt="" width="553" height="236" />

## 常用请求方法：增删查改 axios : method、data

<img src="/images/ajax_images/media/image11.png" alt="" width="249" height="311" />

<img src="/images/ajax_images/media/image12.png" alt="" width="553" height="183" />

<img src="/images/ajax_images/media/image13.png" alt="" width="544" height="250" />

实际上在传输数据时，data部分会被自动转化为json格式

## axios错误处理 catch( e =\> {} )

如：重复注册用户名

<img src="/images/ajax_images/media/image14.png" alt="" width="600" height="270" />

<img src="/images/ajax_images/media/image15.png" alt="" width="553" height="500" />

# HTTP协议

## http请求报文

<img src="/images/ajax_images/media/image16.png" alt="" width="553" height="442" />

通过请求报文可以排查错误由前端还是后端造成，方法是查看网络面板中的请求体

## http响应报文

<img src="/images/ajax_images/media/image17.png" alt="" width="553" height="161" />

<img src="/images/ajax_images/media/image18.png" alt="" width="553" height="351" />

<img src="/images/ajax_images/media/image19.png" alt="" width="553" height="146" />

<img src="/images/ajax_images/media/image20.png" alt="" width="470" height="90" />

<img src="/images/ajax_images/media/image21.png" alt="" width="307" height="283" />

# 杂项

## 接口文档

<img src="/images/ajax_images/media/image22.png" alt="" width="553" height="70" />

<img src="/images/ajax_images/media/image23.png" alt="" width="553" height="323" />

## form-serialize快速收集某个表单内表单元素的值

\<script src=”
<https://unpkg.com/form-serialize@0.7.2/form-serialize.min.js>”\>
\</script\>

<img src="/images/ajax_images/media/image24.png" alt="" width="584" height="161" />

返回的data内，表单元素name的值为属性，value的值为属性值

\*建议name的值与接口文档给出的参数名一致

hash的true/false表示js对象/查询字符串(如下);
<img src="/images/ajax_images/media/image25.png" alt="" width="374" height="23" />

empty为true表示允许取值为空的属性及其值

<img src="/images/ajax_images/media/image26.png" alt="" width="553" height="444" />

<img src="/images/ajax_images/media/image27.png" alt="" width="626" height="358" />

## 引入bootstrap实现模态框效果

菜鸟教程的文档：[Bootstrap CSS 概览 \|
菜鸟教程](https://www.runoob.com/bootstrap/bootstrap-css-overview.html)

**首先引入js和css**

**js放在body里**

\<script
src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.2.3/js/bootstrap.min.js"\>\</script\>

**css要放在head里**

\<link
href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.2.3/css/bootstrap.min.css"
rel="stylesheet"\>

**代码示例如下**

\<h2\>创建模态框（Modal）\</h2\>

\<!-- 按钮触发模态框 --\>

\<button class="btn btn-primary btn-lg" data-toggle="modal"
data-target="#myModal"\>开始演示模态框\</button\>

\<!-- 模态框（Modal） --\>

\<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
aria-labelledby="myModalLabel" aria-hidden="true"\>

\<div class="modal-dialog"\>

\<div class="modal-content"\>

\<div class="modal-header"\>

\<button type="button" class="close" data-dismiss="modal"
aria-hidden="true"\>\&times;\</button\>

\<h4 class="modal-title" id="myModalLabel"\>模态框（Modal）标题\</h4\>

\</div\>

\<div class="modal-body"\>在这里添加一些文本\</div\>

\<div class="modal-footer"\>

\<button type="button" class="btn btn-default"
data-dismiss="modal"\>关闭\</button\>

\<button type="button" class="btn btn-primary"\>提交更改\</button\>

\</div\>

\</div\>\<!-- /.modal-content --\>

\</div\>\<!-- /.modal --\>

\</div\>

### 属性控制弹框

对于要显示弹框的按钮，添加data-bs-toggale属性

对于要隐藏弹框的按钮，添加data-bs-dismiss属性

以上属性的值为弹框类型，如”modal”

为按钮指定弹框，添加data-bs-target属性，值为css选择器

### js控制弹框

<img src="/images/ajax_images/media/image28.png" alt="" width="553" height="218" />

<img src="/images/ajax_images/media/image29.png" alt="" width="553" height="466" />

## console.log与console.dir的区别

<img src="/images/ajax_images/media/image30.png" alt="" width="553" height="251" />

<img src="/images/ajax_images/media/image31.png" alt="" width="553" height="254" />

<img src="/images/ajax_images/media/image32.png" alt="" width="296" height="381" />

<img src="/images/ajax_images/media/image33.png" alt="" width="553" height="191" />

## 宏任务与微任务

<img src="/images/ajax_images/media/image34.png" alt="" width="553" height="129" />

<img src="/images/ajax_images/media/image35.png" alt="" width="553" height="234" />

<img src="/images/ajax_images/media/image36.png" alt="" width="553" height="121" />

<img src="/images/ajax_images/media/image37.png" alt="" width="553" height="43" />

<img src="/images/ajax_images/media/image38.png" alt="" width="553" height="309" />

<img src="/images/ajax_images/media/image39.png" alt="" width="553" height="154" />

异步任务里微任务先执行，其次才是宏任务。

微任务不会经过宿主环境而直接进入微任务队列。宏任务由浏览器进行计时等操作后放入宏任务队列

# Promise

<img src="/images/ajax_images/media/image40.png" alt="" width="553" height="38" />

<img src="/images/ajax_images/media/image41.png" alt="" width="327" height="319" />\
<img src="/images/ajax_images/media/image42.png" alt="" width="553" height="363" />

<img src="/images/ajax_images/media/image43.png" alt="" width="553" height="119" />

失败时一般传入一个error对象

生成Promise的参数是回调函数，其参数也是两个回调函数

调用resolve或者reject传入的值就是then和catch的形参

## promise三种状态

<img src="/images/ajax_images/media/image44.png" alt="" width="553" height="134" />

<img src="/images/ajax_images/media/image45.png" alt="" width="378" height="63" />

<img src="/images/ajax_images/media/image46.png" alt="" width="553" height="307" />

## 回调函数地狱

<img src="/images/ajax_images/media/image47.png" alt="" width="553" height="108" />

## 利用链式调用解决回调函数地狱

<img src="/images/ajax_images/media/image48.png" alt="" width="553" height="76" />

<img src="/images/ajax_images/media/image49.png" alt="" width="553" height="113" />

<img src="/images/ajax_images/media/image50.png" alt="" width="553" height="535" />

axios也可以如此使用，可以重复使用.then

这里用了三个.then

<img src="/images/ajax_images/media/image51.png" alt="" width="607" height="273" />

## Promise.all静态方法（可以结合axios用，质是promise）

<img src="/images/ajax_images/media/image52.png" alt="" width="553" height="68" />

<img src="/images/ajax_images/media/image53.png" alt="" width="553" height="239" />

<img src="/images/ajax_images/media/image54.png" alt="" width="553" height="154" />

<img src="/images/ajax_images/media/image55.png" alt="" width="628" height="286" />\
result返回结果对象的数组，顺序与传入的promise对象数组一致

# async函数和await关键字

<img src="/images/ajax_images/media/image56.png" alt="" width="553" height="101" />

<img src="/images/ajax_images/media/image57.png" alt="" width="611" height="207" />

await必须用在async修饰的函数内，await会阻止异步函数内的代码执行，原地等待结果

## 错误捕获：使用try catch

<img src="/images/ajax_images/media/image58.png" alt="" width="553" height="362" />

# XMLHttpRequest

<img src="/images/ajax_images/media/image59.png" alt="" width="598" height="64" />

<img src="/images/ajax_images/media/image60.png" alt="" width="321" height="177" />

<img src="/images/ajax_images/media/image61.png" alt="" width="609" height="181" />

用xhr获得的数据是json类型，需要自己转为数组类型

<img src="/images/ajax_images/media/image62.png" alt="" width="553" height="352" />

## XHR查询参数

携带的查询参数需要由自己手动加到url中

<img src="/images/ajax_images/media/image63.png" alt="" width="553" height="178" />

## XHR提交数据

用XHR提交数据，需要自己设置请求头和请求体。

请求头要告知服务器自己传递的内容类型是JSON

请求体要手动转成JSON字符串

<img src="/images/ajax_images/media/image64.png" alt="" width="588" height="393" />

<img src="/images/ajax_images/media/image65.png" alt="" width="464" height="337" />

# Promis+XHR模拟Axios

<img src="/images/ajax_images/media/image66.png" alt="" width="553" height="499" />

<img src="/images/ajax_images/media/image67.png" alt="" width="293" height="173" />

响应状态码保存在status内，需要判断响应状态来调用resolve/reject

<img src="/images/ajax_images/media/image68.png" alt="" width="553" height="564" />

如果axios要携带数据，还需要判断有没有data

<img src="/images/ajax_images/media/image69.png" alt="" width="553" height="200" />
