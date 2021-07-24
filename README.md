<h1 align="center">Mew Bot</h1>

<p align="center">
	<img alt="size" src="https://img.shields.io/github/repo-size/ProCoderMew/OneFile.svg?style=flat-square&label=size">
	<img alt="version" src="https://img.shields.io/badge/dynamic/json?color=brightgreen&label=version&prefix=v&query=%24.version&url=https://raw.githubusercontent.com/ProCoderMew/OneFile/main/package.json&style=flat-square">
	<a href="https://github.com/ProCoderMew/OneFile/commits"><img alt="commits" src="https://img.shields.io/github/commit-activity/m/ProCoderMew/OneFile?logo=commits&logoColor=red&style=flat-square&label=commit"></a>

# Introduce

- Bot này chỉ có 1 file thôi :)
- Bot không nhiều tính lăng.

# Installation

- Yêu cầu: 
	- Nodejs >= 12
	- 1 tài khoản facebook, bật 2fa xác thực bằng ứng dụng đi =)) tránh pay acc.
	- Hết rồi =))

- Cài đặt:

1. Tải về [Nodejs](https://nodejs.org/en) và [git](https://git-scm.com) sau đó cài đặt.

2. Tải source bot về qua git.
    ```sh
    git clone https://github.com/ProCoderMew/OneFile.git
    ``` 

3. Cài đặt các package cần thiết.
    ```sh
    npm install
    ```

4. Chỉnh sửa data trong package.json.
    1. Tùy chỉnh email, password, token (2fa key), tên bot, ...
    2. Lưu và đóng lại.

5. Lấy cookies (appstate).
    - Lấy cookies bằng cách đăng nhập:
        ```sh
        npm run login
        ```
    
    - Nếu bạn có sẵn cookies từ trước, hãy dán vào phần cookies trong package.json.
        - Lỗi khi thêm cookies:
            + Cookies có dạng
                ```json
                [{}, {}, {}, {}]
                ```
            + Nhầm lẫn: 
                ```json
                [[{}, {}, {}]]
                ```
    - Xong rồi thì sang bước 6 =)).

6. Chạy bot.
    ```sh
    npm start
    ```
    - Đến đây thì bạn đã có 1 con bot rồi =))

- Termux
    - Xem script tại [đây](https://github.com/ProCoderMew/storage-data).

# Update

- Chạy lệnh sau ở command line/terminal.
    ```sh
    npm run update
    ```
- Quá trình update chỉ mất khoảng 15s.

# Author

- **ProCoderMew** - [GitHub](https://github.com/ProCoderMew) - [Facebook](https://www.facebook.com/ProCoder.Mew)

# License

- [LICENSE](LICENSE)
