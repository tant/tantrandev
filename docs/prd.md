# Tài liệu Yêu cầu Sản phẩm (PRD)

---

## 1. Mục tiêu và Bối cảnh (Goals and Background Context)

**Dựa trên Bản tóm tắt dự án, tôi đã soạn thảo phần này như sau:**

### Mục tiêu (Goals)
- Xây dựng một thương hiệu cá nhân trực tuyến uy tín để thu hút các cơ hội việc làm cấp cao.
- Tạo ra một kênh hiệu quả để tìm kiếm các dự án freelance về công nghệ.
- Thiết lập một điểm kết nối để tìm kiếm các cơ hội hợp tác và đầu tư chiến lược.

### Bối cảnh (Background Context)
Dự án này giải quyết vấn đề về sự hiện diện trực tuyến bị phân mảnh của các chuyên gia đa năng. Bằng cách tạo ra một "trụ sở kỹ thuật số", trang web sẽ hợp nhất và trình bày một cách có chiến lược ba vai trò chuyên biệt (lãnh đạo, đối tác công nghệ, nhà đầu tư) cho từng đối tượng mục tiêu, qua đó tối ưu hóa việc chuyển đổi các lượt truy cập thành cơ hội thực tế.

---

## 2. Yêu cầu (Requirements)

**Phần này sẽ chia các yêu cầu thành 2 loại:**
- **Yêu cầu Chức năng (Functional):** Mô tả hệ thống sẽ làm gì.
- **Yêu cầu Phi chức năng (Non-Functional):** Mô tả hệ thống sẽ hoạt động như thế nào.

### Yêu cầu Chức năng (Functional Requirements)
- **FR1:** Hệ thống phải hiển thị một trang Home bao gồm: khu vực Hero, khu vực "3 Vai trò", khu vực "Bài viết mới nhất", và khu vực "Bằng chứng xã hội".
- **FR2:** Hệ thống phải tự động lấy và hiển thị 3 bài viết mới nhất từ blog blog.tantran.dev trên trang Home.
- **FR3:** Hệ thống phải có một trang /blog tự động chuyển hướng người dùng đến blog.tantran.dev.
- **FR4:** Hệ thống phải cung cấp một biểu mẫu trên trang "Ask Me" để người dùng ẩn danh có thể gửi câu hỏi.
- **FR5:** Sau khi một câu hỏi được gửi thành công, hệ thống phải gửi nội dung câu hỏi đó đến email me@tantran.dev qua dịch vụ Brevo.
- **FR6:** Hệ thống phải hiển thị một danh sách các câu hỏi và câu trả lời đã được duyệt trước trên trang "Ask Me", lấy dữ liệu từ một file nội dung trong mã nguồn.
- **FR7:** Hệ thống phải cung cấp một biểu mẫu liên hệ ("Reach Me") để người dùng gửi tin nhắn.
- **FR8:** Sau khi biểu mẫu liên hệ được gửi thành công, hệ thống phải gửi nội dung tin nhắn đến email me@tantran.dev qua dịch vụ Brevo.

### Yêu cầu Phi chức năng (Non-Functional Requirements)
- **NFR1:** Ứng dụng phải được xây dựng bằng Next.js 15, TypeScript và Tailwind CSS 4.
- **NFR2:** Ứng dụng phải được triển khai (deploy) và lưu trữ (host) trên nền tảng Vercel.
- **NFR3:** Giao diện người dùng phải hoàn toàn responsive (tương thích) và hoạt động tốt trên các trình duyệt máy tính và di động hiện đại.
- **NFR4:** Ứng dụng phải được tích hợp Google Analytics để theo dõi lưu lượng truy cập và hành vi người dùng.
- **NFR5:** Tất cả các biểu mẫu công khai ("Ask Me", "Reach Me") phải có cơ chế chống spam/bot cơ bản.
- **NFR6:** Ứng dụng phải được tối ưu hóa để có tốc độ tải trang nhanh và đạt điểm Core Web Vitals tốt.

---

## 3. Mục tiêu Thiết kế Giao diện Người dùng (User Interface Design Goals)
Phần này sẽ phác thảo tầm nhìn cấp cao về trải nghiệm và giao diện, làm định hướng cho các chuyên gia UX và Kiến trúc sư ở các bước sau. Đây không phải là một bản thiết kế chi tiết, mà là các nguyên tắc chỉ đạo.

### Tầm nhìn UX tổng thể (Overall UX Vision)
Tạo ra một trải nghiệm người dùng (UX) chuyên nghiệp, sạch sẽ, và hiện đại, phản ánh uy tín và sự đa năng của bạn. Giao diện phải trực quan, dễ điều hướng, và tập trung vào việc dẫn dắt người dùng đến đúng thông tin họ cần một cách nhanh chóng.

### Các mẫu tương tác chính (Key Interaction Paradigms)
Sử dụng các mẫu tương tác quen thuộc: cuộn trang để khám phá, các "thẻ" (cards) có thể nhấp để xem chi tiết, và các biểu mẫu (forms) đơn giản. Các hiệu ứng chuyển động (animations) nên tinh tế, nhằm mục đích tăng cường sự rõ ràng và không gây xao lãng.

### Các màn hình và giao diện chính (Core Screens and Views)
- Trang Home (bao gồm các khu vực Hero, "3 Vai trò", "Bài viết mới nhất", "Bằng chứng xã hội", và "Reach Me").
- Trang "Ask Me" (bao gồm form gửi câu hỏi và danh sách câu hỏi-đáp).
- Trang Blog (thực hiện chức năng chuyển hướng).

### Khả năng tiếp cận (Accessibility)
**Đề xuất:** Hướng tới tiêu chuẩn WCAG AA. Điều này đảm bảo trang web có thể được sử dụng bởi phần lớn người dùng, bao gồm cả những người khuyết tật (ví dụ: độ tương phản màu sắc tốt, có thể điều hướng bằng bàn phím).

### Thương hiệu (Branding)
**Giả định:** Hiện tại chưa có. Giai đoạn thiết kế sẽ cần xác định một bảng màu, kiểu chữ, và logo (nếu có) phù hợp với phong cách chuyên nghiệp, hiện đại mà chúng ta hướng tới.

### Thiết bị và nền tảng mục tiêu (Target Device and Platforms)
Web Responsive. Giao diện phải hoạt động hoàn hảo trên các trình duyệt máy tính và di động hiện đại.

---

## 4. Các giả định kỹ thuật (Technical Assumptions)
Phần này đưa ra các quyết định kỹ thuật cấp cao để làm nền tảng cho Kiến trúc sư (Architect) thiết kế chi tiết. Dựa trên các công nghệ bạn đã chọn, tôi đề xuất các hướng tiếp cận sau:

### Cấu trúc Repository (Repository Structure)
**Đề xuất:** Monorepo.

**Lý do:** Cho phép quản lý mã nguồn frontend và backend (API routes) trong cùng một project. Điều này giúp dễ dàng chia sẻ code (ví dụ: các định nghĩa type TypeScript) và đơn giản hóa quá trình build và deploy trên Vercel.

### Kiến trúc Dịch vụ (Service Architecture)
**Đề xuất:** Serverless (sử dụng Next.js API Routes / Vercel Functions).

**Lý do:** Phù hợp hoàn hảo với nền tảng Vercel, có khả năng tự động co giãn, tối ưu chi phí (chỉ trả tiền khi có người dùng), và bạn không cần phải bận tâm về việc quản lý máy chủ.

### Yêu cầu về Kiểm thử (Testing Requirements)
**Đề xuất:** Unit + Integration Tests.

**Lý do:** Đảm bảo các thành phần giao diện (components) hoạt động đúng (unit tests) và các tính năng có tương tác với API (ví dụ: gửi form) hoạt động như mong đợi (integration tests). Đây là sự cân bằng tốt giữa chất lượng và tốc độ phát triển cho dự án này.

### Các giả định kỹ thuật khác
- Toàn bộ dự án sẽ được viết bằng TypeScript.
- Các dịch vụ bên ngoài (Brevo, Hashnode, Google Analytics) sẽ được tích hợp thông qua API hoặc script theo tài liệu hướng dẫn của họ.

---

## 5. Danh sách Epic (Epic List)
"Epic" là một thuật ngữ trong Agile để chỉ một nhóm công việc lớn, mang lại một giá trị hoàn chỉnh cho người dùng. Chúng ta sẽ dùng Epic để vạch ra lộ trình phát triển cho dự án.

Với quy mô và mục tiêu của dự án này, tôi đề xuất chúng ta chỉ cần một Epic duy nhất để bao quát toàn bộ phiên bản MVP. Việc này giúp chúng ta tập trung vào việc ra mắt một sản phẩm hoàn chỉnh và có giá trị, thay vì chia nhỏ thành các phần không thể sử dụng độc lập.

Dưới đây là Epic đề xuất:

**Epic 1:** Xây dựng và Ra mắt Nền tảng Thương hiệu Cá nhân

**Mục tiêu:** Thiết lập, xây dựng và triển khai phiên bản MVP của trang web profile cá nhân, bao gồm đầy đủ các tính năng tương tác chính và nội dung cốt lõi để thu hút các cơ hội nghề nghiệp, dự án và đầu tư.

Đồng ý, chúng ta sẽ đi vào phần chi tiết nhất và cũng là phần cuối cùng của PRD: chia nhỏ Epic thành các "User Story" (câu chuyện người dùng).

---

## 6. Chi tiết Epic: Xây dựng và Ra mắt Nền tảng Thương hiệu Cá nhân
**Mục tiêu mở rộng:** Mục tiêu của Epic này là đưa trang web profile cá nhân từ ý tưởng thành một sản phẩm MVP hoàn chỉnh, được triển khai trên Vercel. Khi hoàn thành, trang web sẽ thể hiện hiệu quả ba vai trò chuyên nghiệp của bạn và cung cấp các kênh tương tác để tạo ra cơ hội mới, đồng thời tuân thủ các tiêu chuẩn kỹ thuật và thiết kế đã đề ra.

### Lộ trình phát triển qua các User Story:
Dưới đây là trình tự các User Story mà tôi đề xuất để xây dựng dự án một cách logic:

1.1: Khởi tạo Nền tảng Dự án và Cài đặt ban đầu

1.2: Xây dựng Bố cục Chung và Thanh điều hướng

1.3: Dựng cấu trúc tĩnh cho Trang Home

1.4: Tích hợp Biểu mẫu Liên hệ "Reach Me"

1.5: Tích hợp hiển thị bài viết mới nhất từ Hashnode

1.6: Xây dựng Trang "Ask Me" và Tích hợp Form

1.7: Hiển thị nội dung Hỏi-Đáp trên trang "Ask Me"

1.8: Tạo trang Blog chuyển hướng

1.9: Tích hợp Analytics và Hoàn thiện Giao diện

Bây giờ, chúng ta sẽ xem xét chi tiết story đầu tiên để bạn hình dung rõ hơn.

### Story 1.1: Khởi tạo Nền tảng Dự án và Cài đặt ban đầu
**Là một nhà phát triển,**  
Tôi muốn khởi tạo một dự án Next.js 15 với TypeScript và Tailwind CSS 4,  
Để có một nền tảng vững chắc và đúng công nghệ cho việc phát triển các tính năng tiếp theo.

**Tiêu chí nghiệm thu (Acceptance Criteria):**
- Một project Next.js 15 mới được tạo thành công.
- TypeScript được cấu hình là ngôn ngữ chính trong dự án.
- Tailwind CSS 4 được cài đặt và cấu hình để có thể sử dụng.
- Dự án có thể chạy ở môi trường local (npm run dev) và hiển thị trang mặc định.
- Dự án được khởi tạo với git và có một commit đầu tiên.
- Dự án được kết nối và có thể deploy thành công lên Vercel.

---

### Story 1.2: Xây dựng Bố cục Chung và Thanh điều hướng
**Là một người dùng,**  
Tôi muốn thấy một bố cục trang web nhất quán với thanh điều hướng (navigation) rõ ràng ở đầu trang,  
Để tôi có thể dễ dàng di chuyển giữa các trang và có một trải nghiệm liền mạch.

**Tiêu chí nghiệm thu (Acceptance Criteria):**
- Một thành phần Layout chung được tạo ra, bao gồm 3 khu vực chính: Header (đầu trang), Main (nội dung chính), và Footer (chân trang).
- Header phải chứa các liên kết điều hướng đến các trang: "Home", "Blog", "Ask Me".
- Header cũng phải có một nút Kêu gọi hành động (CTA) chính là "Reach Me".
- Thanh điều hướng phải responsive: trên các thiết bị di động, các liên kết sẽ thu gọn vào một menu "hamburger".
- Footer phải chứa các thông tin cơ bản như dòng bản quyền (© 2025 [Tên của bạn]) và các liên kết đến mạng xã hội (ví dụ: LinkedIn, GitHub).
- Bố cục Layout này phải được áp dụng cho tất cả các trang của website.

---

### Story 1.3: Dựng cấu trúc tĩnh cho Trang Home
**Là một người dùng,**  
Tôi muốn thấy cấu trúc hoàn chỉnh của trang Home với các khu vực nội dung được bố trí rõ ràng,  
Để tôi có thể hình dung được luồng thông tin và có một cái nhìn tổng quan về nội dung trang web.

**Tiêu chí nghiệm thu (Acceptance Criteria):**
- Một trang HomePage được tạo và đặt làm trang mặc định (route /).
- Trang HomePage phải chứa các thành phần (components) cho tất cả các khu vực đã xác định theo đúng thứ tự: Hero, "3 Vai trò", "Bài viết mới nhất", "Bằng chứng xã hội", và "Reach Me".
- Mỗi khu vực được điền bằng nội dung tĩnh, giữ chỗ (placeholder text/images) để thể hiện ý đồ thiết kế.
- Áp dụng styling cơ bản bằng Tailwind CSS để xác định bố cục, khoảng cách và kiểu chữ cho các khu vực.
- Bố cục của trang Home phải responsive, hiển thị tốt trên cả màn hình máy tính và di động.
- Tại thời điểm hoàn thành story này, các nút bấm và các chức năng tương tác chưa cần phải hoạt động.

---

### Story 1.4: Tích hợp Biểu mẫu Liên hệ "Reach Me"
**Là một người truy cập,**  
Tôi muốn có thể điền và gửi biểu mẫu liên hệ "Reach Me" một cách thành công,  
Để tôi có thể dễ dàng gửi một tin nhắn trực tiếp đến bạn.

**Tiêu chí nghiệm thu (Acceptance Criteria):**
- Biểu mẫu liên hệ trong khu vực "Reach Me" trên trang Home được kích hoạt.
- Biểu mẫu bao gồm các trường: Tên (Name), Email, Chủ đề (Subject), và Nội dung tin nhắn (Message).
- Có kiểm tra dữ liệu đầu vào (validation) cơ bản phía người dùng: các trường bắt buộc không được để trống và trường email phải đúng định dạng.
- Một API route (ví dụ: /api/contact) được tạo ra để nhận dữ liệu từ biểu mẫu.
- API route này tích hợp thành công với Brevo để gửi email chứa dữ liệu form đến địa chỉ me@tantran.dev.
- Biểu mẫu được tích hợp cơ chế chống spam/bot cơ bản.
- Sau khi gửi, người dùng nhận được thông báo phản hồi rõ ràng trên giao diện (ví dụ: "Gửi thành công!" hoặc "Đã có lỗi xảy ra, vui lòng thử lại.").
- API key của Brevo phải được lưu trữ an toàn dưới dạng biến môi trường (environment variable) và không bị lộ ra ngoài phía client.

---

### Story 1.5: Tích hợp hiển thị bài viết mới nhất từ Hashnode
**Là một người truy cập,**  
Tôi muốn xem các bài viết blog mới nhất ngay trên trang Home,  
Để tôi có thể nhanh chóng đánh giá chuyên môn và các chủ đề mà bạn quan tâm.

**Tiêu chí nghiệm thu (Acceptance Criteria):**
- Ứng dụng phải tích hợp thành công với API công khai của Hashnode để lấy dữ liệu.
- Khu vực "Bài viết mới nhất" trên trang Home phải hiển thị được chính xác 3 bài viết gần đây nhất từ blog blog.tantran.dev.
- Mỗi bài viết hiển thị phải bao gồm: Ảnh bìa (Cover Image), Tiêu đề (Title), và một đoạn mô tả ngắn (Excerpt).
- Mỗi bài viết khi được nhấp vào phải dẫn người dùng đến đúng bài viết đó trên trang blog.tantran.dev.
- Dữ liệu bài viết nên được lấy về tại thời điểm build trang (Static Site Generation) hoặc có cơ chế revalidate (ISR) để đảm bảo hiệu năng tối ưu.
- Trong trường hợp không thể lấy được dữ liệu từ Hashnode API, khu vực này phải xử lý lỗi một cách duyên dáng (ví dụ: hiển thị một thông báo hoặc tự ẩn đi) mà không làm hỏng toàn bộ trang.
- Bố cục hiển thị các bài viết phải được sắp xếp gọn gàng (ví dụ: dạng thẻ - card) và responsive.

---

### Story 1.6: Xây dựng Trang "Ask Me" và Tích hợp Form
**Là một người truy cập,**  
Tôi muốn có một trang "Ask Me" nơi tôi có thể gửi một câu hỏi một cách ẩn danh,  
Để tôi có thể tương tác và hỏi về những điều tôi tò mò mà không cần tiết lộ danh tính.

**Tiêu chí nghiệm thu (Acceptance Criteria):**
- Một trang mới được tạo ra tại đường dẫn /ask-me.
- Trang này phải chứa một biểu mẫu đơn giản gồm một ô textarea để nhập câu hỏi và một nút "Gửi".
- Biểu mẫu có validation để ngăn người dùng gửi một câu hỏi trống.
- Một API route (ví dụ: /api/ask) được tạo ra để xử lý việc gửi form.
- API route này tích hợp với Brevo để gửi câu hỏi đến email me@tantran.dev.
- Biểu mẫu được tích hợp cơ chế chống spam/bot cơ bản.
- Sau khi gửi, người dùng nhận được thông báo phản hồi rõ ràng trên giao diện (ví dụ: "Câu hỏi của bạn đã được gửi!").
- Biểu mẫu không yêu cầu bất kỳ thông tin định danh cá nhân nào (như tên, email) để đảm bảo tính ẩn danh.

---

### Story 1.7: Hiển thị nội dung Hỏi-Đáp trên trang "Ask Me"
**Là một người truy cập,**  
Tôi muốn xem các câu hỏi đã được trả lời trên trang "Ask Me",  
Để tôi có thể học hỏi từ những người khác và khám phá thêm về kiến thức của bạn.

**Tiêu chí nghiệm thu (Acceptance Criteria):**
- Ứng dụng phải đọc và hiển thị thành công dữ liệu từ một file nội dung cục bộ (ví dụ: data/qna.json).
- File nội dung này phải có một cấu trúc dữ liệu rõ ràng, ví dụ: một danh sách các đối tượng, mỗi đối tượng chứa question (câu hỏi) và answer (câu trả lời).
- Danh sách các cặp câu hỏi-đáp phải được hiển thị trên trang /ask-me, bên dưới biểu mẫu gửi câu hỏi.
- Giao diện hiển thị phải rõ ràng, dễ đọc và responsive (ví dụ: dạng accordion hoặc các khối văn bản).
- Nếu không có câu hỏi-đáp nào trong file dữ liệu, trang phải hiển thị một thông báo thân thiện (ví dụ: "Chưa có câu hỏi nào được trả lời. Hãy là người đầu tiên!").
- Dữ liệu Hỏi-Đáp nên được tải tại thời điểm build trang để đảm bảo hiệu suất tốt nhất.

---

### Story 1.8: Tạo trang Blog chuyển hướng
**Là một người dùng,**  
Khi tôi nhấp vào liên kết "Blog" trên thanh điều hướng,  
Tôi muốn được chuyển hướng ngay lập tức đến trang blog chính (blog.tantran.dev) để đọc các bài viết.

**Tiêu chí nghiệm thu (Acceptance Criteria):**
- Một trang mới được tạo ra tại đường dẫn `/blog`.
- Khi truy cập vào đường dẫn `/blog`, hệ thống phải thực hiện một thao tác chuyển hướng vĩnh viễn (permanent redirect - HTTP 308) đến URL `https://blog.tantran.dev`.
- Liên kết "Blog" trong thanh điều hướng chính (header) phải trỏ đến `/blog`.
- Trang `/blog` không cần hiển thị bất kỳ nội dung nào, chức năng duy nhất của nó là chuyển hướng.

---

### Story 1.9: Tích hợp Analytics và Hoàn thiện Giao diện
**Là chủ nhân trang web,**  
Tôi muốn tích hợp công cụ phân tích (analytics) và rà soát lại toàn bộ giao diện,  
Để tôi có thể theo dõi hiệu quả của trang web và đảm bảo nó mang lại một trải nghiệm chuyên nghiệp, liền mạch cho người dùng trước khi ra mắt.

**Tiêu chí nghiệm thu (Acceptance Criteria):**
- Tích hợp thành công mã theo dõi (tracking script) của Google Analytics vào ứng dụng để theo dõi lượt xem trên tất cả các trang.
- Rà soát toàn bộ các trang và thành phần để đảm bảo tính nhất quán về khoảng cách, màu sắc, và kiểu chữ.
- Kiểm tra và tinh chỉnh lại giao diện trên nhiều kích thước màn hình khác nhau (di động, máy tính bảng, máy tính) để đảm bảo trải nghiệm responsive tốt nhất.
- Tất cả các nội dung giữ chỗ (placeholder text) phải được thay thế bằng nội dung cuối cùng.
- Thực hiện kiểm tra hiệu năng cuối cùng bằng các công cụ như Google Lighthouse để đảm bảo trang web đạt điểm Core Web Vitals tốt.

---

Khi story này hoàn thành, sản phẩm MVP được coi là hoàn thiện về mặt tính năng và sẵn sàng để ra mắt.


https://phumyhungngaynay.com/en/residents/find-the-balance-between-work-living-environment-family/
