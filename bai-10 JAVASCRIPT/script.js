// Hello, World.
var button = document.querySelector("button");
button.onclick = function () {
    alert("Hello, World!");
}

// KHAI BÁO VÀ HÀM IN DỮ LIỆU.
var Fullname = "Ng Tr Quang Minh";  // Khai báo Biến Fullname
console.log("Hello, World!");  // In dữ liệu 

//  let name = prompt("Tên bạn là gì?");    // Trả về một String

// TOÁN SỐ HỌC
console.log("TOÁN SỐ HỌC")
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
console.log("Hàm ++ AND --");
var m = 10, n = 10;
var KQC = m++ + m++ + ++m + m++ + m++ + ++m;
    // 10 + 11 + 13 + 13 + 14 + 16 = 77.
console.log(KQC);

var KQT = n-- + n-- + n-- + --n + n-- + n--;
    // 10 + 9 + 8 + 6 + 6 + 5 = 44. 
console.log(KQT);
// END ++ AND --

// PHÉP GÁN
var NAME1 = "MINH";
var NAME2 = "NHẬT";

NAME2 = NAME1;
console.log(NAME2); // MINH.


NAME2 += NAME1; // MINH += (NAME2 = NAME1) = MINH += MINH. 
console.log(NAME2); // MINHMINH
// END PHÉP GÁN