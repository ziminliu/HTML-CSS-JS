# flex 布局

特点：

响应式布局

缺点:

PC 低版本适配问题



## 布局原理

任何一个容器都可以指定为flex 布局

- 当我们为父盒子设为flex 布局后，子元素的 float , clear , vertical-align (指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式)熟悉将失效。
- 伸缩布局 = 弹性布局 = flex 布局

采用flex 布局的元素，称为 Flex  容器

总结：通过给父盒子添加flex 属性，来控制子盒子的位置和排列方式。



## 常见父属性

- flex-direction : 设置主轴的方向
- justify-content: 设置主轴上的子元素的排列方式
- flex-wrap: 设置子元素是否换行
- align-content: 设置侧轴上的子元素的排列方式 (多行)
- align-items: 设置侧轴上的子元素排列方式( 单行)
- flex-flow: 复合属性，相当于同时设置了 flex-direction 和 flex-wrap



### flex-direction

设置主轴的方向。

- row 横向
- row-reverse  从右到左
- column 纵向
- column -reverse  从下到上

### justicy-content

设置主轴上子元素的排列方式

- flex-start 从前开始
- flex-end  从尾部开始
- center 在主轴上居中对齐
- space-around  子项平分剩余空间
- space-between  两边贴边然后平均分配



### flex-wrap

设置子元素是否换行，默认情况下所有子元素都在主轴方向上排列一行，默认不换行。

如果超过会减小子元素的宽度，挤进去。



### align-items

设置侧轴上的排列方式

- flex-start默认值 从上到下
- flex-end  从下到上
- center  垂直居中 
- stretch 拉伸

### align-content

设置侧轴上多行的排列方式

- flex-start 在侧轴的头部开始排列
- flex-end 在侧轴的尾部开始排列
- center 在侧轴中间显示
- space-around 子项平分剩余空间
- space-between 子项两侧贴边 然后其余项平分
- stretch 子项元素高度平分父元素高度