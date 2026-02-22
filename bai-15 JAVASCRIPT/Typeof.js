// Typeof - là một toán tử trong JavaScript được sử dụng để xác định kiểu dữ liệu của một giá trị hoặc biến. Nó trả về một chuỗi đại diện cho kiểu dữ liệu của đối tượng được kiểm tra.

// Cú pháp: typeof operand
// Ví dụ:
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (đây là một lỗi trong JavaScript, nhưng nó vẫn được giữ lại vì lý do tương thích)
console.log(typeof { name: "Alice" }); // "object"
console.log(typeof [1, 2, 3]); // "object" (mảng cũng được coi là một đối tượng trong JavaScript)
console.log(typeof function() {}); // "function"

if ((typeof 42 == "number") && (typeof "Hello" == "string")) {
    console.log("Kiểu dữ liệu của 42 là number và kiểu dữ liệu của 'Hello' là string.");
}
// Lưu ý rằng typeof sẽ trả về "object" cho cả null và mảng, vì vậy nếu bạn muốn kiểm tra chính xác hơn, bạn có thể sử dụng các phương pháp khác như Array.isArray() để kiểm tra xem một giá trị có phải là mảng hay không.
// Ví dụ kiểm tra mảng:
const arr = [1, 2, 3];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true
// Ví dụ kiểm tra null:
const value = null;
console.log(typeof value); // "object"
console.log(value === null); // true
// Tóm lại, typeof là một công cụ hữu ích để xác định kiểu dữ liệu của một giá trị trong JavaScript, nhưng cần lưu ý rằng nó có một số đặc điểm đặc biệt, như trả về "object" cho null và mảng.