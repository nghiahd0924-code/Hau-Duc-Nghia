import { Question } from './types';
import { GradeLevel } from './components/GradeSelection';

// ------------------------------------------------------------------------------------
// BỘ CÂU HỎI GRAMMAR THEO TỪNG LỚP (LỚP 1 ĐẾN LỚP 9)
// Mỗi bài tập gồm từ 8 đến 10 câu chuẩn khung phân phối chương trình tiếng Anh phổ thông
// ------------------------------------------------------------------------------------

export const GRAMMAR_QUESTIONS_BY_GRADE: Record<GradeLevel, Question[]> = {
  "1": [
    {
      "id": 1,
      "topic": "letters_phonics",
      "topicTitle": "Bảng chữ cái & Từ vựng cơ bản",
      "prompt": "What letter does \"Apple\" start with?",
      "options": [
        "Letter A",
        "Letter B",
        "Letter C",
        "Letter D"
      ],
      "correctAnswer": "Letter A",
      "hintExplanation": "Từ \"Apple\" (quả táo) bắt đầu bằng chữ cái \"A\"."
    },
    {
      "id": 2,
      "topic": "letters_phonics",
      "topicTitle": "Bảng chữ cái & Từ vựng cơ bản",
      "prompt": "Which word starts with letter \"B\"?",
      "options": [
        "Cat",
        "Ball",
        "Dog",
        "Elephant"
      ],
      "correctAnswer": "Ball",
      "hintExplanation": "Từ \"Ball\" (quả bóng) bắt đầu bằng chữ cái \"B\"."
    },
    {
      "id": 3,
      "topic": "numbers_colors",
      "topicTitle": "Số đếm (1-10) & Màu sắc",
      "prompt": "Count the stars: ⭐ ⭐ ⭐. How many stars are there?",
      "options": [
        "Two",
        "Three",
        "Four",
        "Five"
      ],
      "correctAnswer": "Three",
      "hintExplanation": "Có 3 ngôi sao, tiếng Anh số 3 đọc là \"Three\"."
    },
    {
      "id": 4,
      "topic": "numbers_colors",
      "topicTitle": "Số đếm (1-10) & Màu sắc",
      "prompt": "What color is the sun?",
      "options": [
        "Yellow",
        "Blue",
        "Green",
        "Black"
      ],
      "correctAnswer": "Yellow",
      "hintExplanation": "Mặt trời có màu vàng, trong tiếng Anh là \"Yellow\"."
    },
    {
      "id": 5,
      "topic": "simple_actions",
      "topicTitle": "Chào hỏi & Giới thiệu tên",
      "prompt": "Hello! What is your name? - ______ name is Nam.",
      "options": [
        "My",
        "I",
        "He",
        "She"
      ],
      "correctAnswer": "My",
      "hintExplanation": "Dùng \"My name is...\" để nói \"Tên của tôi là...\"."
    },
    {
      "id": 6,
      "topic": "simple_actions",
      "topicTitle": "Chào hỏi & Giới thiệu tên",
      "prompt": "How are you? - I am ______, thank you!",
      "options": [
        "fine",
        "name",
        "pencil",
        "book"
      ],
      "correctAnswer": "fine",
      "hintExplanation": "Câu trả lời lịch sự cho \"How are you?\" là \"I am fine, thank you!\"."
    },
    {
      "id": 7,
      "topic": "school_things",
      "topicTitle": "Đồ dùng học tập cơ bản",
      "prompt": "What is this? - It is a ______.",
      "options": [
        "pencil",
        "red",
        "jump",
        "sing"
      ],
      "correctAnswer": "pencil",
      "hintExplanation": "\"pencil\" (cây bút chì) là danh từ chỉ đồ dùng học tập, phù hợp trả lời cho câu hỏi \"What is this?\"."
    },
    {
      "id": 8,
      "topic": "age_numbers",
      "topicTitle": "Hỏi và nói tuổi tác",
      "prompt": "How old are you? - I am ______ years old.",
      "options": [
        "six",
        "apple",
        "blue",
        "cat"
      ],
      "correctAnswer": "six",
      "hintExplanation": "Để nói tuổi, ta dùng từ chỉ số đếm: \"six\" (6 tuổi). \"I am six years old.\""
    }
  ],
  "2": [
    {
      "id": 1,
      "topic": "family_animals",
      "topicTitle": "Thành viên gia đình & Con vật",
      "prompt": "This is my father. ______ is tall and kind.",
      "options": [
        "He",
        "She",
        "It",
        "They"
      ],
      "correctAnswer": "He",
      "hintExplanation": "\"Father\" (bố) là giống đực nên dùng đại từ \"He\" (Ông ấy/Bác ấy)."
    },
    {
      "id": 2,
      "topic": "family_animals",
      "topicTitle": "Thành viên gia đình & Con vật",
      "prompt": "Look at that animal! It says \"meow meow\". It is a ______.",
      "options": [
        "dog",
        "cat",
        "bird",
        "fish"
      ],
      "correctAnswer": "cat",
      "hintExplanation": "Con vật kêu \"meow meow\" là con mèo (\"cat\")."
    },
    {
      "id": 3,
      "topic": "simple_actions",
      "topicTitle": "Mệnh lệnh lớp học (Classroom commands)",
      "prompt": "Please ______ your book to page 10.",
      "options": [
        "open",
        "sing",
        "jump",
        "eat"
      ],
      "correctAnswer": "open",
      "hintExplanation": "\"Open your book\" nghĩa là \"Mở sách của em ra\"."
    },
    {
      "id": 4,
      "topic": "simple_actions",
      "topicTitle": "Mệnh lệnh lớp học (Classroom commands)",
      "prompt": "Stand ______ please, children!",
      "options": [
        "up",
        "down",
        "in",
        "on"
      ],
      "correctAnswer": "up",
      "hintExplanation": "Cụm từ \"Stand up\" nghĩa là \"Đứng lên\"."
    },
    {
      "id": 5,
      "topic": "numbers_colors",
      "topicTitle": "Đại từ chỉ định: This / That",
      "prompt": "______ is a red apple in my hand right here.",
      "options": [
        "This",
        "These",
        "Those",
        "They"
      ],
      "correctAnswer": "This",
      "hintExplanation": "Dùng \"This is...\" khi chỉ một vật ở gần người nói."
    },
    {
      "id": 6,
      "topic": "numbers_colors",
      "topicTitle": "Đại từ chỉ định: This / That",
      "prompt": "Is that a bird in the sky? - Yes, ______ is.",
      "options": [
        "it",
        "they",
        "he",
        "we"
      ],
      "correctAnswer": "it",
      "hintExplanation": "Trả lời cho \"Is that...?\" dùng \"Yes, it is.\""
    },
    {
      "id": 7,
      "topic": "body_parts",
      "topicTitle": "Bộ phận cơ thể",
      "prompt": "I have two ______ to see the beautiful world.",
      "options": [
        "eyes",
        "nose",
        "mouth",
        "head"
      ],
      "correctAnswer": "eyes",
      "hintExplanation": "\"two eyes\" nghĩa là hai con mắt dùng để nhìn thế giới xung quanh."
    },
    {
      "id": 8,
      "topic": "likes_food",
      "topicTitle": "Sở thích ăn uống & Trợ động từ Do/Does",
      "prompt": "Do you like apples? - Yes, I ______.",
      "options": [
        "do",
        "am",
        "can",
        "have"
      ],
      "correctAnswer": "do",
      "hintExplanation": "Câu hỏi bắt đầu bằng trợ động từ \"Do you...\", câu trả lời khẳng định là \"Yes, I do.\""
    }
  ],
  "3": [
    {
      "id": 1,
      "topic": "prepositions_place",
      "topicTitle": "Giới từ chỉ vị trí (in, on, under)",
      "prompt": "The pencil is ______ the pencil case.",
      "options": [
        "in",
        "under",
        "on",
        "to"
      ],
      "correctAnswer": "in",
      "hintExplanation": "Bút nằm \"ở trong\" hộp bút nên ta dùng giới từ \"in\"."
    },
    {
      "id": 2,
      "topic": "prepositions_place",
      "topicTitle": "Giới từ chỉ vị trí (in, on, under)",
      "prompt": "The cat is sleeping ______ the table, on the floor.",
      "options": [
        "under",
        "in",
        "at",
        "into"
      ],
      "correctAnswer": "under",
      "hintExplanation": "\"Under the table\" có nghĩa là ở dưới gầm bàn."
    },
    {
      "id": 3,
      "topic": "can_ability",
      "topicTitle": "Khả năng với Can / Can't",
      "prompt": "Birds can fly in the sky, but they ______ swim like fish.",
      "options": [
        "can't",
        "can",
        "are",
        "do"
      ],
      "correctAnswer": "can't",
      "hintExplanation": "Chim không thể bơi như cá nên ta dùng \"can't\" (cannot)."
    },
    {
      "id": 4,
      "topic": "can_ability",
      "topicTitle": "Khả năng với Can / Can't",
      "prompt": "Can you play the piano? - No, I ______.",
      "options": [
        "can't",
        "can",
        "am not",
        "don't"
      ],
      "correctAnswer": "can't",
      "hintExplanation": "Câu hỏi bắt đầu bằng \"Can you...?\" trả lời phủ định là \"No, I can't.\""
    },
    {
      "id": 5,
      "topic": "numbers_colors",
      "topicTitle": "Danh từ số nhiều thêm -s",
      "prompt": "There are five ______ in my school bag.",
      "options": [
        "notebooks",
        "notebook",
        "a notebook",
        "an notebook"
      ],
      "correctAnswer": "notebooks",
      "hintExplanation": "Sau số lượng từ 2 trở lên (five) dùng danh từ số nhiều thêm \"-s\": \"notebooks\"."
    },
    {
      "id": 6,
      "topic": "numbers_colors",
      "topicTitle": "Danh từ số nhiều thêm -s",
      "prompt": "How many ______ do you have? - I have two pencils.",
      "options": [
        "pencils",
        "pencil",
        "a pencil",
        "penciles"
      ],
      "correctAnswer": "pencils",
      "hintExplanation": "Sau \"How many\" luôn luôn đi kèm danh từ số nhiều: \"How many pencils...\"."
    },
    {
      "id": 7,
      "topic": "weather_seasons",
      "topicTitle": "Hỏi về thời tiết hôm nay",
      "prompt": "What is the weather like today? - It is ______ and warm.",
      "options": [
        "sunny",
        "chair",
        "pencil",
        "read"
      ],
      "correctAnswer": "sunny",
      "hintExplanation": "\"sunny\" là tính từ chỉ thời tiết nắng đẹp: \"It is sunny and warm.\""
    },
    {
      "id": 8,
      "topic": "present_continuous_clothes",
      "topicTitle": "Thì Hiện tại tiếp diễn & Trang phục",
      "prompt": "Look at Nam! He is ______ a blue T-shirt and white shoes.",
      "options": [
        "wearing",
        "wear",
        "wears",
        "wore"
      ],
      "correctAnswer": "wearing",
      "hintExplanation": "Sau động từ to be \"is\" trong thì Hiện tại tiếp diễn là V-ing: \"is wearing\" (đang mặc)."
    }
  ],
  "4": [
    {
      "id": 1,
      "topic": "time_dates",
      "topicTitle": "Hỏi & nói giờ giấc, ngày trong tuần",
      "prompt": "What time is it? - It is ______ seven o'clock in the morning.",
      "options": [
        "at",
        "in",
        "on",
        "about"
      ],
      "correctAnswer": "at",
      "hintExplanation": "Khi trả lời mốc giờ cụ thể hoặc nói \"It is seven o'clock\" không có giới từ, còn khi chỉ hành động diễn ra vào lúc mấy giờ ta dùng \"at 7 o'clock\". Ở đây \"It is at seven o'clock\"."
    },
    {
      "id": 2,
      "topic": "time_dates",
      "topicTitle": "Hỏi & nói giờ giấc, ngày trong tuần",
      "prompt": "We have English lessons ______ Mondays and Fridays.",
      "options": [
        "on",
        "in",
        "at",
        "for"
      ],
      "correctAnswer": "on",
      "hintExplanation": "Giới từ đi với các thứ trong tuần luôn luôn là \"on\" (on Monday, on Friday)."
    },
    {
      "id": 3,
      "topic": "simple_actions",
      "topicTitle": "Hỏi quê quán, quốc tịch",
      "prompt": "Where are you from, Akiko? - I am from Japan. I am ______.",
      "options": [
        "Japanese",
        "Japan",
        "English",
        "American"
      ],
      "correctAnswer": "Japanese",
      "hintExplanation": "Đến từ nước Nhật (\"Japan\") thì quốc tịch là người Nhật (\"Japanese\")."
    },
    {
      "id": 4,
      "topic": "simple_actions",
      "topicTitle": "Cấu trúc like + V-ing",
      "prompt": "My sister likes ______ photos with her new camera.",
      "options": [
        "taking",
        "take",
        "takes",
        "took"
      ],
      "correctAnswer": "taking",
      "hintExplanation": "Sau động từ chỉ sở thích \"like\", ta dùng động từ thêm đuôi -ing: \"like taking photos\"."
    },
    {
      "id": 5,
      "topic": "present_simple",
      "topicTitle": "Hỏi môn học yêu thích (Subjects)",
      "prompt": "What is your favorite subject? - I like ______ because I love numbers and calculations.",
      "options": [
        "Maths",
        "Music",
        "Art",
        "History"
      ],
      "correctAnswer": "Maths",
      "hintExplanation": "Môn học liên quan đến các con số và tính toán là môn Toán (\"Maths\")."
    },
    {
      "id": 6,
      "topic": "present_simple",
      "topicTitle": "Hỏi nghề nghiệp tương lai",
      "prompt": "What would you like to be in the future? - I would like to be ______ English teacher.",
      "options": [
        "an",
        "a",
        "the",
        "some"
      ],
      "correctAnswer": "an",
      "hintExplanation": "Trước danh từ bắt đầu bằng nguyên âm \"E\" (\"English teacher\"), ta dùng mạo từ \"an\"."
    },
    {
      "id": 7,
      "topic": "asking_prices",
      "topicTitle": "Hỏi giá cả đồ vật với How much",
      "prompt": "How much ______ this lovely notebook? - It is ten thousand dong.",
      "options": [
        "is",
        "are",
        "do",
        "does"
      ],
      "correctAnswer": "is",
      "hintExplanation": "\"this lovely notebook\" là danh từ số ít nên dùng to be \"is\": \"How much is this notebook?\"."
    },
    {
      "id": 8,
      "topic": "past_was_were",
      "topicTitle": "Thì Quá khứ đơn với To be (was/were)",
      "prompt": "Where were you yesterday morning? - I ______ at home with my grandmother.",
      "options": [
        "was",
        "were",
        "am",
        "are"
      ],
      "correctAnswer": "was",
      "hintExplanation": "Chủ ngữ \"I\" đi với động từ to be quá khứ là \"was\"."
    },
    {
      "id": 9,
      "topic": "giving_reasons",
      "topicTitle": "Hỏi & trả lời lý do với Why / Because",
      "prompt": "Why do you want to visit the zoo? - ______ I want to see the monkeys.",
      "options": [
        "Because",
        "So",
        "Although",
        "But"
      ],
      "correctAnswer": "Because",
      "hintExplanation": "Để trả lời cho câu hỏi lý do \"Why\", ta bắt đầu bằng liên từ \"Because\" (Bởi vì)."
    }
  ],
  "5": [
    {
      "id": 1,
      "topic": "past_simple",
      "topicTitle": "Thì Quá khứ đơn cơ bản (Past Simple)",
      "prompt": "Yesterday, my family ______ to Ha Long Bay for our summer vacation.",
      "options": [
        "went",
        "go",
        "goes",
        "going"
      ],
      "correctAnswer": "went",
      "hintExplanation": "\"Yesterday\" (ngày hôm qua) là dấu hiệu thì Quá khứ đơn. Động từ bất quy tắc của \"go\" là \"went\"."
    },
    {
      "id": 2,
      "topic": "past_simple",
      "topicTitle": "Thì Quá khứ đơn cơ bản (Past Simple)",
      "prompt": "Did you ______ cartoons on TV last night? - Yes, I did.",
      "options": [
        "watch",
        "watched",
        "watches",
        "watching"
      ],
      "correctAnswer": "watch",
      "hintExplanation": "Trong câu hỏi quá khứ đã mượn trợ động từ \"Did\", động từ chính giữ nguyên thể: \"Did you watch...?\""
    },
    {
      "id": 3,
      "topic": "comparatives",
      "topicTitle": "So sánh hơn của tính từ ngắn",
      "prompt": "My new school is ______ than my old school.",
      "options": [
        "bigger",
        "big",
        "more big",
        "biggest"
      ],
      "correctAnswer": "bigger",
      "hintExplanation": "Với tính từ ngắn 1 âm tiết \"big\", dạng so sánh hơn gấp đôi phụ âm g và thêm -er thành \"bigger than\"."
    },
    {
      "id": 4,
      "topic": "comparatives",
      "topicTitle": "So sánh hơn của tính từ ngắn",
      "prompt": "An elephant is ______ than a monkey.",
      "options": [
        "heavier",
        "heavy",
        "more heavy",
        "heaviest"
      ],
      "correctAnswer": "heavier",
      "hintExplanation": "Tính từ kết thúc bằng \"y\" (\"heavy\") đổi thành \"i\" rồi thêm \"-er\" thành \"heavier than\"."
    },
    {
      "id": 5,
      "topic": "simple_actions",
      "topicTitle": "Tương lai gần (be going to)",
      "prompt": "What are you going to do this weekend? - We ______ going to visit our grandparents.",
      "options": [
        "are",
        "is",
        "am",
        "do"
      ],
      "correctAnswer": "are",
      "hintExplanation": "Chủ ngữ số nhiều \"We\" đi với to be \"are\" trong cấu trúc \"are going to + V\"."
    },
    {
      "id": 6,
      "topic": "simple_actions",
      "topicTitle": "Hỏi chỉ đường (Directions)",
      "prompt": "Excuse me, ______ can I get to the post office? - Turn left, then go straight.",
      "options": [
        "how",
        "what",
        "where",
        "when"
      ],
      "correctAnswer": "how",
      "hintExplanation": "Dùng câu hỏi \"How can I get to...?\" để hỏi đường đi đến một địa điểm."
    },
    {
      "id": 7,
      "topic": "frequency_adverbs",
      "topicTitle": "Hỏi tần suất với How often",
      "prompt": "How often do you brush your teeth? - I brush them ______ a day.",
      "options": [
        "twice",
        "two",
        "second",
        "two times more"
      ],
      "correctAnswer": "twice",
      "hintExplanation": "\"twice a day\" nghĩa là hai lần một ngày, là trạng từ chỉ tần suất."
    },
    {
      "id": 8,
      "topic": "modal_must_safety",
      "topicTitle": "Động từ khuyết thiếu Must chỉ sự bắt buộc",
      "prompt": "You ______ wear a helmet when riding a motorbike on the road.",
      "options": [
        "must",
        "shouldn't",
        "cannot",
        "mustn't"
      ],
      "correctAnswer": "must",
      "hintExplanation": "\"must\" diễn tả sự bắt buộc, quy định luật pháp an toàn giao thông."
    },
    {
      "id": 9,
      "topic": "past_simple_stories",
      "topicTitle": "Thì Quá khứ đơn trong truyện kể",
      "prompt": "What happened in the story of Tam and Cam? - In the end, Tam ______ a queen.",
      "options": [
        "became",
        "become",
        "becomes",
        "becoming"
      ],
      "correctAnswer": "became",
      "hintExplanation": "Kể chuyện quá khứ dùng dạng quá khứ của \"become\" là \"became\"."
    }
  ],
  "6": [
    {
      "id": 1,
      "topic": "present_simple",
      "topicTitle": "Present Simple (Hiện tại đơn)",
      "prompt": "Nam usually ______ to school by bike with his friends every morning.",
      "options": [
        "go",
        "goes",
        "going",
        "is go"
      ],
      "correctAnswer": "goes",
      "hintExplanation": "Với chủ ngữ ngôi thứ ba số ít (\"Nam\" = He), động từ ở thì Hiện tại đơn cần thêm \"-s\" hoặc \"-es\". Do đó dùng \"goes\"."
    },
    {
      "id": 2,
      "topic": "present_simple",
      "topicTitle": "Present Simple (Hiện tại đơn)",
      "prompt": "My brother ______ like playing football, he prefers reading comic books.",
      "options": [
        "not",
        "doesn't",
        "don't",
        "isn't"
      ],
      "correctAnswer": "doesn't",
      "hintExplanation": "Ở thể phủ định thì Hiện tại đơn với chủ ngữ số ít (\"My brother\"), ta mượn trợ động từ \"does not\" (viết tắt là \"doesn't\") + động từ nguyên mẫu."
    },
    {
      "id": 3,
      "topic": "present_continuous",
      "topicTitle": "Present Continuous (Hiện tại tiếp diễn)",
      "prompt": "Look! The boys ______ chess in the classroom right now.",
      "options": [
        "play",
        "is playing",
        "are playing",
        "are play"
      ],
      "correctAnswer": "are playing",
      "hintExplanation": "Thì Hiện tại tiếp diễn diễn tả hành động đang xảy ra (có dấu hiệu \"Look!\", \"right now\"). Cấu trúc là \"am/is/are + V-ing\". Chủ ngữ số nhiều \"The boys\" đi với \"are playing\"."
    },
    {
      "id": 4,
      "topic": "present_continuous",
      "topicTitle": "Present Continuous (Hiện tại tiếp diễn)",
      "prompt": "Listen! Mai ______ a lovely English song in the music room.",
      "options": [
        "sings",
        "is singing",
        "are singing",
        "singing"
      ],
      "correctAnswer": "is singing",
      "hintExplanation": "Dấu hiệu \"Listen!\" cho biết hành động đang diễn ra ngay lúc nói. Chủ ngữ số ít \"Mai\" cần đi với \"is + V-ing\" thành \"is singing\"."
    },
    {
      "id": 5,
      "topic": "there_is_are",
      "topicTitle": "There is / There are",
      "prompt": "______ two new pens and an eraser on the study table.",
      "options": [
        "There is",
        "There are",
        "There have",
        "There has"
      ],
      "correctAnswer": "There are",
      "hintExplanation": "Ta dùng \"There are\" khi danh từ đứng ngay phía sau là danh từ số nhiều (\"two new pens\"). Tiếng Anh không dùng \"There have/has\" để chỉ sự tồn tại."
    },
    {
      "id": 6,
      "topic": "there_is_are",
      "topicTitle": "There is / There are",
      "prompt": "______ a big television in the living room of your house?",
      "options": [
        "Is there",
        "Are there",
        "There is",
        "Has there"
      ],
      "correctAnswer": "Is there",
      "hintExplanation": "Trong câu hỏi với danh từ số ít (\"a big television\"), ta đảo \"Is\" lên trước \"there\" thành \"Is there...?\"."
    },
    {
      "id": 7,
      "topic": "modal_should_advice",
      "topicTitle": "Lời khuyên với Should / Shouldn't",
      "prompt": "You look tired after a long exam. You ______ go to bed early tonight.",
      "options": [
        "should",
        "shouldn't",
        "must not",
        "cannot"
      ],
      "correctAnswer": "should",
      "hintExplanation": "\"should\" dùng để đưa ra lời khuyên tích cực, tốt cho sức khỏe."
    },
    {
      "id": 8,
      "topic": "prepositions_place_directions",
      "topicTitle": "Giới từ chỉ nơi chốn (between... and...)",
      "prompt": "The community library is located ______ the post office and the green park.",
      "options": [
        "between",
        "among",
        "next",
        "behind of"
      ],
      "correctAnswer": "between",
      "hintExplanation": "Cấu trúc \"between A and B\" nghĩa là ở giữa hai địa điểm."
    },
    {
      "id": 9,
      "topic": "superlative_adjectives",
      "topicTitle": "So sánh nhất của tính từ ngắn (the + adj-est)",
      "prompt": "Mount Everest is the ______ mountain above sea level on Earth.",
      "options": [
        "highest",
        "higher",
        "most high",
        "high"
      ],
      "correctAnswer": "highest",
      "hintExplanation": "So sánh nhất tính từ ngắn: \"the highest\" (cao nhất)."
    },
    {
      "id": 10,
      "topic": "wh_question_words",
      "topicTitle": "Từ để hỏi tần suất How often",
      "prompt": "______ do you visit your grandparents in the countryside? - Once a month.",
      "options": [
        "How often",
        "How long",
        "How far",
        "How much"
      ],
      "correctAnswer": "How often",
      "hintExplanation": "Câu trả lời \"Once a month\" chỉ tần suất, vì vậy từ để hỏi là \"How often\"."
    }
  ],
  "7": [
    {
      "id": 1,
      "topic": "used_to",
      "topicTitle": "Thói quen trong quá khứ với Used to",
      "prompt": "My grandfather ______ walk five kilometers to school when he was young.",
      "options": [
        "used to",
        "is used to",
        "uses to",
        "was use to"
      ],
      "correctAnswer": "used to",
      "hintExplanation": "Cấu trúc \"used to + V-nguyên thể\" diễn tả một thói quen hoặc hành động thường làm trong quá khứ nay không còn nữa."
    },
    {
      "id": 2,
      "topic": "used_to",
      "topicTitle": "Thói quen trong quá khứ với Used to",
      "prompt": "Did they ______ live in a small countryside village ten years ago?",
      "options": [
        "use to",
        "used to",
        "using to",
        "uses to"
      ],
      "correctAnswer": "use to",
      "hintExplanation": "Trong câu nghi vấn đã có trợ động từ \"Did\", cấu trúc chuyển về \"Did + S + use to + V\"."
    },
    {
      "id": 3,
      "topic": "conjunctions",
      "topicTitle": "Liên từ chỉ sự tương phản (Although / In spite of)",
      "prompt": "______ it rained heavily, the students still went camping on time.",
      "options": [
        "Although",
        "Because",
        "Despite",
        "However"
      ],
      "correctAnswer": "Although",
      "hintExplanation": "Sau \"Although\" là một mệnh đề (S + V: \"it rained heavily\") mang nghĩa \"Mặc dù\"."
    },
    {
      "id": 4,
      "topic": "conjunctions",
      "topicTitle": "Liên từ chỉ sự tương phản (Although / However)",
      "prompt": "The movie was very exciting. ______, my brother fell asleep at the end.",
      "options": [
        "However",
        "Although",
        "Because",
        "So"
      ],
      "correctAnswer": "However",
      "hintExplanation": "\"However\" (Tuy nhiên) đứng đầu câu sau dấu chấm và ngăn cách với mệnh đề bằng dấu phẩy."
    },
    {
      "id": 5,
      "topic": "past_simple",
      "topicTitle": "Tính từ đuôi -ed và -ing",
      "prompt": "We were all ______ by the shocking ending of the action film.",
      "options": [
        "surprised",
        "surprising",
        "surprise",
        "surprises"
      ],
      "correctAnswer": "surprised",
      "hintExplanation": "Tính từ đuôi \"-ed\" dùng để diễn tả cảm xúc, tâm trạng của con người trước một sự việc."
    },
    {
      "id": 6,
      "topic": "past_simple",
      "topicTitle": "Khoảng cách với cấu trúc \"It is + distance\"",
      "prompt": "______ about 3 kilometers from my house to the nearest cinema.",
      "options": [
        "It is",
        "There is",
        "It has",
        "This is"
      ],
      "correctAnswer": "It is",
      "hintExplanation": "Để nói về khoảng cách từ nơi này đến nơi khác, ta dùng cấu trúc: \"It is + khoảng cách + from A to B\"."
    },
    {
      "id": 7,
      "topic": "quantifiers_too_enough",
      "topicTitle": "Cấu trúc với Enough (adj + enough to V)",
      "prompt": "My little brother is not old ______ to ride a motorbike to school.",
      "options": [
        "enough",
        "too",
        "so",
        "such"
      ],
      "correctAnswer": "enough",
      "hintExplanation": "Cấu trúc tính từ đứng trước enough: \"adj + enough + (for sb) + to V\" (đủ tuổi để làm gì)."
    },
    {
      "id": 8,
      "topic": "comparisons_different_from",
      "topicTitle": "So sánh khác biệt với Different from",
      "prompt": "Life in a bustling city is quite different ______ life in a peaceful village.",
      "options": [
        "from",
        "with",
        "to",
        "as"
      ],
      "correctAnswer": "from",
      "hintExplanation": "Cụm từ chuẩn diễn tả sự khác biệt là \"different from\" (khác với)."
    },
    {
      "id": 9,
      "topic": "modal_might_possibility",
      "topicTitle": "Động từ khuyết thiếu Might chỉ khả năng trong tương lai",
      "prompt": "Look at those dark clouds! It ______ rain heavily in the late afternoon.",
      "options": [
        "might",
        "must",
        "should",
        "has to"
      ],
      "correctAnswer": "might",
      "hintExplanation": "\"might\" diễn tả một khả năng có thể xảy ra trong tương lai nhưng không hoàn toàn chắc chắn."
    },
    {
      "id": 10,
      "topic": "indefinite_pronouns",
      "topicTitle": "Đại từ bất định trong câu nghi vấn",
      "prompt": "Did you find ______ interesting at the science exhibition yesterday?",
      "options": [
        "anything",
        "something",
        "nothing",
        "everything"
      ],
      "correctAnswer": "anything",
      "hintExplanation": "Trong câu nghi vấn hoặc phủ định, thường dùng đại từ bất định \"anything\"."
    }
  ],
  "8": [
    {
      "id": 1,
      "topic": "present_perfect",
      "topicTitle": "Thì Hiện tại hoàn thành (Present Perfect)",
      "prompt": "We ______ each other since we joined the volunteer club in 2021.",
      "options": [
        "have known",
        "knew",
        "know",
        "are knowing"
      ],
      "correctAnswer": "have known",
      "hintExplanation": "Có mốc thời gian với \"since 2021\", ta dùng thì Hiện tại hoàn thành: \"have/has + V3/ed\" -> \"have known\"."
    },
    {
      "id": 2,
      "topic": "present_perfect",
      "topicTitle": "Thì Hiện tại hoàn thành (Present Perfect)",
      "prompt": "Have you finished your homework ______? - Yes, I have already done it.",
      "options": [
        "yet",
        "already",
        "since",
        "for"
      ],
      "correctAnswer": "yet",
      "hintExplanation": "Từ \"yet\" (chưa) thường đứng ở cuối câu hỏi hoặc câu phủ định của thì Hiện tại hoàn thành."
    },
    {
      "id": 3,
      "topic": "passive_voice",
      "topicTitle": "Câu bị động cơ bản (Passive Voice)",
      "prompt": "English ______ by millions of people all over the world every day.",
      "options": [
        "is spoken",
        "speaks",
        "is speaking",
        "was spoken"
      ],
      "correctAnswer": "is spoken",
      "hintExplanation": "Chủ ngữ \"English\" là vật chịu tác động, ở thì Hiện tại đơn bị động là \"am/is/are + V3/ed\" -> \"is spoken\"."
    },
    {
      "id": 4,
      "topic": "passive_voice",
      "topicTitle": "Câu bị động cơ bản (Passive Voice)",
      "prompt": "This bridge ______ by talented engineers two years ago.",
      "options": [
        "was built",
        "is built",
        "built",
        "were built"
      ],
      "correctAnswer": "was built",
      "hintExplanation": "Dấu hiệu \"two years ago\" là quá khứ đơn, chủ ngữ số ít \"This bridge\" dùng bị động \"was built\"."
    },
    {
      "id": 5,
      "topic": "conditional_sentences",
      "topicTitle": "Câu điều kiện loại 1 (First Conditional)",
      "prompt": "If we ______ recycling plastic bottles, we will protect our environment.",
      "options": [
        "start",
        "will start",
        "started",
        "starting"
      ],
      "correctAnswer": "start",
      "hintExplanation": "Mệnh đề \"If\" trong câu điều kiện loại 1 chia ở thì Hiện tại đơn: \"If + S + V(s/es)\"."
    },
    {
      "id": 6,
      "topic": "conditional_sentences",
      "topicTitle": "Câu điều kiện loại 1 (First Conditional)",
      "prompt": "If it rains tomorrow morning, the football match ______ cancelled.",
      "options": [
        "will be",
        "is",
        "was",
        "would be"
      ],
      "correctAnswer": "will be",
      "hintExplanation": "Mệnh đề chính trong câu điều kiện loại 1 chia ở thì Tương lai đơn: \"S + will + V-nguyên mẫu\"."
    },
    {
      "id": 7,
      "topic": "verbs_gerund_fancy",
      "topicTitle": "Động từ chỉ sở thích đi kèm danh động từ (fancy + V-ing)",
      "prompt": "Mai really fancies ______ origami paper flowers with her best friends on Sundays.",
      "options": [
        "making",
        "make",
        "to make",
        "made"
      ],
      "correctAnswer": "making",
      "hintExplanation": "Động từ \"fancy\" (thích thú) bắt buộc đi với V-ing (danh động từ): \"fancy making\"."
    },
    {
      "id": 8,
      "topic": "reported_speech_yes_no",
      "topicTitle": "Câu tường thuật dạng câu hỏi Yes/No với If / Whether",
      "prompt": "The foreign tourist asked me if I ______ speak English fluently.",
      "options": [
        "could",
        "can",
        "will",
        "may"
      ],
      "correctAnswer": "could",
      "hintExplanation": "Trong câu tường thuật lùi thì, động từ khuyết thiếu \"can\" lùi về \"could\"."
    },
    {
      "id": 9,
      "topic": "articles_the_superlative",
      "topicTitle": "Mạo từ The trước so sánh nhất",
      "prompt": "Phu Quoc is known as ______ largest and most picturesque island in Vietnam.",
      "options": [
        "the",
        "a",
        "an",
        "zero article"
      ],
      "correctAnswer": "the",
      "hintExplanation": "Trước các tính từ so sánh nhất \"largest and most picturesque\" bắt buộc dùng mạo từ \"the\"."
    },
    {
      "id": 10,
      "topic": "conditional_imperative",
      "topicTitle": "Câu điều kiện loại 1 kết hợp câu mệnh lệnh",
      "prompt": "If you feel dizzy during physical education, ______ your teacher immediately.",
      "options": [
        "tell",
        "tells",
        "will tell",
        "told"
      ],
      "correctAnswer": "tell",
      "hintExplanation": "Mệnh đề chính của câu điều kiện loại 1 có thể là một câu mệnh lệnh bắt đầu bằng động từ nguyên thể \"tell\"."
    }
  ],
  "9": [
    {
      "id": 1,
      "topic": "relative_clauses",
      "topicTitle": "Đại từ quan hệ (Who / Which / Whose)",
      "prompt": "The teacher ______ teaches us physics won the national award last week.",
      "options": [
        "who",
        "which",
        "whose",
        "whom"
      ],
      "correctAnswer": "who",
      "hintExplanation": "Đại từ quan hệ \"who\" thay thế cho danh từ chỉ người (\"The teacher\") làm chủ ngữ trong mệnh đề quan hệ."
    },
    {
      "id": 2,
      "topic": "relative_clauses",
      "topicTitle": "Đại từ quan hệ (Who / Which / Whose)",
      "prompt": "This is the book ______ has the most interesting detective stories.",
      "options": [
        "which",
        "who",
        "whom",
        "whose"
      ],
      "correctAnswer": "which",
      "hintExplanation": "Đại từ quan hệ \"which\" thay thế cho danh từ chỉ sự vật (\"the book\")."
    },
    {
      "id": 3,
      "topic": "conjunctions",
      "topicTitle": "Câu tường thuật (Reported Speech)",
      "prompt": "Lan said that she ______ visiting London with her parents the following week.",
      "options": [
        "was",
        "is",
        "will be",
        "has been"
      ],
      "correctAnswer": "was",
      "hintExplanation": "Khi lùi thì trong câu tường thuật gián tiếp từ \"am/is\" thành quá khứ \"was\"."
    },
    {
      "id": 4,
      "topic": "conjunctions",
      "topicTitle": "Câu tường thuật (Reported Speech)",
      "prompt": "He asked me where I ______ from. - I replied that I lived in Da Nang.",
      "options": [
        "came",
        "come",
        "am coming",
        "will come"
      ],
      "correctAnswer": "came",
      "hintExplanation": "Trong câu gián tiếp trần thuật, mệnh đề câu hỏi chuyển về dạng khẳng định và lùi thì: \"where I came from\"."
    },
    {
      "id": 5,
      "topic": "conditional_sentences",
      "topicTitle": "Câu điều kiện loại 2 (Second Conditional)",
      "prompt": "If I ______ a bird, I would fly freely around the world.",
      "options": [
        "were",
        "am",
        "will be",
        "have been"
      ],
      "correctAnswer": "were",
      "hintExplanation": "Trong câu điều kiện loại 2 giả định không có thật ở hiện tại, to be ở mệnh đề If luôn dùng \"were\" cho mọi ngôi."
    },
    {
      "id": 6,
      "topic": "conditional_sentences",
      "topicTitle": "Câu điều kiện loại 2 (Second Conditional)",
      "prompt": "If she had more free time, she ______ learn how to play the violin.",
      "options": [
        "would",
        "will",
        "can",
        "shall"
      ],
      "correctAnswer": "would",
      "hintExplanation": "Mệnh đề chính của câu điều kiện loại 2 có cấu trúc: \"S + would/could + V-nguyên thể\"."
    },
    {
      "id": 7,
      "topic": "wish_present_future",
      "topicTitle": "Câu ước với Wish chỉ điều ước ở hiện tại / tương lai",
      "prompt": "I wish our city ______ more green parks and cycling lanes for teenagers.",
      "options": [
        "had",
        "has",
        "have",
        "will have"
      ],
      "correctAnswer": "had",
      "hintExplanation": "Câu ước cho hiện tại \"S + wish + S + V-ed/V2\": dùng \"had\"."
    },
    {
      "id": 8,
      "topic": "phrasal_verbs_look_up",
      "topicTitle": "Cụm động từ (Phrasal Verbs) tra cứu từ vựng",
      "prompt": "Whenever you encounter an unfamiliar term, you should ______ it in the dictionary.",
      "options": [
        "look up",
        "look after",
        "look for",
        "look into"
      ],
      "correctAnswer": "look up",
      "hintExplanation": "\"look up\" nghĩa là tra cứu (từ điển, thông tin). \"look after\" là chăm sóc, \"look for\" là tìm kiếm."
    },
    {
      "id": 9,
      "topic": "conjunction_purpose_so_that",
      "topicTitle": "Mệnh đề chỉ mục đích với So that",
      "prompt": "Lan practiced speaking English every single day ______ she could win the scholarship.",
      "options": [
        "so that",
        "although",
        "because",
        "despite"
      ],
      "correctAnswer": "so that",
      "hintExplanation": "\"so that + S + modal + V\" dùng để chỉ mục đích (để mà, nhằm mục đích)."
    },
    {
      "id": 10,
      "topic": "reduced_relative_clause",
      "topicTitle": "Mệnh đề quan hệ rút gọn dạng chủ động (V-ing)",
      "prompt": "The young volunteer ______ the street clean-up campaign won high praise from the community.",
      "options": [
        "leading",
        "led",
        "who lead",
        "was leading"
      ],
      "correctAnswer": "leading",
      "hintExplanation": "Mệnh đề quan hệ chủ động \"who was leading\" rút gọn thành hiện tại phân từ \"leading\"."
    }
  ]
};
