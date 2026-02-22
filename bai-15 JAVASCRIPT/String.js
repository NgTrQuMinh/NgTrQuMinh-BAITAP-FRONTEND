// String - là một kiểu dữ liệu trong JavaScript dùng để lưu trữ và thao tác với chuỗi văn bản. Dưới đây là một số ví dụ về cách sử dụng String trong JavaScript:

// Tạo một chuỗi
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

// Kết hợp chuỗi
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// Sử dụng template literals
let age = 30;
let message = `My name is ${fullName} and I am ${age} years old.`;
console.log(message); // Output: My name is John Doe and I am 30 years old.

// Length - lấy độ dài của chuỗi
var str = "Hello";
console.log(str.length); // Output: 5

// Indexof - tìm vị trí của một chuỗi con
var str = "Hello, World!";
console.log(str.indexOf("!")); // Output: 12
console.log(str.indexOf("Minh")); // Output: -1 // không tìm thấy chuỗi con
console.log(str.indexOf("Hello")); // Output: 4 // tìm thấy chuỗi con ở vị trí 0 
console.log(str.lastIndexOf("!")); // Output: 12 // tìm phải qua trái 

// Slice - cắt chuỗi
