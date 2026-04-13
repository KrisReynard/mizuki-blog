---
title: "Vue2"
published: 2026-04-05
updated: 2026-04-12
description: "这给我干哪来了，这还是前端吗"
tags: ["Vue", "学习笔记"]
category: "学习笔记"
image: "/images/covers/Vue.jpeg"
draft: false
---

# 初识Vue

el：选定元素，可以用css选择器，也可以直接使用dom对象

data()：解析vue模板时所需的数据，是vue管理的函数/对象

method：保存vue管理的各种函数的对象

<img src="/images/vue2_images/media/image1.png" alt="" width="456" height="331" />

如果有多个容器绑定了一个vue对象，vue对象只会绑定从上往下第一个容器

如果一个容器绑定多个vue对象，则只有第一个vue对象会被绑定

如果vue对象的data内有相同的属性名，则以最后的属性名来修改容器内的值

可以把data内数据设置成多级对象的结构来避免混淆：

<img src="/images/vue2_images/media/image2.png" alt="" width="290" height="195" />

## 一些特殊的东西

## debugger：在程序运行时代替断点，用于调试

<img src="/images/vue2_images/media/image3.png" alt="" width="328" height="281" />

## template标签：能够作为模版的标签，但本身不会被渲染到页面上

<img src="/images/vue2_images/media/image4.png" alt="" width="491" height="216" />

## 中转变量：在非data的配置项内使用this.xxx可快速设置全局变量

## 添加变量：使用\$set

由于直接编辑对象里的变量值可能不会引起vue重新渲染，在添加变量值时最好不要使用直接赋值

<img src="/images/vue2_images/media/image5.png" alt="" width="199" height="93" />错误写法，没有getter/setter

应写成如下形式:

<img src="/images/vue2_images/media/image6.png" alt="" width="290" height="89" />自动生成getter/setter

在使用过一次\$set之后，就可以按之前那样的直接赋值的写法去编辑变量了，没有必要再次重新\$set

## 延迟解析：\$nextTick

像窗口聚焦失焦这类事件，需要在窗口出现后才有效。而由于有时窗口聚焦失焦的事件回调是跟编辑窗口是否出现写在同一函数内的，而Vue解析时会等待函数完全执行完再重新解析，可能会导致这些事件失效，因此需要使用定时器或者\$nextTick

<img src="/images/vue2_images/media/image7.png" alt="" width="553" height="79" />

<img src="/images/vue2_images/media/image8.png" alt="" width="543" height="368" />

## 更新数据时防止属性丢失

<img src="/images/vue2_images/media/image9.png" alt="" width="553" height="180" />

{...this.info,
...dataObj}的写法，意为以dataobj的所有存在的值去给info所有属性赋值，从而合并对象，不存在于dataobj的值以info存在的值作为默认值

对象内属性的顺序是可以乱的，但最好按顺序修改

# 模板语法

插值语法（双大括号表达式）与指令语法（v-开头）

<img src="/images/vue2_images/media/image10.png" alt="" width="553" height="165" />

只有v-bind：可以简写为冒号：

<img src="/images/vue2_images/media/image11.png" alt="" width="636" height="531" />

## serve与build

vue serve指令是用来运行测试项目的，而在发布项目时要进行打包发布，使用vue
build把vue文件转成原生html文件，会生成在dist文件夹。并且生成的文件必须在部署服务器后才能正常显示页面

# 数据绑定

<img src="/images/vue2_images/media/image12.png" alt="" width="553" height="104" />

<img src="/images/vue2_images/media/image13.png" alt="" width="553" height="254" />

## 单向数据绑定：v-bind：xxx/：xxx

vue对象单向绑定容器的值，在vue插件的分支内修改vue对象会直接影响到容器，而容器内数据不影响vue对象的数据

单向绑定可以绑定大部分容器

## 双向数据绑定(可实时检测数据值)：v-model: value = / v-model =

vue对象与容器双向绑定，无论修改哪个都会修改到另一个的值。

如果修改容器，则会同步修改vue对象的值，**若这个值还单向绑定了其他地方，则其他单向绑定的表达式也会同步变化**

**v-model只能绑定表单元素的输入类元素（含value）,并且可以简写为v-model属性，因为默认绑定了value**

# el与data的两种写法

<img src="/images/vue2_images/media/image14.png" alt="" width="553" height="162" />

## el创建时挂载与创建后挂载（哪种都可）

<img src="/images/vue2_images/media/image15.png" alt="" width="453" height="329" />

以\$开头的属性是供用户自行使用的，剩下的是vue使用的

\$mount属性来自v的对象原型（可以通过\_\_proto\_\_属性查看）

## data的对象式写法与函数式写法（建议只用普通函数式）

<img src="/images/vue2_images/media/image16.png" alt="" width="553" height="416" />

使用函数时，vue实例对象会调用这个函数并返回给data，若使用箭头函数则没法找到这个vue实例，因此建议用普通函数

data的写法进一步简化如下：

<img src="/images/vue2_images/media/image17.png" alt="" width="553" height="183" />

# MVVM架构模型

<img src="/images/vue2_images/media/image18.png" alt="" width="553" height="140" />

<img src="/images/vue2_images/media/image19.png" alt="" width="437" height="370" />

<img src="/images/vue2_images/media/image20.png" alt="" width="363" height="342" />

因此一般用vm表示vue实例

Model（data）里的数据会被代理到vue实例对象（vm）身上，而容器（View，或称视图）可以看到vue实例对象的所有属性，包括\_\_proto\_\_等被嵌套的对象的属性

在容器内使用这些属性时不需要再写vm.前缀，会自动调用

嵌套的对象的属性也不需要前缀（如\_\_proto\_\_里的\$emit函数）

<img src="/images/vue2_images/media/image21.png" alt="" width="477" height="217" />

# Object . defineProperty( obj, property, descriptor )

<img src="/images/vue2_images/media/image22.png" alt="" width="619" height="39" />

<img src="/images/vue2_images/media/image23.png" alt="" width="315" height="100" />

<img src="/images/vue2_images/media/image24.png" alt="" width="387" height="28" />

使用该函数**只定义value的话，则不可被枚举、修改、删除和配置**

## 数据描述符

<img src="/images/vue2_images/media/image25.png" alt="" width="553" height="38" />

<img src="/images/vue2_images/media/image26.png" alt="" width="209" height="146" />此处意为不能包含get/set

<img src="/images/vue2_images/media/image27.png" alt="" width="360" height="291" />

## 存取描述符

<img src="/images/vue2_images/media/image28.png" alt="" width="553" height="43" />

<img src="/images/vue2_images/media/image29.png" alt="" width="233" height="144" />

getter在读取属性值时自动触发，且返回属性值

setter在设置属性值时自动触发，且能获得设置的属性值(无需返回)

(注：闭包特性，内部域可以修改外部域变量的值并造成实质变化)

<img src="/images/vue2_images/media/image30.png" alt="" width="389" height="475" />

<img src="/images/vue2_images/media/image31.png" alt="" width="502" height="103" />

## 两种描述符的区别及注意事项

<img src="/images/vue2_images/media/image32.png" alt="" width="553" height="221" />

<img src="/images/vue2_images/media/image33.png" alt="" width="475" height="385" />

<img src="/images/vue2_images/media/image34.png" alt="" width="553" height="401" />

注：enumerable和configurable在两种修饰符情况下都能使用

<img src="/images/vue2_images/media/image35.png" alt="" width="267" height="248" />

## 案例：如何令内部属性与外部属性同步

<img src="/images/vue2_images/media/image36.png" alt="" width="553" height="335" />

如果直**接在person里赋值age:number，则number的修改与age无关**；而如果用getter给person的age赋值，则每一次读取person.age时会自动调用函数，读取number的值并返回

如果修改时触发的setter不修改number的值，则**修改age后再读取时仍会读取到原本的number值**，修改不成功；需要在setter里把getter返回时指向的变量改掉

# 数据代理

<img src="/images/vue2_images/media/image37.png" alt="" width="553" height="299" />

如图，只需通过defineProperty函数在obj2设置getter和setter，并分别关联到obj.x即可实现最简单的代理

<img src="/images/vue2_images/media/image38.png" alt="" width="269" height="161" />

## vm实现的数据代理

<img src="/images/vue2_images/media/image39.png" alt="" width="553" height="183" />

<img src="/images/vue2_images/media/image40.png" alt="" width="553" height="413" />

vm首先将data进行数据劫持并绑定到自身，将其名称改为_data，随后将其内部的属性(vue.\_data.name)与外部属性(vue.name)进行双向数据代理，因此在容器内使用vue语法时无需添加_data前缀。因此容器内{{\_data.name}}与{{name}}是都能使用的

# 函数methods

<img src="/images/vue2_images/media/image41.png" alt="" width="223" height="338" />

methods与data同级，并且也**会被挂载在vm身上**

methods内的函数**不能用对象式进行配置**，因此也不存在默认调用等功能

总而言之，methods只用于**保管函数数据**供vue使用。类似data

# 事件处理v-on:事件名=’函数’/@:事件名=’函数’

**v-on:click可简写为@click**

通过v-on:click=‘函数(括号可不加)’挂在与vm相关联的容器内的元素标签里，可以令vm检测鼠标点击事件并执行回调函数

该**回调函数必须写在该vm内,作为属性methods的值**，并且**有一个参数event表示事件对象**（在容器内设置参数会导致事件对象丢失，这时可以添加一个**\$event**参数来重新添加事件对象）

methods内配置的**函数包含的this指针由vm配置为指向vm本身**，因此methods内配置的函数想使用data数据时只需直接使用this.name。**函数会被vm挂载在自己身上**

**如果函数只执行简单的语句，可以直接写在标签里。如下**

<img src="/images/vue2_images/media/image42.png" alt="" width="553" height="29" />

此时也不再需要this指针，并且语句之间必须使用分号隔开

而由于vm只会在自身上寻找对象，不能使用太复杂的语句（如要使用window自带的函数，则必须把window写进data，太麻烦）

<img src="/images/vue2_images/media/image43.png" alt="" width="488" height="99" />

<img src="/images/vue2_images/media/image44.png" alt="" width="492" height="469" />

## 事件修饰符

<img src="/images/vue2_images/media/image45.png" alt="" width="553" height="163" />

若要**阻止默认行为**，本应在事件函数内添加**e.preventDefault**，但可以用@click.prevent=’showinfo’的形式实现相同效果，此处的**.prevent**就是事件修饰符

同理，**阻止事件冒泡**，本应用**e.stopPropagation**,此处可用**.stop**

次此外常用的还有**只触发一次事件，用.once**

.capture令事件在**捕获阶段**而不是冒泡阶段被处理

（捕获触发的层级顺序与冒泡相反）

.self使event.target是当前操作的元素时才触发事件(也阻止冒泡)

.passive立刻执行事件的默认行为，无需等待事件回调执行完毕

例如wheel事件会检测鼠标滚轮，此时若还有页面滚动条的默认事件要执行(页面往下滚动)，则触发了滚轮之后不会立刻执行，而是先执行wheel绑定的回调函数，回调函数完成后再执行默认事件

**事件修饰符可以连着写，如@click.prevent.stop=”func”(有先后)**

<img src="/images/vue2_images/media/image46.png" alt="" width="553" height="337" />

## 键盘按键keyup.enter / keydown.enter

正常情况下，需要判断回车事件时得自己写函数，用事件对象的keyCode去判断是否为回车键才继续执行程序

<img src="/images/vue2_images/media/image47.png" alt="" width="553" height="19" />

<img src="/images/vue2_images/media/image48.png" alt="" width="277" height="244" />

而vue内可以用事件修饰符.enter来简便地进行判断

<img src="/images/vue2_images/media/image49.png" alt="" width="553" height="21" />

形如“CapsLock”这种两个单词的，使用“caps-lock”的方式命名

<img src="/images/vue2_images/media/image50.png" alt="" width="553" height="17" />

如果需要组合键，特别是对于系统修饰键，可以通过连续修饰来检测。如@keyup.ctrl.y

<img src="/images/vue2_images/media/image51.png" alt="" width="553" height="321" />

# 计算属性computed

## 使用插值语法实现需求（复杂）

<img src="/images/vue2_images/media/image52.png" alt="" width="553" height="119" />

## 使用函数实现同样的需求（相对简洁）

data的每次变化都会引起vm对容器的实时更新，更新的时候若**检测到函数则直接会重新调用一次**。因此可以在绑定容器的标签内调用一个函数并返回一个值，来用函数进行值的计算

<img src="/images/vue2_images/media/image53.png" alt="" width="461" height="37" />

<img src="/images/vue2_images/media/image54.png" alt="" width="553" height="112" />

## 计算属性的写法（更好的办法）

在vm内，data用来保存属性，而**computed才用来保存计算属性**。

computed里存放的**计算属性以对象形式存在**，且**必须包含一个getter**用于在被读取时返回计算属性的值

与data类似，computed里的计算属性会被vm计算后直接挂载到vm身上，可以省略vm.去使用，如{{fullname}}。但**vm身上的vm是计算好的值，而不是对象，更没有get方法**

**getter里的this指向被vm设置成了vm自己本身**，可以避免繁琐的跨域访问，直接return
this. name。也因此**不能使用箭头函数**

调用计算属性的getter之后**vm会进行缓存**，因此**容器内多次使用同一个计算属性只会在初次读取时调用一次getter**。而为了防止缓存引发数据滞后，**在所依赖的数据（数据必须在vm内）发生变化时vm也会再调用一次getter**

<img src="/images/vue2_images/media/image55.png" alt="" width="317" height="29" />

<img src="/images/vue2_images/media/image56.png" alt="" width="553" height="272" />

setter不是必须项，**但是若计算属性会被修改，则必须添加setter**

同样，要实现双向同步，**setter里面要修改getter返回值的来源数据**

而且虽然vm身上fullname变化了，但是data和getter的数据源没变化，容器包括里面的fullname并不会被更新

<img src="/images/vue2_images/media/image57.png" alt="" width="451" height="219" />

<img src="/images/vue2_images/media/image58.png" alt="" width="553" height="164" />

## 计算属性的简写（只读的情况，不包含setter）

不需要在把计算属性写成配置对象形式，只需要写成函数，且默认会作为getter。注意使用时不加括号，仍为{{fullname}}

<img src="/images/vue2_images/media/image59.png" alt="" width="553" height="150" />

### 开发者工具的坑

如果页面没有用到数据，但是有修改数据的操作，则开发者工具不会正常显示数据被修改，但是数据实际上已经被修改了。

# 监视属性watch

<img src="/images/vue2_images/media/image60.png" alt="" width="553" height="158" />

<img src="/images/vue2_images/media/image61.png" alt="" width="553" height="135" />

注：计算属性也可以被监视

属性可选配置项：deep、immediate

## watch属性

<img src="/images/vue2_images/media/image62.png" alt="" width="553" height="207" />

需要监视的属性以对象形式保存，其中包含一个handler函数，这个函数有两个可选参数，分别表示新值和旧值

**还有一个可选的属性immediate，用于控制是否立刻执行一次**<img src="/images/vue2_images/media/image63.png" alt="" width="238" height="71" />

如果被监视的属性不存在，**不会报错，因此必须要确认存在再监视**

## 在vm建立之后进行监视：vm.\$watch(‘被监视的属性’,配置对象)

注意**一定要加引号**，因为key/value的实际存在形式是字符串/数字

<img src="/images/vue2_images/media/image64.png" alt="" width="553" height="181" />

## 深度监视

如果numbers作key，data里的numbers里包含a、b两个属性，则**作为key的numbers的value值是包含a、b的结构体的地址值而与a和b的值无关，a和b的值变化不会被vue监视到**

监视多级结构中某个属性的变化，需要把被监视的属性从data下开始逐级定位，最后写成字符串形式作为watch的key（key本来就该有引号，只是平常可以简写成不带引号）

**vue中的watch默认不监视子级属性**

<img src="/images/vue2_images/media/image65.png" alt="" width="366" height="247" />

另一种办法，在被监视的对象里**添加配置项deep：true**，监视所有子属性的变化

<img src="/images/vue2_images/media/image66.png" alt="" width="372" height="183" />

## 监视的简写形式

如果不需要immediate和deep，可以直接把被监视的属性作为handler函数进行配置

<img src="/images/vue2_images/media/image67.png" alt="" width="553" height="113" />

如果是在vm外进行配置，则配置项改为传入一个回调函数作为参数

注意**不允许传入箭头函数**

<img src="/images/vue2_images/media/image68.png" alt="" width="553" height="83" />

其他情况：

<img src="/images/vue2_images/media/image69.png" alt="" width="188" height="26" />

<img src="/images/vue2_images/media/image70.png" alt="" width="320" height="265" />

# watch跟computed的区别

<img src="/images/vue2_images/media/image71.png" alt="" width="553" height="95" />

watch可以用于执行异步任务，而computed只能执行同步任务。而在执行同步任务时，watch还必须监视每一个可能会造成改变的因素造成写法上的繁琐，computed虽然无法异步但是写法简单。根据情况watch和computed各有优劣

<img src="/images/vue2_images/media/image72.png" alt="" width="553" height="468" />

如图，watch还需要自定义一个fullname在data里，并在配置监视时进行修改的函数

注意，此处**定时器函数setTimeout函数是vue管理的函数，而回调的无名函数不是**，因此**一定要用箭头函数**来使用定时器函数的this来指向vm对象，否则此处的this会指向window（因为回调函数是事件循环时window调用）

**被vue管理的函数要写成普通函数，不被管理的写成箭头函数**

# vue绑定样式

## 绑定class样式

### 字符串写法

<img src="/images/vue2_images/media/image73.png" alt="" width="553" height="97" />

正常的样式正常写，变化的样式用绑定的方式写(v-bind简写)

正常的多个class会只使用一个忽略其他，而绑定的会被合并

同样的，class名要出现在data里，修改class名即修改data

<img src="/images/vue2_images/media/image74.png" alt="" width="230" height="259" />

## 数组写法

<img src="/images/vue2_images/media/image75.png" alt="" width="553" height="46" />

如果使用数组名，则会一并显示数组内元素

<img src="/images/vue2_images/media/image76.png" alt="" width="553" height="40" />

<img src="/images/vue2_images/media/image77.png" alt="" width="433" height="41" />

若数组内元素为变量的情况“

<img src="/images/vue2_images/media/image78.png" alt="" width="553" height="38" /><img src="/images/vue2_images/media/image79.png" alt="" width="160" height="91" />”

在devtools里使用shift和push可以方便的进行修改class

<img src="/images/vue2_images/media/image80.png" alt="" width="328" height="219" />

## 对象写法

<img src="/images/vue2_images/media/image81.png" alt="" width="553" height="19" />

对于固定的类名，通过对象属性值为true/false进行切换是否应用

<img src="/images/vue2_images/media/image82.png" alt="" width="553" height="37" />

<img src="/images/vue2_images/media/image83.png" alt="" width="219" height="114" />

## 绑定style

### 对象写法

<img src="/images/vue2_images/media/image84.png" alt="" width="553" height="34" />

<img src="/images/vue2_images/media/image85.png" alt="" width="253" height="72" />

注意单位要用字符串拼接写

fontSize由css的font-size得来，注意写法

<img src="/images/vue2_images/media/image86.png" alt="" width="447" height="31" />

若key与val重名，可简写为这种写法

### 对象数组写法

<img src="/images/vue2_images/media/image87.png" alt="" width="553" height="31" />

<img src="/images/vue2_images/media/image88.png" alt="" width="271" height="162" />

# 条件渲染

<img src="/images/vue2_images/media/image89.png" alt="" width="553" height="285" />

切换频率高建议v-show，频率低建议v-if

## v-show:true/false

效果是给style添加display:none的样式，节点仍然存在

可以用v-show:“a”，通过修改a来调整显示情况

## v-if与v-else-if、v-else

**注意：**if、elseif与else之间不能被分割，否则后续失效

### v-if

v-if会直接删除整个节点，变为空注释

<img src="/images/vue2_images/media/image90.png" alt="" width="553" height="79" /><img src="/images/vue2_images/media/image91.png" alt="" width="184" height="79" />

<img src="/images/vue2_images/media/image92.png" alt="" width="388" height="83" />

如图可实现简单的切换

### v-else-if

<img src="/images/vue2_images/media/image93.png" alt="" width="415" height="127" />

v-else-if的逻辑与正常的else if完全相同，会跳过

### v-else

v-else的逻辑与正常的else完全相同，且无需表达式

<img src="/images/vue2_images/media/image94.png" alt="" width="342" height="105" />

### 使用template进行临时打包

<img src="/images/vue2_images/media/image95.png" alt="" width="236" height="119" />
<img src="/images/vue2_images/media/image96.png" alt="" width="185" height="78" />

template模版标签会在最终渲染的时候去除而只留下内容部分

template标签只能配合v-if，不能配合v-show

# 列表渲染：使用v-for

<img src="/images/vue2_images/media/image97.png" alt="" width="553" height="125" />

persons为数组或对象，p为元素，类似for i in range的写法

v-for应当与**:key**搭配使用，以唯一标识子元素(注意**冒号**动态绑定)

<img src="/images/vue2_images/media/image98.png" alt="" width="395" height="119" />

<img src="/images/vue2_images/media/image99.png" alt="" width="373" height="176" />

## 获取元素与索引的写法

括号可以去掉但不建议，in可换成of但也不建议

<img src="/images/vue2_images/media/image100.png" alt="" width="553" height="139" />

当使用对象的时候，两个值分别是值value和属性key

<img src="/images/vue2_images/media/image101.png" alt="" width="373" height="131" /><img src="/images/vue2_images/media/image102.png" alt="" width="167" height="129" />

字符串也算作对象或数组，因此也可以使用，但较少使用

<img src="/images/vue2_images/media/image103.png" alt="" width="553" height="35" />

<img src="/images/vue2_images/media/image104.png" alt="" width="219" height="33" />

遍历指定次数，较少使用。如下为从1遍历到5

<img src="/images/vue2_images/media/image105.png" alt="" width="508" height="119" />

## 遍历列表时key的作用与问题

<img src="/images/vue2_images/media/image106.png" alt="" width="580" height="368" />

vue在实现时先生成虚拟node再生成真实node，而用户在真实node上的操作不会被vue检测到

vue在实现真实node时使用对比算法，而遍历列表时vue使用key作为对比的标识。若key不同则直接生成，key相同则对比两者内容，只改变变化的部分，因此真实node上的修改会被保留

未使用key时，默认使用index作为key

<img src="/images/vue2_images/media/image107.png" alt="" width="553" height="308" />

index作为key时，若在列表头部插入节点，则对比时仅修改不同的部分，相同的部分会直接使用之前渲染的真实节点且造成大量渲染

<img src="/images/vue2_images/media/image108.png" alt="" width="553" height="313" />

使用唯一标识作key时，则头部被插入的节点不会因为key相同而进行对比保留。剩余节点在对比过后进行复用

# 列表过滤

利用indexOf和filter函数，结合监视/计算属性实现对数组的过滤

arr.indexOf(‘a’)返回字符a的索引，不包含则返回-1

arr.filter((p)=\>{

…

return 条件true时的表达式

})

对每个参数进行判断，返回过滤后的新数组，不更改原数组

<img src="/images/vue2_images/media/image109.png" alt="" width="553" height="203" />首先要使用v-model双向绑定搜索关键字

<img src="/images/vue2_images/media/image110.png" alt="" width="553" height="543" />

**注：**要实现搜索功能**一定不能更改原数组**

所有字符串**默认包含空字符**，且默认其索引为0

为了**使页面立刻渲染一次**，需要使用immediate:true，否则不渲染

## 用计算属性实现

<img src="/images/vue2_images/media/image111.png" alt="" width="553" height="485" />

由于watch是对keyWord进行监视因此传参传val即可，而computed要使用this指向keyWord来判断

外部的return为返回过滤后的filPerson，内部的return为filter的过滤条件

## 列表排序

用变量定义排序类型，再用arr.sort回调

<img src="/images/vue2_images/media/image112.png" alt="" width="553" height="285" />

# Vue监测数据的原理

<img src="/images/vue2_images/media/image113.png" alt="" width="553" height="347" />

如果在data里直接写getter和setter，则getter和setter返回时会引起无限递归的问题。vue的做法是创建构造函数observer，并使用defineProperty函数去在监视器内设置getter和setter，再用这个构造函数去构造一个修改过的data。并且vue通过递归实现了深度监视

如图为模拟表层监视data的方法，vue实现的是深度监视

<img src="/images/vue2_images/media/image114.png" alt="" width="293" height="323" />

## Vue.set / vm.\$set (target, key, val)

源代码内的undefined值会被vue解析为不输出

输出data内的对象的不存在的属性，不会报错并显示为无输出

在创建真实节点时，data内的数据会被vue自动设置响应式设计，而此时若手动添加数据到data，由于是在真实节点上添加新数据的操作，不会被vue检测到因而不会反馈到真实节点，也不会获得getter和setter。

Vue提供Vue.set()和vm.\$set()来实现实时设置响应式数据

由于数据代理，不需要写vm.\_data.student，写vm.student即可

注意**vm与_data都无法作为target**，

操作对象时，**key、val**都要**用字符串**

<img src="/images/vue2_images/media/image115.png" alt="" width="455" height="157" />

在如methods内应用时，应当使用this

<img src="/images/vue2_images/media/image116.png" alt="" width="553" height="182" />

## Vue监测数组

<img src="/images/vue2_images/media/image117.png" alt="" width="480" height="440" />

vue不直接监测数组，而通过监测修改数组的方法实现响应式

在vm身上的数据调用的这些数组方法是经过vue包装过的

push 末尾插入

pop 末尾删除

unshift 头部插入

shift 头部删除

splice 任意位置和长度替换

sort 排序

reverse 反转

**Vue.set可用于数组，key即为索引**

<img src="/images/vue2_images/media/image118.png" alt="" width="553" height="69" />

通过如unshift对数组插入对象数据时，对象里的属性也是响应式的

因此虽然直接修改数组元素不被vue监视，修改**对象类型的数组元素的值**却是能被监视到的

# 收集表单数据

<img src="/images/vue2_images/media/image119.png" alt="" width="553" height="193" />

<img src="/images/vue2_images/media/image120.png" alt="" width="553" height="398" />

单选框可以使用相同的name来配置单选，但value值应该不同

复选框的v-model默认收集ckecked，配置了value，并且v-model绑定数组才会收集value

input的type可以控制输入类型，而输入值要用如v-model.number控制

# 过滤器

<img src="/images/vue2_images/media/image121.png" alt="" width="553" height="157" />

<img src="/images/vue2_images/media/image122.png" alt="" width="553" height="623" />

<img src="/images/vue2_images/media/image123.png" alt="" width="553" height="119" />

过滤器函数保存在filters对象内，函数的形参即为val，前面的val为第一个形参，返回值为过滤之后用于使用的值

使用val丨fliter的格式来使用过滤器

也可使用val1丨fliter(val2)的格式使用过滤器，对应多个函数形参

也可使用val1丨fliter1丨fliter2来多次过滤

过滤器不改变原本值，返回过滤后的值

写在vm内使用filters，与data、methods平级时，为局部过滤器

<img src="/images/vue2_images/media/image124.png" alt="" width="553" height="116" />\
使用Vue.filter函数，传入过滤器名与回调函数来使全局过滤器

过滤器支持插值语法和v-bind，**不支持v-model**

# 指令

## 内置指令

### 常用的指令，指令使用方式在前面

<img src="/images/vue2_images/media/image125.png" alt="" width="553" height="248" />

### v-text 向其所在标签插入文本

<img src="/images/vue2_images/media/image126.png" alt="" width="553" height="71" />

<img src="/images/vue2_images/media/image127.png" alt="" width="360" height="81" />

v-text会替换掉整个标签内的文本，而且无法解析标签，会将所有内容当做字符串去解析

### v-html 支持结构解析的插入文本(存在安全性问题)

<img src="/images/vue2_images/media/image128.png" alt="" width="553" height="16" />

用如图方式使用v-html并在a标签的href内写JavaScript代码进行跳转到未知服务器并携带cookie会造成cookie外泄，除非cookie支持HttpOnly使该cookie只能被http协议解析

<img src="/images/vue2_images/media/image129.png" alt="" width="553" height="162" />

### v-cloak 会被vue加载时删除的无值属性

<img src="/images/vue2_images/media/image130.png" alt="" width="553" height="60" />

<img src="/images/vue2_images/media/image131.png" alt="" width="183" height="126" /><img src="/images/vue2_images/media/image132.png" alt="" width="644" height="76" />

### v-once 只渲染一次数据的无值属性

<img src="/images/vue2_images/media/image133.png" alt="" width="553" height="62" />

<img src="/images/vue2_images/media/image134.png" alt="" width="262" height="82" />

### v-pre 禁止vue解析该节点，提升静态节点的渲染速度

<img src="/images/vue2_images/media/image135.png" alt="" width="553" height="59" />

<img src="/images/vue2_images/media/image136.png" alt="" width="414" height="129" />

## 自定义指令 directives 

<img src="/images/vue2_images/media/image137.png" alt="" width="553" height="283" />

### 函数式配置

函数式配置指令时，指令函数接收的第一个元素element为指令所在的真实dom节点。第二个元素binding为由指令绑定的表达式相关的配置

**当指令与元素成功绑定时**会调用指令，**当指令所在的容器发生更新时**，会立刻调用一次

<img src="/images/vue2_images/media/image138.png" alt="" width="553" height="138" />

第二个元素的详细内容如上，其中expression为v-xx=之后的表达式，value则是表达式的值，name是指令的名称，rawName是用户实际使用时的名称

<img src="/images/vue2_images/media/image139.png" alt="" width="553" height="24" /><img src="/images/vue2_images/media/image140.png" alt="" width="553" height="363" />

### 对象式配置

由于函数式配置只会在指令绑定时、指令所在模版更新时调用函数，因此需要使用对象式配置来控制在元素被插入页面时调用函数

<img src="/images/vue2_images/media/image141.png" alt="" width="553" height="17" />

focus函数只有在元素存在时被调用才起作用，指令绑定时元素还未被创建因此用函数式配置无法默认调用focus

<img src="/images/vue2_images/media/image142.png" alt="" width="553" height="488" />

对象式配置内含有bind、inserted、update三个函数，函数式配置默认实现了bind和update函数的功能

### 注意事项

1.对指令进行命名时不能使用小驼峰式命名法，因为vue不区分指令名的大小写，对多单词的命名应该使用v-a-b去命名指令，而在配置指令时使用‘a-b’：function(){}或者‘-a-b’(){}

2.directions内的this一律指向windows而不是vm，需要的各种数据在函数的形参binding内有给出

3.指令分为全局指令和局部指令，

在vm内配置的局部指令只能在vm绑定的容器上起作用，用到的是vm.directive**s**配置对象；

在Vue上可以配置全局指令，用到的是Vue.directive【**此处没有s**】，接收的第一个参数是指令名，第二个参数是配置对象或者回调函数

# 生命周期

<img src="/images/vue2_images/media/image143.png" alt="" width="553" height="101" />

<img src="/images/vue2_images/media/image144.png" alt="" width="553" height="414" /><img src="/images/vue2_images/media/image145.png" alt="" width="553" height="153" />

生命周期函数与methods同级，且内部的this默认指向vm或组件实例，vue会在特定的时期执行这些函数

## 完整的生命周期

1.首先：new Vue，创建一个vm(此时vm已经存在)

**beforeCreate()：**

此时初始化生命周期、事件，但是未进行数据代理，**data和methods还未挂载到vm上因此无法访问**

**created()：**

此时数据监测、数据代理被初始化，**data和methods被挂载到vm，可以访问**

2.其次：判断vue是否绑定了el去挂载

如果没有：等待vm.\$mount(el)执行去绑定el

如果有：判断vm是否有template属性

如果有：将template属性内的东西交给渲染函数(template内必须拥有一个根标签作为容器)，这个函数在将来的mount阶段会**将整个el容器替换掉**

如果没有：**将el包括容器本身**当做template

**beforeMount()：**

Vue尚未将自身的内容进行编译和挂载，由于此处已经获取过页面的容器当做template，因此在**此时对dom的操作最终都不奏效**，会在之后的mounted阶段被vue替换掉

**mounted()：**

vue**创建为虚拟dom**，这份虚拟dom会被保留以进行对比算法，随后**创建真实dom，然后替换掉真实的el(vm.\$el)插入页面**。

**此时页面呈现的是经过vue编译的dom，对dom的操作均有效，一般进行初始化操作**如：开启定时器、发送网络请求、订阅消息、绑定自定义事件等

3.其次，当data发生变化时：

**beforeUpdate()：**

**此时vm的数据已经发生更新，但页面尚未与数据同步更新**

**updated()：**

根据新数据生成新的虚拟dom，与之前的虚拟dom作比较以更新真实dom(vm.\$el)，**完成了Model-\>View的更新**

此时页面是最新的

4.最后，当调用了vm.\$destroy()去销毁vm时

<img src="/images/vue2_images/media/image146.png" alt="" width="553" height="218" />

注：此处的指令指v-之类

此处的事件为自定义事件，click等原生事件不在此列

**beforeDestroy():**

此时vm内所有的data、methods、指令等均可获取(但指令不生效)，但是vue**不再进行数据监测**，**删除自定义事件监听器**(如click等原生事件不在此列)，因此**页面数据不会发生更新，一般进行收尾操作**如关闭定时器、取消订阅信息、解绑自定义事件等

注：vm被销毁后定时器仍然会存在，所以要手动关闭

**destroyed()**

<img src="/images/vue2_images/media/image147.png" alt="" width="552" height="711" />

如果使用template配置项，则template只能含有一个根标签且会把之前的root标签完全替换掉，且不能使用template标签作为根标签，不推荐

# 非单文件组件

## 基本使用 配置-注册-编写组件标签

<img src="/images/vue2_images/media/image148.png" alt="" width="553" height="246" />

基本步骤：配置-注册-编写组件标签

### 非单文件组件与单文件组件

<img src="/images/vue2_images/media/image149.png" alt="" width="553" height="234" />

### 使用Vue.extend(配置项)创建与配置组件，作为一个常量

<img src="/images/vue2_images/media/image150.png" alt="" width="553" height="421" />

配置项与new Vue时的配置项基本相同，都是对象，区别如下：

1.  不能含有el，应使用template配置项，需要注意只含一个根元素

2.  data使用对象式写法，避免data被全局修改。

每个组件每次使用data()都会返回一个新对象，因此每个组件内部对返回的新对象修改不会修改原data的数据，避免组件相互影响

### 在vm内配置components/使用Vue.component注册组件

1.在vm内配置component**s**局部注册组件

<img src="/images/vue2_images/media/image151.png" alt="" width="203" height="154" />
<img src="/images/vue2_images/media/image152.png" alt="" width="165" height="149" />

如果创建组件时使用的名字与要配置的key值相同，可用简写

2.使用Vue.component(‘组件名’，组件名)全局注册组件

<img src="/images/vue2_images/media/image153.png" alt="" width="408" height="175" />

### 在html上编写组件标签(并绑定容器)，使用组件

在vm绑定的容器内，用vm的配置项components的key作为标签的名字，编写组件标签

<img src="/images/vue2_images/media/image154.png" alt="" width="359" height="290" />

## 注意点

<img src="/images/vue2_images/media/image155.png" alt="" width="553" height="339" />

**组件名：**

1.  一个单词：全小写或开头大写

2.  多个单词：全小写、使用-隔开或者每个单词开头使用大写

使用短横连接时，在使用key时需要放在引号内

使用开头大写时，必须配合脚手架使用

在组件内配置name:’名称’可单独修改在开发者工具中的名字，同时应该避免使用HTML的元素名称，无论大小写

**组件标签写成单标签：**

必须在使用脚手架的情况下才能使用

**创建组件时简写：**

const s = {配置项}

省略Vue.extend()，但实际上在vm.component内发现组件名并使用时仍然会调用Vue.extend

## 组件嵌套

在创建组件时使用components配置项配置嵌套的内组件进行注册，使用时需要在组件的template里面写内组件标签进行使用

一般使用一个app组件用于集成子组件的功能

<img src="/images/vue2_images/media/image156.png" alt="" width="256" height="311" />

<img src="/images/vue2_images/media/image157.png" alt="" width="200" height="159" /><img src="/images/vue2_images/media/image158.png" alt="" width="167" height="74" />

也可以在vm内配置template替换容器

<img src="/images/vue2_images/media/image159.png" alt="" width="242" height="136" /><img src="/images/vue2_images/media/image160.png" alt="" width="256" height="122" />

## VueComponent构造函数

<img src="/images/vue2_images/media/image161.png" alt="" width="667" height="241" />

使用Vue.extend注册的每个组件都独自是一个构造函数，名为VueComponent，这个构造函数内的this指向构造函数的实例对象，每次使用组件标签时，Vue都会调用这个函数去new一个实例

在vm上创建组件时，VueComponent被挂载在vm.\$children里，同时被嵌套的组件也会被挂载在VueComponent的实例对象上

**组件是可复用的Vue实例，**vm与vc的大部分内容相同，但是vm可绑定容器，但vc必须在vm上使用

## 一个重要的内置关系：Vue对原型链的修改

VueComponent.prototype.\_\_proto\_\_===Vue.prototype，使得vc可以访问到Vue原型

<img src="/images/vue2_images/media/image162.png" alt="" width="553" height="41" />

每个实例对象的\_\_proto\_\_属性都指向其构造函数的原型对象，即其构造函数的prototype，而\_\_proto\_\_属性指向的原型对象里的\_\_proto\_\_则指向更早的原型对象，例如Vue的原型对象的\_\_proto\_\_指向Object的原型对象

**原型链：**

vc的\_\_proto\_\_ -\> VueComponent的原型对象

VueComponent的原型对象的\_\_proto\_\_ -\>
Vue的原型对象的\_\_proto\_\_（本应指向Object的原型对象，但是Vue修改了）

Vue的原型对象的\_\_proto\_\_ -\> Object的原型对象的\_\_proto\_\_

Object的原型对象的\_\_proto\_\_ -\> NULL

# 单文件组件 xxx.vue

## 命名

单名词：纯小写或首字母大写，一般选择首字母大写

多名词：短横-隔开或者每个单词首字母大写，一般选择每个单词首字母大写

## 基本结构

<img src="/images/vue2_images/media/image163.png" alt="" width="553" height="393" />

vue支持template、script、style标签，分别对应html、js、css，其中三种不同的标签对应的注释样式也不同

同时，由于需要由外部文件进行引入，所以需要使用export进行暴露，一般选择**默认暴露**

**如果下载了vetur插件，可以输入\<v和按下tab来快速生成**

<img src="/images/vue2_images/media/image164.png" alt="" width="553" height="563" />

### template标签的写法

template标签内必须含有根元素

### script标签的写法+暴露组件的写法

由于Vue.extend可以省略，采用默认暴露时使用如下形式：

<img src="/images/vue2_images/media/image165.png" alt="" width="311" height="387" />

### style标签的写法

与正常style标签相同，也可省略该标签(如果没有任何样式)

### ES6的三种暴露方式

分别暴露：

<img src="/images/vue2_images/media/image166.png" alt="" width="309" height="120" />

统一暴露：

<img src="/images/vue2_images/media/image167.png" alt="" width="300" height="178" />

默认暴露：

<img src="/images/vue2_images/media/image168.png" alt="" width="303" height="186" />

## 通过APP.vue集成所有组件

在template标签内使用组件名

<img src="/images/vue2_images/media/image169.png" alt="" width="299" height="185" />

在script标签内使用import引入组件，在components内注册

<img src="/images/vue2_images/media/image170.png" alt="" width="370" height="346" />

## 创建main.js入口文件和index.html通过app.vue来生成vm

index.html应该包含id为root的标签，

并且必须要引入vue.js和main.js，且要先引入vue

<img src="/images/vue2_images/media/image171.png" alt="" width="553" height="283" />

main.js内创建vm

<img src="/images/vue2_images/media/image172.png" alt="" width="304" height="143" />

如果不想在index内写app标签，可以增加templpate标签

<img src="/images/vue2_images/media/image173.png" alt="" width="306" height="182" />

**注：浏览器不能识别.vue文件，以上所有内容都要在脚手架里运行**

# Vue脚手架(CLI, command line interface)

## 创建与加载

<img src="/images/vue2_images/media/image174.png" alt="" width="420" height="305" />

<img src="/images/vue2_images/media/image175.png" alt="" width="553" height="146" />

##  一些文件的功能

index.html存档在public文件夹里，作为主页面和容器所在的页面

src文件夹存放脚本，App.vue、main.js直接存放在该目录下，子文件夹components存放其他子vue文件，assets存放图片等资源

App.vue集成了components里的vue文件

main.js作为入口文件，由脚手架引入，无需在index.html里引入

<img src="/images/vue2_images/media/image176.png" alt="" width="377" height="423" />

<img src="/images/vue2_images/media/image177.png" alt="" width="256" height="145" />

## render函数

vue脚手架默认引入的是缺乏模板解析器的vue，无法解析vm里的template模板，必须使用render函数

（.vue后缀文件里的template不受影响，有专用的解析器）

**render函数包含一个函数类型的参数createElement，**

**并且render函数必须有返回值**

<img src="/images/vue2_images/media/image178.png" alt="" width="544" height="119" />

<img src="/images/vue2_images/media/image179.png" alt="" width="553" height="31" />

createElement函数可以解析模板，返回模板后作为render的返回值渲染到页面上

**create函数的参数：**

渲染vue组件时，包含一个参数即可，即这个组件的名字

渲染html时要包含html标签和内容，且都必须加引号

## 关于不同版本的vue

<img src="/images/vue2_images/media/image180.png" alt="" width="553" height="119" />

## 脚手架的配置

vue隐藏了webpack配置项，可以通过指令输出output.js查看

红色框内容为使用默认配置时不可改动的部分

<img src="/images/vue2_images/media/image181.png" alt="" width="237" height="334" />

若要修改脚手架配置，则要在与package.json同级的默认目录下创建vue.config.js去配置，如果不修改配置则一定不能创建

<img src="/images/vue2_images/media/image182.png" alt="" width="596" height="66" />

## 通过ref进行调用vc上的真实dom元素

原生调用dom元素的方法是使用document.getElementsByXX函数,Vue中可以使用ref，通过对真实dom加上ref属性，在vc的\$refs里找到对应元素，

<img src="/images/vue2_images/media/image183.png" alt="" width="553" height="160" /><img src="/images/vue2_images/media/image184.png" alt="" width="553" height="196" />

ref的值对应\$refs里的key名，该名对应的值为真实dom

同理，可以在**组件标签**上添加ref，会返回组件标签

此方法避免了使用id属性，而**使用id无法获取组件标签，只能获取渲染后的最终标签**

<img src="/images/vue2_images/media/image185.png" alt="" width="553" height="108" />

## props配置项

<img src="/images/vue2_images/media/image186.png" alt="" width="553" height="425" />

props用于对外暴露数据，便于复用组件时进行数据修改

<img src="/images/vue2_images/media/image187.png" alt="" width="553" height="45" />

**注：必须加引号，且默认是Sring类型**

<img src="/images/vue2_images/media/image188.png" alt="" width="553" height="33" />

如果要传入数值，要使**用数据绑定**，即添加冒号

<img src="/images/vue2_images/media/image189.png" alt="" width="384" height="309" />

props接受的值是**无法修改**的（实际上Vue是浅监视），如果要使用可修改的数据，应当在data内利用props的数据配置一次

<img src="/images/vue2_images/media/image190.png" alt="" width="399" height="167" />

### props的对象式写法

props的对象式写可以配置**类型限制、默认限制 、必要限制**

如果不希望使用冒号进行数据绑定来设置数值类型，则要修改props的接收方式，使用对象写法并写明数据类型

<img src="/images/vue2_images/media/image191.png" alt="" width="182" height="165" />

对象式写法可以有其他配置项，如默认值、必要项等

<img src="/images/vue2_images/media/image192.png" alt="" width="553" height="516" />

## mixin混合/混入：多个组件共享一个配置 

<img src="/images/vue2_images/media/image193.png" alt="" width="553" height="339" />

共享的配置单独写在一个js文件内，并且要暴露出来，一般使用分别暴露，因为可以引入多个配置。

如果混合配置内的数据与原文件的配置有冲突，则根据类型决定：

data和methods等数据的冲突，以vue文件本身为主

生命周期钩子存在冲突，全部执行，且混合配置先执行

<img src="/images/vue2_images/media/image194.png" alt="" width="322" height="467" />

使用时，将其在.vue文件内import进去，引入的方式要对应暴露的方式，随后配置maxin**s**配置项，内容为配置组成的数组

<img src="/images/vue2_images/media/image195.png" alt="" width="391" height="363" />

### 全局混合

如果在main.js内引入了配置项并应用，则创建vm时会应用到所有vc上

<img src="/images/vue2_images/media/image196.png" alt="" width="553" height="528" />

## 插件

<img src="/images/vue2_images/media/image197.png" alt="" width="553" height="296" />

插件是一个对象，但必须包含一个install函数，一般写在plugins.js文件内，且必须暴露，一般使用默认暴露

install函数的**形参是Vue本身，因此可以进行很多修改**

install第二个以及之后的参数是插件使用者传递的数据，对应在Vue.use(plugins,
data1, data2, …)

在main.js内引入该文件并命名为plugins，用Vue.use(plugins)调用

可以重复使用Vue.use来开启多个插件

<img src="/images/vue2_images/media/image198.png" alt="" width="498" height="421" />

<img src="/images/vue2_images/media/image199.png" alt="" width="464" height="486" />

## scoped局部样式

<img src="/images/vue2_images/media/image200.png" alt="" width="526" height="123" />

在style标签上加上scoped属性，能使样式只在组件内局部生效

如果在app.vue里的style标签上写，则会全局生效

<img src="/images/vue2_images/media/image201.png" alt="" width="264" height="197" />

实际原理为给组件所在标签加上一个随机tag

<img src="/images/vue2_images/media/image202.png" alt="" width="553" height="45" />

在style标签上加上lang属性，可以设置标签内使用less等语言，但是要下载npm包和注意版本兼容性

<img src="/images/vue2_images/media/image203.png" alt="" width="446" height="182" />

## 组件化编码流程

<img src="/images/vue2_images/media/image204.png" alt="" width="493" height="305" />

<img src="/images/vue2_images/media/image205.png" alt="" width="607" height="527" />

1.  实现静态组件，将需求明确化，只关注结构和样式，拆分要合理

<img src="/images/vue2_images/media/image206.png" alt="" width="553" height="214" />

根据拆分的结构，搭建vue文件和完成引入、注册等动作

## 兄弟组件间的数据交流

由于只有父子组件可以使用props进行交流，兄弟组件的交流受限

### 将数据定义在共同的父级

<img src="/images/vue2_images/media/image207.png" alt="" width="553" height="343" />

props只能让父级传递给子级，因此Header得采用其他方式传递数据给父级

**在父级内定义函数，将函数交给子级。**

虽然传递的函数子级无法修改，但是可以调用，传递数据给父级

<img src="/images/vue2_images/media/image208.png" alt="" width="452" height="118" />

<img src="/images/vue2_images/media/image209.png" alt="" width="451" height="280" />

### v-model进行的双向数据绑定可以跨组件通信

对v-model的值在任意组件内的修改都可以在所有组件内观察到

<img src="/images/vue2_images/media/image210.png" alt="" width="553" height="27" />

若一个多选框类型的input标签上存在值为布尔类型的v-model属性，则该属性会代替checked去决定多选框的状态。因此在Item组件内使用v-model，当多选框状态变化时todo.done会发生变化，并且该变化可以在App组件内观察接收到。

**该方法本质上是直接修改了props内的值，不推荐**

**原理是vue对该处传递的props值仅使用了浅监视，检测不到内部**

# 组件自定义事件 this . \$emit(‘action’,传递的其他形参)

<img src="/images/vue2_images/media/image211.png" alt="" width="553" height="323" />

click、keyup等内置事件是相对html元素而言的，而组件自定义事件是相对组件而言的

事件被绑定在所触发组件的实例对象上，因此**自定义事件要在所触发组件内进行配置事件行为**

自定义事件是由子组件定义和触发，而由父组件去使用的

用this.\$destroy销毁后，自定义事件皆被销毁

**运行逻辑是，子组件使用父组给的事件名配置自定义事件，当子组件上的该事件被触发，父组件做出反应**

子：

<img src="/images/vue2_images/media/image212.png" alt="" width="553" height="32" />

<img src="/images/vue2_images/media/image213.png" alt="" width="553" height="199" />

父：

<img src="/images/vue2_images/media/image214.png" alt="" width="553" height="39" />

<img src="/images/vue2_images/media/image215.png" alt="" width="553" height="109" />

父组件回调函数的形参，与子组件emit函数的第二个形参是一致的

**通过该方式实现了子组件向父组件的数据传递**

## 在父组件内配置子组件的定义和触发

使用refs获得子实例，在子实例上使用on方法配置触发事件

此时第二个参数为父组件内触发之后执行的函数

<img src="/images/vue2_images/media/image216.png" alt="" width="314" height="35" />

<img src="/images/vue2_images/media/image217.png" alt="" width="553" height="76" />

<img src="/images/vue2_images/media/image213.png" alt="" width="423" height="152" />

仍需子组件配合使用\$emit设置函数的形参

getStudentName在App里写，则函数内的this指向App

getStudentName若在on()里写成**function()形式**的回调，则里面的this**指向Student**，因此要写成**箭头函数才会指向App**。谁触发了事件则指向谁

**注：Vue3废弃了\$on，\$on的作用是父组件给子组件标签绑定事件**

**也可以用once等触发方式**

## 解绑自定义事件this,\$off

this.\$off(‘事件名’) //解绑单个事件

this.\$off( \[‘事件名1’, ‘事件名2’\] ) //解绑多个事件

this.\$off() //解绑所有事件

## 组件绑定html原生事件

使用@click=‘’的形式会被解析成自定义事件

使用@click.native=’’的形式才可以解析成原生事件

除此之外，\$emit也可以绑定原生事件

## 全局事件总线：实现任意组件间通信

<img src="/images/vue2_images/media/image218.png" alt="" width="553" height="425" />

使用一个额外的X，独立于所有组件之外，A组件要与B组件通信时，在A组件内触发X的事件并传递参数，X组件执行B组件的回调并传递参数

为了让这个X**被所有组件可见**，需要将其**挂载在Vue.prototype上**

同时，为了让这个X拥有\$on、\$offh、\$emit方法，需要让X是一个vm或vc

### 使用VueComponent

<img src="/images/vue2_images/media/image219.png" alt="" width="421" height="142" />

由于Vue.extend方法创造的vc构造函数还没有实例对象，所以需要执行一次new，再挂载到Vue的prototype上

### 使用VM

在new Vue前设置X，则此时vm还未创建，

在new Vue后设置X，则此时vm已经执行完毕并销毁

因此必须在new Vue的内部去写X

<img src="/images/vue2_images/media/image220.png" alt="" width="553" height="232" />

## 组件的销毁要伴随事件的解绑：beforeDestroy

<img src="/images/vue2_images/media/image221.png" alt="" width="553" height="250" />

一定要在销毁前解绑该组件配置在bus身上的事件，

否则可能引起**周期函数持续执行**

**一定要传参，否则表示将全部事件解绑**

## 总结步骤

**在main.js内使用beforeCreate钩子**，可以在Vue创建但未完全加载的时候将X挂载到vue原型上，使其对其他组件可见，X命名为\$bus

语句：

Vue.**prototype**.\$bus = **this**

**在App.vue内使用mounted钩子**，进行事件的命名与绑定

this.\$bus.**\$on**('changeTodo',this.changeTodo)

**在App.vue内使用beforeDestroy钩子**，进行事件的解绑

this.\$bus.**\$off**('changeTodo')

## 消息订阅与发布：实现全局组件通信

A组件需要C组件的数据，则A组件向C组件订阅消息。A组件提供消息名，C组件依据消息名提供消息内容

使用第三方工具：

npm i pubsub-js

import pubsub from pubsub-js//pubsub是一个对象

//A的**mounted**内：

**this**.pubId = pubsub.**subscribe**(‘消息名’, ( msg, data )=\>{

//A订阅了名为XX的消息，当有人发布名为XX的消息时，执行该回调函数。

//该回调的两个参数，第一个为消息名，**第二个为数据**

//该方法返回一个pubId作为订阅的消息ID，用于解绑

//这个方法内的**this不受vue管控**，因此必须**写成箭头函数**。或者直接将这个参数从现写的函数改成**methods内配置的函数。**如果不需要第一个参数，随便写一个占位符

})

//A的**beforeDestroy**内：

pubsub.**unsubscribe**(pubId)//A销毁前解绑消息

//C的**mounted**内：

pubsub.**publish**(‘消息名’,data) // C发布消息

<img src="/images/vue2_images/media/image222.png" alt="" width="553" height="361" />

# 动画过渡效果

<img src="/images/vue2_images/media/image223.png" alt="" width="515" height="379" />

注：vue3的起点加上了from

## transition标签与动画的使用

具体的样式需要自己去写，但vue提供了方便使用样式的工具

将要使用动画的**单个标签**添加到\<transition\> \</transition\>内

<img src="/images/vue2_images/media/image224.png" alt="" width="428" height="92" />

在style标签里写**.v-enter-active .v-leave-active**两个样式

分别表示进入时激活的样式和退出时激活的样式

<img src="/images/vue2_images/media/image225.png" alt="" width="220" height="152" />

<img src="/images/vue2_images/media/image226.png" alt="" width="262" height="79" />

动画相关代码(自己编写)：

<img src="/images/vue2_images/media/image227.png" alt="" width="357" height="210" />

**值的变化是优先于动画的，值变化之后动画才变化**

### 自定义transition标签名

.v-enter-active 与.v-leave-active的v可被替换为transition标签的name值

<img src="/images/vue2_images/media/image228.png" alt="" width="508" height="105" />

<img src="/images/vue2_images/media/image229.png" alt="" width="553" height="233" />

## 默认播放动画

页面渲染完成时不会播放出现动画，需要配置appear属性为真

<img src="/images/vue2_images/media/image230.png" alt="" width="553" height="108" />

注意还要绑定成动态否则会报错，或使用如下形式

<img src="/images/vue2_images/media/image231.png" alt="" width="515" height="112" />

默认是真值，有该属性即可

## 不使用动画，使用过渡效果

.v-enter是进入起点，.v-enter-to是进入终点，离开相同

<img src="/images/vue2_images/media/image232.png" alt="" width="458" height="283" />

由于不使用动画，播放速度、是否匀速等要在其他地方配置

如图在h1的transition属性配置过渡效果

<img src="/images/vue2_images/media/image233.png" alt="" width="445" height="146" />

由于进入的起点=离开的终点，离开的起点=进入的终点，合并配置

动画相关配置可放在active内，该标签应用到全过程

<img src="/images/vue2_images/media/image234.png" alt="" width="553" height="481" />

## 多个元素过渡

要配置多个标签的动画，得使用transition-group标签，并且要配置不同的key值

优点是可以实现互斥效果，用一个div将两个标签包起来无法实现

<img src="/images/vue2_images/media/image235.png" alt="" width="553" height="123" />

## 使用第三方动画库

网站：animate.style

控制台：npm i animate.css

引入：import ‘animate.css’

配置name属性、enter-active-class和leave-active-class

<img src="/images/vue2_images/media/image236.png" alt="" width="553" height="280" />

# 配置代理

浏览器直接与服务器用ajax交互，会引起跨域问题。服务器确实收到并返回了数据，但是浏览器会报错拒绝访问，原因是端口号不一致，例如主机端口号可能是8080，服务器是5000

通过代理服务器解决该问题，代理服务器的端口号与主机一致，主机与代理服务器之间的交互不引起ajax跨域问题，而代理服务器与服务器的交互不使用XMLHttpRequest，而是基础Http协议，不会引起跨域问题

## 使用vue脚手架开启代理服务器

## 方式一

<img src="/images/vue2_images/media/image237.png" alt="" width="553" height="343" />

4000表示从主机转发的目标服务器端口号，自行配置

同时，前端代码的axios内要修改请求url为自己的主机端口号

<img src="/images/vue2_images/media/image238.png" alt="" width="553" height="293" />

### 方式一注意事项

当请求的资源是代理服务器自身拥有的，不转发直接返回，可能会造成资源的请求出现问题

同时，代理服务器只能向一个服务器转发，不能转发多个服务器

在vue脚手架内，资源的位置在public文件夹内，public为根目录

<img src="/images/vue2_images/media/image239.png" alt="" width="644" height="242" />

## 方式二

<img src="/images/vue2_images/media/image240.png" alt="" width="627" height="388" />

在proxy内配置多个属性，属性名为‘/api’，作为请求头

该方法配置的请求，主机发送请求时要添加‘/api’请求头，并且确实会被导航到/api的目录下

<img src="/images/vue2_images/media/image241.png" alt="" width="553" height="270" />

如果要避免导航到/api路径，要导航到根目录，需要配置pathRewrite属性，值为如上的对象

这个对象的内部，属性名为正则表达式，值为替换字，意为将匹配到的字符修改为值内的内容

上方的属性名意为‘将所有以/atguigu开头的字符串替换为空’

通过该方式实现了导航到根路径

ws属性表示启用websocket，changeOrigin表示是否修改请求来源，即后端请求的host。这两个值默认都为true启用，除了react内的changeOrigin默认不启用

<img src="/images/vue2_images/media/image242.png" alt="" width="553" height="427" />

要导航到多个服务器，只需要在proxy内配置多个‘/api’属性

<img src="/images/vue2_images/media/image243.png" alt="" width="553" height="461" />

## vue-resource插件

npm i vue-resource

import vueResource from ‘vue-resource’

Vue.use(vueResource)

用法与axios相同，将axios前缀改成this.\$http

# slot插槽

<img src="/images/vue2_images/media/image244.png" alt="" width="553" height="53" />

## 默认插槽

<img src="/images/vue2_images/media/image245.png" alt="" width="545" height="396" />

在组件标签内可以写标签，这个标签会被加载到组件的slot标签内

<img src="/images/vue2_images/media/image246.png" alt="" width="553" height="62" />

<img src="/images/vue2_images/media/image247.png" alt="" width="553" height="145" />

插槽内可以写默认值，当组件标签没有内容时会被加载

由于各组件需要的样式各不相同，可以统一写到app的style标签下，独自写在各组件内也可以

## 具名插槽

<img src="/images/vue2_images/media/image248.png" alt="" width="553" height="466" />

想要**使用多个插槽**，需要使用具名插槽，否则每个默认插槽都会被加载一次组件标签体的整个内容

给多个插槽**加上name属性**，在组件标签体内的**子标签加上slot属性，值为插槽的name，**以加载对应的内容

可以加载多个slot相同的标签，会一并加载

<img src="/images/vue2_images/media/image249.png" alt="" width="553" height="33" />

<img src="/images/vue2_images/media/image250.png" alt="" width="553" height="71" />

如果要将标签一并打包，并打上slot属性，不要用多余的div，要使用template标签，避免多余的标签

**只有使用template时可使用v-slot : value**

<img src="/images/vue2_images/media/image251.png" alt="" width="553" height="290" />注意v-slot:footer的footer没有打上双引号，不是字符串

## 作用域插槽

<img src="/images/vue2_images/media/image252.png" alt="" width="553" height="299" />

<img src="/images/vue2_images/media/image253.png" alt="" width="553" height="384" />

要从组件里获取数据并对组件进行自定义使用，需要用作用域插槽

类似于props，在设计子组件的时候把数据写在slot标签里

作用域插槽也可以有名字

<img src="/images/vue2_images/media/image254.png" alt="" width="553" height="38" />

<img src="/images/vue2_images/media/image255.png" alt="" width="553" height="135" />

使用时，必须增加template标签将结构打包，并增加scope属性

<img src="/images/vue2_images/media/image256.png" alt="" width="553" height="186" />

scope属性值的名字可以随意定义，该对象内部即为所需的数据集

同时，支持结构赋值将该对象解构，可以直接取数据

<img src="/images/vue2_images/media/image257.png" alt="" width="553" height="128" />

另一个写法：使用slot-scope(与直接使用scope相同)

<img src="/images/vue2_images/media/image258.png" alt="" width="553" height="127" />

# VueX

<img src="/images/vue2_images/media/image259.png" alt="" width="553" height="198" />

<img src="/images/vue2_images/media/image260.png" alt="" width="396" height="139" />

<img src="/images/vue2_images/media/image261.png" alt="" width="553" height="426" />

全局事件总线实现多组件共享数据可能会造成太复杂的交流，而且可能会导致脏读等情况

<img src="/images/vue2_images/media/image262.png" alt="" width="553" height="418" />

使用vuex，将共享的数据存到vuex，不共享的数据存在自身

<img src="/images/vue2_images/media/image263.png" alt="" width="452" height="344" />

状态即数据

<img src="/images/vue2_images/media/image264.png" alt="" width="553" height="383" />

组件使用dispatch函数说明要对数据执行的操作，dispatch函数被关联到action对象，在该对象上寻找操作名称对应的函数，然后执行该函数；

这个函数内部又包含一个commit函数，commit函数被关联到mutations对象，再次去这个对象上寻找操作名对应的函数，随之执行该函数，此时执行的函数才真正进行了提交修改，并且vue会自动再次渲染组件

actions的存在使得**对数据的操作可以被共享**，即可以**多个对象共同去决定如何执行**一个动作。例如让一个对象提供值，另一个对象决定动作，而不会因直接使用commit造成错误

**如果操作是规范的，可以在组件内直接调用commit**

store用于管理以上三个部分

## 下载与使用

<img src="/images/vue2_images/media/image265.png" alt="" width="223" height="156" /><img src="/images/vue2_images/media/image266.png" alt="" width="218" height="52" /><img src="/images/vue2_images/media/image267.png" alt="" width="442" height="94" />

**vuex可以在开发者工具内查看过程**

方法一：在src下创建vuex/store.js

<img src="/images/vue2_images/media/image268.png" alt="" width="174" height="177" />

方法二(官方推荐写法)：在src下创建store/index.js

<img src="/images/vue2_images/media/image269.png" alt="" width="179" height="177" />

<img src="/images/vue2_images/media/image270.png" alt="" width="376" height="553" />

使用时需import，如果不写清楚路径，默认引用index

<img src="/images/vue2_images/media/image271.png" alt="" width="396" height="39" />

<img src="/images/vue2_images/media/image272.png" alt="" width="377" height="251" />

由于vue脚手架会将所有import语句移动到文件头部运行，如果先引入store文件再执行new
vuex会引发错误，应当是先new再执行store文件，所以干脆在store文件内引入vue和vuex去创建实例

**组件调用dispatch**

<img src="/images/vue2_images/media/image273.png" alt="" width="546" height="115" />

**组件直接调用commit**

<img src="/images/vue2_images/media/image274.png" alt="" width="534" height="121" />

**配置action**

<img src="/images/vue2_images/media/image275.png" alt="" width="553" height="146" />

第一个参数为上下文对象，类似迷你版的store，拥有commit方法和dispatch方法、state对象

<img src="/images/vue2_images/media/image276.png" alt="" width="553" height="147" />

这个参数里存在的dispatch使得action拥有的函数可以相互调用，对一个动作分多个函数去执行

action里的函数可以直接修改state里的数据而不引起错误，但是无法被开发者工具捕获操作

**配置mutations**

mutations里的操作是原子操作，不会引发脏读

<img src="/images/vue2_images/media/image277.png" alt="" width="553" height="143" />

<img src="/images/vue2_images/media/image278.png" alt="" width="553" height="170" />

第一个参数为state对象，该对象会把你配置的state加上数据监测

**配置的state**

<img src="/images/vue2_images/media/image279.png" alt="" width="270" height="106" />

## getters配置项：实现计算属性

<img src="/images/vue2_images/media/image280.png" alt="" width="553" height="200" />

<img src="/images/vue2_images/media/image281.png" alt="" width="424" height="218" />记得配置

使用：不用state，用getters

<img src="/images/vue2_images/media/image282.png" alt="" width="553" height="62" />

## mapState与mapGetters

<img src="/images/vue2_images/media/image283.png" alt="" width="553" height="28" />

先引入这两个工具

<img src="/images/vue2_images/media/image284.png" alt="" width="553" height="388" />

重复写\$store.state.xxx稍显麻烦

从vuex上引入mapState实现数据映射，computed也能实现该功能

computed写法：

<img src="/images/vue2_images/media/image285.png" alt="" width="306" height="89" />

### mapState

对象写法：

<img src="/images/vue2_images/media/image286.png" alt="" width="553" height="26" />

在computed里使用该写法，可以直接展开所有数据

注意原state里的属性名到此处是字符串，因此不能简写

{a:a}可以简写成{a}，但是{a:“a”}无法简写

数组写法：

<img src="/images/vue2_images/media/image287.png" alt="" width="553" height="32" />

将原state里的属性名一律映射成相同的名字

### mapGetters

与mapState相同

<img src="/images/vue2_images/media/image288.png" alt="" width="478" height="46" />

<img src="/images/vue2_images/media/image289.png" alt="" width="382" height="42" />

## mapActions跟mapMutations

调用dispatch跟commit的时候也可以映射为简写

<img src="/images/vue2_images/media/image283.png" alt="" width="553" height="28" />

<img src="/images/vue2_images/media/image290.png" alt="" width="553" height="286" />

### mapMutations：帮使用commit的函数映射

<img src="/images/vue2_images/media/image291.png" alt="" width="397" height="110" />

**对象写法：**

在methods内：

<img src="/images/vue2_images/media/image292.png" alt="" width="553" height="44" />

注意绑定事件的函数要传参，否则传参会被默认成事件对象

会变成下面这种情况

<img src="/images/vue2_images/media/image293.png" alt="" width="478" height="130" />

正确的写法，加上了(n)

<img src="/images/vue2_images/media/image294.png" alt="" width="553" height="30" />

**数组写法：**

<img src="/images/vue2_images/media/image295.png" alt="" width="491" height="58" />

### mapActions 帮使用dispatch的函数映射

使用方法和问题同mutations

## Vuex的模块化编码+namespaced

<img src="/images/vue2_images/media/image296.png" alt="" width="417" height="631" />

<img src="/images/vue2_images/media/image297.png" alt="" width="553" height="487" />

共享的数据太多会造成维护混乱，使用模块化编码将共享的数据进行分类

**命名空间要设置为true，否则无法被mapState第一个参数识别**

<img src="/images/vue2_images/media/image298.png" alt="" width="233" height="311" /><img src="/images/vue2_images/media/image299.png" alt="" width="235" height="224" />

此时不能按照原来的方式配置store了，要改成在modules配置

<img src="/images/vue2_images/media/image300.png" alt="" width="468" height="214" />

### mapState/mapGetters的修改

State：

此时state里的属性不是直接的数据，而是modules里的属性和值

使用mapState时，映射的也是modules里的配置对象

如果要映射成具体数据，需要修改为如下配置

<img src="/images/vue2_images/media/image301.png" alt="" width="553" height="27" />

在前面增加一个参数即配置对象名

要使用这种配置，必须将配置对象内的命名空间配置为true

<img src="/images/vue2_images/media/image302.png" alt="" width="553" height="225" />

Getters：

getters同理，里面的属性不是直接的数据，但是是按照一定格式修改了属性名

<img src="/images/vue2_images/media/image303.png" alt="" width="545" height="199" />

直接使用时，要按照该格式去调用

由于无法在调用时直接使用/，改为使用数组式

<img src="/images/vue2_images/media/image304.png" alt="" width="553" height="72" />

使用mapGetters则与mapState类似：

<img src="/images/vue2_images/media/image305.png" alt="" width="553" height="37" />

### mapMutations/mapActions时的修改

由于store存在多个配置的mutations，mapMutations也发生变化

<img src="/images/vue2_images/media/image306.png" alt="" width="553" height="23" />

修改方式相似，需要配置命名空间和使用时添加配置对象名

mapActions：

<img src="/images/vue2_images/media/image307.png" alt="" width="553" height="25" />

### 直接调用commit时的修改

<img src="/images/vue2_images/media/image308.png" alt="" width="553" height="35" />

注意，与其他修改方式不同，这里是将参数修改为xxx/xxx的格式

类似于直接调用getters

### 直接调用dispatch时与actions交互时的修改

同上，要用XXX/XXX的格式

<img src="/images/vue2_images/media/image309.png" alt="" width="553" height="19" />

# 路由：管理单页面内部导航到多页面

<img src="/images/vue2_images/media/image310.png" alt="" width="617" height="127" />

<img src="/images/vue2_images/media/image311.png" alt="" width="241" height="44" />下载Vue2对应的版本3<img src="/images/vue2_images/media/image312.png" alt="" width="441" height="110" />

<img src="/images/vue2_images/media/image313.png" alt="" width="553" height="264" />

<img src="/images/vue2_images/media/image314.png" alt="" width="553" height="169" />

<img src="/images/vue2_images/media/image315.png" alt="" width="553" height="354" />

## 创建与使用

<img src="/images/vue2_images/media/image316.png" alt="" width="553" height="58" />

<img src="/images/vue2_images/media/image317.png" alt="" width="482" height="96" />

<img src="/images/vue2_images/media/image318.png" alt="" width="504" height="665" />

<img src="/images/vue2_images/media/image319.png" alt="" width="553" height="137" />

### 创建与配置文件

在src下创建文件夹router，创建index.js，类似store

<img src="/images/vue2_images/media/image320.png" alt="" width="359" height="130" />

<img src="/images/vue2_images/media/image321.png" alt="" width="553" height="616" />

需要引入组件、VueRouter插件

暴露时要new
VueRouter，配置项内的routes是对象数组，里面的每个路径对应一个组件

### 使用router-link替换a标签

用router-link标签替换a标签进行跳转，to属性替换href属性

<img src="/images/vue2_images/media/image322.png" alt="" width="553" height="132" />

router-link最终会转换成a标签，a标签的样式对router-link有效

使用active-class属性，可以在激活时自动使用属性值的样式

<img src="/images/vue2_images/media/image323.png" alt="" width="553" height="31" />

**router-link的replace属性**

replace将浏览器显示的当前页面，对页签最近的历史记录进行替换

<img src="/images/vue2_images/media/image324.png" alt="" width="553" height="20" />

<img src="/images/vue2_images/media/image325.png" alt="" width="553" height="110" />

### 使用router-view指定组件的显示位置

<img src="/images/vue2_images/media/image326.png" alt="" width="418" height="79" />

## 一些注意点

将路由组件放在pages文件夹下，一般组件放在components文件夹下

被切走的组件，底层上是已经被销毁了

路由组件多了两个属性：\$route（路由规则）和\$router（路由器）

<img src="/images/vue2_images/media/image327.png" alt="" width="243" height="254" />
<img src="/images/vue2_images/media/image328.png" alt="" width="553" height="284" />

注意：

路由器是唯一的，不同组件的router都相同，路由协议route不同

<img src="/images/vue2_images/media/image329.png" alt="" width="553" height="195" />

## 嵌套/多级路由

<img src="/images/vue2_images/media/image330.png" alt="" width="553" height="614" />

<img src="/images/vue2_images/media/image331.png" alt="" width="315" height="566" />

第一个配置项也叫一级路由

在第二个配置项内增加一个属性children，这是一个**对象数组**，里面的每一个对象是一个子路由配置，注意**子路由不加斜杠。**

**记得引入组件**

<img src="/images/vue2_images/media/image332.png" alt="" width="553" height="44" />

在进行匹配时，要把to值写成完整的路由路径/home/news

## 路由传参

为了避免太多嵌套，需要实现路由间参数的传递

### query参数 ?a=xxx&b=xxx

query参数，全称是查询参数，是网址（URL）中问号（?）后面携带的键值对信息，用于向服务器发送额外的请求数据。

<img src="/images/vue2_images/media/image333.png" alt="" width="592" height="399" />

<img src="/images/vue2_images/media/image334.png" alt="" width="290" height="278" />

父组件在使用子组件的时候，在配置路由路径(to属性)的时候传递query参数，子组件在\$route.query参数内可以查询到传递的参数

<img src="/images/vue2_images/media/image335.png" alt="" width="553" height="130" />

### to的字符串写法

<img src="/images/vue2_images/media/image336.png" alt="" width="553" height="27" />

使用动态绑定和模板字符串

### to的对象写法

<img src="/images/vue2_images/media/image337.png" alt="" width="472" height="331" />

仍然需要动态绑定，不同的是to的值是一个对象

包含两个值，path是路由路径，query是携带的参数集对象

在query内配置参数

## 命名路由

对于每个路由配置项目，可以加上name属性进行命名

命名路由可以简化编码，把对象写法的to的path改成name

<img src="/images/vue2_images/media/image338.png" alt="" width="315" height="335" />

## 路由\$route的params参数

params参数是斜杠加参数的形式，直接拼接在尾部，与多级路由的书写部分重叠，因此需要在配置路由时在路径path内声明占位

<img src="/images/vue2_images/media/image339.png" alt="" width="422" height="259" />

<img src="/images/vue2_images/media/image340.png" alt="" width="553" height="44" />

:id对应 666，:title对应 你好啊；自动转为params键值对

<img src="/images/vue2_images/media/image341.png" alt="" width="451" height="30" />

**注意：**

使用params参数时，标签配置to属性若使用对象式写法，**不能用path，必须用name
，且query属性要改成params属性**

<img src="/images/vue2_images/media/image342.png" alt="" width="299" height="337" />

## 路由\$route的props配置

组件在接受参数是重复写\$route.query.xx太麻烦，在配置路由时使用props，将键值对以props形式传递给组件，组件以props接受

<img src="/images/vue2_images/media/image343.png" alt="" width="553" height="360" />

### props的三种写法

<img src="/images/vue2_images/media/image344.png" alt="" width="465" height="476" />

第一种写法，值为对象，不常用，因为传递的是固定数据

第二种写法，值为布尔值，会把该路由组件的所有**params参数**以props的形式传递给组件

<img src="/images/vue2_images/media/image345.png" alt="" width="377" height="150" />

而组件的props仍然是数组，根据params的参数名决定字符串值

第三种写法，值为函数

<img src="/images/vue2_images/media/image346.png" alt="" width="518" height="133" />

该函数返回一个对象，参数是\$route，可以获取query和params

<img src="/images/vue2_images/media/image347.png" alt="" width="553" height="110" />

可以对参数连续解构赋值进行简写

<img src="/images/vue2_images/media/image348.png" alt="" width="402" height="109" />

## 编程式路由导航：复杂场景下代替router-link

<img src="/images/vue2_images/media/image349.png" alt="" width="553" height="535" />

router-link自动转为a，有时要使用其他元素，或需要延迟跳转等

跳转两种方式，一**种是push，一种是replace**，与router-link相同

router所需的**配置对象**与router-link的**to属性值相同**

可以传递给push方法或者replace方法

<img src="/images/vue2_images/media/image350.png" alt="" width="266" height="293" /><img src="/images/vue2_images/media/image351.png" alt="" width="265" height="292" />

注意，如果使用replace，不会留下历史记录，每次replace跳转都会把上一次的页面历史删除

### 通过router实现页面前进/后退

使用router的back和forward方法

<img src="/images/vue2_images/media/image352.png" alt="" width="266" height="200" />

使用go方法，传数字参数，正数前负数后，数字大小表示走几步

<img src="/images/vue2_images/media/image353.png" alt="" width="316" height="115" />

## 缓存路由组件：避免切换导致数据销毁

<img src="/images/vue2_images/media/image354.png" alt="" width="553" height="236" />

页签切换时组件被销毁，会导致数据丢失，但可以进行缓存

(在父组件内)寻找被销毁组件的router-view标签，在外面配置套上**keep-alive标签，并进行配置**

如果**不进行配置，则会阻止所有标签被销毁**

<img src="/images/vue2_images/media/image355.png" alt="" width="440" height="121" />

使用**include属性**进行配置，**值为组件名**，该组件不会被消耗

<img src="/images/vue2_images/media/image356.png" alt="" width="432" height="116" />

有多个组件，要进行**动态绑定**，因为**值为数组**

<img src="/images/vue2_images/media/image357.png" alt="" width="553" height="94" />

## 两个新的生命周期钩子activated、deactivated

<img src="/images/vue2_images/media/image358.png" alt="" width="553" height="184" />

由于进行缓存时，组件**不会进入destroy流程**从而被销毁，因此在切换之后**会出现定时器仍然在执行**的情况

使用activated钩子和deactivated钩子进行清除定时器回调的操作

<img src="/images/vue2_images/media/image359.png" alt="" width="553" height="400" />

在激活组件时激活定时器，在切换组件时销毁定时器

## 路由守卫：页面的条件跳转

在使用路由进行组件跳转时进行数据校验，判断是否进行跳转

在创建路由器时不能直接暴露，要先创建，再条件暴露

<img src="/images/vue2_images/media/image360.png" alt="" width="461" height="49" />

先在路由器上配置使用全局前置路由守卫，然后再暴露

全局前置路由守卫**beforeEach**函数接受一个**回调函数**，它在**初始化的时候**被调用、在**每次路由切换之前**被调用

回调函数包含三个参数：**to、from、next**

to、from都是对象，是源页面和目标页面的**路由协议**

next是一个函数，**在被调用时允许跳转**

<img src="/images/vue2_images/media/image361.png" alt="" width="607" height="317" />

**首先要判断目标路径是否为条件跳转，然后才进行条件跳转流程**

在配置好路由守卫之后，才能进行暴露路由器的操作

### 简化条件跳转

由于需要先进行一次判断，判断组件是否需要条件跳转，随后才进行条件判断，因此对此进行简化

让**每个组件的路由配置都加上一个标识**，表示**向/从**该组件的跳转是否需要进行条件判断

由于配置路由时使用的是配置对象，无法随意往路由器上挂载变量，**需要将自定义的标识添加到配置对象的meta属性内**

meta称作路由元信息

<img src="/images/vue2_images/media/image362.png" alt="" width="330" height="267" />

<img src="/images/vue2_images/media/image363.png" alt="" width="498" height="268" />

使用to.meta.isAuth**，判断目标组件的跳转是否需要进行条件判断**

### 全局后置路由守卫

与前置路由守卫的区别是，在每次切换之后被调用

全局后置路由守卫**afterEach**函数接受一个**回调函数**，它在**初始化的时候**被调用、在**每次路由切换之后**被调用

回调函数包含**两个**参数：**to、from**

由于是切换之后进行调用，所以不需要next

#### 通过全局后置路由守卫进行页面标题切换：

将标题信息加到meta属性里，传递给后置路由守卫

<img src="/images/vue2_images/media/image364.png" alt="" width="444" height="272" />

使用后置路由守卫更方便，相当于页面被切换后进行初始化操作

<img src="/images/vue2_images/media/image365.png" alt="" width="553" height="121" />

如果用前置路由守卫，会在判断流程里进行重复执行更换标题的指令，还会因为条件判断而书写混乱

<img src="/images/vue2_images/media/image366.png" alt="" width="553" height="337" />

### 独享路由守卫 beforeEnter

在某个路由的配置时，直接配置路由守卫，功能类似前置

独享路由守卫只有前置，没有后置，但与全局后置路由守卫不冲突

<img src="/images/vue2_images/media/image367.png" alt="" width="537" height="440" />

<img src="/images/vue2_images/media/image368.png" alt="" width="553" height="352" />

### 组件内路由守卫

beforeRouterEnter与beforeRouteLeave都**配置在组件内**，使用方式与钩子一致

beforeRouteEnter是在**通过路由规则进入**该组件时调用，类似前置

beforeRouteLeave是在**通过路由规则离开**该组件时调用，并非后置

不通过路由规则方式进入的都无法触发这两个方法

<img src="/images/vue2_images/media/image369.png" alt="" width="506" height="318" />

beforeRouteLeave与后置不同，回调的参数带next，可以进行条件判断，只有为真时可以离开该组件

<img src="/images/vue2_images/media/image370.png" alt="" width="553" height="163" />

## history模式与hash模式

<img src="/images/vue2_images/media/image371.png" alt="" width="553" height="349" />

\#即hash，#之后的所有部分不会作为路径的一部分传给服务器

<img src="/images/vue2_images/media/image372.png" alt="" width="483" height="116" />

要改成histroy模式，在路由器内添加mode属性，值为history

history模式下没有#标志，在**只有前端路由运行**的情况下可以正常运行，而如果刷新页面，则会向后端服务器发送请求，这时就**将所有部分都当成路径**发给了服务器，导致找不到资源

解决这个问题，需要后端进行正则匹配，或者使用插件

# Vue UI组件库

<img src="/images/vue2_images/media/image373.png" alt="" width="370" height="397" />

<img src="/images/vue2_images/media/image374.png" alt="" width="553" height="594" />

如果引入组件，可能会造成引入所有组件而造成了项目体积过大，必须按需引入，根据组件库的帮助文档进行引入

如下的例子使用了全局注册组件的办法，可以在注册时修改组件名称，从而在使用组件标签时不用默认的名字

<img src="/images/vue2_images/media/image375.png" alt="" width="553" height="458" />

样式的部分为自动分析：

<img src="/images/vue2_images/media/image376.png" alt="" width="419" height="376" />
