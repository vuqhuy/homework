// Bài 1
// Viết một chương trình nhập lương nhân viên, tính thuế thu nhập và lương ròng
//  (số tiền lương thực sự mà nhân viên đó nhận được). 
//  Với các thông số giả sử như sau (không theo luật lương, 
//  chỉ là con số giả sử để dễ tính toán):
// •	30% thuế thu nhập nếu lương là 15 triệu.
// •	20% thuế thu nhập nếu lương từ 7 đến 15 triệu.
// •	10% thuế thu nhập nếu lương dưới 7 triệu.

const luong = (L) => {
        let thue
        if (L > 15000000) {
            thue = 30 %
        }
        if (L >= 7000000 && L <= 15000000) {
            thue = 20 %
        }
        if (L < 70000000) {
            thue = 10 %
        }
        return `Thue thu nhap (${thue}:${thue * L} --- Luong rong : (${L - thue*L}) `
    }
    // Bài 2
    // Viết chương trình nhập tuổi và in ra kết quả nếu tuổi học sinh đó 
    // không đủ điều kiện vào học lớp 10.
    // Biết tuổi vào lớp 10 của học sinh là 16.
const testAge = (age) => {
        if (age < 16) {
            return `tuoi cua hc=oc sinh la :'(${ age }) \n Khong du dieu kien hoc lop 10)`
        }
    }
    // Bài 3
    // // Viết chương trình nhập một số nguyên bất kỳ và in kết quả ra màn hình để thông báo cho người dùng biết số đó lớn hay nhỏ hơn 100
const num = (n) => {
        if (n > 100) {
            return ` (${n} lon hon 100)`
        }
        if (n < 100) {
            return `(${n} nho hon 100)`
        }
    }
    // Bài 4
    // Viết chương trình nhập vào 3 số nguyên và tìm số lớn nhất trong 3 số đó.
const soLonNhat = (a, b, c) => {
        let max = a

        if (b > max) {
            max = b
            return `sln la:(${b})`
        }
        if (c > max) {
            max = c
            return `sln la:(${c})`
        }
    }
    // Bài 5
    // Viết chương trình xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra,
    //  điểm thi giữa kỳ, điểm thi cuối kỳ. Nếu:
    // •	Điểm trung bình >= 9.0 là hạng A.
    // •	Điểm trung bình >=7.0 và < 9.0 là hạng B
    // •	Điểm trung bình >=5.0 và < 7.0 là hạng C
    // •	Điểm trung bình <5.0 là hạng F
const academicPower = (diemTrungBinh) => {
        let hang
        if (diemTrungBinh >= 9.0) {
            hang = 'hang A'
        }
        if (diemTrungBinh < 9.0 && diemTrungBinh >= 7.0) {
            hang = 'hang B'
        }
        if (diemTrungBinh >= 5.0 && diemTrungBinh < 7.0) {
            hang = 'hang C'
        }
        if (diemTrungBinh <= 5.0) {
            hang = 'hang F'
        }
        return `Hoc luc cua hoc sinh : (${hang})`
    }
    // Bài 6
    // Viết chương trình để tìm nghiệm của phương trình bậc hai ax2 + bx + c = 0. Biết rằng:
    // •	Nếu a và b cùng bằng 0 thì phương trình vô nghiệm.
    // •	Nếu a=0 thì phương trình có một nghiệm là (-c/b).
    // •	Nếu b2-4ac < 0, thì phương trình vô nghiệm.
    // •	Nếu không, phương trình có hai nghiệm, dùng công thức tính nghiệm để tính.
const phuongTinhBacHai = (a, b, c) => {
        let delta = b * b - 4 * a * c
        let nghiem1_x1
        let nghiem2_x2

        if (a == 0 && b == 0) {
            console.log('Pt vo nghiem')
        }
        if (a == 0) {

            console.log('pt co nghiem duy nhat: ' ($ {-b / (2 * a) }))
        }
        if (delta < 0) {
            console.log('pt vo nghiem')
        } else {

            nghiem1_x1 = -b + Math.sqrt(delta) / (2 * a)
            nghiem2_x2 = -b - Math.sqrt(delta) / (2 * a)
            return `x1= (${nghiem1_x1} \n x2= (${nghiem2_x2}))`

        }
    }
    // Bài 7
    // Cửa hàng của bạn nhận gửi bán sản phẩm cho một công ty khác và hưởng hoa hồng,
    //  với mức hoa hồng theo doanh số bán như sau:
    // •	5% nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu.
    // •	10% nếu tổng doanh số nhỏ hơn hoặc bằng 300 triệu.
    // •	20 % nếu tổng doanh số là lớn hơn 300 triệu. 
    // Hãy viết chương trình Js để tính hoa hồng bạn sẽ nhận được dựa trên doanh số bán hàng.
const profit = (p) => {
        let doanhThu
        if (doanhThu <= 100000000) {
            p = 5 %
        }
        if (doanhThu <= 300000000) {
            p = 10 %
        }
        if (doanhThu > 300000000) {
            p = 20 %
        }
        return `hoa hong nhan dc: (${p*doanhThu})`
    }
    // Bài 8
    // Viết chương trình để tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:
    // •	Phí thuê bao bắt buộc là 25 nghìn.
    // •	600 đồng cho mỗi phút gọi của 50 phút đầu tiên.
    // •	400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
    // •	200 đồng cho bất kỳ phút gọi nào sau 200 phút đầu tiên.
const telephoneCharges = (tC) => {
    let minute
    let feeRequired = 25000
    if (minute <= 50) {
        tC = minute * 600 + feeRequired
    }
    if (minute > 50 && minute <= 200) {
        tC = 50 * 600 + (minute - 50) * 400
    }
    if (minute > 200) {
        tC = 50 * 600 + 150 * 400 + (minute - 200) * 200
    }
    return `cuoc dien thoai :(${tC})`
}