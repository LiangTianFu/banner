爱淘宝无缝滚动轮播图
功能：
页面加载时，自动轮播，轮播鼠标悬停在整个banner容器的时候，两边会显示向左，向右按钮，鼠标悬停在中下方索引圆圈的上面，自动跳转到相应的图片
轮播图的原理：
一系列的大小相等的图片平铺，利用CSS布局只显示一张图片，其余隐藏。通过计算偏移量利用定时器实现自动播放，或通过手动点击事件切换图片。
第一张图和最后一张图一样。
这样当用户拖动到最后一张但是又没完全拖完整的时候，就会显示第一张的效果。
会造成一种循环的错觉。拖到最后一张的时候，重置轮播图序列就行 。
效果演示：https://liangtianfu.github.io/banner/index.html

