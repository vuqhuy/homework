// Bài 1
// Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
// vd: đầu vào ('ahihi', 3)
// Thì Kết quả là:
// ['ahihi', 'ahihi', 'ahihi']
// Yêu cầu, viết ít nhất 2 cách khác nhau
//method 1
const repeatingCharacters = (a = '', n) => {
  const result = []
  for (let i = 0; i < n; i++) {
    result.push(a)
  }
  return result
}

//method 2
const repeatingCharacters_2 = (a = '', n) => {
  const result = []
  let i = 0
  while (i < n) {
    result.push(a)
    i++
  }
  return result
}

//Bài 2
// Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse()
// Vd input:
// ['a', 1, '9', 'apple']
// Thì output phải là:
// ['apple', '9', 1, 'a']
const reverseTheArray = (input = []) => {
  const result = []
  for (let i = input.length - 1; i >= 0; i--) {
    result.push(input[i])
  }
  return result
}

// Bài 3
// Xóa đi các giá trị được xem là sai
// Vd intput:
// [0, 1, false, 2, undefined, '', 3, null]
// Thì output là:
// [1, 2, 3]
const deleteFalsesValues = (input = []) => {
  const result = input.filter(character => character !== undefined && character !== null && character !== false && character !== '')
  return result
}

// Bài 4
// Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
// Vd intput:
// const data = [['a', 1], ['b', 2]]
// Thì output là:
// { a: 1, b: 2 }
const convertArray = (data = []) => {
  const result = {}
  data.forEach(item => {
    result[item[0]] = item[1]
  })
  return result
}

// Bài 5
// Sắp xếp mảng tăng dần
// Vd intput:
// [6, 4, 0, 3, -2, 1]
// Thì output là:
// [-2, 0, 1, 3, 4, 6]
const sortTheArray = (input = []) => {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        let tempVariable = input[i]
        input[i] = input[j]
        input[j] = tempVariable
      }
    }
  }
  return input
}

// Bài 6
// Kiểm tra input đầu vào có phải là object hay không?
// Vd:
// const data = { a: 1 }
// return true
// const data = [1, 2, 3]
// return false
const checkinput = (input) => {
  if (typeof input === 'object') return true
  if (array.isArray(input) === true) return false
}

// Bài 7
// Viết 1 hàm trả về các key (của 1 object) khác các key truyền vào Vd:
// const obj = { a: 1, b: 2, c: 3, d: 4 }
// // truyền vào a, c
// return { b: 2, d: 4 }
const convertObject = (object = {}, input = []) => {
  const result = {...object}
  for(let key in result) {
    if(result.hasOwnProperty(key)) {
      if(input.includes(key)) {
        delete result[key]
      }
    }
  }
  return result
}

// Bài 8
// Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa
const deleteArrayItem = (input = []) => {
  if (input.length < 5) return 'mảng < 5 phần tử => nhập lại mảng'
  input.splice(1, 2)
  return input
}

// Bài 9
// Viết hàm nhập vào 1 array có cấu trúc như ví dụ sau:
// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]
// Hãy tạo 1 array mới, với cấu trúc sau:
// ['Pass', 'Fail', 'Fail', 'Pass', 'Pass', 'Fail', 'Pass']
// Điều kiện Pass:
// Điểm trên 5.0 và không có chữ Duy là tên đệm
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn     Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const checkResult = (students = []) => {
  const result = []
  students.forEach(student => {
    r=/[]{2,}/g
    student.name.replace(r, ' ')
    let splitName = student.name.trim().split(" ")
    console.log(splitName)
    if (student.score < 5.0 || splitName[0] === 'Duy') {
      result.push('Fail')
    } else result.push('Pass')
  })
  return result
}

// Bài 10
// Cho array có cấu trúc như input bài 9
// Hãy tìm các students có điểm là số mà tổng số nút của phần trước dấu thập phân và phần sau dấu thập phân cộng lại lớn hơn 5
// Vd: 6.9 -> 6 + 9 = 5 (không lấy)
// 3.7 -> 3 + 7 = 0 (không lấy) 5.2 -> 5 + 2 = 7 (lấy)
const findStudent = (students = []) => {
  const result = []
  students.forEach(student => {
    let decimal = (student.score - parseInt(student.score)) * 10
    let scoreNumber = parseInt(student.score) + Number(decimal.toFixed(2))
    if (scoreNumber >= 10) {
      scoreNumber = scoreNumber - 10
    }
    if (scoreNumber > 5) {
      result.push(student)
    }
  })
  return result
}
