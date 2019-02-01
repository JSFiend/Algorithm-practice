// 选择排序 找最小值的下标
function SelectedSort(array) {

  let temp = ''
  for(let i = 0; i < array.length -1 ; i ++) {

    let min = i;
    for (let j = i + 1; j < array.length; j ++) {

      if (array[j] < array [min])  { 
        min = j
      }
    }

    temp = array[i] 
    array[i] = array[min]
    array[min] = temp
  }

  return array
}

var array = [4,5,3,21,6,7,8,45,2,34,5,67,3,5,6,5]
console.time('selected sort')
var result = SelectedSort(array)
console.timeEnd('selected sort')
console.log('select sort value is:', result);

//  冒泡排序 找最大值
function bubblingSort (array) { 

  let temp = ''
  for (let i = 0; i < array.length - 1; i++) {

    for (let j = i; j < array.length -1 - i; j++)  {

      if (array[j] > array[j + 1]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = array[j]
      }
    }
  }
  return array
}

console.time('bubbling sort')
var result = bubblingSort (array)
console.timeEnd('bubbling sort')
console.log('bubbling sort value is:', result)

// 插入排序 
function insertSort (array) { 

  let temp = ''
  for (let i = 1; i < array.length; i++) {

    for (let j = 0; j < i; j++)  {

      if (array[i] > array[j]) {
        temp = array[i]
        array[i] = array[j]
        array[j] = array[i]
      }
    }
  }
  return array
}

console.time('insert sort')
var result = bubblingSort (array)
console.timeEnd('insert sort')
console.log('insert sort value is:', result)

