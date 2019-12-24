- CSS 盒子定位
  position 
  1. static
  2. relative
  3. fixed
  4. absolute
  5. sticky


- static
  默认属性  正常的页面流 
  块级元素不重叠 block 
  static 定位下， 设置top bottom left right 属性值无效   但可设置盒子内部的top left ..

- relative absolute fixed 都是相对于基点定位，只是这个基点不同，且这三种定位不会对其他元素产生影响，故各元素之间会产生重叠

- relative 基点为static定位下元素原本所处的位置  

- absolute 基点为父级元素  配合top bottom left right 使用
  *:基点(父元素)的定位方式不能为static，否则定位基点会变成网页根元素html
  设置top bottom 时：基点为父元素
  设置left right 时：基点为上一级元素
  脱离了文档流，不占据页面空间
  可使用父级元素relative来限制absolute

- fixed 基点是浏览器窗口
  可用来制作广告效果，总在最上方
  若给定left,right ,top,bottom 的值，则相对于浏览器窗口定位，
  若为给定值，则该元素处于原位置

- Sticky 升级版fixed 
  结合left ,top 使用，若未给定值，则等同于relative，不会有动态效果
  可用于窗口冻结
