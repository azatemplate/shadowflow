'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useSpeechSynthesis, PlayerState, PauseMode, PausePreset } from '@/hooks/useSpeechSynthesis';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, RotateCcw, ChevronLeft, ChevronRight, 
  Settings, List, Volume2, Info, CheckCircle2, Languages, Clock, HelpCircle
} from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  language: string;
  category: string;
  difficulty: string;
  repeat_default: number;
  content: string;
}

const FALLBACK_LESSONS: Record<number, Lesson> = {
  1: {
    id: 1,
    title: "Mẹ và bé: Mặc quần áo buổi sáng | Getting Dressed",
    description: "Đoạn hội thoại ngắn giữa mẹ và bé khi chuẩn bị quần áo để bắt đầu ngày mới.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: Wake up, sweetheart! It is time to get dressed. | Mẹ: Dậy đi con yêu! Đến lúc mặc quần áo rồi.\nBaby: Good morning, mommy. I am still sleepy. | Con: Chào buổi sáng mẹ. Con vẫn còn buồn ngủ lắm.\nMother: Let us put on your favorite blue shirt today. | Mẹ: Hôm nay chúng ta mặc chiếc áo sơ mi màu xanh yêu thích của con nhé.\nBaby: Yes! And I want to wear my red shorts too. | Con: Vâng ạ! Và con cũng muốn mặc chiếc quần đùi màu đỏ nữa.\nMother: Great choice! Put your arms through the sleeves first. | Mẹ: Lựa chọn tuyệt vời! Xỏ tay qua ống tay áo trước nào con.\nBaby: Like this, mommy? I did it by myself! | Con: Thế này hả mẹ? Con tự làm được rồi này!\nMother: Yes, just like that. You are doing a wonderful job! | Mẹ: Đúng rồi, chính thế. Con làm tốt lắm!"
  },
  2: {
    id: 2,
    title: "Mẹ và bé: Đi chơi công viên | Going to the Park",
    description: "Hội thoại tiếng Anh thông dụng khi mẹ chuẩn bị cho bé đi chơi công viên.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: Do you want to go to the park with me? | Mẹ: Con có muốn đi chơi công viên với mẹ không?\nBaby: Yay! I want to play on the slide and swing. | Con: Dê! Con muốn chơi cầu trượt và xích đu.\nMother: Put on your shoes and grab your water bottle. | Mẹ: Hãy đi giày vào và mang theo bình nước của con nhé.\nBaby: Where is my sun hat, mommy? | Con: Mũ che nắng của con đâu rồi hả mẹ?\nMother: It is on the table near the door. Let us go! | Mẹ: Nó ở trên bàn gần cửa ra vào ấy. Đi thôi con!\nBaby: Look, mommy! There are many beautiful butterflies. | Con: Nhìn kìa mẹ! Có rất nhiều bươm bướm xinh đẹp.\nMother: Yes, they are. Stay close to me, okay? | Mẹ: Đúng vậy. Hãy đi gần mẹ nhé, được không?"
  },
  3: {
    id: 3,
    title: "Mẹ và bé: Dọn dẹp đồ chơi | Tidying Up Toys",
    description: "Mẹ hướng dẫn bé cách cất đồ chơi gọn gàng sau khi chơi xong.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: We finished playing. Now it is time to tidy up. | Mẹ: Chúng ta chơi xong rồi. Bây giờ đến lúc dọn dẹp thôi.\nBaby: But mommy, I want to keep playing with my blocks. | Con: Nhưng mẹ ơi, con vẫn muốn chơi với các khối hình.\nMother: We can play again tomorrow. Let us put them in the box. | Mẹ: Ngày mai chúng ta lại chơi tiếp nhé. Cùng cất chúng vào hộp nào.\nBaby: Can you help me pick up the toy cars, please? | Con: Mẹ có thể giúp con nhặt mấy chiếc ô tô đồ chơi được không ạ?\nMother: Of course! I will collect the cars, and you collect the blocks. | Mẹ: Tất nhiên rồi! Mẹ sẽ nhặt ô tô, còn con nhặt các khối hình nhé.\nBaby: Look! The room is clean and tidy now. | Con: Nhìn kìa mẹ! Căn phòng bây giờ đã sạch sẽ và ngăn nắp rồi.\nMother: High five! Thank you for being such a good helper. | Mẹ: Đập tay nào! Cảm ơn con vì đã là một người giúp việc ngoan."
  },
  4: {
    id: 4,
    title: "Mẹ và bé: Đánh răng trước khi ngủ | Brushing Teeth",
    description: "Hội thoại vui vẻ giúp bé tạo thói quen đánh răng sạch sẽ trước khi đi ngủ.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: Brush, brush, brush your teeth! Time to clean them up. | Mẹ: Chải chải chải răng nào! Đến lúc làm sạch răng rồi.\nBaby: My toothbrush has a little dinosaur on it! | Con: Bàn chải đánh răng của con có hình một chú khủng long nhỏ này!\nMother: Put a little toothpaste on it, just like a pea. | Mẹ: Bôi một ít kem đánh răng lên nhé, chỉ bằng hạt đậu thôi.\nBaby: Like this, mommy? It smells like strawberries! | Con: Thế này hả mẹ? Nó có mùi dâu tây thơm quá!\nMother: Yes. Now brush up and down, and round and round. | Mẹ: Đúng rồi. Giờ chải lên chải xuống, và chải vòng tròn nhé.\nBaby: I am spitting out the water now. Spit! | Con: Con đang nhổ nước ra đây ạ. Nhổ!\nMother: Good job! Your teeth are shining and clean now. | Mẹ: Làm tốt lắm! Răng của con bây giờ đã sáng bóng và sạch sẽ rồi."
  },
  5: {
    id: 5,
    title: "Hội thoại công sở: Họp dự án | Business Meeting",
    description: "Hội thoại tiếng Anh thương mại thường gặp khi thảo luận tiến độ dự án.",
    language: "en",
    category: "Business",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Manager: Good morning everyone, let us start the project review. | Trưởng nhóm: Chào buổi sáng mọi người, chúng ta hãy bắt đầu buổi đánh giá dự án.\nEmployee: I have completed the database design. | Nhân viên: Tôi đã hoàn thành việc thiết kế cơ sở dữ liệu.\nManager: That is great news. Are there any delays with the UI design? | Trưởng nhóm: Đó là tin tốt. Có sự chậm trễ nào với thiết kế giao diện không?\nDesigner: No, the templates will be ready by tomorrow afternoon. | Nhà thiết kế: Không ạ, các bản mẫu sẽ sẵn sàng vào chiều mai.\nManager: Perfect! Let us meet again on Friday to test the app. | Trưởng nhóm: Hoàn hảo! Chúng ta hãy gặp lại vào thứ Sáu để kiểm thử ứng dụng."
  },
  6: {
    id: 6,
    title: "Hỏi đường du lịch: Đến ga tàu | Asking for Directions",
    description: "Mẫu câu hỏi đường đi ga tàu điện ngầm cơ bản dành cho người đi du lịch.",
    language: "en",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Traveler: Excuse me, could you tell me how to get to the subway station? | Khách: Xin lỗi, bạn có thể chỉ tôi đường đến ga tàu điện ngầm không?\nLocal: Sure. Walk straight down this street for two blocks. | Dân địa phương: Chắc chắn rồi. Đi thẳng con đường này qua hai ngã tư.\nTraveler: Should I turn left or right at the traffic lights? | Khách: Tôi nên rẽ trái hay rẽ phải ở cột đèn giao thông?\nLocal: Turn left, and you will see the station entrance on your right. | Dân địa phương: Rẽ trái, và bạn sẽ thấy lối vào ga ở bên phải.\nTraveler: Thank you so much for your kind help! | Khách: Cảm ơn bạn rất nhiều vì sự giúp đỡ tốt bụng!"
  },
  7: {
    id: 7,
    title: "IELTS Speaking: Cuốn sách yêu thích | Favorite Book",
    description: "Đoạn nói học thuật mô tả một cuốn sách ảnh hưởng lớn đến cuộc sống.",
    language: "en",
    category: "IELTS",
    difficulty: "Advanced",
    repeat_default: 2,
    content: "Candidate: I would like to talk about a book that inspired me deeply. | Thí sinh: Tôi muốn nói về một cuốn sách đã truyền cảm hứng sâu sắc cho tôi.\nExaminer: Please go ahead and describe the details. | Giám khảo: Xin mời tiếp tục và mô tả các chi tiết.\nCandidate: It is a motivational book called The Alchemist. | Thí sinh: Đó là một cuốn sách truyền động lực có tên là Nhà Giả Kim.\nCandidate: The main theme is about pursuing one's destiny. | Thí sinh: Chủ đề chính là về việc theo đuổi định mệnh của mỗi người.\nCandidate: Reading it helped me overcome my fears of failure. | Thí sinh: Đọc nó đã giúp tôi vượt qua nỗi sợ hãi thất bại."
  },
  8: {
    id: 8,
    title: "Xây dựng: Thi công bê tông & An toàn | Concrete Pouring",
    description: "Từ vựng tiếng Anh kỹ thuật thi công đổ bê tông cốt thép tại công trường.",
    language: "en",
    category: "Construction",
    difficulty: "Advanced",
    repeat_default: 3,
    content: "Engineer: Check the steel formwork stability before pouring concrete. | Kỹ sư: Kiểm tra độ ổn định của cốp pha thép trước khi đổ bê tông.\nWorker: Yes, sir. All support props are locked securely. | Công nhân: Vâng thưa kỹ sư. Tất cả các thanh chống phụ đã được khóa chặt.\nEngineer: Remember to wear your safety harness on the scaffolding. | Kỹ sư: Nhớ thắt dây an toàn khi đứng trên giàn giáo nhé.\nWorker: Understood. Safety is always our top priority. | Công nhân: Đã rõ. An toàn luôn là ưu tiên hàng đầu của chúng tôi.\nEngineer: Good. Let us start the concrete pump now. | Kỹ sư: Tốt. Hãy bắt đầu khởi động máy bơm bê tông ngay nào."
  },
  9: {
    id: 9,
    title: "Tiếng Việt: Chào hỏi xã giao | Vietnamese Greetings",
    description: "Mẫu câu tiếng Việt cơ bản để chào hỏi và hỏi thăm sức khỏe hàng ngày.",
    language: "vi",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Nam: Xin chào, rất vui được gặp bạn hôm nay! | Nam: Hello, nice to meet you today!\nLan: Chào Nam! Dạo này công việc của bạn thế nào rồi? | Lan: Hello Nam! How is your work going lately?\nNam: Cảm ơn bạn, tôi vẫn bình thường. Còn bạn thì sao? | Nam: Thank you, I am doing fine. And you?\nLan: Tôi mới chuyển sang một công việc thiết kế mới. | Lan: I have just switched to a new design job.\nNam: Chúc mừng nhé! Cuối tuần này chúng ta đi uống cà phê đi. | Nam: Congratulations! Let us go for coffee this weekend."
  },
  10: {
    id: 10,
    title: "Tiếng Việt: Gọi món ăn ở nhà hàng | Ordering Food",
    description: "Giao tiếp tại quán ăn khi muốn gọi phở và các món đặc sản Việt Nam.",
    language: "vi",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Customer: Cho tôi xin thực đơn của nhà hàng ngày hôm nay nhé. | Customer: Please give me the restaurant menu for today.\nWaiter: Vâng ạ. Quý khách muốn dùng phở bò hay phở gà? | Waiter: Yes. Would you like beef noodle soup or chicken noodle soup?\nCustomer: Cho tôi một bát phở bò tái chín và một ly trà đá. | Customer: Give me a bowl of beef noodle soup and an iced tea.\nWaiter: Dạ được. Quý khách có muốn dùng thêm quẩy nóng không ạ? | Waiter: Sure. Would you like some hot fried dough sticks too?\nCustomer: Có chứ, cho tôi thêm một đĩa quẩy nhé. Xin cảm ơn! | Customer: Yes, please add a plate of dough sticks. Thank you!"
  },
  11: {
    id: 11,
    title: "Tiếng Nhật: Mua vé tàu Shinkansen | Shinkansen Ticket",
    description: "Mẫu câu hội thoại tiếng Nhật thực tế khi mua vé tàu cao tốc tại quầy.",
    language: "ja",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Passenger: すみません、東京行きのチケットを一枚ください。 | Hành khách: Xin lỗi, cho tôi mua một vé đi Tokyo.\nClerk: 指定席と自由席のどちらがよろしいですか？ | Nhân viên: Quý khách muốn vé ghế chỉ định hay ghế tự do?\nPassenger: 指定席でお願いします。窓側の席はありますか？ | Hành khách: Cho tôi vé ghế chỉ định. Có ghế cạnh cửa sổ không?\nClerk: はい、空いています。チケットは一万二千円になります。 | Nhân viên: Vâng, còn trống ạ. Vé của quý khách là 12,000 Yên.\nPassenger: ありがとう。クレジットカードは使えますか？ | Hành khách: Cảm ơn. Tôi có thể dùng thẻ tín dụng được không?"
  },
  12: {
    id: 12,
    title: "Tiếng Nhật: Chào hỏi buổi sáng | Japanese Greetings",
    description: "Các câu giao tiếp tiếng Nhật ngắn gọn bắt đầu ngày mới.",
    language: "ja",
    category: "Japanese",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "A: おはようございます。今日もいい天気ですね。 | A: Chào buổi sáng. Hôm nay thời tiết cũng đẹp nhỉ.\nB: そうですね。今週はずっと晴れるみたいですよ。 | B: Đúng thế. Tuần này nghe nói trời sẽ nắng suốt đấy.\nA: 朝ごはんを食べましたか？コーヒーを飲みましょう。 | A: Bạn ăn sáng chưa? Cùng uống cà phê nhé.\nB: まだです。駅前のカフェに行きませんか？ | B: Chưa ăn. Chúng ta đến quán cà phê trước ga đi?\nA: いいですね。すぐに行きましょう！ | A: Được đấy. Đi ngay thôi nào!"
  },
  13: {
    id: 13,
    title: "Tiếng Hàn: Tự giới thiệu bản thân | Korean Intro",
    description: "Học các câu nói tiếng Hàn cơ bản để giới thiệu tên, tuổi và nghề nghiệp.",
    language: "ko",
    category: "Korean",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "A: 안녕하세요! 처음 뵙겠습니다. | A: Xin chào! Rất vui được gặp bạn lần đầu.\nB: 안녕하세요! 저는 민우라고 합니다. 이름이 어떻게 되세요? | B: Xin chào! Tôi tên là Min-woo. Tên bạn là gì?\nA: 제 이름은 지수입니다. 베트남에서 왔습니다. | A: Tên tôi là Ji-soo. Tôi đến từ Việt Nam.\nB: 지수 씨, 반가워요. 한국어 공부는 언제 시작했어요? | B: Rất vui được gặp Ji-soo. Bạn bắt đầu học tiếng Hàn từ khi nào?\nA: 세 달 전에 시작했습니다. 아직 많이 서툴러요. | A: Tôi đã bắt đầu từ 3 tháng trước. Tôi vẫn còn kém lắm."
  },
  14: {
    id: 14,
    title: "Tiếng Hàn: Mua sắm ở chợ Dongdaemun | Shopping",
    description: "Hội thoại mặc cả và hỏi giá khi đi mua sắm quần áo tại Hàn Quốc.",
    language: "ko",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Customer: 이 청바지는 얼마예요? 한번 입어볼 수 있어요? | Khách: Chiếc quần jean này giá bao nhiêu? Tôi mặc thử được không?\nShopkeeper: 오만 원이에요. 피팅룸은 저쪽에 있습니다. | Chủ tiệm: Giá 50,000 Won. Phòng thử đồ ở đằng kia nhé.\nCustomer: 조금 입어봤는데 바지가 너무 큽니다. | Khách: Tôi mặc thử rồi nhưng quần bị rộng quá.\nShopkeeper: 그럼 더 작은 사이즈로 보여드릴게요. 잠시만요. | Chủ tiệm: Vậy tôi sẽ lấy size nhỏ hơn cho bạn xem. Đợi chút nhé.\nCustomer: 고맙습니다. 디자인이 마음에 드네요. | Khách: Cảm ơn. Tôi rất ưng ý kiểu dáng này."
  },
  15: {
    id: 15,
    title: "Tiếng Trung: Trả giá khi mua sắm | Bargaining",
    description: "Các câu nói tiếng Trung thường dùng để mặc cả giảm giá khi mua quà lưu niệm.",
    language: "zh",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Customer: 老板，这个茶壶多少钱？ | Khách: Ông chủ, cái ấm trà này bao nhiêu tiền?\nShopkeeper: 一百块钱，这是纯手工做的。 | Chủ tiệm: 100 Tệ, đây là đồ làm thủ công hoàn toàn đấy.\nCustomer: 太贵了，便宜点儿吧，八十块可以吗？ | Khách: Đắt quá, rẻ chút đi, 80 Tệ được không?\nShopkeeper: 最少九十块，不能再便宜了。 | Chủ tiệm: Thấp nhất là 90 Tệ, không thể rẻ hơn nữa đâu.\nCustomer: 行，那就九十块吧，帮我包装一下。 | Khách: Được rồi, vậy 90 Tệ đi, gói giúp tôi nhé."
  },
  16: {
    id: 16,
    title: "Tiếng Trung: Hỏi thăm gia đình | Family Talk",
    description: "Chủ đề hỏi thăm số lượng thành viên và công việc của mọi người trong nhà.",
    language: "zh",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "A: 你家有几口人？他们都做什么工作？ | A: Nhà bạn có mấy người? Họ làm công việc gì?\nB: 我家有四口人：爸爸、妈妈、妹妹和我。 | B: Nhà tôi có 4 người: Bố, mẹ, em gái và tôi.\nA: 你妹妹是学生吗？她今年多大？ | A: Em gái bạn là học sinh à? Năm nay cô ấy bao nhiêu tuổi?\nB: 对，她是大学生，今年二十岁了。 | B: Đúng thế, em ấy là sinh viên đại học, năm nay 20 tuổi rồi.\nA: 你父母都退休了吗？ | A: Bố mẹ bạn đã nghỉ hưu chưa?\nB: 爸爸退休了，妈妈还在教书。 | B: Bố tôi nghỉ hưu rồi, mẹ tôi vẫn đang dạy học."
  },
  17: {
    id: 17,
    title: "Tiếng Trung: Ký kết hợp đồng thương mại | Business",
    description: "Thoại thương mại cấp cao đàm phán ký kết hợp đồng giữa hai đối tác.",
    language: "zh",
    category: "Business",
    difficulty: "Advanced",
    repeat_default: 2,
    content: "A: 贵公司对合同草案还有什么修改意见吗？ | A: Quý công ty còn ý kiến sửa đổi nào đối với dự thảo hợp đồng không?\nB: 基本没有了，我们对付款方式非常满意。 | B: Cơ bản là không còn nữa, chúng tôi rất hài lòng về phương thức thanh toán.\nA: 那太好了。预祝我们的项目取得圆满成功！ | A: Vành thế tốt quá. Chúc dự án của chúng ta thành công viên mãn!\nB: 合作愉快！我们 today 就正式签字吧। | B: Hợp tác vui vẻ! Chiều nay chúng ta tiến hành ký kết chính thức nhé.\nA: 好的，我下午三点准时到您办公室。 | A: Vâng, tôi sẽ đến văn phòng của ông đúng 3 giờ chiều."
  },
  18: {
    id: 18,
    title: "Mẹ và bé: Tại sân bay nước ngoài | At the Airport",
    description: "Mẹ hướng dẫn bé và thực hiện các thủ tục check-in tại sân bay khi chuẩn bị đi nước ngoài.",
    language: "en",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Mother: Keep your passport in your bag, do not lose it. | Mẹ: Giữ hộ chiếu của con trong túi nhé, đừng làm mất đấy.\nBaby: Where are we going now, mommy? | Con: Bây giờ chúng ta đang đi đâu thế mẹ?\nMother: We are going to the check-in counter to drop our bags. | Mẹ: Chúng ta đang đi đến quầy làm thủ tục để gửi hành lý.\nStaff: Hello, passport and tickets, please. | Nhân viên: Xin chào, vui lòng cho tôi mượn hộ chiếu và vé máy bay.\nMother: Here they are. We have one stroller to check in. | Mẹ: Đây ạ. Chúng tôi có một chiếc xe đẩy em bé cần ký gửi.\nStaff: Sure. Please place your luggage on the scale. | Nhân viên: Chắc chắn rồi. Vui lòng đặt hành lý của bạn lên cân.\nBaby: Look! The plane is so big outside the window! | Con: Nhìn kìa! Chiếc máy bay ngoài cửa sổ to quá mẹ ơi!\nMother: Yes it is! We will board the plane very soon. | Mẹ: Đúng vậy! Chúng ta sẽ lên máy bay sớm thôi."
  },
  19: {
    id: 19,
    title: "Mẹ và bé: Trên chuyến bay | On the Airplane",
    description: "Mẹ giao tiếp với tiếp viên hàng không để xin nước ấm pha sữa và chăn đắp cho bé.",
    language: "en",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Mother: Excuse me, could I get some warm water for baby milk? | Mẹ: Xin lỗi, tôi có thể xin một ít nước ấm để pha sữa cho bé không?\nFlight Attendant: Yes, of course. I will bring it right away. | Tiếp viên: Vâng, tất nhiên rồi. Tôi sẽ mang đến ngay lập tức.\nBaby: Mommy, my ears hurt a little bit. | Con: Mẹ ơi, tai con hơi bị đau một chút.\nMother: Drink some water or chew this gummy, it will help. | Mẹ: Uống chút nước hoặc nhai viên kẹo dẻo này nhé, nó sẽ giúp đỡ đau đấy.\nFlight Attendant: Here is your warm water. Do you need a blanket? | Tiếp viên: Nước ấm của chị đây ạ. Chị có cần chăn đắp không?\nMother: Yes, please. A small blanket for my child would be great. | Mẹ: Vâng, làm ơn. Có một chiếc chăn nhỏ cho con tôi thì tốt quá.\nBaby: Thank you, nice lady! | Con: Con cảm ơn cô xinh đẹp!"
  },
  20: {
    id: 20,
    title: "Mẹ học tiếng Nhật: Mua sữa và tã ở siêu thị | Buying Baby Milk and Diapers",
    description: "Mẫu hội thoại tiếng Nhật cho mẹ hỏi nhân viên siêu thị để tìm mua sữa công thức và tã giấy cho bé.",
    language: "ja",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Mother: すみません、赤ちゃん用の粉ミルクはどこですか？ | Mẹ: Xin lỗi, sữa bột công thức cho bé ở đâu vậy ạ?\nStaff: あちらのベビー用品コーナーにございます。ご案内します。 | Nhân viên: Ở góc đồ dùng cho bé đằng kia ạ. Tôi sẽ dẫn đường cho chị.\nMother: ありがとうございます。あと、テープタイプのオムツのLサイズはありますか？ | Mẹ: Cảm ơn bạn. Ngoài ra, tã dán size L còn hàng không ạ?\nStaff: はい、パンパースのLサイズなら棚の二段目にございます。 | Nhân viên: Vâng, tã giấy Pampers size L nằm ở ngăn thứ hai của kệ ạ.\nMother: よかった。赤ちゃんの肌に優しいタイプですね。 | Mẹ: May quá. Đây là loại dịu nhẹ cho da em bé đúng không?\nStaff: はい、オーガニックコットン使用で人気の商品です。 | Nhân viên: Vâng, đây là sản phẩm rất được ưa chuộng sử dụng bông hữu cơ ạ."
  },
  21: {
    id: 21,
    title: "Mẹ học tiếng Hàn: Đăng ký khám bệnh cho bé | At the Pediatric Clinic",
    description: "Hội thoại tại phòng khám nhi ở Hàn Quốc khi mẹ khai báo các triệu chứng ho sốt của bé.",
    language: "ko",
    category: "Korean",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Staff: 아기 이름과 생년월일을 적어주세요. 어디가 아픈가요? | Nhân viên: Vui lòng viết tên và ngày sinh của bé. Bé bị đau ở đâu ạ?\nMother: 어제 밤부터 열이 나고 기침을 많이 해요. | Mẹ: Bé bị sốt và ho nhiều từ tối hôm qua ạ.\nStaff: 체온을 먼저 측정하겠습니다. 38.5도네요. | Nhân viên: Tôi sẽ đo nhiệt độ cơ thể trước. Là 38.5 độ ạ.\nDoctor: 목이 조금 부었네요. 감기 기운이 있습니다. | Bác sĩ: Họng của bé hơi sưng một chút. Có dấu hiệu bị cảm lạnh.\nMother: 약은 하루에 몇 번 먹여야 하나요? | Mẹ: Thuốc này phải cho bé uống một ngày mấy lần ạ?\nDoctor: 아침, 점심, 저녁 하루 세 번, 식후 30분에 먹ι세요. | Bác sĩ: Hãy cho uống ngày 3 lần sáng, trưa, tối, sau khi ăn 30 phút nhé."
  },
  22: {
    id: 22,
    title: "Mẹ học tiếng Trung: Tìm trường mẫu giáo cho bé | Kindergarten Inquiry",
    description: "Mẹ hỏi thăm thông tin đăng ký nhập học và các chế độ ăn uống cho con tại trường mầm non.",
    language: "zh",
    category: "Daily Conversation",
    difficulty: "Advanced",
    repeat_default: 2,
    content: "Mother: 您好，我想咨询一下三岁孩子的入学申请程序。 | Mẹ: Xin chào, tôi muốn tư vấn về thủ tục nhập học cho trẻ ba tuổi.\nTeacher: 您好！您需要填写申请表，并提供孩子的疫苗接种证明。 | Cô giáo: Chào chị! Chị cần điền vào đơn đăng ký và cung cấp giấy chứng nhận tiêm chủng của bé.\nMother: 这里的班级一般有多少个学生？有几位老师？ | Mẹ: Lớp học ở đây thường có bao nhiêu học sinh? Có mấy giáo viên ạ?\nTeacher: 每个班最多十五个孩子，配备两位老师和一位保育员。 | Cô giáo: Mỗi lớp tối đa mười lăm bé, được trang bị hai giáo viên và một bảo mẫu.\nMother: 孩子的午餐是怎么安排 của con？菜单会每周更新吗？ | Mẹ: Bữa trưa của các bé được sắp xếp thế nào? Thực đơn có cập nhật hàng tuần không?\nTeacher: 是营养配餐，菜单每周五会在家长群公布。 | Cô giáo: Đó là suất ăn dinh dưỡng, thực đơn sẽ được công bố trong nhóm phụ huynh vào mỗi thứ Sáu."
  },
  23: {
    id: 23,
    title: "Mẹ và bé: Làm quen hàng xóm mới | Meeting New Neighbors",
    description: "Mẹ hướng dẫn bé chào hỏi và giao tiếp xã giao với người hàng xóm nước ngoài thân thiện.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Normal",
    repeat_default: 2,
    content: "Neighbor: Hello there! Welcome to the neighborhood. | Hàng xóm: Xin chào! Chào mừng gia đình bạn đến với khu phố này.\nMother: Thank you so much. We just moved here last weekend. | Mẹ: Cảm ơn bạn rất nhiều. Chúng tôi vừa mới chuyển đến đây cuối tuần trước.\nNeighbor: What a lovely child. What is your name, little one? | Hàng xóm: Đứa trẻ đáng yêu quá. Tên con là gì thế bé cưng?\nBaby: My name is Liam. I am four years old. | Con: Tên con là Liam. Con bốn tuổi rồi ạ.\nNeighbor: Nice to meet you, Liam! I have a son who is also four. | Hàng xóm: Rất vui được gặp con, Liam! Cô có một đứa con trai cũng đóng vai trò bốn tuổi đấy.\nMother: That is wonderful. Maybe they can play together at the park. | Mẹ: Tuyệt vời quá. Có lẽ chúng có thể chơi cùng nhau ở công viên.\nBaby: Can we play toys together, mommy? | Con: Chúng con có thể chơi đồ chơi cùng nhau không mẹ?\nMother: Yes, sweetie. We will invite them over soon. | Mẹ: Được chứ con yêu. Chúng ta sẽ sớm mời họ sang chơi nhé."
  }
};

const getLanguageLabel = (code: string) => {
  switch (code.toLowerCase()) {
    case 'en': return 'Tiếng Anh';
    case 'vi': return 'Tiếng Việt';
    case 'ja': return 'Tiếng Nhật';
    case 'ko': return 'Tiếng Hàn';
    case 'zh': return 'Tiếng Trung';
    default: return 'Khác';
  }
};

function PracticeArenaContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const lessonIdParam = searchParams.get('lesson_id');
  const modeParam = searchParams.get('mode');

  // Cấu hình Shadowing
  const [language, setLanguage] = useState('en');
  const [voiceName, setVoiceName] = useState('');
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [repeatLimit, setRepeatLimit] = useState(3);
  const [pauseMode, setPauseMode] = useState<PauseMode>('auto');
  const [pausePreset, setPausePreset] = useState<PausePreset>('normal');
  const [manualPauseSeconds, setManualPauseSeconds] = useState(3);

  // Giao diện
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [lessonInfo, setLessonInfo] = useState<Lesson | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hook quản lý TTS & State Machine
  const {
    sentences,
    currentIndex,
    currentLoop,
    playerState,
    voices,
    countdown,
    totalPauseDuration,
    start,
    pause,
    resume,
    stop,
    next,
    prev,
    repeatCurrent,
    jumpTo
  } = useSpeechSynthesis({
    language,
    voiceName,
    playbackSpeed,
    repeatLimit,
    pauseMode,
    pausePreset,
    manualPauseSeconds
  }, async (stats) => {
    // Khi hoàn thành bài học, gửi log lên API
    try {
      const lesson_id = lessonIdParam ? parseInt(lessonIdParam) : null;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      await fetch(`${apiUrl}/api/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lesson_id,
          language,
          sentences_count: stats.sentencesCount,
          loops_count: stats.loopsCount,
          duration_seconds: stats.durationSeconds
        })
      });
      showToast("Ghi nhận phiên luyện tập thành công!");
    } catch (e) {
      console.log("Không thể lưu lịch sử luyện tập lên backend.");
      showToast("Hoàn thành! (Offline Mode - Chưa lưu lịch sử)");
    }
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Tải dữ liệu bài học (từ API hoặc Fallback hoặc LocalStorage)
  useEffect(() => {
    const loadData = async () => {
      if (modeParam === 'custom') {
        const storedText = localStorage.getItem('shadowflow_custom_text');
        const textToUse = storedText || "Building trust through every\nStrong solutions for construction\nCustom steel formwork delivered\nDesigned precisely for projects";
        
        const lines = textToUse.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        
        setLessonInfo({
          id: 0,
          title: "Văn bản tự nhập",
          description: "Luyện tập theo văn bản do bạn tự soạn thảo.",
          language: "en",
          category: "Custom",
          difficulty: "Normal",
          repeat_default: 3,
          content: textToUse
        });
        
        // Tự động nhận diện ngôn ngữ cơ bản (Mặc định English)
        setLanguage('en');
        start(lines);
      } else if (lessonIdParam) {
        const id = parseInt(lessonIdParam);
        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
          const res = await fetch(`${apiUrl}/api/lessons/${id}`);
          if (res.ok) {
            const data = await res.json();
            setLessonInfo(data);
            setLanguage(data.language);
            setRepeatLimit(data.repeat_default);
            
            const lines = data.content.split('\n').map((s: string) => s.trim()).filter((s: string) => s.length > 0);
            start(lines);
            
            // Lưu bài học gần nhất để tiếp tục học sau
            localStorage.setItem('shadowflow_last_lesson_id', id.toString());
          } else {
            throw new Error();
          }
        } catch (e) {
          // Fallback nếu không có mạng
          const fallback = FALLBACK_LESSONS[id] || FALLBACK_LESSONS[1];
          setLessonInfo(fallback);
          setLanguage(fallback.language);
          setRepeatLimit(fallback.repeat_default);
          const lines = fallback.content.split('\n').map(s => s.trim()).filter(s => s.length > 0);
          start(lines);
          showToast("Sử dụng bài học dự phòng (Offline Mode)");
        }
      } else {
        // Mặc định nạp câu trống hoặc hướng dẫn nếu truy cập trực tiếp
        const welcomeText = "Chào mừng bạn đến với ShadowFlow!\nHãy nhấp vào Danh sách bài học để chọn chủ đề.\nHoặc dán văn bản của bạn ở trang chủ.\nChúc bạn luyện nói tự nhiên và trôi chảy!";
        setLessonInfo({
          id: 0,
          title: "Hướng dẫn cơ bản",
          description: "Luyện tập thử các câu cơ bản.",
          language: "vi",
          category: "Tutorial",
          difficulty: "Beginner",
          repeat_default: 1,
          content: welcomeText
        });
        setLanguage('vi');
        const lines = welcomeText.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        start(lines);
      }
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonIdParam, modeParam]);

  // Phím tắt Keyboard (Phím cách: Play/Pause, Mũi tên trái/phải: câu trước/sau, R: Đọc lại câu hiện tại)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bỏ qua nếu đang gõ chữ trong input/textarea
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        if (playerState === 'PLAYING_AUDIO' || playerState === 'WAITING_SHADOW') {
          pause();
        } else if (playerState === 'PAUSED_AUDIO' || playerState === 'PAUSED_SHADOW') {
          resume();
        } else if (playerState === 'IDLE' || playerState === 'COMPLETED') {
          const lines = lessonInfo?.content.split('\n').map(s => s.trim()).filter(s => s.length > 0) || [];
          start(lines);
        }
      } else if (e.code === 'ArrowRight') {
        next();
      } else if (e.code === 'ArrowLeft') {
        prev();
      } else if (e.key.toLowerCase() === 'r') {
        repeatCurrent();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playerState, lessonInfo, pause, resume, start, next, prev, repeatCurrent]);

  // Bộ lọc danh sách giọng đọc theo ngôn ngữ chọn
  const filteredVoices = voices.filter(voice => {
    if (language === 'Auto Detect' || language === 'Other') return true;
    // So khớp mã ngôn ngữ (ví dụ 'en-US' khớp với 'en')
    return voice.lang.toLowerCase().startsWith(language.toLowerCase()) ||
           language.toLowerCase().startsWith(voice.lang.toLowerCase());
  });

  // Tăng/giảm tốc độ nhanh qua vòng lặp [0.7, 0.8, 1.0, 1.2, 1.5]
  const cycleSpeed = () => {
    const speeds = [0.7, 0.8, 1.0, 1.2, 1.5];
    const currentIndexSpeed = speeds.indexOf(playbackSpeed);
    const nextIndexSpeed = currentIndexSpeed !== -1 ? (currentIndexSpeed + 1) % speeds.length : 2;
    const newSpeed = speeds[nextIndexSpeed];
    setPlaybackSpeed(newSpeed);
    
    // Nếu đang phát âm, lập tức đọc lại câu với tốc độ mới
    if (playerState === 'PLAYING_AUDIO' || playerState === 'WAITING_SHADOW' || playerState === 'PAUSED_AUDIO') {
      setTimeout(() => {
        repeatCurrent();
      }, 50);
    }
  };

  // Tự động gán giọng mặc định khi thay đổi ngôn ngữ lọc
  useEffect(() => {
    if (filteredVoices.length > 0) {
      // Tìm giọng đọc tiếng Việt nếu là tiếng Việt, hoặc giọng mặc định hệ thống
      const defaultVoice = filteredVoices.find(v => v.default) || filteredVoices[0];
      setVoiceName(defaultVoice.name);
    } else {
      setVoiceName('');
    }
  }, [language, voices]); // eslint-disable-line react-hooks/exhaustive-deps

  // Render thanh đếm ngược trong thời gian nghỉ
  const renderCountdownTracker = () => {
    if (playerState !== 'WAITING_SHADOW' && playerState !== 'PAUSED_SHADOW') return null;

    const percent = totalPauseDuration > 0 ? (countdown / totalPauseDuration) * 100 : 0;

    return (
      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-red-500 font-bold dark:text-red-400 flex items-center gap-1.5 animate-pulse">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span> Đọc theo ngay...
        </span>
        {/* Thanh đếm ngược dạng ngang (Dễ nhìn trên mobile) */}
        <div className="w-64 sm:w-80 h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-amber-500 transition-all duration-100 ease-linear shadow-lg"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{countdown.toFixed(1)}s / {totalPauseDuration.toFixed(1)}s</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Main Arena Content */}
      <div className="flex-grow flex relative overflow-hidden h-[calc(100vh-4rem)]">
        
        {/* Toast thông báo */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl bg-slate-900/90 text-white px-5 py-3 text-sm font-semibold shadow-xl border border-slate-700/50 backdrop-blur-md flex items-center gap-2"
            >
              <CheckCircle2 size={16} className="text-green-400" /> {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. LEFT PANEL: DANH SÁCH CÂU (Desktop: Sidebar, Mobile: Drawer) */}
        <div className="hidden lg:block w-80 border-r border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/40 p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <List size={18} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-slate-900 dark:text-white">Danh sách câu nói ({sentences.length})</h3>
          </div>
          <div className="space-y-2">
            {sentences.map((sentence, idx) => (
              <button
                key={idx}
                onClick={() => jumpTo(idx)}
                className={`w-full text-left p-3.5 rounded-2xl text-sm transition-all duration-200 border ${
                  idx === currentIndex
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-900/50 dark:text-indigo-300 font-semibold'
                    : idx < currentIndex
                    ? 'bg-slate-50/50 border-transparent text-slate-400 dark:bg-slate-900/20 dark:text-slate-600 line-through'
                    : 'bg-white border-slate-100 hover:border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex gap-2.5">
                  <span className={`text-xs font-mono flex h-5 w-5 items-center justify-center rounded-lg border ${
                    idx === currentIndex
                      ? 'border-indigo-300 text-indigo-600 bg-indigo-100/50 dark:border-indigo-800 dark:text-indigo-400 dark:bg-indigo-900/20'
                      : 'border-slate-200 text-slate-400 dark:border-slate-800 dark:text-slate-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="flex-1 line-clamp-2">
                    {sentence.includes('|') ? sentence.split('|')[0].trim() : sentence}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* LEFT DRAWER (Mobile) */}
        <AnimatePresence>
          {isLeftDrawerOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsLeftDrawerOpen(false)}
                className="lg:hidden absolute inset-0 z-40 bg-slate-950"
              />
              {/* Content sheet */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="lg:hidden absolute left-0 top-0 bottom-0 z-50 w-72 bg-white dark:bg-slate-900 p-6 overflow-y-auto border-r border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <List size={18} className="text-indigo-600 dark:text-indigo-400" />
                    <h3 className="font-bold text-slate-900 dark:text-white">Danh sách câu</h3>
                  </div>
                  <button 
                    onClick={() => setIsLeftDrawerOpen(false)}
                    className="text-xs text-indigo-600 dark:text-indigo-400 font-bold"
                  >
                    Đóng
                  </button>
                </div>
                <div className="space-y-2">
                  {sentences.map((sentence, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        jumpTo(idx);
                        setIsLeftDrawerOpen(false);
                      }}
                      className={`w-full text-left p-3.5 rounded-2xl text-sm transition-all duration-200 border ${
                        idx === currentIndex
                          ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-900/50 dark:text-indigo-300 font-semibold shadow-sm'
                          : idx < currentIndex
                          ? 'bg-slate-50/50 border-transparent text-slate-400 dark:bg-slate-900/20 dark:text-slate-600 line-through'
                          : 'bg-white border-slate-100 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex gap-2.5">
                        <span className="text-xs font-mono flex h-5 w-5 items-center justify-center rounded-lg border border-slate-200 text-slate-400 dark:border-slate-800 dark:text-slate-600">
                          {idx + 1}
                        </span>
                        <span className="flex-1">
                          {sentence.includes('|') ? sentence.split('|')[0].trim() : sentence}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>


        {/* 2. CENTER PANEL: FOCUS ARENA (Câu hiện tại, Trạng thái & Countdown) */}
        <div className="flex-grow flex flex-col justify-between p-6 sm:p-8 lg:p-12 relative">
          
          {/* Top Panel Actions (Mobile toggle list and settings) */}
          <div className="flex items-center justify-between w-full lg:hidden mb-6">
            <button
              onClick={() => setIsLeftDrawerOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 shadow-sm"
            >
              <List size={14} /> Danh sách câu
            </button>

            <button
              onClick={() => setIsRightDrawerOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 shadow-sm"
            >
              <Settings size={14} /> Cài đặt
            </button>
          </div>

          {/* Practice Meta (Tiêu đề, Vòng lặp, Số câu) */}
          <div className="w-full text-center lg:text-left mb-6">
            <span className="inline-block rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 px-3.5 py-1.5 text-xs font-semibold mb-2">
              {lessonInfo?.title || "Tự luyện tập"}
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
              <span className="flex items-center gap-1.5">
                <Languages size={13} /> {getLanguageLabel(language)}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                Câu: {sentences.length > 0 ? currentIndex + 1 : 0} / {sentences.length}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                Vòng lặp: {currentLoop} / {repeatLimit}
              </span>
            </div>
            
            {/* Thanh tiến trình Realtime */}
            <div className="w-full h-1 bg-slate-100 dark:bg-slate-900 mt-4 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"
                style={{ width: `${sentences.length > 0 ? ((currentIndex + 1) / sentences.length) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Focus Board Center (Hiển thị chữ) */}
          <div className="flex-1 flex flex-col items-center justify-center py-8">
            <div className="max-w-3xl w-full text-center select-none px-4">
              <AnimatePresence mode="wait">
                {playerState === 'COMPLETED' ? (
                  <motion.div
                    key="completed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center p-8 rounded-3xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40"
                  >
                    <div className="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-inner">
                      <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">Hoàn thành Shadowing!</h2>
                    <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
                      Bạn đã hoàn thành xuất sắc {sentences.length} câu nói qua {repeatLimit} vòng lặp.
                    </p>
                    <button
                      onClick={() => {
                        const lines = lessonInfo?.content.split('\n').map(s => s.trim()).filter(s => s.length > 0) || [];
                        start(lines);
                      }}
                      className="mt-6 flex items-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-95 shadow-md shadow-indigo-500/10"
                    >
                      <RotateCcw size={14} /> Luyện lại bài này
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Câu đang phát âm */}
                    <div className="space-y-3">
                      <p className={`font-bold tracking-tight transition-all duration-300 ${
                        playerState === 'PLAYING_AUDIO' 
                          ? 'text-indigo-600 dark:text-indigo-400 text-2xl sm:text-4xl md:text-5xl leading-tight'
                          : playerState === 'WAITING_SHADOW' || playerState === 'PAUSED_SHADOW'
                          ? 'text-red-500 dark:text-red-400 text-2xl sm:text-4xl md:text-5xl leading-tight'
                          : 'text-slate-800 dark:text-slate-100 text-xl sm:text-3xl md:text-4xl leading-tight'
                      }`}>
                        {sentences[currentIndex]?.includes('|') 
                          ? sentences[currentIndex].split('|')[0].trim() 
                          : sentences[currentIndex] || "Đang chuẩn bị âm thanh..."}
                      </p>
                      
                      {sentences[currentIndex]?.includes('|') && (
                        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium">
                          {sentences[currentIndex].split('|')[1].trim()}
                        </p>
                      )}
                    </div>

                    {/* Câu tiếp theo gợi ý nhỏ phía dưới */}
                    {currentIndex + 1 < sentences.length && (
                      <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-600 italic mt-6">
                        Câu tiếp theo: {sentences[currentIndex + 1]?.includes('|') ? sentences[currentIndex + 1].split('|')[0].trim() : sentences[currentIndex + 1]}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hướng dẫn đếm ngược Shadowing */}
              {renderCountdownTracker()}
            </div>
          </div>

          {/* Bottom Player: Bảng điều khiển chính (Tập trung tối đa cho Touch trên di động) */}
          <div className="w-full glass-panel p-4 sm:p-5 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-start">
              {/* Nút Prev */}
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Câu trước (Mũi tên trái)"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Nút Repeat Current */}
              <button
                onClick={repeatCurrent}
                disabled={playerState === 'IDLE' || playerState === 'COMPLETED'}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Đọc lại câu này (Phím R)"
              >
                <RotateCcw size={16} />
              </button>

              {/* Nút chỉnh tốc độ nhanh */}
              <button
                onClick={cycleSpeed}
                className="flex h-12 px-3.5 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xs font-extrabold text-indigo-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-indigo-400 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Nhấp để thay đổi tốc độ đọc nhanh"
              >
                {playbackSpeed}x
              </button>
            </div>

            {/* Cụm nút Play / Pause / Resume / Stop */}
            <div className="flex items-center gap-3">
              {playerState === 'PLAYING_AUDIO' || playerState === 'WAITING_SHADOW' ? (
                <button
                  onClick={pause}
                  className="flex h-14 w-28 sm:w-36 items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-md shadow-indigo-500/10 transition-all duration-200 active:scale-95"
                >
                  <Pause size={18} fill="currentColor" /> Tạm dừng
                </button>
              ) : playerState === 'PAUSED_AUDIO' || playerState === 'PAUSED_SHADOW' ? (
                <button
                  onClick={resume}
                  className="flex h-14 w-28 sm:w-36 items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-md shadow-indigo-500/10 transition-all duration-200 active:scale-95"
                >
                  <Play size={18} fill="currentColor" /> Tiếp tục
                </button>
              ) : (
                <button
                  onClick={() => {
                    const lines = lessonInfo?.content.split('\n').map(s => s.trim()).filter(s => s.length > 0) || [];
                    start(lines);
                  }}
                  className="flex h-14 w-28 sm:w-36 items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-md shadow-indigo-500/10 transition-all duration-200 active:scale-95"
                >
                  <Play size={18} fill="currentColor" /> Bắt đầu
                </button>
              )}

              <button
                onClick={stop}
                disabled={playerState === 'IDLE'}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Dừng hẳn"
              >
                <span className="h-4 w-4 bg-slate-900 dark:bg-slate-100 rounded-sm" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-end">
              {/* Phím tắt hiển thị trợ giúp */}
              <div className="hidden sm:flex items-center gap-1 text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 px-2 py-1 rounded-lg">
                <Clock size={10} /> Keyboard Shortcuts: Space, R, Arrow Keys
              </div>

              {/* Nút Next */}
              <button
                onClick={next}
                disabled={currentIndex === sentences.length - 1}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Câu tiếp (Mũi tên phải)"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 3. RIGHT PANEL: CÀI ĐẶT SHADOWING (Desktop: Sidebar, Mobile: Drawer) */}
        <div className="hidden lg:block w-80 border-l border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/40 p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <Settings size={18} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-slate-900 dark:text-white">Cấu hình Shadowing</h3>
          </div>

          <div className="space-y-6">
            {/* Lọc ngôn ngữ */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Ngôn ngữ nguồn</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                <option value="en">English (Tiếng Anh)</option>
                <option value="vi">Vietnamese (Tiếng Việt)</option>
                <option value="ja">Japanese (Tiếng Nhật)</option>
                <option value="zh">Chinese (Tiếng Trung)</option>
                <option value="ko">Korean (Tiếng Hàn)</option>
                <option value="Auto Detect">Tự phát hiện (Auto)</option>
              </select>
            </div>

            {/* Chọn giọng AI */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Giọng đọc đề xuất</label>
              <select
                value={voiceName}
                onChange={(e) => setVoiceName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                disabled={filteredVoices.length === 0}
              >
                {filteredVoices.length === 0 ? (
                  <option value="">Không tìm thấy giọng thích hợp</option>
                ) : (
                  filteredVoices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))
                )}
              </select>
              {filteredVoices.length === 0 && (
                <div className="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40 text-[10px] text-amber-700 dark:text-amber-400 font-semibold leading-relaxed">
                  ⚠️ Không tìm thấy giọng đọc {getLanguageLabel(language)} cài sẵn trên thiết bị. Trình duyệt sẽ tự động gọi giọng đọc trực tuyến của hệ thống. Khuyên dùng Chrome/Edge hoặc cài thêm giọng nói trong Windows Settings (Time & Language &gt; Speech).
                </div>
              )}
              <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                <Info size={10} /> Giọng đọc lấy từ hệ thống máy tính của bạn.
              </p>
            </div>

            {/* Tốc độ phát Speed */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide dark:text-slate-400">Tốc độ phát âm</label>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-lg">{playbackSpeed}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 dark:accent-indigo-400"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0.5x (Chậm)</span>
                <span>1.0x (Chuẩn)</span>
                <span>2.0x (Nhanh)</span>
              </div>
            </div>

            {/* Lặp lại */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Số vòng lặp (Repeat)</label>
              <input
                type="number"
                min="1"
                max="99"
                value={repeatLimit}
                onChange={(e) => setRepeatLimit(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              />
            </div>

            {/* Chế độ tạm dừng */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Chế độ tạm dừng (Pause Mode)</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
                <button
                  onClick={() => setPauseMode('auto')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    pauseMode === 'auto'
                      ? 'bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  Tự động (Auto)
                </button>
                <button
                  onClick={() => setPauseMode('manual')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    pauseMode === 'manual'
                      ? 'bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  Thủ công (Manual)
                </button>
              </div>
            </div>

            {/* Chi tiết cho Tự động */}
            {pauseMode === 'auto' ? (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Preset thời gian nghỉ</label>
                <select
                  value={pausePreset}
                  onChange={(e) => setPausePreset(e.target.value as PausePreset)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                >
                  <option value="beginner">Beginner (Học viên - Hệ số 0.8)</option>
                  <option value="normal">Normal (Bình thường - Hệ số 0.5)</option>
                  <option value="advanced">Advanced (Nâng cao - Hệ số 0.35)</option>
                </select>
                <p className="text-[10px] text-slate-400 mt-2">
                  * Hệ số nhân với số từ. Giới hạn tự động tối thiểu 2 giây và tối đa 8 giây mỗi câu.
                </p>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Thời gian nghỉ mỗi câu (giây)</label>
                <input
                  type="number"
                  min="2"
                  max="30"
                  value={manualPauseSeconds}
                  onChange={(e) => setManualPauseSeconds(Math.max(2, Math.min(30, parseInt(e.target.value) || 2)))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                />
              </div>
            )}
          </div>
        </div>

        {/* RIGHT DRAWER (Mobile) */}
        <AnimatePresence>
          {isRightDrawerOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsRightDrawerOpen(false)}
                className="lg:hidden absolute inset-0 z-40 bg-slate-950"
              />
              {/* Content sheet */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="lg:hidden absolute right-0 top-0 bottom-0 z-50 w-72 bg-white dark:bg-slate-900 p-6 overflow-y-auto border-l border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Settings size={18} className="text-indigo-600 dark:text-indigo-400" />
                    <h3 className="font-bold text-slate-900 dark:text-white">Cài đặt</h3>
                  </div>
                  <button 
                    onClick={() => setIsRightDrawerOpen(false)}
                    className="text-xs text-indigo-600 dark:text-indigo-400 font-bold"
                  >
                    Đóng
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Lọc ngôn ngữ */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Ngôn ngữ</label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="en">English (Tiếng Anh)</option>
                      <option value="vi">Vietnamese (Tiếng Việt)</option>
                      <option value="ja">Japanese (Tiếng Nhật)</option>
                      <option value="zh">Chinese (Tiếng Trung)</option>
                      <option value="ko">Korean (Tiếng Hàn)</option>
                      <option value="Auto Detect">Tự phát hiện (Auto)</option>
                    </select>
                  </div>

                  {/* Chọn giọng AI */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Giọng đọc</label>
                    <select
                      value={voiceName}
                      onChange={(e) => setVoiceName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      disabled={filteredVoices.length === 0}
                    >
                      {filteredVoices.length === 0 ? (
                        <option value="">Không tìm thấy giọng phù hợp</option>
                      ) : (
                        filteredVoices.map((voice) => (
                          <option key={voice.name} value={voice.name}>
                            {voice.name}
                          </option>
                        ))
                      )}
                    </select>
                    {filteredVoices.length === 0 && (
                      <div className="mt-2 p-2 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40 text-[10px] text-amber-700 dark:text-amber-400 font-semibold leading-relaxed">
                        ⚠️ Không tìm thấy giọng đọc {getLanguageLabel(language)} trên máy. Trình duyệt sẽ cố gắng tự phát âm bằng giọng trực tuyến.
                      </div>
                    )}
                  </div>

                  {/* Tốc độ phát Speed */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide dark:text-slate-400">Tốc độ phát âm</label>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{playbackSpeed}x</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="2.0"
                      step="0.1"
                      value={playbackSpeed}
                      onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                      className="w-full accent-indigo-600 dark:accent-indigo-400"
                    />
                  </div>

                  {/* Lặp lại */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Lặp lại (lần)</label>
                    <input
                      type="number"
                      min="1"
                      max="99"
                      value={repeatLimit}
                      onChange={(e) => setRepeatLimit(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Chế độ tạm dừng */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Chế độ tạm dừng</label>
                    <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
                      <button
                        onClick={() => setPauseMode('auto')}
                        className={`py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                          pauseMode === 'auto'
                            ? 'bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-400 shadow-sm'
                            : 'text-slate-500'
                        }`}
                      >
                        Auto
                      </button>
                      <button
                        onClick={() => setPauseMode('manual')}
                        className={`py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                          pauseMode === 'manual'
                            ? 'bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-400 shadow-sm'
                            : 'text-slate-500'
                        }`}
                      >
                        Manual
                      </button>
                    </div>
                  </div>

                  {/* Chi tiết cho Tự động */}
                  {pauseMode === 'auto' ? (
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Preset nghỉ</label>
                      <select
                        value={pausePreset}
                        onChange={(e) => setPausePreset(e.target.value as PausePreset)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      >
                        <option value="beginner">Beginner (Hệ số 0.8)</option>
                        <option value="normal">Normal (Hệ số 0.5)</option>
                        <option value="advanced">Advanced (Hệ số 0.35)</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Giây nghỉ</label>
                      <input
                        type="number"
                        min="2"
                        max="30"
                        value={manualPauseSeconds}
                        onChange={(e) => setManualPauseSeconds(Math.max(2, Math.min(30, parseInt(e.target.value) || 2)))}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default function PracticeArena() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="h-10 w-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm text-slate-500">Đang tải phòng luyện tập...</p>
          </div>
        </div>
      </div>
    }>
      <PracticeArenaContent />
    </Suspense>
  );
}
