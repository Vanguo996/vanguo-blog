---
title: "JavaScript小记"
date: 2022-11-20
tags: [笔记,js]
keywords: "异步, 你不知道的JavaScript"
---

>学习JS的网站：https://www.freecodecamp.org/
 


# 《你不知道的JavaScript》小记

## 词法作用域
词法作用域是一种静态概念，是指变量在声明时的作用域；
与其相对的概念是<mark>执行作用域</mark>，即代码调用时的作用域。
> tip:全局作用域是 JavaScript 作用域链的最后一个作用域，即全局作用域是查找的终点。
## 函数作用域
- `function foo(){...}`是函数声明
- `(function(){...})`是函数表达式

```js
    setTimeout(function timeoutHandler() { // 可以省略timeoutHandler,但是给函数添加名字是一个最佳实践
    console.log("wait for 2 seconds")
    }, 2000)
```

hope you good day!:sunny:
