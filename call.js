class Utils {
  constructor() { }

  /** call 改变函数this指向，执行 函数返回的结果
   * 实现call函数
   * Fn 传的函数
   * obj 声明的一个对象
   * args 参数
   * globalThis 在node下就是global 在浏览器中就是Window
   */
  call (Fn, obj, ...args) {
    if (obj === undefined || obj === null) obj = globalThis //指向全局对象
    obj.temp = Fn //为obj添加临时方法
    const result = obj.temp(...args) //调用temp方法
    delete obj.temp
    return result
  }
}

/** 调用 */
function add (a, b) {
  console.log(this)
  return a + b + this.c
}

const obj = {
  c: 521
}

window.c = 1314

const result = new Utils().call(add, obj, 10, 20) //打印add函数中的this
console.log(result) //返回数字 521 + 10 + 20 = 551
console.log(obj)  //返回之前的obj的