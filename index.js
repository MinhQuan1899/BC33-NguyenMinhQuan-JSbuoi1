
/**
 * bài 1
 * Sơ đồ 3 lớp
 * 
 * input: lương 1 ngày, số ngày
 * 
 * process: tổng lương = lương 1 ngày * số ngày
 * 
 * output tổng lương hiện ra màn hình
 */
var salaryPerDay = 100000
var workingDays = 30

var totalSalary = salaryPerDay * workingDays;

console.log("Tổng lương tháng vừa qua:", totalSalary);


/**
 * bài 2
 * Sơ đồ 3 lớp
 * 
 * input: nhập 5 số thực  a , b , c , d , e 
 * 
 * process:  f là giá trị trung bình của tổng 5 số thực = (a+b+c+d+e)/5
 * 
 * output: hiện f giá trị trung bình của 5 số ra màn hình
 * 
 */

var a = 18
var b = 11
var c = 99
var d = 10
var e = 32

var f = (a+b+c+d+e)/5;

console.log("Giá trị trung bình của tổng 5 số là", f)

/**
 * bài 3
 * Sơ đồ 3 lớp
 * 
 * input: 1usd=23500vnd
 * 
 * process: totalConversion= 23500vnd * ?usd
 * 
 * output: xuất ra màn hình giá trị tiền usd nhập vào  đổi sang vnd
 */

var vnd =23500
var usd =5
var totalConversion = usd * vnd;

console.log("Tổng quy đổi USD sang VND", totalConversion)

/**
 * bài 4
 * Sơ đồ 3 lớp
 * 
 * input: var height= 40 var width= 20
 * 
 * process: chuvi= (height+width)*2   dientich=height*width
 * 
 * output:xuất chu vi , diện tích ra màn hình
 */

var height =40
var width =20

var perimeter = (height+width)*2;
var area = height*width;

console.log("Chu vi,Diện Tích", perimeter,area)

/**
 * bài 5
 * Sơ đồ 3 lớp
 * 
 * input: nhập 1 số có 2 chữ số 
 * 
 * process:  tổng ký = num1(số hàng chục)+num2(số hàng đơn vị)
 * 
 * output: xuất tổng 2 ký số
 */

var n =18
var num1= Math.floor(n/10);
var num2= n%10;

var total= num1+num2;

console.log("Tổng ký của số vừa nhập", total)
