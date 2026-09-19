import { Question } from './types';
import { GradeLevel } from './components/GradeSelection';

// ------------------------------------------------------------------------------------
// BỘ CÂU HỎI WRITING THEO TỪNG LỚP (LỚP 1 ĐẾN LỚP 9)
// Mỗi bài tập gồm từ 8 đến 10 câu: Các câu đầu sắp xếp từ ngữ; câu cuối cùng viết đoạn văn có AI chấm chi tiết
// ------------------------------------------------------------------------------------

export const WRITING_QUESTIONS_BY_GRADE: Record<GradeLevel, Question[]> = {
  "1": [
    {
      "id": 1,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu giới thiệu tên cơ bản",
      "prompt": "Sắp xếp các từ để viết thành câu giới thiệu tên hoàn chỉnh: \"Nam / name / My / is / .\"",
      "options": [
        "My name is Nam.",
        "Name is my Nam.",
        "My is name Nam.",
        "Nam is name my."
      ],
      "correctAnswer": "My name is Nam.",
      "hintExplanation": "Cấu trúc viết câu giới thiệu tên chuẩn: \"My name is [Tên].\""
    },
    {
      "id": 2,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu giới thiệu đồ vật",
      "prompt": "Chọn câu viết đúng ngữ pháp miêu tả đồ vật: \"is / a / This / cat / .\"",
      "options": [
        "This is a cat.",
        "This a is cat.",
        "Is this a cat.",
        "A cat is this."
      ],
      "correctAnswer": "This is a cat.",
      "hintExplanation": "Cấu trúc câu khẳng định chỉ đồ vật ở gần: \"This is a/an + danh từ số ít.\""
    },
    {
      "id": 3,
      "topic": "writing_verb_tenses",
      "topicTitle": "Viết câu thể hiện sở thích đơn giản",
      "prompt": "Viết câu diễn tả \"Tôi thích táo\": \"I (like) ______ apples.\"",
      "options": [
        "I like apples.",
        "I likes apples.",
        "I am like apples.",
        "I liking apples."
      ],
      "correctAnswer": "I like apples.",
      "hintExplanation": "Với chủ ngữ \"I\", động từ \"like\" giữ nguyên thể trong câu khẳng định."
    },
    {
      "id": 4,
      "topic": "writing_verb_tenses",
      "topicTitle": "Viết câu chỉ màu sắc với To be",
      "prompt": "Chọn câu viết đúng để nói quả bóng màu đỏ: \"The ball ______ red.\"",
      "options": [
        "The ball is red.",
        "The ball are red.",
        "The ball am red.",
        "The ball be red."
      ],
      "correctAnswer": "The ball is red.",
      "hintExplanation": "Chủ ngữ số ít \"The ball\" đi với động từ to be \"is\"."
    },
    {
      "id": 5,
      "topic": "writing_prepositions",
      "topicTitle": "Viết câu chỉ số lượng đơn giản",
      "prompt": "Sắp xếp để viết câu: \"three / I / have / pencils / .\"",
      "options": [
        "I have three pencils.",
        "I three have pencils.",
        "Have I three pencils.",
        "Three pencils have I."
      ],
      "correctAnswer": "I have three pencils.",
      "hintExplanation": "Trật tự câu chuẩn: Chủ ngữ (I) + Động từ (have) + Số lượng (three) + Danh từ (pencils)."
    },
    {
      "id": 6,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu miêu tả màu sắc đồ vật",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"a / It / red / is / ball / .\"",
      "options": [
        "It is a red ball.",
        "A red ball is it.",
        "It a red is ball.",
        "Red ball is it a."
      ],
      "correctAnswer": "It is a red ball.",
      "hintExplanation": "Cấu trúc: \"It is a + tính từ màu sắc + danh từ.\""
    },
    {
      "id": 7,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu nhìn thấy con vật",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"see / a / I / cat / . /\"",
      "options": [
        "I see a cat.",
        "A cat I see.",
        "See I a cat.",
        "Cat a I see."
      ],
      "correctAnswer": "I see a cat.",
      "hintExplanation": "Cấu trúc: \"I see a + con vật.\""
    },
    {
      "id": 8,
      "isEssay": true,
      "topic": "writing_essay_paragraph",
      "topicTitle": "Viết đoạn văn Tiếng Anh Lớp 1",
      "prompt": "Đề bài văn Lớp 1: Viết đoạn văn tiếng Anh theo chủ đề ngẫu nhiên.",
      "options": [],
      "correctAnswer": "",
      "hintExplanation": "Luyện viết đoạn văn theo đúng quy định số câu của Lớp 1."
    }
  ],
  "2": [
    {
      "id": 1,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu miêu tả số lượng với There are",
      "prompt": "Sắp xếp các từ để viết thành câu đúng: \"two / are / There / books / on the table / .\"",
      "options": [
        "There are two books on the table.",
        "There is two books on the table.",
        "Two books are there on the table.",
        "On the table there are two books."
      ],
      "correctAnswer": "There are two books on the table.",
      "hintExplanation": "Cấu trúc chỉ sự tồn tại của số nhiều: \"There are + số lượng + danh từ số nhiều + nơi chốn.\""
    },
    {
      "id": 2,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu hỏi Yes/No với To be",
      "prompt": "Chọn câu hỏi viết đúng trật tự: \"this / Is / pen / your / ?\"",
      "options": [
        "Is this your pen?",
        "This is your pen?",
        "Your pen is this?",
        "Is your pen this?"
      ],
      "correctAnswer": "Is this your pen?",
      "hintExplanation": "Câu hỏi Yes/No với To be: Đưa \"Is\" lên đầu câu: \"Is this your [đồ vật]?\""
    },
    {
      "id": 3,
      "topic": "writing_verb_tenses",
      "topicTitle": "Viết câu với động từ Can",
      "prompt": "Viết câu diễn tả bạn Mai có thể bơi lội: \"Mai (can) ______.\"",
      "options": [
        "Mai can swim.",
        "Mai cans swim.",
        "Mai can swimming.",
        "Mai can to swim."
      ],
      "correctAnswer": "Mai can swim.",
      "hintExplanation": "Sau động từ khuyết thiếu \"can\", động từ theo sau luôn ở dạng nguyên thể không chia: \"can swim\"."
    },
    {
      "id": 4,
      "topic": "writing_verb_tenses",
      "topicTitle": "Viết câu phủ định với Don't",
      "prompt": "Chọn câu viết đúng phủ định \"Tôi không thích chuối\":",
      "options": [
        "I don't like bananas.",
        "I not like bananas.",
        "I doesn't like bananas.",
        "I am not like bananas."
      ],
      "correctAnswer": "I don't like bananas.",
      "hintExplanation": "Chủ ngữ \"I\" dùng trợ động từ phủ định \"don't\" + động từ nguyên thể."
    },
    {
      "id": 5,
      "topic": "writing_prepositions",
      "topicTitle": "Viết câu với giới từ chỉ vị trí (in, on, under)",
      "prompt": "Hoàn thành câu chỉ chú mèo nằm dưới gầm bàn: \"The cat is ______ the table.\"",
      "options": [
        "The cat is under the table.",
        "The cat is in the table.",
        "The cat is on the table under.",
        "The cat is at the table."
      ],
      "correctAnswer": "The cat is under the table.",
      "hintExplanation": "Giới từ chỉ vị trí phía dưới là \"under\": \"under the table\"."
    },
    {
      "id": 6,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu hỏi khả năng với Can",
      "prompt": "Sắp xếp các từ để viết thành câu hỏi: \"you / Can / high / jump / ? / ,\"",
      "options": [
        "Can you jump high?",
        "You can jump high?",
        "Jump high can you?",
        "Can jump you high?"
      ],
      "correctAnswer": "Can you jump high?",
      "hintExplanation": "Cấu trúc câu hỏi với Can: \"Can + S + V-nguyên thể + ...?\""
    },
    {
      "id": 7,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu giới thiệu anh/em trai",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"is / This / my / brother / . /\"",
      "options": [
        "This is my brother.",
        "My brother is this.",
        "Is this my brother.",
        "Brother is my this."
      ],
      "correctAnswer": "This is my brother.",
      "hintExplanation": "Cấu trúc: \"This is my + người thân.\""
    },
    {
      "id": 8,
      "isEssay": true,
      "topic": "writing_essay_paragraph",
      "topicTitle": "Viết đoạn văn Tiếng Anh Lớp 2",
      "prompt": "Đề bài văn Lớp 2: Viết đoạn văn tiếng Anh theo chủ đề ngẫu nhiên.",
      "options": [],
      "correctAnswer": "",
      "hintExplanation": "Luyện viết đoạn văn theo đúng quy định số câu của Lớp 2."
    }
  ],
  "3": [
    {
      "id": 1,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu hỏi sở thích (Do you like...?)",
      "prompt": "Sắp xếp các từ để viết thành câu hỏi: \"you / reading / Do / comic books / like / ?\"",
      "options": [
        "Do you like reading comic books?",
        "Do you reading like comic books?",
        "Like you reading comic books?",
        "You do like reading comic books?"
      ],
      "correctAnswer": "Do you like reading comic books?",
      "hintExplanation": "Trật tự câu hỏi: Do + you + like + V-ing + danh từ?"
    },
    {
      "id": 2,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu hỏi giờ (What time is it?)",
      "prompt": "Chọn câu viết hỏi giờ đúng chính tả và ngữ pháp:",
      "options": [
        "What time is it now?",
        "What time it is now?",
        "How time is it now?",
        "What is time now?"
      ],
      "correctAnswer": "What time is it now?",
      "hintExplanation": "Mẫu câu hỏi giờ thông dụng chuẩn: \"What time is it?\""
    },
    {
      "id": 3,
      "topic": "writing_verb_tenses",
      "topicTitle": "Chia động từ ngôi thứ 3 số ít",
      "prompt": "Viết câu nói anh ấy làm việc ở bệnh viện: \"He (work) ______ in a hospital.\"",
      "options": [
        "He works in a hospital.",
        "He work in a hospital.",
        "He is work in a hospital.",
        "He working in a hospital."
      ],
      "correctAnswer": "He works in a hospital.",
      "hintExplanation": "Chủ ngữ ngôi thứ 3 số ít \"He\" cần thêm \"s\" vào động từ thường: \"works\"."
    },
    {
      "id": 4,
      "topic": "writing_verb_tenses",
      "topicTitle": "Viết câu với trợ động từ Does/Doesn't",
      "prompt": "Chọn câu phủ định viết chuẩn xác: \"She / not have / an eraser.\"",
      "options": [
        "She doesn't have an eraser.",
        "She don't have an eraser.",
        "She not has an eraser.",
        "She isn't have an eraser."
      ],
      "correctAnswer": "She doesn't have an eraser.",
      "hintExplanation": "Ngôi \"She\" dùng trợ động từ phủ định \"doesn't\" + động từ nguyên thể \"have\"."
    },
    {
      "id": 5,
      "topic": "writing_prepositions",
      "topicTitle": "Viết câu giới từ chỉ nơi chốn trong trường học",
      "prompt": "Hoàn thành câu: \"The library is ______ the second floor of the building.\"",
      "options": [
        "The library is on the second floor of the building.",
        "The library is in the second floor of the building.",
        "The library is at the second floor of the building.",
        "The library is to the second floor of the building."
      ],
      "correctAnswer": "The library is on the second floor of the building.",
      "hintExplanation": "Chỉ số tầng của toà nhà luôn dùng giới từ \"on\": \"on the second floor\"."
    },
    {
      "id": 6,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu miêu tả thời tiết",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"sunny / It / is / warm / and / today / .\"",
      "options": [
        "It is sunny and warm today.",
        "Today sunny and warm it is.",
        "Is it sunny and warm today.",
        "It sunny is today and warm."
      ],
      "correctAnswer": "It is sunny and warm today.",
      "hintExplanation": "Cấu trúc: \"It is + tính từ thời tiết + today.\""
    },
    {
      "id": 7,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với giới từ vị trí under",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"under / The dog / the bed / is / . /\"",
      "options": [
        "The dog is under the bed.",
        "The dog under the bed is.",
        "Under the bed the dog is.",
        "Is the dog under the bed."
      ],
      "correctAnswer": "The dog is under the bed.",
      "hintExplanation": "Cấu trúc: \"S + is under the + danh từ nơi chốn.\""
    },
    {
      "id": 8,
      "isEssay": true,
      "topic": "writing_essay_paragraph",
      "topicTitle": "Viết đoạn văn Tiếng Anh Lớp 3",
      "prompt": "Đề bài văn Lớp 3: Viết đoạn văn tiếng Anh theo chủ đề ngẫu nhiên.",
      "options": [],
      "correctAnswer": "",
      "hintExplanation": "Luyện viết đoạn văn theo đúng quy định số câu của Lớp 3."
    }
  ],
  "4": [
    {
      "id": 1,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu về thời gian biểu hàng ngày",
      "prompt": "Sắp xếp các từ để tạo câu hoàn chỉnh: \"at / gets up / 6:00 a.m. / He / every day / .\"",
      "options": [
        "He gets up at 6:00 a.m. every day.",
        "He at 6:00 a.m. gets up every day.",
        "Gets up he at 6:00 a.m. every day.",
        "He gets up every day at 6:00 a.m."
      ],
      "correctAnswer": "He gets up at 6:00 a.m. every day.",
      "hintExplanation": "Trật tự chuẩn: S + V + cụm giới từ thời gian (at 6:00 a.m.) + trạng ngữ tần suất (every day)."
    },
    {
      "id": 2,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu hỏi sở thích nghề nghiệp",
      "prompt": "Chọn câu viết đúng để hỏi ước mơ nghề nghiệp trong tương lai:",
      "options": [
        "What would you like to be in the future?",
        "What you would like to be in the future?",
        "What would you like be in future?",
        "What do you like to be future?"
      ],
      "correctAnswer": "What would you like to be in the future?",
      "hintExplanation": "Cấu trúc hỏi nghề nghiệp tương lai: \"What would you like to be in the future?\""
    },
    {
      "id": 3,
      "topic": "writing_verb_tenses",
      "topicTitle": "Viết câu thì Hiện tại tiếp diễn",
      "prompt": "Hoàn thành câu diễn tả hành động lúc này: \"They (play) ______ chess in the classroom now.\"",
      "options": [
        "They are playing chess in the classroom now.",
        "They is playing chess in the classroom now.",
        "They are play chess in the classroom now.",
        "They play chess in the classroom now."
      ],
      "correctAnswer": "They are playing chess in the classroom now.",
      "hintExplanation": "Dấu hiệu \"now\" với chủ ngữ số nhiều \"They\" dùng: \"are + V-ing\" (are playing)."
    },
    {
      "id": 4,
      "topic": "writing_verb_tenses",
      "topicTitle": "Viết câu thì Quá khứ đơn cơ bản",
      "prompt": "Viết câu kể lại chuyến đi hôm qua: \"Yesterday, my family (visit) ______ my grandparents.\"",
      "options": [
        "Yesterday, my family visited my grandparents.",
        "Yesterday, my family visits my grandparents.",
        "Yesterday, my family visiting my grandparents.",
        "Yesterday, my family visit my grandparents."
      ],
      "correctAnswer": "Yesterday, my family visited my grandparents.",
      "hintExplanation": "Dấu hiệu quá khứ \"Yesterday\", động từ có quy tắc thêm đuôi \"-ed\": \"visited\"."
    },
    {
      "id": 5,
      "topic": "writing_prepositions",
      "topicTitle": "Viết câu với giới từ chỉ phương tiện (by bus, on foot)",
      "prompt": "Chọn câu viết đúng phương tiện đi học hàng ngày:",
      "options": [
        "She goes to school by bus every morning.",
        "She goes to school with bus every morning.",
        "She goes to school in bus every morning.",
        "She goes to school by the bus every morning."
      ],
      "correctAnswer": "She goes to school by bus every morning.",
      "hintExplanation": "Chỉ phương tiện giao thông thông dụng dùng cấu trúc: \"by + tên phương tiện\" (by bus, by car, by bike)."
    },
    {
      "id": 6,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu nói về môn học yêu thích",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"is / favorite / English / my / subject / .\"",
      "options": [
        "English is my favorite subject.",
        "My favorite English is subject.",
        "Subject is my favorite English.",
        "Favorite is English my subject."
      ],
      "correctAnswer": "English is my favorite subject.",
      "hintExplanation": "Cấu trúc: \"English is my favorite subject.\""
    },
    {
      "id": 7,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu chỉ giá cả đồ vật",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"book / This / ten / is / thousand / dong / .\"",
      "options": [
        "This book is ten thousand dong.",
        "This is ten thousand dong book.",
        "Ten thousand dong is book this.",
        "Book this is ten thousand dong."
      ],
      "correctAnswer": "This book is ten thousand dong.",
      "hintExplanation": "Cấu trúc: \"This book is ten thousand dong.\""
    },
    {
      "id": 8,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu sở thích với like + V-ing",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"like / drawing / I / pictures / . /\"",
      "options": [
        "I like drawing pictures.",
        "I like pictures drawing.",
        "Drawing pictures I like.",
        "Like I drawing pictures."
      ],
      "correctAnswer": "I like drawing pictures.",
      "hintExplanation": "Cấu trúc: \"I like + V-ing + O.\""
    },
    {
      "id": 9,
      "isEssay": true,
      "topic": "writing_essay_paragraph",
      "topicTitle": "Viết đoạn văn Tiếng Anh Lớp 4",
      "prompt": "Đề bài văn Lớp 4: Viết đoạn văn tiếng Anh theo chủ đề ngẫu nhiên.",
      "options": [],
      "correctAnswer": "",
      "hintExplanation": "Luyện viết đoạn văn theo đúng quy định số câu của Lớp 4."
    }
  ],
  "5": [
    {
      "id": 1,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu so sánh hơn của tính từ ngắn",
      "prompt": "Sắp xếp các từ để viết câu so sánh hoàn chỉnh: \"is / taller / Lan / than / Hoa / .\"",
      "options": [
        "Lan is taller than Hoa.",
        "Lan is than taller Hoa.",
        "Lan taller is than Hoa.",
        "Taller Lan is than Hoa."
      ],
      "correctAnswer": "Lan is taller than Hoa.",
      "hintExplanation": "Cấu trúc so sánh hơn với tính từ ngắn: S1 + to be + Adj-er + than + S2."
    },
    {
      "id": 2,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu hỏi kế hoạch tương lai (be going to)",
      "prompt": "Chọn câu viết hỏi kế hoạch cuối tuần đúng ngữ pháp:",
      "options": [
        "What are you going to do this weekend?",
        "What you are going to do this weekend?",
        "What are you go to do this weekend?",
        "What are you going do this weekend?"
      ],
      "correctAnswer": "What are you going to do this weekend?",
      "hintExplanation": "Cấu trúc kế hoạch tương lai gần: \"What + are/is + S + going to + V-inf?\""
    },
    {
      "id": 3,
      "topic": "writing_verb_tenses",
      "topicTitle": "Viết câu thì Quá khứ đơn với động từ bất quy tắc",
      "prompt": "Hoàn thành câu kể chuyến đi mùa hè trước: \"Last summer, we (go) ______ to Ha Long Bay.\"",
      "options": [
        "Last summer, we went to Ha Long Bay.",
        "Last summer, we goed to Ha Long Bay.",
        "Last summer, we go to Ha Long Bay.",
        "Last summer, we are going to Ha Long Bay."
      ],
      "correctAnswer": "Last summer, we went to Ha Long Bay.",
      "hintExplanation": "Động từ bất quy tắc của \"go\" ở thì quá khứ đơn là \"went\"."
    },
    {
      "id": 4,
      "topic": "writing_verb_tenses",
      "topicTitle": "Viết câu phủ định thì Quá khứ đơn (didn't)",
      "prompt": "Chọn câu viết phủ định đúng: \"Họ đã không xem TV tối qua.\"",
      "options": [
        "They didn't watch TV last night.",
        "They didn't watched TV last night.",
        "They not watched TV last night.",
        "They weren't watch TV last night."
      ],
      "correctAnswer": "They didn't watch TV last night.",
      "hintExplanation": "Sau trợ động từ \"didn't\", động từ chính phải trở về dạng nguyên thể: \"didn't watch\"."
    },
    {
      "id": 5,
      "topic": "writing_prepositions",
      "topicTitle": "Viết câu miêu tả vị trí đối diện (opposite / between)",
      "prompt": "Hoàn thiện câu: \"The cinema is located ______ the post office and the supermarket.\"",
      "options": [
        "The cinema is located between the post office and the supermarket.",
        "The cinema is located opposite the post office and the supermarket.",
        "The cinema is located next to the post office and the supermarket.",
        "The cinema is located in front of the post office and the supermarket."
      ],
      "correctAnswer": "The cinema is located between the post office and the supermarket.",
      "hintExplanation": "Ở giữa 2 địa điểm dùng cặp từ: \"between A and B\"."
    },
    {
      "id": 6,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với thì Quá khứ đơn",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"visited / We / Ha Long Bay / last / summer / .\"",
      "options": [
        "We visited Ha Long Bay last summer.",
        "Last summer visited we Ha Long Bay.",
        "We Ha Long Bay visited last summer.",
        "Ha Long Bay we visited last summer."
      ],
      "correctAnswer": "We visited Ha Long Bay last summer.",
      "hintExplanation": "Cấu trúc quá khứ đơn: \"S + V-ed + O + trạng từ thời gian.\""
    },
    {
      "id": 7,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với Be going to chỉ dự định",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"are / We / going / to / plant / trees / .\"",
      "options": [
        "We are going to plant trees.",
        "We going are to plant trees.",
        "To plant trees we are going.",
        "Trees we are going to plant."
      ],
      "correctAnswer": "We are going to plant trees.",
      "hintExplanation": "Cấu trúc: \"S + are going to + V-nguyên thể + O.\""
    },
    {
      "id": 8,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với trạng từ tần suất always",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"always / He / his teeth / brushes / in the morning / . /\"",
      "options": [
        "He always brushes his teeth in the morning.",
        "He brushes always his teeth in the morning.",
        "Always he brushes his teeth in the morning.",
        "His teeth he brushes always in the morning."
      ],
      "correctAnswer": "He always brushes his teeth in the morning.",
      "hintExplanation": "Trạng từ chỉ tần suất \"always\" đứng trước động từ thường: \"He always brushes his teeth in the morning.\""
    },
    {
      "id": 9,
      "isEssay": true,
      "topic": "writing_essay_paragraph",
      "topicTitle": "Viết đoạn văn Tiếng Anh Lớp 5",
      "prompt": "Đề bài văn Lớp 5: Viết đoạn văn tiếng Anh theo chủ đề ngẫu nhiên.",
      "options": [],
      "correctAnswer": "",
      "hintExplanation": "Luyện viết đoạn văn theo đúng quy định số câu của Lớp 5."
    }
  ],
  "6": [
    {
      "id": 1,
      "topic": "writing_sentence_order",
      "topicTitle": "Trật tự từ & Vị trí trạng từ chỉ tần suất (Word Order)",
      "prompt": "Sắp xếp các từ để tạo thành câu viết đúng quy tắc: \"often / goes / she / to school / by bike / .\"",
      "options": [
        "She often goes to school by bike.",
        "She goes often to school by bike.",
        "Often she goes to school by bike.",
        "She to school often goes by bike."
      ],
      "correctAnswer": "She often goes to school by bike.",
      "hintExplanation": "Trạng từ chỉ tần suất (always, usually, often, never) đứng trước động từ thường: S + Adv + V."
    },
    {
      "id": 2,
      "topic": "writing_sentence_order",
      "topicTitle": "Cấu trúc câu miêu tả số lượng với There is / There are",
      "prompt": "Chọn câu viết lại hoàn chỉnh từ các từ gợi ý: \"books / are / on / there / many / the table / .\"",
      "options": [
        "There are many books on the table.",
        "There is many books on the table.",
        "Many books there are on the table.",
        "There are on the table many books."
      ],
      "correctAnswer": "There are many books on the table.",
      "hintExplanation": "Cấu trúc chỉ sự tồn tại: \"There are + danh từ số nhiều (many books) + cụm chỉ vị trí (on the table)\"."
    },
    {
      "id": 3,
      "topic": "writing_verb_tenses",
      "topicTitle": "Chia thì Hiện tại đơn với chủ ngữ ngôi thứ 3 số ít",
      "prompt": "Hoàn thành câu diễn tả thói quen hàng tuần: \"My brother (play) ______ badminton every Sunday morning.\"",
      "options": [
        "My brother plays badminton every Sunday morning.",
        "My brother play badminton every Sunday morning.",
        "My brother is playing badminton every Sunday morning.",
        "My brother playing badminton every Sunday morning."
      ],
      "correctAnswer": "My brother plays badminton every Sunday morning.",
      "hintExplanation": "Với chủ ngữ ngôi thứ 3 số ít (My brother) ở thì Hiện tại đơn, động từ thường phải thêm \"s\": \"plays\"."
    },
    {
      "id": 4,
      "topic": "writing_verb_tenses",
      "topicTitle": "Chia thì Hiện tại tiếp diễn (Present Continuous)",
      "prompt": "Viết câu diễn tả hành động đang diễn ra ngay lúc này: \"Look! The children (swim) ______ in the swimming pool.\"",
      "options": [
        "Look! The children are swimming in the swimming pool.",
        "Look! The children is swimming in the swimming pool.",
        "Look! The children swim in the swimming pool.",
        "Look! The children are swiming in the swimming pool."
      ],
      "correctAnswer": "Look! The children are swimming in the swimming pool.",
      "hintExplanation": "Dấu hiệu \"Look!\" dùng Hiện tại tiếp diễn. Chủ ngữ số nhiều \"The children\" đi với \"are swimming\" (nhớ gấp đôi chữ m)."
    },
    {
      "id": 5,
      "topic": "writing_prepositions",
      "topicTitle": "Giới từ chỉ thời gian (at, on, in)",
      "prompt": "Chọn câu viết đúng các giới từ chỉ thời gian: \"Our English class starts ______ 7:30 a.m. ______ Monday.\"",
      "options": [
        "Our English class starts at 7:30 a.m. on Monday.",
        "Our English class starts on 7:30 a.m. in Monday.",
        "Our English class starts in 7:30 a.m. at Monday.",
        "Our English class starts at 7:30 a.m. in Monday."
      ],
      "correctAnswer": "Our English class starts at 7:30 a.m. on Monday.",
      "hintExplanation": "Quy tắc giới từ thời gian: dùng \"at\" trước giờ chính xác (at 7:30 a.m.) và dùng \"on\" trước các thứ trong tuần (on Monday)."
    },
    {
      "id": 6,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu so sánh hơn của tính từ ngắn",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"quieter / My / village / is / than / the city / .\"",
      "options": [
        "My village is quieter than the city.",
        "The city is quieter than my village.",
        "My village than the city is quieter.",
        "Quieter is my village than the city."
      ],
      "correctAnswer": "My village is quieter than the city.",
      "hintExplanation": "Cấu trúc so sánh hơn: \"S1 + is + adj-er + than + S2.\""
    },
    {
      "id": 7,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu đưa ra lời khuyên với Should",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"should / You / eat / more / fresh / vegetables / .\"",
      "options": [
        "You should eat more fresh vegetables.",
        "You eat should more fresh vegetables.",
        "More fresh vegetables you should eat.",
        "Should you eat fresh more vegetables."
      ],
      "correctAnswer": "You should eat more fresh vegetables.",
      "hintExplanation": "Cấu trúc lời khuyên: \"S + should + V-nguyên thể + O.\""
    },
    {
      "id": 8,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với thì Hiện tại tiếp diễn chỉ hoạt động đang diễn ra",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"are / The / students / planting / flowers / in the garden / .\"",
      "options": [
        "The students are planting flowers in the garden.",
        "The students planting are flowers in the garden.",
        "Flowers are planting the students in the garden.",
        "In the garden the students planting are flowers."
      ],
      "correctAnswer": "The students are planting flowers in the garden.",
      "hintExplanation": "Cấu trúc: \"S + are + V-ing + O + trạng ngữ.\""
    },
    {
      "id": 9,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với cấu trúc There is",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"a big table / There is / in the living room / . /\"",
      "options": [
        "There is a big table in the living room.",
        "There is in the living room a big table.",
        "A big table there is in the living room.",
        "In the living room there a big table is."
      ],
      "correctAnswer": "There is a big table in the living room.",
      "hintExplanation": "Cấu trúc: \"There is a + noun + in the living room.\""
    },
    {
      "id": 10,
      "isEssay": true,
      "topic": "writing_essay_paragraph",
      "topicTitle": "Viết đoạn văn Tiếng Anh Lớp 6",
      "prompt": "Đề bài văn Lớp 6: Viết đoạn văn tiếng Anh theo chủ đề ngẫu nhiên.",
      "options": [],
      "correctAnswer": "",
      "hintExplanation": "Luyện viết đoạn văn theo đúng quy định số câu của Lớp 6."
    }
  ],
  "7": [
    {
      "id": 1,
      "topic": "writing_conjunctions",
      "topicTitle": "Liên từ chỉ sự tương phản (Although / However)",
      "prompt": "Chọn câu viết lại sử dụng \"Although\" đúng cấu trúc:",
      "options": [
        "Although it rained heavily, we still went camping.",
        "Although it rained heavily, but we still went camping.",
        "Although of the heavy rain, we still went camping.",
        "Despite it rained heavily, we still went camping."
      ],
      "correctAnswer": "Although it rained heavily, we still went camping.",
      "hintExplanation": "Cấu trúc: \"Although + mệnh đề 1, mệnh đề 2\" (tuyệt đối không dùng kèm \"but\" trong cùng một câu)."
    },
    {
      "id": 2,
      "topic": "writing_conjunctions",
      "topicTitle": "Cấu trúc so sánh (different from / as... as)",
      "prompt": "Hoàn thiện câu so sánh sự khác biệt: \"Life in the countryside is quite ______ life in a bustling city.\"",
      "options": [
        "Life in the countryside is quite different from life in a bustling city.",
        "Life in the countryside is quite different with life in a bustling city.",
        "Life in the countryside is quite different as life in a bustling city.",
        "Life in the countryside is quite difference from life in a bustling city."
      ],
      "correctAnswer": "Life in the countryside is quite different from life in a bustling city.",
      "hintExplanation": "Tính từ \"different\" luôn đi với giới từ \"from\" để chỉ sự khác biệt: \"different from\"."
    },
    {
      "id": 3,
      "topic": "writing_verb_tenses",
      "topicTitle": "Thói quen trong quá khứ với Used to",
      "prompt": "Viết câu miêu tả thói quen thuở nhỏ: \"When I was young, I (use to) ______ ride a bike to school.\"",
      "options": [
        "When I was young, I used to ride a bike to school.",
        "When I was young, I use to ride a bike to school.",
        "When I was young, I was used to ride a bike to school.",
        "When I was young, I used to riding a bike to school."
      ],
      "correctAnswer": "When I was young, I used to ride a bike to school.",
      "hintExplanation": "Cấu trúc chỉ thói quen đã chấm dứt trong quá khứ: \"used to + V-nguyên thể\"."
    },
    {
      "id": 4,
      "topic": "writing_verb_tenses",
      "topicTitle": "Thì Hiện tại hoàn thành với Since / For",
      "prompt": "Chọn câu viết đúng thì Hiện tại hoàn thành chỉ sự việc kéo dài:",
      "options": [
        "We have lived in this green neighborhood for five years.",
        "We lived in this green neighborhood for five years ago.",
        "We have lived in this green neighborhood since five years.",
        "We are living in this green neighborhood for five years."
      ],
      "correctAnswer": "We have lived in this green neighborhood for five years.",
      "hintExplanation": "Với khoảng thời gian (five years), ta dùng giới từ \"for\": \"have lived ... for five years\"."
    },
    {
      "id": 5,
      "topic": "writing_adjectives_order",
      "topicTitle": "Trật tự tính từ miêu tả (OSASCOMP)",
      "prompt": "Chọn câu viết đúng trật tự tính từ: \"She bought a (leather / black / new) jacket.\"",
      "options": [
        "She bought a new black leather jacket.",
        "She bought a black new leather jacket.",
        "She bought a leather black new jacket.",
        "She bought a new leather black jacket."
      ],
      "correctAnswer": "She bought a new black leather jacket.",
      "hintExplanation": "Quy tắc trật tự tính từ: Tuổi tác (new) -> Màu sắc (black) -> Chất liệu (leather)."
    },
    {
      "id": 6,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu diễn tả thói quen quá khứ với Used to",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"used to / My father / walk / to school / when / he was young / .\"",
      "options": [
        "My father used to walk to school when he was young.",
        "My father walk used to to school when he was young.",
        "When he was young used to walk my father to school.",
        "Used to my father walk to school when he was young."
      ],
      "correctAnswer": "My father used to walk to school when he was young.",
      "hintExplanation": "Cấu trúc: \"S + used to + V-inf + ...\""
    },
    {
      "id": 7,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu so sánh bằng với As... as",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"This exercise / is / not / as difficult / as / that one / .\"",
      "options": [
        "This exercise is not as difficult as that one.",
        "This exercise as difficult is not as that one.",
        "As difficult as this exercise is not that one.",
        "Not as difficult this exercise is as that one."
      ],
      "correctAnswer": "This exercise is not as difficult as that one.",
      "hintExplanation": "Cấu trúc so sánh bằng/phủ định: \"S + is not as + adj + as + ...\""
    },
    {
      "id": 8,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu chỉ khoảng cách với It is + distance",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"It is / about / two kilometers / from / my house / to school / .\"",
      "options": [
        "It is about two kilometers from my house to school.",
        "From my house to school it is two kilometers about.",
        "It is two kilometers about to school from my house.",
        "Two kilometers it is about from my house to school."
      ],
      "correctAnswer": "It is about two kilometers from my house to school.",
      "hintExplanation": "Cấu trúc khoảng cách: \"It is + (about) + khoảng cách + from A to B.\""
    },
    {
      "id": 9,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu ghép với liên từ Because",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"She / was / tired / because / she worked hard / . /\"",
      "options": [
        "She was tired because she worked hard.",
        "Because she was tired she worked hard.",
        "She worked hard because she was tired.",
        "Tired was she because she worked hard."
      ],
      "correctAnswer": "She was tired because she worked hard.",
      "hintExplanation": "Cấu trúc: \"Mệnh đề 1 + because + Mệnh đề 2 (chỉ nguyên nhân).\""
    },
    {
      "id": 10,
      "isEssay": true,
      "topic": "writing_essay_paragraph",
      "topicTitle": "Viết đoạn văn Tiếng Anh Lớp 7",
      "prompt": "Đề bài văn Lớp 7: Viết đoạn văn tiếng Anh theo chủ đề ngẫu nhiên.",
      "options": [],
      "correctAnswer": "",
      "hintExplanation": "Luyện viết đoạn văn theo đúng quy định số câu của Lớp 7."
    }
  ],
  "8": [
    {
      "id": 1,
      "topic": "writing_simple_compound",
      "topicTitle": "Câu bị động thì Quá khứ đơn (Passive Voice)",
      "prompt": "Chuyển câu sau sang thể bị động: \"Alexander Graham Bell invented the telephone in 1876.\"",
      "options": [
        "The telephone was invented by Alexander Graham Bell in 1876.",
        "The telephone were invented by Alexander Graham Bell in 1876.",
        "The telephone is invented by Alexander Graham Bell in 1876.",
        "The telephone was invent by Alexander Graham Bell in 1876."
      ],
      "correctAnswer": "The telephone was invented by Alexander Graham Bell in 1876.",
      "hintExplanation": "Công thức bị động thì Quá khứ đơn: S + was/were + V3/ed + by O. \"The telephone\" số ít đi với \"was invented\"."
    },
    {
      "id": 2,
      "topic": "writing_simple_compound",
      "topicTitle": "Câu điều kiện loại 1 (Conditional Sentence Type 1)",
      "prompt": "Viết câu điều kiện có thật ở hiện tại/tương lai: \"If you (recycle) ______ plastic bottles, you will help the environment.\"",
      "options": [
        "If you recycle plastic bottles, you will help the environment.",
        "If you will recycle plastic bottles, you will help the environment.",
        "If you recycled plastic bottles, you will help the environment.",
        "If you are recycling plastic bottles, you will help the environment."
      ],
      "correctAnswer": "If you recycle plastic bottles, you will help the environment.",
      "hintExplanation": "Mệnh đề If của câu điều kiện loại 1 chia ở thì Hiện tại đơn: \"If + S + V(hiện tại), S + will + V\"."
    },
    {
      "id": 3,
      "topic": "writing_verb_tenses",
      "topicTitle": "Thì Quá khứ tiếp diễn kết hợp Quá khứ đơn (While / When)",
      "prompt": "Chọn câu viết diễn tả hành động đang diễn ra thì hành động khác cắt ngang:",
      "options": [
        "While we were having dinner, the doorbell suddenly rang.",
        "While we had dinner, the doorbell was suddenly ringing.",
        "While we were having dinner, the doorbell was suddenly ringing.",
        "When we were having dinner, the doorbell was ringing."
      ],
      "correctAnswer": "While we were having dinner, the doorbell suddenly rang.",
      "hintExplanation": "Hành động kéo dài dùng Quá khứ tiếp diễn (were having), hành động xen vào dùng Quá khứ đơn (rang)."
    },
    {
      "id": 4,
      "topic": "writing_verb_tenses",
      "topicTitle": "Động từ đi kèm V-ing hoặc To-infinitive",
      "prompt": "Hoàn thành câu: \"My sister decided (learn) ______ a new musical instrument this summer.\"",
      "options": [
        "My sister decided to learn a new musical instrument this summer.",
        "My sister decided learning a new musical instrument this summer.",
        "My sister decided learn a new musical instrument this summer.",
        "My sister decided to learning a new musical instrument this summer."
      ],
      "correctAnswer": "My sister decided to learn a new musical instrument this summer.",
      "hintExplanation": "Động từ \"decide\" luôn đi với \"to-V\": \"decide to learn\"."
    },
    {
      "id": 5,
      "topic": "writing_subject_verb_agreement",
      "topicTitle": "Sự hòa hợp giữa Chủ ngữ và Động từ (Neither... nor / Either... or)",
      "prompt": "Chọn câu viết đúng quy tắc hòa hợp chủ vị:",
      "options": [
        "Neither the teacher nor the students are in the laboratory right now.",
        "Neither the teacher nor the students is in the laboratory right now.",
        "Neither the teacher nor the students was in the laboratory right now.",
        "Neither the teacher or the students are in the laboratory right now."
      ],
      "correctAnswer": "Neither the teacher nor the students are in the laboratory right now.",
      "hintExplanation": "Với \"Neither... nor...\", động từ chia theo chủ ngữ gần nó nhất (\"the students\" số nhiều -> \"are\")."
    },
    {
      "id": 6,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu bị động ở thì Hiện tại đơn",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"English / is spoken / by / millions of / people / around the world / .\"",
      "options": [
        "English is spoken by millions of people around the world.",
        "Millions of people is spoken English by around the world.",
        "Around the world English is by millions of people spoken.",
        "Is spoken English by millions of people around the world."
      ],
      "correctAnswer": "English is spoken by millions of people around the world.",
      "hintExplanation": "Cấu trúc bị động hiện tại: \"S + is/are + V3/ed + by + O.\""
    },
    {
      "id": 7,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với động từ chỉ sở thích + V-ing",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"Mai / enjoys / making / crafts / with / her friends / .\"",
      "options": [
        "Mai enjoys making crafts with her friends.",
        "Mai enjoys to make crafts with her friends.",
        "Making crafts Mai enjoys with her friends.",
        "With her friends Mai enjoys make crafts."
      ],
      "correctAnswer": "Mai enjoys making crafts with her friends.",
      "hintExplanation": "Cấu trúc: \"S + enjoys + V-ing + ...\""
    },
    {
      "id": 8,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu điều kiện loại 1",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"If / we / plant / more trees / , / our town / will be / greener / .\"",
      "options": [
        "If we plant more trees, our town will be greener.",
        "Our town will be greener if we will plant more trees.",
        "If more trees we plant, our town greener will be.",
        "Will our town be greener if we plant more trees."
      ],
      "correctAnswer": "If we plant more trees, our town will be greener.",
      "hintExplanation": "Cấu trúc câu điều kiện loại 1: \"If + S + V(hiện tại), S + will + V-inf.\""
    },
    {
      "id": 9,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu hỏi ở thì Hiện tại hoàn thành với Ever",
      "prompt": "Sắp xếp các từ để viết thành câu hỏi: \"Have / you / ever / visited / Hoi An Ancient Town / ? /\"",
      "options": [
        "Have you ever visited Hoi An Ancient Town?",
        "Have you visited ever Hoi An Ancient Town?",
        "You have ever visited Hoi An Ancient Town?",
        "Ever have you visited Hoi An Ancient Town?"
      ],
      "correctAnswer": "Have you ever visited Hoi An Ancient Town?",
      "hintExplanation": "Cấu trúc câu hỏi: \"Have you ever + V3/ed + ...?\""
    },
    {
      "id": 10,
      "isEssay": true,
      "topic": "writing_essay_paragraph",
      "topicTitle": "Viết đoạn văn Tiếng Anh Lớp 8",
      "prompt": "Đề bài văn Lớp 8: Viết đoạn văn tiếng Anh theo chủ đề ngẫu nhiên.",
      "options": [],
      "correctAnswer": "",
      "hintExplanation": "Luyện viết đoạn văn theo đúng quy định số câu của Lớp 8."
    }
  ],
  "9": [
    {
      "id": 1,
      "topic": "writing_relative_clauses",
      "topicTitle": "Mệnh đề quan hệ xác định (Who / Which / That)",
      "prompt": "Kết hợp hai câu thành một câu có mệnh đề quan hệ: \"The solar engineer designed this panel. She is giving a speech today.\"",
      "options": [
        "The solar engineer who designed this panel is giving a speech today.",
        "The solar engineer which designed this panel is giving a speech today.",
        "The solar engineer whom designed this panel is giving a speech today.",
        "The solar engineer whose designed this panel is giving a speech today."
      ],
      "correctAnswer": "The solar engineer who designed this panel is giving a speech today.",
      "hintExplanation": "Đại từ quan hệ \"who\" thay thế cho danh từ chỉ người làm chủ ngữ (\"The solar engineer\")."
    },
    {
      "id": 2,
      "topic": "writing_relative_clauses",
      "topicTitle": "Mệnh đề quan hệ chỉ nơi chốn (Where)",
      "prompt": "Chọn câu viết kết hợp mệnh đề quan hệ chỉ nơi chốn chuẩn xác:",
      "options": [
        "This is the high school where I spent four unforgettable years.",
        "This is the high school which I spent four unforgettable years in it.",
        "This is the high school that I spent four unforgettable years there.",
        "This is the high school when I spent four unforgettable years."
      ],
      "correctAnswer": "This is the high school where I spent four unforgettable years.",
      "hintExplanation": "Trạng từ quan hệ \"where\" thay thế cho cụm trạng ngữ chỉ nơi chốn trong mệnh đề quan hệ."
    },
    {
      "id": 3,
      "topic": "writing_conditionals_opinion",
      "topicTitle": "Câu điều kiện loại 2 (Giả định không có thật ở hiện tại)",
      "prompt": "Viết câu điều kiện loại 2 giả định: \"If I (have) ______ a million dollars, I (build) ______ a charity hospital.\"",
      "options": [
        "If I had a million dollars, I would build a charity hospital.",
        "If I have a million dollars, I will build a charity hospital.",
        "If I had a million dollars, I will build a charity hospital.",
        "If I had have a million dollars, I would built a charity hospital."
      ],
      "correctAnswer": "If I had a million dollars, I would build a charity hospital.",
      "hintExplanation": "Công thức câu điều kiện loại 2: If + S + V2/ed, S + would + V-nguyên thể."
    },
    {
      "id": 4,
      "topic": "writing_conditionals_opinion",
      "topicTitle": "Cấu trúc câu ước muốn ở hiện tại (Wish + Past Simple)",
      "prompt": "Chọn câu viết diễn tả điều ước không có thật ở hiện tại:",
      "options": [
        "I wish I had more spare time to practice playing the piano.",
        "I wish I have more spare time to practice playing the piano.",
        "I wish I will have more spare time to practice playing the piano.",
        "I wish I would have had more spare time to practice playing the piano."
      ],
      "correctAnswer": "I wish I had more spare time to practice playing the piano.",
      "hintExplanation": "Cấu trúc câu ước ở hiện tại: \"S + wish(es) + S + V-quá khứ đơn\" (had)."
    },
    {
      "id": 5,
      "topic": "writing_sentence_order",
      "topicTitle": "Đảo ngữ hoặc câu phức liên từ chỉ kết quả (So... that / Such... that)",
      "prompt": "Chọn câu viết lại câu nối bằng \"so... that\": \"The essay was very intriguing. Everyone read it carefully.\"",
      "options": [
        "The essay was so intriguing that everyone read it carefully.",
        "The essay was such intriguing that everyone read it carefully.",
        "The essay was too intriguing that everyone read it carefully.",
        "The essay was so an intriguing that everyone read it carefully."
      ],
      "correctAnswer": "The essay was so intriguing that everyone read it carefully.",
      "hintExplanation": "Cấu trúc kết quả: \"S + be + so + Adj + that + mệnh đề\"."
    },
    {
      "id": 6,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với Đại từ quan hệ Which",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"The novel / which / you / lent me / is / fascinating / .\"",
      "options": [
        "The novel which you lent me is fascinating.",
        "Which the novel you lent me is fascinating.",
        "The novel you lent me which is fascinating.",
        "Fascinating is the novel which you lent me."
      ],
      "correctAnswer": "The novel which you lent me is fascinating.",
      "hintExplanation": "Cấu trúc mệnh đề quan hệ: \"Danh từ (vật) + which + S + V...\""
    },
    {
      "id": 7,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với Mệnh đề chỉ mục đích So that",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"She / studied hard / so that / she / could pass / the entrance exam / .\"",
      "options": [
        "She studied hard so that she could pass the entrance exam.",
        "So that she studied hard she could pass the entrance exam.",
        "She could pass the entrance exam so that she studied hard.",
        "Studied hard she so that could she pass the entrance exam."
      ],
      "correctAnswer": "She studied hard so that she could pass the entrance exam.",
      "hintExplanation": "Cấu trúc: \"Mệnh đề chính + so that + S + could/can + V-inf.\""
    },
    {
      "id": 8,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu ước ở hiện tại với Wish",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"I / wish / I / lived / in / a greener / and quieter / city / .\"",
      "options": [
        "I wish I lived in a greener and quieter city.",
        "I wish I live in a greener and quieter city.",
        "A greener and quieter city I wish I lived in.",
        "Lived in a greener and quieter city I wish I."
      ],
      "correctAnswer": "I wish I lived in a greener and quieter city.",
      "hintExplanation": "Cấu trúc câu ước ở hiện tại: \"S + wish + S + V2/ed.\""
    },
    {
      "id": 9,
      "topic": "writing_sentence_order",
      "topicTitle": "Viết câu với Mệnh đề quan hệ Who",
      "prompt": "Sắp xếp các từ để viết thành câu hoàn chỉnh: \"The doctor / who / treated me / was / very kind / . /\"",
      "options": [
        "The doctor who treated me was very kind.",
        "The doctor was very kind who treated me.",
        "Who treated me the doctor was very kind.",
        "Was very kind the doctor who treated me."
      ],
      "correctAnswer": "The doctor who treated me was very kind.",
      "hintExplanation": "Cấu trúc: \"Danh từ (người) + who + V + ... + was + tính từ.\""
    },
    {
      "id": 10,
      "isEssay": true,
      "topic": "writing_essay_paragraph",
      "topicTitle": "Viết đoạn văn Tiếng Anh Lớp 9",
      "prompt": "Đề bài văn Lớp 9: Viết đoạn văn tiếng Anh theo chủ đề ngẫu nhiên.",
      "options": [],
      "correctAnswer": "",
      "hintExplanation": "Luyện viết đoạn văn theo đúng quy định số câu của Lớp 9."
    }
  ]
};
