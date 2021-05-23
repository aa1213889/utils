/**
 * 返回一个由回调函数的返回值组成的新数组
 */

const arr = [1, 2, 6, 88, 99, 23]

function map (array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    // 将callback的执行结果添加到结果数组中
    arr.push(callback(array[index], index))
  }
  return arr
}

console.log(map(arr, (item) => { return item * 2 })) // [2, 4, 12, 176, 198, 46]