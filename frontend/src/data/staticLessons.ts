export interface Lesson {
  id: number;
  title: string;
  description: string;
  language: string;
  category: string;
  difficulty: string;
  repeat_default: number;
  content: string;
  is_published?: boolean;
}

export const STATIC_LESSONS_LIBRARY: Lesson[] = [
  {
    "id": 1,
    "title": "Mẹ và bé: Mặc quần áo buổi sáng | Getting Dressed",
    "description": "Đoạn hội thoại ngắn giữa mẹ và bé khi chuẩn bị quần áo để bắt đầu ngày mới.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Mother: Wake up, sweetheart! It is time to get dressed. | Mẹ: Dậy đi con yêu! Đến lúc mặc quần áo rồi.\nBaby: Good morning, mommy. I am still sleepy. | Con: Chào buổi sáng mẹ. Con vẫn còn buồn ngủ lắm.\nMother: Let us put on your favorite blue shirt today. | Mẹ: Hôm nay chúng ta mặc chiếc áo sơ mi màu xanh yêu thích của con nhé.\nBaby: Yes! And I want to wear my red shorts too. | Con: Vâng ạ! Và con cũng muốn mặc chiếc quần đùi màu đỏ nữa.\nMother: Great choice! Put your arms through the sleeves first. | Mẹ: Lựa chọn tuyệt vời! Xỏ tay qua ống tay áo trước nào con.\nBaby: Like this, mommy? I did it by myself! | Con: Thế này hả mẹ? Con tự làm được rồi này!\nMother: Yes, just like that. You are doing a wonderful job! | Mẹ: Đúng rồi, chính thế. Con làm tốt lắm!"
  },
  {
    "id": 2,
    "title": "Mẹ và bé: Đi chơi công viên | Going to the Park",
    "description": "Hội thoại tiếng Anh thông dụng khi mẹ chuẩn bị cho bé đi chơi công viên.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Mother: Do you want to go to the park with me? | Mẹ: Con có muốn đi chơi công viên với mẹ không?\nBaby: Yay! I want to play on the slide and swing. | Con: Dê! Con muốn chơi cầu trượt và xích đu.\nMother: Put on your shoes and grab your water bottle. | Mẹ: Hãy đi giày vào và mang theo bình nước của con nhé.\nBaby: Where is my sun hat, mommy? | Con: Mũ che nắng của con đâu rồi hả mẹ?\nMother: It is on the table near the door. Let us go! | Mẹ: Nó ở trên bàn gần cửa ra vào ấy. Đi thôi con!\nBaby: Look, mommy! There are many beautiful butterflies. | Con: Nhìn kìa mẹ! Có rất nhiều bươm bướm xinh đẹp.\nMother: Yes, they are. Stay close to me, okay? | Mẹ: Đúng vậy. Hãy đi gần mẹ nhé, được không?"
  },
  {
    "id": 3,
    "title": "Mẹ và bé: Dọn dẹp đồ chơi | Tidying Up Toys",
    "description": "Mẹ hướng dẫn bé cách cất đồ chơi gọn gàng sau khi chơi xong.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Mother: We finished playing. Now it is time to tidy up. | Mẹ: Chúng ta chơi xong rồi. Bây giờ đến lúc dọn dẹp thôi.\nBaby: But mommy, I want to keep playing with my blocks. | Con: Nhưng mẹ ơi, con vẫn muốn chơi với các khối hình.\nMother: We can play again tomorrow. Let us put them in the box. | Mẹ: Ngày mai chúng ta lại chơi tiếp nhé. Cùng cất chúng vào hộp nào.\nBaby: Can you help me pick up the toy cars, please? | Con: Mẹ có thể giúp con nhặt mấy chiếc ô tô đồ chơi được không ạ?\nMother: Of course! I will collect the cars, and you collect the blocks. | Mẹ: Tất nhiên rồi! Mẹ sẽ nhặt ô tô, còn con nhặt các khối hình nhé.\nBaby: Look! The room is clean and tidy now. | Con: Nhìn kìa mẹ! Căn phòng bây giờ đã sạch sẽ và ngăn nắp rồi.\nMother: High five! Thank you for being such a good helper. | Mẹ: Đập tay nào! Cảm ơn con vì đã là một người giúp việc ngoan."
  },
  {
    "id": 4,
    "title": "Mẹ và bé: Đánh răng trước khi ngủ | Brushing Teeth",
    "description": "Hội thoại vui vẻ giúp bé tạo thói quen đánh răng sạch sẽ trước khi đi ngủ.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Mother: Brush, brush, brush your teeth! Time to clean them up. | Mẹ: Chải chải chải răng nào! Đến lúc làm sạch răng rồi.\nBaby: My toothbrush has a little dinosaur on it! | Con: Bàn chải đánh răng của con có hình một chú khủng long nhỏ này!\nMother: Put a little toothpaste on it, just like a pea. | Mẹ: Bôi một ít kem đánh răng lên nhé, chỉ bằng hạt đậu thôi.\nBaby: Like this, mommy? It smells like strawberries! | Con: Thế này hả mẹ? Nó có mùi dâu tây thơm quá!\nMother: Yes. Now brush up and down, and round and round. | Mẹ: Đúng rồi. Giờ chải lên chải xuống, và chải vòng tròn nhé.\nBaby: I am spitting out the water now. Spit! | Con: Con đang nhổ nước ra đây ạ. Nhổ!\nMother: Good job! Your teeth are shining and clean now. | Mẹ: Làm tốt lắm! Răng của con bây giờ đã sáng bóng và sạch sẽ rồi."
  },
  {
    "id": 5,
    "title": "Hội thoại công sở: Họp dự án | Business Meeting",
    "description": "Hội thoại tiếng Anh thương mại thường gặp khi thảo luận tiến độ dự án.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Manager: Good morning everyone, let us start the project review. | Trưởng nhóm: Chào buổi sáng mọi người, chúng ta hãy bắt đầu buổi đánh giá dự án.\nEmployee: I have completed the database design. | Nhân viên: Tôi đã hoàn thành việc thiết kế cơ sở dữ liệu.\nManager: That is great news. Are there any delays with the UI design? | Trưởng nhóm: Đó là tin tốt. Có sự chậm trễ nào với thiết kế giao diện không?\nDesigner: No, the templates will be ready by tomorrow afternoon. | Nhà thiết kế: Không ạ, các bản mẫu sẽ sẵn sàng vào chiều mai.\nManager: Perfect! Let us meet again on Friday to test the app. | Trưởng nhóm: Hoàn hảo! Chúng ta hãy gặp lại vào thứ Sáu để kiểm thử ứng dụng."
  },
  {
    "id": 6,
    "title": "Hỏi đường du lịch: Đến ga tàu | Asking for Directions",
    "description": "Mẫu câu hỏi đường đi ga tàu điện ngầm cơ bản dành cho người đi du lịch.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Traveler: Excuse me, could you tell me how to get to the subway station? | Khách: Xin lỗi, bạn có thể chỉ tôi đường đến ga tàu điện ngầm không?\nLocal: Sure. Walk straight down this street for two blocks. | Dân địa phương: Chắc chắn rồi. Đi thẳng con đường này qua hai ngã tư.\nTraveler: Should I turn left or right at the traffic lights? | Khách: Tôi nên rẽ trái hay rẽ phải ở cột đèn giao thông?\nLocal: Turn left, and you will see the station entrance on your right. | Dân địa phương: Rẽ trái, và bạn sẽ thấy lối vào ga ở bên phải.\nTraveler: Thank you so much for your kind help! | Khách: Cảm ơn bạn rất nhiều vì sự giúp đỡ tốt bụng!"
  },
  {
    "id": 7,
    "title": "IELTS Speaking: Cuốn sách yêu thích | Favorite Book",
    "description": "Đoạn nói học thuật mô tả một cuốn sách ảnh hưởng lớn đến cuộc sống.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 2,
    "content": "Candidate: I would like to talk about a book that inspired me deeply. | Thí sinh: Tôi muốn nói về một cuốn sách đã truyền cảm hứng sâu sắc cho tôi.\nExaminer: Please go ahead and describe the details. | Giám khảo: Xin mời tiếp tục và mô tả các chi tiết.\nCandidate: It is a motivational book called The Alchemist. | Thí sinh: Đó là một cuốn sách truyền động lực có tên là Nhà Giả Kim.\nCandidate: The main theme is about pursuing one's destiny. | Thí sinh: Chủ đề chính là về việc theo đuổi định mệnh của mỗi người.\nCandidate: Reading it helped me overcome my fears of failure. | Thí sinh: Đọc nó đã giúp tôi vượt qua nỗi sợ hãi thất bại."
  },
  {
    "id": 8,
    "title": "Xây dựng: Thi công bê tông & An toàn | Concrete Pouring",
    "description": "Từ vựng tiếng Anh kỹ thuật thi công đổ bê tông cốt thép tại công trường.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the steel formwork stability before pouring concrete. | Kỹ sư: Kiểm tra độ ổn định của cốp pha thép trước khi đổ bê tông.\nWorker: Yes, sir. All support props are locked securely. | Công nhân: Vâng thưa kỹ sư. Tất cả các thanh chống phụ đã được khóa chặt.\nEngineer: Remember to wear your safety harness on the scaffolding. | Kỹ sư: Nhớ thắt dây an toàn khi đứng trên giàn giáo nhé.\nWorker: Understood. Safety is always our top priority. | Công nhân: Đã rõ. An toàn luôn là ưu tiên hàng đầu của chúng tôi.\nEngineer: Good. Let us start the concrete pump now. | Kỹ sư: Tốt. Hãy bắt đầu khởi động máy bơm bê tông ngay nào."
  },
  {
    "id": 9,
    "title": "Tiếng Việt: Chào hỏi xã giao | Vietnamese Greetings",
    "description": "Mẫu câu tiếng Việt cơ bản để chào hỏi và hỏi thăm sức khỏe hàng ngày.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Nam: Xin chào, rất vui được gặp bạn hôm nay! | Nam: Hello, nice to meet you today!\nLan: Chào Nam! Dạo này công việc của bạn thế nào rồi? | Lan: Hello Nam! How is your work going lately?\nNam: Cảm ơn bạn, tôi vẫn bình thường. Còn bạn thì sao? | Nam: Thank you, I am doing fine. And you?\nLan: Tôi mới chuyển sang một công việc thiết kế mới. | Lan: I have just switched to a new design job.\nNam: Chúc mừng nhé! Cuối tuần này chúng ta đi uống cà phê đi. | Nam: Congratulations! Let us go for coffee this weekend."
  },
  {
    "id": 10,
    "title": "Tiếng Việt: Gọi món ăn ở nhà hàng | Ordering Food",
    "description": "Giao tiếp tại quán ăn khi muốn gọi phở và các món đặc sản Việt Nam.",
    "language": "vi",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Customer: Cho tôi xin thực đơn của nhà hàng ngày hôm nay nhé. | Customer: Please give me the restaurant menu for today.\nWaiter: Vâng ạ. Quý khách muốn dùng phở bò hay phở gà? | Waiter: Yes. Would you like beef noodle soup or chicken noodle soup?\nCustomer: Cho tôi một bát phở bò tái chín và một ly trà đá. | Customer: Give me a bowl of beef noodle soup and an iced tea.\nWaiter: Dạ được. Quý khách có muốn dùng thêm quẩy nóng không ạ? | Waiter: Sure. Would you like some hot fried dough sticks too?\nCustomer: Có chứ, cho tôi thêm một đĩa quẩy nhé. Xin cảm ơn! | Customer: Yes, please add a plate of dough sticks. Thank you!"
  },
  {
    "id": 11,
    "title": "Tiếng Nhật: Mua vé tàu Shinkansen | Shinkansen Ticket",
    "description": "Mẫu câu hội thoại tiếng Nhật thực tế khi mua vé tàu cao tốc tại quầy.",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Passenger: すみません、東京行きのチケットを一枚ください。 | Hành khách: Xin lỗi, cho tôi mua một vé đi Tokyo.\nClerk: 指定席と自由席のどちらがよろしいですか？ | Nhân viên: Quý khách muốn vé ghế chỉ định hay ghế tự do?\nPassenger: 指定席でお願いします。窓側の席はありますか？ | Hành khách: Cho tôi vé ghế chỉ định. Có ghế cạnh cửa sổ không?\nClerk: はい、空いています。チケットは一万二千円になります。 | Nhân viên: Vâng, còn trống ạ. Vé của quý khách là 12,000 Yên.\nPassenger: ありがとう。クレジットカードは使えますか？ | Hành khách: Cảm ơn. Tôi có thể dùng thẻ tín dụng được không?"
  },
  {
    "id": 12,
    "title": "Tiếng Nhật: Chào hỏi buổi sáng | Japanese Greetings",
    "description": "Các câu giao tiếp tiếng Nhật ngắn gọn bắt đầu ngày mới.",
    "language": "ja",
    "category": "Japanese",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "A: おはようございます。今日もいい天気ですね。 | A: Chào buổi sáng. Hôm nay thời tiết cũng đẹp nhỉ.\nB: そうですね。今週はずっと晴れるみたいですよ。 | B: Đúng thế. Tuần này nghe nói trời sẽ nắng suốt đấy.\nA: 朝ごはんを食べましたか？コーヒーを好みましょう。 | A: Bạn ăn sáng chưa? Cùng uống cà phê nhé.\nB: まだです。駅前のカフェに行きませんか？ | B: Chưa ăn. Chúng ta đến quán cà phê trước ga đi?\nA: いいですね。すぐに行きましょう！ | A: Được đấy. Đi ngay thôi nào!"
  },
  {
    "id": 13,
    "title": "Tiếng Hàn: Tự giới thiệu bản thân | Korean Intro",
    "description": "Học các câu nói tiếng Hàn cơ bản để giới thiệu tên, tuổi và nghề nghiệp.",
    "language": "ko",
    "category": "Korean",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "A: 안녕하세요! 처음 뵙겠습니다. | A: Xin chào! Rất vui được gặp bạn lần đầu.\nB: 안녕하세요! 저는 민우라고 합니다. 이름이 어떻게 되세요? | B: Xin chào! Tôi tên là Min-woo. Tên bạn là gì?\nA: 제 이름은 지수입니다. 베트남에서 왔습니다. | A: Tên tôi là Ji-soo. Tôi đến từ Việt Nam.\nB: 지수 씨, 반가워요. 한국어 공부는 언제 시작했어요? | B: Rất vui được gặp Ji-soo. Bạn bắt đầu học tiếng Hàn từ khi nào?\nA: 세 달 전에 시작했습니다. 아직 많이 서툴러요. | A: Tôi đã bắt đầu từ 3 tháng trước. Tôi vẫn còn kém lắm."
  },
  {
    "id": 14,
    "title": "Tiếng Hàn: Mua sắm ở chợ Dongdaemun | Shopping",
    "description": "Hội thoại mặc cả và hỏi giá khi đi mua sắm quần áo tại Hàn Quốc.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Customer: 이 청바지는 얼마예요? 한번 입어볼 수 있어요? | Khách: Chiếc quần jean này giá bao nhiêu? Tôi mặc thử được không?\nShopkeeper: 오만 원이에요. 피팅룸은 저쪽에 있습니다. | Chủ tiệm: Giá 50,000 Won. Phòng thử đồ ở đằng kia nhé.\nCustomer: 조금 입어봤는데 바지가 너무 큽니다. | Khách: Tôi mặc thử rồi nhưng quần bị rộng quá.\nShopkeeper: 그럼 더 작은 사이즈로 보여드릴게요. 잠시만요. | Chủ tiệm: Vậy tôi sẽ lấy size nhỏ hơn cho bạn xem. Đợi chút nhé.\nCustomer: 고맙습니다. 디자인이 마음에 드네요. | Khách: Cảm ơn. Tôi rất ưng ý kiểu dáng này."
  },
  {
    "id": 15,
    "title": "Tiếng Trung: Trả giá khi mua sắm | Bargaining",
    "description": "Các câu nói tiếng Trung thường dùng để mặc cả giảm giá khi mua quà lưu niệm.",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Customer: 老板，这个茶壶多少钱？ | Khách: Ông chủ, cái ấm trà này bao nhiêu tiền?\nShopkeeper: 一百块钱，这是纯手工做的。 | Chủ tiệm: 100 Tệ, đây là đồ làm thủ công hoàn toàn đấy.\nCustomer: 太贵了，便宜点儿吧，八十块可以吗？ | Khách: Đắt quá, rẻ chút đi, 80 Tệ được không?\nShopkeeper: 最少九十块，不能再便宜了。 | Chủ tiệm: Thấp nhất là 90 Tệ, không thể rẻ hơn nữa đâu.\nCustomer: 行，那就九十块吧，帮我包装一下。 | Khách: Được rồi, vậy 90 Tệ đi, gói giúp tôi nhé."
  },
  {
    "id": 16,
    "title": "Tiếng Trung: Hỏi thăm gia đình | Family Talk",
    "description": "Chủ đề hỏi thăm số lượng thành viên và công việc của mọi người trong nhà.",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "A: 你家有几口人？他们都做什么工作？ | A: Nhà bạn có mấy người? Họ làm công việc gì?\nB: 我家有四口人：爸爸、妈妈、妹妹和我。 | B: Nhà tôi có 4 người: Bố, mẹ, em gái và tôi.\nA: 你妹妹是学生吗？她今年多大？ | A: Em gái bạn là học sinh à? Năm nay cô ấy bao nhiêu tuổi?\nB: 对，她是大学生，今年二十岁了。 | B: Đúng thế, em ấy là sinh viên đại học, năm nay 20 tuổi rồi.\nA: 你父母都退休了吗？ | A: Bố mẹ bạn đã nghỉ hưu chưa?\nB: 爸爸退休了，妈妈还在教书。 | B: Bố tôi nghỉ hưu rồi, mẹ tôi vẫn đang dạy học."
  },
  {
    "id": 17,
    "title": "Tiếng Trung: Ký kết hợp đồng thương mại | Business",
    "description": "Thoại thương mại cấp cao đàm phán ký kết hợp đồng giữa hai đối tác.",
    "language": "zh",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 2,
    "content": "A: 贵公司对合同草案还有什么修改意见吗？ | A: Quý công ty còn ý kiến sửa đổi nào đối với dự thảo hợp đồng không?\nB: 基本没有了，我们对付款方式非常满意。 | B: Cơ bản là không còn nữa, chúng tôi rất hài lòng về phương thức thanh toán.\nA: 那太好了。预祝我们的项目取得圆满 thành công！ | A: Vành thế tốt quá. Chúc dự án của chúng ta thành công viên mãn!\nB: 合作愉快！我们 hôm nay 就正式签字吧。 | B: Hợp tác vui vẻ! Chúng ta hôm nay tiến hành ký kết chính thức nhé.\nA: 好的，我下午三点准时到您办公室。 | A: Vâng, tôi sẽ đến văn phòng của ông đúng 3 giờ chiều."
  },
  {
    "id": 18,
    "title": "Mẹ và bé: Tại sân bay nước ngoài | At the Airport",
    "description": "Mẹ hướng dẫn bé và thực hiện các thủ tục check-in tại sân bay khi chuẩn bị đi nước ngoài.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Mother: Keep your passport in your bag, do not lose it. | Mẹ: Giữ hộ chiếu của con trong túi nhé, đừng làm mất đấy.\nBaby: Where are we going now, mommy? | Con: Bây giờ chúng ta đang đi đâu thế mẹ?\nMother: We are going to the check-in counter to drop our bags. | Mẹ: Chúng ta đang đi đến quầy làm thủ tục để gửi hành lý.\nStaff: Hello, passport and tickets, please. | Nhân viên: Xin chào, vui lòng cho tôi mượn hộ chiếu và vé máy bay.\nMother: Here they are. We have one stroller to check in. | Mẹ: Đây ạ. Chúng tôi có một chiếc xe đẩy em bé cần ký gửi.\nStaff: Sure. Please place your luggage on the scale. | Nhân viên: Chắc chắn rồi. Vui lòng đặt hành lý của bạn lên cân.\nBaby: Look! The plane is so big outside the window! | Con: Nhìn kìa! Chiếc máy bay ngoài cửa sổ to quá mẹ ơi!\nMother: Yes it is! We will board the plane very soon. | Mẹ: Đúng vậy! Chúng ta sẽ lên máy bay sớm thôi."
  },
  {
    "id": 19,
    "title": "Mẹ và bé: Trên chuyến bay | On the Airplane",
    "description": "Mẹ giao tiếp với tiếp viên hàng không để xin nước ấm pha sữa và chăn đắp cho bé.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Mother: Excuse me, could I get some warm water for baby milk? | Mẹ: Xin lỗi, tôi có thể xin một ít nước ấm để pha sữa cho bé không?\nFlight Attendant: Yes, of course. I will bring it right away. | Tiếp viên: Vâng, tất nhiên rồi. Tôi sẽ mang đến ngay lập tức.\nBaby: Mommy, my ears hurt a little bit. | Con: Mẹ ơi, tai con hơi bị đau một chút.\nMother: Drink some water or chew this gummy, it will help. | Mẹ: Uống chút nước hoặc nhai viên kẹo dẻo này nhé, nó sẽ giúp đỡ đau đấy.\nFlight Attendant: Here is your warm water. Do you need a blanket? | Tiếp viên: Nước ấm của chị đây ạ. Chị có cần chăn đắp không?\nMother: Yes, please. A small blanket for my child would be great. | Mẹ: Vâng, làm ơn. Có một chiếc chăn nhỏ cho con tôi thì tốt quá.\nBaby: Thank you, nice lady! | Con: Con cảm ơn cô xinh đẹp!"
  },
  {
    "id": 20,
    "title": "Mẹ học tiếng Nhật: Mua sữa và tã ở siêu thị | Buying Baby Milk and Diapers",
    "description": "Mẫu hội thoại tiếng Nhật cho mẹ hỏi nhân viên siêu thị để tìm mua sữa công thức và tã giấy cho bé.",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Mother: すみません、赤ちゃん用の粉ミルクはどこですか？ | Mẹ: Xin lỗi, sữa bột công thức cho bé ở đâu vậy ạ?\nStaff: あちらのベビー用品コーナーにございます。ご案内します。 | Nhân viên: Ở góc đồ dùng cho bé đằng kia ạ. Tôi sẽ dẫn đường cho chị.\nMother: ありがとうございます。あと、テープタイプのオムツのLサイズはありますか？ | Mẹ: Cảm ơn bạn. Ngoài ra, tã dán size L còn hàng không ạ?\nStaff: はい、パンパースのLサイズなら棚の二段目にございます。 | Nhân viên: Vâng, tã giấy Pampers size L nằm ở ngăn thứ hai của kệ ạ.\nMother: よかった。赤ちゃんの肌に優しいタイプですね。 | Mẹ: May quá. Đây là loại dịu nhẹ cho da em bé đúng không?\nStaff: はい、オーガニックコットン使用で人気の商品です。 | Nhân viên: Vâng, đây là sản phẩm rất được ưa chuộng sử dụng bông hữu cơ ạ."
  },
  {
    "id": 21,
    "title": "Mẹ học tiếng Hàn: Đăng ký khám bệnh cho bé | At the Pediatric Clinic",
    "description": "Hội thoại tại phòng khám nhi ở Hàn Quốc khi mẹ khai báo các triệu chứng ho sốt của bé.",
    "language": "ko",
    "category": "Korean",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Staff: 아기 이름과 생년월일을 적어주세요. 어디가 아픈가요? | Nhân viên: Vui lòng viết tên và ngày sinh của bé. Bé bị đau ở đâu ạ?\nMother: 어제 밤부터 열이 나고 기침을 많이 해요. | Mẹ: Bé bị sốt và ho nhiều từ tối hôm qua ạ.\nStaff: 체온을 먼저 측정하겠습니다. 38.5도네요. | Nhân viên: Tôi sẽ đo nhiệt độ cơ thể trước. Là 38.5 độ ạ.\nDoctor: 목이 조금 부었네요. 감기 기운이 있습니다. | Bác sĩ: Họng của bé hơi sưng một chút. Có dấu hiệu bị cảm lạnh.\nMother: 약은 하루에 몇 번 먹여야 하나요? | Mẹ: Thuốc này phải cho bé uống một ngày mấy lần ạ?\nDoctor: 아침, 점심, 저녁 하루 세 번, 식후 30분에 먹이세요. | Bác sĩ: Hãy cho uống ngày 3 lần sáng, trưa, tối, sau khi ăn 30 phút nhé."
  },
  {
    "id": 22,
    "title": "Mẹ học tiếng Trung: Tìm trường mẫu giáo cho bé | Kindergarten Inquiry",
    "description": "Mẹ hỏi thăm thông tin đăng ký nhập học và các chế độ ăn uống cho con tại trường mầm non.",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 2,
    "content": "Mother: 您好，我想咨询一下三岁孩子的入学申请程序。 | Mẹ: Xin chào, tôi muốn tư vấn về thủ tục nhập học cho trẻ ba tuổi.\nTeacher: 您好！您需要填写申请表，并提供孩子的疫苗接种证明。 | Cô giáo: Chào chị! Chị cần điền vào đơn đăng ký và cung cấp giấy chứng nhận tiêm chủng của bé.\nMother: 这里的班级一般有多少个学生？有几位老师？ | Mẹ: Lớp học ở đây thường có bao nhiêu học sinh? Có mấy giáo viên ạ?\nTeacher: 每个班最多十五个孩子，配备两位老师 and 一位保育员。 | Cô giáo: Mỗi lớp tối đa mười lăm bé, được trang bị hai giáo viên và một bảo mẫu.\nMother: 孩子的午餐是怎么安排的？菜单会每周更新吗？ | Mẹ: Bữa trưa của các bé được sắp xếp thế nào? Thực đơn có cập nhật hàng tuần không?\nTeacher: 是营养配餐，菜单每周五会在家长群公布。 | Cô giáo: Đó là suất ăn dinh dưỡng, thực đơn sẽ được công bố trong nhóm phụ huynh vào mỗi thứ Sáu."
  },
  {
    "id": 23,
    "title": "Mẹ và bé: Làm quen hàng xóm mới | Meeting New Neighbors",
    "description": "Mẹ hướng dẫn bé chào hỏi và giao tiếp xã giao với người hàng xóm nước ngoài thân thiện.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Neighbor: Hello there! Welcome to the neighborhood. | Hàng xóm: Xin chào! Chào mừng gia đình bạn đến với khu phố này.\nMother: Thank you so much. We just moved here last weekend. | Mẹ: Cảm ơn bạn rất nhiều. Chúng tôi vừa mới chuyển đến đây cuối tuần trước.\nNeighbor: What a lovely child. What is your name, little one? | Hàng xóm: Đứa trẻ đáng yêu quá. Tên con là gì thế bé cưng?\nBaby: My name is Liam. I am four years old. | Con: Tên con là Liam. Con bốn tuổi rồi ạ.\nNeighbor: Nice to meet you, Liam! I have a son who is also four. | Hàng xóm: Rất vui được gặp con, Liam! Cô có một đứa con trai cũng bốn tuổi đấy.\nMother: That is wonderful. Maybe they can play together at the park. | Mẹ: Tuyệt vời quá. Có lẽ chúng có thể chơi cùng nhau ở công viên.\nBaby: Can we play toys together, mommy? | Con: Chúng con có thể chơi đồ chơi cùng nhau không mẹ?\nMother: Yes, sweetie. We will invite them over soon. | Mẹ: Được chứ con yêu. Chúng ta sẽ sớm mời họ sang chơi nhé."
  },
  {
    "id": 24,
    "title": "汉语学习: 日常问候与喝茶 #1",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "德明，你好！今天过得怎么样？ | 德明, chào bạn! Hôm nay thế nào rồi?\n丽华，我很好。你今天下午有空吗？ | 丽华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去北京站喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 北京站 uống tách trà không?\n那太好了！我们要带上笔记本吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 25,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #1",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Mai, lâu quá không gặp. Dạo này thế nào rồi? | Hello Mai, long time no see. How have you been lately?\nChào Hải, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Hải, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 26,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #2",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào An, lâu quá không gặp. Dạo này thế nào rồi? | Hello An, long time no see. How have you been lately?\nChào Linh, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Linh, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 27,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #1",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、オフィスの会議室へはどう行けばいいですか？ | Xin hỏi, đi đến オフィスの会議室 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 28,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #2",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、歯医者へはどう行けばいいですか？ | Xin hỏi, đi đến 歯医者 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 29,
    "title": "Luyện nói: Update on {project} #1",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Mary, can you give me an update on Database Design? | Chào buổi sáng Mary, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Thomas next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Thomas vào tuần tới."
  },
  {
    "id": 30,
    "title": "한국어 연습: 안부 묻기와 약속 #1",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "서윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서윤, lâu rồi không gặp! Anh khỏe không?\n아, 민서씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민서! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 강남역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 강남역 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 31,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #2",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 32,
    "title": "Luyện nói: Ordering {food} at restaurant #2",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local fruit cup. | Vâng, tôi muốn dùng thử món fruit cup đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 33,
    "title": "日本語会話: 日常の挨拶と予定 #3",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "伊藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 伊藤! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 34,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #3",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hà, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hà, long time no see. How have you been lately?\nChào An, mình vẫn khỏe. Công việc ở văn phòng trung tâm vẫn tốt chứ? | Hello An, I am fine. Is your work at văn phòng trung tâm still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang bình nước ra cho mình xem nhé. | That is wonderful! When you are free, bring your bình nước to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 35,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #4",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、札幌駅へはどう行けばいいですか？ | Xin hỏi, đi đến 札幌駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 36,
    "title": "日本語会話: 日常の挨拶と予定 #5",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\n蓮さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 蓮. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 37,
    "title": "Luyện nói: Site safety check at {place} #3",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the airport terminal before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the airport terminal trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 38,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #6",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、東京タワーへはどう行けばいいですか？ | Xin hỏi, đi đến 東京タワー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 39,
    "title": "한국어 연습: 안부 묻기와 약속 #3",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "지수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지수, lâu rồi không gặp! Anh khỏe không?\n아, 서연씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서연! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 40,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #4",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào Tuấn, mình vẫn khỏe. Công việc ở quán cà phê vẫn tốt chứ? | Hello Tuấn, I am fine. Is your work at quán cà phê still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 41,
    "title": "한국어 연습: 안부 묻기와 약속 #4",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "하은씨, 오랜만이에요! 잘 지냈어요? | Chào anh 하은, lâu rồi không gặp! Anh khỏe không?\n아, 민서씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민서! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 열쇠고리도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 열쇠고리 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 42,
    "title": "한국어 연습: 안부 묻기와 약속 #5",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "서윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서윤, lâu rồi không gặp! Anh khỏe không?\n아, 민준씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민준! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 물통도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 물통 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 43,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #5",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Nhi, lâu quá không gặp. Dạo này thế nào rồi? | Hello Nhi, long time no see. How have you been lately?\nChào Tuấn, mình vẫn khỏe. Công việc ở công viên vẫn tốt chứ? | Hello Tuấn, I am fine. Is your work at công viên still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 44,
    "title": "Luyện nói: Ordering {food} at restaurant #4",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local pizza slice. | Vâng, tôi muốn dùng thử món pizza slice đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 45,
    "title": "Luyện nói: Site safety check at {place} #5",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the library before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the library trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 46,
    "title": "한국어 연습: 안부 묻기와 약속 #6",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "지원씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지원, lâu rồi không gặp! Anh khỏe không?\n아, 정희씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 정희! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 공책도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 공책 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 47,
    "title": "日本語会話: 日常の挨拶と予定 #7",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "蓮さん、こんにちは！今日の調子はどうですか？ | Chào anh 蓮! Hôm nay thế nào rồi?\nさくらさん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh さくら. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいキーホルダーもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc キーホルダー mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 48,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #6",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Thủy, lâu quá không gặp. Dạo này thế nào rồi? | Hello Thủy, long time no see. How have you been lately?\nChào Hùng, mình vẫn khỏe. Công việc ở sân bay vẫn tốt chứ? | Hello Hùng, I am fine. Is your work at sân bay still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chiến dịch Marketing. | It is okay, lately I am working on the Chiến dịch Marketing project.\nTuyệt vời quá! Khi nào rảnh mang mũ chống nắng ra cho mình xem nhé. | That is wonderful! When you are free, bring your mũ chống nắng to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 49,
    "title": "Luyện nói: Daily Greeting & Plans #6",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Thomas, how are you doing today? | Chào Thomas, hôm nay bạn thế nào rồi?\nHi Sarah, I am doing great! Are you free this afternoon? | Chào Sarah, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the library for a drink. | Có, tôi rảnh. Cùng đến the library uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my leather wallet. | Khoảng ba giờ thì sao? Tôi sẽ mang theo leather wallet của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 50,
    "title": "日本語会話: レストランで{food}を注文する #8",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のおにぎりをお願いします。 | Vâng, cho tôi một phần おにぎり đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 51,
    "title": "日本語会話: 日常の挨拶と予定 #9",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "美咲さん、こんにちは！今日の調子はどうですか？ | Chào anh 美咲! Hôm nay thế nào rồi?\n健太さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 健太. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいキーホルダーもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc キーホルダー mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 52,
    "title": "Luyện nói: Borrowing {item} #7",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Chloe, do you have a spare leather wallet I can borrow? | Này Chloe, bạn có thừa chiếc leather wallet nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the UI/UX Redesign project. | Tôi cần nó để làm việc với dự án UI/UX Redesign.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Michael! You are always so helpful. | Cảm ơn Michael! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 53,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #7",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Linh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Linh, long time no see. How have you been lately?\nChào Hoàng, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Hoàng, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 54,
    "title": "汉语学习: 日常问候与喝茶 #2",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "李静，你好！今天过得怎么样？ | 李静, chào bạn! Hôm nay thế nào rồi?\n飞龙，我很好。你今天下午有空吗？ | 飞龙, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 55,
    "title": "汉语学习: 在餐馆点{food} #3",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 56,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #10",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、カフェへはどう行けばいいですか？ | Xin hỏi, đi đến カフェ như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 57,
    "title": "汉语学习: 在餐馆点{food} #4",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 58,
    "title": "Luyện nói: Borrowing {item} #8",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey David, do you have a spare coffee mug I can borrow? | Này David, bạn có thừa chiếc coffee mug nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Security Audit project. | Tôi cần nó để làm việc với dự án Security Audit.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Robert! You are always so helpful. | Cảm ơn Robert! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 59,
    "title": "Luyện nói: Lost at {place} #9",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, David, I think I lost my coffee mug here. | Xin lỗi David, tôi nghĩ tôi đã đánh mất chiếc coffee mug ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the central square. | Tôi nghĩ tôi đã để quên nó gần lối vào the central square.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 60,
    "title": "日本語会話: 日常の挨拶と予定 #11",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "山本さん、こんにちは！今日の調子はどうですか？ | Chào anh 山本! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 61,
    "title": "日本語会話: 日常の挨拶と予定 #12",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "大輝さん、こんにちは！今日の調子はどうですか？ | Chào anh 大輝! Hôm nay thế nào rồi?\n大翔さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大翔. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 62,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #8",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Nam, lâu quá không gặp. Dạo này thế nào rồi? | Hello Nam, long time no see. How have you been lately?\nChào Tuấn, mình vẫn khỏe. Công việc ở văn phòng trung tâm vẫn tốt chứ? | Hello Tuấn, I am fine. Is your work at văn phòng trung tâm still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 63,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #7",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 64,
    "title": "Luyện nói: Lost at {place} #10",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Excuse me, Robert, I think I lost my coffee mug here. | Xin lỗi Robert, tôi nghĩ tôi đã đánh mất chiếc coffee mug ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the coffee shop. | Tôi nghĩ tôi đã để quên nó gần lối vào the coffee shop.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 65,
    "title": "한국어 연습: 안부 묻기와 약속 #8",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "성민씨, 오랜만이에요! 잘 지냈어요? | Chào anh 성민, lâu rồi không gặp! Anh khỏe không?\n아, 민우씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민우! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 66,
    "title": "汉语学习: 日常问候与喝茶 #5",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "徐丽，你好！今天过得怎么样？ | 徐丽, chào bạn! Hôm nay thế nào rồi?\n志强，我很好。你今天下午有空吗？ | 志强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上雨伞吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 雨伞 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 67,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #13",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、歯医者へはどう行けばいいですか？ | Xin hỏi, đi đến 歯医者 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 68,
    "title": "한국어 연습: 안부 묻기와 약속 #9",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "지수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지수, lâu rồi không gặp! Anh khỏe không?\n아, 예은씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 예은! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 69,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #10",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 70,
    "title": "日本語会話: 日常の挨拶と予定 #14",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "結衣さん、こんにちは！今日の調子はどうですか？ | Chào anh 結衣! Hôm nay thế nào rồi?\nさくらさん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh さくら. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 71,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #9",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào Minh, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Minh, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang ví da ra cho mình xem nhé. | That is wonderful! When you are free, bring your ví da to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 72,
    "title": "汉语学习: 日常问候与喝茶 #6",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "刘洋，你好！今天过得怎么样？ | 刘洋, chào bạn! Hôm nay thế nào rồi?\n王芳，我很好。你今天下午有空吗？ | 王芳, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上笔记本吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 73,
    "title": "Luyện nói: Site safety check at {place} #11",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the supermarket before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the supermarket trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 74,
    "title": "汉语学习: 在餐馆点{food} #7",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色牛肉面吗？ | Được ạ, xin hỏi quý khách có muốn thử món 牛肉面 đặc sản của chúng tôi không?\n好的，来一份牛肉面，再加一碗白米饭。 | Được, cho một phần 牛肉面, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 75,
    "title": "Luyện nói: Borrowing {item} #12",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Thomas, do you have a spare sun hat I can borrow? | Này Thomas, bạn có thừa chiếc sun hat nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Database Design project. | Tôi cần nó để làm việc với dự án Database Design.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, John! You are always so helpful. | Cảm ơn John! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 76,
    "title": "Luyện nói: Update on {project} #13",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Paul, can you give me an update on Machine Learning Model? | Chào buổi sáng Paul, bạn có thể cập nhật cho tôi về dự án Machine Learning Model không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to James next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với James vào tuần tới."
  },
  {
    "id": 77,
    "title": "한국어 연습: 안부 묻기와 약속 #11",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "유진씨, 오랜만이에요! 잘 지냈어요? | Chào anh 유진, lâu rồi không gặp! Anh khỏe không?\n아, 도윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 도윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 78,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #10",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Đức, lâu quá không gặp. Dạo này thế nào rồi? | Hello Đức, long time no see. How have you been lately?\nChào Lan, mình vẫn khỏe. Công việc ở văn phòng trung tâm vẫn tốt chứ? | Hello Lan, I am fine. Is your work at văn phòng trung tâm still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 79,
    "title": "한국어 연습: 안부 묻기와 약속 #12",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "서연씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서연, lâu rồi không gặp! Anh khỏe không?\n아, 민준씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민준! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 80,
    "title": "汉语学习: 日常问候与喝茶 #8",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "李静，你好！今天过得怎么样？ | 李静, chào bạn! Hôm nay thế nào rồi?\n王芳，我很好。你今天下午有空吗？ | 王芳, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去北京站喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 北京站 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 81,
    "title": "Luyện nói: Describing {item} #14",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful smartphone that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ smartphone hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my smartphone, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc smartphone của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 82,
    "title": "한국어 연습: 안부 묻기와 약속 #13",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "지원씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지원, lâu rồi không gặp! Anh khỏe không?\n아, 유진씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 유진! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 83,
    "title": "汉语学习: 日常问候与喝茶 #9",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "李静，你好！今天过得怎么样？ | 李静, chào bạn! Hôm nay thế nào rồi?\n刘洋，我很好。你今天下午有空吗？ | 刘洋, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去南京路喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 南京路 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 84,
    "title": "한국어 연습: 안부 묻기와 약속 #14",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "도윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 도윤, lâu rồi không gặp! Anh khỏe không?\n아, 수빈씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 수빈! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 한강공원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 한강공원 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 85,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #11",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Trang, lâu quá không gặp. Dạo này thế nào rồi? | Hello Trang, long time no see. How have you been lately?\nChào Sơn, mình vẫn khỏe. Công việc ở siêu thị vẫn tốt chứ? | Hello Sơn, I am fine. Is your work at siêu thị still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế lại UI/UX. | It is okay, lately I am working on the Thiết kế lại UI/UX project.\nTuyệt vời quá! Khi nào rảnh mang bình nước ra cho mình xem nhé. | That is wonderful! When you are free, bring your bình nước to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 86,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #15",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 잡채로 주세요. | Cho tôi món 잡채 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 87,
    "title": "Luyện nói: Update on {project} #15",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Kevin, can you give me an update on Client Presentation? | Chào buổi sáng Kevin, bạn có thể cập nhật cho tôi về dự án Client Presentation không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Mary next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Mary vào tuần tới."
  },
  {
    "id": 88,
    "title": "Luyện nói: Ordering {food} at restaurant #16",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local fried chicken. | Vâng, tôi muốn dùng thử món fried chicken đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 89,
    "title": "한국어 연습: 안부 묻기와 약속 #16",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "민서씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민서, lâu rồi không gặp! Anh khỏe không?\n아, 동현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 동현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 공책도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 공책 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 90,
    "title": "汉语学习: 在餐馆点{food} #10",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 91,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #12",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Hoa, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoa, long time no see. How have you been lately?\nChào Thủy, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Thủy, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 92,
    "title": "한국어 연습: 안부 묻기와 약속 #17",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "도윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 도윤, lâu rồi không gặp! Anh khỏe không?\n아, 동현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 동현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 물통도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 물통 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 93,
    "title": "한국어 연습: 안부 묻기와 약속 #18",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "정희씨, 오랜만이에요! 잘 지냈어요? | Chào anh 정희, lâu rồi không gặp! Anh khỏe không?\n아, 준호씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 준호! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 가죽 지갑도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 가죽 지갑 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 94,
    "title": "Luyện nói: Site safety check at {place} #17",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the dental clinic before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the dental clinic trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 95,
    "title": "汉语学习: 日常问候与喝茶 #11",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "德明，你好！今天过得怎么样？ | 德明, chào bạn! Hôm nay thế nào rồi?\n徐丽，我很好。你今天下午有空吗？ | 徐丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 96,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #19",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 97,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #13",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Sơn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Sơn, long time no see. How have you been lately?\nChào Linh, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello Linh, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thuyết trình Khách hàng. | It is okay, lately I am working on the Thuyết trình Khách hàng project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 98,
    "title": "Luyện nói: Site safety check at {place} #18",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the supermarket before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the supermarket trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 99,
    "title": "한국어 연습: 안부 묻기와 약속 #20",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "유진씨, 오랜만이에요! 잘 지냈어요? | Chào anh 유진, lâu rồi không gặp! Anh khỏe không?\n아, 지수씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지수! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 100,
    "title": "汉语学习: 日常问候与喝茶 #12",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "明哲，你好！今天过得怎么样？ | 明哲, chào bạn! Hôm nay thế nào rồi?\n李军，我很好。你今天下午有空吗？ | 李军, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 101,
    "title": "Luyện nói: Daily Greeting & Plans #19",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hi Jessica, how are you doing today? | Chào Jessica, hôm nay bạn thế nào rồi?\nHi Kevin, I am doing great! Are you free this afternoon? | Chào Kevin, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the coffee shop for a drink. | Có, tôi rảnh. Cùng đến the coffee shop uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my coffee mug. | Khoảng ba giờ thì sao? Tôi sẽ mang theo coffee mug của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 102,
    "title": "한국어 연습: 안부 묻기와 약속 #21",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "민우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민우, lâu rồi không gặp! Anh khỏe không?\n아, 현우씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 현우! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 103,
    "title": "汉语学习: 在餐馆点{food} #13",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 104,
    "title": "汉语学习: 在餐馆点{food} #14",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 105,
    "title": "한국어 연습: 안부 묻기와 약속 #22",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "성민씨, 오랜만이에요! 잘 지냈어요? | Chào anh 성민, lâu rồi không gặp! Anh khỏe không?\n아, 지훈씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지훈! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 공책도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 공책 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 106,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #23",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 107,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #15",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、歯医者へはどう行けばいいですか？ | Xin hỏi, đi đến 歯医者 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 108,
    "title": "日本語会話: 日常の挨拶と予定 #16",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "優斗さん、こんにちは！今日の調子はどうですか？ | Chào anh 優斗! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 109,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #17",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、代々木公園へはどう行けばいいですか？ | Xin hỏi, đi đến 代々木公園 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 110,
    "title": "日本語会話: 日常の挨拶と予定 #18",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "優斗さん、こんにちは！今日の調子はどうですか？ | Chào anh 優斗! Hôm nay thế nào rồi?\n伊藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 伊藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 111,
    "title": "한국어 연습: 안부 묻기와 약속 #24",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "성민씨, 오랜만이에요! 잘 지냈어요? | Chào anh 성민, lâu rồi không gặp! Anh khỏe không?\n아, 서연씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서연! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 112,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #14",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào An, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello An, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chiến dịch Marketing. | It is okay, lately I am working on the Chiến dịch Marketing project.\nTuyệt vời quá! Khi nào rảnh mang ví da ra cho mình xem nhé. | That is wonderful! When you are free, bring your ví da to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 113,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #25",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 114,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #15",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Linh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Linh, long time no see. How have you been lately?\nChào Minh, mình vẫn khỏe. Công việc ở công viên vẫn tốt chứ? | Hello Minh, I am fine. Is your work at công viên still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thuyết trình Khách hàng. | It is okay, lately I am working on the Thuyết trình Khách hàng project.\nTuyệt vời quá! Khi nào rảnh mang mũ chống nắng ra cho mình xem nhé. | That is wonderful! When you are free, bring your mũ chống nắng to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 115,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #16",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào Sơn, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Sơn, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 116,
    "title": "한국어 연습: 안부 묻기와 약속 #26",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "서연씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서연, lâu rồi không gặp! Anh khỏe không?\n아, 도윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 도윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 도서관 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 도서관 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 117,
    "title": "Luyện nói: Site safety check at {place} #20",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the subway station before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the subway station trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 118,
    "title": "汉语学习: 在餐馆点{food} #15",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色春卷吗？ | Được ạ, xin hỏi quý khách có muốn thử món 春卷 đặc sản của chúng tôi không?\n好的，来一份春卷，再加一碗白米饭。 | Được, cho một phần 春卷, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 119,
    "title": "日本語会話: レストランで{food}を注文する #19",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の天ぷらをお願いします。 | Vâng, cho tôi một phần 天ぷら đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 120,
    "title": "한국어 연습: 안부 묻기와 약속 #27",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "준호씨, 오랜만이에요! 잘 지냈어요? | Chào anh 준호, lâu rồi không gặp! Anh khỏe không?\n아, 도윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 도윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 물통도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 물통 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 121,
    "title": "汉语学习: 在餐馆点{food} #16",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色春卷吗？ | Được ạ, xin hỏi quý khách có muốn thử món 春卷 đặc sản của chúng tôi không?\n好的，来一份春卷，再加一碗白米饭。 | Được, cho một phần 春卷, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 122,
    "title": "Luyện nói: Update on {project} #21",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Linda, can you give me an update on Cloud Migration? | Chào buổi sáng Linda, bạn có thể cập nhật cho tôi về dự án Cloud Migration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Mark next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Mark vào tuần tới."
  },
  {
    "id": 123,
    "title": "Luyện nói: Describing {item} #22",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful laptop computer that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ laptop computer hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my laptop computer, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc laptop computer của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 124,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #17",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Mai, lâu quá không gặp. Dạo này thế nào rồi? | Hello Mai, long time no see. How have you been lately?\nChào Hùng, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello Hùng, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Tích hợp API. | It is okay, lately I am working on the Tích hợp API project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 125,
    "title": "Luyện nói: Update on {project} #23",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Michael, can you give me an update on Security Audit? | Chào buổi sáng Michael, bạn có thể cập nhật cho tôi về dự án Security Audit không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Emily next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Emily vào tuần tới."
  },
  {
    "id": 126,
    "title": "Luyện nói: Describing {item} #24",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful water bottle that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ water bottle hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my water bottle, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc water bottle của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 127,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #18",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Sơn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Sơn, long time no see. How have you been lately?\nChào Mai, mình vẫn khỏe. Công việc ở siêu thị vẫn tốt chứ? | Hello Mai, I am fine. Is your work at siêu thị still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 128,
    "title": "Luyện nói: Update on {project} #25",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Sophia, can you give me an update on Cloud Migration? | Chào buổi sáng Sophia, bạn có thể cập nhật cho tôi về dự án Cloud Migration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Mark next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Mark vào tuần tới."
  },
  {
    "id": 129,
    "title": "Luyện nói: Daily Greeting & Plans #26",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Sarah, how are you doing today? | Chào Sarah, hôm nay bạn thế nào rồi?\nHi Sophia, I am doing great! Are you free this afternoon? | Chào Sophia, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the airport terminal for a drink. | Có, tôi rảnh. Cùng đến the airport terminal uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my smartphone. | Khoảng ba giờ thì sao? Tôi sẽ mang theo smartphone của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 130,
    "title": "日本語会話: 日常の挨拶と予定 #20",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "田中さん、こんにちは！今日の調子はどうですか？ | Chào anh 田中! Hôm nay thế nào rồi?\n高橋さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 高橋. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 131,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #19",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Vy, lâu quá không gặp. Dạo này thế nào rồi? | Hello Vy, long time no see. How have you been lately?\nChào Hoàng, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Hoàng, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế lại UI/UX. | It is okay, lately I am working on the Thiết kế lại UI/UX project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 132,
    "title": "日本語会話: レストランで{food}を注文する #21",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のおにぎりをお願いします。 | Vâng, cho tôi một phần おにぎり đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 133,
    "title": "汉语学习: 日常问候与喝茶 #17",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "德明，你好！今天过得怎么样？ | 德明, chào bạn! Hôm nay thế nào rồi?\n陈杰，我很好。你今天下午有空吗？ | 陈杰, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 134,
    "title": "汉语学习: 在餐馆点{food} #18",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 135,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #20",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Linh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Linh, long time no see. How have you been lately?\nChào Đức, mình vẫn khỏe. Công việc ở siêu thị vẫn tốt chứ? | Hello Đức, I am fine. Is your work at siêu thị still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang ví da ra cho mình xem nhé. | That is wonderful! When you are free, bring your ví da to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 136,
    "title": "Luyện nói: Daily Greeting & Plans #27",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Mary, how are you doing today? | Chào Mary, hôm nay bạn thế nào rồi?\nHi Linda, I am doing great! Are you free this afternoon? | Chào Linda, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the coffee shop for a drink. | Có, tôi rảnh. Cùng đến the coffee shop uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my laptop computer. | Khoảng ba giờ thì sao? Tôi sẽ mang theo laptop computer của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 137,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #21",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Linh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Linh, long time no see. How have you been lately?\nChào Phong, mình vẫn khỏe. Công việc ở siêu thị vẫn tốt chứ? | Hello Phong, I am fine. Is your work at siêu thị still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang cuốn sổ ra cho mình xem nhé. | That is wonderful! When you are free, bring your cuốn sổ to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 138,
    "title": "日本語会話: 日常の挨拶と予定 #22",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "鈴木さん、こんにちは！今日の調子はどうですか？ | Chào anh 鈴木! Hôm nay thế nào rồi?\n蓮さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 蓮. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。図書館でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 図書館 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 139,
    "title": "日本語会話: レストランで{food}を注文する #23",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のたこ焼きをお願いします。 | Vâng, cho tôi một phần たこ焼き đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 140,
    "title": "汉语学习: 在餐馆点{food} #19",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 141,
    "title": "Luyện nói: Daily Greeting & Plans #28",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi John, how are you doing today? | Chào John, hôm nay bạn thế nào rồi?\nHi Daniel, I am doing great! Are you free this afternoon? | Chào Daniel, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the subway station for a drink. | Có, tôi rảnh. Cùng đến the subway station uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my keychain. | Khoảng ba giờ thì sao? Tôi sẽ mang theo keychain của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 142,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #24",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、札幌駅へはどう行けばいいですか？ | Xin hỏi, đi đến 札幌駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 143,
    "title": "Luyện nói: Site safety check at {place} #29",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the library before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the library trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 144,
    "title": "日本語会話: 日常の挨拶と予定 #25",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "渡辺さん、こんにちは！今日の調子はどうですか？ | Chào anh 渡辺! Hôm nay thế nào rồi?\n健太さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 健太. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 145,
    "title": "Luyện nói: Borrowing {item} #30",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Sarah, do you have a spare water bottle I can borrow? | Này Sarah, bạn có thừa chiếc water bottle nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Database Design project. | Tôi cần nó để làm việc với dự án Database Design.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Chloe! You are always so helpful. | Cảm ơn Chloe! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 146,
    "title": "汉语学习: 日常问候与喝茶 #20",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "李静，你好！今天过得怎么样？ | 李静, chào bạn! Hôm nay thế nào rồi?\n晓华，我很好。你今天下午有空吗？ | 晓华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 147,
    "title": "汉语学习: 日常问候与喝茶 #21",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "王芳，你好！今天过得怎么样？ | 王芳, chào bạn! Hôm nay thế nào rồi?\n飞龙，我很好。你今天下午有空吗？ | 飞龙, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上背包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 背包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 148,
    "title": "汉语学习: 日常问候与喝茶 #22",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "李静，你好！今天过得怎么样？ | 李静, chào bạn! Hôm nay thế nào rồi?\n建国，我很好。你今天下午有空吗？ | 建国, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 149,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #22",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Hải, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hải, long time no see. How have you been lately?\nChào Linh, mình vẫn khỏe. Công việc ở quán cà phê vẫn tốt chứ? | Hello Linh, I am fine. Is your work at quán cà phê still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 150,
    "title": "Luyện nói: Site safety check at {place} #31",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the downtown office before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the downtown office trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 151,
    "title": "日本語会話: 日常の挨拶と予定 #26",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "鈴木さん、こんにちは！今日の調子はどうですか？ | Chào anh 鈴木! Hôm nay thế nào rồi?\n蓮さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 蓮. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。図書館でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 図書館 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 152,
    "title": "日本語会話: 日常の挨拶と予定 #27",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "大翔さん、こんにちは！今日の調子はどうですか？ | Chào anh 大翔! Hôm nay thế nào rồi?\n蓮さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 蓮. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。京都の寺院でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 京都の寺院 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいコーヒーマグもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc コーヒーマグ mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 153,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #23",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào An, lâu quá không gặp. Dạo này thế nào rồi? | Hello An, long time no see. How have you been lately?\nChào Tuấn, mình vẫn khỏe. Công việc ở công viên vẫn tốt chứ? | Hello Tuấn, I am fine. Is your work at công viên still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chiến dịch Marketing. | It is okay, lately I am working on the Chiến dịch Marketing project.\nTuyệt vời quá! Khi nào rảnh mang bình nước ra cho mình xem nhé. | That is wonderful! When you are free, bring your bình nước to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 154,
    "title": "Luyện nói: Update on {project} #32",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Linda, can you give me an update on Client Presentation? | Chào buổi sáng Linda, bạn có thể cập nhật cho tôi về dự án Client Presentation không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Sophia next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Sophia vào tuần tới."
  },
  {
    "id": 155,
    "title": "日本語会話: レストランで{food}を注文する #28",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の抹茶アイスをお願いします。 | Vâng, cho tôi một phần 抹茶アイス đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 156,
    "title": "한국어 연습: 안부 묻기와 약속 #28",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "태현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 태현, lâu rồi không gặp! Anh khỏe không?\n아, 예은씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 예은! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 열쇠고리도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 열쇠고리 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 157,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #29",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、代々木公園へはどう行けばいいですか？ | Xin hỏi, đi đến 代々木公園 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 158,
    "title": "汉语学习: 日常问候与喝茶 #23",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "王芳，你好！今天过得怎么样？ | 王芳, chào bạn! Hôm nay thế nào rồi?\n陈杰，我很好。你今天下午有空吗？ | 陈杰, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去天安门广场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 天安门广场 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 159,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #24",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Vy, lâu quá không gặp. Dạo này thế nào rồi? | Hello Vy, long time no see. How have you been lately?\nChào Hoàng, mình vẫn khỏe. Công việc ở sân bay vẫn tốt chứ? | Hello Hoàng, I am fine. Is your work at sân bay still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang mũ chống nắng ra cho mình xem nhé. | That is wonderful! When you are free, bring your mũ chống nắng to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 160,
    "title": "한국어 연습: 안부 묻기와 약속 #29",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "유진씨, 오랜만이에요! 잘 지냈어요? | Chào anh 유진, lâu rồi không gặp! Anh khỏe không?\n아, 정희씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 정희! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 물통도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 물통 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 161,
    "title": "汉语学习: 在餐馆点{food} #24",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 162,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #30",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 163,
    "title": "Luyện nói: Describing {item} #33",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful coffee mug that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ coffee mug hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my coffee mug, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc coffee mug của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 164,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #25",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hải, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hải, long time no see. How have you been lately?\nChào Sơn, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello Sơn, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang mũ chống nắng ra cho mình xem nhé. | That is wonderful! When you are free, bring your mũ chống nắng to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 165,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #31",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 166,
    "title": "Luyện nói: Daily Greeting & Plans #34",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hi Kevin, how are you doing today? | Chào Kevin, hôm nay bạn thế nào rồi?\nHi Jessica, I am doing great! Are you free this afternoon? | Chào Jessica, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the central square for a drink. | Có, tôi rảnh. Cùng đến the central square uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my notebook. | Khoảng ba giờ thì sao? Tôi sẽ mang theo notebook của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 167,
    "title": "Luyện nói: Describing {item} #35",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful water bottle that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ water bottle hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my water bottle, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc water bottle của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 168,
    "title": "汉语学习: 在餐馆点{food} #25",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色火锅吗？ | Được ạ, xin hỏi quý khách có muốn thử món 火锅 đặc sản của chúng tôi không?\n好的，来一份火锅，再加一碗白米饭。 | Được, cho một phần 火锅, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 169,
    "title": "日本語会話: 日常の挨拶と予定 #30",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "美咲さん、こんにちは！今日の調子はどうですか？ | Chào anh 美咲! Hôm nay thế nào rồi?\n蓮さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 蓮. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 170,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #26",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Phong, lâu quá không gặp. Dạo này thế nào rồi? | Hello Phong, long time no see. How have you been lately?\nChào Lan, mình vẫn khỏe. Công việc ở sân bay vẫn tốt chứ? | Hello Lan, I am fine. Is your work at sân bay still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang cuốn sổ ra cho mình xem nhé. | That is wonderful! When you are free, bring your cuốn sổ to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 171,
    "title": "汉语学习: 日常问候与喝茶 #26",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "刘洋，你好！今天过得怎么样？ | 刘洋, chào bạn! Hôm nay thế nào rồi?\n张敏，我很好。你今天下午有空吗？ | 张敏, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去南京路喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 南京路 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 172,
    "title": "Luyện nói: Daily Greeting & Plans #36",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi Kevin, how are you doing today? | Chào Kevin, hôm nay bạn thế nào rồi?\nHi Elizabeth, I am doing great! Are you free this afternoon? | Chào Elizabeth, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the park for a drink. | Có, tôi rảnh. Cùng đến the park uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my leather wallet. | Khoảng ba giờ thì sao? Tôi sẽ mang theo leather wallet của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 173,
    "title": "Luyện nói: Site safety check at {place} #37",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the subway station before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the subway station trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 174,
    "title": "Luyện nói: Update on {project} #38",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Barbara, can you give me an update on Cloud Migration? | Chào buổi sáng Barbara, bạn có thể cập nhật cho tôi về dự án Cloud Migration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Chloe next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Chloe vào tuần tới."
  },
  {
    "id": 175,
    "title": "한국어 연습: 안부 묻기와 약속 #32",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "민우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민우, lâu rồi không gặp! Anh khỏe không?\n아, 수빈씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 수빈! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 176,
    "title": "한국어 연습: 안부 묻기와 약속 #33",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "준호씨, 오랜만이에요! 잘 지냈어요? | Chào anh 준호, lâu rồi không gặp! Anh khỏe không?\n아, 도윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 도윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 177,
    "title": "日本語会話: 日常の挨拶と予定 #31",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\nさくらさん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh さくら. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 178,
    "title": "한국어 연습: 안부 묻기와 약속 #34",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "민우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민우, lâu rồi không gặp! Anh khỏe không?\n아, 민서씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민서! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 우산도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 우산 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 179,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #32",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、新宿駅へはどう行けばいいですか？ | Xin hỏi, đi đến 新宿駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 180,
    "title": "汉语学习: 日常问候与喝茶 #27",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "王丽，你好！今天过得怎么样？ | 王丽, chào bạn! Hôm nay thế nào rồi?\n王芳，我很好。你今天下午有空吗？ | 王芳, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上笔记本吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 181,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #35",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 182,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #27",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Sơn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Sơn, long time no see. How have you been lately?\nChào Phong, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Phong, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang ví da ra cho mình xem nhé. | That is wonderful! When you are free, bring your ví da to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 183,
    "title": "한국어 연습: 안부 묻기와 약속 #36",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "영수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 영수, lâu rồi không gặp! Anh khỏe không?\n아, 민준씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민준! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 인천공항 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 인천공항 đi.\n좋은 생각이에요. 제 새로운 우산도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 우산 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 184,
    "title": "日本語会話: レストランで{food}を注文する #33",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のうどんをお願いします。 | Vâng, cho tôi một phần うどん đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 185,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #37",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 186,
    "title": "汉语学习: 在餐馆点{food} #28",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 187,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #28",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hà, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hà, long time no see. How have you been lately?\nChào Đức, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Đức, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 188,
    "title": "日本語会話: レストランで{food}を注文する #34",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の牛丼をお願いします。 | Vâng, cho tôi một phần 牛丼 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 189,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #29",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Mai, lâu quá không gặp. Dạo này thế nào rồi? | Hello Mai, long time no see. How have you been lately?\nChào Phong, mình vẫn khỏe. Công việc ở quán cà phê vẫn tốt chứ? | Hello Phong, I am fine. Is your work at quán cà phê still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 190,
    "title": "한국어 연습: 안부 묻기와 약속 #38",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "지수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지수, lâu rồi không gặp! Anh khỏe không?\n아, 태현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 태현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 191,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #30",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào An, lâu quá không gặp. Dạo này thế nào rồi? | Hello An, long time no see. How have you been lately?\nChào Nhi, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Nhi, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang bình nước ra cho mình xem nhé. | That is wonderful! When you are free, bring your bình nước to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 192,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #39",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 193,
    "title": "Luyện nói: Site safety check at {place} #39",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the library before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the library trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 194,
    "title": "Luyện nói: Borrowing {item} #40",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hey Mark, do you have a spare water bottle I can borrow? | Này Mark, bạn có thừa chiếc water bottle nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the API Integration project. | Tôi cần nó để làm việc với dự án API Integration.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Olivia! You are always so helpful. | Cảm ơn Olivia! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 195,
    "title": "한국어 연습: 안부 묻기와 약속 #40",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "정희씨, 오랜만이에요! 잘 지냈어요? | Chào anh 정희, lâu rồi không gặp! Anh khỏe không?\n아, 태현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 태현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 공책도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 공책 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 196,
    "title": "日本語会話: 日常の挨拶と予定 #35",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "伊藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 伊藤! Hôm nay thế nào rồi?\n鈴木さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 鈴木. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 197,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #31",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Nhi, lâu quá không gặp. Dạo này thế nào rồi? | Hello Nhi, long time no see. How have you been lately?\nChào An, mình vẫn khỏe. Công việc ở siêu thị vẫn tốt chứ? | Hello An, I am fine. Is your work at siêu thị still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 198,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #32",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Lan, lâu quá không gặp. Dạo này thế nào rồi? | Hello Lan, long time no see. How have you been lately?\nChào Tuấn, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello Tuấn, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 199,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #41",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 200,
    "title": "汉语学习: 日常问候与喝茶 #29",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n德明，我很好。你今天下午有空吗？ | 德明, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去牙科诊所喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 牙科诊所 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 201,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #33",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Mai, lâu quá không gặp. Dạo này thế nào rồi? | Hello Mai, long time no see. How have you been lately?\nChào Khánh, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Khánh, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 202,
    "title": "Luyện nói: Daily Greeting & Plans #41",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi John, how are you doing today? | Chào John, hôm nay bạn thế nào rồi?\nHi Daniel, I am doing great! Are you free this afternoon? | Chào Daniel, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the airport terminal for a drink. | Có, tôi rảnh. Cùng đến the airport terminal uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my water bottle. | Khoảng ba giờ thì sao? Tôi sẽ mang theo water bottle của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 203,
    "title": "汉语学习: 在餐馆点{food} #30",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 204,
    "title": "Luyện nói: Ordering {food} at restaurant #42",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local fried chicken. | Vâng, tôi muốn dùng thử món fried chicken đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 205,
    "title": "한국어 연습: 안부 묻기와 약속 #42",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "태현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 태현, lâu rồi không gặp! Anh khỏe không?\n아, 서연씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서연! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 도서관 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 도서관 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 206,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #34",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Linh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Linh, long time no see. How have you been lately?\nChào Nhi, mình vẫn khỏe. Công việc ở sân bay vẫn tốt chứ? | Hello Nhi, I am fine. Is your work at sân bay still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chiến dịch Marketing. | It is okay, lately I am working on the Chiến dịch Marketing project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 207,
    "title": "한국어 연습: 안부 묻기와 약속 #43",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "태현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 태현, lâu rồi không gặp! Anh khỏe không?\n아, 도윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 도윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 강남역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 강남역 đi.\n좋은 생각이에요. 제 새로운 열쇠고리도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 열쇠고리 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 208,
    "title": "Luyện nói: Update on {project} #43",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Michael, can you give me an update on Security Audit? | Chào buổi sáng Michael, bạn có thể cập nhật cho tôi về dự án Security Audit không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Chloe next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Chloe vào tuần tới."
  },
  {
    "id": 209,
    "title": "日本語会話: 日常の挨拶と予定 #36",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "佐藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 佐藤! Hôm nay thế nào rồi?\n鈴木さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 鈴木. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。京都の寺院でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 京都の寺院 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 210,
    "title": "Luyện nói: Site safety check at {place} #44",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the library before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the library trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 211,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #35",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Đức, lâu quá không gặp. Dạo này thế nào rồi? | Hello Đức, long time no see. How have you been lately?\nChào Phong, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Phong, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang ví da ra cho mình xem nhé. | That is wonderful! When you are free, bring your ví da to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 212,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #36",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào Phong, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Phong, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 213,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #37",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Mai, lâu quá không gặp. Dạo này thế nào rồi? | Hello Mai, long time no see. How have you been lately?\nChào Tuấn, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Tuấn, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 214,
    "title": "Luyện nói: Borrowing {item} #45",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Linda, do you have a spare notebook I can borrow? | Này Linda, bạn có thừa chiếc notebook nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Mobile App Upgrade project. | Tôi cần nó để làm việc với dự án Mobile App Upgrade.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Sophia! You are always so helpful. | Cảm ơn Sophia! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 215,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #38",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hải, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hải, long time no see. How have you been lately?\nChào Trang, mình vẫn khỏe. Công việc ở quán cà phê vẫn tốt chứ? | Hello Trang, I am fine. Is your work at quán cà phê still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 216,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #44",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 217,
    "title": "日本語会話: 日常の挨拶と予定 #37",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "渡辺さん、こんにちは！今日の調子はどうですか？ | Chào anh 渡辺! Hôm nay thế nào rồi?\n佐藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 佐藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 218,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #45",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 219,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #39",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Đức, lâu quá không gặp. Dạo này thế nào rồi? | Hello Đức, long time no see. How have you been lately?\nChào An, mình vẫn khỏe. Công việc ở siêu thị vẫn tốt chứ? | Hello An, I am fine. Is your work at siêu thị still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang bình nước ra cho mình xem nhé. | That is wonderful! When you are free, bring your bình nước to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 220,
    "title": "Luyện nói: Site safety check at {place} #46",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the coffee shop before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the coffee shop trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 221,
    "title": "汉语学习: 在餐馆点{food} #31",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 222,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #40",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Hà, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hà, long time no see. How have you been lately?\nChào Thủy, mình vẫn khỏe. Công việc ở văn phòng trung tâm vẫn tốt chứ? | Hello Thủy, I am fine. Is your work at văn phòng trung tâm still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 223,
    "title": "日本語会話: 日常の挨拶と予定 #38",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "美咲さん、こんにちは！今日の調子はどうですか？ | Chào anh 美咲! Hôm nay thế nào rồi?\n優斗さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 優斗. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。札幌駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 札幌駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 224,
    "title": "日本語会話: 日常の挨拶と予定 #39",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "伊藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 伊藤! Hôm nay thế nào rồi?\n美咲さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 美咲. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいリュックサックもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc リュックサック mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 225,
    "title": "Luyện nói: Update on {project} #47",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Sophia, can you give me an update on UI/UX Redesign? | Chào buổi sáng Sophia, bạn có thể cập nhật cho tôi về dự án UI/UX Redesign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Barbara next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Barbara vào tuần tới."
  },
  {
    "id": 226,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #40",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、カフェへはどう行けばいいですか？ | Xin hỏi, đi đến カフェ như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 227,
    "title": "日本語会話: 日常の挨拶と予定 #41",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\n渡辺さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 渡辺. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 228,
    "title": "Luyện nói: Describing {item} #48",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful laptop computer that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ laptop computer hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my laptop computer, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc laptop computer của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 229,
    "title": "汉语学习: 日常问候与喝茶 #32",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "李静，你好！今天过得怎么样？ | 李静, chào bạn! Hôm nay thế nào rồi?\n海峰，我很好。你今天下午有空吗？ | 海峰, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去牙科诊所喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 牙科诊所 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 230,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #46",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 231,
    "title": "Luyện nói: Site safety check at {place} #49",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the coffee shop before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the coffee shop trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 232,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #41",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Khánh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Khánh, long time no see. How have you been lately?\nChào Sơn, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Sơn, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang mũ chống nắng ra cho mình xem nhé. | That is wonderful! When you are free, bring your mũ chống nắng to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 233,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #42",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Sơn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Sơn, long time no see. How have you been lately?\nChào Đức, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Đức, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 234,
    "title": "한국어 연습: 안부 묻기와 약속 #47",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "민서씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민서, lâu rồi không gặp! Anh khỏe không?\n아, 도윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 도윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 가죽 지갑도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 가죽 지갑 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 235,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #43",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Trang, lâu quá không gặp. Dạo này thế nào rồi? | Hello Trang, long time no see. How have you been lately?\nChào Phong, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Phong, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 236,
    "title": "한국어 연습: 안부 묻기와 약속 #48",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "영수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 영수, lâu rồi không gặp! Anh khỏe không?\n아, 하은씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 하은! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 근처 슈퍼마켓 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 근처 슈퍼마켓 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 237,
    "title": "Luyện nói: Borrowing {item} #50",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hey David, do you have a spare umbrella I can borrow? | Này David, bạn có thừa chiếc umbrella nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Machine Learning Model project. | Tôi cần nó để làm việc với dự án Machine Learning Model.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Barbara! You are always so helpful. | Cảm ơn Barbara! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 238,
    "title": "한국어 연습: 안부 묻기와 약속 #49",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "태현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 태현, lâu rồi không gặp! Anh khỏe không?\n아, 지훈씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지훈! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 인천공항 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 인천공항 đi.\n좋은 생각이에요. 제 새로운 공책도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 공책 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 239,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #50",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 떡볶이로 주세요. | Cho tôi món 떡볶이 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 240,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #51",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 치킨로 주세요. | Cho tôi món 치킨 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 241,
    "title": "Luyện nói: Describing {item} #51",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful notebook that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ notebook hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my notebook, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc notebook của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 242,
    "title": "한국어 연습: 안부 묻기와 약속 #52",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "민우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민우, lâu rồi không gặp! Anh khỏe không?\n아, 정희씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 정희! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 인천공항 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 인천공항 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 243,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #42",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、京都の寺院へはどう行けばいいですか？ | Xin hỏi, đi đến 京都の寺院 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 244,
    "title": "Luyện nói: Ordering {food} at restaurant #52",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local sandwich. | Vâng, tôi muốn dùng thử món sandwich đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 245,
    "title": "日本語会話: 日常の挨拶と予定 #43",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "渡辺さん、こんにちは！今日の調子はどうですか？ | Chào anh 渡辺! Hôm nay thế nào rồi?\n加藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 加藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいコーヒーマグもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc コーヒーマグ mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 246,
    "title": "한국어 연습: 안부 묻기와 약속 #53",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "수빈씨, 오랜만이에요! 잘 지냈어요? | Chào anh 수빈, lâu rồi không gặp! Anh khỏe không?\n아, 민서씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민서! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 247,
    "title": "Luyện nói: Update on {project} #53",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Barbara, can you give me an update on Security Audit? | Chào buổi sáng Barbara, bạn có thể cập nhật cho tôi về dự án Security Audit không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to James next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với James vào tuần tới."
  },
  {
    "id": 248,
    "title": "汉语学习: 日常问候与喝茶 #33",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "张伟，你好！今天过得怎么样？ | 张伟, chào bạn! Hôm nay thế nào rồi?\n海峰，我很好。你今天下午有空吗？ | 海峰, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上笔记本吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 249,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #44",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、代々木公園へはどう行けばいいですか？ | Xin hỏi, đi đến 代々木公園 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 250,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #44",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Minh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Minh, long time no see. How have you been lately?\nChào Phong, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Phong, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Tích hợp API. | It is okay, lately I am working on the Tích hợp API project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 251,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #45",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào Hà, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Hà, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Tích hợp API. | It is okay, lately I am working on the Tích hợp API project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 252,
    "title": "汉语学习: 在餐馆点{food} #34",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 253,
    "title": "汉语学习: 在餐馆点{food} #35",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色牛肉面吗？ | Được ạ, xin hỏi quý khách có muốn thử món 牛肉面 đặc sản của chúng tôi không?\n好的，来一份牛肉面，再加一碗白米饭。 | Được, cho một phần 牛肉面, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 254,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #54",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 잡채로 주세요. | Cho tôi món 잡채 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 255,
    "title": "日本語会話: 日常の挨拶と予定 #45",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "山本さん、こんにちは！今日の調子はどうですか？ | Chào anh 山本! Hôm nay thế nào rồi?\n大輝さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大輝. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 256,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #46",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Thủy, lâu quá không gặp. Dạo này thế nào rồi? | Hello Thủy, long time no see. How have you been lately?\nChào Hoàng, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Hoàng, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chiến dịch Marketing. | It is okay, lately I am working on the Chiến dịch Marketing project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 257,
    "title": "汉语学习: 日常问候与喝茶 #36",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "陈杰，你好！今天过得怎么样？ | 陈杰, chào bạn! Hôm nay thế nào rồi?\n晓华，我很好。你今天下午有空吗？ | 晓华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去北京站喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 北京站 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 258,
    "title": "日本語会話: 日常の挨拶と予定 #46",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "大翔さん、こんにちは！今日の調子はどうですか？ | Chào anh 大翔! Hôm nay thế nào rồi?\n伊藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 伊藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 259,
    "title": "Luyện nói: Describing {item} #54",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful laptop computer that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ laptop computer hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my laptop computer, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc laptop computer của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 260,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #55",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 261,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #47",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Đức, lâu quá không gặp. Dạo này thế nào rồi? | Hello Đức, long time no see. How have you been lately?\nChào Nam, mình vẫn khỏe. Công việc ở công viên vẫn tốt chứ? | Hello Nam, I am fine. Is your work at công viên still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 262,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #56",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 냉면로 주세요. | Cho tôi món 냉면 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 263,
    "title": "한국어 연습: 안부 묻기와 약속 #57",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "민서씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민서, lâu rồi không gặp! Anh khỏe không?\n아, 서윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 강남역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 강남역 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 264,
    "title": "汉语学习: 在餐馆点{food} #37",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 265,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #48",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hùng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hùng, long time no see. How have you been lately?\nChào Phong, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Phong, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chiến dịch Marketing. | It is okay, lately I am working on the Chiến dịch Marketing project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 266,
    "title": "日本語会話: 日常の挨拶と予定 #47",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "結衣さん、こんにちは！今日の調子はどうですか？ | Chào anh 結衣! Hôm nay thế nào rồi?\n鈴木さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 鈴木. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。近くのスーパーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 近くのスーパー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 267,
    "title": "한국어 연습: 안부 묻기와 약속 #58",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "민준씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민준, lâu rồi không gặp! Anh khỏe không?\n아, 정희씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 정희! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 268,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #49",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Phong, lâu quá không gặp. Dạo này thế nào rồi? | Hello Phong, long time no see. How have you been lately?\nChào Hoa, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Hoa, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang cuốn sổ ra cho mình xem nhé. | That is wonderful! When you are free, bring your cuốn sổ to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 269,
    "title": "汉语学习: 日常问候与喝茶 #38",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "周强，你好！今天过得怎么样？ | 周强, chào bạn! Hôm nay thế nào rồi?\n陈杰，我很好。你今天下午有空吗？ | 陈杰, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上雨伞吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 雨伞 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 270,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #59",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 냉면로 주세요. | Cho tôi món 냉면 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 271,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #60",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 잡채로 주세요. | Cho tôi món 잡채 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 272,
    "title": "日本語会話: レストランで{food}を注文する #48",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のラーメンをお願いします。 | Vâng, cho tôi một phần ラーメン đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 273,
    "title": "Luyện nói: Lost at {place} #55",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Excuse me, Chloe, I think I lost my umbrella here. | Xin lỗi Chloe, tôi nghĩ tôi đã đánh mất chiếc umbrella ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the park. | Tôi nghĩ tôi đã để quên nó gần lối vào the park.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 274,
    "title": "日本語会話: 日常の挨拶と予定 #49",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "渡辺さん、こんにちは！今日の調子はどうですか？ | Chào anh 渡辺! Hôm nay thế nào rồi?\n鈴木さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 鈴木. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいコーヒーマグもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc コーヒーマグ mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 275,
    "title": "日本語会話: 日常の挨拶と予定 #50",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "大輝さん、こんにちは！今日の調子はどうですか？ | Chào anh 大輝! Hôm nay thế nào rồi?\n結衣さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 結衣. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいコーヒーマグもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc コーヒーマグ mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 276,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #50",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Phong, lâu quá không gặp. Dạo này thế nào rồi? | Hello Phong, long time no see. How have you been lately?\nChào Nam, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Nam, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thuyết trình Khách hàng. | It is okay, lately I am working on the Thuyết trình Khách hàng project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 277,
    "title": "日本語会話: 日常の挨拶と予定 #51",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "翔太さん、こんにちは！今日の調子はどうですか？ | Chào anh 翔太! Hôm nay thế nào rồi?\n佐藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 佐藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。札幌駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 札幌駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 278,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #51",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Mai, lâu quá không gặp. Dạo này thế nào rồi? | Hello Mai, long time no see. How have you been lately?\nChào Hùng, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello Hùng, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thuyết trình Khách hàng. | It is okay, lately I am working on the Thuyết trình Khách hàng project.\nTuyệt vời quá! Khi nào rảnh mang mũ chống nắng ra cho mình xem nhé. | That is wonderful! When you are free, bring your mũ chống nắng to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 279,
    "title": "日本語会話: 日常の挨拶と予定 #52",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\n加藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 加藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 280,
    "title": "汉语学习: 在餐馆点{food} #39",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 281,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #52",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Vy, lâu quá không gặp. Dạo này thế nào rồi? | Hello Vy, long time no see. How have you been lately?\nChào Hùng, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Hùng, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 282,
    "title": "汉语学习: 日常问候与喝茶 #40",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "李军，你好！今天过得怎么样？ | 李军, chào bạn! Hôm nay thế nào rồi?\n明哲，我很好。你今天下午有空吗？ | 明哲, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 283,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #61",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 냉면로 주세요. | Cho tôi món 냉면 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 284,
    "title": "汉语学习: 日常问候与喝茶 #41",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "李静，你好！今天过得怎么样？ | 李静, chào bạn! Hôm nay thế nào rồi?\n晓华，我很好。你今天下午有空吗？ | 晓华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上咖啡杯吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 咖啡杯 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 285,
    "title": "Luyện nói: Site safety check at {place} #56",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the central square before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the central square trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 286,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #53",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Tuấn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Tuấn, long time no see. How have you been lately?\nChào Minh, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Minh, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế lại UI/UX. | It is okay, lately I am working on the Thiết kế lại UI/UX project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 287,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #54",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào An, lâu quá không gặp. Dạo này thế nào rồi? | Hello An, long time no see. How have you been lately?\nChào Lan, mình vẫn khỏe. Công việc ở quán cà phê vẫn tốt chứ? | Hello Lan, I am fine. Is your work at quán cà phê still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 288,
    "title": "日本語会話: レストランで{food}を注文する #53",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の刺身をお願いします。 | Vâng, cho tôi một phần 刺身 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 289,
    "title": "Luyện nói: Update on {project} #57",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Paul, can you give me an update on Database Design? | Chào buổi sáng Paul, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Thomas next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Thomas vào tuần tới."
  },
  {
    "id": 290,
    "title": "汉语学习: 日常问候与喝茶 #42",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "徐丽，你好！今天过得怎么样？ | 徐丽, chào bạn! Hôm nay thế nào rồi?\n周强，我很好。你今天下午有空吗？ | 周强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上背包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 背包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 291,
    "title": "日本語会話: 日常の挨拶と予定 #54",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "大輝さん、こんにちは！今日の調子はどうですか？ | Chào anh 大輝! Hôm nay thế nào rồi?\n加藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 加藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 292,
    "title": "한국어 연습: 안부 묻기와 약속 #62",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "서윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서윤, lâu rồi không gặp! Anh khỏe không?\n아, 현우씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 현우! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 열쇠고리도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 열쇠고리 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 293,
    "title": "日本語会話: 日常の挨拶と予定 #55",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "田中さん、こんにちは！今日の調子はどうですか？ | Chào anh 田中! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 294,
    "title": "Luyện nói: Update on {project} #58",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning James, can you give me an update on Web Application Dev? | Chào buổi sáng James, bạn có thể cập nhật cho tôi về dự án Web Application Dev không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Chloe next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Chloe vào tuần tới."
  },
  {
    "id": 295,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #55",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Vy, lâu quá không gặp. Dạo này thế nào rồi? | Hello Vy, long time no see. How have you been lately?\nChào Khánh, mình vẫn khỏe. Công việc ở siêu thị vẫn tốt chứ? | Hello Khánh, I am fine. Is your work at siêu thị still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 296,
    "title": "日本語会話: 日常の挨拶と予定 #56",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "中村さん、こんにちは！今日の調子はどうですか？ | Chào anh 中村! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいキーホルダーもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc キーホルダー mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 297,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #56",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Lan, lâu quá không gặp. Dạo này thế nào rồi? | Hello Lan, long time no see. How have you been lately?\nChào Hải, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello Hải, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang ví da ra cho mình xem nhé. | That is wonderful! When you are free, bring your ví da to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 298,
    "title": "日本語会話: 日常の挨拶と予定 #57",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "翔太さん、こんにちは！今日の調子はどうですか？ | Chào anh 翔太! Hôm nay thế nào rồi?\n渡辺さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 渡辺. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。近くのスーパーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 近くのスーパー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 299,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #57",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hà, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hà, long time no see. How have you been lately?\nChào Tuấn, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Tuấn, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang mũ chống nắng ra cho mình xem nhé. | That is wonderful! When you are free, bring your mũ chống nắng to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 300,
    "title": "汉语学习: 在餐馆点{food} #43",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 301,
    "title": "日本語会話: 日常の挨拶と予定 #58",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\n山本さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 山本. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 302,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #63",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 303,
    "title": "Luyện nói: Describing {item} #59",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful laptop computer that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ laptop computer hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my laptop computer, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc laptop computer của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 304,
    "title": "日本語会話: 日常の挨拶と予定 #59",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "大翔さん、こんにちは！今日の調子はどうですか？ | Chào anh 大翔! Hôm nay thế nào rồi?\n佐藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 佐藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 305,
    "title": "Luyện nói: Ordering {food} at restaurant #60",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local pizza slice. | Vâng, tôi muốn dùng thử món pizza slice đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 306,
    "title": "汉语学习: 在餐馆点{food} #44",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 307,
    "title": "汉语学习: 在餐馆点{food} #45",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 308,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #58",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Sơn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Sơn, long time no see. How have you been lately?\nChào Hải, mình vẫn khỏe. Công việc ở siêu thị vẫn tốt chứ? | Hello Hải, I am fine. Is your work at siêu thị still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 309,
    "title": "日本語会話: 日常の挨拶と予定 #60",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "さくらさん、こんにちは！今日の調子はどうですか？ | Chào anh さくら! Hôm nay thế nào rồi?\n山本さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 山本. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 310,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #59",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Khánh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Khánh, long time no see. How have you been lately?\nChào Vy, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Vy, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 311,
    "title": "Luyện nói: Lost at {place} #61",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Excuse me, Mark, I think I lost my keychain here. | Xin lỗi Mark, tôi nghĩ tôi đã đánh mất chiếc keychain ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the central square. | Tôi nghĩ tôi đã để quên nó gần lối vào the central square.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 312,
    "title": "Luyện nói: Daily Greeting & Plans #62",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi Sarah, how are you doing today? | Chào Sarah, hôm nay bạn thế nào rồi?\nHi David, I am doing great! Are you free this afternoon? | Chào David, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the library for a drink. | Có, tôi rảnh. Cùng đến the library uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my laptop computer. | Khoảng ba giờ thì sao? Tôi sẽ mang theo laptop computer của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 313,
    "title": "汉语学习: 在餐馆点{food} #46",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 314,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #60",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Trang, lâu quá không gặp. Dạo này thế nào rồi? | Hello Trang, long time no see. How have you been lately?\nChào Linh, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Linh, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế lại UI/UX. | It is okay, lately I am working on the Thiết kế lại UI/UX project.\nTuyệt vời quá! Khi nào rảnh mang ví da ra cho mình xem nhé. | That is wonderful! When you are free, bring your ví da to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 315,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #64",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 냉면로 주세요. | Cho tôi món 냉면 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 316,
    "title": "Luyện nói: Site safety check at {place} #63",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the conference room before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the conference room trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 317,
    "title": "日本語会話: 日常の挨拶と予定 #61",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "鈴木さん、こんにちは！今日の調子はどうですか？ | Chào anh 鈴木! Hôm nay thế nào rồi?\n渡辺さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 渡辺. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 318,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #62",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、近くのスーパーへはどう行けばいいですか？ | Xin hỏi, đi đến 近くのスーパー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 319,
    "title": "汉语学习: 日常问候与喝茶 #47",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "刘洋，你好！今天过得怎么样？ | 刘洋, chào bạn! Hôm nay thế nào rồi?\n丽华，我很好。你今天下午有空吗？ | 丽华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去北京站喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 北京站 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 320,
    "title": "日本語会話: レストランで{food}を注文する #63",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の刺身をお願いします。 | Vâng, cho tôi một phần 刺身 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 321,
    "title": "汉语学习: 日常问候与喝茶 #48",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "德明，你好！今天过得怎么样？ | 德明, chào bạn! Hôm nay thế nào rồi?\n徐丽，我很好。你今天下午有空吗？ | 徐丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去天安门广场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 天安门广场 uống tách trà không?\n那太好了！我们要带上笔记本吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 322,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #64",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、カフェへはどう行けばいいですか？ | Xin hỏi, đi đến カフェ như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 323,
    "title": "日本語会話: レストランで{food}を注文する #65",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のうどんをお願いします。 | Vâng, cho tôi một phần うどん đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 324,
    "title": "한국어 연습: 안부 묻기와 약속 #65",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "서연씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서연, lâu rồi không gặp! Anh khỏe không?\n아, 지훈씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지훈! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 인천공항 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 인천공항 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 325,
    "title": "汉语学习: 日常问候与喝茶 #49",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "明哲，你好！今天过得怎么样？ | 明哲, chào bạn! Hôm nay thế nào rồi?\n刘洋，我很好。你今天下午有空吗？ | 刘洋, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 326,
    "title": "Luyện nói: Lost at {place} #64",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Excuse me, Paul, I think I lost my umbrella here. | Xin lỗi Paul, tôi nghĩ tôi đã đánh mất chiếc umbrella ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the library. | Tôi nghĩ tôi đã để quên nó gần lối vào the library.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 327,
    "title": "汉语学习: 日常问候与喝茶 #50",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "小红，你好！今天过得怎么样？ | 小红, chào bạn! Hôm nay thế nào rồi?\n丽华，我很好。你今天下午有空吗？ | 丽华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去附近的超市喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 附近的超市 uống tách trà không?\n那太好了！我们要带上钥匙扣吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 钥匙扣 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 328,
    "title": "한국어 연습: 안부 묻기와 약속 #66",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "하은씨, 오랜만이에요! 잘 지냈어요? | Chào anh 하은, lâu rồi không gặp! Anh khỏe không?\n아, 정희씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 정희! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 329,
    "title": "汉语学习: 日常问候与喝茶 #51",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "明哲，你好！今天过得怎么样？ | 明哲, chào bạn! Hôm nay thế nào rồi?\n小红，我很好。你今天下午有空吗？ | 小红, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上雨伞吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 雨伞 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 330,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #66",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、代々木公園へはどう行けばいいですか？ | Xin hỏi, đi đến 代々木公園 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 331,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #67",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 332,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #61",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Khánh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Khánh, long time no see. How have you been lately?\nChào Minh, mình vẫn khỏe. Công việc ở sân bay vẫn tốt chứ? | Hello Minh, I am fine. Is your work at sân bay still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 333,
    "title": "한국어 연습: 안부 묻기와 약속 #68",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "민우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민우, lâu rồi không gặp! Anh khỏe không?\n아, 지원씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지원! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 한강공원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 한강공원 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 334,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #62",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Mai, lâu quá không gặp. Dạo này thế nào rồi? | Hello Mai, long time no see. How have you been lately?\nChào Đức, mình vẫn khỏe. Công việc ở công viên vẫn tốt chứ? | Hello Đức, I am fine. Is your work at công viên still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 335,
    "title": "日本語会話: 日常の挨拶と予定 #67",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "健太さん、こんにちは！今日の調子はどうですか？ | Chào anh 健太! Hôm nay thế nào rồi?\n山本さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 山本. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 336,
    "title": "Luyện nói: Daily Greeting & Plans #65",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Elizabeth, how are you doing today? | Chào Elizabeth, hôm nay bạn thế nào rồi?\nHi James, I am doing great! Are you free this afternoon? | Chào James, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the coffee shop for a drink. | Có, tôi rảnh. Cùng đến the coffee shop uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my umbrella. | Khoảng ba giờ thì sao? Tôi sẽ mang theo umbrella của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 337,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #63",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Linh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Linh, long time no see. How have you been lately?\nChào Trang, mình vẫn khỏe. Công việc ở văn phòng trung tâm vẫn tốt chứ? | Hello Trang, I am fine. Is your work at văn phòng trung tâm still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 338,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #64",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào An, lâu quá không gặp. Dạo này thế nào rồi? | Hello An, long time no see. How have you been lately?\nChào Vy, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Vy, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 339,
    "title": "Luyện nói: Update on {project} #66",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Sophia, can you give me an update on Web Application Dev? | Chào buổi sáng Sophia, bạn có thể cập nhật cho tôi về dự án Web Application Dev không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Linda next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Linda vào tuần tới."
  },
  {
    "id": 340,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #68",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、代々木公園へはどう行けばいいですか？ | Xin hỏi, đi đến 代々木公園 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 341,
    "title": "汉语学习: 日常问候与喝茶 #52",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "小红，你好！今天过得怎么样？ | 小红, chào bạn! Hôm nay thế nào rồi?\n明哲，我很好。你今天下午有空吗？ | 明哲, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上智能手机吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 智能手机 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 342,
    "title": "한국어 연습: 안부 묻기와 약속 #69",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "서윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서윤, lâu rồi không gặp! Anh khỏe không?\n아, 현우씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 현우! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 343,
    "title": "日本語会話: レストランで{food}を注文する #69",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の寿司をお願いします。 | Vâng, cho tôi một phần 寿司 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 344,
    "title": "日本語会話: 日常の挨拶と予定 #70",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "佐藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 佐藤! Hôm nay thế nào rồi?\n大翔さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大翔. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 345,
    "title": "汉语学习: 日常问候与喝茶 #53",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "雅琴，你好！今天过得怎么样？ | 雅琴, chào bạn! Hôm nay thế nào rồi?\n德明，我很好。你今天下午有空吗？ | 德明, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 346,
    "title": "한국어 연습: 안부 묻기와 약속 #70",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "민우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민우, lâu rồi không gặp! Anh khỏe không?\n아, 지훈씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지훈! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 인천공항 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 인천공항 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 347,
    "title": "汉语学习: 在餐馆点{food} #54",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 348,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #71",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 349,
    "title": "汉语学习: 日常问候与喝茶 #55",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "飞龙，你好！今天过得怎么样？ | 飞龙, chào bạn! Hôm nay thế nào rồi?\n王丽，我很好。你今天下午有空吗？ | 王丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上背包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 背包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 350,
    "title": "日本語会話: 日常の挨拶と予定 #71",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "田中さん、こんにちは！今日の調子はどうですか？ | Chào anh 田中! Hôm nay thế nào rồi?\n中村さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 中村. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 351,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #72",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 352,
    "title": "汉语学习: 在餐馆点{food} #56",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 353,
    "title": "한국어 연습: 안부 묻기와 약속 #73",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "유진씨, 오랜만이에요! 잘 지냈어요? | Chào anh 유진, lâu rồi không gặp! Anh khỏe không?\n아, 현우씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 현우! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 근처 슈퍼마켓 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 근처 슈퍼마켓 đi.\n좋은 생각이에요. 제 새로운 열쇠고리도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 열쇠고리 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 354,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #65",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hà, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hà, long time no see. How have you been lately?\nChào Vy, mình vẫn khỏe. Công việc ở công viên vẫn tốt chứ? | Hello Vy, I am fine. Is your work at công viên still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang cuốn sổ ra cho mình xem nhé. | That is wonderful! When you are free, bring your cuốn sổ to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 355,
    "title": "汉语学习: 日常问候与喝茶 #57",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "张伟，你好！今天过得怎么样？ | 张伟, chào bạn! Hôm nay thế nào rồi?\n王芳，我很好。你今天下午有空吗？ | 王芳, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 356,
    "title": "汉语学习: 在餐馆点{food} #58",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色麻婆豆腐吗？ | Được ạ, xin hỏi quý khách có muốn thử món 麻婆豆腐 đặc sản của chúng tôi không?\n好的，来一份麻婆豆腐，再加一碗白米饭。 | Được, cho một phần 麻婆豆腐, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 357,
    "title": "日本語会話: レストランで{food}を注文する #72",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の牛丼をお願いします。 | Vâng, cho tôi một phần 牛丼 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 358,
    "title": "Luyện nói: Daily Greeting & Plans #67",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hi John, how are you doing today? | Chào John, hôm nay bạn thế nào rồi?\nHi Kevin, I am doing great! Are you free this afternoon? | Chào Kevin, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the supermarket for a drink. | Có, tôi rảnh. Cùng đến the supermarket uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my laptop computer. | Khoảng ba giờ thì sao? Tôi sẽ mang theo laptop computer của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 359,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #74",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 360,
    "title": "汉语学习: 日常问候与喝茶 #59",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "雅琴，你好！今天过得怎么样？ | 雅琴, chào bạn! Hôm nay thế nào rồi?\n李静，我很好。你今天下午有空吗？ | 李静, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去牙科诊所喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 牙科诊所 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 361,
    "title": "日本語会話: 日常の挨拶と予定 #73",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "伊藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 伊藤! Hôm nay thế nào rồi?\n高橋さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 高橋. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。札幌駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 札幌駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 362,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #66",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hải, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hải, long time no see. How have you been lately?\nChào Tuấn, mình vẫn khỏe. Công việc ở sân bay vẫn tốt chứ? | Hello Tuấn, I am fine. Is your work at sân bay still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 363,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #67",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Hùng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hùng, long time no see. How have you been lately?\nChào Đức, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Đức, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế lại UI/UX. | It is okay, lately I am working on the Thiết kế lại UI/UX project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 364,
    "title": "汉语学习: 在餐馆点{food} #60",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 365,
    "title": "한국어 연습: 안부 묻기와 약속 #75",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "수빈씨, 오랜만이에요! 잘 지냈어요? | Chào anh 수빈, lâu rồi không gặp! Anh khỏe không?\n아, 현우씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 현우! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 근처 슈퍼마켓 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 근처 슈퍼마켓 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 366,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #76",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 367,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #68",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Hải, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hải, long time no see. How have you been lately?\nChào Hùng, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Hùng, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang mũ chống nắng ra cho mình xem nhé. | That is wonderful! When you are free, bring your mũ chống nắng to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 368,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #77",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 369,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #69",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hải, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hải, long time no see. How have you been lately?\nChào Minh, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Minh, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 370,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #70",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào Vy, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Vy, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 371,
    "title": "한국어 연습: 안부 묻기와 약속 #78",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "민서씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민서, lâu rồi không gặp! Anh khỏe không?\n아, 민준씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민준! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 372,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #79",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 373,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #71",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Hà, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hà, long time no see. How have you been lately?\nChào Hoàng, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Hoàng, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thuyết trình Khách hàng. | It is okay, lately I am working on the Thuyết trình Khách hàng project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 374,
    "title": "日本語会話: レストランで{food}を注文する #74",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の抹茶アイスをお願いします。 | Vâng, cho tôi một phần 抹茶アイス đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 375,
    "title": "汉语学习: 在餐馆点{food} #61",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 376,
    "title": "汉语学习: 日常问候与喝茶 #62",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n晓华，我很好。你今天下午有空吗？ | 晓华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上咖啡杯吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 咖啡杯 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 377,
    "title": "汉语学习: 日常问候与喝茶 #63",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n王丽，我很好。你今天下午有空吗？ | 王丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上智能手机吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 智能手机 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 378,
    "title": "한국어 연습: 안부 묻기와 약속 #80",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "유진씨, 오랜만이에요! 잘 지냈어요? | Chào anh 유진, lâu rồi không gặp! Anh khỏe không?\n아, 지원씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지원! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 도서관 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 도서관 đi.\n좋은 생각이에요. 제 새로운 열쇠고리도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 열쇠고리 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 379,
    "title": "日本語会話: レストランで{food}を注文する #75",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のラーメンをお願いします。 | Vâng, cho tôi một phần ラーメン đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 380,
    "title": "한국어 연습: 안부 묻기와 약속 #81",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "준호씨, 오랜만이에요! 잘 지냈어요? | Chào anh 준호, lâu rồi không gặp! Anh khỏe không?\n아, 동현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 동현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 인천공항 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 인천공항 đi.\n좋은 생각이에요. 제 새로운 가죽 지갑도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 가죽 지갑 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 381,
    "title": "日本語会話: 日常の挨拶と予定 #76",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "陽菜さん、こんにちは！今日の調子はどうですか？ | Chào anh 陽菜! Hôm nay thế nào rồi?\n中村さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 中村. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 382,
    "title": "Luyện nói: Update on {project} #68",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Daniel, can you give me an update on Database Design? | Chào buổi sáng Daniel, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to David next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với David vào tuần tới."
  },
  {
    "id": 383,
    "title": "汉语学习: 日常问候与喝茶 #64",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "刘洋，你好！今天过得怎么样？ | 刘洋, chào bạn! Hôm nay thế nào rồi?\n飞龙，我很好。你今天下午有空吗？ | 飞龙, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上智能手机吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 智能手机 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 384,
    "title": "Luyện nói: Describing {item} #69",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful laptop computer that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ laptop computer hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my laptop computer, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc laptop computer của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 385,
    "title": "Luyện nói: Site safety check at {place} #70",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the downtown office before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the downtown office trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 386,
    "title": "한국어 연습: 안부 묻기와 약속 #82",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "동현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 동현, lâu rồi không gặp! Anh khỏe không?\n아, 지수씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지수! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 387,
    "title": "日本語会話: 日常の挨拶と予定 #77",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "山本さん、こんにちは！今日の調子はどうですか？ | Chào anh 山本! Hôm nay thế nào rồi?\n大翔さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大翔. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 388,
    "title": "汉语学习: 在餐馆点{food} #65",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 389,
    "title": "日本語会話: 日常の挨拶と予定 #78",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "さくらさん、こんにちは！今日の調子はどうですか？ | Chào anh さくら! Hôm nay thế nào rồi?\n美咲さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 美咲. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 390,
    "title": "日本語会話: レストランで{food}を注文する #79",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のうどんをお願いします。 | Vâng, cho tôi một phần うどん đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 391,
    "title": "한국어 연습: 안부 묻기와 약속 #83",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "민우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민우, lâu rồi không gặp! Anh khỏe không?\n아, 준호씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 준호! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 392,
    "title": "汉语学习: 日常问候与喝茶 #66",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "张伟，你好！今天过得怎么样？ | 张伟, chào bạn! Hôm nay thế nào rồi?\n晓华，我很好。你今天下午有空吗？ | 晓华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 393,
    "title": "日本語会話: 日常の挨拶と予定 #80",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "山本さん、こんにちは！今日の調子はどうですか？ | Chào anh 山本! Hôm nay thế nào rồi?\n中村さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 中村. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいコーヒーマグもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc コーヒーマグ mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 394,
    "title": "日本語会話: レストランで{food}を注文する #81",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の抹茶アイスをお願いします。 | Vâng, cho tôi một phần 抹茶アイス đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 395,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #72",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hải, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hải, long time no see. How have you been lately?\nChào Sơn, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Sơn, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang mũ chống nắng ra cho mình xem nhé. | That is wonderful! When you are free, bring your mũ chống nắng to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 396,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #82",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、近くのスーパーへはどう行けばいいですか？ | Xin hỏi, đi đến 近くのスーパー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 397,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #84",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 398,
    "title": "汉语学习: 在餐馆点{food} #67",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 399,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #85",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 잡채로 주세요. | Cho tôi món 잡채 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 400,
    "title": "汉语学习: 日常问候与喝茶 #68",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "飞龙，你好！今天过得怎么样？ | 飞龙, chào bạn! Hôm nay thế nào rồi?\n志强，我很好。你今天下午有空吗？ | 志强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上雨伞吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 雨伞 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 401,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #73",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Thủy, lâu quá không gặp. Dạo này thế nào rồi? | Hello Thủy, long time no see. How have you been lately?\nChào Đức, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello Đức, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 402,
    "title": "汉语学习: 在餐馆点{food} #69",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色麻婆豆腐吗？ | Được ạ, xin hỏi quý khách có muốn thử món 麻婆豆腐 đặc sản của chúng tôi không?\n好的，来一份麻婆豆腐，再加一碗白米饭。 | Được, cho một phần 麻婆豆腐, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 403,
    "title": "Luyện nói: Update on {project} #71",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Thomas, can you give me an update on Web Application Dev? | Chào buổi sáng Thomas, bạn có thể cập nhật cho tôi về dự án Web Application Dev không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Chloe next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Chloe vào tuần tới."
  },
  {
    "id": 404,
    "title": "Luyện nói: Update on {project} #72",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Daniel, can you give me an update on Machine Learning Model? | Chào buổi sáng Daniel, bạn có thể cập nhật cho tôi về dự án Machine Learning Model không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Robert next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Robert vào tuần tới."
  },
  {
    "id": 405,
    "title": "Luyện nói: Describing {item} #73",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful coffee mug that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ coffee mug hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my coffee mug, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc coffee mug của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 406,
    "title": "Luyện nói: Borrowing {item} #74",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Michael, do you have a spare laptop computer I can borrow? | Này Michael, bạn có thừa chiếc laptop computer nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the API Integration project. | Tôi cần nó để làm việc với dự án API Integration.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, John! You are always so helpful. | Cảm ơn John! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 407,
    "title": "日本語会話: 日常の挨拶と予定 #83",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "渡辺さん、こんにちは！今日の調子はどうですか？ | Chào anh 渡辺! Hôm nay thế nào rồi?\n伊藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 伊藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。図書館でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 図書館 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 408,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #74",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào Trang, mình vẫn khỏe. Công việc ở sân bay vẫn tốt chứ? | Hello Trang, I am fine. Is your work at sân bay still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thuyết trình Khách hàng. | It is okay, lately I am working on the Thuyết trình Khách hàng project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 409,
    "title": "日本語会話: 日常の挨拶と予定 #84",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "陽菜さん、こんにちは！今日の調子はどうですか？ | Chào anh 陽菜! Hôm nay thế nào rồi?\n高橋さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 高橋. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 410,
    "title": "Luyện nói: Describing {item} #75",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful water bottle that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ water bottle hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my water bottle, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc water bottle của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 411,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #75",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Minh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Minh, long time no see. How have you been lately?\nChào Hà, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Hà, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế lại UI/UX. | It is okay, lately I am working on the Thiết kế lại UI/UX project.\nTuyệt vời quá! Khi nào rảnh mang cuốn sổ ra cho mình xem nhé. | That is wonderful! When you are free, bring your cuốn sổ to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 412,
    "title": "한국어 연습: 안부 묻기와 약속 #86",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "예은씨, 오랜만이에요! 잘 지냈어요? | Chào anh 예은, lâu rồi không gặp! Anh khỏe không?\n아, 민준씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민준! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 열쇠고리도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 열쇠고리 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 413,
    "title": "汉语学习: 在餐馆点{food} #70",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色春卷吗？ | Được ạ, xin hỏi quý khách có muốn thử món 春卷 đặc sản của chúng tôi không?\n好的，来一份春卷，再加一碗白米饭。 | Được, cho một phần 春卷, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 414,
    "title": "Luyện nói: Borrowing {item} #76",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Sarah, do you have a spare leather wallet I can borrow? | Này Sarah, bạn có thừa chiếc leather wallet nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Web Application Dev project. | Tôi cần nó để làm việc với dự án Web Application Dev.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Olivia! You are always so helpful. | Cảm ơn Olivia! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 415,
    "title": "Luyện nói: Ordering {food} at restaurant #77",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local hamburger and fries. | Vâng, tôi muốn dùng thử món hamburger and fries đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 416,
    "title": "Luyện nói: Describing {item} #78",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful backpack that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ backpack hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my backpack, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc backpack của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 417,
    "title": "한국어 연습: 안부 묻기와 약속 #87",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "수빈씨, 오랜만이에요! 잘 지냈어요? | Chào anh 수빈, lâu rồi không gặp! Anh khỏe không?\n아, 민서씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민서! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 418,
    "title": "Luyện nói: Describing {item} #79",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful smartphone that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ smartphone hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my smartphone, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc smartphone của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 419,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #85",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、東京タワーへはどう行けばいいですか？ | Xin hỏi, đi đến 東京タワー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 420,
    "title": "汉语学习: 在餐馆点{food} #71",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 421,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #88",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 422,
    "title": "Luyện nói: Update on {project} #80",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Linda, can you give me an update on UI/UX Redesign? | Chào buổi sáng Linda, bạn có thể cập nhật cho tôi về dự án UI/UX Redesign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to John next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với John vào tuần tới."
  },
  {
    "id": 423,
    "title": "汉语学习: 日常问候与喝茶 #72",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "丽华，你好！今天过得怎么样？ | 丽华, chào bạn! Hôm nay thế nào rồi?\n周强，我很好。你今天下午有空吗？ | 周强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去牙科诊所喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 牙科诊所 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 424,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #86",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、近くのスーパーへはどう行けばいいですか？ | Xin hỏi, đi đến 近くのスーパー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 425,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #89",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 426,
    "title": "汉语学习: 日常问候与喝茶 #73",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "李军，你好！今天过得怎么样？ | 李军, chào bạn! Hôm nay thế nào rồi?\n周强，我很好。你今天下午有空吗？ | 周强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上咖啡杯吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 咖啡杯 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 427,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #76",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Sơn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Sơn, long time no see. How have you been lately?\nChào Đức, mình vẫn khỏe. Công việc ở văn phòng trung tâm vẫn tốt chứ? | Hello Đức, I am fine. Is your work at văn phòng trung tâm still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 428,
    "title": "汉语学习: 在餐馆点{food} #74",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 429,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #90",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 430,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #91",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 떡볶이로 주세요. | Cho tôi món 떡볶이 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 431,
    "title": "日本語会話: 日常の挨拶と予定 #87",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "山本さん、こんにちは！今日の調子はどうですか？ | Chào anh 山本! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいキーホルダーもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc キーホルダー mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 432,
    "title": "日本語会話: レストランで{food}を注文する #88",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の寿司をお願いします。 | Vâng, cho tôi một phần 寿司 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 433,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #77",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào Lan, mình vẫn khỏe. Công việc ở quán cà phê vẫn tốt chứ? | Hello Lan, I am fine. Is your work at quán cà phê still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 434,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #89",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、歯医者へはどう行けばいいですか？ | Xin hỏi, đi đến 歯医者 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 435,
    "title": "Luyện nói: Update on {project} #81",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Kevin, can you give me an update on Marketing Campaign? | Chào buổi sáng Kevin, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Linda next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Linda vào tuần tới."
  },
  {
    "id": 436,
    "title": "Luyện nói: Describing {item} #82",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful sun hat that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ sun hat hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my sun hat, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc sun hat của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 437,
    "title": "한국어 연습: 안부 묻기와 약속 #92",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "하은씨, 오랜만이에요! 잘 지냈어요? | Chào anh 하은, lâu rồi không gặp! Anh khỏe không?\n아, 민준씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민준! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 438,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #93",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 떡볶이로 주세요. | Cho tôi món 떡볶이 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 439,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #94",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 치킨로 주세요. | Cho tôi món 치킨 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 440,
    "title": "汉语学习: 日常问候与喝茶 #75",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "李军，你好！今天过得怎么样？ | 李军, chào bạn! Hôm nay thế nào rồi?\n张敏，我很好。你今天下午有空吗？ | 张敏, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上雨伞吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 雨伞 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 441,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #78",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Thủy, lâu quá không gặp. Dạo này thế nào rồi? | Hello Thủy, long time no see. How have you been lately?\nChào Mai, mình vẫn khỏe. Công việc ở công viên vẫn tốt chứ? | Hello Mai, I am fine. Is your work at công viên still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 442,
    "title": "日本語会話: 日常の挨拶と予定 #90",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "優斗さん、こんにちは！今日の調子はどうですか？ | Chào anh 優斗! Hôm nay thế nào rồi?\n結衣さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 結衣. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。近くのスーパーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 近くのスーパー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 443,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #79",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Minh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Minh, long time no see. How have you been lately?\nChào Hoàng, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Hoàng, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Tích hợp API. | It is okay, lately I am working on the Tích hợp API project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 444,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #80",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Linh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Linh, long time no see. How have you been lately?\nChào Minh, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Minh, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 445,
    "title": "汉语学习: 日常问候与喝茶 #76",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "周强，你好！今天过得怎么样？ | 周强, chào bạn! Hôm nay thế nào rồi?\n丽华，我很好。你今天下午有空吗？ | 丽华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上咖啡杯吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 咖啡杯 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 446,
    "title": "Luyện nói: Site safety check at {place} #83",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the coffee shop before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the coffee shop trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 447,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #81",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Tuấn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Tuấn, long time no see. How have you been lately?\nChào Minh, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Minh, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chiến dịch Marketing. | It is okay, lately I am working on the Chiến dịch Marketing project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 448,
    "title": "汉语学习: 日常问候与喝茶 #77",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "张敏，你好！今天过得怎么样？ | 张敏, chào bạn! Hôm nay thế nào rồi?\n王丽，我很好。你今天下午有空吗？ | 王丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 449,
    "title": "한국어 연습: 안부 묻기와 약속 #95",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "지원씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지원, lâu rồi không gặp! Anh khỏe không?\n아, 영수씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 영수! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 450,
    "title": "汉语学习: 在餐馆点{food} #78",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色麻婆豆腐吗？ | Được ạ, xin hỏi quý khách có muốn thử món 麻婆豆腐 đặc sản của chúng tôi không?\n好的，来一份麻婆豆腐，再加一碗白米饭。 | Được, cho một phần 麻婆豆腐, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 451,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #91",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、東京タワーへはどう行けばいいですか？ | Xin hỏi, đi đến 東京タワー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 452,
    "title": "汉语学习: 在餐馆点{food} #79",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 453,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #82",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Khánh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Khánh, long time no see. How have you been lately?\nChào Linh, mình vẫn khỏe. Công việc ở văn phòng trung tâm vẫn tốt chứ? | Hello Linh, I am fine. Is your work at văn phòng trung tâm still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 454,
    "title": "Luyện nói: Site safety check at {place} #84",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the coffee shop before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the coffee shop trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 455,
    "title": "Luyện nói: Site safety check at {place} #85",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the library before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the library trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 456,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #96",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 457,
    "title": "Luyện nói: Borrowing {item} #86",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Mark, do you have a spare backpack I can borrow? | Này Mark, bạn có thừa chiếc backpack nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Machine Learning Model project. | Tôi cần nó để làm việc với dự án Machine Learning Model.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Robert! You are always so helpful. | Cảm ơn Robert! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 458,
    "title": "Luyện nói: Update on {project} #87",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Elizabeth, can you give me an update on Database Design? | Chào buổi sáng Elizabeth, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Sarah next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Sarah vào tuần tới."
  },
  {
    "id": 459,
    "title": "汉语学习: 在餐馆点{food} #80",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 460,
    "title": "Luyện nói: Ordering {food} at restaurant #88",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local hamburger and fries. | Vâng, tôi muốn dùng thử món hamburger and fries đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 461,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #83",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Khánh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Khánh, long time no see. How have you been lately?\nChào An, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello An, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 462,
    "title": "汉语学习: 日常问候与喝茶 #81",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "徐丽，你好！今天过得怎么样？ | 徐丽, chào bạn! Hôm nay thế nào rồi?\n陈杰，我很好。你今天下午有空吗？ | 陈杰, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 463,
    "title": "汉语学习: 日常问候与喝茶 #82",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "徐丽，你好！今天过得怎么样？ | 徐丽, chào bạn! Hôm nay thế nào rồi?\n周强，我很好。你今天下午有空吗？ | 周强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上背包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 背包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 464,
    "title": "Luyện nói: Site safety check at {place} #89",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the airport terminal before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the airport terminal trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 465,
    "title": "Luyện nói: Ordering {food} at restaurant #90",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local sushi roll. | Vâng, tôi muốn dùng thử món sushi roll đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 466,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #97",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 냉면로 주세요. | Cho tôi món 냉면 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 467,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #84",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào An, lâu quá không gặp. Dạo này thế nào rồi? | Hello An, long time no see. How have you been lately?\nChào Hùng, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Hùng, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang bình nước ra cho mình xem nhé. | That is wonderful! When you are free, bring your bình nước to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 468,
    "title": "汉语学习: 日常问候与喝茶 #83",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "王芳，你好！今天过得怎么样？ | 王芳, chào bạn! Hôm nay thế nào rồi?\n丽华，我很好。你今天下午有空吗？ | 丽华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去天安门广场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 天安门广场 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 469,
    "title": "Luyện nói: Ordering {food} at restaurant #91",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local beef steak. | Vâng, tôi muốn dùng thử món beef steak đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 470,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #98",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 떡볶이로 주세요. | Cho tôi món 떡볶이 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 471,
    "title": "Luyện nói: Describing {item} #92",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful notebook that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ notebook hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my notebook, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc notebook của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 472,
    "title": "日本語会話: レストランで{food}を注文する #92",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の抹茶アイスをお願いします。 | Vâng, cho tôi một phần 抹茶アイス đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 473,
    "title": "汉语学习: 在餐馆点{food} #84",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色麻婆豆腐吗？ | Được ạ, xin hỏi quý khách có muốn thử món 麻婆豆腐 đặc sản của chúng tôi không?\n好的，来一份麻婆豆腐，再加一碗白米饭。 | Được, cho một phần 麻婆豆腐, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 474,
    "title": "Luyện nói: Update on {project} #93",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Jessica, can you give me an update on Database Design? | Chào buổi sáng Jessica, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Emily next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Emily vào tuần tới."
  },
  {
    "id": 475,
    "title": "汉语学习: 在餐馆点{food} #85",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 476,
    "title": "Luyện nói: Update on {project} #94",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Sarah, can you give me an update on Security Audit? | Chào buổi sáng Sarah, bạn có thể cập nhật cho tôi về dự án Security Audit không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to David next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với David vào tuần tới."
  },
  {
    "id": 477,
    "title": "日本語会話: 日常の挨拶と予定 #93",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "中村さん、こんにちは！今日の調子はどうですか？ | Chào anh 中村! Hôm nay thế nào rồi?\n渡辺さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 渡辺. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 478,
    "title": "Luyện nói: Ordering {food} at restaurant #95",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local beef steak. | Vâng, tôi muốn dùng thử món beef steak đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 479,
    "title": "日本語会話: 日常の挨拶と予定 #94",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "伊藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 伊藤! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。札幌駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 札幌駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 480,
    "title": "日本語会話: 日常の挨拶と予定 #95",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "健太さん、こんにちは！今日の調子はどうですか？ | Chào anh 健太! Hôm nay thế nào rồi?\n中村さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 中村. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。京都の寺院でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 京都の寺院 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 481,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #85",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Hùng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hùng, long time no see. How have you been lately?\nChào Linh, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Linh, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế lại UI/UX. | It is okay, lately I am working on the Thiết kế lại UI/UX project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 482,
    "title": "한국어 연습: 안부 묻기와 약속 #99",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "준호씨, 오랜만이에요! 잘 지냈어요? | Chào anh 준호, lâu rồi không gặp! Anh khỏe không?\n아, 현우씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 현우! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 우산도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 우산 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 483,
    "title": "한국어 연습: 안부 묻기와 약속 #100",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "서연씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서연, lâu rồi không gặp! Anh khỏe không?\n아, 서윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 484,
    "title": "Luyện nói: Lost at {place} #96",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, Michael, I think I lost my notebook here. | Xin lỗi Michael, tôi nghĩ tôi đã đánh mất chiếc notebook ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the central square. | Tôi nghĩ tôi đã để quên nó gần lối vào the central square.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 485,
    "title": "日本語会話: 日常の挨拶と予定 #96",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "優斗さん、こんにちは！今日の調子はどうですか？ | Chào anh 優斗! Hôm nay thế nào rồi?\n加藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 加藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいリュックサックもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc リュックサック mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 486,
    "title": "汉语学习: 日常问候与喝茶 #86",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "张敏，你好！今天过得怎么样？ | 张敏, chào bạn! Hôm nay thế nào rồi?\n明哲，我很好。你今天下午有空吗？ | 明哲, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上钥匙扣吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 钥匙扣 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 487,
    "title": "Luyện nói: Ordering {food} at restaurant #97",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local sandwich. | Vâng, tôi muốn dùng thử món sandwich đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 488,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #86",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Khánh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Khánh, long time no see. How have you been lately?\nChào Linh, mình vẫn khỏe. Công việc ở siêu thị vẫn tốt chứ? | Hello Linh, I am fine. Is your work at siêu thị still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 489,
    "title": "한국어 연습: 안부 묻기와 약속 #101",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "영수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 영수, lâu rồi không gặp! Anh khỏe không?\n아, 민서씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민서! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 한강공원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 한강공원 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 490,
    "title": "日本語会話: レストランで{food}を注文する #97",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のラーメンをお願いします。 | Vâng, cho tôi một phần ラーメン đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 491,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #87",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Linh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Linh, long time no see. How have you been lately?\nChào Nhi, mình vẫn khỏe. Công việc ở sân bay vẫn tốt chứ? | Hello Nhi, I am fine. Is your work at sân bay still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 492,
    "title": "汉语学习: 在餐馆点{food} #87",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色春卷吗？ | Được ạ, xin hỏi quý khách có muốn thử món 春卷 đặc sản của chúng tôi không?\n好的，来一份春卷，再加一碗白米饭。 | Được, cho một phần 春卷, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 493,
    "title": "汉语学习: 在餐馆点{food} #88",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 494,
    "title": "汉语学习: 日常问候与喝茶 #89",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "建国，你好！今天过得怎么样？ | 建国, chào bạn! Hôm nay thế nào rồi?\n德明，我很好。你今天下午有空吗？ | 德明, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 495,
    "title": "Luyện nói: Update on {project} #98",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Mary, can you give me an update on Marketing Campaign? | Chào buổi sáng Mary, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to David next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với David vào tuần tới."
  },
  {
    "id": 496,
    "title": "Luyện nói: Describing {item} #99",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful leather wallet that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ leather wallet hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my leather wallet, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc leather wallet của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 497,
    "title": "한국어 연습: 안부 묻기와 약속 #102",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "영수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 영수, lâu rồi không gặp! Anh khỏe không?\n아, 도윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 도윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 도서관 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 도서관 đi.\n좋은 생각이에요. 제 새로운 우산도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 우산 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 498,
    "title": "日本語会話: レストランで{food}を注文する #98",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のうどんをお願いします。 | Vâng, cho tôi một phần うどん đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 499,
    "title": "Luyện nói: Update on {project} #100",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Sarah, can you give me an update on Web Application Dev? | Chào buổi sáng Sarah, bạn có thể cập nhật cho tôi về dự án Web Application Dev không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Barbara next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Barbara vào tuần tới."
  },
  {
    "id": 500,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #103",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 치킨로 주세요. | Cho tôi món 치킨 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 501,
    "title": "日本語会話: 日常の挨拶と予定 #99",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "大翔さん、こんにちは！今日の調子はどうですか？ | Chào anh 大翔! Hôm nay thế nào rồi?\n陽菜さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 陽菜. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 502,
    "title": "汉语学习: 在餐馆点{food} #90",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 503,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #88",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Chào Khánh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Khánh, long time no see. How have you been lately?\nChào Nam, mình vẫn khỏe. Công việc ở văn phòng trung tâm vẫn tốt chứ? | Hello Nam, I am fine. Is your work at văn phòng trung tâm still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang cuốn sổ ra cho mình xem nhé. | That is wonderful! When you are free, bring your cuốn sổ to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 504,
    "title": "Luyện nói: Describing {item} #101",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful coffee mug that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ coffee mug hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my coffee mug, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc coffee mug của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 505,
    "title": "日本語会話: 日常の挨拶と予定 #100",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "鈴木さん、こんにちは！今日の調子はどうですか？ | Chào anh 鈴木! Hôm nay thế nào rồi?\n高橋さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 高橋. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいコーヒーマグもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc コーヒーマグ mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 506,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #89",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Đức, lâu quá không gặp. Dạo này thế nào rồi? | Hello Đức, long time no see. How have you been lately?\nChào Tuấn, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Tuấn, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 507,
    "title": "한국어 연습: 안부 묻기와 약속 #104",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "도윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 도윤, lâu rồi không gặp! Anh khỏe không?\n아, 정희씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 정희! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 508,
    "title": "日本語会話: 日常の挨拶と予定 #101",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "佐藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 佐藤! Hôm nay thế nào rồi?\n田中さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 田中. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 509,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #90",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Minh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Minh, long time no see. How have you been lately?\nChào Mai, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello Mai, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thuyết trình Khách hàng. | It is okay, lately I am working on the Thuyết trình Khách hàng project.\nTuyệt vời quá! Khi nào rảnh mang móc khóa ra cho mình xem nhé. | That is wonderful! When you are free, bring your móc khóa to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 510,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #91",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hà, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hà, long time no see. How have you been lately?\nChào An, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello An, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Kiểm toán Bảo mật. | It is okay, lately I am working on the Kiểm toán Bảo mật project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 511,
    "title": "日本語会話: 日常の挨拶と予定 #102",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "伊藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 伊藤! Hôm nay thế nào rồi?\n中村さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 中村. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。京都の寺院でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 京都の寺院 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 512,
    "title": "Luyện nói: Describing {item} #102",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful laptop computer that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ laptop computer hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my laptop computer, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc laptop computer của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 513,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #103",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、オフィスの会議室へはどう行けばいいですか？ | Xin hỏi, đi đến オフィスの会議室 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 514,
    "title": "汉语学习: 在餐馆点{food} #91",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 515,
    "title": "汉语学习: 日常问候与喝茶 #92",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "德明，你好！今天过得怎么样？ | 德明, chào bạn! Hôm nay thế nào rồi?\n刘洋，我很好。你今天下午有空吗？ | 刘洋, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上咖啡杯吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 咖啡杯 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 516,
    "title": "한국어 연습: 안부 묻기와 약속 #105",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "지원씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지원, lâu rồi không gặp! Anh khỏe không?\n아, 민준씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민준! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 물통도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 물통 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 517,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #104",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、歯医者へはどう行けばいいですか？ | Xin hỏi, đi đến 歯医者 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 518,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #92",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Lan, lâu quá không gặp. Dạo này thế nào rồi? | Hello Lan, long time no see. How have you been lately?\nChào Hoàng, mình vẫn khỏe. Công việc ở thư viện vẫn tốt chứ? | Hello Hoàng, I am fine. Is your work at thư viện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thuyết trình Khách hàng. | It is okay, lately I am working on the Thuyết trình Khách hàng project.\nTuyệt vời quá! Khi nào rảnh mang máy tính xách tay ra cho mình xem nhé. | That is wonderful! When you are free, bring your máy tính xách tay to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 519,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #93",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Tuấn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Tuấn, long time no see. How have you been lately?\nChào Nam, mình vẫn khỏe. Công việc ở phòng họp vẫn tốt chứ? | Hello Nam, I am fine. Is your work at phòng họp still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế Database. | It is okay, lately I am working on the Thiết kế Database project.\nTuyệt vời quá! Khi nào rảnh mang điện thoại ra cho mình xem nhé. | That is wonderful! When you are free, bring your điện thoại to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 520,
    "title": "Luyện nói: Borrowing {item} #103",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Thomas, do you have a spare leather wallet I can borrow? | Này Thomas, bạn có thừa chiếc leather wallet nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Marketing Campaign project. | Tôi cần nó để làm việc với dự án Marketing Campaign.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, David! You are always so helpful. | Cảm ơn David! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 521,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #94",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Khánh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Khánh, long time no see. How have you been lately?\nChào An, mình vẫn khỏe. Công việc ở văn phòng trung tâm vẫn tốt chứ? | Hello An, I am fine. Is your work at văn phòng trung tâm still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chiến dịch Marketing. | It is okay, lately I am working on the Chiến dịch Marketing project.\nTuyệt vời quá! Khi nào rảnh mang ví da ra cho mình xem nhé. | That is wonderful! When you are free, bring your ví da to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 522,
    "title": "한국어 연습: 안부 묻기와 약속 #106",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "동현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 동현, lâu rồi không gặp! Anh khỏe không?\n아, 민준씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민준! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 물통도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 물통 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 523,
    "title": "日本語会話: 日常の挨拶と予定 #105",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "翔太さん、こんにちは！今日の調子はどうですか？ | Chào anh 翔太! Hôm nay thế nào rồi?\n伊藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 伊藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 524,
    "title": "日本語会話: 日常の挨拶と予定 #106",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "陽菜さん、こんにちは！今日の調子はどうですか？ | Chào anh 陽菜! Hôm nay thế nào rồi?\n大輝さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大輝. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 525,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #95",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Mai, lâu quá không gặp. Dạo này thế nào rồi? | Hello Mai, long time no see. How have you been lately?\nChào Minh, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Minh, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Nâng cấp Mobile App. | It is okay, lately I am working on the Nâng cấp Mobile App project.\nTuyệt vời quá! Khi nào rảnh mang cuốn sổ ra cho mình xem nhé. | That is wonderful! When you are free, bring your cuốn sổ to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 526,
    "title": "日本語会話: レストランで{food}を注文する #107",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のおにぎりをお願いします。 | Vâng, cho tôi một phần おにぎり đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 527,
    "title": "日本語会話: レストランで{food}を注文する #108",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の抹茶アイスをお願いします。 | Vâng, cho tôi một phần 抹茶アイス đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 528,
    "title": "汉语学习: 日常问候与喝茶 #93",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "张伟，你好！今天过得怎么样？ | 张伟, chào bạn! Hôm nay thế nào rồi?\n徐丽，我很好。你今天下午有空吗？ | 徐丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去牙科诊所喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 牙科诊所 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 529,
    "title": "汉语学习: 在餐馆点{food} #94",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 530,
    "title": "Luyện nói: Site safety check at {place} #104",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the dental clinic before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the dental clinic trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 531,
    "title": "汉语学习: 在餐馆点{food} #95",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色火锅吗？ | Được ạ, xin hỏi quý khách có muốn thử món 火锅 đặc sản của chúng tôi không?\n好的，来一份火锅，再加一碗白米饭。 | Được, cho một phần 火锅, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 532,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #96",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Phong, lâu quá không gặp. Dạo này thế nào rồi? | Hello Phong, long time no see. How have you been lately?\nChào Hoàng, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Hoàng, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thuyết trình Khách hàng. | It is okay, lately I am working on the Thuyết trình Khách hàng project.\nTuyệt vời quá! Khi nào rảnh mang cốc cà phê ra cho mình xem nhé. | That is wonderful! When you are free, bring your cốc cà phê to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 533,
    "title": "한국어 연습: 안부 묻기와 약속 #107",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "유진씨, 오랜만이에요! 잘 지냈어요? | Chào anh 유진, lâu rồi không gặp! Anh khỏe không?\n아, 예은씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 예은! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 534,
    "title": "Luyện nói: Describing {item} #105",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful sun hat that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ sun hat hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my sun hat, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc sun hat của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 535,
    "title": "한국어 연습: 안부 묻기와 약속 #108",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "지원씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지원, lâu rồi không gặp! Anh khỏe không?\n아, 성민씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 성민! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 한강공원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 한강공원 đi.\n좋은 생각이에요. 제 새로운 가죽 지갑도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 가죽 지갑 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 536,
    "title": "日本語会話: 日常の挨拶と予定 #109",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "田中さん、こんにちは！今日の調子はどうですか？ | Chào anh 田中! Hôm nay thế nào rồi?\n渡辺さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 渡辺. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。札幌駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 札幌駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 537,
    "title": "汉语学习: 日常问候与喝茶 #96",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "王芳，你好！今天过得怎么样？ | 王芳, chào bạn! Hôm nay thế nào rồi?\n德明，我很好。你今天下午有空吗？ | 德明, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去南京路喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 南京路 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 538,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #97",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Linh, lâu quá không gặp. Dạo này thế nào rồi? | Hello Linh, long time no see. How have you been lately?\nChào Khánh, mình vẫn khỏe. Công việc ở quảng trường vẫn tốt chứ? | Hello Khánh, I am fine. Is your work at quảng trường still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Phát triển Web App. | It is okay, lately I am working on the Phát triển Web App project.\nTuyệt vời quá! Khi nào rảnh mang ba lô ra cho mình xem nhé. | That is wonderful! When you are free, bring your ba lô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 539,
    "title": "日本語会話: 日常の挨拶と予定 #110",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "伊藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 伊藤! Hôm nay thế nào rồi?\n結衣さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 結衣. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。近くのスーパーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 近くのスーパー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 540,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #98",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Hoàng, lâu quá không gặp. Dạo này thế nào rồi? | Hello Hoàng, long time no see. How have you been lately?\nChào Linh, mình vẫn khỏe. Công việc ở ga tàu điện vẫn tốt chứ? | Hello Linh, I am fine. Is your work at ga tàu điện still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Thiết kế lại UI/UX. | It is okay, lately I am working on the Thiết kế lại UI/UX project.\nTuyệt vời quá! Khi nào rảnh mang cuốn sổ ra cho mình xem nhé. | That is wonderful! When you are free, bring your cuốn sổ to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 541,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #109",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 542,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #111",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、図書館へはどう行けばいいですか？ | Xin hỏi, đi đến 図書館 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 543,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #110",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 잡채로 주세요. | Cho tôi món 잡채 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 544,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #99",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Chào Nhi, lâu quá không gặp. Dạo này thế nào rồi? | Hello Nhi, long time no see. How have you been lately?\nChào Đức, mình vẫn khỏe. Công việc ở công viên vẫn tốt chứ? | Hello Đức, I am fine. Is your work at công viên still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Mô hình Machine Learning. | It is okay, lately I am working on the Mô hình Machine Learning project.\nTuyệt vời quá! Khi nào rảnh mang cuốn sổ ra cho mình xem nhé. | That is wonderful! When you are free, bring your cuốn sổ to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 545,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #111",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 치킨로 주세요. | Cho tôi món 치킨 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 546,
    "title": "Vietnamese Speak: Chào hỏi và hỏi thăm công việc #100",
    "description": "Vietnamese shadowing lessons for foreigners learning speaking. Hội thoại giữa hai người bạn cũ hỏi thăm tình hình công việc và cuộc sống.",
    "language": "vi",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Chào Sơn, lâu quá không gặp. Dạo này thế nào rồi? | Hello Sơn, long time no see. How have you been lately?\nChào Vy, mình vẫn khỏe. Công việc ở phòng khám vẫn tốt chứ? | Hello Vy, I am fine. Is your work at phòng khám still going well?\nCũng tạm ổn bạn ạ, dạo này mình đang làm dự án Chuyển đổi Cloud. | It is okay, lately I am working on the Chuyển đổi Cloud project.\nTuyệt vời quá! Khi nào rảnh mang chiếc ô ra cho mình xem nhé. | That is wonderful! When you are free, bring your chiếc ô to show me.\nNhất trí thôi, cuối tuần này nhé! | Agreed, this weekend then!"
  },
  {
    "id": 547,
    "title": "日本語会話: 日常の挨拶と予定 #112",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "大輝さん、こんにちは！今日の調子はどうですか？ | Chào anh 大輝! Hôm nay thế nào rồi?\n健太さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 健太. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 548,
    "title": "Luyện nói: Update on {project} #106",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Sophia, can you give me an update on Machine Learning Model? | Chào buổi sáng Sophia, bạn có thể cập nhật cho tôi về dự án Machine Learning Model không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Olivia next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Olivia vào tuần tới."
  },
  {
    "id": 549,
    "title": "汉语学习: 在餐馆点{food} #97",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 550,
    "title": "汉语学习: 在餐馆点{food} #98",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 551,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #112",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 잡채로 주세요. | Cho tôi món 잡채 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 552,
    "title": "한국어 연습: 안부 묻기와 약속 #113",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "지원씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지원, lâu rồi không gặp! Anh khỏe không?\n아, 서윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 우산도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 우산 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 553,
    "title": "汉语学习: 在餐馆点{food} #99",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 554,
    "title": "汉语学习: 日常问候与喝茶 #100",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "刘洋，你好！今天过得怎么样？ | 刘洋, chào bạn! Hôm nay thế nào rồi?\n海峰，我很好。你今天下午有空吗？ | 海峰, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去北京站喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 北京站 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 555,
    "title": "Luyện nói: Describing {item} #107",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful leather wallet that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ leather wallet hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my leather wallet, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc leather wallet của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 556,
    "title": "日本語会話: 日常の挨拶と予定 #113",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "鈴木さん、こんにちは！今日の調子はどうですか？ | Chào anh 鈴木! Hôm nay thế nào rồi?\n健太さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 健太. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 557,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #114",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、京都の寺院へはどう行けばいいですか？ | Xin hỏi, đi đến 京都の寺院 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 558,
    "title": "Luyện nói: Update on {project} #108",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Daniel, can you give me an update on Marketing Campaign? | Chào buổi sáng Daniel, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Sophia next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Sophia vào tuần tới."
  },
  {
    "id": 559,
    "title": "Luyện nói: Borrowing {item} #109",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Michael, do you have a spare keychain I can borrow? | Này Michael, bạn có thừa chiếc keychain nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Client Presentation project. | Tôi cần nó để làm việc với dự án Client Presentation.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Chloe! You are always so helpful. | Cảm ơn Chloe! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 560,
    "title": "한국어 연습: 안부 묻기와 약속 #114",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "민서씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민서, lâu rồi không gặp! Anh khỏe không?\n아, 민우씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민우! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 561,
    "title": "日本語会話: レストランで{food}を注文する #115",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の抹茶アイスをお願いします。 | Vâng, cho tôi một phần 抹茶アイス đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 562,
    "title": "Luyện nói: Borrowing {item} #110",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Mark, do you have a spare coffee mug I can borrow? | Này Mark, bạn có thừa chiếc coffee mug nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Security Audit project. | Tôi cần nó để làm việc với dự án Security Audit.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Olivia! You are always so helpful. | Cảm ơn Olivia! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 563,
    "title": "Luyện nói: Daily Greeting & Plans #111",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi James, how are you doing today? | Chào James, hôm nay bạn thế nào rồi?\nHi Linda, I am doing great! Are you free this afternoon? | Chào Linda, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the dental clinic for a drink. | Có, tôi rảnh. Cùng đến the dental clinic uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my umbrella. | Khoảng ba giờ thì sao? Tôi sẽ mang theo umbrella của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 564,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #116",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、カフェへはどう行けばいいですか？ | Xin hỏi, đi đến カフェ như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 565,
    "title": "汉语学习: 日常问候与喝茶 #101",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "李静，你好！今天过得怎么样？ | 李静, chào bạn! Hôm nay thế nào rồi?\n周强，我很好。你今天下午有空吗？ | 周强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上钥匙扣吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 钥匙扣 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 566,
    "title": "日本語会話: 日常の挨拶と予定 #117",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "美咲さん、こんにちは！今日の調子はどうですか？ | Chào anh 美咲! Hôm nay thế nào rồi?\n加藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 加藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいリュックサックもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc リュックサック mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 567,
    "title": "汉语学习: 日常问候与喝茶 #102",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "张敏，你好！今天过得怎么样？ | 张敏, chào bạn! Hôm nay thế nào rồi?\n飞龙，我很好。你今天下午有空吗？ | 飞龙, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上智能手机吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 智能手机 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 568,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #118",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、歯医者へはどう行けばいいですか？ | Xin hỏi, đi đến 歯医者 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 569,
    "title": "日本語会話: レストランで{food}を注文する #119",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のうどんをお願いします。 | Vâng, cho tôi một phần うどん đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 570,
    "title": "日本語会話: 日常の挨拶と予定 #120",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "翔太さん、こんにちは！今日の調子はどうですか？ | Chào anh 翔太! Hôm nay thế nào rồi?\n大輝さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大輝. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいキーホルダーもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc キーホルダー mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 571,
    "title": "日本語会話: 日常の挨拶と予定 #121",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "美咲さん、こんにちは！今日の調子はどうですか？ | Chào anh 美咲! Hôm nay thế nào rồi?\n田中さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 田中. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいリュックサックもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc リュックサック mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 572,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #115",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 573,
    "title": "Luyện nói: Site safety check at {place} #112",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the airport terminal before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the airport terminal trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 574,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #116",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 575,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #122",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、カフェへはどう行けばいいですか？ | Xin hỏi, đi đến カフェ như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 576,
    "title": "汉语学习: 在餐馆点{food} #103",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 577,
    "title": "汉语学习: 日常问候与喝茶 #104",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "李军，你好！今天过得怎么样？ | 李军, chào bạn! Hôm nay thế nào rồi?\n明哲，我很好。你今天下午有空吗？ | 明哲, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上雨伞吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 雨伞 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 578,
    "title": "汉语学习: 在餐馆点{food} #105",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色麻婆豆腐吗？ | Được ạ, xin hỏi quý khách có muốn thử món 麻婆豆腐 đặc sản của chúng tôi không?\n好的，来一份麻婆豆腐，再加一碗白米饭。 | Được, cho một phần 麻婆豆腐, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 579,
    "title": "汉语学习: 在餐馆点{food} #106",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 580,
    "title": "Luyện nói: Describing {item} #113",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful water bottle that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ water bottle hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my water bottle, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc water bottle của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 581,
    "title": "Luyện nói: Lost at {place} #114",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, Thomas, I think I lost my laptop computer here. | Xin lỗi Thomas, tôi nghĩ tôi đã đánh mất chiếc laptop computer ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the coffee shop. | Tôi nghĩ tôi đã để quên nó gần lối vào the coffee shop.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 582,
    "title": "汉语学习: 在餐馆点{food} #107",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 583,
    "title": "Luyện nói: Site safety check at {place} #115",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the park before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the park trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 584,
    "title": "Luyện nói: Update on {project} #116",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Paul, can you give me an update on Marketing Campaign? | Chào buổi sáng Paul, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to David next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với David vào tuần tới."
  },
  {
    "id": 585,
    "title": "Luyện nói: Describing {item} #117",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful backpack that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ backpack hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my backpack, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc backpack của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 586,
    "title": "汉语学习: 日常问候与喝茶 #108",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "雅琴，你好！今天过得怎么样？ | 雅琴, chào bạn! Hôm nay thế nào rồi?\n王芳，我很好。你今天下午有空吗？ | 王芳, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上钥匙扣吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 钥匙扣 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 587,
    "title": "Luyện nói: Update on {project} #118",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Daniel, can you give me an update on Cloud Migration? | Chào buổi sáng Daniel, bạn có thể cập nhật cho tôi về dự án Cloud Migration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Elizabeth next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Elizabeth vào tuần tới."
  },
  {
    "id": 588,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #117",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 떡볶이로 주세요. | Cho tôi món 떡볶이 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 589,
    "title": "Luyện nói: Describing {item} #119",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 590,
    "title": "汉语学习: 日常问候与喝茶 #109",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "志强，你好！今天过得怎么样？ | 志强, chào bạn! Hôm nay thế nào rồi?\n雅琴，我很好。你今天下午有空吗？ | 雅琴, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 591,
    "title": "한국어 연습: 안부 묻기와 약속 #118",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "정희씨, 오랜만이에요! 잘 지냈어요? | Chào anh 정희, lâu rồi không gặp! Anh khỏe không?\n아, 성민씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 성민! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 도서관 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 도서관 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 592,
    "title": "汉语学习: 日常问候与喝茶 #110",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n张伟，我很好。你今天下午有空吗？ | 张伟, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 593,
    "title": "한국어 연습: 안부 묻기와 약속 #119",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "서연씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서연, lâu rồi không gặp! Anh khỏe không?\n아, 영수씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 영수! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 594,
    "title": "汉语学习: 在餐馆点{food} #111",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 595,
    "title": "汉语学习: 日常问候与喝茶 #112",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "王芳，你好！今天过得怎么样？ | 王芳, chào bạn! Hôm nay thế nào rồi?\n丽华，我很好。你今天下午有空吗？ | 丽华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去附近的超市喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 附近的超市 uống tách trà không?\n那太好了！我们要带上笔记本吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 596,
    "title": "Luyện nói: Describing {item} #120",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful laptop computer that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ laptop computer hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my laptop computer, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc laptop computer của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 597,
    "title": "汉语学习: 日常问候与喝茶 #113",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "刘洋，你好！今天过得怎么样？ | 刘洋, chào bạn! Hôm nay thế nào rồi?\n小红，我很好。你今天下午有空吗？ | 小红, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 598,
    "title": "Luyện nói: Update on {project} #121",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Daniel, can you give me an update on Marketing Campaign? | Chào buổi sáng Daniel, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Sophia next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Sophia vào tuần tới."
  },
  {
    "id": 599,
    "title": "Luyện nói: Site safety check at {place} #122",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the conference room before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the conference room trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 600,
    "title": "日本語会話: 日常の挨拶と予定 #123",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\n蓮さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 蓮. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。図書館でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 図書館 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 601,
    "title": "Luyện nói: Describing {item} #123",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful notebook that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ notebook hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my notebook, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc notebook của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 602,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #120",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 603,
    "title": "한국어 연습: 안부 묻기와 약속 #121",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "도윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 도윤, lâu rồi không gặp! Anh khỏe không?\n아, 성민씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 성민! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 근처 슈퍼마켓 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 근처 슈퍼마켓 đi.\n좋은 생각이에요. 제 새로운 공책도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 공책 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 604,
    "title": "Luyện nói: Lost at {place} #124",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Excuse me, Mary, I think I lost my water bottle here. | Xin lỗi Mary, tôi nghĩ tôi đã đánh mất chiếc water bottle ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the downtown office. | Tôi nghĩ tôi đã để quên nó gần lối vào the downtown office.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 605,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #122",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 606,
    "title": "Luyện nói: Borrowing {item} #125",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Robert, do you have a spare coffee mug I can borrow? | Này Robert, bạn có thừa chiếc coffee mug nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Mobile App Upgrade project. | Tôi cần nó để làm việc với dự án Mobile App Upgrade.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Elizabeth! You are always so helpful. | Cảm ơn Elizabeth! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 607,
    "title": "汉语学习: 在餐馆点{food} #114",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 608,
    "title": "汉语学习: 在餐馆点{food} #115",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 609,
    "title": "日本語会話: 日常の挨拶と予定 #124",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "鈴木さん、こんにちは！今日の調子はどうですか？ | Chào anh 鈴木! Hôm nay thế nào rồi?\n山本さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 山本. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 610,
    "title": "汉语学习: 日常问候与喝茶 #116",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "晓华，你好！今天过得怎么样？ | 晓华, chào bạn! Hôm nay thế nào rồi?\n德明，我很好。你今天下午有空吗？ | 德明, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 611,
    "title": "汉语学习: 日常问候与喝茶 #117",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "丽华，你好！今天过得怎么样？ | 丽华, chào bạn! Hôm nay thế nào rồi?\n小红，我很好。你今天下午有空吗？ | 小红, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上钥匙扣吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 钥匙扣 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 612,
    "title": "Luyện nói: Ordering {food} at restaurant #126",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local fried chicken. | Vâng, tôi muốn dùng thử món fried chicken đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 613,
    "title": "汉语学习: 在餐馆点{food} #118",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 614,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #125",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、図書館へはどう行けばいいですか？ | Xin hỏi, đi đến 図書館 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 615,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #126",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、札幌駅へはどう行けばいいですか？ | Xin hỏi, đi đến 札幌駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 616,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #123",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 떡볶이로 주세요. | Cho tôi món 떡볶이 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 617,
    "title": "日本語会話: レストランで{food}を注文する #127",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の牛丼をお願いします。 | Vâng, cho tôi một phần 牛丼 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 618,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #124",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 떡볶이로 주세요. | Cho tôi món 떡볶이 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 619,
    "title": "Luyện nói: Site safety check at {place} #127",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the airport terminal before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the airport terminal trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 620,
    "title": "한국어 연습: 안부 묻기와 약속 #125",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "유진씨, 오랜만이에요! 잘 지냈어요? | Chào anh 유진, lâu rồi không gặp! Anh khỏe không?\n아, 성민씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 성민! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 강남역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 강남역 đi.\n좋은 생각이에요. 제 새로운 우산도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 우산 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 621,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #128",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、近くのスーパーへはどう行けばいいですか？ | Xin hỏi, đi đến 近くのスーパー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 622,
    "title": "Luyện nói: Site safety check at {place} #128",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the conference room before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the conference room trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 623,
    "title": "Luyện nói: Describing {item} #129",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful leather wallet that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ leather wallet hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my leather wallet, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc leather wallet của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 624,
    "title": "Luyện nói: Lost at {place} #130",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Excuse me, Chloe, I think I lost my water bottle here. | Xin lỗi Chloe, tôi nghĩ tôi đã đánh mất chiếc water bottle ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the downtown office. | Tôi nghĩ tôi đã để quên nó gần lối vào the downtown office.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 625,
    "title": "汉语学习: 日常问候与喝茶 #119",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "德明，你好！今天过得怎么样？ | 德明, chào bạn! Hôm nay thế nào rồi?\n建国，我很好。你今天下午有空吗？ | 建国, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 626,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #126",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 627,
    "title": "日本語会話: 日常の挨拶と予定 #129",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "伊藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 伊藤! Hôm nay thế nào rồi?\n結衣さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 結衣. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいリュックサックもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc リュックサック mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 628,
    "title": "汉语学习: 日常问候与喝茶 #120",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "王芳，你好！今天过得怎么样？ | 王芳, chào bạn! Hôm nay thế nào rồi?\n丽华，我很好。你今天下午有空吗？ | 丽华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去天安门广场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 天安门广场 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 629,
    "title": "汉语学习: 日常问候与喝茶 #121",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n小红，我很好。你今天下午有空吗？ | 小红, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去北京站喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 北京站 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 630,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #127",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 631,
    "title": "Luyện nói: Ordering {food} at restaurant #131",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local pizza slice. | Vâng, tôi muốn dùng thử món pizza slice đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 632,
    "title": "汉语学习: 在餐馆点{food} #122",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 633,
    "title": "한국어 연습: 안부 묻기와 약속 #128",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "성민씨, 오랜만이에요! 잘 지냈어요? | Chào anh 성민, lâu rồi không gặp! Anh khỏe không?\n아, 민준씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민준! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 634,
    "title": "한국어 연습: 안부 묻기와 약속 #129",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "유진씨, 오랜만이에요! 잘 지냈어요? | Chào anh 유진, lâu rồi không gặp! Anh khỏe không?\n아, 서연씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서연! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 635,
    "title": "Luyện nói: Daily Greeting & Plans #132",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi Barbara, how are you doing today? | Chào Barbara, hôm nay bạn thế nào rồi?\nHi Paul, I am doing great! Are you free this afternoon? | Chào Paul, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the subway station for a drink. | Có, tôi rảnh. Cùng đến the subway station uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my backpack. | Khoảng ba giờ thì sao? Tôi sẽ mang theo backpack của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 636,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #130",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、札幌駅へはどう行けばいいですか？ | Xin hỏi, đi đến 札幌駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 637,
    "title": "한국어 연습: 안부 묻기와 약속 #130",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "영수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 영수, lâu rồi không gặp! Anh khỏe không?\n아, 동현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 동현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 물통도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 물통 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 638,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #131",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、近くのスーパーへはどう行けばいいですか？ | Xin hỏi, đi đến 近くのスーパー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 639,
    "title": "한국어 연습: 안부 묻기와 약속 #131",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "수빈씨, 오랜만이에요! 잘 지냈어요? | Chào anh 수빈, lâu rồi không gặp! Anh khỏe không?\n아, 성민씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 성민! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 640,
    "title": "한국어 연습: 안부 묻기와 약속 #132",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "하은씨, 오랜만이에요! 잘 지냈어요? | Chào anh 하은, lâu rồi không gặp! Anh khỏe không?\n아, 태현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 태현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 우산도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 우산 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 641,
    "title": "汉语学习: 日常问候与喝茶 #123",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "飞龙，你好！今天过得怎么样？ | 飞龙, chào bạn! Hôm nay thế nào rồi?\n张敏，我很好。你今天下午有空吗？ | 张敏, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上咖啡杯吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 咖啡杯 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 642,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #133",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 643,
    "title": "日本語会話: レストランで{food}を注文する #132",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の抹茶アイスをお願いします。 | Vâng, cho tôi một phần 抹茶アイス đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 644,
    "title": "日本語会話: レストランで{food}を注文する #133",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のたこ焼きをお願いします。 | Vâng, cho tôi một phần たこ焼き đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 645,
    "title": "日本語会話: レストランで{food}を注文する #134",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の抹茶アイスをお願いします。 | Vâng, cho tôi một phần 抹茶アイス đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 646,
    "title": "日本語会話: 日常の挨拶と予定 #135",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "中村さん、こんにちは！今日の調子はどうですか？ | Chào anh 中村! Hôm nay thế nào rồi?\n大輝さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大輝. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 647,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #134",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 648,
    "title": "汉语学习: 日常问候与喝茶 #124",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "飞龙，你好！今天过得怎么样？ | 飞龙, chào bạn! Hôm nay thế nào rồi?\n李静，我很好。你今天下午有空吗？ | 李静, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去南京路喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 南京路 uống tách trà không?\n那太好了！我们要带上智能手机吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 智能手机 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 649,
    "title": "Luyện nói: Site safety check at {place} #133",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the park before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the park trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 650,
    "title": "Luyện nói: Borrowing {item} #134",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Paul, do you have a spare umbrella I can borrow? | Này Paul, bạn có thừa chiếc umbrella nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the UI/UX Redesign project. | Tôi cần nó để làm việc với dự án UI/UX Redesign.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Jessica! You are always so helpful. | Cảm ơn Jessica! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 651,
    "title": "汉语学习: 日常问候与喝茶 #125",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "建国，你好！今天过得怎么样？ | 建国, chào bạn! Hôm nay thế nào rồi?\n王芳，我很好。你今天下午有空吗？ | 王芳, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上钥匙扣吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 钥匙扣 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 652,
    "title": "Luyện nói: Site safety check at {place} #135",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the downtown office before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the downtown office trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 653,
    "title": "Luyện nói: Lost at {place} #136",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, Sarah, I think I lost my smartphone here. | Xin lỗi Sarah, tôi nghĩ tôi đã đánh mất chiếc smartphone ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the conference room. | Tôi nghĩ tôi đã để quên nó gần lối vào the conference room.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 654,
    "title": "日本語会話: 日常の挨拶と予定 #136",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\n渡辺さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 渡辺. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。京都の寺院でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 京都の寺院 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいリュックサックもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc リュックサック mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 655,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #135",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 656,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #136",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 잡채로 주세요. | Cho tôi món 잡채 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 657,
    "title": "汉语学习: 在餐馆点{food} #126",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色牛肉面吗？ | Được ạ, xin hỏi quý khách có muốn thử món 牛肉面 đặc sản của chúng tôi không?\n好的，来一份牛肉面，再加一碗白米饭。 | Được, cho một phần 牛肉面, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 658,
    "title": "汉语学习: 日常问候与喝茶 #127",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "周强，你好！今天过得怎么样？ | 周强, chào bạn! Hôm nay thế nào rồi?\n张伟，我很好。你今天下午有空吗？ | 张伟, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上咖啡杯吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 咖啡杯 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 659,
    "title": "한국어 연습: 안부 묻기와 약속 #137",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "성민씨, 오랜만이에요! 잘 지냈어요? | Chào anh 성민, lâu rồi không gặp! Anh khỏe không?\n아, 수빈씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 수빈! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 도서관 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 도서관 đi.\n좋은 생각이에요. 제 새로운 우산도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 우산 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 660,
    "title": "Luyện nói: Describing {item} #137",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful sun hat that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ sun hat hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my sun hat, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc sun hat của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 661,
    "title": "Luyện nói: Daily Greeting & Plans #138",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi Michael, how are you doing today? | Chào Michael, hôm nay bạn thế nào rồi?\nHi Robert, I am doing great! Are you free this afternoon? | Chào Robert, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the airport terminal for a drink. | Có, tôi rảnh. Cùng đến the airport terminal uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my backpack. | Khoảng ba giờ thì sao? Tôi sẽ mang theo backpack của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 662,
    "title": "Luyện nói: Site safety check at {place} #139",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the dental clinic before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the dental clinic trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 663,
    "title": "汉语学习: 日常问候与喝茶 #128",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "王丽，你好！今天过得怎么样？ | 王丽, chào bạn! Hôm nay thế nào rồi?\n王芳，我很好。你今天下午有空吗？ | 王芳, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上智能手机吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 智能手机 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 664,
    "title": "日本語会話: 日常の挨拶と予定 #137",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "優斗さん、こんにちは！今日の調子はどうですか？ | Chào anh 優斗! Hôm nay thế nào rồi?\n美咲さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 美咲. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 665,
    "title": "汉语学习: 日常问候与喝茶 #129",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "陈杰，你好！今天过得怎么样？ | 陈杰, chào bạn! Hôm nay thế nào rồi?\n德明，我很好。你今天下午有空吗？ | 德明, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去北京站喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 北京站 uống tách trà không?\n那太好了！我们要带上背包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 背包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 666,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #138",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、京都の寺院へはどう行けばいいですか？ | Xin hỏi, đi đến 京都の寺院 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 667,
    "title": "日本語会話: 日常の挨拶と予定 #139",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\n優斗さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 優斗. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 668,
    "title": "Luyện nói: Update on {project} #140",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Jessica, can you give me an update on UI/UX Redesign? | Chào buổi sáng Jessica, bạn có thể cập nhật cho tôi về dự án UI/UX Redesign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Michael next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Michael vào tuần tới."
  },
  {
    "id": 669,
    "title": "汉语学习: 日常问候与喝茶 #130",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "丽华，你好！今天过得怎么样？ | 丽华, chào bạn! Hôm nay thế nào rồi?\n小红，我很好。你今天下午有空吗？ | 小红, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去北京站喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 北京站 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 670,
    "title": "汉语学习: 在餐馆点{food} #131",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色麻婆豆腐吗？ | Được ạ, xin hỏi quý khách có muốn thử món 麻婆豆腐 đặc sản của chúng tôi không?\n好的，来一份麻婆豆腐，再加一碗白米饭。 | Được, cho một phần 麻婆豆腐, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 671,
    "title": "Luyện nói: Site safety check at {place} #141",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the dental clinic before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the dental clinic trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 672,
    "title": "汉语学习: 日常问候与喝茶 #132",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "周强，你好！今天过得怎么样？ | 周强, chào bạn! Hôm nay thế nào rồi?\n建国，我很好。你今天下午有空吗？ | 建国, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去附近的超市喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 附近的超市 uống tách trà không?\n那太好了！我们要带上笔记本吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 673,
    "title": "한국어 연습: 안부 묻기와 약속 #138",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "지수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지수, lâu rồi không gặp! Anh khỏe không?\n아, 영수씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 영수! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 674,
    "title": "Luyện nói: Lost at {place} #142",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Excuse me, Sarah, I think I lost my sun hat here. | Xin lỗi Sarah, tôi nghĩ tôi đã đánh mất chiếc sun hat ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the coffee shop. | Tôi nghĩ tôi đã để quên nó gần lối vào the coffee shop.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 675,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #139",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 676,
    "title": "한국어 연습: 안부 묻기와 약속 #140",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "도윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 도윤, lâu rồi không gặp! Anh khỏe không?\n아, 성민씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 성민! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 677,
    "title": "Luyện nói: Site safety check at {place} #143",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the subway station before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the subway station trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 678,
    "title": "汉语学习: 日常问候与喝茶 #133",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "陈杰，你好！今天过得怎么样？ | 陈杰, chào bạn! Hôm nay thế nào rồi?\n晓华，我很好。你今天下午有空吗？ | 晓华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上背包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 背包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 679,
    "title": "Luyện nói: Update on {project} #144",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Jessica, can you give me an update on Database Design? | Chào buổi sáng Jessica, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Elizabeth next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Elizabeth vào tuần tới."
  },
  {
    "id": 680,
    "title": "Luyện nói: Describing {item} #145",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 681,
    "title": "日本語会話: 日常の挨拶と予定 #140",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "蓮さん、こんにちは！今日の調子はどうですか？ | Chào anh 蓮! Hôm nay thế nào rồi?\n大輝さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大輝. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 682,
    "title": "汉语学习: 在餐馆点{food} #134",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 683,
    "title": "Luyện nói: Lost at {place} #146",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, Olivia, I think I lost my laptop computer here. | Xin lỗi Olivia, tôi nghĩ tôi đã đánh mất chiếc laptop computer ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the subway station. | Tôi nghĩ tôi đã để quên nó gần lối vào the subway station.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 684,
    "title": "한국어 연습: 안부 묻기와 약속 #141",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "서연씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서연, lâu rồi không gặp! Anh khỏe không?\n아, 지원씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지원! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 685,
    "title": "Luyện nói: Site safety check at {place} #147",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the central square before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the central square trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 686,
    "title": "汉语学习: 日常问候与喝茶 #135",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "刘洋，你好！今天过得怎么样？ | 刘洋, chào bạn! Hôm nay thế nào rồi?\n李静，我很好。你今天下午有空吗？ | 李静, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上笔记本吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 687,
    "title": "日本語会話: レストランで{food}を注文する #141",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のうどんをお願いします。 | Vâng, cho tôi một phần うどん đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 688,
    "title": "日本語会話: 日常の挨拶と予定 #142",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "渡辺さん、こんにちは！今日の調子はどうですか？ | Chào anh 渡辺! Hôm nay thế nào rồi?\n山本さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 山本. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 689,
    "title": "日本語会話: 日常の挨拶と予定 #143",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "結衣さん、こんにちは！今日の調子はどうですか？ | Chào anh 結衣! Hôm nay thế nào rồi?\n陽菜さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 陽菜. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。近くのスーパーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 近くのスーパー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいキーホルダーもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc キーホルダー mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 690,
    "title": "汉语学习: 在餐馆点{food} #136",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 691,
    "title": "Luyện nói: Site safety check at {place} #148",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the central square before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the central square trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 692,
    "title": "汉语学习: 日常问候与喝茶 #137",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n雅琴，我很好。你今天下午有空吗？ | 雅琴, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上咖啡杯吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 咖啡杯 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 693,
    "title": "汉语学习: 日常问候与喝茶 #138",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "雅琴，你好！今天过得怎么样？ | 雅琴, chào bạn! Hôm nay thế nào rồi?\n晓华，我很好。你今天下午有空吗？ | 晓华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 694,
    "title": "汉语学习: 日常问候与喝茶 #139",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "李静，你好！今天过得怎么样？ | 李静, chào bạn! Hôm nay thế nào rồi?\n小红，我很好。你今天下午有空吗？ | 小红, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 695,
    "title": "汉语学习: 在餐馆点{food} #140",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色牛肉面吗？ | Được ạ, xin hỏi quý khách có muốn thử món 牛肉面 đặc sản của chúng tôi không?\n好的，来一份牛肉面，再加一碗白米饭。 | Được, cho một phần 牛肉面, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 696,
    "title": "日本語会話: 日常の挨拶と予定 #144",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "結衣さん、こんにちは！今日の調子はどうですか？ | Chào anh 結衣! Hôm nay thế nào rồi?\n山本さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 山本. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 697,
    "title": "Luyện nói: Site safety check at {place} #149",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the subway station before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the subway station trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 698,
    "title": "Luyện nói: Daily Greeting & Plans #150",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi John, how are you doing today? | Chào John, hôm nay bạn thế nào rồi?\nHi Thomas, I am doing great! Are you free this afternoon? | Chào Thomas, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the coffee shop for a drink. | Có, tôi rảnh. Cùng đến the coffee shop uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my umbrella. | Khoảng ba giờ thì sao? Tôi sẽ mang theo umbrella của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 699,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #142",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 700,
    "title": "日本語会話: 日常の挨拶と予定 #145",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "大輝さん、こんにちは！今日の調子はどうですか？ | Chào anh 大輝! Hôm nay thế nào rồi?\n健太さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 健太. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 701,
    "title": "日本語会話: 日常の挨拶と予定 #146",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "山本さん、こんにちは！今日の調子はどうですか？ | Chào anh 山本! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 702,
    "title": "Luyện nói: Describing {item} #151",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful sun hat that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ sun hat hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my sun hat, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc sun hat của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 703,
    "title": "汉语学习: 日常问候与喝茶 #141",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "王芳，你好！今天过得怎么样？ | 王芳, chào bạn! Hôm nay thế nào rồi?\n飞龙，我很好。你今天下午有空吗？ | 飞龙, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 704,
    "title": "한국어 연습: 안부 묻기와 약속 #143",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "준호씨, 오랜만이에요! 잘 지냈어요? | Chào anh 준호, lâu rồi không gặp! Anh khỏe không?\n아, 서연씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서연! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 근처 슈퍼마켓 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 근처 슈퍼마켓 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 705,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #147",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、図書館へはどう行けばいいですか？ | Xin hỏi, đi đến 図書館 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 706,
    "title": "Luyện nói: Describing {item} #152",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful backpack that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ backpack hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my backpack, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc backpack của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 707,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #144",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 708,
    "title": "日本語会話: 日常の挨拶と予定 #148",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "鈴木さん、こんにちは！今日の調子はどうですか？ | Chào anh 鈴木! Hôm nay thế nào rồi?\n加藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 加藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。図書館でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 図書館 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいコーヒーマグもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc コーヒーマグ mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 709,
    "title": "한국어 연습: 안부 묻기와 약속 #145",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "도윤씨, 오랜만이에요! 잘 지냈어요? | Chào anh 도윤, lâu rồi không gặp! Anh khỏe không?\n아, 준호씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 준호! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 710,
    "title": "Luyện nói: Site safety check at {place} #153",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the central square before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the central square trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 711,
    "title": "汉语学习: 在餐馆点{food} #142",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 712,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #146",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 713,
    "title": "汉语学习: 在餐馆点{food} #143",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 714,
    "title": "日本語会話: 日常の挨拶と予定 #149",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "高橋さん、こんにちは！今日の調子はどうですか？ | Chào anh 高橋! Hôm nay thế nào rồi?\nさくらさん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh さくら. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。札幌駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 札幌駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 715,
    "title": "汉语学习: 在餐馆点{food} #144",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 716,
    "title": "Luyện nói: Update on {project} #154",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Linda, can you give me an update on Client Presentation? | Chào buổi sáng Linda, bạn có thể cập nhật cho tôi về dự án Client Presentation không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to James next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với James vào tuần tới."
  },
  {
    "id": 717,
    "title": "Luyện nói: Lost at {place} #155",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Excuse me, James, I think I lost my coffee mug here. | Xin lỗi James, tôi nghĩ tôi đã đánh mất chiếc coffee mug ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the coffee shop. | Tôi nghĩ tôi đã để quên nó gần lối vào the coffee shop.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 718,
    "title": "Luyện nói: Site safety check at {place} #156",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the subway station before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the subway station trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 719,
    "title": "汉语学习: 在餐馆点{food} #145",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 720,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #150",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、図書館へはどう行けばいいですか？ | Xin hỏi, đi đến 図書館 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 721,
    "title": "汉语学习: 在餐馆点{food} #146",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 722,
    "title": "汉语学习: 日常问候与喝茶 #147",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n周强，我很好。你今天下午有空吗？ | 周强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去附近的超市喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 附近的超市 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 723,
    "title": "日本語会話: 日常の挨拶と予定 #151",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "大翔さん、こんにちは！今日の調子はどうですか？ | Chào anh 大翔! Hôm nay thế nào rồi?\n陽菜さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 陽菜. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。新宿駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 新宿駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 724,
    "title": "Luyện nói: Site safety check at {place} #157",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the conference room before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the conference room trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 725,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #147",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 726,
    "title": "汉语学习: 在餐馆点{food} #148",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 727,
    "title": "Luyện nói: Describing {item} #158",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful keychain that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ keychain hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my keychain, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc keychain của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 728,
    "title": "Luyện nói: Site safety check at {place} #159",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the supermarket before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the supermarket trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 729,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #148",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 냉면로 주세요. | Cho tôi món 냉면 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 730,
    "title": "Luyện nói: Borrowing {item} #160",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hey Emily, do you have a spare backpack I can borrow? | Này Emily, bạn có thừa chiếc backpack nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Marketing Campaign project. | Tôi cần nó để làm việc với dự án Marketing Campaign.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, David! You are always so helpful. | Cảm ơn David! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 731,
    "title": "한국어 연습: 안부 묻기와 약속 #149",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "동현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 동현, lâu rồi không gặp! Anh khỏe không?\n아, 지원씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지원! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 732,
    "title": "Luyện nói: Lost at {place} #161",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Excuse me, Sophia, I think I lost my backpack here. | Xin lỗi Sophia, tôi nghĩ tôi đã đánh mất chiếc backpack ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the airport terminal. | Tôi nghĩ tôi đã để quên nó gần lối vào the airport terminal.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 733,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #150",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 734,
    "title": "Luyện nói: Update on {project} #162",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Olivia, can you give me an update on Client Presentation? | Chào buổi sáng Olivia, bạn có thể cập nhật cho tôi về dự án Client Presentation không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Paul next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Paul vào tuần tới."
  },
  {
    "id": 735,
    "title": "Luyện nói: Ordering {food} at restaurant #163",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local fried chicken. | Vâng, tôi muốn dùng thử món fried chicken đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 736,
    "title": "한국어 연습: 안부 묻기와 약속 #151",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "수빈씨, 오랜만이에요! 잘 지냈어요? | Chào anh 수빈, lâu rồi không gặp! Anh khỏe không?\n아, 하은씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 하은! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 인천공항 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 인천공항 đi.\n좋은 생각이에요. 제 새로운 가죽 지갑도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 가죽 지갑 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 737,
    "title": "汉语学习: 在餐馆点{food} #149",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 738,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #152",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、オフィスの会議室へはどう行けばいいですか？ | Xin hỏi, đi đến オフィスの会議室 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 739,
    "title": "日本語会話: 日常の挨拶と予定 #153",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "健太さん、こんにちは！今日の調子はどうですか？ | Chào anh 健太! Hôm nay thế nào rồi?\n美咲さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 美咲. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。札幌駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 札幌駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 740,
    "title": "日本語会話: 日常の挨拶と予定 #154",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "田中さん、こんにちは！今日の調子はどうですか？ | Chào anh 田中! Hôm nay thế nào rồi?\n山本さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 山本. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。図書館でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 図書館 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 741,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #152",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 742,
    "title": "Luyện nói: Borrowing {item} #164",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Daniel, do you have a spare laptop computer I can borrow? | Này Daniel, bạn có thừa chiếc laptop computer nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Marketing Campaign project. | Tôi cần nó để làm việc với dự án Marketing Campaign.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Sarah! You are always so helpful. | Cảm ơn Sarah! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 743,
    "title": "汉语学习: 在餐馆点{food} #150",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 744,
    "title": "한국어 연습: 안부 묻기와 약속 #153",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "현우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 현우, lâu rồi không gặp! Anh khỏe không?\n아, 영수씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 영수! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 한강공원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 한강공원 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 745,
    "title": "汉语学习: 在餐馆点{food} #151",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色火锅吗？ | Được ạ, xin hỏi quý khách có muốn thử món 火锅 đặc sản của chúng tôi không?\n好的，来一份火锅，再加一碗白米饭。 | Được, cho một phần 火锅, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 746,
    "title": "汉语学习: 在餐馆点{food} #152",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色牛肉面吗？ | Được ạ, xin hỏi quý khách có muốn thử món 牛肉面 đặc sản của chúng tôi không?\n好的，来一份牛肉面，再加一碗白米饭。 | Được, cho một phần 牛肉面, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 747,
    "title": "한국어 연습: 안부 묻기와 약속 #154",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "민준씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민준, lâu rồi không gặp! Anh khỏe không?\n아, 서연씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서연! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 748,
    "title": "日本語会話: 日常の挨拶と予定 #155",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "大輝さん、こんにちは！今日の調子はどうですか？ | Chào anh 大輝! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 749,
    "title": "日本語会話: レストランで{food}を注文する #156",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の寿司をお願いします。 | Vâng, cho tôi một phần 寿司 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 750,
    "title": "汉语学习: 在餐馆点{food} #153",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色春卷吗？ | Được ạ, xin hỏi quý khách có muốn thử món 春卷 đặc sản của chúng tôi không?\n好的，来一份春卷，再加一碗白米饭。 | Được, cho một phần 春卷, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 751,
    "title": "汉语学习: 在餐馆点{food} #154",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色水饺吗？ | Được ạ, xin hỏi quý khách có muốn thử món 水饺 đặc sản của chúng tôi không?\n好的，来一份水饺，再加一碗白米饭。 | Được, cho một phần 水饺, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 752,
    "title": "Luyện nói: Borrowing {item} #165",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Jessica, do you have a spare umbrella I can borrow? | Này Jessica, bạn có thừa chiếc umbrella nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the API Integration project. | Tôi cần nó để làm việc với dự án API Integration.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Emily! You are always so helpful. | Cảm ơn Emily! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 753,
    "title": "Luyện nói: Site safety check at {place} #166",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the coffee shop before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the coffee shop trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 754,
    "title": "日本語会話: 日常の挨拶と予定 #157",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "優斗さん、こんにちは！今日の調子はどうですか？ | Chào anh 優斗! Hôm nay thế nào rồi?\n健太さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 健太. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 755,
    "title": "한국어 연습: 안부 묻기와 약속 #155",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "지원씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지원, lâu rồi không gặp! Anh khỏe không?\n아, 태현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 태현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 가죽 지갑도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 가죽 지갑 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 756,
    "title": "Luyện nói: Update on {project} #167",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Olivia, can you give me an update on Marketing Campaign? | Chào buổi sáng Olivia, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to James next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với James vào tuần tới."
  },
  {
    "id": 757,
    "title": "汉语学习: 日常问候与喝茶 #155",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "陈杰，你好！今天过得怎么样？ | 陈杰, chào bạn! Hôm nay thế nào rồi?\n飞龙，我很好。你今天下午有空吗？ | 飞龙, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去牙科诊所喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 牙科诊所 uống tách trà không?\n那太好了！我们要带上雨伞吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 雨伞 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 758,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #156",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 잡채로 주세요. | Cho tôi món 잡채 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 759,
    "title": "汉语学习: 日常问候与喝茶 #156",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "刘洋，你好！今天过得怎么样？ | 刘洋, chào bạn! Hôm nay thế nào rồi?\n张敏，我很好。你今天下午有空吗？ | 张敏, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去附近的超市喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 附近的超市 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 760,
    "title": "Luyện nói: Site safety check at {place} #168",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the airport terminal before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the airport terminal trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 761,
    "title": "Luyện nói: Borrowing {item} #169",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Barbara, do you have a spare laptop computer I can borrow? | Này Barbara, bạn có thừa chiếc laptop computer nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Database Design project. | Tôi cần nó để làm việc với dự án Database Design.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Elizabeth! You are always so helpful. | Cảm ơn Elizabeth! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 762,
    "title": "汉语学习: 在餐馆点{food} #157",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 763,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #157",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 764,
    "title": "汉语学习: 在餐馆点{food} #158",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色春卷吗？ | Được ạ, xin hỏi quý khách có muốn thử món 春卷 đặc sản của chúng tôi không?\n好的，来一份春卷，再加一碗白米饭。 | Được, cho một phần 春卷, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 765,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #158",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、東京タワーへはどう行けばいいですか？ | Xin hỏi, đi đến 東京タワー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 766,
    "title": "日本語会話: 日常の挨拶と予定 #159",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "佐藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 佐藤! Hôm nay thế nào rồi?\n鈴木さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 鈴木. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいリュックサックもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc リュックサック mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 767,
    "title": "Luyện nói: Describing {item} #170",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 768,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #158",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 769,
    "title": "汉语学习: 日常问候与喝茶 #159",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "晓华，你好！今天过得怎么样？ | 晓华, chào bạn! Hôm nay thế nào rồi?\n刘洋，我很好。你今天下午有空吗？ | 刘洋, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去牙科诊所喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 牙科诊所 uống tách trà không?\n那太好了！我们要带上水壶吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 水壶 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 770,
    "title": "Luyện nói: Ordering {food} at restaurant #171",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local chocolate cake. | Vâng, tôi muốn dùng thử món chocolate cake đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 771,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #160",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、図書館へはどう行けばいいですか？ | Xin hỏi, đi đến 図書館 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 772,
    "title": "Luyện nói: Ordering {food} at restaurant #172",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local sandwich. | Vâng, tôi muốn dùng thử món sandwich đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 773,
    "title": "汉语学习: 在餐馆点{food} #160",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色牛肉面吗？ | Được ạ, xin hỏi quý khách có muốn thử món 牛肉面 đặc sản của chúng tôi không?\n好的，来一份牛肉面，再加一碗白米饭。 | Được, cho một phần 牛肉面, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 774,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #159",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 775,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #161",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、歯医者へはどう行けばいいですか？ | Xin hỏi, đi đến 歯医者 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 776,
    "title": "Luyện nói: Describing {item} #173",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 777,
    "title": "Luyện nói: Update on {project} #174",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Sarah, can you give me an update on Marketing Campaign? | Chào buổi sáng Sarah, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to David next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với David vào tuần tới."
  },
  {
    "id": 778,
    "title": "汉语学习: 日常问候与喝茶 #161",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "王丽，你好！今天过得怎么样？ | 王丽, chào bạn! Hôm nay thế nào rồi?\n周强，我很好。你今天下午有空吗？ | 周强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 779,
    "title": "Luyện nói: Describing {item} #175",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful coffee mug that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ coffee mug hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my coffee mug, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc coffee mug của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 780,
    "title": "汉语学习: 在餐馆点{food} #162",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色火锅吗？ | Được ạ, xin hỏi quý khách có muốn thử món 火锅 đặc sản của chúng tôi không?\n好的，来一份火锅，再加一碗白米饭。 | Được, cho một phần 火锅, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 781,
    "title": "Luyện nói: Site safety check at {place} #176",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the coffee shop before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the coffee shop trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 782,
    "title": "汉语学习: 日常问候与喝茶 #163",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "王丽，你好！今天过得怎么样？ | 王丽, chào bạn! Hôm nay thế nào rồi?\n丽华，我很好。你今天下午有空吗？ | 丽华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去附近的超市喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 附近的超市 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 783,
    "title": "日本語会話: 日常の挨拶と予定 #162",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "美咲さん、こんにちは！今日の調子はどうですか？ | Chào anh 美咲! Hôm nay thế nào rồi?\n佐藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 佐藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。近くのスーパーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 近くのスーパー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 784,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #163",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、図書館へはどう行けばいいですか？ | Xin hỏi, đi đến 図書館 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 785,
    "title": "汉语学习: 日常问候与喝茶 #164",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "张敏，你好！今天过得怎么样？ | 张敏, chào bạn! Hôm nay thế nào rồi?\n王芳，我很好。你今天下午有空吗？ | 王芳, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上雨伞吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 雨伞 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 786,
    "title": "汉语学习: 日常问候与喝茶 #165",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n周强，我很好。你今天下午有空吗？ | 周强, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去附近的超市喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 附近的超市 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 787,
    "title": "한국어 연습: 안부 묻기와 약속 #160",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "지원씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지원, lâu rồi không gặp! Anh khỏe không?\n아, 지수씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지수! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 카페 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 카페 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 788,
    "title": "한국어 연습: 안부 묻기와 약속 #161",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "하은씨, 오랜만이에요! 잘 지냈어요? | Chào anh 하은, lâu rồi không gặp! Anh khỏe không?\n아, 태현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 태현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 한강공원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 한강공원 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 789,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #162",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 떡볶이로 주세요. | Cho tôi món 떡볶이 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 790,
    "title": "한국어 연습: 안부 묻기와 약속 #163",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "태현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 태현, lâu rồi không gặp! Anh khỏe không?\n아, 지훈씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지훈! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 열쇠고리도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 열쇠고리 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 791,
    "title": "한국어 연습: 안부 묻기와 약속 #164",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "민서씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민서, lâu rồi không gặp! Anh khỏe không?\n아, 동현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 동현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 근처 슈퍼마켓 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 근처 슈퍼마켓 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 792,
    "title": "日本語会話: 日常の挨拶と予定 #164",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "美咲さん、こんにちは！今日の調子はどうですか？ | Chào anh 美咲! Hôm nay thế nào rồi?\nさくらさん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh さくら. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。札幌駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 札幌駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 793,
    "title": "日本語会話: レストランで{food}を注文する #165",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の寿司をお願いします。 | Vâng, cho tôi một phần 寿司 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 794,
    "title": "Luyện nói: Site safety check at {place} #177",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the subway station before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the subway station trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 795,
    "title": "Luyện nói: Describing {item} #178",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful laptop computer that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ laptop computer hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my laptop computer, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc laptop computer của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 796,
    "title": "Luyện nói: Describing {item} #179",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful leather wallet that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ leather wallet hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my leather wallet, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc leather wallet của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 797,
    "title": "汉语学习: 在餐馆点{food} #166",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色火锅吗？ | Được ạ, xin hỏi quý khách có muốn thử món 火锅 đặc sản của chúng tôi không?\n好的，来一份火锅，再加一碗白米饭。 | Được, cho một phần 火锅, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 798,
    "title": "汉语学习: 在餐馆点{food} #167",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 799,
    "title": "汉语学习: 日常问候与喝茶 #168",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "刘洋，你好！今天过得怎么样？ | 刘洋, chào bạn! Hôm nay thế nào rồi?\n王丽，我很好。你今天下午有空吗？ | 王丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 800,
    "title": "日本語会話: 日常の挨拶と予定 #166",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "さくらさん、こんにちは！今日の調子はどうですか？ | Chào anh さくら! Hôm nay thế nào rồi?\n高橋さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 高橋. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 801,
    "title": "日本語会話: 日常の挨拶と予定 #167",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\n伊藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 伊藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。図書館でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 図書館 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい日よけ帽子もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 日よけ帽子 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 802,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #165",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 803,
    "title": "日本語会話: 日常の挨拶と予定 #168",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "健太さん、こんにちは！今日の調子はどうですか？ | Chào anh 健太! Hôm nay thế nào rồi?\n美咲さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 美咲. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。オフィスの会議室でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra オフィスの会議室 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 804,
    "title": "Luyện nói: Ordering {food} at restaurant #180",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local fruit cup. | Vâng, tôi muốn dùng thử món fruit cup đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 805,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #169",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、新宿駅へはどう行けばいいですか？ | Xin hỏi, đi đến 新宿駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 806,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #166",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 807,
    "title": "汉语学习: 在餐馆点{food} #169",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色炒饭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 炒饭 đặc sản của chúng tôi không?\n好的，来一份炒饭，再加一碗白米饭。 | Được, cho một phần 炒饭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 808,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #167",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 809,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #170",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、歯医者へはどう行けばいいですか？ | Xin hỏi, đi đến 歯医者 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 810,
    "title": "汉语学习: 日常问候与喝茶 #170",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "徐丽，你好！今天过得怎么样？ | 徐丽, chào bạn! Hôm nay thế nào rồi?\n张敏，我很好。你今天下午有空吗？ | 张敏, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 811,
    "title": "汉语学习: 在餐馆点{food} #171",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 812,
    "title": "日本語会話: 日常の挨拶と予定 #171",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "優斗さん、こんにちは！今日の調子はどうですか？ | Chào anh 優斗! Hôm nay thế nào rồi?\n鈴木さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 鈴木. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。近くのスーパーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 近くのスーパー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい水筒もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 水筒 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 813,
    "title": "汉语学习: 在餐馆点{food} #172",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 814,
    "title": "日本語会話: 日常の挨拶と予定 #172",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "山本さん、こんにちは！今日の調子はどうですか？ | Chào anh 山本! Hôm nay thế nào rồi?\nさくらさん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh さくら. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。京都の寺院でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 京都の寺院 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 815,
    "title": "Luyện nói: Update on {project} #181",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Olivia, can you give me an update on Marketing Campaign? | Chào buổi sáng Olivia, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to James next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với James vào tuần tới."
  },
  {
    "id": 816,
    "title": "日本語会話: 日常の挨拶と予定 #173",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "佐藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 佐藤! Hôm nay thế nào rồi?\n田中さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 田中. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。カフェでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra カフェ uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 817,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #174",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、オフィスの会議室へはどう行けばいいですか？ | Xin hỏi, đi đến オフィスの会議室 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 818,
    "title": "Luyện nói: Site safety check at {place} #182",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the park before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the park trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 819,
    "title": "日本語会話: レストランで{food}を注文する #175",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域の寿司をお願いします。 | Vâng, cho tôi một phần 寿司 đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 820,
    "title": "Luyện nói: Describing {item} #183",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful smartphone that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ smartphone hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my smartphone, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc smartphone của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 821,
    "title": "한국어 연습: 안부 묻기와 약속 #168",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "현우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 현우, lâu rồi không gặp! Anh khỏe không?\n아, 영수씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 영수! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 822,
    "title": "한국어 연습: 안부 묻기와 약속 #169",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "민우씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민우, lâu rồi không gặp! Anh khỏe không?\n아, 동현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 동현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 823,
    "title": "한국어 연습: 안부 묻기와 약속 #170",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "수빈씨, 오랜만이에요! 잘 지냈어요? | Chào anh 수빈, lâu rồi không gặp! Anh khỏe không?\n아, 서윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 서울역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 서울역 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 824,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #171",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 825,
    "title": "Luyện nói: Lost at {place} #184",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Excuse me, Mark, I think I lost my notebook here. | Xin lỗi Mark, tôi nghĩ tôi đã đánh mất chiếc notebook ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the central square. | Tôi nghĩ tôi đã để quên nó gần lối vào the central square.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 826,
    "title": "日本語会話: レストランで{food}を注文する #176",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 日本のレストランで地元の料理を注文する会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "いらっしゃいませ。ご注文はお決まりですか？ | Chào mừng quý khách. Quý khách đã quyết định gọi món chưa?\nはい、この地域のおにぎりをお願いします。 | Vâng, cho tôi một phần おにぎり đặc sản vùng này nhé.\nかしこまりました。お飲み物はいかがなさいますか？ | Tôi hiểu rồi. Quý khách có dùng nước uống gì không ạ?\n冷たいお茶を一杯ください。ありがとうございます。 | Cho tôi xin một ly trà lạnh nhé. Xin cảm ơn.\n少々お待ちください。すぐにお持ちいたします。 | Xin chờ một chút. Tôi sẽ mang ra ngay ạ."
  },
  {
    "id": 827,
    "title": "汉语学习: 日常问候与喝茶 #173",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "小红，你好！今天过得怎么样？ | 小红, chào bạn! Hôm nay thế nào rồi?\n陈杰，我很好。你今天下午有空吗？ | 陈杰, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 828,
    "title": "汉语学习: 在餐馆点{food} #174",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色北京烤鸭吗？ | Được ạ, xin hỏi quý khách có muốn thử món 北京烤鸭 đặc sản của chúng tôi không?\n好的，来一份北京烤鸭，再加一碗白米饭。 | Được, cho một phần 北京烤鸭, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 829,
    "title": "Luyện nói: Describing {item} #185",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful backpack that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ backpack hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my backpack, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc backpack của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 830,
    "title": "Luyện nói: Ordering {food} at restaurant #186",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local hot noodle soup. | Vâng, tôi muốn dùng thử món hot noodle soup đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 831,
    "title": "汉语学习: 日常问候与喝茶 #175",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "建国，你好！今天过得怎么样？ | 建国, chào bạn! Hôm nay thế nào rồi?\n张敏，我很好。你今天下午有空吗？ | 张敏, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去天安门广场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 天安门广场 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 832,
    "title": "汉语学习: 日常问候与喝茶 #176",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "建国，你好！今天过得怎么样？ | 建国, chào bạn! Hôm nay thế nào rồi?\n明哲，我很好。你今天下午有空吗？ | 明哲, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去附近的超市喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 附近的超市 uống tách trà không?\n那太好了！我们要带上咖啡杯吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 咖啡杯 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 833,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #177",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、札幌駅へはどう行けばいいですか？ | Xin hỏi, đi đến 札幌駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 834,
    "title": "汉语学习: 在餐馆点{food} #177",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 835,
    "title": "日本語会話: 日常の挨拶と予定 #178",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "蓮さん、こんにちは！今日の調子はどうですか？ | Chào anh 蓮! Hôm nay thế nào rồi?\n大翔さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大翔. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。歯医者でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 歯医者 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいコーヒーマグもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc コーヒーマグ mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 836,
    "title": "日本語会話: 日常の挨拶と予定 #179",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "健太さん、こんにちは！今日の調子はどうですか？ | Chào anh 健太! Hôm nay thế nào rồi?\n小林さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 小林. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。札幌駅でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 札幌駅 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 837,
    "title": "汉语学习: 在餐馆点{food} #178",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色红烧肉吗？ | Được ạ, xin hỏi quý khách có muốn thử món 红烧肉 đặc sản của chúng tôi không?\n好的，来一份红烧肉，再加一碗白米饭。 | Được, cho một phần 红烧肉, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 838,
    "title": "汉语学习: 在餐馆点{food} #179",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 839,
    "title": "日本語会話: 日常の挨拶と予定 #180",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "さくらさん、こんにちは！今日の調子はどうですか？ | Chào anh さくら! Hôm nay thế nào rồi?\n結衣さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 結衣. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 840,
    "title": "한국어 연습: 안부 묻기와 약속 #172",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "민서씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민서, lâu rồi không gặp! Anh khỏe không?\n아, 하은씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 하은! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 인천공항 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 인천공항 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 841,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #181",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、新宿駅へはどう行けばいいですか？ | Xin hỏi, đi đến 新宿駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 842,
    "title": "汉语学习: 日常问候与喝茶 #180",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n徐丽，我很好。你今天下午有空吗？ | 徐丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去南京路喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 南京路 uống tách trà không?\n那太好了！我们要带上智能手机吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 智能手机 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 843,
    "title": "汉语学习: 日常问候与喝茶 #181",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "王芳，你好！今天过得怎么样？ | 王芳, chào bạn! Hôm nay thế nào rồi?\n丽华，我很好。你今天下午有空吗？ | 丽华, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去附近的超市喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 附近的超市 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 844,
    "title": "Luyện nói: Site safety check at {place} #187",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the supermarket before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the supermarket trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 845,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #182",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、オフィスの会議室へはどう行けばいいですか？ | Xin hỏi, đi đến オフィスの会議室 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 846,
    "title": "Luyện nói: Describing {item} #188",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful coffee mug that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ coffee mug hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my coffee mug, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc coffee mug của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 847,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #173",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 848,
    "title": "Luyện nói: Ordering {food} at restaurant #189",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local sandwich. | Vâng, tôi muốn dùng thử món sandwich đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 849,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #174",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 치킨로 주세요. | Cho tôi món 치킨 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 850,
    "title": "한국어 연습: 안부 묻기와 약속 #175",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "태현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 태현, lâu rồi không gặp! Anh khỏe không?\n아, 서윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 851,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #176",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 852,
    "title": "한국어 연습: 안부 묻기와 약속 #177",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "수빈씨, 오랜만이에요! 잘 지냈어요? | Chào anh 수빈, lâu rồi không gặp! Anh khỏe không?\n아, 유진씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 유진! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 사무실 회의실 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 사무실 회의실 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 853,
    "title": "한국어 연습: 안부 묻기와 약속 #178",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "서연씨, 오랜만이에요! 잘 지냈어요? | Chào anh 서연, lâu rồi không gặp! Anh khỏe không?\n아, 서윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 강남역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 강남역 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 854,
    "title": "Luyện nói: Ordering {food} at restaurant #190",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local sushi roll. | Vâng, tôi muốn dùng thử món sushi roll đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 855,
    "title": "Luyện nói: Describing {item} #191",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful water bottle that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ water bottle hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my water bottle, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc water bottle của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 856,
    "title": "한국어 연습: 안부 묻기와 약속 #179",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "정희씨, 오랜만이에요! 잘 지냈어요? | Chào anh 정희, lâu rồi không gặp! Anh khỏe không?\n아, 민서씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 민서! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 햇빛 가리개 모자도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 햇빛 가리개 모자 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 857,
    "title": "Luyện nói: Borrowing {item} #192",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Michael, do you have a spare notebook I can borrow? | Này Michael, bạn có thừa chiếc notebook nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Client Presentation project. | Tôi cần nó để làm việc với dự án Client Presentation.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Daniel! You are always so helpful. | Cảm ơn Daniel! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 858,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #180",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 불고기로 주세요. | Cho tôi món 불고기 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 859,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #181",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 860,
    "title": "Luyện nói: Site safety check at {place} #193",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the dental clinic before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the dental clinic trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 861,
    "title": "Luyện nói: Update on {project} #194",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Sophia, can you give me an update on Cloud Migration? | Chào buổi sáng Sophia, bạn có thể cập nhật cho tôi về dự án Cloud Migration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to James next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với James vào tuần tới."
  },
  {
    "id": 862,
    "title": "Luyện nói: Daily Greeting & Plans #195",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Mark, how are you doing today? | Chào Mark, hôm nay bạn thế nào rồi?\nHi Mary, I am doing great! Are you free this afternoon? | Chào Mary, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the park for a drink. | Có, tôi rảnh. Cùng đến the park uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my notebook. | Khoảng ba giờ thì sao? Tôi sẽ mang theo notebook của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 863,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #182",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 864,
    "title": "日本語会話: 日常の挨拶と予定 #183",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "大翔さん、こんにちは！今日の調子はどうですか？ | Chào anh 大翔! Hôm nay thế nào rồi?\nさくらさん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh さくら. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。近くのスーパーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 近くのスーパー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい革の財布もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 革の財布 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 865,
    "title": "한국어 연습: 안부 묻기와 약속 #183",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "지수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지수, lâu rồi không gặp! Anh khỏe không?\n아, 준호씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 준호! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 가죽 지갑도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 가죽 지갑 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 866,
    "title": "Luyện nói: Lost at {place} #196",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, John, I think I lost my coffee mug here. | Xin lỗi John, tôi nghĩ tôi đã đánh mất chiếc coffee mug ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the supermarket. | Tôi nghĩ tôi đã để quên nó gần lối vào the supermarket.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 867,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #184",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 868,
    "title": "Luyện nói: Site safety check at {place} #197",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the library before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the library trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 869,
    "title": "Luyện nói: Daily Greeting & Plans #198",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hi Paul, how are you doing today? | Chào Paul, hôm nay bạn thế nào rồi?\nHi Jessica, I am doing great! Are you free this afternoon? | Chào Jessica, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the supermarket for a drink. | Có, tôi rảnh. Cùng đến the supermarket uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my water bottle. | Khoảng ba giờ thì sao? Tôi sẽ mang theo water bottle của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 870,
    "title": "Luyện nói: Daily Greeting & Plans #199",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hi Robert, how are you doing today? | Chào Robert, hôm nay bạn thế nào rồi?\nHi Linda, I am doing great! Are you free this afternoon? | Chào Linda, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the dental clinic for a drink. | Có, tôi rảnh. Cùng đến the dental clinic uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my coffee mug. | Khoảng ba giờ thì sao? Tôi sẽ mang theo coffee mug của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 871,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #185",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼겹살로 주세요. | Cho tôi món 삼겹살 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 872,
    "title": "한국어 연습: 안부 묻기와 약속 #186",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "유진씨, 오랜만이에요! 잘 지냈어요? | Chào anh 유진, lâu rồi không gặp! Anh khỏe không?\n아, 지원씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 지원! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 근처 슈퍼마켓 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 근처 슈퍼마켓 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 873,
    "title": "한국어 연습: 안부 묻기와 약속 #187",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "동현씨, 오랜만이에요! 잘 지냈어요? | Chào anh 동현, lâu rồi không gặp! Anh khỏe không?\n아, 하은씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 하은! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 열쇠고리도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 열쇠고리 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 874,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #188",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 875,
    "title": "한국어 연습: 안부 묻기와 약속 #189",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "준호씨, 오랜만이에요! 잘 지냈어요? | Chào anh 준호, lâu rồi không gặp! Anh khỏe không?\n아, 하은씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 하은! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 한강공원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 한강공원 đi.\n좋은 생각이에요. 제 새로운 커피 머그잔도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 커피 머그잔 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 876,
    "title": "Luyện nói: Site safety check at {place} #200",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the supermarket before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the supermarket trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 877,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #190",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 치킨로 주세요. | Cho tôi món 치킨 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 878,
    "title": "Luyện nói: Update on {project} #201",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Olivia, can you give me an update on Database Design? | Chào buổi sáng Olivia, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Michael next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Michael vào tuần tới."
  },
  {
    "id": 879,
    "title": "日本語会話: 日常の挨拶と予定 #184",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "佐藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 佐藤! Hôm nay thế nào rồi?\n大輝さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 大輝. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。京都の寺院でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 京都の寺院 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 880,
    "title": "日本語会話: 日常の挨拶と予定 #185",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "田中さん、こんにちは！今日の調子はどうですか？ | Chào anh 田中! Hôm nay thế nào rồi?\n美咲さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 美咲. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいコーヒーマグもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc コーヒーマグ mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 881,
    "title": "日本語会話: 日常の挨拶と予定 #186",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "陽菜さん、こんにちは！今日の調子はどうですか？ | Chào anh 陽菜! Hôm nay thế nào rồi?\n高橋さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 高橋. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 882,
    "title": "한국어 연습: 안부 묻기와 약속 #191",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "하은씨, 오랜만이에요! 잘 지냈어요? | Chào anh 하은, lâu rồi không gặp! Anh khỏe không?\n아, 예은씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 예은! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 강남역 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 강남역 đi.\n좋은 생각이에요. 제 새로운 우산도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 우산 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 883,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #192",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 삼계탕로 주세요. | Cho tôi món 삼계탕 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 884,
    "title": "日本語会話: 日常の挨拶と予定 #187",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "翔太さん、こんにちは！今日の調子はどうですか？ | Chào anh 翔太! Hôm nay thế nào rồi?\n美咲さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 美咲. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。東京タワーでお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 東京タワー uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいキーホルダーもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc キーホルダー mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 885,
    "title": "Luyện nói: Update on {project} #202",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Sophia, can you give me an update on Security Audit? | Chào buổi sáng Sophia, bạn có thể cập nhật cho tôi về dự án Security Audit không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to John next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với John vào tuần tới."
  },
  {
    "id": 886,
    "title": "日本語会話: 日常の挨拶と予定 #188",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "大翔さん、こんにちは！今日の調子はどうですか？ | Chào anh 大翔! Hôm nay thế nào rồi?\n結衣さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 結衣. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。図書館でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 図書館 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいスマートフォンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc スマートフォン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 887,
    "title": "Luyện nói: Site safety check at {place} #203",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the conference room before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the conference room trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 888,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #193",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김치찌개로 주세요. | Cho tôi món 김치찌개 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 889,
    "title": "日本語会話: 日常の挨拶と予定 #189",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "佐藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 佐藤! Hôm nay thế nào rồi?\n加藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 加藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートパソコンもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノートパソコン mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 890,
    "title": "Luyện nói: Borrowing {item} #204",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Kevin, do you have a spare coffee mug I can borrow? | Này Kevin, bạn có thừa chiếc coffee mug nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Web Application Dev project. | Tôi cần nó để làm việc với dự án Web Application Dev.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Linda! You are always so helpful. | Cảm ơn Linda! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 891,
    "title": "Luyện nói: Site safety check at {place} #205",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the subway station before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the subway station trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 892,
    "title": "汉语学习: 在餐馆点{food} #182",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色麻婆豆腐吗？ | Được ạ, xin hỏi quý khách có muốn thử món 麻婆豆腐 đặc sản của chúng tôi không?\n好的，来一份麻婆豆腐，再加一碗白米饭。 | Được, cho một phần 麻婆豆腐, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 893,
    "title": "한국어 연습: 안부 묻기와 약속 #194",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "준호씨, 오랜만이에요! 잘 지냈어요? | Chào anh 준호, lâu rồi không gặp! Anh khỏe không?\n아, 서연씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 서연! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 배낭도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 배낭 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 894,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #190",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、近くのスーパーへはどう行けばいいですか？ | Xin hỏi, đi đến 近くのスーパー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 895,
    "title": "汉语学习: 在餐馆点{food} #183",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 896,
    "title": "한국어 연습: 안부 묻기와 약속 #195",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "민서씨, 오랜만이에요! 잘 지냈어요? | Chào anh 민서, lâu rồi không gặp! Anh khỏe không?\n아, 동현씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 동현! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 명동 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 명동 đi.\n좋은 생각이에요. 제 새로운 노트북도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 노트북 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 897,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #196",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 냉면로 주세요. | Cho tôi món 냉면 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 898,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #191",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、カフェへはどう行けばいいですか？ | Xin hỏi, đi đến カフェ như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 899,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #192",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、新宿駅へはどう行けばいいですか？ | Xin hỏi, đi đến 新宿駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 900,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #197",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 김밥로 주세요. | Cho tôi món 김밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 901,
    "title": "한국어 연습: 식당에서 {food} 주문하기 #198",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 식당에서 유명한 한국 음식을 주문하는 고객의 대화.",
    "language": "ko",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "주문하시겠습니까? 어떤 음식을 원하세요? | Quý khách muốn gọi món chưa ạ? Quý khách muốn dùng món gì?\n여기서 가장 인기 있는 비빔밥로 주세요. | Cho tôi món 비빔밥 được ưa chuộng nhất ở đây đi.\n네, 알겠습니다. 맵기는 어떻게 해드릴까요? | Vâng, tôi hiểu rồi. Độ cay thì làm như thế nào ạ?\n많이 맵지 않게 해주세요. 그리고 물 좀 주세요. | Đừng làm cay quá nhé. Và cho tôi xin ít nước.\n네, 잠시만 기다려 주세요. 금방 나옵니다. | Vâng, vui lòng đợi một lát ạ. Sẽ có ngay thôi."
  },
  {
    "id": 902,
    "title": "Luyện nói: Describing {item} #206",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful backpack that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ backpack hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my backpack, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc backpack của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 903,
    "title": "Luyện nói: Lost at {place} #207",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, Paul, I think I lost my sun hat here. | Xin lỗi Paul, tôi nghĩ tôi đã đánh mất chiếc sun hat ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the library. | Tôi nghĩ tôi đã để quên nó gần lối vào the library.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 904,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #193",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、札幌駅へはどう行けばいいですか？ | Xin hỏi, đi đến 札幌駅 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 905,
    "title": "日本語会話: 日常の挨拶と予定 #194",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "山本さん、こんにちは！今日の調子はどうですか？ | Chào anh 山本! Hôm nay thế nào rồi?\n渡辺さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 渡辺. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいキーホルダーもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc キーホルダー mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 906,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #195",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "すみません、オフィスの会議室へはどう行けばいいですか？ | Xin hỏi, đi đến オフィスの会議室 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 907,
    "title": "汉语学习: 日常问候与喝茶 #184",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n雅琴，我很好。你今天下午有空吗？ | 雅琴, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 908,
    "title": "汉语学习: 日常问候与喝茶 #185",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "德明，你好！今天过得怎么样？ | 德明, chào bạn! Hôm nay thế nào rồi?\n王丽，我很好。你今天下午有空吗？ | 王丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去人民公园喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 人民公园 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 909,
    "title": "Luyện nói: Update on {project} #208",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Sophia, can you give me an update on Security Audit? | Chào buổi sáng Sophia, bạn có thể cập nhật cho tôi về dự án Security Audit không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Mark next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Mark vào tuần tới."
  },
  {
    "id": 910,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #196",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Normal. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "すみません、歯医者へはどう行けばいいですか？ | Xin hỏi, đi đến 歯医者 như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 911,
    "title": "Luyện nói: Borrowing {item} #209",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey David, do you have a spare coffee mug I can borrow? | Này David, bạn có thừa chiếc coffee mug nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Cloud Migration project. | Tôi cần nó để làm việc với dự án Cloud Migration.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Robert! You are always so helpful. | Cảm ơn Robert! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 912,
    "title": "汉语学习: 在餐馆点{food} #186",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色牛肉面吗？ | Được ạ, xin hỏi quý khách có muốn thử món 牛肉面 đặc sản của chúng tôi không?\n好的，来一份牛肉面，再加一碗白米饭。 | Được, cho một phần 牛肉面, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 913,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #197",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、東京タワーへはどう行けばいいですか？ | Xin hỏi, đi đến 東京タワー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 914,
    "title": "汉语学习: 日常问候与喝茶 #187",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "小红，你好！今天过得怎么样？ | 小红, chào bạn! Hôm nay thế nào rồi?\n飞龙，我很好。你今天下午有空吗？ | 飞龙, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去牙科诊所喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 牙科诊所 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 915,
    "title": "Luyện nói: Update on {project} #210",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Jessica, can you give me an update on Web Application Dev? | Chào buổi sáng Jessica, bạn có thể cập nhật cho tôi về dự án Web Application Dev không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Linda next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Linda vào tuần tới."
  },
  {
    "id": 916,
    "title": "汉语学习: 在餐馆点{food} #188",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 917,
    "title": "汉语学习: 日常问候与喝茶 #189",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "海峰，你好！今天过得怎么样？ | 海峰, chào bạn! Hôm nay thế nào rồi?\n刘洋，我很好。你今天下午有空吗？ | 刘洋, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去南京路喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 南京路 uống tách trà không?\n那太好了！我们要带上背包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 背包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 918,
    "title": "日本語会話: 日常の挨拶と予定 #198",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "小林さん、こんにちは！今日の調子はどうですか？ | Chào anh 小林! Hôm nay thế nào rồi?\n佐藤さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 佐藤. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。図書館でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 図書館 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しい傘もお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc 傘 mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 919,
    "title": "한국어 연습: 안부 묻기와 약속 #199",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "준호씨, 오랜만이에요! 잘 지냈어요? | Chào anh 준호, lâu rồi không gặp! Anh khỏe không?\n아, 현우씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 현우! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 인천공항 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 인천공항 đi.\n좋은 생각이에요. 제 새로운 스마트폰도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 스마트폰 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 920,
    "title": "日本語会話: 駅で{place}への行き方を尋ねる #199",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Beginner. 観光客が駅のスタッフに目的地への道を尋ねる会話。",
    "language": "ja",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "すみません、東京タワーへはどう行けばいいですか？ | Xin hỏi, đi đến 東京タワー như thế nào ạ?\nここから歩いて約１０分です。この道をまっすぐ行ってください。 | Đi bộ từ đây mất khoảng 10 phút. Hãy đi thẳng con đường này.\n信号を右に曲がりますか、それとも左ですか？ | Đến đèn giao thông thì rẽ phải hay rẽ trái vậy ạ?\n次の角を右に曲がると、目の前に見えますよ。 | Rẽ phải ở góc tiếp theo, bạn sẽ thấy nó ngay trước mắt đấy.\nご丁寧にありがとうございます。助かりました！ | Cảm ơn bạn rất nhiều vì sự hướng dẫn tận tình. May quá!"
  },
  {
    "id": 921,
    "title": "汉语学习: 日常问候与喝茶 #190",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "张伟，你好！今天过得怎么样？ | 张伟, chào bạn! Hôm nay thế nào rồi?\n王丽，我很好。你今天下午有空吗？ | 王丽, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去北京站喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 北京站 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 922,
    "title": "汉语学习: 日常问候与喝茶 #191",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "志强，你好！今天过得怎么样？ | 志强, chào bạn! Hôm nay thế nào rồi?\n飞龙，我很好。你今天下午有空吗？ | 飞龙, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去办公室会议室喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 办公室会议室 uống tách trà không?\n那太好了！我们要带上遮阳帽吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 遮阳帽 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 923,
    "title": "한국어 연습: 안부 묻기와 약속 #200",
    "description": "Bài học Shadowing tiếng Hàn giao tiếp thực tế. 친구끼리 안부를 묻고 커피 한잔하는 일상 대화.",
    "language": "ko",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "지수씨, 오랜만이에요! 잘 지냈어요? | Chào anh 지수, lâu rồi không gặp! Anh khỏe không?\n아, 도윤씨! 네, 잘 지냈어요. 오늘 오후에 시간 있어요? | A, anh 도윤! Vâng, tôi khỏe. Chiều nay anh có thời gian không?\n네, 괜찮아요. 치과 병원 근처에서 커피 한잔해요. | Vâng, được chứ. Cùng uống cốc cà phê ở gần 치과 병원 đi.\n좋은 생각이에요. 제 새로운 공책도 보여드릴게요. | Ý kiến hay đấy. Tôi cũng sẽ cho anh xem chiếc 공책 mới của tôi.\n좋아요! 그럼 2시에 거기서 만나요. | Tốt quá! Vậy 2 giờ gặp nhau ở đó nhé."
  },
  {
    "id": 924,
    "title": "汉语学习: 在餐馆点{food} #192",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色麻婆豆腐吗？ | Được ạ, xin hỏi quý khách có muốn thử món 麻婆豆腐 đặc sản của chúng tôi không?\n好的，来一份麻婆豆腐，再加一碗白米饭。 | Được, cho một phần 麻婆豆腐, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 925,
    "title": "Luyện nói: Update on {project} #211",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Emily, can you give me an update on Client Presentation? | Chào buổi sáng Emily, bạn có thể cập nhật cho tôi về dự án Client Presentation không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Michael next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Michael vào tuần tới."
  },
  {
    "id": 926,
    "title": "日本語会話: 日常の挨拶と予定 #200",
    "description": "Bài học tiếng Nhật giao tiếp thực tế cấp độ Advanced. 友達同士で一日の予定について話し合っている様子。",
    "language": "ja",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "伊藤さん、こんにちは！今日の調子はどうですか？ | Chào anh 伊藤! Hôm nay thế nào rồi?\n蓮さん、こんにちは。元気ですよ！午後はお暇ですか？ | Chào anh 蓮. Tôi khỏe! Chiều nay anh rảnh không?\nはい、空いています。代々木公園でお茶でもしませんか？ | Vâng, tôi rảnh. Chúng ta ra 代々木公園 uống trà chút không?\nいいですね！何時に集まりましょうか？ | Được đấy! Mấy giờ chúng ta tập trung đây?\n３時はどうですか？私の新しいノートもお見せします。 | 3 giờ được không? Tôi cũng sẽ cho bạn xem chiếc ノート mới của tôi.\n分かりました。では３時にそこで会いましょう。 | Tôi biết rồi. Hẹn gặp lại bạn ở đó lúc 3 giờ."
  },
  {
    "id": 927,
    "title": "汉语学习: 日常问候与喝茶 #193",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "德明，你好！今天过得怎么样？ | 德明, chào bạn! Hôm nay thế nào rồi?\n建国，我很好。你今天下午有空吗？ | 建国, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上智能手机吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 智能手机 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 928,
    "title": "Luyện nói: Describing {item} #212",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful leather wallet that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ leather wallet hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my leather wallet, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc leather wallet của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 929,
    "title": "Luyện nói: Site safety check at {place} #213",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the park before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the park trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 930,
    "title": "汉语学习: 在餐馆点{food} #194",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 931,
    "title": "汉语学习: 日常问候与喝茶 #195",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "飞龙，你好！今天过得怎么样？ | 飞龙, chào bạn! Hôm nay thế nào rồi?\n陈杰，我很好。你今天下午有空吗？ | 陈杰, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去图书馆喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 图书馆 uống tách trà không?\n那太好了！我们要带上笔记本电脑吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 笔记本电脑 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 932,
    "title": "汉语学习: 日常问候与喝茶 #196",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "王芳，你好！今天过得怎么样？ | 王芳, chào bạn! Hôm nay thế nào rồi?\n张敏，我很好。你今天下午有空吗？ | 张敏, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去飞机场喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 飞机场 uống tách trà không?\n那太好了！我们要带上皮钱包吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 皮钱包 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 933,
    "title": "汉语学习: 在餐馆点{food} #197",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色宫保鸡丁吗？ | Được ạ, xin hỏi quý khách có muốn thử món 宫保鸡丁 đặc sản của chúng tôi không?\n好的，来一份宫保鸡丁，再加一碗白米饭。 | Được, cho một phần 宫保鸡丁, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 934,
    "title": "汉语学习: 日常问候与喝茶 #198",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 朋友之间日常问候并约好一起去喝下午茶的对话。",
    "language": "zh",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "王丽，你好！今天过得怎么样？ | 王丽, chào bạn! Hôm nay thế nào rồi?\n德明，我很好。你今天下午有空吗？ | 德明, tôi rất khỏe. Chiều nay bạn có rảnh không?\n我有空，我们要不要去咖啡厅喝杯茶？ | Tôi rảnh, chúng ta có muốn đi 咖啡厅 uống tách trà không?\n那太好了！我们要带上钥匙扣吗？ | Thế thì tốt quá! Chúng ta có cần mang theo 钥匙扣 không?\n带上吧，晚点我们可以在那儿工作。 | Mang theo đi, lát nữa chúng ta có thể làm việc ở đó.\n好的，三点钟不见不散！ | Được, ba giờ chiều gặp nhé, không gặp không về!"
  },
  {
    "id": 935,
    "title": "Luyện nói: Describing {item} #214",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful sun hat that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ sun hat hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my sun hat, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc sun hat của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 936,
    "title": "汉语学习: 在餐馆点{food} #199",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色小笼包吗？ | Được ạ, xin hỏi quý khách có muốn thử món 小笼包 đặc sản của chúng tôi không?\n好的，来一份小笼包，再加一碗白米饭。 | Được, cho một phần 小笼包, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 937,
    "title": "Luyện nói: Update on {project} #215",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Linda, can you give me an update on Cloud Migration? | Chào buổi sáng Linda, bạn có thể cập nhật cho tôi về dự án Cloud Migration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Mary next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Mary vào tuần tới."
  },
  {
    "id": 938,
    "title": "Luyện nói: Describing {item} #216",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful keychain that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ keychain hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my keychain, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc keychain của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 939,
    "title": "汉语学习: 在餐馆点{food} #200",
    "description": "Bài luyện nói tiếng Trung giao tiếp hàng ngày. 客人在中餐馆点当地特色菜的对话。",
    "language": "zh",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "服务员，请问现在可以点菜了吗？ | Phục vụ ơi, xin hỏi bây giờ có thể gọi món được chưa?\n可以的，请问您想尝尝我们的特色春卷吗？ | Được ạ, xin hỏi quý khách có muốn thử món 春卷 đặc sản của chúng tôi không?\n好的，来一份春卷，再加一碗白米饭。 | Được, cho một phần 春卷, và thêm một bát cơm trắng.\n好的，您需要什么饮料吗？ | Dạ được, quý khách có cần nước uống gì không ạ?\n请给我一杯冰水，谢谢。 | Cho tôi xin một ly nước đá, cảm ơn."
  },
  {
    "id": 940,
    "title": "Luyện nói: Daily Greeting & Plans #217",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Michael, how are you doing today? | Chào Michael, hôm nay bạn thế nào rồi?\nHi Daniel, I am doing great! Are you free this afternoon? | Chào Daniel, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the conference room for a drink. | Có, tôi rảnh. Cùng đến the conference room uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my sun hat. | Khoảng ba giờ thì sao? Tôi sẽ mang theo sun hat của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 941,
    "title": "Luyện nói: Update on {project} #218",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Michael, can you give me an update on Cloud Migration? | Chào buổi sáng Michael, bạn có thể cập nhật cho tôi về dự án Cloud Migration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Kevin next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Kevin vào tuần tới."
  },
  {
    "id": 942,
    "title": "Luyện nói: Describing {item} #219",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful backpack that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ backpack hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my backpack, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc backpack của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 943,
    "title": "Luyện nói: Ordering {food} at restaurant #220",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local fried chicken. | Vâng, tôi muốn dùng thử món fried chicken đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 944,
    "title": "Luyện nói: Describing {item} #221",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful water bottle that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ water bottle hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my water bottle, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc water bottle của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 945,
    "title": "Luyện nói: Ordering {food} at restaurant #222",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local sandwich. | Vâng, tôi muốn dùng thử món sandwich đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 946,
    "title": "Luyện nói: Borrowing {item} #223",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Sarah, do you have a spare water bottle I can borrow? | Này Sarah, bạn có thừa chiếc water bottle nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Marketing Campaign project. | Tôi cần nó để làm việc với dự án Marketing Campaign.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Chloe! You are always so helpful. | Cảm ơn Chloe! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 947,
    "title": "Luyện nói: Describing {item} #224",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 948,
    "title": "Luyện nói: Ordering {food} at restaurant #225",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local beef steak. | Vâng, tôi muốn dùng thử món beef steak đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 949,
    "title": "Luyện nói: Lost at {place} #226",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, Kevin, I think I lost my water bottle here. | Xin lỗi Kevin, tôi nghĩ tôi đã đánh mất chiếc water bottle ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the supermarket. | Tôi nghĩ tôi đã để quên nó gần lối vào the supermarket.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 950,
    "title": "Luyện nói: Ordering {food} at restaurant #227",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local sandwich. | Vâng, tôi muốn dùng thử món sandwich đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 951,
    "title": "Luyện nói: Lost at {place} #228",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Excuse me, Thomas, I think I lost my backpack here. | Xin lỗi Thomas, tôi nghĩ tôi đã đánh mất chiếc backpack ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the dental clinic. | Tôi nghĩ tôi đã để quên nó gần lối vào the dental clinic.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 952,
    "title": "Luyện nói: Describing {item} #229",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 953,
    "title": "Luyện nói: Lost at {place} #230",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, Emily, I think I lost my coffee mug here. | Xin lỗi Emily, tôi nghĩ tôi đã đánh mất chiếc coffee mug ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the airport terminal. | Tôi nghĩ tôi đã để quên nó gần lối vào the airport terminal.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 954,
    "title": "Luyện nói: Site safety check at {place} #231",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the supermarket before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the supermarket trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 955,
    "title": "Luyện nói: Daily Greeting & Plans #232",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Daniel, how are you doing today? | Chào Daniel, hôm nay bạn thế nào rồi?\nHi Sophia, I am doing great! Are you free this afternoon? | Chào Sophia, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the downtown office for a drink. | Có, tôi rảnh. Cùng đến the downtown office uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my keychain. | Khoảng ba giờ thì sao? Tôi sẽ mang theo keychain của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 956,
    "title": "Luyện nói: Describing {item} #233",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 957,
    "title": "Luyện nói: Describing {item} #234",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful smartphone that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ smartphone hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my smartphone, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc smartphone của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 958,
    "title": "Luyện nói: Update on {project} #235",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Jessica, can you give me an update on UI/UX Redesign? | Chào buổi sáng Jessica, bạn có thể cập nhật cho tôi về dự án UI/UX Redesign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Olivia next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Olivia vào tuần tới."
  },
  {
    "id": 959,
    "title": "Luyện nói: Site safety check at {place} #236",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the downtown office before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the downtown office trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 960,
    "title": "Luyện nói: Daily Greeting & Plans #237",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Robert, how are you doing today? | Chào Robert, hôm nay bạn thế nào rồi?\nHi Mary, I am doing great! Are you free this afternoon? | Chào Mary, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the downtown office for a drink. | Có, tôi rảnh. Cùng đến the downtown office uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my sun hat. | Khoảng ba giờ thì sao? Tôi sẽ mang theo sun hat của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 961,
    "title": "Luyện nói: Update on {project} #238",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning James, can you give me an update on Marketing Campaign? | Chào buổi sáng James, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Robert next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Robert vào tuần tới."
  },
  {
    "id": 962,
    "title": "Luyện nói: Ordering {food} at restaurant #239",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local beef steak. | Vâng, tôi muốn dùng thử món beef steak đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 963,
    "title": "Luyện nói: Site safety check at {place} #240",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the central square before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the central square trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 964,
    "title": "Luyện nói: Lost at {place} #241",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Excuse me, Chloe, I think I lost my smartphone here. | Xin lỗi Chloe, tôi nghĩ tôi đã đánh mất chiếc smartphone ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the airport terminal. | Tôi nghĩ tôi đã để quên nó gần lối vào the airport terminal.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 965,
    "title": "Luyện nói: Borrowing {item} #242",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Mary, do you have a spare leather wallet I can borrow? | Này Mary, bạn có thừa chiếc leather wallet nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Database Design project. | Tôi cần nó để làm việc với dự án Database Design.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Sophia! You are always so helpful. | Cảm ơn Sophia! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 966,
    "title": "Luyện nói: Ordering {food} at restaurant #243",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local green salad. | Vâng, tôi muốn dùng thử món green salad đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 967,
    "title": "Luyện nói: Site safety check at {place} #244",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the downtown office before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the downtown office trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 968,
    "title": "Luyện nói: Describing {item} #245",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 969,
    "title": "Luyện nói: Daily Greeting & Plans #246",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi James, how are you doing today? | Chào James, hôm nay bạn thế nào rồi?\nHi Mary, I am doing great! Are you free this afternoon? | Chào Mary, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the coffee shop for a drink. | Có, tôi rảnh. Cùng đến the coffee shop uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my umbrella. | Khoảng ba giờ thì sao? Tôi sẽ mang theo umbrella của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 970,
    "title": "Luyện nói: Site safety check at {place} #247",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the supermarket before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the supermarket trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 971,
    "title": "Luyện nói: Borrowing {item} #248",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Emily, do you have a spare leather wallet I can borrow? | Này Emily, bạn có thừa chiếc leather wallet nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Database Design project. | Tôi cần nó để làm việc với dự án Database Design.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Mary! You are always so helpful. | Cảm ơn Mary! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 972,
    "title": "Luyện nói: Site safety check at {place} #249",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the subway station before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the subway station trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 973,
    "title": "Luyện nói: Describing {item} #250",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful leather wallet that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ leather wallet hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my leather wallet, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc leather wallet của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 974,
    "title": "Luyện nói: Borrowing {item} #251",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey John, do you have a spare water bottle I can borrow? | Này John, bạn có thừa chiếc water bottle nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Client Presentation project. | Tôi cần nó để làm việc với dự án Client Presentation.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, James! You are always so helpful. | Cảm ơn James! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 975,
    "title": "Luyện nói: Update on {project} #252",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Mark, can you give me an update on API Integration? | Chào buổi sáng Mark, bạn có thể cập nhật cho tôi về dự án API Integration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Daniel next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Daniel vào tuần tới."
  },
  {
    "id": 976,
    "title": "Luyện nói: Describing {item} #253",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful leather wallet that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ leather wallet hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my leather wallet, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc leather wallet của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 977,
    "title": "Luyện nói: Site safety check at {place} #254",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the park before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the park trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 978,
    "title": "Luyện nói: Describing {item} #255",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful leather wallet that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ leather wallet hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my leather wallet, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc leather wallet của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 979,
    "title": "Luyện nói: Describing {item} #256",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 980,
    "title": "Luyện nói: Describing {item} #257",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful smartphone that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ smartphone hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my smartphone, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc smartphone của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 981,
    "title": "Luyện nói: Ordering {food} at restaurant #258",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local beef steak. | Vâng, tôi muốn dùng thử món beef steak đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 982,
    "title": "Luyện nói: Update on {project} #259",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Michael, can you give me an update on Cloud Migration? | Chào buổi sáng Michael, bạn có thể cập nhật cho tôi về dự án Cloud Migration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Sophia next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Sophia vào tuần tới."
  },
  {
    "id": 983,
    "title": "Luyện nói: Site safety check at {place} #260",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the supermarket before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the supermarket trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 984,
    "title": "Luyện nói: Daily Greeting & Plans #261",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Mary, how are you doing today? | Chào Mary, hôm nay bạn thế nào rồi?\nHi Chloe, I am doing great! Are you free this afternoon? | Chào Chloe, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the supermarket for a drink. | Có, tôi rảnh. Cùng đến the supermarket uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my keychain. | Khoảng ba giờ thì sao? Tôi sẽ mang theo keychain của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 985,
    "title": "Luyện nói: Borrowing {item} #262",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Robert, do you have a spare coffee mug I can borrow? | Này Robert, bạn có thừa chiếc coffee mug nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Security Audit project. | Tôi cần nó để làm việc với dự án Security Audit.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Kevin! You are always so helpful. | Cảm ơn Kevin! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 986,
    "title": "Luyện nói: Site safety check at {place} #263",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the subway station before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the subway station trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 987,
    "title": "Luyện nói: Borrowing {item} #264",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Thomas, do you have a spare keychain I can borrow? | Này Thomas, bạn có thừa chiếc keychain nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Machine Learning Model project. | Tôi cần nó để làm việc với dự án Machine Learning Model.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Mark! You are always so helpful. | Cảm ơn Mark! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 988,
    "title": "Luyện nói: Update on {project} #265",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Michael, can you give me an update on Marketing Campaign? | Chào buổi sáng Michael, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Mark next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Mark vào tuần tới."
  },
  {
    "id": 989,
    "title": "Luyện nói: Site safety check at {place} #266",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the airport terminal before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the airport terminal trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 990,
    "title": "Luyện nói: Update on {project} #267",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Barbara, can you give me an update on Mobile App Upgrade? | Chào buổi sáng Barbara, bạn có thể cập nhật cho tôi về dự án Mobile App Upgrade không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to James next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với James vào tuần tới."
  },
  {
    "id": 991,
    "title": "Luyện nói: Update on {project} #268",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Good morning Sophia, can you give me an update on Database Design? | Chào buổi sáng Sophia, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Olivia next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Olivia vào tuần tới."
  },
  {
    "id": 992,
    "title": "Luyện nói: Site safety check at {place} #269",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the downtown office before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the downtown office trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 993,
    "title": "Luyện nói: Site safety check at {place} #270",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the central square before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the central square trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 994,
    "title": "Luyện nói: Daily Greeting & Plans #271",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi Linda, how are you doing today? | Chào Linda, hôm nay bạn thế nào rồi?\nHi Elizabeth, I am doing great! Are you free this afternoon? | Chào Elizabeth, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the park for a drink. | Có, tôi rảnh. Cùng đến the park uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my laptop computer. | Khoảng ba giờ thì sao? Tôi sẽ mang theo laptop computer của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 995,
    "title": "Luyện nói: Site safety check at {place} #272",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the supermarket before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the supermarket trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 996,
    "title": "Luyện nói: Describing {item} #273",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful laptop computer that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ laptop computer hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my laptop computer, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc laptop computer của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 997,
    "title": "Luyện nói: Update on {project} #274",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Mary, can you give me an update on Cloud Migration? | Chào buổi sáng Mary, bạn có thể cập nhật cho tôi về dự án Cloud Migration không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to John next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với John vào tuần tới."
  },
  {
    "id": 998,
    "title": "Luyện nói: Describing {item} #275",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful keychain that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ keychain hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my keychain, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc keychain của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 999,
    "title": "Luyện nói: Borrowing {item} #276",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hey Kevin, do you have a spare water bottle I can borrow? | Này Kevin, bạn có thừa chiếc water bottle nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Web Application Dev project. | Tôi cần nó để làm việc với dự án Web Application Dev.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Sophia! You are always so helpful. | Cảm ơn Sophia! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 1000,
    "title": "Luyện nói: Describing {item} #277",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful water bottle that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ water bottle hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my water bottle, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc water bottle của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 1001,
    "title": "Luyện nói: Update on {project} #278",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Olivia, can you give me an update on Marketing Campaign? | Chào buổi sáng Olivia, bạn có thể cập nhật cho tôi về dự án Marketing Campaign không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Daniel next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Daniel vào tuần tới."
  },
  {
    "id": 1002,
    "title": "Luyện nói: Describing {item} #279",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful notebook that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ notebook hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my notebook, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc notebook của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 1003,
    "title": "Luyện nói: Ordering {food} at restaurant #280",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. A customer ordering a local meal at a restaurant from a waiter.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hello, are you ready to order food now? | Xin chào, quý khách đã sẵn sàng gọi đồ ăn bây giờ chưa?\nYes, I would like to try the local sushi roll. | Vâng, tôi muốn dùng thử món sushi roll đặc sản ở đây.\nExcellent choice! Would you like anything to drink? | Lựa chọn tuyệt vời! Quý khách có muốn uống thêm gì không?\nPlease give me a cup of tea and some cold water. | Vui lòng cho tôi một tách trà và một ít nước lạnh.\nSure. Your order will be ready in ten minutes. | Dạ được. Món ăn của quý khách sẽ sẵn sàng trong mười phút nữa."
  },
  {
    "id": 1004,
    "title": "Luyện nói: Lost at {place} #281",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Travel. Asking for help to locate a lost personal item at a tourist spot.",
    "language": "en",
    "category": "Travel",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Excuse me, John, I think I lost my laptop computer here. | Xin lỗi John, tôi nghĩ tôi đã đánh mất chiếc laptop computer ở đây.\nOh, really? Where was the last place you saw it? | Ôi thế ư? Nơi cuối cùng bạn nhìn thấy nó là ở đâu?\nI think I left it near the entrance of the park. | Tôi nghĩ tôi đã để quên nó gần lối vào the park.\nLet us ask the security guard. Don't worry too much. | Hãy cùng đi hỏi nhân viên bảo vệ xem sao. Đừng lo lắng quá nhé.\nThank you so much. It contains my ID card. | Cảm ơn bạn rất nhiều. Nó chứa cả thẻ căn cước của tôi."
  },
  {
    "id": 1005,
    "title": "Luyện nói: Update on {project} #282",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Good morning Mary, can you give me an update on Database Design? | Chào buổi sáng Mary, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Robert next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Robert vào tuần tới."
  },
  {
    "id": 1006,
    "title": "Luyện nói: Site safety check at {place} #283",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the library before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the library trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 1007,
    "title": "Luyện nói: Site safety check at {place} #284",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Engineer: Check the scaffolding safety at the airport terminal before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the airport terminal trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 1008,
    "title": "Luyện nói: Update on {project} #285",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning Sarah, can you give me an update on Web Application Dev? | Chào buổi sáng Sarah, bạn có thể cập nhật cho tôi về dự án Web Application Dev không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Kevin next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Kevin vào tuần tới."
  },
  {
    "id": 1009,
    "title": "Luyện nói: Daily Greeting & Plans #286",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi Jessica, how are you doing today? | Chào Jessica, hôm nay bạn thế nào rồi?\nHi Mark, I am doing great! Are you free this afternoon? | Chào Mark, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the subway station for a drink. | Có, tôi rảnh. Cùng đến the subway station uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my smartphone. | Khoảng ba giờ thì sao? Tôi sẽ mang theo smartphone của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 1010,
    "title": "Luyện nói: Site safety check at {place} #287",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the park before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the park trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 1011,
    "title": "Luyện nói: Site safety check at {place} #288",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the conference room before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the conference room trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 1012,
    "title": "Luyện nói: Describing {item} #289",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful notebook that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ notebook hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my notebook, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc notebook của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 1013,
    "title": "Luyện nói: Describing {item} #290",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful leather wallet that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ leather wallet hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my leather wallet, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc leather wallet của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 1014,
    "title": "Luyện nói: Daily Greeting & Plans #291",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi Sophia, how are you doing today? | Chào Sophia, hôm nay bạn thế nào rồi?\nHi Kevin, I am doing great! Are you free this afternoon? | Chào Kevin, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the coffee shop for a drink. | Có, tôi rảnh. Cùng đến the coffee shop uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my umbrella. | Khoảng ba giờ thì sao? Tôi sẽ mang theo umbrella của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 1015,
    "title": "Luyện nói: Daily Greeting & Plans #292",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hi James, how are you doing today? | Chào James, hôm nay bạn thế nào rồi?\nHi Chloe, I am doing great! Are you free this afternoon? | Chào Chloe, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the dental clinic for a drink. | Có, tôi rảnh. Cùng đến the dental clinic uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my backpack. | Khoảng ba giờ thì sao? Tôi sẽ mang theo backpack của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 1016,
    "title": "Luyện nói: Update on {project} #293",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Business. A manager asking for status updates regarding a current business project.",
    "language": "en",
    "category": "Business",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Good morning David, can you give me an update on Database Design? | Chào buổi sáng David, bạn có thể cập nhật cho tôi về dự án Database Design không?\nWe are on track, sir. We finished the core layout. | Chúng tôi đang đúng tiến độ thưa sếp. Chúng tôi đã hoàn thành bố cục cốt lõi.\nExcellent. Are there any issues that might cause delays? | Tuyệt vời. Có bất kỳ vấn đề gì có thể gây chậm trễ không?\nNot at the moment. We are doing testing now. | Hiện tại thì không. Chúng tôi đang thực hiện kiểm thử ngay bây giờ.\nGreat. Let us present the final results to Kevin next week. | Tốt lắm. Hãy thuyết trình kết quả cuối cùng với Kevin vào tuần tới."
  },
  {
    "id": 1017,
    "title": "Luyện nói: Daily Greeting & Plans #294",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Normal",
    "repeat_default": 2,
    "content": "Hi James, how are you doing today? | Chào James, hôm nay bạn thế nào rồi?\nHi Elizabeth, I am doing great! Are you free this afternoon? | Chào Elizabeth, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the downtown office for a drink. | Có, tôi rảnh. Cùng đến the downtown office uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my leather wallet. | Khoảng ba giờ thì sao? Tôi sẽ mang theo leather wallet của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 1018,
    "title": "Luyện nói: Describing {item} #295",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Examiner: Tell me about a useful umbrella that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ umbrella hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my umbrella, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc umbrella của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 1019,
    "title": "Luyện nói: Daily Greeting & Plans #296",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. A conversation between two friends talking about plans for the day.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hi Robert, how are you doing today? | Chào Robert, hôm nay bạn thế nào rồi?\nHi Jessica, I am doing great! Are you free this afternoon? | Chào Jessica, tôi rất khỏe! Chiều nay bạn có rảnh không?\nYes, I am free. Let us go to the downtown office for a drink. | Có, tôi rảnh. Cùng đến the downtown office uống gì đó đi.\nThat sounds like a wonderful idea! What time shall we meet? | Nghe có vẻ là ý kiến tuyệt vời đấy! Chúng ta gặp nhau lúc mấy giờ?\nHow about three o'clock? I will bring my keychain. | Khoảng ba giờ thì sao? Tôi sẽ mang theo keychain của mình.\nPerfect! See you there at three. | Hoàn hảo! Hẹn gặp lại bạn ở đó lúc ba giờ."
  },
  {
    "id": 1020,
    "title": "Luyện nói: Describing {item} #297",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề IELTS. An IELTS Speaking cue card question asking to describe a useful item.",
    "language": "en",
    "category": "IELTS",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Examiner: Tell me about a useful notebook that you own. | Giám khảo: Hãy nói cho tôi nghe về một món đồ notebook hữu ích mà bạn sở hữu.\nCandidate: I would like to describe my notebook, which I bought last year. | Thí sinh: Tôi muốn mô tả về chiếc notebook của mình, thứ tôi đã mua năm ngoái.\nCandidate: It has a modern design and helps me a lot in my study. | Thí sinh: Nó có thiết kế hiện đại và giúp đỡ tôi rất nhiều trong việc học tập.\nCandidate: I use it daily to stay organized and check my schedules. | Thí sinh: Tôi sử dụng nó hàng ngày để giữ ngăn nắp và kiểm tra lịch trình.\nExaminer: Thank you. Let us move to the next question. | Giám khảo: Cảm ơn bạn. Chúng ta hãy chuyển sang câu hỏi tiếp theo."
  },
  {
    "id": 1021,
    "title": "Luyện nói: Borrowing {item} #298",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Hey Daniel, do you have a spare notebook I can borrow? | Này Daniel, bạn có thừa chiếc notebook nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Web Application Dev project. | Tôi cần nó để làm việc với dự án Web Application Dev.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, Barbara! You are always so helpful. | Cảm ơn Barbara! Bạn luôn luôn rất tốt bụng."
  },
  {
    "id": 1022,
    "title": "Luyện nói: Site safety check at {place} #299",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Construction. An engineer checking scaffolding and worker equipment status on-site.",
    "language": "en",
    "category": "Construction",
    "difficulty": "Beginner",
    "repeat_default": 2,
    "content": "Engineer: Check the scaffolding safety at the downtown office before working. | Kỹ sư: Hãy kiểm tra độ an toàn của giàn giáo tại the downtown office trước khi làm việc.\nWorker: Yes, boss. We have checked all the structural joints. | Công nhân: Vâng sếp. Chúng tôi đã kiểm tra toàn bộ các khớp nối cấu trúc.\nEngineer: Ensure everyone has their helmet and safety harness. | Kỹ sư: Đảm bảo mọi người đều đeo mũ bảo hiểm và dây đai an toàn.\nWorker: All workers are fully equipped and ready to proceed. | Công nhân: Tất cả công nhân đã trang bị đầy đủ và sẵn sàng tiến hành."
  },
  {
    "id": 1023,
    "title": "Luyện nói: Borrowing {item} #300",
    "description": "Bài thực hành Shadowing tiếng Anh chủ đề Daily Conversation. Asking a friend to borrow an item and discussing return time.",
    "language": "en",
    "category": "Daily Conversation",
    "difficulty": "Advanced",
    "repeat_default": 3,
    "content": "Hey Thomas, do you have a spare laptop computer I can borrow? | Này Thomas, bạn có thừa chiếc laptop computer nào cho tôi mượn không?\nYes, I do. I kept it in my bag. Why do you need it? | Có, tôi có. Tôi cất nó trong ba lô. Tại sao bạn cần nó vậy?\nI need it to work on the Web Application Dev project. | Tôi cần nó để làm việc với dự án Web Application Dev.\nNo problem at all. Just return it to me by tomorrow morning. | Không vấn đề gì cả. Cứ gửi trả tôi trước sáng mai nhé.\nThank you, David! You are always so helpful. | Cảm ơn David! Bạn luôn luôn rất tốt bụng."
  }
];
