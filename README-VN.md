# Yulgang Website (VIETNAMESE)
**Website URL:** [https://yulgang-web.vercel.app/](https://yulgang-web.vercel.app/)
![Yulgang Website Banner](banner.png)

## Giới thiệu

Trang web Yulgang là một ứng dụng web hiện đại được xây dựng bằng Next.js, Next-auth, Drizzle ORM và MySQL. Nó là trang chủ chính thức cho Yulgang, một trò chơi trực tuyến được yêu thích bởi nhiều game thủ trên toàn thế giới. Kho lưu trữ này chứa mã nguồn và cấu hình cho trang web.

### Các tính năng đã hoàn thành:

- **Giao diện tương tác và đáp ứng**: Trang web cung cấp giao diện hấp dẫn mắt và thân thiện với người dùng, tự động thích ứng với các thiết bị và kích thước màn hình khác nhau.

- **Xác thực và Quản lý người dùng**: Người dùng có thể tạo tài khoản, đăng nhập và tận hưởng trải nghiệm cá nhân với Next-auth cung cấp xác thực an toàn.

- **Thông tin về trò chơi**: Cung cấp thông tin chi tiết về Yulgang, bao gồm các lớp nhân vật, cập nhật trò chơi, sự kiện và nhiều hơn nữa.

- **Diễn đàn cộng đồng**: Tham gia vào các cuộc thảo luận sôi nổi với các game thủ khác trên diễn đàn cộng đồng, tạo ra tinh thần đoàn kết trong cộng đồng yêu thích Yulgang.

- **Thông báo và Thông báo**: Giữ cho người chơi luôn được cập nhật về tin tức mới nhất, cập nhật và thông báo về trò chơi để nâng cao trải nghiệm chơi game.

- **Trang nhân vật**: Một trang web riêng biệt để giới thiệu thông tin chi tiết về mỗi nhân vật trong Yulgang. Người chơi có thể tìm hiểu thống kê, kỹ năng và trang bị cho từng lớp nhân vật.

- **Trưng bày vật phẩm**: Cung cấp danh mục chi tiết về vật phẩm trong game, tính năng và cách sử dụng, giúp người chơi xây dựng chiến lược chơi game hiệu quả.

- **Thông tin Buff**: Cung cấp thông tin về các Buff khác nhau có sẵn trong trò chơi, hiệu ứng của chúng và cách để nhận được để nâng cao hiệu suất nhân vật.

- **Đăng nhập**: (Sử dụng ID từ HKPro, mật khẩu là 123456).

- **Xếp hạng**: Xem thông tin chi tiết về nhân vật, các loại pill, thời gian còn lại, thông tin về trang bị đang dùng và nhiều hơn nữa.


### Các tính năng đang được phát triển:

- Bảng điều khiển quản trị:
  - Quản lý tin tức.
  - Thêm vật phẩm vào NPC.
  - Quản lý và thay đổi khí công.
  - Quản lý vật phẩm rơi ra.
  - Thêm NPC và Quái vật bằng giao diện trực quan. Nhấp vào một điểm ngẫu nhiên sẽ tạo ra các quái vật xung quanh điểm đó.
  - Quản lý log vật phẩm. Theo dõi cách nhận được vật phẩm từ quái vật nào, quá trình cải tiến của nó, giao dịch, v.v.
  - Quản lý log nhân vật. Xem chi tiết hoạt động của bất kỳ nhân vật cụ thể nào.

## Công nghệ sử dụng

- Next.js
- Drizzle ORM
- MySql

## Cơ sở dữ liệu

Cơ sở dữ liệu web demo được lấy từ HKPro. Cơ sở dữ liệu hiện tại đang chạy trên MySql, được chuyển đổi từ cơ sở dữ liệu MSSQL ban đầu. Nếu bạn dự định sử dụng sản phẩm này cho môi trường thực tế, bạn sẽ cần tạo mô hình riêng cho MSSQL.

## Tham gia và đóng góp

Dự án sẽ tiếp tục được phát triển và cải tiến thông qua đóng góp từ cộng đồng. Nếu bạn là một nhà phát triển, bạn có thể truy cập [kho lưu trữ GitHub](https://github.com/1l4e/yulgang-web) để xem mã nguồn và đóng góp ý kiến hoặc tham gia phát triển.

Cảm ơn bạn vì sự hỗ trợ và đóng góp của bạn!
![Yulgang Character Showcase](banner2.png)

## Công nghệ sử dụng

- **Next.js**: Framework React mạnh mẽ cho việc xây dựng các trang web được render trên máy chủ và tĩnh, cung cấp trải nghiệm phát triển liền mạch.

- **Next-auth**: Thư viện xác thực đơn giản cho Next.js hỗ trợ nhiều nhà cung cấp xác thực để đảm bảo đăng nhập và phiên làm việc an toàn cho người dùng.

-

 **Drizzle ORM**: Một ORM (Object-Relational Mapping) trực quan và hiệu quả, đơn giản hóa các tương tác với cơ sở dữ liệu và tăng cường quản lý dữ liệu.

- **MySQL**: Hệ thống cơ sở dữ liệu quan hệ mã nguồn mở mạnh mẽ và được sử dụng rộng rãi để lưu trữ và truy xuất dữ liệu liên quan đến trò chơi.

## Bắt đầu

### Yêu cầu tiên quyết

- Đã cài đặt Node.js và npm trên hệ thống của bạn.
- Nginx để phục vụ ứng dụng Next.js.
- Đã cài đặt máy chủ cơ sở dữ liệu MySQL.
- Cơ sở dữ liệu MySQL được sử dụng cho trang web này là phiên bản được chuyển đổi từ MSSQL trên máy chủ thực. Bạn có thể sử dụng MSSQL thay vì MySQL để chạy trong môi trường thực tế.

### Cài đặt

1. Sao chép kho lưu trữ này vào máy tính cá nhân của bạn.

```bash
git clone https://github.com/1l4e/yulgang-web.git
```

2. Di chuyển đến thư mục dự án.

```bash
cd yulgang-web
```

3. Cài đặt các phụ thuộc.

```bash
npm install
```

4. Tạo tệp `.env` và cấu hình các biến môi trường cần thiết.

```
DATABASE_URL=mysql://your_username:your_password@localhost:3306/yulgang_db
DATABASE_USERNAME=your_username
DATABASE_HOST=localhost
DATABASE_PASSWORD=your_password
DATABASE=yulgang_db
NEXTAUTH_SECRET=
PUBLIC_HOME=
```

5. Khởi chạy máy chủ phát triển.

```bash
npm run dev
```

6. Mở trình duyệt web của bạn và truy cập `http://localhost:3000` để xem trang web Yulgang hoạt động!

## Đóng góp

Chúng tôi hoan nghênh mọi đóng góp nhằm cải thiện Yulgang Website. Nếu bạn phát hiện bất kỳ lỗi nào, có gợi ý tính năng hoặc muốn đóng góp mã nguồn, vui lòng tuân theo [hướng dẫn đóng góp](CONTRIBUTING.md) của chúng tôi.

## Giấy phép

Dự án này được cấp phép theo [Giấy phép MIT](LICENSE).

---

Hãy thoải mái khám phá, thử nghiệm và đóng góp vào Yulgang Website! Chúng tôi hy vọng dự án này sẽ làm phong phú cộng đồng game thủ Yulgang và mang lại trải nghiệm thú vị cho người chơi trên toàn thế giới. Nếu bạn có bất kỳ câu hỏi hoặc phản hồi, đừng ngần ngại liên hệ với chúng tôi. Chúc bạn chơi game vui vẻ!
