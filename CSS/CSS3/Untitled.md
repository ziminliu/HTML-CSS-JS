# CSS3

现状：

- 兼容性有问题，ie9 + 才支持
- 移动端支持优于pc
- 应用市场相对广泛
- 主要学习：
  - 新增选择器
  - 盒子模型
  - 其他特性



## 新增选择器

### 属性选择器

1. 选择具有某个属性的元素

   ```css
     input[value] {
       background-color: pink;
   }
   ```

2. 选择某个元素属性等于某个特定值

   ```css
     input[type='email'] {
       background-color: black;
     }
   ```

   input[type^='icon'] ：

   - ^ 以……开头
   - $ 结尾
   - `*` 包含

注意：属性选择器的权重是10.



### 结构伪类选择器

结构伪类选择器主要根据 **文档结构** 来选择元素，常用于根据父级选择器里面的子元素。

- E:first-child

- E:last-child

- E:nth-child(n)

  - n 可以是数字，关键字和公式

  - n 如果是数字，则表示第几个元素

  - n 作为关键字：even  偶数，odd 奇数

  - n 可以是公式：

    | 公式  | 含义         |
    | ----- | ------------ |
    | 2n    | 偶数         |
    | 2n+1  | 奇数         |
    | 5n    | 等差数列     |
    | n+5   | 从第5 个开始 |
    | -n +5 | 前5 个       |

- E:first-of-type 指定某个类型的第一个孩子

- E:last-of-type



### 伪元素选择器

使用css 创建伪元素标签，简化文档结构。

| 选择符   | 简介                 |
| -------- | -------------------- |
| ::before | 在元素内部的前面插入 |
| ::after  | 在元素内部的后面插入 |

使用单冒号浏览器会转化为双冒号。

**注意：**

- 伪元素创建的元素属于行内元素
- 创建的元素在document 中无法找到。
- before 和after 必须有content 属性
- 伪元素选择器和标签选择器 的权重都为  1。



## 盒子模型

使用box-sizing 指定盒模型：

1. box-sizing:content-box 盒子大小为 width + padding + border 
2. box-sizing:border-box  盒子大小为width



## 其他特性

### CSS3 滤镜filter

filter:函数()

例如:filter:blur(5px);

blur 模糊处理，数值越大越模糊

### calc 函数

width:calc(100%-30px)

### 过渡 transition

transition 是CSS3 中具有颠覆性的特征之一，我们可以在不是用Flash 动画或者 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。

transition 语法：

```css
transition：要过渡的时间 花费时间 运动曲线 何时开始;
```

1. 属性：要改变的属性，宽度高度 背景颜色 内外边距 
2. 花费时间  ： 单位是秒 s ，必须写单位
3. 运动曲线：默认是 ease  linear 匀速
4. 何时开始：可以设置延迟触发时间  默认是0



## 2D转换

### translate

transform 可以实现元素的位移，旋转，缩放等效果。

- translate 移动
- rotate 旋转
- scale 缩放

实现元素的位移可以使用：定位，margin ，transform

**重点**

translate 不会影响其他元素的布局。

translate 的百分数值参照盒子自身。

对行内标签没有效果

### rotate

使元素旋转，同样不影响其他元素的布局。

旋转中心为几何中心。

修改旋转中心点为： transform-origin : x y

重点：

- 参数x 与 y 使用空格隔开。
- x y 默认转换的中心点是元素的中心点(50% 50%)。
- 还可以给 x y 设置像素  或者 方位名词 ( top  bottom left right center)

### scale

语法

```
transform：scale(x,y)
```

参数只填数字，表示倍数

不同于修改width 和 height 的区别：

scale 不会影响其他元素。可以设置缩放中心点。

### 2D 转换综合写法 

**注意**

1. 同时使用多个转换，其格式为：transform : translate() rotate() scale() ... 等
2. 其顺序会影响转换的效果（先旋转会改变坐标轴的方向）
3. 当我们同时有位移和其他属性的时候，记得要将位移放到最前面。

## 动画

### 动画的基本使用 

1. 先定义动画

   ```css
   @keyframes move {
   
     /* 开始状态 */
     0% {
       transform: translateX(0px);
     }
   
     /* 结束状态 */
     100% {
       transform: translateX(1000px);
     }
   }
   ```

2. 在使用（调用） 动画

   ```css
   div {
     width: 100px;
     height: 100px;
     background: pink;
     /* 调用动画 */
     animation-name: move;
     /* 持续时间 */
     animation-duration: 1s;
   }
   ```

用keyframes 定义动画

动画序列？

### 动画序列

from ……to 等价于 0% 100%。



## 3D转换

特点：

- 近大远小
- 物体后面遮挡不可见

x 轴水平向右

y 垂直向下

z 垂直屏幕 ，往外为正，往内为负。



### 3D 位移

translate3d(x,y,z)

**透视：perspective**

- 透视写在被观察元素的父盒子上面
- z 值越大，看到的物体就越大。
- 视距就是人眼到屏幕的距离。

### 3D旋转

rotate3d:3D 旋转可以让元素在三维平面内沿着 x  轴，y 轴 ，z 轴 或者自定义轴进行旋转。

观察3D 效果时，需要添加透视效果。

rotate3d(x,y,z,deg)

可以使用矢量合成，作为一个旋转轴。

### 3D 呈现

控制子元素是否开启三维立体环境。

transtorm-style:flat   子元素不开启3d 立体空间 默认

transtorm-style:preserve-3d  开启立体空间



## 浏览器私有前缀

解决浏览器兼容性问题