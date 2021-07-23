<h1 align="center">Mew Bot</h1>

<p align="center">
	<img alt="size" src="https://img.shields.io/github/repo-size/ProCoderMew/OneFile.svg?style=flat-square&label=size">
	<img alt="version" src="https://img.shields.io/badge/dynamic/json?color=brightgreen&label=version&prefix=v&query=%24.version&url=https://raw.githubusercontent.com/ProCoderMew/OneFile/main/package.json&style=flat-square">
	<a href="https://github.com/ProCoderMew/OneFile/commits"><img alt="commits" src="https://img.shields.io/github/commit-activity/m/ProCoderMew/OneFile?logo=commits&logoColor=red&style=flat-square&label=commit"></a>

# Introduce

- Bot này chỉ có 1 file thôi :)
- Bot không nhiều tính lăng.
- Có vài tính lăng cơ pản thôi :)
- Tôi không có học code đâu, nên là nhiều bạn sẽ thấy code nhulon ấy =))

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
    1. Tùy chỉnh email, password, token, tên bot, ...
    2. Lưu và đóng lại.

5. Lấy cookie (appstate).
    - Không có chỗ cho bạn điền mã xác thực đâu nên là nếu bạn có bật 2fa, hãy điền key vào phần token trong package.json.
      Token có dạng: OCEBUBACEBENCIWEBWCNJABCEVB
    - Nếu bạn có sẵn cookie từ trước, hãy dán vào phần cookie trong package.json.
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
    - Đến đây thì bạn đã có 1 con bot, tất nhiên là nó không có gì thú vị cả =))
    - Tùy bạn dùng và cảm nhận thôi chứ tôi thấy nhàm vcl =))

- Termux
    - Xem script tại [đây](https://github.com/ProCoderMew/storage-data)

# Author

- **ProCoderMew** - [GitHub](https://github.com/ProCoderMew) - [Facebook](https://www.facebook.com/ProCoder.Mew)

# License

- [LICENSE](LICENSE)
