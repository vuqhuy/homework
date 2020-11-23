// ex 1: 
const checkArrayComparison = (arr1 = [], arr2 = []) => {
  arr1.sort()
  arr2.sort()
  if (arr1.length == arr2.length && JSON.stringify(arr1) === JSON.stringify(arr2)) return true
  else return false
}

// method2 - chưa hoàn thành code.
/* 1.tạo hàm inputAray(arr) riêng -> return all=[arr1,arr2,arr3...] 
2.khởi tạo hàm checkArrayComparison(all)
3. tạo vòng for sắp xếp tuwnngf array trong all với sort()
4. xét all[i] và all[j] vs (j =i+1) với điều kiện 
if (all[i].length == all[j].length && JSON.stringify(all[i]) === JSON.stringify(all[j])
và đưa ra kết quả true /false*/

// ex 2:
const result = []
const flattenArray = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && arr[i].length > 0) {
      flattenArray(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// ex 3: 
const chunks = (data, chunk) => {
  const result = []
  for (let i = 0; i < data.length; i += chunk) {
    result.push(data.slice(i, i + chunk))
  }
  return result
}

// ex 4:
//method1
const getIntersection = (data1, data2) => {
  const result = []
  for (let i = 0; i < data1.length; i++) {
    for (let j = 0; j < data2.length; j++) {
      if (data1[i] === data2[j]) {
        result.push(data1[i])
      }
    }
  }
  return result
}

// method2 use include
const getIntersection2 = (data1, data2) => {
  const result = data1.filter(value => data2.includes(value))
  return result
}

// ex5:
const checkDates = (date) => {
  const milestoneTime = 'Oct 30, 2020 12:30:32'
  if (Date.parse(date) <= Date.parse(milestoneTime)) return true
  else return false
}

//ex 6:
const checkUserName = (userName) => {
  const regexUserName = /^([a-z0-9_]){2,10}$/
  return userName.indexOf('__') === -1 ? regexUserName.test(userName) : false
}
const checkEmail = (email) => {
  const regexEmail = /^[a-z0-9]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z](?:[a-z]*[a-z])?\.)+[a-z](?:[a-z]*[a-z])?$/i
  return regexEmail.test(email)
}
