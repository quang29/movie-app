const express = require('express');
const app = express();
const PORT = 5000;  // Cổng mà backend sẽ chạy

// Định nghĩa route cơ bản (API endpoint)
app.get('/', (req, res) => {
  res.send('Hello from Express!');  // Gửi thông điệp đơn giản khi truy cập vào "/"
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
