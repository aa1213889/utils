// function myClosure () {
//   const name = 'i like'
//   function eatFunc () {
//     console.log(`${name} eat`)
//   }

//   function drinkFunc () {
//     console.log(`${name} drink`)
//   }

//   return { //向外暴露对象，给外部使用的方法
//     eat: eatFunc,
//     drink: drinkFunc
//   }
// }

//closure.js
(function (w) {
  const name = 'i like'
  function eatFunc () {
    console.log(`${name} eat`)
  }

  function drinkFunc () {
    console.log(`${name} drink`)
  }

  w.myClosure = {
    eat: eatFunc,
    drink: drinkFunc
  }
})(window)

/* 
实现函数节流
- 语法: throttle(callback, wait)
- 功能: 创建一个节流函数，在 wait 毫秒内最多执行 `callback` 一次
*/
export function throttle (callback, wait) {
  let start = 0
  // 返回一个事件监听函数(也就是节流函数)
  return function (event) {
    console.log('throttle event')
    // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数
    const current = Date.now()
    if (current - start > wait) {
      callback.call(this, event) // 需要指定this和参数
      start = current
    }
  }
}


const input = document.querySelector('input')

class Utils {
  constructor() { }

  debounce (callback, time) {
    let timer = null
    return function (event) {

      //如果还有定时器存在 则清空上一个定时器
      //直到time时间内的最后一个操作才能成功执行
      if (timer != null) clearTimeout(timer)

      timer = setTimeout(() => { //启动定时器
        callback.call(this, event)
        timer = null //最后一次生效设为null
      }, time)
    }
  }
}

const debounce = new Utils().debounce
input.onkeydown = debounce(function (event) {
  console.log(event.keyCode)
}, 1000)