/**
 * 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
 */

const arr = [1, 2, 6, 88, 99, 23]

function findIndex (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return index
    }
  }
  return -1
}


console.log(findIndex(arr, (item, index) => { return item > 90 })) //4