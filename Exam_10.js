// Bài 1: in một bảng nhân của một sô bất kì với các số từ 1 đến 10 và hiện kết quả
const multiplyNumber = (n) => {
        let result
        for (let i = 1; i < 11; i++) {
            result = n * i
            console.log(`${n} x ${i} = ${result}`)
        }

    }
    // Bài 2:Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In các số chẵn từ 1 đến n Vd n = 6: in ra: 2 4 6
const checkEvenNumber = (n) => {
        n = Number(n)

        let result = []
        if (n >= 1 && n <= 30) {
            for (let i = 1; i <= n; i++) {
                if (i % 2 === 0) {
                    result[result.length] = i
                }
            }
        }
        console.log('result=' + result)
    }
    // Bài 3:Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n

// vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21
const getTotal = (n) => {
        n = Number(n)

        let result = 0
        if (n >= 1 && n <= 30) {
            for (let i = 1; i <= n; i++) {
                result = result + i
            }
        } else { console.log('n không hợp lệ ') }
        console.log('result=' + result)
    }
    // Bài 4
    // Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In ra n! (giai thừa của n)
const getfactorial = (n) => {
        n = Number(n)

        let factorial = 1
        if (n >= 1 && n <= 30) {
            for (let i = 1; i <= n; i++) {
                factorial = factorial * i
            }
        } else { console.log('n không hợp lệ ') }
        console.log('factorial=' + factorial)
    }
    // Bài 5
    // Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn

// Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn


const countEvenNumberInArray = (arr = []) => {
        let theNumberOfEvenNumber = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                ++theNumberOfEvenNumber
            }
        }
        console.log('theNumberOfEvenNumber=' + theNumberOfEvenNumber)
    }
    // Bài 6
    // Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp

// Vd params:

// ['A', 'C', 'A', 'A', 'B', 'D', 'B']
// Thì return:

// return ['A', 'C', 'B', 'D']

const checkArray = (arr = []) => {
    const newSet = new Set(arr)
    const newArray = [...newSet]
    console.log(newArray)
}

// Bài 7
// Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:

// const studentNames = [
//     { id: 1, name: 'Nguyễn Thị Tèo' },
//     { id: 2, name: 'Phạm Văn Bưởi' },
//     { id: 3, name: 'Hoàng Văn Nam' },
//     { id: 4, name: 'Vũ Ngọc Duy' },
//     { id: 5, name: 'Nguyễn Minh Nhật' },
//     { id: 6, name: 'Phí Duy Quân' },
//     { id: 7, name: 'Trần Minh Minh' }
// ]
// const studentScores = [
//     { id: 1, score: 9.2 },
//     { id: 2, score: 2.3 },
//     { id: 3, score: 3.7 },
//     { id: 4, score: 6.9 },
//     { id: 5, score: 5.2 },
//     { id: 6, score: 9.6 },
//     { id: 7, score: 6.1 }
// ]
// Yêu cầu mảng cần tạo phải là:

// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]



const getStudentProfile = () => {
    const studentNames = [
        { id: 1, name: "Nguyễn Thị Tèo" },
        { id: 2, name: "Phạm Văn Bưởi" },
        { id: 3, name: "Hoàng Văn Nam" },
        { id: 4, name: "Vũ Ngọc Duy" },
        { id: 5, name: "Nguyễn Minh Nhật" },
        { id: 6, name: "Phí Duy Quân" },
        { id: 7, name: "Trần Minh Minh" },
    ]
    const studentScores = [
        { id: 1, score: 9.2 },
        { id: 2, score: 2.3 },
        { id: 3, score: 3.7 },
        { id: 4, score: 6.9 },
        { id: 5, score: 5.2 },
        { id: 6, score: 9.6 },
        { id: 7, score: 6.1 },
    ]
    let studentProfile = []
    const searchScore = (id) => {
        for (let i = 0; i < studentScores.length; ++i) {
            if (studentScores[i].id === id) return studentScores[i].score;
        }
    }

    for (let i = 0; i < studentNames.length; ++i) {
        studentProfile.push({...studentNames[i], score: searchScore(studentNames[i].id) })
    }
    console.log("result :", studentProfile)
    return studentProfile
}

// Bài 8
// Cho array dưới đây là danh sách các students

// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]
// Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất

// Với format đầu ra dạng:

// return {
//     theBest: { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     theBad: { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 }
// }
const checkRank = () => {
        const students = [
            { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
            { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
            { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
            { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
            { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
            { id: 6, name: 'Phí Duy Quân', score: 9.6 },
            { id: 7, name: 'Trần Minh Minh', score: 6.1 }
        ]
        let index_max = 0
        let index_min = 0
        let result = []

        for (let i = 0; i < students.length; i++) {
            let max = 0
            if (students[i].score > max) {
                max = students[i].score
            }
            index_max = i
        }
        result.push({ theBest: students[index_max] })

        for (let i = 0; i < students.length; i++) {
            let min = 0
            if (students[i].score < min) {
                min = students[i].score

            }
            index_min = i
        }
        result.push({ theBad: students[index_min] })

        console.log('result', result)
    }
    // gặp vấn đề khi không thể đưa ra giá trị max