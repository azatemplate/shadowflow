from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base, SessionLocal
from .routers import lessons, analytics
from . import models

# Tự động tạo các bảng cơ sở dữ liệu nếu chưa tồn tại
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="ShadowFlow API",
    description="Backend API phục vụ ứng dụng luyện Shadowing đa ngôn ngữ",
    version="1.0.0"
)

# Tự động gieo dữ liệu (Seed) bài học mẫu nếu bảng trống
@app.on_event("startup")
def seed_db():
    db = SessionLocal()
    try:
        if db.query(models.Lesson).count() == 0:
            lessons_data = [
                # English - Daily Conversation
                {
                    "title": "Mẹ và bé: Mặc quần áo buổi sáng | Getting Dressed",
                    "description": "Đoạn hội thoại ngắn giữa mẹ và bé khi chuẩn bị quần áo để bắt đầu ngày mới.",
                    "language": "en",
                    "category": "Daily Conversation",
                    "difficulty": "Beginner",
                    "repeat_default": 2,
                    "content": "Mother: Wake up, sweetheart! It is time to get dressed. | Mẹ: Dậy đi con yêu! Đến lúc mặc quần áo rồi.\nBaby: Good morning, mommy. I am still sleepy. | Con: Chào buổi sáng mẹ. Con vẫn còn buồn ngủ lắm.\nMother: Let us put on your favorite blue shirt today. | Mẹ: Hôm nay chúng ta mặc chiếc áo sơ mi màu xanh yêu thích của con nhé.\nBaby: Yes! And I want to wear my red shorts too. | Con: Vâng ạ! Và con cũng muốn mặc chiếc quần đùi màu đỏ nữa.\nMother: Great choice! Put your arms through the sleeves first. | Mẹ: Lựa chọn tuyệt vời! Xỏ tay qua ống tay áo trước nào con.\nBaby: Like this, mommy? I did it by myself! | Con: Thế này hả mẹ? Con tự làm được rồi này!\nMother: Yes, just like that. You are doing a wonderful job! | Mẹ: Đúng rồi, chính thế. Con làm tốt lắm!",
                    "is_published": True
                },
                {
                    "title": "Mẹ và bé: Đi chơi công viên | Going to the Park",
                    "description": "Hội thoại tiếng Anh thông dụng khi mẹ chuẩn bị cho bé đi chơi công viên.",
                    "language": "en",
                    "category": "Daily Conversation",
                    "difficulty": "Beginner",
                    "repeat_default": 2,
                    "content": "Mother: Do you want to go to the park with me? | Mẹ: Con có muốn đi chơi công viên với mẹ không?\nBaby: Yay! I want to play on the slide and swing. | Con: Dê! Con muốn chơi cầu trượt và xích đu.\nMother: Put on your shoes and grab your water bottle. | Mẹ: Hãy đi giày vào và mang theo bình nước của con nhé.\nBaby: Where is my sun hat, mommy? | Con: Mũ che nắng của con đâu rồi hả mẹ?\nMother: It is on the table near the door. Let us go! | Mẹ: Nó ở trên bàn gần cửa ra vào ấy. Đi thôi con!\nBaby: Look, mommy! There are many beautiful butterflies. | Con: Nhìn kìa mẹ! Có rất nhiều bươm bướm xinh đẹp.\nMother: Yes, they are. Stay close to me, okay? | Mẹ: Đúng vậy. Hãy đi gần mẹ nhé, được không?",
                    "is_published": True
                },
                {
                    "title": "Mẹ và bé: Dọn dẹp đồ chơi | Tidying Up Toys",
                    "description": "Mẹ hướng dẫn bé cách cất đồ chơi gọn gàng sau khi chơi xong.",
                    "language": "en",
                    "category": "Daily Conversation",
                    "difficulty": "Beginner",
                    "repeat_default": 2,
                    "content": "Mother: We finished playing. Now it is time to tidy up. | Mẹ: Chúng ta chơi xong rồi. Bây giờ đến lúc dọn dẹp thôi.\nBaby: But mommy, I want to keep playing with my blocks. | Con: Nhưng mẹ ơi, con vẫn muốn chơi với các khối hình.\nMother: We can play again tomorrow. Let us put them in the box. | Mẹ: Ngày mai chúng ta lại chơi tiếp nhé. Cùng cất chúng vào hộp nào.\nBaby: Can you help me pick up the toy cars, please? | Con: Mẹ có thể giúp con nhặt mấy chiếc ô tô đồ chơi được không ạ?\nMother: Of course! I will collect the cars, and you collect the blocks. | Mẹ: Tất nhiên rồi! Mẹ sẽ nhặt ô tô, còn con nhặt các khối hình nhé.\nBaby: Look! The room is clean and tidy now. | Con: Nhìn kìa mẹ! Căn phòng bây giờ đã sạch sẽ và ngăn nắp rồi.\nMother: High five! Thank you for being such a good helper. | Mẹ: Đập tay nào! Cảm ơn con vì đã là một người giúp việc ngoan.",
                    "is_published": True
                },
                {
                    "title": "Mẹ và bé: Đánh răng trước khi ngủ | Brushing Teeth",
                    "description": "Hội thoại vui vẻ giúp bé tạo thói quen đánh răng sạch sẽ trước khi đi ngủ.",
                    "language": "en",
                    "category": "Daily Conversation",
                    "difficulty": "Beginner",
                    "repeat_default": 2,
                    "content": "Mother: Brush, brush, brush your teeth! Time to clean them up. | Mẹ: Chải chải chải răng nào! Đến lúc làm sạch răng rồi.\nBaby: My toothbrush has a little dinosaur on it! | Con: Bàn chải đánh răng của con có hình một chú khủng long nhỏ này!\nMother: Put a little toothpaste on it, just like a pea. | Mẹ: Bôi một ít kem đánh răng lên nhé, chỉ bằng hạt đậu thôi.\nBaby: Like this, mommy? It smells like strawberries! | Con: Thế này hả mẹ? Nó có mùi dâu tây thơm quá!\nMother: Yes. Now brush up and down, and round and round. | Mẹ: Đúng rồi. Giờ chải lên chải xuống, và chải vòng tròn nhé.\nBaby: I am spitting out the water now. Spit! | Con: Con đang nhổ nước ra đây ạ. Nhổ!\nMother: Good job! Your teeth are shining and clean now. | Mẹ: Làm tốt lắm! Răng của con bây giờ đã sáng bóng và sạch sẽ rồi.",
                    "is_published": True
                },
                # English - Business
                {
                    "title": "Hội thoại công sở: Họp dự án | Business Meeting",
                    "description": "Hội thoại tiếng Anh thương mại thường gặp khi thảo luận tiến độ dự án.",
                    "language": "en",
                    "category": "Business",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Manager: Good morning everyone, let us start the project review. | Trưởng nhóm: Chào buổi sáng mọi người, chúng ta hãy bắt đầu buổi đánh giá dự án.\nEmployee: I have completed the database design. | Nhân viên: Tôi đã hoàn thành việc thiết kế cơ sở dữ liệu.\nManager: That is great news. Are there any delays with the UI design? | Trưởng nhóm: Đó là tin tốt. Có sự chậm trễ nào với thiết kế giao diện không?\nDesigner: No, the templates will be ready by tomorrow afternoon. | Nhà thiết kế: Không ạ, các bản mẫu sẽ sẵn sàng vào chiều mai.\nManager: Perfect! Let us meet again on Friday to test the app. | Trưởng nhóm: Hoàn hảo! Chúng ta hãy gặp lại vào thứ Sáu để kiểm thử ứng dụng.",
                    "is_published": True
                },
                # English - Travel
                {
                    "title": "Hỏi đường du lịch: Đến ga tàu | Asking for Directions",
                    "description": "Mẫu câu hỏi đường đi ga tàu điện ngầm cơ bản dành cho người đi du lịch.",
                    "language": "en",
                    "category": "Travel",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Traveler: Excuse me, could you tell me how to get to the subway station? | Khách: Xin lỗi, bạn có thể chỉ tôi đường đến ga tàu điện ngầm không?\nLocal: Sure. Walk straight down this street for two blocks. | Dân địa phương: Chắc chắn rồi. Đi thẳng con đường này qua hai ngã tư.\nTraveler: Should I turn left or right at the traffic lights? | Khách: Tôi nên rẽ trái hay rẽ phải ở cột đèn giao thông?\nLocal: Turn left, and you will see the station entrance on your right. | Dân địa phương: Rẽ trái, và bạn sẽ thấy lối vào ga ở bên phải.\nTraveler: Thank you so much for your kind help! | Khách: Cảm ơn bạn rất nhiều vì sự giúp đỡ tốt bụng!",
                    "is_published": True
                },
                # English - IELTS
                {
                    "title": "IELTS Speaking: Cuốn sách yêu thích | Favorite Book",
                    "description": "Đoạn nói học thuật mô tả một cuốn sách ảnh hưởng lớn đến cuộc sống.",
                    "language": "en",
                    "category": "IELTS",
                    "difficulty": "Advanced",
                    "repeat_default": 2,
                    "content": "Candidate: I would like to talk about a book that inspired me deeply. | Thí sinh: Tôi muốn nói về một cuốn sách đã truyền cảm hứng sâu sắc cho tôi.\nExaminer: Please go ahead and describe the details. | Giám khảo: Xin mời tiếp tục và mô tả các chi tiết.\nCandidate: It is a motivational book called The Alchemist. | Thí sinh: Đó là một cuốn sách truyền động lực có tên là Nhà Giả Kim.\nCandidate: The main theme is about pursuing one's destiny. | Thí sinh: Chủ đề chính là về việc theo đuổi định mệnh của mỗi người.\nCandidate: Reading it helped me overcome my fears of failure. | Thí sinh: Đọc nó đã giúp tôi vượt qua nỗi sợ hãi thất bại.",
                    "is_published": True
                },
                # English - Construction
                {
                    "title": "Xây dựng: Thi công bê tông & An toàn | Concrete Pouring",
                    "description": "Từ vựng tiếng Anh kỹ thuật thi công đổ bê tông cốt thép tại công trường.",
                    "language": "en",
                    "category": "Construction",
                    "difficulty": "Advanced",
                    "repeat_default": 3,
                    "content": "Engineer: Check the steel formwork stability before pouring concrete. | Kỹ sư: Kiểm tra độ ổn định của cốp pha thép trước khi đổ bê tông.\nWorker: Yes, sir. All support props are locked securely. | Công nhân: Vâng thưa kỹ sư. Tất cả các thanh chống phụ đã được khóa chặt.\nEngineer: Remember to wear your safety harness on the scaffolding. | Kỹ sư: Nhớ thắt dây an toàn khi đứng trên giàn giáo nhé.\nWorker: Understood. Safety is always our top priority. | Công nhân: Đã rõ. An toàn luôn là ưu tiên hàng đầu của chúng tôi.\nEngineer: Good. Let us start the concrete pump now. | Kỹ sư: Tốt. Hãy bắt đầu khởi động máy bơm bê tông ngay nào.",
                    "is_published": True
                },
                # Vietnamese - Daily Conversation
                {
                    "title": "Tiếng Việt: Chào hỏi xã giao | Vietnamese Greetings",
                    "description": "Mẫu câu tiếng Việt cơ bản để chào hỏi và hỏi thăm sức khỏe hàng ngày.",
                    "language": "vi",
                    "category": "Daily Conversation",
                    "difficulty": "Beginner",
                    "repeat_default": 2,
                    "content": "Nam: Xin chào, rất vui được gặp bạn hôm nay! | Nam: Hello, nice to meet you today!\nLan: Chào Nam! Dạo này công việc của bạn thế nào rồi? | Lan: Hello Nam! How is your work going lately?\nNam: Cảm ơn bạn, tôi vẫn bình thường. Còn bạn thì sao? | Nam: Thank you, I am doing fine. And you?\nLan: Tôi mới chuyển sang một công việc thiết kế mới. | Lan: I have just switched to a new design job.\nNam: Chúc mừng nhé! Cuối tuần này chúng ta đi uống cà phê đi. | Nam: Congratulations! Let us go for coffee this weekend.",
                    "is_published": True
                },
                # Vietnamese - Travel
                {
                    "title": "Tiếng Việt: Gọi món ăn ở nhà hàng | Ordering Food",
                    "description": "Giao tiếp tại quán ăn khi muốn gọi phở và các món đặc sản Việt Nam.",
                    "language": "vi",
                    "category": "Travel",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Customer: Cho tôi xin thực đơn của nhà hàng ngày hôm nay nhé. | Customer: Please give me the restaurant menu for today.\nWaiter: Vâng ạ. Quý khách muốn dùng phở bò hay phở gà? | Waiter: Yes. Would you like beef noodle soup or chicken noodle soup?\nCustomer: Cho tôi một bát phở bò tái chín và một ly trà đá. | Customer: Give me a bowl of beef noodle soup and an iced tea.\nWaiter: Dạ được. Quý khách có muốn dùng thêm quẩy nóng không ạ? | Waiter: Sure. Would you like some hot fried dough sticks too?\nCustomer: Có chứ, cho tôi thêm một đĩa quẩy nhé. Xin cảm ơn! | Customer: Yes, please add a plate of dough sticks. Thank you!",
                    "is_published": True
                },
                # Japanese - Travel
                {
                    "title": "Tiếng Nhật: Mua vé tàu Shinkansen | Shinkansen Ticket",
                    "description": "Mẫu câu hội thoại tiếng Nhật thực tế khi mua vé tàu cao tốc tại quầy.",
                    "language": "ja",
                    "category": "Travel",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Passenger: すみません、東京行きのチケットを一枚ください。 | Hành khách: Xin lỗi, cho tôi mua một vé đi Tokyo.\nClerk: 指定席と自由席のどちらがよろしいですか？ | Nhân viên: Quý khách muốn vé ghế chỉ định hay ghế tự do?\nPassenger: 指定席でお願いします。窓側の席はありますか？ | Hành khách: Cho tôi vé ghế chỉ định. Có ghế cạnh cửa sổ không?\nClerk: はい、空いています。チケットは一万二千円になります。 | Nhân viên: Vâng, còn trống ạ. Vé của quý khách là 12,000 Yên.\nPassenger: ありがとう。クレジットカードは使えますか？ | Hành khách: Cảm ơn. Tôi có thể dùng thẻ tín dụng được không?",
                    "is_published": True
                },
                # Japanese - Japanese
                {
                    "title": "Tiếng Nhật: Chào hỏi buổi sáng | Japanese Greetings",
                    "description": "Các câu giao tiếp tiếng Nhật ngắn gọn bắt đầu ngày mới.",
                    "language": "ja",
                    "category": "Japanese",
                    "difficulty": "Beginner",
                    "repeat_default": 2,
                    "content": "A: おはようございます。今日もいい天気ですね。 | A: Chào buổi sáng. Hôm nay thời tiết cũng đẹp nhỉ.\nB: そうですね。今週はずっと晴れるみたいですよ。 | B: Đúng thế. Tuần này nghe nói trời sẽ nắng suốt đấy.\nA: 朝ごはんを食べましたか？コーヒーを飲みましょう。 | A: Bạn ăn sáng chưa? Cùng uống cà phê nhé.\nB: まだです。駅前のカフェに行きませんか？ | B: Chưa ăn. Chúng ta đến quán cà phê trước ga đi?\nA: いいですね。すぐに行きましょう！ | A: Được đấy. Đi ngay thôi nào!",
                    "is_published": True
                },
                # Korean - Korean
                {
                    "title": "Tiếng Hàn: Tự giới thiệu bản thân | Korean Intro",
                    "description": "Học các câu nói tiếng Hàn cơ bản để giới thiệu tên, tuổi và nghề nghiệp.",
                    "language": "ko",
                    "category": "Korean",
                    "difficulty": "Beginner",
                    "repeat_default": 2,
                    "content": "A: 안녕하세요! 처음 뵙겠습니다. | A: Xin chào! Rất vui được gặp bạn lần đầu.\nB: 안녕하세요! 저는 민우라고 합니다. 이름이 어떻게 되세요? | B: Xin chào! Tôi tên là Min-woo. Tên bạn là gì?\nA: 제 이름은 지수입니다. 베트남에서 왔습니다. | A: Tên tôi là Ji-soo. Tôi đến từ Việt Nam.\nB: 지수 씨, 반가워요. 한국어 공부는 언제 시작했어요? | B: Rất vui được gặp Ji-soo. Bạn bắt đầu học tiếng Hàn từ khi nào?\nA: 세 달 전에 시작했습니다. 아직 많이 서툴러요. | A: Tôi đã bắt đầu từ 3 tháng trước. Tôi vẫn còn kém lắm.",
                    "is_published": True
                },
                # Korean - Travel
                {
                    "title": "Tiếng Hàn: Mua sắm ở chợ Dongdaemun | Shopping",
                    "description": "Hội thoại mặc cả và hỏi giá khi đi mua sắm quần áo tại Hàn Quốc.",
                    "language": "ko",
                    "category": "Travel",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Customer: 이 청바지는 얼마예요? 한번 입어볼 수 있어요? | Khách: Chiếc quần jean này giá bao nhiêu? Tôi mặc thử được không?\nShopkeeper: 오만 원이에요. 피팅룸은 저쪽에 있습니다. | Chủ tiệm: Giá 50,000 Won. Phòng thử đồ ở đằng kia nhé.\nCustomer: 조금 입어봤는데 바지가 너무 큽니다. | Khách: Tôi mặc thử rồi nhưng quần bị rộng quá.\nShopkeeper: 그럼 더 작은 사이즈로 보여드릴게요. 잠시만요. | Chủ tiệm: Vậy tôi sẽ lấy size nhỏ hơn cho bạn xem. Đợi chút nhé.\nCustomer: 고맙습니다. 디자인이 마음에 드네요. | Khách: Cảm ơn. Tôi rất ưng ý kiểu dáng này.",
                    "is_published": True
                },
                # Chinese - Travel
                {
                    "title": "Tiếng Trung: Trả giá khi mua sắm | Bargaining",
                    "description": "Các câu nói tiếng Trung thường dùng để mặc cả giảm giá khi mua quà lưu niệm.",
                    "language": "zh",
                    "category": "Travel",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Customer: 老板，这个茶壶多少钱？ | Khách: Ông chủ, cái ấm trà này bao nhiêu tiền?\nShopkeeper: 一百块钱，这是纯手工做的。 | Chủ tiệm: 100 Tệ, đây là đồ làm thủ công hoàn toàn đấy.\nCustomer: 太贵了，便宜点儿吧，八十块可以吗？ | Khách: Đắt quá, rẻ chút đi, 80 Tệ được không?\nShopkeeper: 最少九十块，不能再便宜了。 | Chủ tiệm: Thấp nhất là 90 Tệ, không thể rẻ hơn nữa đâu.\nCustomer: 行，那就九十块吧，帮我包装一下。 | Khách: Được rồi, vậy 90 Tệ đi, gói giúp tôi nhé.",
                    "is_published": True
                },
                # Chinese - Daily Conversation
                {
                    "title": "Tiếng Trung: Hỏi thăm gia đình | Family Talk",
                    "description": "Chủ đề hỏi thăm số lượng thành viên và công việc của mọi người trong nhà.",
                    "language": "zh",
                    "category": "Daily Conversation",
                    "difficulty": "Beginner",
                    "repeat_default": 2,
                    "content": "A: 你家有几口人？他们都做什么工作？ | A: Nhà bạn có mấy người? Họ làm công việc gì?\nB: 我家有四口人：爸爸、妈妈、妹妹和我。 | B: Nhà tôi có 4 người: Bố, mẹ, em gái và tôi.\nA: 你妹妹是学生吗？她今年多大？ | A: Em gái bạn là học sinh à? Năm nay cô ấy bao nhiêu tuổi?\nB: 对，她是大学生，今年二十岁了。 | B: Đúng thế, em ấy là sinh viên đại học, năm nay 20 tuổi rồi.\nA: 你父母都退休了吗？ | A: Bố mẹ bạn đã nghỉ hưu chưa?\nB: 爸爸退休了，妈妈还在教书。 | B: Bố tôi nghỉ hưu rồi, mẹ tôi vẫn đang dạy học.",
                    "is_published": True
                },
                # Chinese - Business
                {
                    "title": "Tiếng Trung: Ký kết hợp đồng thương mại | Business",
                    "description": "Thoại thương mại cấp cao đàm phán ký kết hợp đồng giữa hai đối tác.",
                    "language": "zh",
                    "category": "Business",
                    "difficulty": "Advanced",
                    "repeat_default": 2,
                    "content": "A: 贵公司对合同草案还有什么修改意见吗？ | A: Quý công ty còn ý kiến sửa đổi nào đối với dự thảo hợp đồng không?\nB: 基本没有了，我们对付款方式非常满意。 | B: Cơ bản là không còn nữa, chúng tôi rất hài lòng về phương thức thanh toán.\nA: 那太好了。预祝我们的项目取得圆满成功！ | A: Vành thế tốt quá. Chúc dự án của chúng ta thành công viên mãn!\nB: 合作愉快！我们今天下午就正式签字吧। | B: Hợp tác vui vẻ! Chiều nay chúng ta tiến hành ký kết chính thức nhé.\nA: 好的，我下午三点准时到您办公室。 | A: Vâng, tôi sẽ đến văn phòng của ông đúng 3 giờ chiều.",
                    "is_published": True
                },
                {
                    "title": "Mẹ và bé: Tại sân bay nước ngoài | At the Airport",
                    "description": "Mẹ hướng dẫn bé và thực hiện các thủ tục check-in tại sân bay khi chuẩn bị đi nước ngoài.",
                    "language": "en",
                    "category": "Travel",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Mother: Keep your passport in your bag, do not lose it. | Mẹ: Giữ hộ chiếu của con trong túi nhé, đừng làm mất đấy.\nBaby: Where are we going now, mommy? | Con: Bây giờ chúng ta đang đi đâu thế mẹ?\nMother: We are going to the check-in counter to drop our bags. | Mẹ: Chúng ta đang đi đến quầy làm thủ tục để gửi hành lý.\nStaff: Hello, passport and tickets, please. | Nhân viên: Xin chào, vui lòng cho tôi mượn hộ chiếu và vé máy bay.\nMother: Here they are. We have one stroller to check in. | Mẹ: Đây ạ. Chúng tôi có một chiếc xe đẩy em bé cần ký gửi.\nStaff: Sure. Please place your luggage on the scale. | Nhân viên: Chắc chắn rồi. Vui lòng đặt hành lý của bạn lên cân.\nBaby: Look! The plane is so big outside the window! | Con: Nhìn kìa! Chiếc máy bay ngoài cửa sổ to quá mẹ ơi!\nMother: Yes it is! We will board the plane very soon. | Mẹ: Đúng vậy! Chúng ta sẽ lên máy bay sớm thôi.",
                    "is_published": True
                },
                {
                    "title": "Mẹ và bé: Trên chuyến bay | On the Airplane",
                    "description": "Mẹ giao tiếp với tiếp viên hàng không để xin nước ấm pha sữa và chăn đắp cho bé.",
                    "language": "en",
                    "category": "Travel",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Mother: Excuse me, could I get some warm water for baby milk? | Mẹ: Xin lỗi, tôi có thể xin một ít nước ấm để pha sữa cho bé không?\nFlight Attendant: Yes, of course. I will bring it right away. | Tiếp viên: Vâng, tất nhiên rồi. Tôi sẽ mang đến ngay lập tức.\nBaby: Mommy, my ears hurt a little bit. | Con: Mẹ ơi, tai con hơi bị đau một chút.\nMother: Drink some water or chew this gummy, it will help. | Mẹ: Uống chút nước hoặc nhai viên kẹo dẻo này nhé, nó sẽ giúp đỡ đau đấy.\nFlight Attendant: Here is your warm water. Do you need a blanket? | Tiếp viên: Nước ấm của chị đây ạ. Chị có cần chăn đắp không?\nMother: Yes, please. A small blanket for my child would be great. | Mẹ: Vâng, làm ơn. Có một chiếc chăn nhỏ cho con tôi thì tốt quá.\nBaby: Thank you, nice lady! | Con: Con cảm ơn cô xinh đẹp!",
                    "is_published": True
                },
                {
                    "title": "Mẹ học tiếng Nhật: Mua sữa và tã ở siêu thị | Buying Baby Milk and Diapers",
                    "description": "Mẫu hội thoại tiếng Nhật cho mẹ hỏi nhân viên siêu thị để tìm mua sữa công thức và tã giấy cho bé.",
                    "language": "ja",
                    "category": "Travel",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Mother: すみません、赤ちゃん用の粉ミルクはどこですか？ | Mẹ: Xin lỗi, sữa bột công thức cho bé ở đâu vậy ạ?\nStaff: あちらのベビー用品コーナーにございます。ご案内します。 | Nhân viên: Ở góc đồ dùng cho bé đằng kia ạ. Tôi sẽ dẫn đường cho chị.\nMother: ありがとうございます。あと、テープタイプのオムツのLサイズはありますか？ | Mẹ: Cảm ơn bạn. Ngoài ra, tã dán size L còn hàng không ạ?\nStaff: はい、パンパースのLサイズなら棚の二段目にございます。 | Nhân viên: Vâng, tã giấy Pampers size L nằm ở ngăn thứ hai của kệ ạ.\nMother: よかった。赤ちゃんの肌に優しいタイプですね。 | Mẹ: May quá. Đây là loại dịu nhẹ cho da em bé đúng không?\nStaff: はい、オーガニックコットン使用で人気の商品です。 | Nhân viên: Vâng, đây là sản phẩm rất được ưa chuộng sử dụng bông hữu cơ ạ.",
                    "is_published": True
                },
                {
                    "title": "Mẹ học tiếng Hàn: Đăng ký khám bệnh cho bé | At the Pediatric Clinic",
                    "description": "Hội thoại tại phòng khám nhi ở Hàn Quốc khi mẹ khai báo các triệu chứng ho sốt của bé.",
                    "language": "ko",
                    "category": "Korean",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Staff: 아기 이름과 생년월일을 적어주세요. 어디가 아픈가요? | Nhân viên: Vui lòng viết tên và ngày sinh của bé. Bé bị đau ở đâu ạ?\nMother: 어제 밤부터 열이 나고 기침을 많이 해요. | Mẹ: Bé bị sốt và ho nhiều từ tối hôm qua ạ.\nStaff: 체온을 먼저 측정하겠습니다. 38.5도네요. | Nhân viên: Tôi sẽ đo nhiệt độ cơ thể trước. Là 38.5 độ ạ.\nDoctor: 목이 조금 부었네요. 감기 기운이 있습니다. | Bác sĩ: Họng của bé hơi sưng một chút. Có dấu hiệu bị cảm lạnh.\nMother: 약은 하루에 몇 번 먹여야 하나요? | Mẹ: Thuốc này phải cho bé uống một ngày mấy lần ạ?\nDoctor: 아침, 점심, 저녁 하루 세 번, 식후 30분에 먹이세요. | Bác sĩ: Hãy cho uống ngày 3 lần sáng, trưa, tối, sau khi ăn 30 phút nhé.",
                    "is_published": True
                },
                {
                    "title": "Mẹ học tiếng Trung: Tìm trường mẫu giáo cho bé | Kindergarten Inquiry",
                    "description": "Mẹ hỏi thăm thông tin đăng ký nhập học và các chế độ ăn uống cho con tại trường mầm non.",
                    "language": "zh",
                    "category": "Daily Conversation",
                    "difficulty": "Advanced",
                    "repeat_default": 2,
                    "content": "Mother: 您好，我想咨询一下三岁孩子的入学申请程序。 | Mẹ: Xin chào, tôi muốn tư vấn về thủ tục nhập học cho trẻ ba tuổi.\nTeacher: 您好！您需要填写申请表，并提供孩子的疫苗接种证明。 | Cô giáo: Chào chị! Chị cần điền vào đơn đăng ký và cung cấp giấy chứng nhận tiêm chủng của bé.\nMother: 这里的班级一般有多少个学生？有几位老师？ | Mẹ: Lớp học ở đây thường có bao nhiêu học sinh? Có mấy giáo viên ạ?\nTeacher: 每个班最多十五个孩子，配备两位老师和一位保育员。 | Cô giáo: Mỗi lớp tối đa mười lăm bé, được trang bị hai giáo viên và một bảo mẫu.\nMother: 孩子的午餐是怎么安排的？菜单会每周更新吗？ | Mẹ: Bữa trưa của các bé được sắp xếp thế nào? Thực đơn có cập nhật hàng tuần không?\nTeacher: 是营养配餐，菜单每周五会在家长群公布。 | Cô giáo: Đó là suất ăn dinh dưỡng, thực đơn sẽ được công bố trong nhóm phụ huynh vào mỗi thứ Sáu.",
                    "is_published": True
                },
                {
                    "title": "Mẹ và bé: Làm quen hàng xóm mới | Meeting New Neighbors",
                    "description": "Mẹ hướng dẫn bé chào hỏi và giao tiếp xã giao với người hàng xóm nước ngoài thân thiện.",
                    "language": "en",
                    "category": "Daily Conversation",
                    "difficulty": "Normal",
                    "repeat_default": 2,
                    "content": "Neighbor: Hello there! Welcome to the neighborhood. | Hàng xóm: Xin chào! Chào mừng gia đình bạn đến với khu phố này.\nMother: Thank you so much. We just moved here last weekend. | Mẹ: Cảm ơn bạn rất nhiều. Chúng tôi vừa mới chuyển đến đây cuối tuần trước.\nNeighbor: What a lovely child. What is your name, little one? | Hàng xóm: Đứa trẻ đáng yêu quá. Tên con là gì thế bé cưng?\nBaby: My name is Liam. I am four years old. | Con: Tên con là Liam. Con bốn tuổi rồi ạ.\nNeighbor: Nice to meet you, Liam! I have a son who is also four. | Hàng xóm: Rất vui được gặp con, Liam! Cô có một đứa con trai cũng bốn tuổi đấy.\nMother: That is wonderful. Maybe they can play together at the park. | Mẹ: Tuyệt vời quá. Có lẽ chúng có thể chơi cùng nhau ở công viên.\nBaby: Can we play toys together, mommy? | Con: Chúng con có thể chơi đồ chơi cùng nhau không mẹ?\nMother: Yes, sweetie. We will invite them over soon. | Mẹ: Được chứ con yêu. Chúng ta sẽ sớm mời họ sang chơi nhé.",
                    "is_published": True
                }
            ]
            for item in lessons_data:
                db_lesson = models.Lesson(**item)
                db.add(db_lesson)
            db.commit()
            print("Database seeded successfully!")
    except Exception as e:
        print(f"Error seeding database: {e}")
    finally:
        db.close()

# Cấu hình CORS để cho phép Next.js gọi API từ cổng khác (ví dụ: localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Trong môi trường production nên cấu hình cụ thể tên miền của Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Kết nối các routers
app.include_router(lessons.router)
app.include_router(analytics.router)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "app": "ShadowFlow API",
        "version": "1.0.0",
        "message": "Hệ thống backend đã sẵn sàng hoạt động!"
    }
