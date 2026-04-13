---
title: "Vue3"
published: 2026-04-05
updated: 2026-04-12
description: "组合式API"
tags: ["Vue", "学习笔记"]
category: "学习笔记"
image: "/images/covers/Vue.jpeg"
draft: false
---

# 创建Vue3

<img src="/images/vue3_images/media/image1.png" alt="" width="553" height="318" />

注意开发者工具要更新才能点亮

使用vite：

<img src="/images/vue3_images/media/image2.png" alt="" width="290" height="195" />

# 一些变化

# main.js的变化

不再使用引入并创建整个vm的方式，而是引入一个vue的方法

createApp创建一个应用实例，然后渲染这个实例

<img src="/images/vue3_images/media/image3.png" alt="" width="553" height="398" />

对应mount方法的还有一个相反的unmount方法

不兼容vue2的写法，也无法直接引入vue了

## template可以没有根标签

<img src="/images/vue3_images/media/image4.png" alt="" width="553" height="184" />

## 开发者工具应安装vue3

<img src="/images/vue3_images/media/image5.png" alt="" width="324" height="88" />

## vue2与vue3的响应式区别

<img src="/images/vue3_images/media/image6.png" alt="" width="553" height="279" />

vue2增删属性必须使用\$set和\$delete这两个api才能被响应

vue3通过reactive生成的对象直接增删属性是可以被响应的

<img src="/images/vue3_images/media/image7.png" alt="" width="240" height="273" />

<img src="/images/vue3_images/media/image8.png" alt="" width="365" height="40" />

删除使用delete关键字释放资源

# 常用Composition(组合式)API

## setup

<img src="/images/vue3_images/media/image9.png" alt="" width="553" height="334" />

setup是**值为函数**的新配置项，半取代了data与methods

(data内也可配置函数，但不具备响应式，必须配置在methods)

属性名冲突时，setup的**优先级高于data/methods**，并且**仅支持data/methods向setup单向访问，不应混用**

由于**setup是函数**，而配置**data/methods时是使用对象**，因此setup使用的不是key-val的形式，而是**直接在函数里面写数据**

由于**数据与函数都在同一作用域**，引用数据无需使用this.name

**同步组件内，setup不允许被async(异步函数)修饰**，因为返回值会被自动包装为promise。访问时得用.then，因而不是一个单独的对象

<img src="/images/vue3_images/media/image10.png" alt="" width="523" height="368" />

setup返回对象时，则类似data，属性方法都可以直接使用，但方法无法引起数据的响应式变化，除非数据使用ref函数

<img src="/images/vue3_images/media/image11.png" alt="" width="205" height="242" />

setup返回渲染函数时，会将整个页面替换掉，以渲染函数为主

要构造渲染函数，还需要引入h，设置返回值为h函数的返回值<img src="/images/vue3_images/media/image12.png" alt="" width="322" height="48" />

<img src="/images/vue3_images/media/image13.png" alt="" width="447" height="55" />

## ref函数

<img src="/images/vue3_images/media/image14.png" alt="" width="553" height="310" />

ref函数在使用时需要引入

<img src="/images/vue3_images/media/image15.png" alt="" width="350" height="47" />

原本在setup内的数据无法实现响应式，但调用ref函数可实现

在setup内通过ref函数配置数据：

<img src="/images/vue3_images/media/image16.png" alt="" width="336" height="84" />

本质上，调用ref后返回的**数据变成了RefImpl（引用实现）对象**

<img src="/images/vue3_images/media/image17.png" alt="" width="553" height="37" />

<img src="/images/vue3_images/media/image18.png" alt="" width="476" height="182" />

setup里的函数要实现响应式操作，得修改对象里的value属性值，从而触发getter和setter

<img src="/images/vue3_images/media/image19.png" alt="" width="331" height="159" />

vue在解析模板时会自动识别并读取value值，无需手动读取

<img src="/images/vue3_images/media/image20.png" alt="" width="341" height="84" />

### ref处理对象类型

ref将对象类型的数据处理成Proxy类型，作为RefLmpl的value

读取xx.valuie时，会返回该对象的Proxy形式，而不再包含value

因此读取对象内属性值的操作应为xx.value.xx

<img src="/images/vue3_images/media/image21.png" alt="" width="531" height="43" />

即便没有第二层，**多层的数据也能被监测到**并进行响应式变化，因为RefImpl只有处理基本数据类型才用getter/setter

## reactive函数

<img src="/images/vue3_images/media/image22.png" alt="" width="553" height="117" />

使用reactive函数仍然需要引入

<img src="/images/vue3_images/media/image23.png" alt="" width="513" height="123" />

reactive的使用方式与ref相同，都是直接传入需要响应的值

<img src="/images/vue3_images/media/image24.png" alt="" width="304" height="149" />

reactive将收到的值转为Proxy对象，使用时无需找value属性<img src="/images/vue3_images/media/image25.png" alt="" width="553" height="47" />

reactive也可以用于处理数组的响应式，并且可以深度响应

**为避免因使用ref而重复使用value，应该尽量将数据设置成对象，**并使用reactive生成Proxy对象数据，作为一个setup返回值内的一个属性

<img src="/images/vue3_images/media/image26.png" alt="" width="278" height="530" />

## Vue3的响应式原理

<img src="/images/vue3_images/media/image27.png" alt="" width="553" height="392" />

vue2的响应式只能捕获增删的时候

<img src="/images/vue3_images/media/image28.png" alt="" width="553" height="265" />

vue3实现响应式使用了window自带的Proxy方法

对代理对象的任何修改都会被proxy捕获到，完成对源数据的修改，从而再反馈给代理对象

使用Proxy的getter和setter,外加一个deleteProperty

getter的两个参数，第一个target是源对象，第二个propName是读取的属性名，读取时要避免引起递归

setter的三个参数，第一个target是源对象，第二个propName是修改的属性名，第三个是原属性值

deleteProperty的两个参数，第一个target是源对象，第二个propName是删除的属性名

<img src="/images/vue3_images/media/image29.png" alt="" width="553" height="335" />

vue底层不再使用Object.defineProperty，改为使用Reflect.defineProperty，因为Object的重复定义会引发错误并终端线程，而reflect仅返回是否正常运行结果，不影响后续代码执行

<img src="/images/vue3_images/media/image30.png" alt="" width="450" height="475" />

## reactive对比ref

<img src="/images/vue3_images/media/image31.png" alt="" width="553" height="351" />

在使用时，可以在setup内通过reactive定义一个data对象，然后将这个对象作为返回值，达成类似vue2的数据书写方式

## setup的两个注意点

<img src="/images/vue3_images/media/image32.png" alt="" width="553" height="224" />

## computed函数

setup内不再作为配置项去配置，而是一个函数，用法基本一致

<img src="/images/vue3_images/media/image33.png" alt="" width="448" height="444" />

仍需先引入

使用的时候传入参数有两个形式

**传入回调函数的时候是简写形式**，没有多余配置项，回调函数直接返回计算好的数值。并且此时的计算属性**是只读的**

可以直接在reactive代理对象上配置一个计算属性

<img src="/images/vue3_images/media/image34.png" alt="" width="553" height="130" />

传入对象的时候，包含getter和setter，可以读写

<img src="/images/vue3_images/media/image35.png" alt="" width="553" height="292" />

## watch函数

<img src="/images/vue3_images/media/image36.png" alt="" width="553" height="113" />

vue2配置方式仍然可用，depp也是可选项

vue3的watch是函数，第一个参数是要监视的数据，第二个参数是回调函数或者对象，第三个参数是配置项

情况一：

包含两个参数newval和oldval，

用于监视**ref定义的一个**响应式数据

<img src="/images/vue3_images/media/image37.png" alt="" width="435" height="109" />

情况二：

可以监视**ref所定义的多个**响应式数据

**watch的第一个参数变为数组**

回调函数的两个参数变为**多个newval和oldval组合的数组**

<img src="/images/vue3_images/media/image38.png" alt="" width="426" height="111" />

情况三：

监视reactive所定义的对象数据时，

**无法正确获得oldVal**，并且**强制开启了深度监视**

<img src="/images/vue3_images/media/image39.png" alt="" width="433" height="203" />

如图的deep:false其实是无效配置

情况四：

监视reactive所定义的**对象数据的某个属性**

此时**watch函数第一个参数变为回调函数，返回值为数据**

<img src="/images/vue3_images/media/image40.png" alt="" width="553" height="109" />

情况五：

监视reactive所定义的**对象数据的某些属性**

**watch函数的参数变为回调函数数组**

回调函数的参数变为newval和oldval的数组

<img src="/images/vue3_images/media/image41.png" alt="" width="553" height="91" />

情况六：

监视reactive所定义的**对象数据的某些对象属性**

虽然监视reactive对象的属性在参数形式时强制开启深度监视，但是在**监视reactive对象的对象属性时需要手动配置deep**才能深度监视

<img src="/images/vue3_images/media/image42.png" alt="" width="553" height="117" />

### watch时value的问题

监视ref时无需.value，因为.value之后会把数据取出来，变成监视一个固定值，因此直接监视整个ref实例对象即可，newval与oldval都是value值

如果监视的数据是对象，并且通过ref生成，则需要.value，此时传的是reactive定义的对象，并且会强制对其深度监视。或者不.value,但是自己手动配置deep

## watchEffect函数

<img src="/images/vue3_images/media/image43.png" alt="" width="553" height="268" />

watchEffect函数只有一个参数，参数为回调函数

这个回调函数内用到了哪个数据，则对哪个数据进行监视

<img src="/images/vue3_images/media/image44.png" alt="" width="553" height="160" />

# Vue3生命周期

Vue3去掉了判断是否有el的选项，而是在一开始就必须要有el

另外，beforeUnmount跟unmounted更名为beforeDestroy跟destryed，将销毁换成了卸载组件

vue3使用组合式api，使得生命周期钩子可以在setup里使用

<img src="/images/vue3_images/media/image45.png" alt="" width="661" height="24" />

使用组合式api的钩子时也需要引入

<img src="/images/vue3_images/media/image46.png" alt="" width="553" height="411" />

如果仍以vue2的形式配置钩子，则**setup的执行时机在beforeCreate之前**

如果在vue3中使用组合式api，则**setup就相当于beforeCreate与created两个钩子**

这些组合式api的钩子均为**函数形式**，**参数为回调函数**

如果vue3组合式api与vue2的钩子同时使用，则vue3的优先

<img src="/images/vue3_images/media/image47.png" alt="" width="275" height="259" />

## 自定义hook函数

<img src="/images/vue3_images/media/image48.png" alt="" width="553" height="100" />

### 实现捕获鼠标点击坐标

<img src="/images/vue3_images/media/image49.png" alt="" width="553" height="382" />

使用原来的方法，需要在组件内window上挂载监听并及时卸载

而且要把逻辑函数写在外部，挂载和卸载的时候都需要函数名

使用hook，将该部分代码移植到公共区

**在src目录下创建hooks文件夹**，**将该部分代码封装**到该文件夹下usePoints.js文件内

**将该实现的全部逻辑封装成函数，且返回数据，**将该函数暴露出去

**注意所使用的vue方法都需要重新引入**

vue在setup里写的的组合式api都与hook封装的函数类似

<img src="/images/vue3_images/media/image50.png" alt="" width="553" height="622" />

使用该函数时需要引入并调用

<img src="/images/vue3_images/media/image51.png" alt="" width="553" height="270" />

### vue2中的mixin

<img src="/images/vue3_images/media/image52.png" alt="" width="553" height="37" />

<img src="/images/vue3_images/media/image53.png" alt="" width="350" height="432" />

<img src="/images/vue3_images/media/image54.png" alt="" width="344" height="407" />

<img src="/images/vue3_images/media/image55.png" alt="" width="553" height="173" />

<img src="/images/vue3_images/media/image56.png" alt="" width="553" height="230" />

<img src="/images/vue3_images/media/image57.png" alt="" width="553" height="239" />

## toRef与toRefs

<img src="/images/vue3_images/media/image58.png" alt="" width="553" height="174" />

使用时需要引入

<img src="/images/vue3_images/media/image59.png" alt="" width="445" height="40" />

<img src="/images/vue3_images/media/image60.png" alt="" width="445" height="158" />

对name1的赋值不会引发任何响应式变化，实际上就是普通赋值

而name2使用toRef方法，将name2绑定到了person的name属性，**对name2的读写会引发person的name属性的响应式变化**

**如果使用ref而不是toRef，则name2与person不绑定，是新对象**

name2通过toRef函数成为了一个RefImpl对象，并引用了原数据

**通过该方法，可以将打包的数据逐个解包，且保留响应式变化**

**作为setup的返回值，**在返回时拆解person

<img src="/images/vue3_images/media/image61.png" alt="" width="553" height="168" />

### 使用toRefs批量处理

<img src="/images/vue3_images/media/image62.png" alt="" width="371" height="99" />

<img src="/images/vue3_images/media/image63.png" alt="" width="553" height="91" />

toRefs的批量处理会把所以对象的属性都转化成RefImpl，对于包含子对象的对象，也会正常将其变成Proxy对象

**使用...直接简写拆分所有属性**

<img src="/images/vue3_images/media/image64.png" alt="" width="447" height="205" />

# 其他Compisition API

注意：所有组合式api使用时都要引入

<img src="/images/vue3_images/media/image65.png" alt="" width="199" height="187" />

## shallowReactive与shallowRef：数据的浅层响应式

<img src="/images/vue3_images/media/image66.png" alt="" width="553" height="181" />

shallowReactive与reactive的区别在于**是否深层响应式**

shallowRef与ref的区别在于，**使用对象时**是否有响应式，因为不求助reactive，value值就是普通对象类型

## readonly与shallowReadonly：响应式数据转为(深/浅)只读

<img src="/images/vue3_images/media/image67.png" alt="" width="430" height="148" />

<img src="/images/vue3_images/media/image68.png" alt="" width="371" height="39" />

readonly默认是深只读，shallowReadonly只让第一层属性只读

ref数据没有深层，一般用浅只读

reactive数据有深层，一般用深只读

## toRaw与markRaw：把响应式对象转为原始普通对象

<img src="/images/vue3_images/media/image69.png" alt="" width="553" height="265" />

toRaw只能将reactive生成的响应式对象退回

<img src="/images/vue3_images/media/image70.png" alt="" width="350" height="34" />

markRaw：阻止对象变成响应式对象

应用：

reactive定义的对象是深层响应式的，并且在该对象上**追加属性的时候，会自动转为响应式属性**。如果**追加的数据不希望其被转为响应式**，则应使用markRaw(如第三方库、不可变数据)

<img src="/images/vue3_images/media/image71.png" alt="" width="486" height="146" />\
customRef：自定义ref
------------------------------------------------------------------------------

<img src="/images/vue3_images/media/image72.png" alt="" width="553" height="33" />

如：实现延迟响应式(防抖)

customRef是一个函数，**参数为回调函数，该回调必须返回对象**

**回调的参数有两个，track与trigger**

get里使用track()追踪响应式数据，

set里使用tigger()触发响应式数据的改变

**返回的对象必须包含两个函数：get()和set()**

get没有参数，由于作用域问题可以直接取得响应式的value，同时**需要使用track()实现对响应式数据的追踪**

set的参数为修改时，想要修改的新值。在set里可以把响应式的value直接进行修改，不会引发递归，但是此时getter未响应**，需要使用trigger触发一次重新解析**

<img src="/images/vue3_images/media/image73.png" alt="" width="649" height="333" />

如果需要延迟响应，只需要修改触发响应的逻辑

<img src="/images/vue3_images/media/image74.png" alt="" width="553" height="307" />

如果只设置定时器，而不在设置定时器之前清除旧的定时器，则会使得**新旧定时器堆积**在一起触发

## provide与inject：祖孙(跨级)通信

<img src="/images/vue3_images/media/image75.png" alt="" width="553" height="56" />

<img src="/images/vue3_images/media/image76.png" alt="" width="429" height="362" />

provide是一个函数，参数为属性和值(祖先组件)

<img src="/images/vue3_images/media/image77.png" alt="" width="553" height="29" />

inject是一个函数，参数为需要使用的属性(后代组件)

<img src="/images/vue3_images/media/image78.png" alt="" width="325" height="46" />

只要祖先组件进行provide，任何后代组件都可以进行inject

一般只有祖孙及其后代进行注入，父子不使用注入但其实能使用

<img src="/images/vue3_images/media/image79.png" alt="" width="343" height="241" />

## 响应式数据的判断

<img src="/images/vue3_images/media/image80.png" alt="" width="553" height="156" />

返回值均为布尔值

注意：readonly只改变是否只读，原数据是什么类型还是什么类型

## CompositionAPI的优势

optionsAPI的缺陷：

<img src="/images/vue3_images/media/image81.png" alt="" width="553" height="29" />

<img src="/images/vue3_images/media/image82.png" alt="" width="553" height="291" />

compositionAPI的优势：使用hook函数将代码聚合，降低耦合度

<img src="/images/vue3_images/media/image83.png" alt="" width="553" height="35" />

<img src="/images/vue3_images/media/image84.png" alt="" width="553" height="213" />

# 新的组件

## Fragment：代替组件根标签

<img src="/images/vue3_images/media/image85.png" alt="" width="553" height="161" />

## Teleport：组件html移动

<img src="/images/vue3_images/media/image86.png" alt="" width="553" height="208" />

teleport标签的作用是，将指定的html结构传送到指定的html标签内

<img src="/images/vue3_images/media/image87.png" alt="" width="299" height="265" />

如在设置弹窗时，弹窗显示时可能会将父组件撑开，而如果要将弹窗进行定位，可能需要层层去找父组件才能进行定位

<img src="/images/vue3_images/media/image88.png" alt="" width="553" height="234" />

<img src="/images/vue3_images/media/image89.png" alt="" width="288" height="256" />

使用teleport标签可将弹窗移动到指定标签内，此处放在body内

## Suspense(目前处在试验阶段)

<img src="/images/vue3_images/media/image90.png" alt="" width="566" height="46" />

### 异步组件

如果都是用同步组件，则嵌套的组件的加载速度是以速度最慢的为准，容易造成一起堵塞

<img src="/images/vue3_images/media/image91.png" alt="" width="553" height="39" />

正常的引入组件，是同步组件

<img src="/images/vue3_images/media/image92.png" alt="" width="553" height="40" />

引入异步组件，需要先从vue引入定义异步的函数，再引入组件

该函数的参数是一个回调，回调的返回值是import函数，参数是引入的组件的位置

### Suspense实现未加载时的显示

将组件套在Suspense标签内，内部包含多个template标签

在template标签上添加v-slot属性(注意使用的是**冒号**)，

默认的slot包含加载的原标签，当该标签未被加载出来时，使用slot为fallback的标签代替原本的标签

<img src="/images/vue3_images/media/image93.png" alt="" width="274" height="196" />

### 异步组件内setup可返回promise

<img src="/images/vue3_images/media/image94.png" alt="" width="515" height="372" />

如果引入异步组件，可以通过返回一个promise的方式，主动实现组件的延迟加载(本质上是延迟了setup的返回，延长钩子周期)

# Vue3中其他改变

## 全局API的转移

<img src="/images/vue3_images/media/image95.png" alt="" width="307" height="32" />

<img src="/images/vue3_images/media/image96.png" alt="" width="553" height="254" />

<img src="/images/vue3_images/media/image97.png" alt="" width="380" height="57" />

<img src="/images/vue3_images/media/image98.png" alt="" width="553" height="303" />

### 其他改变

<img src="/images/vue3_images/media/image99.png" alt="" width="250" height="71" />

<img src="/images/vue3_images/media/image100.png" alt="" width="159" height="266" /><img src="/images/vue3_images/media/image101.png" alt="" width="145" height="263" />

<img src="/images/vue3_images/media/image102.png" alt="" width="553" height="87" />

native用于声明原生事件，改为在子组件声明自定义事件

<img src="/images/vue3_images/media/image103.png" alt="" width="385" height="328" />

<img src="/images/vue3_images/media/image104.png" alt="" width="553" height="69" />
