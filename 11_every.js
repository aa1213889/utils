/**
 * 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false
 * 每个元素
 */

const arr = [1, 2, 6, 88, 99, 23]

function every (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index)) { // 只有一个结果为false, 直接返回false
      return false
    }
  }
  return true
}


console.log(every(arr, (item, index) => { return item > 100 })) //false
console.log(every(arr, (item, index) => { return item > 0 })) //true