# 1. Tóm tắt (Executive Summary)

Dự án này nhằm mục đích xây dựng một trang web profile cá nhân chuyên nghiệp và đa năng. Trang web được thiết kế để giải quyết nhu cầu có một hiện diện trực tuyến tập trung, giúp chủ nhân thu hút các cơ hội đa dạng từ ba đối tượng mục tiêu chính: **nhà tuyển dụng**, **khách hàng tiềm năng**, và **các đối tác/nhà đầu tư**. Giá trị cốt lõi của dự án là truyền tải hiệu quả ba vai trò chuyên biệt: **một nhà lãnh đạo cấp cao**, **một đối tác công nghệ toàn năng**, và **một nhà đầu tư chiến lược**.

---

# 2. Tuyên bố Vấn đề (Problem Statement)

Trong thị trường nhân sự và đầu tư cạnh tranh hiện nay, các chuyên gia đa năng thường có sự hiện diện trực tuyến bị phân mảnh trên nhiều nền tảng khác nhau (ví dụ: LinkedIn cho sự nghiệp, GitHub cho mã nguồn, blog cá nhân cho tư duy lãnh đạo). Điều này buộc các đối tượng quan trọng như nhà tuyển dụng, khách hàng, và đối tác đầu tư phải tự mình chắp vá thông tin, dẫn đến một cái nhìn không đầy đủ về năng lực thực sự của chuyên gia.

**Hậu quả:** Các cơ hội tiềm năng có thể bị bỏ lỡ vì một thông điệp không được truyền tải một cách toàn diện và thuyết phục đến đúng đối tượng.

**Các giải pháp hiện có:** Một trang LinkedIn đơn thuần hoặc một danh sách link (Linktree) không đủ để tạo ra một câu chuyện thương hiệu cá nhân mạch lạc và mạnh mẽ, có khả năng thu hút đồng thời cả ba nhóm đối tượng mục tiêu.

---

# 3. Giải pháp đề xuất (Proposed Solution)

Giải pháp là xây dựng một **trang web profile cá nhân hiện đại**, sử dụng **Next.js 15** và được lưu trữ trên **Vercel**. Trang web này sẽ đóng vai trò là một "**trụ sở kỹ thuật số**" (digital headquarters) cho thương hiệu cá nhân của chủ nhân.

**Điểm khác biệt chính:**  
Kiến trúc thông tin được thiết kế có chủ đích. Thay vì một trang giới thiệu chung chung, trang chủ sẽ sử dụng bố cục "**3 vai trò**" độc đáo, cho phép các đối tượng khác nhau (nhà tuyển dụng, khách hàng, nhà đầu tư) tự lựa chọn và tiếp cận luồng thông tin được cá nhân hóa cho họ.

**Tính năng nổi bật:**  
- Mục "Ask me" (Hỏi-đáp ẩn danh)
- Tự động cập nhật các bài viết mới nhất từ blog
- Không gian sống động, thể hiện chuyên môn sâu sắc và năng lực thực thi

---

# 4. Người dùng mục tiêu (Target Users)

## Phân khúc 1: Nhà Tuyển Dụng Cấp Cao (Senior Recruiter / Headhunter)
- **Hồ sơ:** Chuyên gia nhân sự tại các công ty công nghệ lớn hoặc công ty "săn đầu người", tìm kiếm vị trí lãnh đạo.
- **Hành vi:** Lướt hồ sơ rất nhanh (dưới 1 phút), tìm kiếm từ khóa về "quy mô", "lãnh đạo", "tác động kinh doanh", "kinh nghiệm quản lý".
- **Nhu cầu & Vấn đề:** Xác thực kinh nghiệm quản lý và tầm ảnh hưởng. Khó khăn với hồ sơ chung chung.
- **Mục tiêu:** Xác định ứng viên tiềm năng cho vị trí quản lý cấp cao.

## Phân khúc 2: Khách Hàng Tiềm Năng (Potential Client)
- **Hồ sơ:** Người sáng lập startup, quản lý dự án, doanh nhân cần đối tác kỹ thuật.
- **Hành vi:** Tìm kiếm đối tác đáng tin cậy, đánh giá dựa trên sự đa dạng công nghệ và khả năng hoàn thành dự án.
- **Nhu cầu & Vấn đề:** Đảm bảo năng lực xử lý dự án, lo lắng về chuyên môn hóa hẹp hoặc không đáng tin cậy.
- **Mục tiêu:** Quyết định về năng lực kỹ thuật và nguồn lực.

## Phân khúc 3: Đối Tác / Nhà Đầu Tư (Partner / Investor)
- **Hồ sơ:** Nhà đầu tư thiên thần, quỹ đầu tư mạo hiểm, doanh nhân tìm đồng sáng lập hoặc đối tác chiến lược.
- **Hành vi:** Tìm kiếm sự kết hợp giữa kỹ thuật và tư duy kinh doanh.
- **Nhu cầu & Vấn đề:** Cần người vừa giỏi kỹ thuật vừa là nhà tư tưởng chiến lược.
- **Mục tiêu:** Đánh giá đối tác chiến lược phù hợp.

---

# 5. Mục tiêu & Chỉ số đo lường (Goals & Success Metrics)

## Mục tiêu kinh doanh (Business Objectives)
- Trong 6 tháng: Trung bình 1-2 lời mời phỏng vấn vị trí cấp cao/tháng.
- 2-3 yêu cầu báo giá dự án freelance chất lượng/quý.
- 1 cuộc thảo luận nghiêm túc về hợp tác/đầu tư/quý.

## Chỉ số thành công của người dùng (User Success Metrics)
- **Nhà tuyển dụng:** Nắm bắt kinh nghiệm, năng lực quản lý trong <90 giây.
- **Khách hàng tiềm năng:** Dễ tìm thông tin dịch vụ, dự án.
- **Người dùng bất kỳ:** Gửi câu hỏi/liên hệ thuận lợi, không lỗi kỹ thuật.

## Các chỉ số hiệu suất chính (KPIs)
- Số lượt gửi form "Reach Me" thành công
- Số lượt click vào từng nút CTA của "3 vai trò"
- Số câu hỏi gửi qua form "Ask Me"
- Tỷ lệ thoát (Bounce Rate) trên trang chủ

---

# 6. Phạm vi MVP (Sản phẩm khả dụng tối thiểu)

## Các tính năng cốt lõi (Bắt buộc có trong phiên bản 1)
- **Trang Home:** Hero, "3 Vai trò" (3 Cards), "Bài viết mới nhất", "Bằng chứng xã hội"
- **Trang Blog:** Chuyển hướng tự động đến blog.tantran.dev
- **Trang "Ask Me":**
  - Biểu mẫu gửi câu hỏi ẩn danh
  - Gửi email đến me@tantran.dev
  - Cơ chế chống spam cơ bản
  - Hiển thị các câu hỏi-đáp đã trả lời (cập nhật thủ công)
- **Chức năng "Reach Me":** Biểu mẫu liên hệ, tích hợp Brevo gửi email
- **Tích hợp Google Analytics:** Theo dõi các chỉ số KPI

## Ngoài phạm vi MVP (Sẽ hoàn thành sau)
- Hệ thống quản lý Hỏi-Đáp (admin)
- Hệ thống Blog tích hợp (hiện chỉ liên kết Hashnode)

## Tiêu chí thành công cho MVP
- Hoạt động ổn định trên các thiết bị
- Truyền tải rõ ràng ba vai trò chuyên nghiệp
- Kênh liên lạc hiệu quả (Reach Me, Ask Me)

---

# 7. Tầm nhìn sau MVP (Post-MVP Vision)

## Tính năng cho Giai đoạn 2 (Phase 2 Features)
- Hệ thống quản lý Hỏi-Đáp (admin)
- Trang Portfolio/Dự án chi tiết

## Tầm nhìn dài hạn (1-2 năm)
- Phát triển thành trung tâm nội dung (Content Hub)
- Tự động hóa thu hút cơ hội (landing page chuyên biệt)

## Các cơ hội mở rộng (Expansion Opportunities)
- Tích hợp đặt lịch hẹn (Calendly)
- Xây dựng "Khu vườn số" (Digital Garden)

---

# 8. Các vấn đề kỹ thuật cần cân nhắc (Technical Considerations)

## Yêu cầu Nền tảng (Platform Requirements)
- Web (Responsive)
- Hỗ trợ trình duyệt hiện đại
- Tối ưu tốc độ tải trang, Core Web Vitals

## Ưu tiên về Công nghệ (Technology Preferences)
- **Frontend:** Next.js 15, Tailwind CSS 4, TypeScript
- **Backend:** Next.js API routes
- **Database:** Không yêu cầu cho MVP (Hỏi-Đáp qua file)
- **Hosting:** Vercel
- **Dịch vụ tích hợp:** Brevo (email), Google Analytics (tracking)

## Cân nhắc về Kiến trúc (Architecture Considerations)
- **Cấu trúc Repository:** Khuyến nghị Monorepo
- **Kiến trúc Dịch vụ:** Serverless Functions (Next.js API routes)
- **Yêu cầu Tích hợp:**
  - API Hashnode (bài viết mới)
  - API Brevo (form liên hệ, Ask Me)
  - Google Analytics script
  - Cơ chế chống spam (reCAPTCHA)

---

# 9. Các ràng buộc & Giả định (Constraints & Assumptions)

## Các ràng buộc (Constraints)
- **Ngân sách:** Ưu tiên dịch vụ miễn phí (Vercel, Brevo, Google Analytics)
- **Thời gian:** Chưa xác định, MVP thiết kế để hoàn thành nhanh
- **Nguồn lực:** Nhóm AI BMad-Method
- **Kỹ thuật:** Bắt buộc dùng Next.js 15, TypeScript, Tailwind CSS 4, Vercel, Brevo, Google Analytics

## Các giả định chính (Key Assumptions)
- API Hashnode, Brevo hoạt động ổn định
- Nội dung ban đầu do bạn cung cấp
- Dịch vụ bên thứ ba không thay đổi chính sách miễn phí
- Không cần hỗ trợ trình duyệt lỗi thời

---

# 10. Rủi ro & Câu hỏi mở (Risks & Open Questions)

## Các rủi ro chính (Key Risks)
- **Phụ thuộc API bên thứ ba:** Tính năng chính phụ thuộc Hashnode, Brevo
- **Bảo mật và Spam:** Biểu mẫu công khai dễ bị lạm dụng
- **Quản lý nội dung thủ công:** Dễ gây lỗi khi số lượng câu hỏi tăng

## Các câu hỏi mở (Open Questions)
- Chiến lược quảng bá và thu hút đúng 3 nhóm đối tượng?
- Quy trình xem xét, trả lời câu hỏi "Ask Me" như thế nào?
- Ngân sách cụ thể cho vận hành và phát triển sau MVP?