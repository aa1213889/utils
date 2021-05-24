/**
 * 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false
 * 至少有一个元素
 */

const arr = [1, 2, 6, 88, 99, 23]

function some (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) { // 只有一个结果为true, 直接返回true
      return true
    }
  }
  return false
}

console.log(some(arr, (item, index) => { return item > 98 })) //true
console.log(some(arr, (item, index) => { return item < 1 })) //false