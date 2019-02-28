(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{351:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("继HTML5新增了诸多新的标签之后，HTML5.2又引入了几个现代标签，其中就包括<dialog>标签。\n下面跟大家一块学习一下这个标签。")]),t._m(3),a("p",[t._v("下来看一个最简单的例子↓：")]),a("Dialog-Demo1"),a("p",[t._v("以上就是dialog的原生态样式，未添加任何额外样式。这在Chrome和Firefox里表现是一致的，它们各自的默认样式是这样的，基本一致——")]),t._m(4),a("p",[t._v("嫌丑？！如果给它加上瘦脸（去掉默认样式），加上美颜（css），再加上特效（js），一样可以十分性感😄。")]),t._m(5),t._m(6),a("p",[t._v("该属性意味着该对话框是可见的，没有它，这个对话框就会隐藏起来，直到你使用JavaScript来显示它，其实就是给它加上了open属性。")]),t._m(7),a("p",[t._v("用来获取close时传入的参数，看下面。")]),t._m(8),t._m(9),t._m(10),a("p",[t._v("两个方法相同点都是打开弹窗，即都会给dialog元素添加一个open属性。\n不同点：")]),a("p",[t._v("唯一区别就是show()会按照其在DOM流中的位置显示dialog，没有遮罩，而showModal()会出现遮罩，\n并且自动做了按键监控，即点击esc键，弹窗会关闭")]),a("p",[t._v("大多数情况下，我们会使用便利的showModal()方法来而不使用show()方法。")]),t._m(11),a("p",[t._v("会关闭弹窗，即会删除open属性，并且可以携带一个参数作为额外数据，传入的值可以通过dialog.returnValue获取。")]),t._m(12),t._m(13),a("p",[t._v("当modal关闭的时候触发")]),t._m(14),a("p",[t._v("当按下ESC关闭模态框的时候触发")]),a("p",[t._v("在各事件的事件对象event.target里，同样可以看到close()方法传入的参数，即event.target。returnValue。")]),t._m(15),t._m(16),a("p",[t._v("是dialog伪元素，用来设置弹窗遮罩的样式，用法如下")]),t._m(17),t._m(18),t._m(19),a("Dialog-Demo2"),t._m(20),t._m(21),t._m(22),t._m(23),a("p",[t._v("What？！浏览器不支持？手机端没反应？！！")]),t._m(24),t._m(25),a("p",[t._v("再引入它的css(很简单)即可。有兴趣的同学可以试试，这里不再赘述~\n不支持的浏览器再试下这个Demo↓：")]),t._m(26),a("Dialog-Demo3"),t._m(27),t._m(28)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"html5-2新标签-——-dialog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html5-2新标签-——-dialog","aria-hidden":"true"}},[this._v("#")]),this._v(" HTML5.2新标签 —— dialog")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"https://xiaotianxia.github.io/blog/vuepress/html/dialog_element.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("原文地址")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"举个栗子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举个栗子","aria-hidden":"true"}},[this._v("#")]),this._v(" 举个栗子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Chrome：\n"),s("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/dialog002.png",alt:""}}),this._v("\nFirefox:\n"),s("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/dialog001.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"两个属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两个属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 两个属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"open"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#open","aria-hidden":"true"}},[this._v("#")]),this._v(" open")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"returnvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returnvalue","aria-hidden":"true"}},[this._v("#")]),this._v(" returnValue")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三个方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三个方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 三个方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show","aria-hidden":"true"}},[this._v("#")]),this._v(" show()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"showmodal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#showmodal","aria-hidden":"true"}},[this._v("#")]),this._v(" showModal()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"close"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#close","aria-hidden":"true"}},[this._v("#")]),this._v(" close()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"两个事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两个事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 两个事件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"close-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#close-2","aria-hidden":"true"}},[this._v("#")]),this._v(" close")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"cancel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cancel","aria-hidden":"true"}},[this._v("#")]),this._v(" cancel")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一个伪元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个伪元素","aria-hidden":"true"}},[this._v("#")]),this._v(" 一个伪元素")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"backdrop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backdrop","aria-hidden":"true"}},[this._v("#")]),this._v(" ::backdrop")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("dialog::backdrop")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0, 0, 0, 0.4"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("浏览器对backdrop也有默认的样式。\nchrome：\n"),s("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/blogdialog003.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"再举个栗子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再举个栗子","aria-hidden":"true"}},[this._v("#")]),this._v(" 再举个栗子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"部分代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 部分代码")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("onShow")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("showModal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" closeBtn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'.js-close'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" confirmBtn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'.js-confirm'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cancelBtn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'.js-cancel'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//按esc关闭弹窗，同时会触发close事件")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'cancel'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//不写这句也会关闭，这里主要是为了携带数据及演示监听cancel事件")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("close")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'按esc关闭'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//关闭")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'close'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" returnValue "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnValue "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        returnValue "),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$notify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'returnValue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            message"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" returnValue\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//点击遮罩关闭，事件注册在dialog上")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'click'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("//关闭，并携带数据")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("close")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'点击了遮罩关闭'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//点×关闭")]),t._v("\n    closeBtn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'click'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("close")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'点击了关闭'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//点确定")]),t._v("\n    confirmBtn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'click'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("close")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'点击了确定'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//点取消")]),t._v("\n    cancelBtn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'click'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("close")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'点击了取消'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/*改变dialog样式*/")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("dialog")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("position")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("margin")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("left")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("translate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%, -50%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("min-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("max-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px 1px 1px "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0, 0, 0, .3"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("dialog[open]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("animation")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" slide-up 0.4s ease-out"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/*改变遮罩样式*/")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("dialog::backdrop")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0, 0, 0, 0.5"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" slide-up")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v("opacity")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("translate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%, -40%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n    "),a("span",{attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v("opacity")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("translate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%, -50%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polyfill","aria-hidden":"true"}},[this._v("#")]),this._v(" polyfill")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("木有关系。这里有一个"),s("a",{attrs:{href:"https://github.com/GoogleChrome/dialog-polyfill",target:"_blank",rel:"noopener noreferrer"}},[this._v("dialog-polyfill")]),this._v("，\n通过少许的额外代码，依然可以实现实现上面的功能。\n只要引入该js，js中在弹窗对象后面添加一句：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("dialogPolyfill"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("registerDialog")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"最后一个栗子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后一个栗子","aria-hidden":"true"}},[this._v("#")]),this._v(" 最后一个栗子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",target:"_blank",rel:"noopener noreferrer"}},[this._v("<dialog>: The Dialog element")])]),s("li",[s("a",{attrs:{href:"https://codepen.io/keithjgrant/pen/eyMMVL",target:"_blank",rel:"noopener noreferrer"}},[this._v("https://codepen.io/keithjgrant/pen/eyMMVL")])]),s("li",[s("a",{attrs:{href:"https://webdesign.tutsplus.com/tutorials/native-popups-and-modals-with-the-html5-dialog-element--cms-23876",target:"_blank",rel:"noopener noreferrer"}},[this._v("Native Popups and Modals With the HTML5 “dialog” Element")])]),s("li",[s("a",{attrs:{href:"https://yq.aliyun.com/articles/374584",target:"_blank",rel:"noopener noreferrer"}},[this._v("初探HTML5.x新特性《dialog》标签")])])])}],!1,null,null,null);s.default=e.exports}}]);