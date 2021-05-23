/**
 * 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
 */

const arr = [1, 2, 6, 88, 99, 23]

function filter (array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      arr.push(array[index])
    }
  }
  return arr
}

console.log(filter(arr, item => item % 2 === 0)) //与下列表达式相同
// [ 2, 6, 88 ]
console.log(filter(arr, (item) => { return item % 2 === 0 }))