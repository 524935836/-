// 虚拟dom转化成dom（render）
function createElement(vnode) {
  let tag = vnode.tag
  let attrs = vnode.attrs || {}
  let children = vnode.children || []

  if(!tag) {
    return false
  }
  // 创建元素
  let ele = document.createElement(tag)

  for(let attr in attrs) {
    if(attrs.hasOwnProperty(attr)) {
      // 添加属性
      ele.setAttribute(attrs, attrs[attr])
    }
  }

  // 将子元素添加到ele上
  children.forEach(child => {
    // 递归
    ele.appendChild(createElement(child))
  })

  return ele
}

// patch将差异对象更新到dom
function patch(vnode, newVnode) {
  let children = vnode.children || []
  let newChildren = newVnode.children || []
  
  children.forEach((childrenNode, index) => {
    let newChildrenNode = newChildren[index]
    if(childrenNode.tag === newChildrenNode.tag) {
      // 递归遍历
      patch(childrenNode, newChildrenNode)
    } else {
      replace(childrenNode, newChildrenNode)
    }
  })
}