import { Question } from './types';
import { GradeLevel } from './components/GradeSelection';

// ------------------------------------------------------------------------------------
// BỘ CÂU HỎI SPEAKING THEO TỪNG LỚP (LỚP 1 ĐẾN LỚP 9)
// Mỗi bài tập gồm từ 8 đến 10 câu phản xạ nói theo câu mẫu chuẩn
// ------------------------------------------------------------------------------------

export const SPEAKING_QUESTIONS_BY_GRADE: Record<GradeLevel, Question[]> = {
  "1": [
    {
      "id": 1,
      "topic": "speaking_greetings_intro",
      "topicTitle": "Chào hỏi & Tự giới thiệu tên",
      "audioScript": "Hello! What is your name?",
      "prompt": "Bạn gặp một người bạn mới hỏi: \"What is your name?\". Bạn sẽ nói thế nào để giới thiệu tên mình?",
      "options": [
        "My name is Tom.",
        "I am seven years old.",
        "Good morning teacher.",
        "This is a red ball."
      ],
      "correctAnswer": "My name is Tom.",
      "hintExplanation": "Để giới thiệu tên khi nói, mẫu câu chuẩn là: \"My name is [Tên của em]\"."
    },
    {
      "id": 2,
      "topic": "speaking_greetings_intro",
      "topicTitle": "Chào hỏi & Tự giới thiệu tên",
      "audioScript": "Nice to meet you!",
      "prompt": "Khi bạn mới nói \"Nice to meet you!\", câu đáp lại lịch sự và vui vẻ của em là:",
      "options": [
        "Nice to meet you too!",
        "Good night!",
        "No, thank you.",
        "I like apples."
      ],
      "correctAnswer": "Nice to meet you too!",
      "hintExplanation": "Khi đối phương nói \"Nice to meet you!\", em đáp lại là: \"Nice to meet you too!\"."
    },
    {
      "id": 3,
      "topic": "speaking_questions_answers",
      "topicTitle": "Nói về đồ vật & Màu sắc",
      "audioScript": "What is this? It is a book.",
      "prompt": "Cô giáo chỉ vào quả bóng màu vàng và hỏi: \"What is this?\". Em sẽ trả lời thế nào?",
      "options": [
        "It is a yellow ball.",
        "I am fine, thank you.",
        "Yes, it is.",
        "She is my mother."
      ],
      "correctAnswer": "It is a yellow ball.",
      "hintExplanation": "Khi trả lời về đồ vật mang màu sắc, ta nói: \"It is a + màu sắc + đồ vật\" -> \"It is a yellow ball\"."
    },
    {
      "id": 4,
      "topic": "speaking_questions_answers",
      "topicTitle": "Nói về đồ vật & Màu sắc",
      "audioScript": "What color do you like? I like blue.",
      "prompt": "Bạn hỏi: \"What color is your pencil?\". Chiếc bút chì màu xanh lam, em nói thế nào?",
      "options": [
        "It is blue.",
        "It is big.",
        "It is five.",
        "It is cat."
      ],
      "correctAnswer": "It is blue.",
      "hintExplanation": "Khi nói về màu sắc của đồ vật số ít, ta dùng: \"It is + màu sắc\" -> \"It is blue\"."
    },
    {
      "id": 5,
      "topic": "speaking_classroom_commands",
      "topicTitle": "Chào tạm biệt & Lời cảm ơn",
      "audioScript": "Here is a candy for you. Thank you!",
      "prompt": "Khi được cô giáo khen và tặng một hình dán bé ngoan, em sẽ nói gì?",
      "options": [
        "Thank you, teacher!",
        "Goodbye, see you!",
        "I do not know.",
        "Sorry, teacher."
      ],
      "correctAnswer": "Thank you, teacher!",
      "hintExplanation": "Khi nhận được quà hoặc lời khen, câu nói lịch sự luôn là \"Thank you!\"."
    },
    {
      "id": 6,
      "topic": "speaking_classroom_commands",
      "topicTitle": "Chào tạm biệt & Lời cảm ơn",
      "audioScript": "Goodbye class! See you tomorrow.",
      "prompt": "Hết giờ học, trước khi về nhà, em chào cô giáo như thế nào?",
      "options": [
        "Goodbye, see you tomorrow!",
        "Good morning, teacher!",
        "I am ready!",
        "Sit down, please!"
      ],
      "correctAnswer": "Goodbye, see you tomorrow!",
      "hintExplanation": "Khi ra về, câu chào tạm biệt đúng và lễ phép là \"Goodbye, see you tomorrow!\"."
    },
    {
      "id": 7,
      "topic": "speaking_polite_thanks",
      "topicTitle": "Nói lời cảm ơn lịch sự khi nhận quà",
      "audioScript": "Thank you very much!",
      "prompt": "Bạn được cô giáo thưởng một hình dán ngôi sao đẹp. Bạn sẽ nói câu gì thật lễ phép?",
      "options": [
        "Thank you very much!",
        "Goodbye teacher!",
        "I am seven years old.",
        "This is a blue pen."
      ],
      "correctAnswer": "Thank you very much!",
      "hintExplanation": "Nói \"Thank you very much!\" (Em cảm ơn cô rất nhiều) là lời cảm ơn lễ phép."
    },
    {
      "id": 8,
      "topic": "speaking_farewells",
      "topicTitle": "Nói lời chào tạm biệt khi tan học",
      "audioScript": "Goodbye! See you tomorrow!",
      "prompt": "Khi tan học ra về, bạn nói câu nào với bạn bè và thầy cô?",
      "options": [
        "Goodbye! See you tomorrow!",
        "Good morning!",
        "What is your name?",
        "How are you?"
      ],
      "correctAnswer": "Goodbye! See you tomorrow!",
      "hintExplanation": "\"Goodbye! See you tomorrow!\" (Tạm biệt, hẹn gặp lại bạn vào ngày mai nhé!) là lời chào chuẩn."
    }
  ],
  "2": [
    {
      "id": 1,
      "topic": "speaking_greetings_intro",
      "topicTitle": "Giới thiệu thành viên gia đình",
      "audioScript": "Who is this? This is my mother. She is very gentle.",
      "prompt": "Bạn đến nhà chơi và hỏi: \"Who is that?\". Em muốn giới thiệu bố của mình, em nói gì?",
      "options": [
        "This is my father. He is tall.",
        "This is my cat. It is small.",
        "I have two brothers.",
        "She is my sister."
      ],
      "correctAnswer": "This is my father. He is tall.",
      "hintExplanation": "Với bố (phái nam), ta dùng đại từ \"He\" khi nói: \"This is my father. He is...\"."
    },
    {
      "id": 2,
      "topic": "speaking_greetings_intro",
      "topicTitle": "Giới thiệu thành viên gia đình",
      "audioScript": "Is she your grandmother? Yes, she is.",
      "prompt": "Bạn hỏi: \"Is that your baby sister?\". Đúng là em gái của em, câu trả lời tự nhiên là:",
      "options": [
        "Yes, she is.",
        "No, he is not.",
        "Yes, it does.",
        "She is playing."
      ],
      "correctAnswer": "Yes, she is.",
      "hintExplanation": "Với câu hỏi \"Is that your baby sister?\", câu trả lời ngắn chuẩn xác là \"Yes, she is.\"."
    },
    {
      "id": 3,
      "topic": "speaking_classroom_commands",
      "topicTitle": "Mệnh lệnh & Xin phép trong lớp",
      "audioScript": "May I go out, teacher? Yes, you may.",
      "prompt": "Trong giờ học, em muốn xin phép cô giáo ra ngoài uống nước, em sẽ nói câu nào?",
      "options": [
        "May I go out, teacher?",
        "Can I eat, teacher?",
        "You can go out.",
        "I go out now."
      ],
      "correctAnswer": "May I go out, teacher?",
      "hintExplanation": "Khi xin phép thầy cô trong lớp học, mẫu câu chuẩn lịch sự nhất là: \"May I go out, please?\"."
    },
    {
      "id": 4,
      "topic": "speaking_classroom_commands",
      "topicTitle": "Mệnh lệnh & Xin phép trong lớp",
      "audioScript": "May I come in? Come in, please!",
      "prompt": "Em đến lớp và muốn xin phép thầy giáo bước vào lớp học, em nói:",
      "options": [
        "May I come in, teacher?",
        "Please sit down.",
        "Stand up please.",
        "Open your book."
      ],
      "correctAnswer": "May I come in, teacher?",
      "hintExplanation": "Mẫu câu xin phép bước vào phòng học là: \"May I come in?\"."
    },
    {
      "id": 5,
      "topic": "speaking_questions_answers",
      "topicTitle": "Nói về sở thích con vật & Đồ ăn",
      "audioScript": "Do you like dogs? Yes, I do. They are friendly.",
      "prompt": "Bạn hỏi em: \"Do you like rabbits?\". Em rất thích thỏ, câu trả lời của em là:",
      "options": [
        "Yes, I do. I love rabbits.",
        "No, I don not.",
        "It is a dog.",
        "I am seven years old."
      ],
      "correctAnswer": "Yes, I do. I love rabbits.",
      "hintExplanation": "Với câu hỏi \"Do you like...?\", câu trả lời khẳng định là \"Yes, I do.\"."
    },
    {
      "id": 6,
      "topic": "speaking_questions_answers",
      "topicTitle": "Nói về sở thích con vật & Đồ ăn",
      "audioScript": "What is your favorite fruit? I love sweet bananas.",
      "prompt": "Bạn hỏi: \"What fruit do you like?\". Em thích ăn táo nhất, em diễn đạt thế nào?",
      "options": [
        "I like red apples.",
        "I like playing soccer.",
        "Apples is red.",
        "I have three pens."
      ],
      "correctAnswer": "I like red apples.",
      "hintExplanation": "Mẫu câu nói về món mình yêu thích là \"I like + danh từ số nhiều\" -> \"I like red apples\"."
    },
    {
      "id": 7,
      "topic": "speaking_body_actions",
      "topicTitle": "Nói về khả năng vận động cơ thể",
      "audioScript": "I can touch my toes and jump high!",
      "prompt": "Bạn muốn nói rằng mình có thể chạm tay vào ngón chân và nhảy cao, bạn sẽ nói:",
      "options": [
        "I can touch my toes and jump high!",
        "I have two yellow pencils.",
        "My mother is cooking in the kitchen.",
        "This is an apple."
      ],
      "correctAnswer": "I can touch my toes and jump high!",
      "hintExplanation": "\"I can touch my toes and jump high!\" diễn đạt khả năng cử động của cơ thể."
    },
    {
      "id": 8,
      "topic": "speaking_polite_permission",
      "topicTitle": "Xin phép cô giáo ra ngoài lớp học",
      "audioScript": "May I go out, please?",
      "prompt": "Trong giờ học, bạn muốn xin phép cô giáo cho ra ngoài uống nước, bạn nói:",
      "options": [
        "May I go out, please?",
        "Stand up please!",
        "Open your book now!",
        "What is this?"
      ],
      "correctAnswer": "May I go out, please?",
      "hintExplanation": "\"May I go out, please?\" là mẫu câu xin phép lịch sự chuẩn quốc tế trong lớp học."
    }
  ],
  "3": [
    {
      "id": 1,
      "topic": "speaking_questions_answers",
      "topicTitle": "Hỏi & Chỉ vị trí đồ vật",
      "audioScript": "Where is my school bag? It is under the desk.",
      "prompt": "Em không thấy hộp bút và muốn hỏi bạn: \"Hộp bút của tớ ở đâu vậy?\", em sẽ nói câu nào?",
      "options": [
        "Where is my pencil case?",
        "What is my pencil case?",
        "How is my pencil case?",
        "When is my pencil case?"
      ],
      "correctAnswer": "Where is my pencil case?",
      "hintExplanation": "Hỏi vị trí của đồ vật ta dùng từ để hỏi \"Where\": \"Where is my pencil case?\"."
    },
    {
      "id": 2,
      "topic": "speaking_questions_answers",
      "topicTitle": "Hỏi & Chỉ vị trí đồ vật",
      "audioScript": "The cat is sleeping on the sofa.",
      "prompt": "Bạn hỏi: \"Where are the colorful notebooks?\". Những cuốn vở nằm trên bàn học, em trả lời:",
      "options": [
        "They are on the desk.",
        "It is on the desk.",
        "They are under desk.",
        "There is on the desk."
      ],
      "correctAnswer": "They are on the desk.",
      "hintExplanation": "Vì \"the colorful notebooks\" là danh từ số nhiều nên khi trả lời ta dùng \"They are on the desk.\"."
    },
    {
      "id": 3,
      "topic": "speaking_grammar_habits",
      "topicTitle": "Nói về năng khiếu & Khả năng (Can / Can't)",
      "audioScript": "Can you ride a bicycle? Yes, I can ride it very well.",
      "prompt": "Bạn hỏi: \"Can you swim across the pool?\". Em không biết bơi, em trả lời thế nào?",
      "options": [
        "No, I cannot.",
        "No, I do not.",
        "Yes, I can.",
        "I am not swim."
      ],
      "correctAnswer": "No, I cannot.",
      "hintExplanation": "Với câu hỏi \"Can you...?\", câu phủ định chuẩn xác là: \"No, I cannot.\" (hoặc \"No, I can't.\")."
    },
    {
      "id": 4,
      "topic": "speaking_grammar_habits",
      "topicTitle": "Nói về năng khiếu & Khả năng (Can / Can't)",
      "audioScript": "My sister can sing beautifully, but she cannot play the piano.",
      "prompt": "Em muốn tự tin khoe với các bạn: \"Tớ có thể nói tiếng Anh và vẽ tranh\", em nói:",
      "options": [
        "I can speak English and draw pictures.",
        "I am speak English and draw.",
        "I can speaking English.",
        "I cannot draw pictures."
      ],
      "correctAnswer": "I can speak English and draw pictures.",
      "hintExplanation": "Sau \"can\" ta luôn dùng động từ nguyên thể không \"to\": \"I can speak... and draw...\"."
    },
    {
      "id": 5,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Hỏi thăm sức khỏe & Thể hiện cảm xúc",
      "audioScript": "How are you feeling today? I have a headache.",
      "prompt": "Thấy bạn có vẻ mệt mỏi, em muốn hỏi thăm bạn một cách thân thiện, em nói gì?",
      "options": [
        "Are you okay? How are you feeling?",
        "What are you doing?",
        "Where do you go?",
        "How old are you?"
      ],
      "correctAnswer": "Are you okay? How are you feeling?",
      "hintExplanation": "Để hỏi thăm sức khỏe và sự ổn định của bạn, ta nói: \"Are you okay? How are you feeling?\"."
    },
    {
      "id": 6,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Hỏi thăm sức khỏe & Thể hiện cảm xúc",
      "audioScript": "I am so happy because today is my birthday!",
      "prompt": "Hôm nay bạn nhận được điểm 10 và rất vui mừng. Khi nói về cảm xúc của mình, bạn nói:",
      "options": [
        "I feel very happy and excited!",
        "I am having a headache.",
        "I do not like exams.",
        "My pencil is broken."
      ],
      "correctAnswer": "I feel very happy and excited!",
      "hintExplanation": "Để nói cảm xúc vui mừng, cấu trúc là \"I feel + tính từ\": \"I feel very happy and excited!\"."
    },
    {
      "id": 7,
      "topic": "speaking_ordering_food_drink",
      "topicTitle": "Nói yêu cầu gọi đồ uống lịch sự",
      "audioScript": "Can I have some orange juice, please?",
      "prompt": "Khi đi vào căng tin, bạn muốn gọi một cốc nước cam tươi, bạn sẽ nói:",
      "options": [
        "Can I have some orange juice, please?",
        "Give me orange juice now.",
        "I don't like water.",
        "Where is the cat?"
      ],
      "correctAnswer": "Can I have some orange juice, please?",
      "hintExplanation": "Cấu trúc \"Can I have..., please?\" là cách gọi đồ lịch sự nhất."
    },
    {
      "id": 8,
      "topic": "speaking_hobbies_sports",
      "topicTitle": "Nói về môn thể thao yêu thích cuối tuần",
      "audioScript": "I love playing football with my friends on Saturday afternoon.",
      "prompt": "Bạn muốn chia sẻ sở thích đá bóng cùng bạn bè vào chiều thứ Bảy, bạn nói câu nào?",
      "options": [
        "I love playing football with my friends on Saturday afternoon.",
        "I go to school on Monday.",
        "My father is a doctor.",
        "There are four chairs in my room."
      ],
      "correctAnswer": "I love playing football with my friends on Saturday afternoon.",
      "hintExplanation": "\"I love playing football with my friends on Saturday afternoon.\" diễn đạt sở thích và thời gian chi tiết."
    }
  ],
  "4": [
    {
      "id": 1,
      "topic": "speaking_grammar_habits",
      "topicTitle": "Hỏi & Trả lời về thời gian biểu",
      "audioScript": "What time do you wake up every morning? I wake up at six o'clock.",
      "prompt": "Bạn hỏi: \"What time do you usually eat dinner?\". Em ăn tối lúc 7 giờ tối, em trả lời:",
      "options": [
        "I usually have dinner at seven o'clock in the evening.",
        "I eat dinner on seven o'clock.",
        "It is seven dinner.",
        "I have dinner in Monday."
      ],
      "correctAnswer": "I usually have dinner at seven o'clock in the evening.",
      "hintExplanation": "Khi nói mốc giờ giấc cụ thể, ta dùng giới từ \"at\": \"at seven o'clock\"."
    },
    {
      "id": 2,
      "topic": "speaking_grammar_habits",
      "topicTitle": "Hỏi & Trả lời về thời gian biểu",
      "audioScript": "When do we have Science class? We have it on Thursday.",
      "prompt": "Bạn muốn hỏi: \"Lớp mình có tiết Tiếng Anh vào khi nào?\", câu nói chuẩn ngữ pháp là:",
      "options": [
        "When do we have English class?",
        "Where do we have English?",
        "How much is English class?",
        "Who has English class?"
      ],
      "correctAnswer": "When do we have English class?",
      "hintExplanation": "Hỏi về thời điểm, ngày diễn ra một sự việc ta dùng \"When do we have...?\"."
    },
    {
      "id": 3,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Nói về môn học & Lý do yêu thích",
      "audioScript": "Why do you like Art? Because I love painting colorful pictures.",
      "prompt": "Bạn hỏi: \"Why do you like Math?\". Em muốn trả lời \"Bởi vì môn Toán rất thú vị\", em nói:",
      "options": [
        "Because Math is very interesting and fun.",
        "Although Math is hard.",
        "So Math is good.",
        "But Math is boring."
      ],
      "correctAnswer": "Because Math is very interesting and fun.",
      "hintExplanation": "Khi trả lời cho câu hỏi lý do \"Why...?\", ta bắt đầu bằng \"Because + mệnh đề giải thích\"."
    },
    {
      "id": 4,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Nói về môn học & Lý do yêu thích",
      "audioScript": "What subject do you like best? My favorite subject is Music.",
      "prompt": "Em muốn bày tỏ với bạn môn học yêu thích nhất của mình là Lịch sử, em diễn đạt thế nào?",
      "options": [
        "My favorite subject is History.",
        "I am History best.",
        "History likes me.",
        "I do not like History."
      ],
      "correctAnswer": "My favorite subject is History.",
      "hintExplanation": "Mẫu câu khẩu ngữ chuẩn để chia sẻ môn học yêu thích là: \"My favorite subject is [Tên môn]\"."
    },
    {
      "id": 5,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Hỏi đường & Nhờ trợ giúp khi không hiểu",
      "audioScript": "Excuse me, where is the library? Go straight and turn left.",
      "prompt": "Một bạn học sinh mới chưa biết phòng thư viện ở đâu, bạn ấy sẽ hỏi bác bảo vệ câu nào lịch sự nhất?",
      "options": [
        "Excuse me, could you tell me where the library is?",
        "Where library is now?",
        "You show me library!",
        "Why is the library?"
      ],
      "correctAnswer": "Excuse me, could you tell me where the library is?",
      "hintExplanation": "Khi hỏi đường một cách lịch sự, ta mở đầu bằng \"Excuse me, could you tell me where [địa điểm] is?\"."
    },
    {
      "id": 6,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Hỏi đường & Nhờ trợ giúp khi không hiểu",
      "audioScript": "Pardon me? Could you speak a little louder, please?",
      "prompt": "Trong lớp ồn ào, bạn nói một từ mới khiến em nghe chưa rõ. Câu khẩu ngữ lịch sự để nhờ bạn nói to hơn là:",
      "options": [
        "Could you speak a little louder, please?",
        "Speak loud now!",
        "Why are you whispering?",
        "I cannot understand words."
      ],
      "correctAnswer": "Could you speak a little louder, please?",
      "hintExplanation": "Dùng \"Could you speak a little louder, please?\" là cách diễn đạt nói vừa tôn trọng vừa rõ ràng."
    },
    {
      "id": 7,
      "topic": "speaking_asking_prices_shop",
      "topicTitle": "Hỏi giá tiền khi mua sắm đồ dùng học tập",
      "audioScript": "Excuse me, how much is this pencil case?",
      "prompt": "Bạn ở nhà sách và muốn hỏi giá chiếc hộp bút xinh xắn, bạn nói:",
      "options": [
        "Excuse me, how much is this pencil case?",
        "Where is the pencil case?",
        "What color is this pencil case?",
        "Do you have a pencil case?"
      ],
      "correctAnswer": "Excuse me, how much is this pencil case?",
      "hintExplanation": "\"Excuse me, how much is this pencil case?\" là câu hỏi giá tiền chuẩn xác."
    },
    {
      "id": 8,
      "topic": "speaking_giving_compliments",
      "topicTitle": "Khen ngợi bức vẽ của bạn",
      "audioScript": "What a beautiful painting! You are very artistic!",
      "prompt": "Bạn thấy bạn mình vẽ một bức tranh phong cảnh rất đẹp, bạn nói câu khen ngợi nào?",
      "options": [
        "What a beautiful painting! You are very artistic!",
        "Your painting is very small.",
        "I want to draw a dog.",
        "How many colors are there?"
      ],
      "correctAnswer": "What a beautiful painting! You are very artistic!",
      "hintExplanation": "Cấu trúc câu cảm thán \"What a + adj + noun!\" khen ngợi chân thành."
    },
    {
      "id": 9,
      "topic": "speaking_describing_past_vacation",
      "topicTitle": "Kể lại chuyến du lịch hè đáng nhớ",
      "audioScript": "Last summer, I visited Da Nang and swam at My Khe beach.",
      "prompt": "Bạn muốn kể với cả lớp về chuyến du lịch Đà Nẵng mùa hè vừa qua, bạn nói:",
      "options": [
        "Last summer, I visited Da Nang and swam at My Khe beach.",
        "I will go to Da Nang next year.",
        "Da Nang is a city in Vietnam.",
        "Do you want to visit Da Nang?"
      ],
      "correctAnswer": "Last summer, I visited Da Nang and swam at My Khe beach.",
      "hintExplanation": "Dùng thì quá khứ đơn \"visited\", \"swam\" để kể về chuyến đi đã diễn ra mùa hè trước."
    }
  ],
  "5": [
    {
      "id": 1,
      "topic": "speaking_past_stories",
      "topicTitle": "Kể về chuyến đi trong quá khứ",
      "audioScript": "Where did you go last summer holiday? I visited Phu Quoc island with my family.",
      "prompt": "Bạn hỏi: \"Where did you go last summer?\". Mùa hè trước em đã đi du lịch Đà Nẵng, em trả lời thế nào?",
      "options": [
        "I went to Da Nang with my family.",
        "I go to Da Nang with family.",
        "I will visit Da Nang.",
        "I am going to Da Nang."
      ],
      "correctAnswer": "I went to Da Nang with my family.",
      "hintExplanation": "Với \"last summer\" trong câu hỏi quá khứ (\"Where did you go...?\"), động từ \"go\" chuyển thành \"went\"."
    },
    {
      "id": 2,
      "topic": "speaking_past_stories",
      "topicTitle": "Kể về chuyến đi trong quá khứ",
      "audioScript": "How did you get there? We traveled by plane.",
      "prompt": "Bạn hỏi về phương tiện di chuyển: \"How did you get to the beach?\". Em đi bằng tàu hỏa, câu trả lời là:",
      "options": [
        "We went there by train.",
        "We go on train.",
        "We travel with train.",
        "We are by train."
      ],
      "correctAnswer": "We went there by train.",
      "hintExplanation": "Kể lại việc đã xảy ra, dùng thì Quá khứ đơn: \"We went there by train\" (Đi bằng phương tiện dùng \"by + phương tiện\")."
    },
    {
      "id": 3,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Đưa ra lời khuyên với Should / Shouldn't",
      "audioScript": "I have a sore throat. You should drink warm water and rest.",
      "prompt": "Bạn của em bị đau răng (\"I have a bad toothache\"). Lời khuyên bằng tiếng Anh phù hợp và đúng ngữ pháp nhất là:",
      "options": [
        "You should see a dentist soon.",
        "You should eating many candies.",
        "You shouldn't go to the hospital.",
        "You are seeing dentist."
      ],
      "correctAnswer": "You should see a dentist soon.",
      "hintExplanation": "Đưa ra lời khuyên dùng \"You should + V-nguyên thể\" -> \"You should see a dentist soon\"."
    },
    {
      "id": 4,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Đưa ra lời khuyên với Should / Shouldn't",
      "audioScript": "You shouldn't stay up too late before the exam day.",
      "prompt": "Em muốn khuyên em trai không nên chơi trò chơi điện tử quá nhiều giờ, em nói câu nào?",
      "options": [
        "You shouldn't play video games for too long.",
        "You should play games all day.",
        "You do not playing games.",
        "You must playing video games."
      ],
      "correctAnswer": "You shouldn't play video games for too long.",
      "hintExplanation": "Khuyên không nên làm gì dùng: \"You shouldn't + V-nguyên thể\" -> \"You shouldn't play video games for too long\"."
    },
    {
      "id": 5,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Ước mơ nghề nghiệp tương lai",
      "audioScript": "What would you like to be in the future? I would like to be an architect.",
      "prompt": "Thầy giáo hỏi: \"What would you like to be in the future?\". Em ước mơ làm bác sĩ cứu người, em trả lời:",
      "options": [
        "I would like to be a doctor because I want to help sick people.",
        "I like doctor.",
        "I am a doctor yesterday.",
        "I want being doctor."
      ],
      "correctAnswer": "I would like to be a doctor because I want to help sick people.",
      "hintExplanation": "Mẫu câu trang trọng và hoàn chỉnh khi nói về ước mơ nghề nghiệp là: \"I would like to be a/an + nghề nghiệp\"."
    },
    {
      "id": 6,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Hỏi lại khi gặp từ chỉ nghề nghiệp lạ",
      "audioScript": "My uncle is an entomologist. What does that mean?",
      "prompt": "Bạn nói chú của bạn là một \"entomologist\" (nhà côn trùng học), một từ em chưa từng nghe. Em hỏi lại tự nhiên thế nào?",
      "options": [
        "That sounds interesting! What does \"entomologist\" mean?",
        "Why do you say that strange word?",
        "I hate that word.",
        "Spell it right now!"
      ],
      "correctAnswer": "That sounds interesting! What does \"entomologist\" mean?",
      "hintExplanation": "Khi gặp từ mới lạ trong giao tiếp nói, câu phản xạ thông minh và đúng ngữ pháp là: \"What does [từ mới] mean?\"."
    },
    {
      "id": 7,
      "topic": "speaking_asking_directions",
      "topicTitle": "Hỏi đường đến bưu điện gần nhất",
      "audioScript": "Excuse me, could you tell me the way to the nearest post office?",
      "prompt": "Bạn đang ở trên phố và muốn hỏi đường tới bưu điện gần nhất, bạn sẽ nói:",
      "options": [
        "Excuse me, could you tell me the way to the nearest post office?",
        "Where do you go today?",
        "The post office is very far.",
        "I want to buy some stamps."
      ],
      "correctAnswer": "Excuse me, could you tell me the way to the nearest post office?",
      "hintExplanation": "\"Excuse me, could you tell me the way to...?\" là mẫu câu hỏi đường lịch sự nhất."
    },
    {
      "id": 8,
      "topic": "speaking_health_giving_advice",
      "topicTitle": "Khuyên bạn khi bạn bị đau họng",
      "audioScript": "You have a sore throat. You should drink warm water and rest your voice.",
      "prompt": "Bạn thân của bạn bị đau họng và khàn tiếng. Bạn đưa ra lời khuyên nào?",
      "options": [
        "You have a sore throat. You should drink warm water and rest your voice.",
        "You should drink iced soda and shout loudly.",
        "Why don't you eat cold ice cream?",
        "Let's go swimming in the rain."
      ],
      "correctAnswer": "You have a sore throat. You should drink warm water and rest your voice.",
      "hintExplanation": "Lời khuyên đúng y khoa và ngữ pháp: \"drink warm water and rest your voice\"."
    },
    {
      "id": 9,
      "topic": "speaking_talking_about_dreams",
      "topicTitle": "Nói về ước mơ nghề nghiệp tương lai",
      "audioScript": "In the future, I want to become an environmental scientist to protect our planet.",
      "prompt": "Bạn muốn bày tỏ ước mơ trở thành nhà khoa học môi trường bảo vệ Trái Đất:",
      "options": [
        "In the future, I want to become an environmental scientist to protect our planet.",
        "My father is a scientist.",
        "Science is my favorite subject.",
        "Do you like the Earth?"
      ],
      "correctAnswer": "In the future, I want to become an environmental scientist to protect our planet.",
      "hintExplanation": "\"In the future, I want to become an environmental scientist to protect our planet.\" nêu rõ ước mơ và mục đích cao đẹp."
    }
  ],
  "6": [
    {
      "id": 1,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Phản xạ khi người nói dùng từ ngữ em nghe chưa rõ",
      "audioScript": "Sorry, I did not catch that. Could you please say that again more slowly?",
      "prompt": "Khi đang trò chuyện bằng tiếng Anh mà đối phương nói nhanh hoặc dùng từ em nghe chưa kịp, câu phản xạ lịch sự và tự nhiên nhất là:",
      "options": [
        "Could you please say that again more slowly?",
        "Why you speak so fast?",
        "What you are saying?",
        "Do not talk to me now."
      ],
      "correctAnswer": "Could you please say that again more slowly?",
      "hintExplanation": "Trong giao tiếp nói tiếng Anh, khi nghe chưa kịp hoặc chưa rõ, câu phản xạ chuẩn ngữ pháp và lịch sự nhất là: \"Could you please say that again more slowly?\"."
    },
    {
      "id": 2,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Phản xạ khi gặp từ không quen thuộc trong lúc nói",
      "audioScript": "The climate in this region is semi-arid during the dry season.",
      "prompt": "Người bạn nói một từ bạn nghe chưa kịp hoặc chưa rõ cách viết. Câu khẩu ngữ lịch sự chuẩn ngữ pháp để nhờ bạn đánh vần từ đó là:",
      "options": [
        "Could you spell that word for me, please?",
        "Can you spelling that word for me?",
        "Do you spell that word please?",
        "Are you spell that word for me?"
      ],
      "correctAnswer": "Could you spell that word for me, please?",
      "hintExplanation": "Trong giao tiếp nói, dùng \"Could you + V-nguyên thể\" (Could you spell that word for me, please?) là câu nhờ vả lịch sự nhất."
    },
    {
      "id": 3,
      "topic": "speaking_grammar_habits",
      "topicTitle": "Ngữ pháp khẩu ngữ: Thói quen vs Hành động đang diễn ra",
      "audioScript": "Tell me about your daily routine! What do you do before school?",
      "prompt": "Bạn đang chia sẻ về thói quen buổi sáng của mình: \"Every morning, I ______ up early, eat breakfast, and walk to school.\"",
      "options": [
        "get",
        "am getting",
        "gets",
        "got"
      ],
      "correctAnswer": "get",
      "hintExplanation": "Khi nói về thói quen hàng ngày (\"Every morning\") với chủ ngữ \"I\", ta chia động từ ở Hiện tại đơn nguyên thể: \"I get up early\"."
    },
    {
      "id": 4,
      "topic": "speaking_grammar_habits",
      "topicTitle": "Ngữ pháp khẩu ngữ: Thói quen vs Hành động đang diễn ra",
      "audioScript": "Listen carefully! Someone is knocking on the front door right now.",
      "prompt": "Trong cuộc trò chuyện, bạn muốn lưu ý bạn mình: \"Look! The teacher ______ into our classroom.\"",
      "options": [
        "is walking",
        "walks",
        "walk",
        "was walking"
      ],
      "correctAnswer": "is walking",
      "hintExplanation": "Từ gây chú ý \"Look!\" báo hiệu hành động đang diễn ra ngay lúc nói, chủ ngữ \"The teacher\" đi với \"is walking\"."
    },
    {
      "id": 5,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Trình bày quan điểm & Đưa ra lý do khi nói",
      "audioScript": "In my opinion, living in a peaceful countryside has many health benefits.",
      "prompt": "Trong buổi thảo luận trên lớp, bạn muốn mở đầu để bày tỏ ý kiến cá nhân: \"In my opinion, learning foreign languages ______ very exciting.\"",
      "options": [
        "is",
        "are",
        "be",
        "being"
      ],
      "correctAnswer": "is",
      "hintExplanation": "Cụm danh động từ \"learning foreign languages\" (việc học ngoại ngữ) là chủ ngữ số ít nên đi với động từ to be \"is\"."
    },
    {
      "id": 6,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Trình bày quan điểm & Đưa ra lý do khi nói",
      "audioScript": "Why do you prefer cycling to school? Because it keeps me fit and protects the air.",
      "prompt": "Bạn muốn giải thích lý do mình thích tham gia câu lạc bộ tiếng Anh: \"I love the English club ______ it helps me communicate more confidently.\"",
      "options": [
        "because",
        "although",
        "so",
        "but"
      ],
      "correctAnswer": "because",
      "hintExplanation": "Dùng liên từ \"because\" (bởi vì) để nối câu giải thích lý do khi giao tiếp nói: \"because it helps me...\"."
    },
    {
      "id": 7,
      "topic": "speaking_making_suggestions",
      "topicTitle": "Đưa ra lời rủ bạn cùng làm việc nhóm (Why don't we...)",
      "audioScript": "Why don't we work on our science project together this afternoon?",
      "prompt": "Bạn muốn rủ bạn cùng làm dự án khoa học vào chiều nay, bạn dùng mẫu câu rủ rê gợi ý nào?",
      "options": [
        "Why don't we work on our science project together this afternoon?",
        "You must do the science project alone.",
        "I don't like science projects.",
        "Science is difficult."
      ],
      "correctAnswer": "Why don't we work on our science project together this afternoon?",
      "hintExplanation": "Cấu trúc \"Why don't we + V...?\" dùng để đưa ra lời gợi ý thân mật, tự nhiên."
    },
    {
      "id": 8,
      "topic": "speaking_describing_best_friend",
      "topicTitle": "Miêu tả ngoại hình và tính cách bạn thân",
      "audioScript": "My best friend Minh is tall with warm brown eyes, and he is exceptionally humorous.",
      "prompt": "Khi giới thiệu về người bạn thân nhất của mình trước lớp, bạn nói:",
      "options": [
        "My best friend Minh is tall with warm brown eyes, and he is exceptionally humorous.",
        "Minh has a black school bag.",
        "I met Minh three years ago.",
        "Minh lives in a house."
      ],
      "correctAnswer": "My best friend Minh is tall with warm brown eyes, and he is exceptionally humorous.",
      "hintExplanation": "Kết hợp miêu tả ngoại hình \"tall with warm brown eyes\" và tính cách \"exceptionally humorous\"."
    },
    {
      "id": 9,
      "topic": "speaking_expressing_opinions",
      "topicTitle": "Bày tỏ quan điểm cá nhân về việc đi xe đạp",
      "audioScript": "In my opinion, cycling to school helps reduce air pollution and keeps us fit.",
      "prompt": "Bạn muốn nêu quan điểm về lợi ích của việc đạp xe đến trường, bạn nói:",
      "options": [
        "In my opinion, cycling to school helps reduce air pollution and keeps us fit.",
        "Bicycles are cheaper than cars.",
        "My bicycle is blue and silver.",
        "I rode my bike yesterday."
      ],
      "correctAnswer": "In my opinion, cycling to school helps reduce air pollution and keeps us fit.",
      "hintExplanation": "\"In my opinion, cycling to school helps reduce air pollution and keeps us fit.\" nêu rõ quan điểm thuyết phục."
    },
    {
      "id": 10,
      "topic": "speaking_introducing_local_food",
      "topicTitle": "Giới thiệu món ăn đặc sản quê hương cho khách nước ngoài",
      "audioScript": "You definitely must try Pho Bo, our signature beef noodle soup with fragrant herbs.",
      "prompt": "Bạn gặp một khách du lịch nước ngoài và muốn giới thiệu món Phở bò đặc sản, bạn nói:",
      "options": [
        "You definitely must try Pho Bo, our signature beef noodle soup with fragrant herbs.",
        "We have many restaurants in Hanoi.",
        "Do you eat beef or chicken?",
        "Beef noodle soup is hot."
      ],
      "correctAnswer": "You definitely must try Pho Bo, our signature beef noodle soup with fragrant herbs.",
      "hintExplanation": "\"You definitely must try...\" là cách giới thiệu nồng hậu, hiếu khách."
    }
  ],
  "7": [
    {
      "id": 1,
      "topic": "speaking_past_stories",
      "topicTitle": "Nói về thói quen trong quá khứ với Used to",
      "audioScript": "When I was seven, I used to play marbles with the neighborhood kids.",
      "prompt": "Em muốn kể về thói quen trước đây của mình: \"When I was younger, I ______ read comic books every evening, but now I prefer novels.\"",
      "options": [
        "used to",
        "use to",
        "was used to",
        "uses to"
      ],
      "correctAnswer": "used to",
      "hintExplanation": "Cấu trúc khẩu ngữ để kể về thói quen trong quá khứ nay không còn nữa là \"used to + V-nguyên thể\"."
    },
    {
      "id": 2,
      "topic": "speaking_past_stories",
      "topicTitle": "Nói về thói quen trong quá khứ với Used to",
      "audioScript": "Did your family use to live in a small apartment before moving here?",
      "prompt": "Em muốn hỏi bạn mình: \"Trước đây cậu có từng đi bộ đến trường không?\", câu hỏi chuẩn ngữ pháp là:",
      "options": [
        "Did you use to walk to school?",
        "Did you used to walk to school?",
        "Do you used to walk?",
        "Were you use to walk?"
      ],
      "correctAnswer": "Did you use to walk to school?",
      "hintExplanation": "Trong câu hỏi với trợ động từ quá khứ \"Did\", cấu trúc chuẩn là: \"Did + S + use to + V...?\"."
    },
    {
      "id": 3,
      "topic": "speaking_invitations_suggestions",
      "topicTitle": "Đưa ra lời mời & Phản hồi giao tiếp lịch sự",
      "audioScript": "Would you like to come over to my house for dinner tonight? I would love to!",
      "prompt": "Bạn mời em: \"Would you like to watch a movie with us this Sunday?\". Em rất muốn đi, câu phản hồi tự nhiên là:",
      "options": [
        "I would love to, thank you!",
        "Yes, I like.",
        "No, I am watching.",
        "I will do it."
      ],
      "correctAnswer": "I would love to, thank you!",
      "hintExplanation": "Đáp lại lời mời \"Would you like to...?\", cách trả lời tự nhiên và lịch sự là \"I would love to, thank you!\"."
    },
    {
      "id": 4,
      "topic": "speaking_invitations_suggestions",
      "topicTitle": "Đưa ra lời mời & Phản hồi giao tiếp lịch sự",
      "audioScript": "How about organizing a book donation campaign for our school library?",
      "prompt": "Em muốn đề xuất một ý tưởng hoạt động với các bạn trong nhóm, câu gợi ý chuẩn khẩu ngữ là:",
      "options": [
        "How about cleaning up the schoolyard together?",
        "How about we to clean up?",
        "Why don't cleaning up?",
        "Let cleaning up together."
      ],
      "correctAnswer": "How about cleaning up the schoolyard together?",
      "hintExplanation": "Sau cấu trúc gợi ý \"How about...\" hoặc \"What about...\", ta luôn dùng động từ thêm đuôi -ing: \"How about cleaning up...?\"."
    },
    {
      "id": 5,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Bày tỏ sự nhượng bộ khi nói (Although / However)",
      "audioScript": "Although the science project was demanding, we learned many valuable skills.",
      "prompt": "Em muốn nói: \"Mặc dù trời mưa to, chúng tớ vẫn hoàn thành chuyến dã ngoại\", câu chuẩn là:",
      "options": [
        "Although it rained heavily, we still enjoyed the picnic.",
        "Despite it rained heavily, we enjoyed.",
        "However it rained, we enjoyed.",
        "Because it rained heavily, we enjoyed."
      ],
      "correctAnswer": "Although it rained heavily, we still enjoyed the picnic.",
      "hintExplanation": "Sau \"Although\" là một mệnh đề đầy đủ (S + V) chỉ sự nhượng bộ: \"Although it rained heavily...\"."
    },
    {
      "id": 6,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Xử lý khi người đối diện dùng từ vựng địa phương/lóng",
      "audioScript": "That concert was totally lit! Everyone was hyped up.",
      "prompt": "Một người bạn nước ngoài dùng từ lóng \"lit\" và \"hyped up\" mà em chưa hiểu. Em hỏi lại tự nhiên thế nào?",
      "options": [
        "I am not familiar with those words. Could you explain what you mean?",
        "Those words are wrong in grammar.",
        "Do not use slang in front of me.",
        "I don't want to hear you."
      ],
      "correctAnswer": "I am not familiar with those words. Could you explain what you mean?",
      "hintExplanation": "Cách xử lý khéo léo khi gặp từ không quen thuộc là: \"I am not familiar with those words. Could you explain what you mean?\"."
    },
    {
      "id": 7,
      "topic": "speaking_agreeing_disagreeing",
      "topicTitle": "Bày tỏ sự đồng tình lịch sự trong tranh biện",
      "audioScript": "I completely agree with your point about promoting public transport.",
      "prompt": "Trong buổi thảo luận nhóm, bạn muốn thể hiện sự hoàn toàn nhất trí với ý kiến của bạn mình:",
      "options": [
        "I completely agree with your point about promoting public transport.",
        "You are wrong about buses.",
        "I have nothing to say.",
        "Buses are big vehicles."
      ],
      "correctAnswer": "I completely agree with your point about promoting public transport.",
      "hintExplanation": "\"I completely agree with your point about...\" là cách đồng tình lịch sự, trang trọng."
    },
    {
      "id": 8,
      "topic": "speaking_interview_volunteer",
      "topicTitle": "Phỏng vấn tham gia hoạt động tình nguyện vì cộng đồng",
      "audioScript": "I would love to participate in teaching English to underprivileged children at the shelter.",
      "prompt": "Khi đăng ký tham gia câu lạc bộ tình nguyện, bạn nói về nguyện vọng đóng góp của mình:",
      "options": [
        "I would love to participate in teaching English to underprivileged children at the shelter.",
        "I want to get a certificate for my resume.",
        "Volunteering takes too much time.",
        "Can you pay me money for volunteering?"
      ],
      "correctAnswer": "I would love to participate in teaching English to underprivileged children at the shelter.",
      "hintExplanation": "Thể hiện tinh thần nhiệt huyết và trách nhiệm cộng đồng cao đẹp."
    },
    {
      "id": 9,
      "topic": "speaking_cinema_plans",
      "topicTitle": "Hẹn bạn đi xem phim và thảo luận giờ giấc",
      "audioScript": "Shall we catch the 6:30 PM screening of the new sci-fi blockbuster tonight?",
      "prompt": "Bạn muốn đề xuất suất chiếu phim tối nay với bạn mình, bạn nói:",
      "options": [
        "Shall we catch the 6:30 PM screening of the new sci-fi blockbuster tonight?",
        "The cinema has many snacks.",
        "I don't like action films.",
        "Tickets cost seventy thousand dong."
      ],
      "correctAnswer": "Shall we catch the 6:30 PM screening of the new sci-fi blockbuster tonight?",
      "hintExplanation": "\"Shall we catch the 6:30 PM screening...?\" là cách hẹn giờ xem phim tự nhiên của người bản ngữ."
    },
    {
      "id": 10,
      "topic": "speaking_energy_saving_presentation",
      "topicTitle": "Thuyết trình về thói quen tiết kiệm điện tại gia đình",
      "audioScript": "By unplugging unused appliances and installing LED bulbs, my family reduced our electric bill by 20%.",
      "prompt": "Khi chia sẻ giải pháp tiết kiệm năng lượng tại nhà, câu nói mang tính thuyết phục và có số liệu là:",
      "options": [
        "By unplugging unused appliances and installing LED bulbs, my family reduced our electric bill by 20%.",
        "Electricity is very important.",
        "We turn on air conditioners all day.",
        "My dad pays the bills."
      ],
      "correctAnswer": "By unplugging unused appliances and installing LED bulbs, my family reduced our electric bill by 20%.",
      "hintExplanation": "Câu có dẫn chứng hành động cụ thể \"unplugging unused appliances\" và kết quả định lượng \"reduced by 20%\"."
    }
  ],
  "8": [
    {
      "id": 1,
      "topic": "speaking_past_stories",
      "topicTitle": "Chia sẻ trải nghiệm với Hiện tại hoàn thành",
      "audioScript": "Have you ever traveled abroad alone? No, I haven't had the opportunity yet.",
      "prompt": "Trong phần phỏng vấn nói, giám khảo hỏi: \"Have you ever tried scuba diving?\". Em chưa từng thử, câu trả lời tự nhiên là:",
      "options": [
        "No, I have never tried it before.",
        "No, I did not try.",
        "No, I am not trying.",
        "I have ever tried."
      ],
      "correctAnswer": "No, I have never tried it before.",
      "hintExplanation": "Để trả lời về trải nghiệm chưa từng làm trong quá khứ kéo dài đến nay: \"No, I have never tried it before.\"."
    },
    {
      "id": 2,
      "topic": "speaking_past_stories",
      "topicTitle": "Chia sẻ trải nghiệm với Hiện tại hoàn thành",
      "audioScript": "I have participated in this community green club for over two years.",
      "prompt": "Em muốn nói với bạn rằng mình đã sống ở thành phố này được 5 năm rồi, câu chuẩn ngữ pháp là:",
      "options": [
        "I have lived in this city for five years.",
        "I lived in this city since five years.",
        "I am living here for five years ago.",
        "I live here since five years."
      ],
      "correctAnswer": "I have lived in this city for five years.",
      "hintExplanation": "Diễn tả hành động bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại, dùng thì Hiện tại hoàn thành với \"for + khoảng thời gian\": \"have lived... for five years\"."
    },
    {
      "id": 3,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Thuyết trình về môi trường với Câu điều kiện loại 1",
      "audioScript": "If we reduce single-use plastic, we will protect millions of marine creatures.",
      "prompt": "Khi thuyết trình về bảo vệ nguồn nước sạch, câu khẩu ngữ dự đoán kết quả chuẩn là:",
      "options": [
        "If people stop littering into rivers, the water will become much cleaner.",
        "If people stopped littering, water will clean.",
        "If people stop littering, water would be clean.",
        "Unless people stop littering, water will clean."
      ],
      "correctAnswer": "If people stop littering into rivers, the water will become much cleaner.",
      "hintExplanation": "Câu điều kiện loại 1: Mệnh đề If dùng Hiện tại đơn, mệnh đề chính dùng \"will + V-nguyên thể\"."
    },
    {
      "id": 4,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Thuyết trình về môi trường với Câu điều kiện loại 1",
      "audioScript": "Unless we take immediate actions, climate change will cause severe droughts.",
      "prompt": "Em muốn nhấn mạnh: \"Nếu chúng ta không tiết kiệm điện, chúng ta sẽ lãng phí tài nguyên\", câu chuẩn là:",
      "options": [
        "Unless we save electricity, we will waste valuable energy resources.",
        "Unless we don't save electricity, we waste.",
        "If we save electricity, we waste energy.",
        "Unless we save electricity, we would waste."
      ],
      "correctAnswer": "Unless we save electricity, we will waste valuable energy resources.",
      "hintExplanation": "\"Unless\" mang nghĩa \"If... not\" (Trừ phi / Nếu không), mệnh đề chính dùng \"will + V\"."
    },
    {
      "id": 5,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Diễn đạt khi gặp thuật ngữ công nghệ mới lạ",
      "audioScript": "This smartphone incorporates advanced artificial intelligence algorithms.",
      "prompt": "Đối tác thuyết trình dùng từ \"algorithms\" khiến em băn khoăn. Câu hỏi làm rõ chuẩn phong cách học tập là:",
      "options": [
        "Could you clarify how this algorithm functions in real life?",
        "What algorithm meaning here?",
        "Why you mention algorithm?",
        "Algorithm is what?"
      ],
      "correctAnswer": "Could you clarify how this algorithm functions in real life?",
      "hintExplanation": "Khi gặp thuật ngữ kỹ thuật phức tạp, dùng \"Could you clarify how...?\" là cách đặt câu hỏi tinh tế và chính xác."
    },
    {
      "id": 6,
      "topic": "speaking_invitations_suggestions",
      "topicTitle": "Thảo luận nhóm & Thể hiện sự đồng thuận",
      "audioScript": "I completely agree with your proposal on building more bicycle lanes.",
      "prompt": "Trong cuộc họp nhóm, bạn đưa ra một ý kiến rất hay và em hoàn toàn đồng tình, em nói câu nào?",
      "options": [
        "I couldn't agree with you more. That is a brilliant idea!",
        "I don't agree anything.",
        "You are not right at all.",
        "I have no thoughts."
      ],
      "correctAnswer": "I couldn't agree with you more. That is a brilliant idea!",
      "hintExplanation": "\"I couldn't agree with you more\" là thành ngữ khẩu ngữ cao cấp mang nghĩa \"Tôi hoàn toàn đồng ý với bạn\"."
    },
    {
      "id": 7,
      "topic": "speaking_presenting_ethnic_culture",
      "topicTitle": "Thuyết trình về lễ hội văn hóa các dân tộc Việt Nam",
      "audioScript": "The communal Rong house serves as the sacred spiritual and cultural heart of Central Highlands villages.",
      "prompt": "Khi thuyết trình về nhà Rông của đồng bào Tây Nguyên, bạn nói:",
      "options": [
        "The communal Rong house serves as the sacred spiritual and cultural heart of Central Highlands villages.",
        "The Rong house is made of wood and bamboo.",
        "I saw a photo of a village.",
        "Many tourists visit Dak Lak."
      ],
      "correctAnswer": "The communal Rong house serves as the sacred spiritual and cultural heart of Central Highlands villages.",
      "hintExplanation": "Từ vựng học thuật trang trọng: \"serves as the sacred spiritual and cultural heart\"."
    },
    {
      "id": 8,
      "topic": "speaking_debating_online_learning",
      "topicTitle": "Tranh biện về ưu - nhược điểm của học trực tuyến",
      "audioScript": "While digital platforms offer unparalleled flexibility, excessive screen time can hinder genuine social bonding.",
      "prompt": "Trong bài tranh luận về học trực tuyến, câu thể hiện cái nhìn hai mặt sâu sắc là:",
      "options": [
        "While digital platforms offer unparalleled flexibility, excessive screen time can hinder genuine social bonding.",
        "Online learning is good because I can stay in bed.",
        "I hate studying on computers.",
        "Computers are expensive."
      ],
      "correctAnswer": "While digital platforms offer unparalleled flexibility, excessive screen time can hinder genuine social bonding.",
      "hintExplanation": "Cấu trúc \"While X, Y\" thể hiện tư duy phản biện đa chiều xuất sắc."
    },
    {
      "id": 9,
      "topic": "speaking_emergency_preparedness",
      "topicTitle": "Hướng dẫn các bước sơ tán khi xảy ra bão lụt",
      "audioScript": "In case of flood warnings, relocate emergency survival kits to higher ground and disconnect power mains.",
      "prompt": "Khi tập huấn kỹ năng phòng chống thiên tai, hướng dẫn khẩn cấp chuẩn là:",
      "options": [
        "In case of flood warnings, relocate emergency survival kits to higher ground and disconnect power mains.",
        "Stay in low areas and swim in flood waters.",
        "Ignore the news updates.",
        "Wait until the water rises to your roof."
      ],
      "correctAnswer": "In case of flood warnings, relocate emergency survival kits to higher ground and disconnect power mains.",
      "hintExplanation": "Mệnh lệnh an toàn dứt khoát, chuẩn từ vựng cứu hộ: \"relocate emergency survival kits... disconnect power mains\"."
    },
    {
      "id": 10,
      "topic": "speaking_polite_complaint",
      "topicTitle": "Phản ánh dịch vụ lịch sự (Polite Complaint)",
      "audioScript": "Excuse me, I am afraid there has been a slight mistake with my order; I requested vegetarian pasta.",
      "prompt": "Tại nhà hàng, bồi bàn mang nhầm món thịt thay vì món chay bạn đã gọi, bạn phản ánh khéo léo:",
      "options": [
        "Excuse me, I am afraid there has been a slight mistake with my order; I requested vegetarian pasta.",
        "You made a bad mistake, call your manager!",
        "I refuse to pay for this food.",
        "Why did you bring me meat?"
      ],
      "correctAnswer": "Excuse me, I am afraid there has been a slight mistake with my order; I requested vegetarian pasta.",
      "hintExplanation": "Mẫu câu phản ánh lịch thiệp chuẩn mực: \"I am afraid there has been a slight mistake with my order\"."
    }
  ],
  "9": [
    {
      "id": 1,
      "topic": "speaking_debates_interviews",
      "topicTitle": "Tranh luận quan điểm học thuật (Debating & Expressing views)",
      "audioScript": "From my perspective, developing renewable energy infrastructure is a top priority for sustainable development.",
      "prompt": "Trong phần thi Speaking tranh luận, để mở đầu bài nói bày tỏ góc nhìn của mình một cách học thuật, em dùng câu nào?",
      "options": [
        "From my perspective, artificial intelligence can support personalized learning effectively.",
        "I say that AI is good.",
        "AI is good because I say so.",
        "You must think AI is best."
      ],
      "correctAnswer": "From my perspective, artificial intelligence can support personalized learning effectively.",
      "hintExplanation": "Mở đầu bằng \"From my perspective, [mệnh đề]\" giúp bài nói mạch lạc, học thuật và khách quan."
    },
    {
      "id": 2,
      "topic": "speaking_debates_interviews",
      "topicTitle": "Tranh luận quan điểm học thuật (Debating & Expressing views)",
      "audioScript": "While traditional classrooms encourage direct social interactions, online learning offers unmatched schedule flexibility.",
      "prompt": "Em muốn so sánh hai mặt của một vấn đề khi nói: \"Một mặt... mặt khác...\", cấu trúc liên kết câu chuẩn là:",
      "options": [
        "On the one hand, cities offer dynamic career opportunities; on the other hand, living costs are high.",
        "In the first hand and second hand.",
        "By this hand and that hand.",
        "For one hand, it is good."
      ],
      "correctAnswer": "On the one hand, cities offer dynamic career opportunities; on the other hand, living costs are high.",
      "hintExplanation": "Cặp liên từ chỉ hai khía cạnh đối lập trong bài nói là \"On the one hand,... on the other hand,...\"."
    },
    {
      "id": 3,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Nói tình huống giả định với Câu điều kiện loại 2",
      "audioScript": "If I were the mayor of this city, I would allocate more budget to green parks and public libraries.",
      "prompt": "Giám khảo hỏi: \"What would you do if you were given one million dollars?\". Câu trả lời chuẩn ngữ pháp là:",
      "options": [
        "If I had one million dollars, I would establish a non-profit coding academy for rural children.",
        "If I have one million dollars, I would establish.",
        "If I had one million dollars, I will establish.",
        "If I had one million dollars, I establish."
      ],
      "correctAnswer": "If I had one million dollars, I would establish a non-profit coding academy for rural children.",
      "hintExplanation": "Câu điều kiện loại 2 (giả định không có thật ở hiện tại): If + S + V2/ed, S + would + V-nguyên thể."
    },
    {
      "id": 4,
      "topic": "speaking_opinions_reasons",
      "topicTitle": "Nói tình huống giả định với Câu điều kiện loại 2",
      "audioScript": "If she had more free time, she would take up learning classical guitar.",
      "prompt": "Em muốn nói: \"Nếu tớ là cậu, tớ sẽ tham gia câu lạc bộ tranh biện tiếng Anh đó\", câu chuẩn là:",
      "options": [
        "If I were you, I would join that English debate club.",
        "If I am you, I will join that club.",
        "If I was you, I join that club.",
        "If I were you, I will join."
      ],
      "correctAnswer": "If I were you, I would join that English debate club.",
      "hintExplanation": "Để đưa ra lời khuyên bằng điều kiện loại 2, ta dùng \"If I were you, I would + V...\"."
    },
    {
      "id": 5,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Xử lý linh hoạt khi gặp thuật ngữ học thuật phức tạp",
      "audioScript": "The speaker highlighted the concept of cognitive dissonance in decision-making.",
      "prompt": "Trong buổi hội thảo tiếng Anh, diễn giả nhắc tới một khái niệm học thuật trừu tượng mà em chưa hiểu. Câu hỏi phản xạ chuẩn học thuật là:",
      "options": [
        "Could you please elaborate on that concept and give an illustrative example?",
        "Why do you use such difficult concepts?",
        "I don't know that word, change it.",
        "Explain that word now please."
      ],
      "correctAnswer": "Could you please elaborate on that concept and give an illustrative example?",
      "hintExplanation": "\"Could you please elaborate on that concept and give an illustrative example?\" là câu đề nghị giải thích thêm cực kỳ trang trọng và chuyên nghiệp."
    },
    {
      "id": 6,
      "topic": "speaking_unfamiliar_words",
      "topicTitle": "Xử lý linh hoạt khi diễn đạt ý tưởng bị thiếu từ vựng",
      "audioScript": "I cannot remember the exact term, but it is a tool used to measure earthquakes.",
      "prompt": "Khi đang nói tiếng Anh trước lớp mà bất chợt quên hoặc không biết một từ vựng chuyên ngành, cách ứng biến khẩu ngữ khéo léo nhất là:",
      "options": [
        "I cannot recall the exact term right now, but it refers to a device that measures atmospheric pressure.",
        "I stop talking because I don't know the word.",
        "My English is very bad so I forget.",
        "Wait for me to look at Google translate."
      ],
      "correctAnswer": "I cannot recall the exact term right now, but it refers to a device that measures atmospheric pressure.",
      "hintExplanation": "Trong kỹ năng Speaking, kỹ thuật \"Paraphrasing\" (dùng từ ngữ khác để miêu tả định nghĩa của vật khi không nhớ từ chính xác) là tiêu chí đánh giá rất cao."
    },
    {
      "id": 7,
      "topic": "speaking_career_aspirations_interview",
      "topicTitle": "Nói về định hướng nghề nghiệp và thế mạnh cá nhân",
      "audioScript": "Driven by a passion for sustainability, I aspire to major in environmental engineering and renewable technology.",
      "prompt": "Trong buổi phỏng vấn học bổng hướng nghiệp, bạn trình bày hoài bão học tập của mình:",
      "options": [
        "Driven by a passion for sustainability, I aspire to major in environmental engineering and renewable technology.",
        "I want to earn a lot of money quickly.",
        "My parents want me to become an engineer.",
        "I don't know which job is good."
      ],
      "correctAnswer": "Driven by a passion for sustainability, I aspire to major in environmental engineering and renewable technology.",
      "hintExplanation": "Cách diễn đạt chuyên nghiệp: \"Driven by a passion for..., I aspire to major in...\"."
    },
    {
      "id": 8,
      "topic": "speaking_cultural_preservation",
      "topicTitle": "Trình bày giải pháp bảo tồn di sản văn hóa phi vật thể",
      "audioScript": "Digitizing folk music recordings and integrating heritage workshops into school curricula are vital for cultural continuity.",
      "prompt": "Khi đề xuất giải pháp bảo tồn ca trù và nhã nhạc cung đình Huế, bạn nói:",
      "options": [
        "Digitizing folk music recordings and integrating heritage workshops into school curricula are vital for cultural continuity.",
        "Folk music is only for elderly people.",
        "We should only listen to modern electronic music.",
        "Traditional heritage cannot be saved."
      ],
      "correctAnswer": "Digitizing folk music recordings and integrating heritage workshops into school curricula are vital for cultural continuity.",
      "hintExplanation": "Đề xuất giải pháp cụ thể: \"Digitizing recordings... integrating heritage workshops into curricula\"."
    },
    {
      "id": 9,
      "topic": "speaking_ai_ethics_discussion",
      "topicTitle": "Bàn luận về khía cạnh đạo đức của trí tuệ nhân tạo (AI Ethics)",
      "audioScript": "As artificial intelligence becomes ubiquitous, establishing rigorous ethical frameworks to protect data privacy is paramount.",
      "prompt": "Khi tham gia hội thảo thanh niên về công nghệ AI, quan điểm học thuật sâu sắc là:",
      "options": [
        "As artificial intelligence becomes ubiquitous, establishing rigorous ethical frameworks to protect data privacy is paramount.",
        "AI is just for playing video games.",
        "Nobody cares about computer data privacy.",
        "Robots will conquer humanity tomorrow."
      ],
      "correctAnswer": "As artificial intelligence becomes ubiquitous, establishing rigorous ethical frameworks to protect data privacy is paramount.",
      "hintExplanation": "Dùng từ vựng trình độ cao (ubiquitous, rigorous ethical frameworks, paramount)."
    },
    {
      "id": 10,
      "topic": "speaking_impromptu_public_speech",
      "topicTitle": "Bài phát biểu truyền cảm hứng vượt qua thử thách học đường",
      "audioScript": "Resilience is not the absence of failure, but the courage to learn from setbacks and persevere toward our goals.",
      "prompt": "Kết thúc bài thuyết trình truyền cảm hứng cho học sinh toàn trường, câu kết đắt giá nhất là:",
      "options": [
        "Resilience is not the absence of failure, but the courage to learn from setbacks and persevere toward our goals.",
        "Thank you, now I will sit down.",
        "Life is too hard and exams are stressful.",
        "I hope you enjoyed my speech."
      ],
      "correctAnswer": "Resilience is not the absence of failure, but the courage to learn from setbacks and persevere toward our goals.",
      "hintExplanation": "Câu phát biểu giàu tính triết lý, ngôn từ truyền cảm hứng mạnh mẽ."
    }
  ]
};
