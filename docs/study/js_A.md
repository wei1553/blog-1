# js A

## ajax请求的过程 ?

```js
// 1.创建ajax对象
var xhr = null;
if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    //为了兼容IE6
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

// 2.连接服务器
// 连接服务器open(方法GET/POST，请求地址， 异步传输)
xhr.open('GET',  'data.txt',  true);

// 3.发送请求
xhr.send();

// 4.接收返回数据
/*
** 每当readyState改变时，就会触发onreadystatechange事件
** readyState属性存储有XMLHttpRequest的状态信息
** 0 ：请求未初始化
** 1 ：服务器连接已建立
** 2 ：请求已接受
** 3 : 请求处理中
** 4 ：请求已完成，且相应就绪
*/
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        /*
        ** Http状态码
        ** 1xx ：信息展示
        ** 2xx ：成功
        ** 3xx ：重定向
        ** 4xx : 客户端错误
        ** 5xx ：服务器端错误
        */
        if(xhr.status == 200) {
            success(xhr.responseText);
        } else {
            if(failed) {
                failed(xhr.status);
            }
        }
    }
}
```

## DOM事件流 ?

传递方向：先自顶向下(capture阶段), 再自下而上(bubble阶段)，即先执行捕获类型的事件，再执行冒泡类型的事件，最后执行浏览器默认行为。

参考[1](https://juejin.im/post/5bf6330f6fb9a049b41c1934)

## js原型 ?


```js
function Person () {}
var person = new Person();
```

- JS 在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做__proto__的内置属性，用于指向创建它的构造函数的原型对象，person.\__proto__ == Person.prototype。
- 每个对象都有__proto__属性，但只有函数对象才有 prototype 属性
- 所有对象的__proto__都指向其构造器的 prototype，如[].\__proto__== Array.prototype。
- person 是 Person 的一个实例，构造函数的原型 Person.prototype，也是 Person 的一个实例。
实例的构造器就是 Person，=> 

person.constructor == Person，

Person.prototype.constructor == Person，

person.\__proto__ == Person.prototype。

- 所有函数对象__proto__都指向 Function.prototype，它是一个空函数。
- Function.prototype 是唯一一个typeof XXX.prototype为“function”的prototype，其他的都是“object”。

参考: 
[1](https://www.jianshu.com/p/dee9f8b14771)
[2](https://www.jianshu.com/p/652991a67186)
[3](https://www.jianshu.com/p/a4e1e7b6f4f8)


## 继承 ?



## js 类型判断 ?

## 跨域 ?


## get post ?

- GET在浏览器回退时是无害的，而POST会再次提交请求。
- GET产生的URL地址可以被Bookmark，而POST不可以。
- GET请求会被浏览器主动cache，而POST不会，除非手动设置。
- GET请求只能进行url编码，而POST支持多种编码方式。
- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
- GET请求在URL中传送的参数是有长度限制的，而POST没有。
- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
- GET参数通过URL传递，POST放在Request body中。

<span class="txt-red">实际上</span>————

GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。

两者有一个最大的区别就是——

**GET产生一个TCP数据包；POST产生两个TCP数据包。**

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。


参考
[1](https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&amp;mid=100000054&amp;idx=1&amp;sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd)