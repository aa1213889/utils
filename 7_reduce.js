/**
 * 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数
 *    ，并返回最后一次回调函数的返回值
 * initValue:初始值 可以默认为0
 */

const arr = [1, 2, 6, 88, 99, 23]

function reduce (array, callback, initValue = 0) {
  let result = initValue
  for (let index = 0; index < array.length; index++) {
    // 调用回调函数将返回的结果赋值给result
    result = callback(result, array[index], index)
  }
  return result
}

let result = reduce(arr, (res, value) => {
  return res + value
})

console.log(result) //219