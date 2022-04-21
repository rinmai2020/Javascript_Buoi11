var isLogin = true;

// toán tử so sánh
console.log(5 > 2);
console.log(5 >= 5);
console.log(5 < 2);
console.log(5 <= 2); // false
console.log(5 == 5); // true
console.log(5 === "5"); // recommend

console.log(4 != "4"); // false
console.log(4 !== "4"); // true recommend

// toán tử logic : !, &&, ||

console.log(!!!!isLogin);

console.log(5 > 2 && 3 > 4 && 1 > 2); // false

console.log(5 > 2 || 3 > 4 || 1 > 2); // true

// câu điều kiện

//  biểu thức điều kiện : biểu thức so sánh, biểu thức logic, giá trị
// truthy: còn lại
// falsy: 0, "", null, undefined, NaN (Not a number), false

if (5 > 2 && 7 > 10) {
  console.log("hello");
} else {
  console.log("bai");
}

if ("") {
  console.log("abc");
} else {
  console.log("fgh");
}

// INPUT : tiền lương theo giờ , số giờ làm

var salaryPerHour = 20000;
var workingHours = 45;
var salary;

if (workingHours <= 40) {
  salary = salaryPerHour * workingHours;
} else {
  salary = 40 * salaryPerHour + (workingHours - 40) * salaryPerHour * 1.5;
}

console.log("Tiền lương tuần là: ", salary);

// OUPUT: tiền lương

var age = 9;

if (age < 10) {
  console.log("thiếu nhi");
} else if (age >= 10 && age < 18) {
  console.log("Vị thành niên");
} else if (age >= 18) {
  console.log("thanh niên");
} else if (age >= 30) {
  console.log("gìa");
}

// var gpa = 9;

// if (gpa >= 8) {
//   console.log("giỏi");
// }

// if (gpa >= 6 && gpa < 8) {
//   console.log("Kha");
// } else {
//   console.log("Yeu");
// }

// var productName = "Iphone 13 PROMAX";
// var quantity = 120;
// var price = 1700;
// var totalAmount;

// if (quantity <= 50) {
//   totalAmount = quantity * price;
// } else if (quantity > 50 && quantity <= 100) {
//   totalAmount = 50 * price + (quantity - 50) * price * 0.92;
// } else {
//   totalAmount =
//     50 * price + (50 * price * 0.92)  + (quantity - 100) * price * 0.88;
// }

// console.log(totalAmount);

// var studentName = "Hiếu";
// var math = 10;
// var physics = 9;
// var chemistry = 8;
// var gpa;

// gpa = (math + physics + chemistry) / 3;

// if (gpa >= 8.5) {
//   console.log("Giỏi");
// } else if (gpa >= 6.5) {
//   console.log("Kha");
// } else if (gpa >= 5 ) {
//   console.log("TB");
// } else {
//   console.log("Yeu");
// }

if (5 > 2) {
  console.log("dung");
} else {
  console.log("sai");
}

// toán tử 3 ngôi
5 > 2 ? console.log("dung") : console.log("sai");

var d = -2;

// if (d < 0) {
//   // code nếu đk đúng
//   d = -d;
// }
d = d < 0 ? -d : d;
// d= 2

var username = isLogin ? "hieudt5" : null;

console.log(username);

if (isLogin) {
  username = "hieudt";
} else {
  username = null;
}

// câu điều kiện switch case

var month = 1;

// if(month === 1){
//     console.log("31 ngày")
// } else if(month === 2){
//     console.log("28 ngày")
// }

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 ngày");
    break;

  case 2:
    console.log("28 ngày");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 ngày");
    break;
  default:
    console.log("Tháng ko hợp lệ");
}
