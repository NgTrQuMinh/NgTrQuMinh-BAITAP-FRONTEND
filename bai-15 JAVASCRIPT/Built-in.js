// Built-In in JS
// 0. Console
console.log("Hello, console!"); // In ra một thông báo trong console
console.error("Đây là một lỗi!"); // In ra một thông báo lỗi trong console
console.warn("Đây là một cảnh báo!"); // In ra một thông báo cảnh báo trong console

// 1. Alert - sử dụng để hiển thị một hộp thoại với một thông báo và một nút "OK"
alert("Hello world"); // Hiển thị một hộp thoại với thông báo "Hello world"

// 2. Confirm - sử dụng để yêu cầu người dùng xác nhận một hành động và trả về true hoặc false
const userConfirmed = confirm("Bạn có chắc chắn muốn tiếp tục?"); // Hiển thị một hộp thoại xác nhận và trả về true nếu người dùng nhấn "OK", false nếu nhấn "Cancel"
console.log(userConfirmed); // In ra kết quả của confirm
 
// 3. Prompt - sử dụng để yêu cầu người dùng nhập dữ liệu và trả về giá trị đã nhập
const userInput = prompt("Vui lòng nhập tên của bạn:"); // Hiển thị một hộp thoại yêu cầu người dùng nhập dữ liệu và trả về giá trị đã nhập
if (userInput !== null) {
    console.log("Xin chào, " + userInput); // In ra lời chào với tên người dùng đã nhập
} else {
    console.warn("Người dùng đã hủy nhập tên."); // In ra cảnh báo nếu người dùng hủy bỏ việc nhập
}

// 4. setTimeout - sử dụng để thực hiện một hành động sau một khoảng thời gian nhất định
setTimeout(() => {
    alert("Đây là một thông báo sau 2 giây"); // In ra thông báo sau 2 giây
}, 2000);

// 5. setInterval - sử dụng để thực hiện một hành động lặp đi lặp lại sau một khoảng thời gian nhất định
const intervalId = setInterval(() => {
    alert("Đây là một thông báo mỗi 3 giây"); // In ra thông báo mỗi 3 giây
}, 3000);

// Dừng setInterval sau 10 giây
setTimeout(() => {
    clearInterval(intervalId); // Dừng việc in thông báo sau 10 giây
    console.log("Đã dừng thông báo định kỳ"); // In ra thông báo khi đã dừng
}, 10000);

// 6. Date - sử dụng để làm việc với ngày và giờ
const currentDate = new Date(); // Tạo một đối tượng Date mới với thời gian hiện tại
console.log(currentDate); // In ra ngày và giờ hiện tại 

