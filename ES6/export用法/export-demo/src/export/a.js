// 第一种 导出单个
// var c = 3;
// export default c;

// 第二种 导出多个
// var a = 1;
// var b = 2;
// export {a,b};

// 第三种 导出函数 , 注意导出的时候一定不能加 {}, 例如 export default {foo}; 这是错误的,也就是说只有在导出多个变量或者函数时才会用到{}
// export default function foo(a, b) {  return a + b;}
// 等价于
// function foo(a, b) {  return a + b;}
// export default foo;

// 应用到箭头函数
// const foo = (a, b) => a + b;
// export default  foo;

//多个函数是否能导出？
// const foo = (a, b) => a + b;
// const foo2 = (a, b) => a - b;
// export { foo,foo2 };


//综合一起使用, 也就是说export default并不会像return 一样，它后面的内容会继续执行
// var d = 3;
// var e = 4;
// var f = 5;
//
// export default d;
// export {e,f};


// 注意一个问题 import 之后的变量或函数 是只读的

//将运行模块中的全局代码, 但实际上不导入任何值。
// console.log("不导出任何内容试试");


// export 能够导出的是什么？
// 变量,函数,类

// export default xxx
// 一个模块只能有一个默认导出 , 但可以有多个export

//能不能export多个class?
// 完全可以, 不管是class ,还是function都可以, 如下:

import React, { Component } from 'react';

class Welcome1 extends Component {
  render(){
    return( React.createElement('h1',null,'圆月弯刀') )
  }
}

class Welcome2 extends Component {
  render(){
    return( React.createElement('h1',null,'小李飞刀') )
  }
}

function Welcome3(props){
  return (
    React.createElement('h1',null,props.name)
  )

}

export {Welcome1,Welcome2,Welcome3}
// 参考链接：https://juejin.cn/post/6855593806818902030
