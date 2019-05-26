(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{335:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"css-aa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-aa","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS AA")]),s("h2",{attrs:{id:"bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC ?")]),s("h3",{attrs:{id:"什么是bfc？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是bfc？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是BFC？")]),s("p",[t._v("块格式化上下文（Block Formatting Context）")]),s("p",[t._v("BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。")]),s("h3",{attrs:{id:"bfc作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc作用","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC作用")]),s("ul",[s("li",[s("ol",[s("li",[t._v("解决margin重叠的问题")])])]),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("浮动带来的布局问题")])])]),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("清除浮动")])])])]),s("h3",{attrs:{id:"bfc的创建方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc的创建方法","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC的创建方法")]),s("ul",[s("li",[t._v("根元素或其它包含它的元素；")]),s("li",[t._v("浮动(元素的float不为none)；")]),s("li",[t._v("绝对定位元素(元素的position为absolute或fixed)；")]),s("li",[t._v("行内块inline-blocks(元素的display: inline-block)；")]),s("li",[t._v("表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；")]),s("li",[t._v("overflow的值不为visible的元素；")]),s("li",[t._v("弹性盒 flex boxes(元素的display: flex或inline-flex)")])]),s("p",[t._v("参考\n"),s("a",{attrs:{href:"https://github.com/kaola-fed/blog/blob/master/source/_posts/%E5%AD%A6%E4%B9%A0BFC.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("1")])]),s("h2",{attrs:{id:"重绘与重排"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重绘与重排","aria-hidden":"true"}},[t._v("#")]),t._v(" 重绘与重排 ?")]),s("p",[s("strong",[t._v("重绘(repaint、redraw)")]),t._v(": 一个元素外观的改变所触发的浏览器行为，例如改变visibility、outline、背景色等属性。浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。重绘不会带来重新布局，并不一定伴随回流。")]),s("p",[s("strong",[t._v("重排(reflow，回流)")]),t._v(": 若渲染树的一部分更新，且尺寸变化，就会发生重排，可以理解为渲染树需要重新计算；重排会从 html 这个 root frame 开始递归往下，依次计算所有的结点几何尺寸和位置。")]),s("p",[t._v("注意：回流一定会触发重绘，而重绘不一定会回流。")]),s("p",[s("strong",[t._v("优化reflow、repaint触发次数")])]),s("ul",[s("li",[t._v("避免逐个修改节点样式，尽量一次性修改")]),s("li",[t._v("使用DocumentFragment将需要多次修改的DOM元素缓存，最后一次性append到真实DOM中渲染")]),s("li",[t._v("可以将需要多次修改的DOM元素设置display:none，操作完再显示。（因为隐藏元素不在render树内，因此修改隐藏元素不会触发回流重绘）")]),s("li",[t._v("避免多次读取某些属性")]),s("li",[t._v("将复杂的节点元素脱离文档流，降低回流成本")]),s("li",[t._v("使用 transform 替代 top")]),s("li",[t._v("使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）")]),s("li",[t._v("不要把节点的属性值放在一个循环里当成循环里的变量。")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("for")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1000")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 获取 offsetTop 会导致回流，因为需要去获取正确的值")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'.test'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("ul",[s("li",[t._v("不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局")]),s("li",[t._v("动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame")]),s("li",[t._v("CSS 选择符从右往左匹配查找，避免节点层级过多")]),s("li",[t._v("将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 video 标签来说，浏览器会自动将该节点变为图层。")])]),s("p",[t._v("参考\n"),s("a",{attrs:{href:"https://segmentfault.com/a/1190000011297958#articleHeader1",target:"_blank",rel:"noopener noreferrer"}},[t._v("1")]),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?timestamp=1545144084&src=3&ver=1&signature=7YtbKqhExARr1YWMXH7v1D*EX2qKZ2Hkc8qCBP8jhJxsO7Oj8*aGya4vtcJedluvnbXXqK9YPvc*8P6O9lz7e0ruXAfGQn3buRvdEyYpJIc8uvTklHPwIJoMkjKrlkBNv3NDvGg6zRQEKuBYefXXEfX8hwHHrMpOsIiT0SWDYh0=",target:"_blank",rel:"noopener noreferrer"}},[t._v("2")])])])}],!1,null,null,null);a.default=e.exports}}]);