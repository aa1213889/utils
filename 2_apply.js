class Utils {
  constructor() { }

  /** apply 改变函数this指向，执行 函数返回的结果
   * 实现apply函数
   * Fn 传的函数
   * obj this指向的对象
   * args 一个参数变为了数组
   * globalThis 在node下就是global 在浏览器中就是Window
   */
  apply (Fn, obj, args) {
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

globalThis.c = 1314

const result = new Utils().apply(add, obj, [10, 20]) //打印add函数中的this
console.log(result) //返回数字 521 + 10 + 20 = 551
console.log(obj)  //返回之前的obj的