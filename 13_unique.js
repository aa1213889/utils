/*
方法1: 利用forEach()和indexOf()
  说明: 本质是双重遍历, 效率差些
*/
function unique1 (array) {
  const arr = []
  array.forEach(item => {
    if (arr.indexOf(item) === -1) {
      arr.push(item)
    }
  })
  return arr
}

/*
方法2: 利用forEach() + 对象容器
  说明: 只需一重遍历, 效率高些
*/
function unique2 (array) {
  const arr = []
  const obj = {}
  array.forEach(item => {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = true
      arr.push(item)
    }
  })
  return arr
}

/*
方法3: 利用ES6语法
    1). from + Set
    2). ... + Set
    说明: 编码简洁
    在Set中，没有重复的key,也不存value
*/
function unique3 (array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}


console.log(unique1([2, 3, 2, 7, 6, 7]))
console.log(unique2([2, 3, 2, 7, 6, 7]))
console.log(unique3([2, 3, 2, 7, 6, 7]))