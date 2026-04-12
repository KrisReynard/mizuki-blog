# webapi基本认知

## webapi的作用和分类

<img src="./webapi _images/media/image1.png" alt="" width="553" height="101" />

## DOM是什么

<img src="./webapi _images/media/image2.png" alt="" width="645" height="96" />

## DOM树：浏览器对应html标签树生成的对象树

<img src="./webapi _images/media/image3.png" alt="" width="553" height="100" />

<img src="./webapi _images/media/image4.png" alt="" width="553" height="316" />

<img src="./webapi _images/media/image5.png" alt="" width="553" height="243" />

## DOM对象：浏览器对应html标签生成的对象（再增加一些方法）

注：CSS修改的内容在style标签内<img src="./webapi _images/media/image6.png" alt="" width="468" height="202" />

<img src="./webapi _images/media/image7.png" alt="" width="652" height="231" />

<img src="./webapi _images/media/image8.png" alt="" width="553" height="307" />

# 获取Dom对象(元素)：主要利用CSS选择器

## document.querySelector(‘css选择器’)：获取匹配的首个元素

获取到的元素可以直接修改

<img src="./webapi _images/media/image9.png" alt="" width="553" height="394" />

<img src="./webapi _images/media/image10.png" alt="" width="553" height="73" />

**多选一**也用css选择的方法

<img src="./webapi _images/media/image11.png" alt="" width="624" height="272" />

## document.querySelectorAll(‘css选择器’)：获取匹配的多个元素

获取到的是伪数组，需要遍历修改

<img src="./webapi _images/media/image12.png" alt="" width="471" height="375" />

<img src="./webapi _images/media/image13.png" alt="" width="553" height="240" />

<img src="./webapi _images/media/image14.png" alt="" width="553" height="85" />

## document.getElementBy XX ( )

<img src="./webapi _images/media/image15.png" alt="" width="553" height="265" />

# 操作元素内容

## innerText 不解析标签

<img src="./webapi _images/media/image16.png" alt="" width="326" height="106" />

<img src="./webapi _images/media/image17.png" alt="" width="553" height="196" />

<img src="./webapi _images/media/image18.png" alt="" width="553" height="35" />

<img src="./webapi _images/media/image19.png" alt="" width="327" height="46" />

## innerHTML 解析标签

<img src="./webapi _images/media/image20.png" alt="" width="374" height="112" />

# 操作元素属性

## 操作元素常用属性

<img src="./webapi _images/media/image21.png" alt="" width="553" height="205" />

<img src="./webapi _images/media/image22.png" alt="" width="553" height="126" />

设置随机图片，可以利用\${}

<img src="./webapi _images/media/image23.png" alt="" width="553" height="124" />

## 操作元素样式属性（CSS样式）

### 通过style属性操作CSS（名字带短横线的换成小驼峰）

<img src="./webapi _images/media/image24.png" alt="" width="553" height="191" />

<img src="./webapi _images/media/image25.png" alt="" width="553" height="155" />

### 通过类名className操作CSS 覆盖旧的类名

<img src="./webapi _images/media/image26.png" alt="" width="553" height="240" />

在css内预先写一个类，包含需要写的样式，在js内添加类名

覆盖的时候可以添加多个类名，由此保留之前的类名

<img src="./webapi _images/media/image27.png" alt="" width="553" height="112" />

### 通过classList操作类以控制CSS

<img src="./webapi _images/media/image28.png" alt="" width="553" height="231" />

toggle切换的类不存在的话，会自动添加

## 操作表单元素属性

<img src="./webapi _images/media/image29.png" alt="" width="553" height="157" />

注意表单内的元素值是input.**value**

innerHTML和innerText是文本值

更改表单元素类型使用input.**type**

<img src="./webapi _images/media/image30.png" alt="" width="553" height="44" />

<img src="./webapi _images/media/image31.png" alt="" width="500" height="44" />

<img src="./webapi _images/media/image32.png" alt="" width="134" height="36" /><img src="./webapi _images/media/image33.png" alt="" width="553" height="45" />

**标签内的属性不填写值相当于false，填写字符串相当于true**

html中填写的是checked = “checked”， **该字符串布尔值为true**

而js中应该填写 element.checked = **true**

<img src="./webapi _images/media/image34.png" alt="" width="553" height="31" />

disable的用法，不填写值写个disable也有效果（相当于false）

## 自定义属性

<img src="./webapi _images/media/image35.png" alt="" width="553" height="37" />

<img src="./webapi _images/media/image36.png" alt="" width="553" height="205" />

<img src="./webapi _images/media/image37.png" alt="" width="553" height="212" />

对一个元素设置各种属性和值，调用的时候返回属性集合的对象

比如对某个element设置data-**name** =“NAME”,data-**value** = true

调用的时候则是

chosedElement.data**set**.**name** =“NEW NAME”

chosedElement.data**set**.**value** = false

# 定时器函数

<img src="./webapi _images/media/image38.png" alt="" width="553" height="115" />

## 间歇函数

### 开启定时器 setInterval

<img src="./webapi _images/media/image39.png" alt="" width="553" height="161" />

<img src="./webapi _images/media/image40.png" alt="" width="303" height="107" />

可以填写匿名函数

<img src="./webapi _images/media/image41.png" alt="" width="553" height="170" />

填写具名函数时，不应添加括号，否则会立刻调用

<img src="./webapi _images/media/image42.png" alt="" width="553" height="246" />

填写字符串的情况下可以加括号，但比较少见

<img src="./webapi _images/media/image43.png" alt="" width="532" height="48" />

### 关闭定时器 clearInterval

<img src="./webapi _images/media/image44.png" alt="" width="553" height="152" /><img src="./webapi _images/media/image45.png" alt="" width="261" height="101" />

<img src="./webapi _images/media/image46.png" alt="" width="553" height="213" />

## 延时函数setTimeout

<img src="./webapi _images/media/image47.png" alt="" width="553" height="333" />

<img src="./webapi _images/media/image48.png" alt="" width="305" height="141" />

# 事件监听addEventListener

<img src="./webapi _images/media/image49.png" alt="" width="553" height="91" />

<img src="./webapi _images/media/image50.png" alt="" width="553" height="125" />

<img src="./webapi _images/media/image51.png" alt="" width="553" height="123" />

## 老版本的事件监听btn.onclick = func(){}

<img src="./webapi _images/media/image52.png" alt="" width="553" height="171" />

推荐使用新版本，可以对一个事件绑定多个函数

<img src="./webapi _images/media/image53.png" alt="" width="553" height="301" />

## 事件类型

<img src="./webapi _images/media/image54.png" alt="" width="633" height="222" />

## 事件对象

<img src="./webapi _images/media/image55.png" alt="" width="553" height="210" />

<img src="./webapi _images/media/image56.png" alt="" width="553" height="201" />

### 事件对象的属性

<img src="./webapi _images/media/image57.png" alt="" width="400" height="318" />

key的值是按键名字的字符串形式

## 环境对象this

每个函数内都有一个this对象。初始的this指向window，也就是浏览器。实际上调用一个函数的完全写法是window.fn()

**粗略**来看，this实际指向的是**函数的调用者**

<img src="./webapi _images/media/image58.png" alt="" width="553" height="118" />

在这个例子里，this指向btn

## 回调函数 做参数的函数

<img src="./webapi _images/media/image59.png" alt="" width="632" height="35" />

<img src="./webapi _images/media/image60.png" alt="" width="397" height="43" />

# 事件流 两个阶段：捕获-冒泡

<img src="./webapi _images/media/image61.png" alt="" width="553" height="320" />

## 事件捕获 

<img src="./webapi _images/media/image62.png" alt="" width="553" height="243" />

事件的捕获由根开始，上述显示顺序

<img src="./webapi _images/media/image63.png" alt="" width="553" height="259" />

注：L0事件如onclick

## 事件冒泡

事件的冒泡由元素开始，显示顺序为儿子-父亲-爷爷

<img src="./webapi _images/media/image64.png" alt="" width="588" height="230" />

# 阻止行为

## 阻止冒泡/捕获：限制事件范围 e.stopProgation

<img src="./webapi _images/media/image65.png" alt="" width="553" height="259" />

<img src="./webapi _images/media/image66.png" alt="" width="553" height="146" />

## 阻止默认行为 e.preventDefault()

<img src="./webapi _images/media/image67.png" alt="" width="553" height="29" />

<img src="./webapi _images/media/image68.png" alt="" width="553" height="132" />

<img src="./webapi _images/media/image69.png" alt="" width="524" height="132" />

<img src="./webapi _images/media/image70.png" alt="" width="553" height="281" />

## 中断并提示

提交前遍历元素，使用return alert(‘输入不能为空’)的写法中断提交表单

<img src="./webapi _images/media/image71.png" alt="" width="553" height="168" />

## 解绑事件

<img src="./webapi _images/media/image72.png" alt="" width="553" height="301" />

<img src="./webapi _images/media/image73.png" alt="" width="553" height="336" />

### 鼠标经过事件

<img src="./webapi _images/media/image74.png" alt="" width="553" height="128" />

## 事件委托

<img src="./webapi _images/media/image75.png" alt="" width="553" height="120" />

<img src="./webapi _images/media/image76.png" alt="" width="631" height="27" />

<img src="./webapi _images/media/image77.png" alt="" width="553" height="19" />

父级绑定同名事件和子级未绑定事件时,子级才会冒泡(委托)到父级

## 使用e.taget(当前选定的对象)选定当前子级

<img src="./webapi _images/media/image78.png" alt="" width="553" height="266" />

## 通过e.target.tagName(当前选定的大写的标签名)筛选受影响的子级

<img src="./webapi _images/media/image79.png" alt="" width="553" height="279" />

除此之外，e.target.id、e.target.className也可使用

# 其他事件

## 页面加载事件 (window)load、(document)DOMContentLoaded

## window.addEventListener(“load”,function(){})

<img src="./webapi _images/media/image80.png" alt="" width="613" height="353" />

<img src="./webapi _images/media/image81.png" alt="" width="640" height="30" />

## document.addEventListener(“DOMContentLoaded”,function(){})

<img src="./webapi _images/media/image82.png" alt="" width="652" height="24" />

<img src="./webapi _images/media/image83.png" alt="" width="269" height="23" /><img src="./webapi _images/media/image84.png" alt="" width="60" height="20" />

<img src="./webapi _images/media/image85.png" alt="" width="507" height="171" />

## 页面滚动事件 (window、document)scroll

<img src="./webapi _images/media/image86.png" alt="" width="553" height="305" />

<img src="./webapi _images/media/image87.png" alt="" width="553" height="174" />

### 获取位置（一般在回调函数内获取，返回数字，单位是px）

<img src="./webapi _images/media/image88.png" alt="" width="353" height="118" />

<img src="./webapi _images/media/image89.png" alt="" width="281" height="193" />

要获取整个页面的滚动情况，应先对页面进行监听，使用window.addEventListener(‘scroll’,function(){})

再获得html的对象，其名为document.documentElement

<img src="./webapi _images/media/image90.png" alt="" width="553" height="377" />

可以复制给scrollTop或Left，以设置默认滚动位置，注意不带单位

### 滚动到指定的坐标

<img src="./webapi _images/media/image91.png" alt="" width="470" height="273" />

## 页面尺寸事件

<img src="./webapi _images/media/image92.png" alt="" width="553" height="370" />

注意对象是html，因此对应的dom是document.documentElement

### **获取元素宽高clientWidth /clientHeight 不含border/margin/滚动条**

<img src="./webapi _images/media/image93.png" alt="" width="553" height="102" />
<img src="./webapi _images/media/image94.png" alt="" width="328" height="259" />含padding，不含border

# 通过js获得元素尺寸与位置

<img src="./webapi _images/media/image95.png" alt="" width="553" height="218" />

## 获取尺寸 offsetWidth/offsetHeight 包含border/padding/滚动条

<img src="./webapi _images/media/image96.png" alt="" width="553" height="162" />

## 获取位置 属性offsetLeft与offsetTop

<img src="./webapi _images/media/image97.png" alt="" width="481" height="123" />

检测最近一级带定位的祖先元素，都没有则为整个页面

## 相对当前视窗同时获得尺寸与位置 element.getBoundingClientRect()

返回一个对象，包含以下元素，其值相对于视口

<img src="./webapi _images/media/image98.png" alt="" width="553" height="228" />

# 日期对象 Date

## 日期对象创建

<img src="./webapi _images/media/image99.png" alt="" width="553" height="227" />

<img src="./webapi _images/media/image100.png" alt="" width="553" height="181" />

## 日期对象的方法

<img src="./webapi _images/media/image101.png" alt="" width="553" height="357" />

获得的数字要+1才是现实月份，星期从星期日对应0开始计数

## 时间戳

<img src="./webapi _images/media/image102.png" alt="" width="553" height="234" />

### 获得时间戳

<img src="./webapi _images/media/image103.png" alt="" width="553" height="350" />

<img src="./webapi _images/media/image104.png" alt="" width="553" height="252" />

# 节点操作

## 查找DOM节点

<img src="./webapi _images/media/image105.png" alt="" width="341" height="293" />

<img src="./webapi _images/media/image106.png" alt="" width="354" height="169" /><img src="./webapi _images/media/image107.png" alt="" width="553" height="280" />

注：选择的是最近的子级

<img src="./webapi _images/media/image108.png" alt="" width="384" height="222" />

## 增加节点 创建 - 插入

### 创建节点createElement

<img src="./webapi _images/media/image109.png" alt="" width="553" height="171" />

### 插入节点appendChild/insertBefore

<img src="./webapi _images/media/image110.png" alt="" width="422" height="298" />

## 克隆节点cloneNode

<img src="./webapi _images/media/image111.png" alt="" width="421" height="243" />

<img src="./webapi _images/media/image112.png" alt="" width="553" height="147" />

<img src="./webapi _images/media/image113.png" alt="" width="553" height="191" />

一步到位的写法

<img src="./webapi _images/media/image114.png" alt="" width="553" height="31" />

## 删除节点 父元素.removeChild 元素.remove

<img src="./webapi _images/media/image115.png" alt="" width="553" height="223" />

要删除元素也可以是：元素.remove()

# 移动端(M端)事件

<img src="./webapi _images/media/image116.png" alt="" width="553" height="199" />

# JS插件 如swiper

<img src="./webapi _images/media/image117.png" alt="" width="553" height="186" />

# Window对象

## BOM浏览器对象模型

<img src="./webapi _images/media/image118.png" alt="" width="553" height="97" />

## JS执行机制 事件循环

<img src="./webapi _images/media/image119.png" alt="" width="553" height="132" />

<img src="./webapi _images/media/image120.png" alt="" width="553" height="40" />

<img src="./webapi _images/media/image121.png" alt="" width="399" height="326" /><img src="./webapi _images/media/image122.png" alt="" width="146" height="339" />

<img src="./webapi _images/media/image123.png" alt="" width="579" height="90" />

<img src="./webapi _images/media/image124.png" alt="" width="651" height="271" />

<img src="./webapi _images/media/image125.png" alt="" width="635" height="27" />

<img src="./webapi _images/media/image126.png" alt="" width="471" height="124" />

两个的输出结果都是1111 3333 2222

## location对象

## 跳转页面location.href(‘’)

<img src="./webapi _images/media/image127.png" alt="" width="423" height="252" />

<img src="./webapi _images/media/image128.png" alt="" width="439" height="53" />

## 查找链接的表单数据(?后部分)location.search()

<img src="./webapi _images/media/image129.png" alt="" width="437" height="148" />

## 查找链接的哈希值(#后部分)location.hash

<img src="./webapi _images/media/image130.png" alt="" width="553" height="228" />

<img src="./webapi _images/media/image131.png" alt="" width="452" height="113" />

## 刷新当前页面location.reload(true)

<img src="./webapi _images/media/image132.png" alt="" width="553" height="332" />

强制刷新：不走浏览器缓存，从服务器获取数据

## navigator对象

<img src="./webapi _images/media/image133.png" alt="" width="553" height="354" />

## history对象

<img src="./webapi _images/media/image134.png" alt="" width="553" height="167" />

<img src="./webapi _images/media/image135.png" alt="" width="553" height="316" />

# 本地存储分类

## localStorage

<img src="./webapi _images/media/image136.png" alt="" width="653" height="122" />

## 存储/修改数据setItem

<img src="./webapi _images/media/image137.png" alt="" width="286" height="36" />

<img src="./webapi _images/media/image138.png" alt="" width="553" height="31" />

## 获取数据getItem

<img src="./webapi _images/media/image139.png" alt="" width="250" height="41" />

<img src="./webapi _images/media/image140.png" alt="" width="553" height="27" />

本地存储只能存储字符串数据类型，数字会被转为字符串

## 删除数据removeItem

<img src="./webapi _images/media/image141.png" alt="" width="295" height="31" />

<img src="./webapi _images/media/image142.png" alt="" width="481" height="32" />

## sessiontorage

<img src="./webapi _images/media/image143.png" alt="" width="304" height="176" />

## 通过JSON.stringify(obj)存取复杂数据类型

<img src="./webapi _images/media/image144.png" alt="" width="398" height="35" />

<img src="./webapi _images/media/image145.png" alt="" width="553" height="52" />

<img src="./webapi _images/media/image146.png" alt="" width="553" height="73" />

<img src="./webapi _images/media/image147.png" alt="" width="553" height="65" />

<img src="./webapi _images/media/image148.png" alt="" width="553" height="156" />

<img src="./webapi _images/media/image149.png" alt="" width="669" height="38" />

<img src="./webapi _images/media/image150.png" alt="" width="553" height="63" />

<img src="./webapi _images/media/image151.png" alt="" width="393" height="93" />

<img src="./webapi _images/media/image152.png" alt="" width="553" height="55" />

# 数组map和join方法

<img src="./webapi _images/media/image153.png" alt="" width="607" height="233" />

<img src="./webapi _images/media/image154.png" alt="" width="553" height="58" />

<img src="./webapi _images/media/image155.png" alt="" width="553" height="181" />

<img src="./webapi _images/media/image156.png" alt="" width="553" height="51" />

<img src="./webapi _images/media/image157.png" alt="" width="553" height="329" />

## map-join渲染页面

<img src="./webapi _images/media/image158.png" alt="" width="553" height="291" />

<img src="./webapi _images/media/image159.png" alt="" width="553" height="458" />

<img src="./webapi _images/media/image160.png" alt="" width="553" height="60" />

# 正则表达式(简)

<img src="./webapi _images/media/image161.png" alt="" width="263" height="219" />

<img src="./webapi _images/media/image162.png" alt="" width="397" height="152" />

<img src="./webapi _images/media/image163.png" alt="" width="553" height="24" />

<img src="./webapi _images/media/image164.png" alt="" width="403" height="169" />

<img src="./webapi _images/media/image165.png" alt="" width="631" height="173" />

## 元字符

<img src="./webapi _images/media/image166.png" alt="" width="553" height="111" />

### 边界符

<img src="./webapi _images/media/image167.png" alt="" width="553" height="169" />

<img src="./webapi _images/media/image168.png" alt="" width="435" height="36" />

<img src="./webapi _images/media/image169.png" alt="" width="553" height="324" />

### 量词

<img src="./webapi _images/media/image170.png" alt="" width="572" height="449" />

<img src="./webapi _images/media/image171.png" alt="" width="550" height="36" />

<img src="./webapi _images/media/image172.png" alt="" width="553" height="40" />

### 字符类

<img src="./webapi _images/media/image173.png" alt="" width="553" height="271" />

<img src="./webapi _images/media/image174.png" alt="" width="553" height="332" />

<img src="./webapi _images/media/image175.png" alt="" width="387" height="155" />

<img src="./webapi _images/media/image176.png" alt="" width="373" height="41" />

<img src="./webapi _images/media/image177.png" alt="" width="458" height="333" />

<img src="./webapi _images/media/image178.png" alt="" width="651" height="397" />

<img src="./webapi _images/media/image179.png" alt="" width="553" height="167" />
