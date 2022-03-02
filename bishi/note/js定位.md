## element 的属性

    	clientHeight
    		- 元素的可见高度，指元素的内容区和内边距的高度
    	clientWidth
    		- 元素的可见宽度，指元素的内容区和内边距的宽度
    	offsetHeight
    		- 整个元素的高度，包括内容区、内边距、边框
    	offfsetWidth
    		- 整个元素的宽度，包括内容区、内边距、边框
    	offsetParent
    		- 当前元素的定位父元素
    		- 离他最近的开启了定位的祖先元素，如果所有的元素都没有开启定位，则返回body
    	offsetLeft
    	offsetTop
    		- 当前元素和定位父元素之间的偏移量
    		- offsetLeft水平偏移量  offsetTop垂直偏移量

    	scrollHeight
    	scrollWidth
    		-一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。

    	scrollTop
    	scrollLeft
    		- 获取元素垂直和水平滚动条滚动的距离(可视区与顶边的距离)
        元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。

    	判断滚动条是否滚动到底
    		- 垂直滚动条
    			scrollHeight - scrollTop = clientHeight

    		- 水平滚动
    			scrollWidth - scrollLeft = clientWidth



      Element.getBoundingClientRect()
          返回元素的大小及其相对于视口的位置。
## 事件属性

    	clientX
    		- 提供事件发生时的应用客户端区域的水平坐标

    	offsetX
    		- 规定了事件对象与目标节点的内填充边（padding edge）在 X 轴方向上的偏移量。

    	pageX
    		- 相对于整个文档的x（水平）坐标以像素为单位的只读属性。

    	screenX
    		- 提供鼠标在全局（屏幕）中的水平坐标（偏移量）。

## window
        scrollX  (document.documentElement.scrollTop)
          回文档/页面水平方向滚动的像素值。

        Window.pageYOffset
          只读属性pageYOffset是 scrollY 的别名。

        window.innerWidth
          可视区高度