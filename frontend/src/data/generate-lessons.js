const fs = require('fs');
const path = require('path');

// 23 bài học gốc để giữ lại làm nền tảng
const ORIGINAL_LESSONS = [
  {
    id: 1,
    title: "Mẹ và bé: Mặc quần áo buổi sáng | Getting Dressed",
    description: "Đoạn hội thoại ngắn giữa mẹ và bé khi chuẩn bị quần áo để bắt đầu ngày mới.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: Wake up, sweetheart! It is time to get dressed. | Mẹ: Dậy đi con yêu! Đến lúc mặc quần áo rồi.\nBaby: Good morning, mommy. I am still sleepy. | Con: Chào buổi sáng mẹ. Con vẫn còn buồn ngủ lắm.\nMother: Let us put on your favorite blue shirt today. | Mẹ: Hôm nay chúng ta mặc chiếc áo sơ mi màu xanh yêu thích của con nhé.\nBaby: Yes! And I want to wear my red shorts too. | Con: Vâng ạ! Và con cũng muốn mặc chiếc quần đùi màu đỏ nữa.\nMother: Great choice! Put your arms through the sleeves first. | Mẹ: Lựa chọn tuyệt vời! Xỏ tay qua ống tay áo trước nào con.\nBaby: Like this, mommy? I did it by myself! | Con: Thế này hả mẹ? Con tự làm được rồi này!\nMother: Yes, just like that. You are doing a wonderful job! | Mẹ: Đúng rồi, chính thế. Con làm tốt lắm!"
  },
  {
    id: 2,
    title: "Mẹ và bé: Đi chơi công viên | Going to the Park",
    description: "Hội thoại tiếng Anh thông dụng khi mẹ chuẩn bị cho bé đi chơi công viên.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: Do you want to go to the park with me? | Mẹ: Con có muốn đi chơi công viên với mẹ không?\nBaby: Yay! I want to play on the slide and swing. | Con: Dê! Con muốn chơi cầu trượt và xích đu.\nMother: Put on your shoes and grab your water bottle. | Mẹ: Hãy đi giày vào và mang theo bình nước của con nhé.\nBaby: Where is my sun hat, mommy? | Con: Mũ che nắng của con đâu rồi hả mẹ?\nMother: It is on the table near the door. Let us go! | Mẹ: Nó ở trên bàn gần cửa ra vào ấy. Đi thôi con!\nBaby: Look, mommy! There are many beautiful butterflies. | Con: Nhìn kìa mẹ! Có rất nhiều bươm bướm xinh đẹp.\nMother: Yes, they are. Stay close to me, okay? | Mẹ: Đúng vậy. Hãy đi gần mẹ nhé, được không?"
  },
  {
    id: 3,
    title: "Mẹ và bé: Dọn dẹp đồ chơi | Tidying Up Toys",
    description: "Mẹ hướng dẫn bé cách cất đồ chơi gọn gàng sau khi chơi xong.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: We finished playing. Now it is time to tidy up. | Mẹ: Chúng ta chơi xong rồi. Bây giờ đến lúc dọn dẹp thôi.\nBaby: But mommy, I want to keep playing with my blocks. | Con: Nhưng mẹ ơi, con vẫn muốn chơi với các khối hình.\nMother: We can play again tomorrow. Let us put them in the box. | Mẹ: Ngày mai chúng ta lại chơi tiếp nhé. Cùng cất chúng vào hộp nào.\nBaby: Can you help me pick up the toy cars, please? | Con: Mẹ có thể giúp con nhặt mấy chiếc ô tô đồ chơi được không ạ?\nMother: Of course! I will collect the cars, and you collect the blocks. | Mẹ: Tất nhiên rồi! Mẹ sẽ nhặt ô tô, còn con nhặt các khối hình nhé.\nBaby: Look! The room is clean and tidy now. | Con: Nhìn kìa mẹ! Căn phòng bây giờ đã sạch sẽ và ngăn nắp rồi.\nMother: High five! Thank you for being such a good helper. | Mẹ: Đập tay nào! Cảm ơn con vì đã là một người giúp việc ngoan."
  },
  {
    id: 4,
    title: "Mẹ và bé: Đánh răng trước khi ngủ | Brushing Teeth",
    description: "Hội thoại vui vẻ giúp bé tạo thói quen đánh răng sạch sẽ trước khi đi ngủ.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: Brush, brush, brush your teeth! Time to clean them up. | Mẹ: Chải chải chải răng nào! Đến lúc làm sạch răng rồi.\nBaby: My toothbrush has a little dinosaur on it! | Con: Bàn chải đánh răng của con có hình một chú khủng long nhỏ này!\nMother: Put a little toothpaste on it, just like a pea. | Mẹ: Bôi một ít kem đánh răng lên nhé, chỉ bằng hạt đậu thôi.\nBaby: Like this, mommy? It smells like strawberries! | Con: Thế này hả mẹ? Nó có mùi dâu tây thơm quá!\nMother: Yes. Now brush up and down, and round and round. | Mẹ: Đúng rồi. Giờ chải lên chải xuống, và chải vòng tròn nhé.\nBaby: I am spitting out the water now. Spit! | Con: Con đang nhổ nước ra đây ạ. Nhổ!\nMother: Good job! Your teeth are shining and clean now. | Mẹ: Làm tốt lắm! Răng của con bây giờ đã sáng bóng và sạch sẽ rồi."
  },
  {
    id: 5,
    title: "Hội thoại công sở: Họp dự án | Business Meeting",
    description: "Hội thoại tiếng Anh thương mại thường gặp khi thảo luận tiến độ dự án.",
    language: "en",
    category: "Business",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Manager: Good morning everyone, let us start the project review. | Trưởng nhóm: Chào buổi sáng mọi người, chúng ta hãy bắt đầu buổi đánh giá dự án.\nEmployee: I have completed the database design. | Nhân viên: Tôi đã hoàn thành việc thiết kế cơ sở dữ liệu.\nManager: That is great news. Are there any delays with the UI design? | Trưởng nhóm: Đó là tin tốt. Có sự chậm trễ nào với thiết kế giao diện không?\nDesigner: No, the templates will be ready by tomorrow afternoon. | Nhà thiết kế: Không ạ, các bản mẫu sẽ sẵn sàng vào chiều mai.\nManager: Perfect! Let us meet again on Friday to test the app. | Trưởng nhóm: Hoàn hảo! Chúng ta hãy gặp lại vào thứ Sáu để kiểm thử ứng dụng."
  },
  {
    id: 6,
    title: "Hỏi đường du lịch: Đến ga tàu | Asking for Directions",
    description: "Mẫu câu hỏi đường đi ga tàu điện ngầm cơ bản dành cho người đi du lịch.",
    language: "en",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Traveler: Excuse me, could you tell me how to get to the subway station? | Khách: Xin lỗi, bạn có thể chỉ tôi đường đến ga tàu điện ngầm không?\nLocal: Sure. Walk straight down this street for two blocks. | Dân địa phương: Chắc chắn rồi. Đi thẳng con đường này qua hai ngã tư.\nTraveler: Should I turn left or right at the traffic lights? | Khách: Tôi nên rẽ trái hay rẽ phải ở cột đèn giao thông?\nLocal: Turn left, and you will see the station entrance on your right. | Dân địa phương: Rẽ trái, và bạn sẽ thấy lối vào ga ở bên phải.\nTraveler: Thank you so much for your kind help! | Khách: Cảm ơn bạn rất nhiều vì sự giúp đỡ tốt bụng!"
  },
  {
    id: 7,
    title: "IELTS Speaking: Cuốn sách yêu thích | Favorite Book",
    description: "Đoạn nói học thuật mô tả một cuốn sách ảnh hưởng lớn đến cuộc sống.",
    language: "en",
    category: "IELTS",
    difficulty: "Advanced",
    repeat_default: 2,
    content: "Candidate: I would like to talk about a book that inspired me deeply. | Thí sinh: Tôi muốn nói về một cuốn sách đã truyền cảm hứng sâu sắc cho tôi.\nExaminer: Please go ahead and describe the details. | Giám khảo: Xin mời tiếp tục và mô tả các chi tiết.\nCandidate: It is a motivational book called The Alchemist. | Thí sinh: Đó là một cuốn sách truyền động lực có tên là Nhà Giả Kim.\nCandidate: The main theme is about pursuing one's destiny. | Thí sinh: Chủ đề chính là về việc theo đuổi định mệnh của mỗi người.\nCandidate: Reading it helped me overcome my fears of failure. | Thí sinh: Đọc nó đã giúp tôi vượt qua nỗi sợ hãi thất bại."
  },
  {
    id: 8,
    title: "Xây dựng: Thi công bê tông & An toàn | Concrete Pouring",
    description: "Từ vựng tiếng Anh kỹ thuật thi công đổ bê tông cốt thép tại công trường.",
    language: "en",
    category: "Construction",
    difficulty: "Advanced",
    repeat_default: 3,
    content: "Engineer: Check the steel formwork stability before pouring concrete. | Kỹ sư: Kiểm tra độ ổn định của cốp pha thép trước khi đổ bê tông.\nWorker: Yes, sir. All support props are locked securely. | Công nhân: Vâng thưa kỹ sư. Tất cả các thanh chống phụ đã được khóa chặt.\nEngineer: Remember to wear your safety harness on the scaffolding. | Kỹ sư: Nhớ thắt dây an toàn khi đứng trên giàn giáo nhé.\nWorker: Understood. Safety is always our top priority. | Công nhân: Đã rõ. An toàn luôn là ưu tiên hàng đầu của chúng tôi.\nEngineer: Good. Let us start the concrete pump now. | Kỹ sư: Tốt. Hãy bắt đầu khởi động máy bơm bê tông ngay nào."
  },
  {
    id: 9,
    title: "Tiếng Việt: Chào hỏi xã giao | Vietnamese Greetings",
    description: "Mẫu câu tiếng Việt cơ bản để chào hỏi và hỏi thăm sức khỏe hàng ngày.",
    language: "vi",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Nam: Xin chào, rất vui được gặp bạn hôm nay! | Nam: Hello, nice to meet you today!\nLan: Chào Nam! Dạo này công việc của bạn thế nào rồi? | Lan: Hello Nam! How is your work going lately?\nNam: Cảm ơn bạn, tôi vẫn bình thường. Còn bạn thì sao? | Nam: Thank you, I am doing fine. And you?\nLan: Tôi mới chuyển sang một công việc thiết kế mới. | Lan: I have just switched to a new design job.\nNam: Chúc mừng nhé! Cuối tuần này chúng ta đi uống cà phê đi. | Nam: Congratulations! Let us go for coffee this weekend."
  },
  {
    id: 10,
    title: "Tiếng Việt: Gọi món ăn ở nhà hàng | Ordering Food",
    description: "Giao tiếp tại quán ăn khi muốn gọi phở và các món đặc sản Việt Nam.",
    language: "vi",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Customer: Cho tôi xin thực đơn của nhà hàng ngày hôm nay nhé. | Customer: Please give me the restaurant menu for today.\nWaiter: Vâng ạ. Quý khách muốn dùng phở bò hay phở gà? | Waiter: Yes. Would you like beef noodle soup or chicken noodle soup?\nCustomer: Cho tôi một bát phở bò tái chín và một ly trà đá. | Customer: Give me a bowl of beef noodle soup and an iced tea.\nWaiter: Dạ được. Quý khách có muốn dùng thêm quẩy nóng không ạ? | Waiter: Sure. Would you like some hot fried dough sticks too?\nCustomer: Có chứ, cho tôi thêm một đĩa quẩy nhé. Xin cảm ơn! | Customer: Yes, please add a plate of dough sticks. Thank you!"
  },
  {
    id: 11,
    title: "Tiếng Nhật: Mua vé tàu Shinkansen | Shinkansen Ticket",
    description: "Mẫu câu hội thoại tiếng Nhật thực tế khi mua vé tàu cao tốc tại quầy.",
    language: "ja",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Passenger: すみません、東京行きのチケットを一枚ください。 | Hành khách: Xin lỗi, cho tôi mua một vé đi Tokyo.\nClerk: 指定席と自由席のどちらがよろしいですか？ | Nhân viên: Quý khách muốn vé ghế chỉ định hay ghế tự do?\nPassenger: 指定席でお願いします。窓側の席はありますか？ | Hành khách: Cho tôi vé ghế chỉ định. Có ghế cạnh cửa sổ không?\nClerk: はい、空いています。チケットは一万二千円になります。 | Nhân viên: Vâng, còn trống ạ. Vé của quý khách là 12,000 Yên.\nPassenger: ありがとう。クレジットカードは使えますか？ | Hành khách: Cảm ơn. Tôi có thể dùng thẻ tín dụng được không?"
  },
  {
    id: 12,
    title: "Tiếng Nhật: Chào hỏi buổi sáng | Japanese Greetings",
    description: "Các câu giao tiếp tiếng Nhật ngắn gọn bắt đầu ngày mới.",
    language: "ja",
    category: "Japanese",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "A: おはようございます。今日もいい天気ですね。 | A: Chào buổi sáng. Hôm nay thời tiết cũng đẹp nhỉ.\nB: そうですね。今週はずっと晴れるみたいですよ。 | B: Đúng thế. Tuần này nghe nói trời sẽ nắng suốt đấy.\nA: 朝ごはんを食べましたか？コーヒーを好みましょう。 | A: Bạn ăn sáng chưa? Cùng uống cà phê nhé.\nB: まだです。駅前のカフェに行きませんか？ | B: Chưa ăn. Chúng ta đến quán cà phê trước ga đi?\nA: いいですね。すぐに行きましょう！ | A: Được đấy. Đi ngay thôi nào!"
  },
  {
    id: 13,
    title: "Tiếng Hàn: Tự giới thiệu bản thân | Korean Intro",
    description: "Học các câu nói tiếng Hàn cơ bản để giới thiệu tên, tuổi và nghề nghiệp.",
    language: "ko",
    category: "Korean",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "A: 안녕하세요! 처음 뵙겠습니다. | A: Xin chào! Rất vui được gặp bạn lần đầu.\nB: 안녕하세요! 저는 민우라고 합니다. 이름이 어떻게 되세요? | B: Xin chào! Tôi tên là Min-woo. Tên bạn là gì?\nA: 제 이름은 지수입니다. 베트남에서 왔습니다. | A: Tên tôi là Ji-soo. Tôi đến từ Việt Nam.\nB: 지수 씨, 반가워요. 한국어 공부는 언제 시작했어요? | B: Rất vui được gặp Ji-soo. Bạn bắt đầu học tiếng Hàn từ khi nào?\nA: 세 달 전에 시작했습니다. 아직 많이 서툴러요. | A: Tôi đã bắt đầu từ 3 tháng trước. Tôi vẫn còn kém lắm."
  },
  {
    id: 14,
    title: "Tiếng Hàn: Mua sắm ở chợ Dongdaemun | Shopping",
    description: "Hội thoại mặc cả và hỏi giá khi đi mua sắm quần áo tại Hàn Quốc.",
    language: "ko",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Customer: 이 청바지는 얼마예요? 한번 입어볼 수 있어요? | Khách: Chiếc quần jean này giá bao nhiêu? Tôi mặc thử được không?\nShopkeeper: 오만 원이에요. 피팅룸은 저쪽에 있습니다. | Chủ tiệm: Giá 50,000 Won. Phòng thử đồ ở đằng kia nhé.\nCustomer: 조금 입어봤는데 바지가 너무 큽니다. | Khách: Tôi mặc thử rồi nhưng quần bị rộng quá.\nShopkeeper: 그럼 더 작은 사이즈로 보여드릴게요. 잠시만요. | Chủ tiệm: Vậy tôi sẽ lấy size nhỏ hơn cho bạn xem. Đợi chút nhé.\nCustomer: 고맙습니다. 디자인이 마음에 드네요. | Khách: Cảm ơn. Tôi rất ưng ý kiểu dáng này."
  },
  {
    id: 15,
    title: "Tiếng Trung: Trả giá khi mua sắm | Bargaining",
    description: "Các câu nói tiếng Trung thường dùng để mặc cả giảm giá khi mua quà lưu niệm.",
    language: "zh",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Customer: 老板，这个茶壶多少钱？ | Khách: Ông chủ, cái ấm trà này bao nhiêu tiền?\nShopkeeper: 一百块钱，这是纯手工做的。 | Chủ tiệm: 100 Tệ, đây là đồ làm thủ công hoàn toàn đấy.\nCustomer: 太贵了，便宜点儿吧，八十块可以吗？ | Khách: Đắt quá, rẻ chút đi, 80 Tệ được không?\nShopkeeper: 最少九十块，不能再便宜了。 | Chủ tiệm: Thấp nhất là 90 Tệ, không thể rẻ hơn nữa đâu.\nCustomer: 行，那就九十块吧，帮我包装一下。 | Khách: Được rồi, vậy 90 Tệ đi, gói giúp tôi nhé."
  },
  {
    id: 16,
    title: "Tiếng Trung: Hỏi thăm gia đình | Family Talk",
    description: "Chủ đề hỏi thăm số lượng thành viên và công việc của mọi người trong nhà.",
    language: "zh",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "A: 你家有几口人？他们都做什么工作？ | A: Nhà bạn có mấy người? Họ làm công việc gì?\nB: 我家有四口人：爸爸、妈妈、妹妹和我。 | B: Nhà tôi có 4 người: Bố, mẹ, em gái và tôi.\nA: 你妹妹是学生吗？她今年多大？ | A: Em gái bạn là học sinh à? Năm nay cô ấy bao nhiêu tuổi?\nB: 对，她是大学生，今年二十岁了。 | B: Đúng thế, em ấy là sinh viên đại học, năm nay 20 tuổi rồi.\nA: 你父母都退休了吗？ | A: Bố mẹ bạn đã nghỉ hưu chưa?\nB: 爸爸退休了，妈妈还在教书。 | B: Bố tôi nghỉ hưu rồi, mẹ tôi vẫn đang dạy học."
  },
  {
    id: 17,
    title: "Tiếng Trung: Ký kết hợp đồng thương mại | Business",
    description: "Thoại thương mại cấp cao đàm phán ký kết hợp đồng giữa hai đối tác.",
    language: "zh",
    category: "Business",
    difficulty: "Advanced",
    repeat_default: 2,
    content: "A: 贵公司对合同草案还有什么修改意见吗？ | A: Quý công ty còn ý kiến sửa đổi nào đối với dự thảo hợp đồng không?\nB: 基本没有了，我们对付款方式非常满意。 | B: Cơ bản là không còn nữa, chúng tôi rất hài lòng về phương thức thanh toán.\nA: 那太好了。预祝我们的项目取得圆满 thành công！ | A: Vành thế tốt quá. Chúc dự án của chúng ta thành công viên mãn!\nB: 合作愉快！我们 hôm nay 就正式签字吧。 | B: Hợp tác vui vẻ! Chúng ta hôm nay tiến hành ký kết chính thức nhé.\nA: 好的，我下午三点准时到您办公室。 | A: Vâng, tôi sẽ đến văn phòng của ông đúng 3 giờ chiều."
  },
  {
    id: 18,
    title: "Mẹ và bé: Tại sân bay nước ngoài | At the Airport",
    description: "Mẹ hướng dẫn bé và thực hiện các thủ tục check-in tại sân bay khi chuẩn bị đi nước ngoài.",
    language: "en",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Mother: Keep your passport in your bag, do not lose it. | Mẹ: Giữ hộ chiếu của con trong túi nhé, đừng làm mất đấy.\nBaby: Where are we going now, mommy? | Con: Bây giờ chúng ta đang đi đâu thế mẹ?\nMother: We are going to the check-in counter to drop our bags. | Mẹ: Chúng ta đang đi đến quầy làm thủ tục để gửi hành lý.\nStaff: Hello, passport and tickets, please. | Nhân viên: Xin chào, vui lòng cho tôi mượn hộ chiếu và vé máy bay.\nMother: Here they are. We have one stroller to check in. | Mẹ: Đây ạ. Chúng tôi có một chiếc xe đẩy em bé cần ký gửi.\nStaff: Sure. Please place your luggage on the scale. | Nhân viên: Chắc chắn rồi. Vui lòng đặt hành lý của bạn lên cân.\nBaby: Look! The plane is so big outside the window! | Con: Nhìn kìa! Chiếc máy bay ngoài cửa sổ to quá mẹ ơi!\nMother: Yes it is! We will board the plane very soon. | Mẹ: Đúng vậy! Chúng ta sẽ lên máy bay sớm thôi."
  },
  {
    id: 19,
    title: "Mẹ và bé: Trên chuyến bay | On the Airplane",
    description: "Mẹ giao tiếp với tiếp viên hàng không để xin nước ấm pha sữa và chăn đắp cho bé.",
    language: "en",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Mother: Excuse me, could I get some warm water for baby milk? | Mẹ: Xin lỗi, tôi có thể xin một ít nước ấm để pha sữa cho bé không?\nFlight Attendant: Yes, of course. I will bring it right away. | Tiếp viên: Vâng, tất nhiên rồi. Tôi sẽ mang đến ngay lập tức.\nBaby: Mommy, my ears hurt a little bit. | Con: Mẹ ơi, tai con hơi bị đau một chút.\nMother: Drink some water or chew this gummy, it will help. | Mẹ: Uống chút nước hoặc nhai viên kẹo dẻo này nhé, nó sẽ giúp đỡ đau đấy.\nFlight Attendant: Here is your warm water. Do you need a blanket? | Tiếp viên: Nước ấm của chị đây ạ. Chị có cần chăn đắp không?\nMother: Yes, please. A small blanket for my child would be great. | Mẹ: Vâng, làm ơn. Có một chiếc chăn nhỏ cho con tôi thì tốt quá.\nBaby: Thank you, nice lady! | Con: Con cảm ơn cô xinh đẹp!"
  },
  {
    id: 20,
    title: "Mẹ học tiếng Nhật: Mua sữa và tã ở siêu thị | Buying Baby Milk and Diapers",
    description: "Mẫu hội thoại tiếng Nhật cho mẹ hỏi nhân viên siêu thị để tìm mua sữa công thức và tã giấy cho bé.",
    language: "ja",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Mother: すみません、赤ちゃん用の粉ミルクはどこですか？ | Mẹ: Xin lỗi, sữa bột công thức cho bé ở đâu vậy ạ?\nStaff: あちらのベビー用品コーナーにございます。ご案内します。 | Nhân viên: Ở góc đồ dùng cho bé đằng kia ạ. Tôi sẽ dẫn đường cho chị.\nMother: ありがとうございます。あと、テープタイプのオムツのLサイズはありますか？ | Mẹ: Cảm ơn bạn. Ngoài ra, tã dán size L còn hàng không ạ?\nStaff: はい、パンパースのLサイズなら棚の二段目にございます。 | Nhân viên: Vâng, tã giấy Pampers size L nằm ở ngăn thứ hai của kệ ạ.\nMother: よかった。赤ちゃんの肌に優しいタイプですね。 | Mẹ: May quá. Đây là loại dịu nhẹ cho da em bé đúng không?\nStaff: はい、オーガニックコットン使用で人気の商品です。 | Nhân viên: Vâng, đây là sản phẩm rất được ưa chuộng sử dụng bông hữu cơ ạ."
  },
  {
    id: 21,
    title: "Mẹ học tiếng Hàn: Đăng ký khám bệnh cho bé | At the Pediatric Clinic",
    description: "Hội thoại tại phòng khám nhi ở Hàn Quốc khi mẹ khai báo các triệu chứng ho sốt của bé.",
    language: "ko",
    category: "Korean",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Staff: 아기 이름과 생년월일을 적어주세요. 어디가 아픈가요? | Nhân viên: Vui lòng viết tên và ngày sinh của bé. Bé bị đau ở đâu ạ?\nMother: 어제 밤부터 열이 나고 기침을 많이 해요. | Mẹ: Bé bị sốt và ho nhiều từ tối hôm qua ạ.\nStaff: 체온을 먼저 측정하겠습니다. 38.5도네요. | Nhân viên: Tôi sẽ đo nhiệt độ cơ thể trước. Là 38.5 độ ạ.\nDoctor: 목이 조금 부었네요. 감기 기운이 있습니다. | Bác sĩ: Họng của bé hơi sưng một chút. Có dấu hiệu bị cảm lạnh.\nMother: 약은 하루에 몇 번 먹여야 하나요? | Mẹ: Thuốc này phải cho bé uống một ngày mấy lần ạ?\nDoctor: 아침, 점심, 저녁 하루 세 번, 식후 30분에 먹이세요. | Bác sĩ: Hãy cho uống ngày 3 lần sáng, trưa, tối, sau khi ăn 30 phút nhé."
  },
  {
    id: 22,
    title: "Mẹ học tiếng Trung: Tìm trường mẫu giáo cho bé | Kindergarten Inquiry",
    description: "Mẹ hỏi thăm thông tin đăng ký nhập học và các chế độ ăn uống cho con tại trường mầm non.",
    language: "zh",
    category: "Daily Conversation",
    difficulty: "Advanced",
    repeat_default: 2,
    content: "Mother: 您好，我想咨询一下三岁孩子的入学申请程序。 | Mẹ: Xin chào, tôi muốn tư vấn về thủ tục nhập học cho trẻ ba tuổi.\nTeacher: 您好！您需要填写申请表，并提供孩子的疫苗接种证明。 | Cô giáo: Chào chị! Chị cần điền vào đơn đăng ký và cung cấp giấy chứng nhận tiêm chủng của bé.\nMother: 这里的班级一般有多少个学生？有几位老师？ | Mẹ: Lớp học ở đây thường có bao nhiêu học sinh? Có mấy giáo viên ạ?\nTeacher: 每个班最多十五个孩子，配备两位老师 and 一位保育员。 | Cô giáo: Mỗi lớp tối đa mười lăm bé, được trang bị hai giáo viên và một bảo mẫu.\nMother: 孩子的午餐是怎么安排的？菜单会每周更新吗？ | Mẹ: Bữa trưa của các bé được sắp xếp thế nào? Thực đơn có cập nhật hàng tuần không?\nTeacher: 是营养配餐，菜单每周五会在家长群公布。 | Cô giáo: Đó là suất ăn dinh dưỡng, thực đơn sẽ được công bố trong nhóm phụ huynh vào mỗi thứ Sáu."
  },
  {
    id: 23,
    title: "Mẹ và bé: Làm quen hàng xóm mới | Meeting New Neighbors",
    description: "Mẹ hướng dẫn bé chào hỏi và giao tiếp xã giao với người hàng xóm nước ngoài thân thiện.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Neighbor: Hello there! Welcome to the neighborhood. | Hàng xóm: Xin chào! Chào mừng gia đình bạn đến với khu phố này.\nMother: Thank you so much. We just moved here last weekend. | Mẹ: Cảm ơn bạn rất nhiều. Chúng tôi vừa mới chuyển đến đây cuối tuần trước.\nNeighbor: What a lovely child. What is your name, little one? | Hàng xóm: Đứa trẻ đáng yêu quá. Tên con là gì thế bé cưng?\nBaby: My name is Liam. I am four years old. | Con: Tên con là Liam. Con bốn tuổi rồi ạ.\nNeighbor: Nice to meet you, Liam! I have a son who is also four. | Hàng xóm: Rất vui được gặp con, Liam! Cô có một đứa con trai cũng bốn tuổi đấy.\nMother: That is wonderful. Maybe they can play together at the park. | Mẹ: Tuyệt vời quá. Có lẽ chúng có thể chơi cùng nhau ở công viên.\nBaby: Can we play toys together, mommy? | Con: Chúng con có thể chơi đồ chơi cùng nhau không mẹ?\nMother: Yes, sweetie. We will invite them over soon. | Mẹ: Được chứ con yêu. Chúng ta sẽ sớm mời họ sang chơi nhé."
  }
];

// Dữ liệu từ vựng cho generator
const VOCABULARY = {
  names: {
    en: ['John', 'Mary', 'David', 'Sarah', 'James', 'Emily', 'Robert', 'Jessica', 'Michael', 'Linda', 'Thomas', 'Barbara', 'Daniel', 'Elizabeth', 'Paul', 'Sophia', 'Mark', 'Olivia', 'Kevin', 'Chloe'],
    ja: ['佐藤', '鈴木', '高橋', '田中', '伊藤', '渡辺', '山本', '中村', '小林', '加藤', '健太', '翔太', '蓮', 'さくら', '美咲', '陽菜', '結衣', '大翔', '優斗', '大輝'],
    zh: ['张伟', '王芳', '李静', '陈杰', '刘洋', '张敏', '李军', '王丽', '周强', '徐丽', '明哲', '晓华', '德明', '丽华', '建国', '小红', '雅琴', '海峰', '飞龙', '志强'],
    ko: ['민우', '지수', '현우', '서연', '민준', '하은', '도윤', '수빈', '유진', '준호', '지훈', '서윤', '지원', '민서', '예은', '성민', '동현', '영수', '정희', '태현'],
    vi: ['Nam', 'Lan', 'Minh', 'Vy', 'Tuấn', 'Hoa', 'Hoàng', 'Trang', 'Hùng', 'Hà', 'Phong', 'Thủy', 'Sơn', 'Mai', 'Đức', 'Nhi', 'Hải', 'Linh', 'Khánh', 'An']
  },
  places: {
    en: ['the park', 'the downtown office', 'the subway station', 'the airport terminal', 'the library', 'the coffee shop', 'the conference room', 'the dental clinic', 'the supermarket', 'the central square'],
    ja: ['新宿駅', '代々木公園', '東京タワー', '京都の寺院', '札幌駅', '近くのスーパー', '図書館', '歯医者', 'カフェ', 'オフィスの会議室'],
    zh: ['北京站', '人民公园', '天安门广场', '办公室会议室', '图书馆', '附近的超市', '咖啡厅', '牙科诊所', '南京路', '飞机场'],
    ko: ['서울역', '한강공원', '명동', '사무실 회의실', '도서관', '근처 슈퍼마켓', '카페', '치과 병원', '강남역', '인천공항'],
    vi: ['công viên', 'văn phòng trung tâm', 'ga tàu điện', 'sân bay', 'thư viện', 'quán cà phê', 'phòng họp', 'phòng khám', 'siêu thị', 'quảng trường']
  },
  items: {
    en: ['smartphone', 'laptop computer', 'leather wallet', 'water bottle', 'sun hat', 'umbrella', 'notebook', 'backpack', 'coffee mug', 'keychain'],
    ja: ['スマートフォン', 'ノートパソコン', '革の財布', '水筒', '日よけ帽子', '傘', 'ノート', 'リュックサック', 'コーヒーマグ', 'キーホルダー'],
    zh: ['智能手机', '笔记本电脑', '皮钱包', '水壶', '遮阳帽', '雨伞', '笔记本', '背包', '咖啡杯', '钥匙扣'],
    ko: ['스마트폰', '노트북', '가죽 지갑', '물통', '햇빛 가리개 모자', '우산', '공책', '배낭', '커피 머그잔', '열쇠고리'],
    vi: ['điện thoại', 'máy tính xách tay', 'ví da', 'bình nước', 'mũ chống nắng', 'chiếc ô', 'cuốn sổ', 'ba lô', 'cốc cà phê', 'móc khóa']
  },
  foods: {
    en: ['sandwich', 'beef steak', 'hot noodle soup', 'green salad', 'hamburger and fries', 'fried chicken', 'fruit cup', 'chocolate cake', 'pizza slice', 'sushi roll'],
    ja: ['ラーメン', '寿司', '天ぷら', 'うどん', '牛丼', 'カレーライス', 'おにぎり', 'たこ焼き', '刺身', '抹茶アイス'],
    zh: ['牛肉面', '小笼包', '北京烤鸭', '宫保鸡丁', '炒饭', '红烧肉', '水饺', '麻婆豆腐', '火锅', '春卷'],
    ko: ['비빔밥', '불고기', '김치찌개', '떡볶이', '삼겹살', '냉면', '김밥', '삼계탕', '잡채', '치킨'],
    vi: ['phở bò', 'bún chả', 'bánh mì', 'cơm tấm', 'gỏi cuốn', 'nem rán', 'hủ tiếu', 'chả cá', 'bún bò Huế', 'chè ba màu']
  },
  projects: {
    en: ['Database Design', 'Web Application Dev', 'Mobile App Upgrade', 'Cloud Migration', 'Security Audit', 'API Integration', 'UI/UX Redesign', 'Marketing Campaign', 'Machine Learning Model', 'Client Presentation'],
    ja: ['データベース設計', 'ウェブアプリ開発', 'モバイルアプリ更新', 'クラウド移行', 'セキュリティ監査', 'API統合', 'UI/UX設計変更', 'マーケティング活動', '機械学習モデル', '顧客プレゼン'],
    zh: ['数据库设计', '网页应用开发', '手机端升级', '云端迁移', '安全审计', 'API接口对接', 'UI/UX重新设计', '营销推广活动', '机器学习模型', '客户演示汇报'],
    ko: ['데이터베이스 설계', '웹 애플리케이션 개발', '모바일 앱 업그레이드', '클라우드 마이그레이션', '보안 감사', 'API 연동', 'UI/UX 리디자인', '마케팅 캠페인', '머신러닝 모델', '고객 프레젠테이션'],
    vi: ['Thiết kế Database', 'Phát triển Web App', 'Nâng cấp Mobile App', 'Chuyển đổi Cloud', 'Kiểm toán Bảo mật', 'Tích hợp API', 'Thiết kế lại UI/UX', 'Chiến dịch Marketing', 'Mô hình Machine Learning', 'Thuyết trình Khách hàng']
  }
};

// Mẫu hội thoại (templates) theo chủ đề
// Cấu trúc mỗi line: [TargetText, ViTranslation/EnTranslation_for_vi]
const TEMPLATES = {
  en: {
    'Daily Conversation': [
      {
        title: "Daily Greeting & Plans",
        description: "A conversation between two friends talking about plans for the day.",
        sentences: [
          ["Hi {name1}, how are you doing today? | Chào {name1}, hôm nay bạn thế nào rồi?", "A"],
          ["Hi {name2}, I am doing great! Are you free this afternoon? | Chào {name2}, tôi rất khỏe! Chiều nay bạn có rảnh không?", "B"],
          ["Yes, I am free. Let us go to {place} for a drink. | Có, tôi rảnh. Cùng đến {place} uống gì đó đi.", "A"],
          ["That sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?", "B"],
          ["How about three o'clock? I will bring my {item}. | Khoảng ba giờ thì sao? Tôi sẽ mang theo {item} của mình.", "A"],
          ["Perfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ.", "B"]
        ]
      },
      {
        title: "Borrowing {item}",
        description: "Asking a friend to borrow an item and discussing return time.",
        sentences: [
          ["Hey {name1}, do you have a spare {item} I can borrow? | Này {name1}, bạn có thừa chiếc {item} nào cho tôi mượn không?", "A"],
          ["Yes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?", "B"],
          ["I need it to work on the {project} project. | Tôi cần nó để làm việc với dự án {project}.", "A"],
          ["No problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.", "B"],
          ["Thank you, {name2}! You are always so helpful. | Cảm ơn {name2}! Bạn luôn luôn rất tốt bụng.", "A"]
        ]
      }
    ],
    'Travel': [
      {
        title: "Lost at {place}",
        description: "Asking for help to locate a lost personal item at a tourist spot.",
        sentences: [
          ["Excuse me, {name1}, I think I lost my {item} here. | Xin lỗi {name1}, tôi nghĩ tôi đã đánh mất chiếc {item} ở đây.", "A"],
          ["Oh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?", "B"],
          ["I think I left it near the entrance of {place}. | Tôi nghĩ tôi đã để quên nó gần lối vào {place}.", "A"],
          ["Let us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.", "B"],
          ["Thank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi.", "A"]
        ]
      },
      {
        title: "Ordering {food} at restaurant",
        description: "A customer ordering a local meal at a restaurant from a waiter.",
        sentences: [
          ["Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?", "A"],
          ["Yes, I would like to try the local {food}. | Vâng, tôi muốn dùng thử món {food} đặc sản ở đây.", "B"],
          ["Excellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?", "A"],
          ["Please give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.", "B"],
          ["Sure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa.", "A"]
        ]
      }
    ],
    'Business': [
      {
        title: "Update on {project}",
        description: "A manager asking for status updates regarding a current business project.",
        sentences: [
          ["Good morning {name1}, can you give me an update on {project}? | Chào buổi sáng {name1}, bạn có thể cập nhật cho tôi về dự án {project} không?", "A"],
          ["We are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.", "B"],
          ["Excellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?", "A"],
          ["Not at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.", "B"],
          ["Great. Let us present the final results to {name2} next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với {name2} vào tuần tới.", "A"]
        ]
      }
    ],
    'IELTS': [
      {
        title: "Describing {item}",
        description: "An IELTS Speaking cue card question asking to describe a useful item.",
        sentences: [
          ["Examiner: Tell me about a useful {item} that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ {item} hữu ích mà bạn sở hữu.", "A"],
          ["Candidate: I would like to describe my {item}, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc {item} của mình, thứ tôi đã mua năm ngoái.", "B"],
          ["Candidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.", "B"],
          ["Candidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.", "B"],
          ["Examiner: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo.", "A"]
        ]
      }
    ],
    'Construction': [
      {
        title: "Site safety check at {place}",
        description: "An engineer checking scaffolding and worker equipment status on-site.",
        sentences: [
          ["Engineer: Check the scaffolding safety at {place} before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại {place} trước khi làm việc.", "A"],
          ["Worker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.", "B"],
          ["Engineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.", "A"],
          ["Worker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành.", "B"]
        ]
      }
    ]
  },
  ja: {
    'Daily Conversation': [
      {
        title: "日常の挨拶と予定",
        description: "友達同士で一日の予定について話し合っている様子。",
        sentences: [
          ["{name1}さん、こんにちは！今日の調子はどうですか？ | Chào anh {name1}! Hôm nay thế nào rồi?", "A"],
          ["{name2}さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh {name2}. Tôi khỏe! Chiều nay anh rảnh không?", "B"],
          ["はい、空いています。{place}でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra {place} uống trà chút không?", "A"],
          ["いいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?", "B"],
          ["３時はどうですか？私の新しい{item}もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc {item} mới của tôi.", "A"],
          ["分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ.", "B"]
        ]
      }
    ],
    'Travel': [
      {
        title: "レストランで{food}を注文する",
        description: "日本のレストランで地元の料理を注文する会話。",
        sentences: [
          ["いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?", "A"],
          ["はい、この地域の{food}をお願いします。 | Vâng, cho tôi một phần {food} đặc sản vùng này nhé.", "B"],
          ["かしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?", "A"],
          ["冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.", "B"],
          ["少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ.", "A"]
        ]
      },
      {
        title: "駅で{place}への行き方を尋ねる",
        description: "観光客が駅のスタッフに目的地への道を尋ねる会話。",
        sentences: [
          ["すみません、{place}へはどう行けばいいですか？ | Xin hỏi, đi đến {place} như thế nào ạ?", "A"],
          ["ここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.", "B"],
          ["信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?", "A"],
          ["次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.", "B"],
          ["ご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!", "A"]
        ]
      }
    ]
  },
  zh: {
    'Daily Conversation': [
      {
        title: "日常问候与喝茶",
        description: "朋友之间日常问候并约好一起去喝下午茶的对话。",
        sentences: [
          ["{name1}，你好！今天过得怎么样？ | {name1}, chào bạn! Hôm nay thế nào rồi?", "A"],
          ["{name2}，我很好。你今天下午有空吗？ | {name2}, tôi rất khỏe. Chiều nay bạn có rảnh không?", "B"],
          ["我有空，我们要不要去{place}喝杯茶？ | Tôi rảnh, chúng ta có muốn đi {place} uống tách trà không?", "A"],
          ["那太好了！我们要带上{item}吗？ | Thế thì tốt quá! Chúng ta có cần mang theo {item} không?", "B"],
          ["带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.", "A"],
          ["好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!", "B"]
        ]
      }
    ],
    'Travel': [
      {
        title: "在餐馆点{food}",
        description: "客人在中餐馆点当地特色菜的对话。",
        sentences: [
          ["服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?", "A"],
          ["可以的，请问您想尝尝我们的特色{food}吗？ | Được ạ, xin hỏi quý khách có muốn thử món {food} đặc sản của chúng tôi không?", "B"],
          ["好的，来一份{food}，再加一碗白米饭。 | Được, cho một phần {food}, và thêm một bát cơm trắng.", "A"],
          ["好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?", "B"],
          ["请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn.", "A"]
        ]
      }
    ]
  },
  ko: {
    'Daily Conversation': [
      {
        title: "안부 묻기와 약속",
        description: "친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
        sentences: [
          ["{name1}씨, 오랜만이에요! 잘 지냈어요? | Chào anh {name1}, lâu rồi không gặp! Anh khỏe không?", "A"],
          ["아, {name2}씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh {name2}! Vâng, tôi khỏe. Chiều nay anh có thời gian không?", "B"],
          ["네, 괜찮아요. {place} 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần {place} đi.", "A"],
          ["좋은 생각이에요. 제 새로운 {item}도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc {item} mới của tôi.", "B"],
          ["좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé.", "A"]
        ]
      }
    ],
    'Travel': [
      {
        title: "식당에서 {food} 주문하기",
        description: "식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
        sentences: [
          ["주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?", "A"],
          ["여기서 가장 인기 있는 {food}로 주세요. | Cho tôi món {food} được ưa chuộng nhất ở đây đi.", "B"],
          ["네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?", "A"],
          ["많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.", "B"],
          ["네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi.", "A"]
        ]
      }
    ]
  },
  vi: {
    'Daily Conversation': [
      {
        title: "Chào hỏi và hỏi thăm công việc",
        description: "Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
        sentences: [
          ["Chào {name1}, lâu quá không gặp. Dạo này thế nào rồi? | Hello {name1}, long time no see. How have you been lately?", "A"],
          ["Chào {name2}, mình vẫn khỏe. Công việc ở {place} vẫn tốt chứ? | Hello {name2}, I am fine. Is your work at {place} still going well?", "B"],
          ["Cũng tạm ổn bạn ạ, dạo này mình đang làm dự án {project}. | It is okay, lately I am working on the {project} project.", "A"],
          ["Tuyệt vời quá! Khi nào rảnh mang {item} ra cho mình xem nhé. | That is wonderful! When you are free, bring your {item} to show me.", "B"],
          ["Nhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!", "A"]
        ]
      }
    ]
  }
};

// Hàm sinh ngẫu nhiên phần tử từ mảng
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Hàm sinh 1000 bài học
function generateLessons() {
  const generated = [];
  const targetTotal = 1000;
  
  // Tỷ lệ phân bổ ngôn ngữ mong muốn
  // en: 300, ja: 200, zh: 200, ko: 200, vi: 100
  const langs = ['en', 'ja', 'zh', 'ko', 'vi'];
  const langTargets = { en: 300, ja: 200, zh: 200, ko: 200, vi: 100 };
  const langCounts = { en: 0, ja: 0, zh: 0, ko: 0, vi: 0 };
  
  // Các danh mục và độ khó
  const categories = ['Daily Conversation', 'Travel', 'Business', 'IELTS', 'Construction'];
  const difficulties = ['Beginner', 'Normal', 'Advanced'];
  
  let currentId = 24; // Bắt đầu từ ID 24 vì gốc có 23 bài
  
  while (generated.length < targetTotal) {
    // Chọn ngôn ngữ còn thiếu chỉ tiêu
    let lang = randomChoice(langs);
    if (langCounts[lang] >= langTargets[lang]) {
      // Tìm ngôn ngữ khác chưa đủ
      const unfinished = langs.filter(l => langCounts[l] < langTargets[l]);
      if (unfinished.length === 0) break;
      lang = randomChoice(unfinished);
    }
    
    // Lấy danh sách templates của ngôn ngữ đó
    const langTemplates = TEMPLATES[lang];
    const availableCategories = Object.keys(langTemplates);
    if (availableCategories.length === 0) continue;
    
    const category = randomChoice(availableCategories);
    const templateList = langTemplates[category];
    const template = randomChoice(templateList);
    
    // Tạo ngẫu nhiên các giá trị cho placeholder
    const name1 = randomChoice(VOCABULARY.names[lang]);
    let name2 = randomChoice(VOCABULARY.names[lang]);
    while (name2 === name1) {
      name2 = randomChoice(VOCABULARY.names[lang]);
    }
    
    const place = randomChoice(VOCABULARY.places[lang]);
    const item = randomChoice(VOCABULARY.items[lang]);
    const food = randomChoice(VOCABULARY.foods[lang]);
    const project = randomChoice(VOCABULARY.projects[lang]);
    
    // Thay thế placeholder trong các câu nói
    const processedSentences = template.sentences.map(([text, speaker]) => {
      let line = text
        .replace(/{name1}/g, name1)
        .replace(/{name2}/g, name2)
        .replace(/{place}/g, place)
        .replace(/{item}/g, item)
        .replace(/{food}/g, food)
        .replace(/{project}/g, project);
      return line;
    });
    
    const content = processedSentences.join('\n');
    
    // Tạo tiêu đề bài học phong phú
    const difficulty = randomChoice(difficulties);
    const repeat_default = difficulty === 'Beginner' ? 2 : (difficulty === 'Advanced' ? 3 : 2);
    
    // Tạo số bài học ngẫu nhiên cho tiêu đề độc nhất
    const lessonNum = langCounts[lang] + 1;
    let titlePrefix = "";
    let descPrefix = "";
    
    if (lang === 'en') {
      titlePrefix = `Luyện nói: ${template.title} #${lessonNum}`;
      descPrefix = `Bài thực hành Shadowing tiếng Anh chủ đề ${category}.`;
    } else if (lang === 'ja') {
      titlePrefix = `日本語会話: ${template.title} #${lessonNum}`;
      descPrefix = `Bài học tiếng Nhật giao tiếp thực tế cấp độ ${difficulty}.`;
    } else if (lang === 'zh') {
      titlePrefix = `汉语学习: ${template.title} #${lessonNum}`;
      descPrefix = `Bài luyện nói tiếng Trung giao tiếp hàng ngày.`;
    } else if (lang === 'ko') {
      titlePrefix = `한국어 연습: ${template.title} #${lessonNum}`;
      descPrefix = `Bài học Shadowing tiếng Hàn giao tiếp thực tế.`;
    } else if (lang === 'vi') {
      titlePrefix = `Vietnamese Speak: ${template.title} #${lessonNum}`;
      descPrefix = `Vietnamese shadowing lessons for foreigners learning speaking.`;
    }
    
    generated.push({
      id: currentId,
      title: titlePrefix,
      description: `${descPrefix} ${template.description}`,
      language: lang,
      category: category,
      difficulty: difficulty,
      repeat_default: repeat_default,
      content: content
    });
    
    langCounts[lang]++;
    currentId++;
  }
  
  return generated;
}

const newLessons = generateLessons();
const allLessons = [...ORIGINAL_LESSONS, ...newLessons];

// Tạo nội dung file staticLessons.ts
const fileContent = `export interface Lesson {
  id: number;
  title: string;
  description: string;
  language: string;
  category: string;
  difficulty: string;
  repeat_default: number;
  content: string;
}

export const STATIC_LESSONS_LIBRARY: Lesson[] = ${JSON.stringify(allLessons, null, 2)};
`;

const outputPath = path.join(__dirname, 'staticLessons.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');

// Ghi file JSON cho backend sử dụng để đồng bộ cơ sở dữ liệu
try {
  const backendJsonPath = path.resolve(__dirname, '../../../backend/app/staticLessons.json');
  fs.writeFileSync(backendJsonPath, JSON.stringify(allLessons, null, 2), 'utf-8');
  console.log(`Successfully generated JSON file for backend at: ${backendJsonPath}`);
} catch (e) {
  console.log("Could not write backend JSON file: " + e.message);
}

console.log(`Successfully generated 1000 lessons! Total lessons in static database: ${allLessons.length}`);
console.log(`Distribution:`, {
  en: allLessons.filter(l => l.language === 'en').length,
  ja: allLessons.filter(l => l.language === 'ja').length,
  zh: allLessons.filter(l => l.language === 'zh').length,
  ko: allLessons.filter(l => l.language === 'ko').length,
  vi: allLessons.filter(l => l.language === 'vi').length
});
