/**
 * 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
 */

const arr = [1, 2, 6, 88, 99, 23]

function find (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return array[index]
    }
  }
  return undefined
}


console.log(find(arr, (item, index) => { return item > 90 })) //99