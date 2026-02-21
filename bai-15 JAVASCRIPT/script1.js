// Hello, World.
var button = document.querySelector("button");
button.onclick = function () {
    alert("Hello, World!");
}

// KHAI BÁO VÀ HÀM IN DỮ LIỆU.
console.log("1. KHAI BÁO VÀ HÀM IN DỮ LIỆU");
var Fullname = "Ng Tr Quang Minh";  // Khai báo Biến Fullname
console.log("Hello, World!");  // In dữ liệu 

// var name = prompt("Nhập tên của bạn:"); console.log(name); // Trả về một String

// TOÁN SỐ HỌC
console.log("2. TOÁN SỐ HỌC")
var a, b, c;
a = 10, b = 20;
c = '20';

var Tong, Hieu, Tich, Thuong, ChiaDu, LuyThua;
Tong = a + b;   // 10 + 20  = 30.
Tong = a + c;   // 10 + '20' = 1020.

Hieu = a - b;   // 10 - 20 = -10.
Hieu = a - c;   // 10 - '20' = -10

Tich = a * b;   // 10 * 20 = 200.
Tich = a * c;   // 10 * '20' = 200.

Thuong = a / b;     // 10 / 20 = 0.5.
Thuong = a / c;     // 10 / '20' = 0.5.

ChiaDu = a % b;     // 10 % 20 = 10.
ChiaDu = a % c;     // 10 % 20 = 10.

LuyThua = a ** b;   // 10^20 = 100000000000000000000.
LuyThua = a ** c;   // 10^ '20' = 100000000000000000000.

console.log(Tong);
console.log(Hieu);
console.log(Tich);
console.log(Thuong);
console.log(ChiaDu);
console.log(LuyThua);
// END TOÁN SỐ HỌC

// ++ AND -- 
console.log("3. Hàm ++ AND --");
var m = 10, n = 10;
var KQC = m++ + m++ + ++m + m++ + m++ + ++m;
    // 10 + 11 + 13 + 13 + 14 + 16 = 77.
console.log(KQC);

var KQT = n-- + n-- + n-- + --n + n-- + n--;
    // 10 + 9 + 8 + 6 + 6 + 5 = 44. 
console.log(KQT);
// END ++ AND --

// PHÉP GÁN
console.log("4. PHÉP GÁN");
var NAME1 = "MINH";
var NAME2 = "NHẬT";

NAME2 = NAME1;
console.log(NAME2); // MINH.


NAME2 += NAME1; // MINH += (NAME2 = NAME1) = MINH += MINH. 
console.log(NAME2); // MINHMINH
// END PHÉP GÁN


// PHÉP SO SÁNH
console.log("5. PHÉP SO SÁNH");
var x = 10, y = 20;
var KQS = x > y;   // 10 > 20 = false.
var KQT = x < y;   // 10 < 20 = true. 
var KQ3 = x >= y;  // 10 >= 20 = false. 
var KQ4 = x <= y;  // 10 <= 20 = true. 
var KQ5 = x == y;  // 10 == 20 = false. 
var KQ6 = x != y;  // 10 != 20 = true. (So sánh giá trị, không so sánh kiểu dữ liệu).
var KQ7 = x === y; // 10 === 20 = false. (So sánh giá trị và kiểu dữ liệu). vidu: 10 === '10' = false.
var KQ8 = x !== y; // 10 !== 20 = true. (So sánh giá trị và kiểu dữ liệu). vidu: 10 !== '10' = true.

console.log(KQS);
console.log(KQT);
console.log(KQ3);
console.log(KQ4);
console.log(KQ5);
console.log(KQ6);
console.log(KQ7);
console.log(KQ8);
// END PHÉP SO SÁNH

// PHÉP TOÁN LOGIC
console.log("6. PHÉP TOÁN LOGIC");
var a = 10, b = 20, c = 30;
var KQ1 = (a > b) && (b < c);   // (10 > 20) && (20 < 30) = false && true = false.
var KQ2 = (a > b) || (b < c);   // (10 > 20) || (20 < 30) = false || true = true.
var KQ3 = !(a > b);             // !(10 > 20) = !false = true. 
console.log(KQ1); // false.
console.log(KQ2); // true.
console.log(KQ3); // true.
// END PHÉP TOÁN LOGIC

