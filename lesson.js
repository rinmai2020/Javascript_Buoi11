/*
Bài tập 1
input: luong 1 ngay, số ngày làm
process
khai báo biến : lương 1 ngày và số ngày làm
output: tổng tiền lương
*/
var salaryDay = 100000;
var workingDay = 20;
var salaryTotal = salaryDay * workingDay;
console.log("Tong tien luong la", salaryTotal);

/*
Bai tap 2
Input: nhập vào 5 số thực
process
Output: tính trung bình
*/
//C1
var a = 10.5;
var b = 2.5;
var c = 7.7;
var d = 5.8;
var e = 10.1;
var tb = (a + b + c + d + e) / 5;
console.log("trung binh cong cua 5 so la", tb);
//C2
function APG(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}
console.log("Trung binh cong cua nam so", APG(1, 2, 4, 5, 7));
/*
Bài tập 3
input: quy doi từ USD sang VND
process
khai báo biến usd, vnd
vnd = usd*23.5
output: tính và xuất ra số tiền quy đổi
*/
function convertCurrency(usd) {
  return usd * 23500;
}
console.log("Số tiền quy đổi từ USD sang VND :", convertCurrency(3) + " VND");
/*Bai tap 4
input: nhập vào 2 chiều dài và rộng
process
viết function
tham số truyền vào a, b
check điều kiện
Output: xuát ra diện tích, chu vi hcn
*/
//dien tich hinh chu nhat
//C1
function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}
console.log("AreaOfRectangle:", calcAreaOfRectangle(0, 1));
console.log("AreaOfRectangle:", calcAreaOfRectangle(4, 5));
//chu vi hinh chu nhat
function calcPerimeterOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return (a + b) * 2;
}
console.log("PerimeterOfRectangle:", calcPerimeterOfRectangle(4, 0));
console.log("PerimeterOfRectangle:", calcPerimeterOfRectangle(4, 5));
//C2
var a = 4;
var b = 10;
if (a <= 0 || b <= 0) {
  console.log("Kết quả sai");
} else {
  var dt = a * b;
  var cv = (a + b) * 2;
  console.log("ket qua dien tich la", dt);
  console.log("ket qua chu vi la", cv);
}
/*
Bài tập 5
Input: Nhập vào 1 số có 2 chữ số
process:
Output: Tổng 2 ký tự nhập vào
*/
//c1
var so = 67.5;
dv = Math.floor(so % 10);
hc = Math.floor(so / 10);
sum = hc + dv;
console.log(dv);
console.log(hc);
console.log(sum);
//c2
function inputAdvide(so) {
  var dv = Math.floor(so % 10);
  var hc = Math.floor(so / 10);
  return hc + dv;
}
console.log(inputAdvide(60));
