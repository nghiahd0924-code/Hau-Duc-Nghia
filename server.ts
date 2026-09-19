import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI client (lazy/safely guarded)
const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("WARNING: GEMINI_API_KEY is not set.");
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// Next Practice question bank by Grade for Rule-based fallback
const NEXT_PRACTICE_BY_GRADE: Record<
  number,
  { grammar: any[]; listening: any[]; speaking: any[]; writing?: any[] }
> = {
  1: {
    grammar: [
      {
        id: 301,
        topic: "letters_phonics",
        topicTitle: "Bảng chữ cái & Từ vựng cơ bản",
        prompt: 'Which word starts with letter "C"?',
        options: ["Cat", "Dog", "Fish", "Bird"],
        correctAnswer: "Cat",
        targetedMistake: "Nhận diện chữ cái bắt đầu C trong từ 'Cat'.",
        explanation: "Từ 'Cat' (con mèo) bắt đầu bằng chữ 'C'.",
      },
      {
        id: 302,
        topic: "numbers_colors",
        topicTitle: "Số đếm & Màu sắc",
        prompt: "Count: 🎈 🎈 🎈 🎈. How many balloons?",
        options: ["Four balloons", "Three balloons", "Five balloons", "Two balloons"],
        correctAnswer: "Four balloons",
        targetedMistake: "Đếm số lượng 4 ('Four').",
        explanation: "Có 4 quả bóng bay ('Four balloons').",
      },
    ],
    listening: [
      {
        id: 401,
        topic: "listening_phonics_letters",
        topicTitle: "Nghe chữ cái & Âm thanh",
        audioScript: "Listen: /b/ /b/ ... Ball! Boy! Bed!",
        prompt: 'Which letter makes the sound /b/?',
        options: ["Letter B", "Letter D", "Letter P", "Letter T"],
        correctAnswer: "Letter B",
        targetedMistake: "Phân biệt âm /b/ của chữ cái B.",
        explanation: "Âm /b/ là của chữ cái B trong tiếng Anh.",
      },
      {
        id: 402,
        topic: "listening_specific_info",
        topicTitle: "Nghe số đếm đồ vật",
        audioScript: "I can see two yellow birds in the tree.",
        prompt: "How many birds are in the tree?",
        options: ["Two birds", "Three birds", "One bird", "Four birds"],
        correctAnswer: "Two birds",
        targetedMistake: "Nghe bắt số đếm 'two' (2).",
        explanation: "Đoạn nghe nói: 'two yellow birds'.",
      },
    ],
    speaking: [
      {
        id: 501,
        topic: "speaking_greetings_intro",
        topicTitle: "Chào hỏi & Giới thiệu tên khi nói",
        audioScript: "Hello! What is your name? My name is Lucy.",
        prompt: "Khi được hỏi 'What is your name?', em muốn giới thiệu tên mình là Ben, em nói thế nào?",
        options: ["My name is Ben.", "I am five book.", "This is red.", "Yes, it is."],
        correctAnswer: "My name is Ben.",
        targetedMistake: "Cấu trúc giới thiệu tên: My name is...",
        explanation: "Mẫu câu giới thiệu tên chuẩn khi nói là 'My name is [Tên]'.",
      },
      {
        id: 502,
        topic: "speaking_classroom_commands",
        topicTitle: "Cảm ơn & Chào tạm biệt",
        audioScript: "Here is your pencil! Thank you very much.",
        prompt: "Bạn cho em mượn chiếc bút chì, em sẽ nói gì để cảm ơn bạn?",
        options: ["Thank you very much!", "Goodbye, Tom!", "No, I do not.", "I like blue."],
        correctAnswer: "Thank you very much!",
        targetedMistake: "Mẫu câu nói cảm ơn lịch sự 'Thank you'.",
        explanation: "Khi nhận được sự giúp đỡ, câu nói chuẩn là 'Thank you!'.",
      },
    ],
  },
  2: {
    grammar: [
      {
        id: 301,
        topic: "family_animals",
        topicTitle: "Thành viên gia đình & Con vật",
        prompt: "This is my mother. ______ is very kind and beautiful.",
        options: ["She", "He", "It", "They"],
        correctAnswer: "She",
        targetedMistake: "Đại từ chỉ phái nữ (Mother -> She).",
        explanation: "'Mother' (mẹ) là phái nữ nên dùng đại từ 'She'.",
      },
      {
        id: 302,
        topic: "simple_actions",
        topicTitle: "Mệnh lệnh lớp học",
        prompt: "Please sit ______ on your chair, Tom.",
        options: ["down", "up", "in", "at"],
        correctAnswer: "down",
        targetedMistake: "Cụm mệnh lệnh 'Sit down'.",
        explanation: "Cụm 'Sit down' có nghĩa là 'Ngồi xuống'.",
      },
    ],
    listening: [
      {
        id: 401,
        topic: "listening_animals_objects",
        topicTitle: "Nghe nhận diện con vật nuôi",
        audioScript: "Listen: Woof woof! Look at the playful puppy running in the grass.",
        prompt: "What animal is running in the grass?",
        options: ["A puppy", "A kitten", "A duck", "A rabbit"],
        correctAnswer: "A puppy",
        targetedMistake: "Nghe nhận diện chú cún ('puppy').",
        explanation: "Âm thanh tiếng chó sủa và từ 'puppy' chỉ chú chó con.",
      },
      {
        id: 402,
        topic: "listening_activities_hobbies",
        topicTitle: "Nghe các thành viên gia đình",
        audioScript: "My brother loves eating bananas after school.",
        prompt: "What fruit does the brother love eating?",
        options: ["Bananas", "Apples", "Oranges", "Grapes"],
        correctAnswer: "Bananas",
        targetedMistake: "Nghe bắt tên loại quả ('bananas').",
        explanation: "Đoạn băng nói rõ: 'loves eating bananas'.",
      },
    ],
    speaking: [
      {
        id: 501,
        topic: "speaking_classroom_commands",
        topicTitle: "Xin phép trong giờ học",
        audioScript: "May I go out, teacher? Yes, you may.",
        prompt: "Em muốn xin phép thầy giáo ra ngoài uống nước, câu nói chuẩn lễ phép là:",
        options: ["May I go out, teacher?", "I want go out now.", "Can teacher go out?", "You go out please."],
        correctAnswer: "May I go out, teacher?",
        targetedMistake: "Mẫu câu xin phép 'May I + V...'.",
        explanation: "Để xin phép lịch sự trong lớp học, mẫu câu chuẩn là 'May I go out, please?'.",
      },
      {
        id: 502,
        topic: "speaking_questions_answers",
        topicTitle: "Nói về con vật yêu thích",
        audioScript: "Do you like cats? Yes, I do. They are cute.",
        prompt: "Bạn hỏi: 'Do you like dogs?'. Em rất thích chó, em trả lời:",
        options: ["Yes, I do. I like dogs.", "No, I am not.", "I have three cats.", "He is tall."],
        correctAnswer: "Yes, I do. I like dogs.",
        targetedMistake: "Câu trả lời ngắn khẳng định 'Yes, I do'.",
        explanation: "Với câu hỏi 'Do you like...?', câu trả lời chuẩn là 'Yes, I do.'.",
      },
    ],
  },
  3: {
    grammar: [
      {
        id: 301,
        topic: "prepositions_place",
        topicTitle: "Giới từ chỉ vị trí",
        prompt: "The school bag is ______ the chair.",
        options: ["on", "under", "in", "to"],
        correctAnswer: "on",
        targetedMistake: "Giới từ 'on' (ở trên bề mặt).",
        explanation: "Chiếc cặp ở trên ghế dùng 'on the chair'.",
      },
      {
        id: 302,
        topic: "can_ability",
        topicTitle: "Khả năng Can / Can't",
        prompt: "Fish can swim, but they ______ walk on land.",
        options: ["can't", "can", "are", "do"],
        correctAnswer: "can't",
        targetedMistake: "Khả năng phủ định can't.",
        explanation: "Cá không thể đi bộ trên cạn nên dùng 'can't'.",
      },
    ],
    listening: [
      {
        id: 401,
        topic: "listening_positions",
        topicTitle: "Nghe vị trí đồ vật",
        audioScript: "Your red pen is inside the school bag, next to the notebook.",
        prompt: "Where is the red pen?",
        options: ["Inside the school bag", "Under the bed", "On the floor", "Behind the table"],
        correctAnswer: "Inside the school bag",
        targetedMistake: "Nghe giới từ 'inside' (bên trong).",
        explanation: "Audio nhắc: 'inside the school bag'.",
      },
      {
        id: 402,
        topic: "listening_specific_info",
        topicTitle: "Nghe số lượng đồ dùng",
        audioScript: "We have six new notebooks in the classroom cupboard.",
        prompt: "How many notebooks are in the cupboard?",
        options: ["6 notebooks", "4 notebooks", "8 notebooks", "10 notebooks"],
        correctAnswer: "6 notebooks",
        targetedMistake: "Nghe số lượng 'six' (6).",
        explanation: "Audio nói: 'six new notebooks'.",
      },
    ],
    speaking: [
      {
        id: 501,
        topic: "speaking_questions_answers",
        topicTitle: "Hỏi vị trí đồ vật",
        audioScript: "Where is the ruler? It is under the desk.",
        prompt: "Em muốn hỏi bạn: 'Cây thước kẻ của tớ ở đâu vậy?', câu chuẩn ngữ pháp là:",
        options: ["Where is my ruler?", "What is my ruler?", "Who is my ruler?", "When is my ruler?"],
        correctAnswer: "Where is my ruler?",
        targetedMistake: "Dùng từ để hỏi 'Where' chỉ nơi chốn/vị trí.",
        explanation: "Hỏi về vị trí đồ vật ta dùng 'Where is + đồ vật?'.",
      },
      {
        id: 502,
        topic: "speaking_grammar_habits",
        topicTitle: "Nói về khả năng với Can",
        audioScript: "Can you play chess? Yes, I can play it with my grandfather.",
        prompt: "Bạn hỏi: 'Can you ride a bicycle?'. Em biết đi xe đạp rất giỏi, em trả lời:",
        options: ["Yes, I can.", "Yes, I do.", "Yes, I am.", "No, I cannot."],
        correctAnswer: "Yes, I can.",
        targetedMistake: "Câu trả lời khẳng định với 'Can' -> 'Yes, I can'.",
        explanation: "Với câu hỏi 'Can you...?', câu trả lời khẳng định là 'Yes, I can.'.",
      },
    ],
  },
  4: {
    grammar: [
      {
        id: 301,
        topic: "time_dates",
        topicTitle: "Giới từ chỉ thời gian",
        prompt: "We have Art lessons ______ Wednesday mornings.",
        options: ["on", "in", "at", "to"],
        correctAnswer: "on",
        targetedMistake: "Giới từ 'on' đi với thứ trong tuần.",
        explanation: "Đi với thứ (Wednesday) ta luôn dùng giới từ 'on'.",
      },
      {
        id: 302,
        topic: "simple_actions",
        topicTitle: "Cấu trúc like + V-ing",
        prompt: "My brother likes ______ comic books in his bedroom.",
        options: ["reading", "read", "reads", "is read"],
        correctAnswer: "reading",
        targetedMistake: "Sau like dùng V-ing.",
        explanation: "Sau 'likes' là động từ thêm đuôi -ing: 'reading'.",
      },
    ],
    listening: [
      {
        id: 401,
        topic: "listening_daily_schedule",
        topicTitle: "Nghe thời gian biểu",
        audioScript: "My favorite cartoon starts at five fifteen in the afternoon.",
        prompt: "What time does the cartoon start?",
        options: ["At 5:15", "At 5:45", "At 5:00", "At 6:15"],
        correctAnswer: "At 5:15",
        targetedMistake: "Nghe mốc giờ 'five fifteen' (5:15).",
        explanation: "Audio nói: 'starts at five fifteen' (5:15).",
      },
      {
        id: 402,
        topic: "listening_activities_hobbies",
        topicTitle: "Nghe sở thích",
        audioScript: "On sunny Saturdays, Peter loves riding his bicycle along the lake.",
        prompt: "What does Peter love doing on Saturdays?",
        options: ["Riding his bicycle", "Playing games", "Drawing pictures", "Watching movies"],
        correctAnswer: "Riding his bicycle",
        targetedMistake: "Nghe sở thích 'riding his bicycle'.",
        explanation: "Peter chia sẻ: 'loves riding his bicycle'.",
      },
    ],
    speaking: [
      {
        id: 501,
        topic: "speaking_grammar_habits",
        topicTitle: "Hỏi & Nói về giờ giấc",
        audioScript: "What time do you have breakfast? At six thirty in the morning.",
        prompt: "Bạn hỏi: 'What time do you go to bed?'. Em đi ngủ lúc 9 giờ tối, em trả lời:",
        options: ["I go to bed at nine o'clock.", "I go to bed on nine o'clock.", "It is nine sleep.", "I go to bed in nine."],
        correctAnswer: "I go to bed at nine o'clock.",
        targetedMistake: "Giới từ 'at' đi với mốc giờ.",
        explanation: "Nói về giờ giấc cụ thể ta dùng giới từ 'at': 'at nine o'clock'.",
      },
      {
        id: 502,
        topic: "speaking_opinions_reasons",
        topicTitle: "Nói về lý do yêu thích môn học",
        audioScript: "Why do you love English? Because I can chat with foreign friends.",
        prompt: "Bạn hỏi: 'Why do you love Music?'. Em trả lời:",
        options: ["Because it makes me feel happy and relaxed.", "Although Music is good.", "So Music is great.", "Music because is good."],
        correctAnswer: "Because it makes me feel happy and relaxed.",
        targetedMistake: "Trả lời câu hỏi 'Why' bắt đầu bằng 'Because + mệnh đề'.",
        explanation: "Khi được hỏi 'Why...?', câu trả lời chuẩn mở đầu bằng 'Because...'.",
      },
    ],
  },
  5: {
    grammar: [
      {
        id: 301,
        topic: "past_simple",
        topicTitle: "Thì Quá khứ đơn",
        prompt: "Last Sunday, we ______ our grandparents in the countryside.",
        options: ["visited", "visit", "visiting", "are visiting"],
        correctAnswer: "visited",
        targetedMistake: "Dấu hiệu 'Last Sunday' chia quá khứ đơn có quy tắc thêm -ed.",
        explanation: "Với 'Last Sunday', động từ 'visit' thêm '-ed' thành 'visited'.",
      },
      {
        id: 302,
        topic: "comparatives",
        topicTitle: "So sánh hơn của tính từ ngắn",
        prompt: "A plane is ______ than a train.",
        options: ["faster", "fast", "more fast", "fastest"],
        correctAnswer: "faster",
        targetedMistake: "So sánh hơn tính từ ngắn 'fast' -> 'faster'.",
        explanation: "'fast' là tính từ ngắn, so sánh hơn thêm -er thành 'faster than'.",
      },
    ],
    listening: [
      {
        id: 401,
        topic: "listening_vacation_past",
        topicTitle: "Nghe chuyến đi quá khứ",
        audioScript: "Last month, my class visited the science museum by bus.",
        prompt: "How did the class travel to the science museum?",
        options: ["By bus", "By train", "On foot", "By bicycle"],
        correctAnswer: "By bus",
        targetedMistake: "Nghe phương tiện 'by bus' (xe buýt).",
        explanation: "Audio nêu rõ: 'visited the science museum by bus'.",
      },
      {
        id: 402,
        topic: "listening_school_places",
        topicTitle: "Nghe hướng dẫn chỉ đường",
        audioScript: "The pharmacy is on the left, next to the post office.",
        prompt: "Where is the pharmacy?",
        options: ["On the left", "On the right", "Behind the park", "Across the river"],
        correctAnswer: "On the left",
        targetedMistake: "Nghe vị trí 'on the left' (bên tay trái).",
        explanation: "Audio nói: 'The pharmacy is on the left'.",
      },
    ],
    speaking: [
      {
        id: 501,
        topic: "speaking_past_stories",
        topicTitle: "Kể về chuyến đi trong quá khứ",
        audioScript: "Where did you go yesterday? I visited Ha Long Bay with my family.",
        prompt: "Hôm qua bạn đi đâu? Mẫu câu trả lời đúng thì quá khứ khi nói là:",
        options: ["I went to the countryside with my parents.", "I go to the countryside.", "I am going to countryside.", "I will visit countryside."],
        correctAnswer: "I went to the countryside with my parents.",
        targetedMistake: "Dùng động từ quá khứ bất quy tắc 'went' thay vì 'go'.",
        explanation: "Khi kể việc đã xảy ra hôm qua, động từ 'go' chuyển thành 'went'.",
      },
      {
        id: 502,
        topic: "speaking_opinions_reasons",
        topicTitle: "Đưa lời khuyên với Should / Shouldn't",
        audioScript: "You should brush your teeth twice a day to keep them healthy.",
        prompt: "Bạn bị sốt, lời khuyên phù hợp và đúng ngữ pháp nhất là:",
        options: ["You should see a doctor and take medicine.", "You shouldn't rest in bed.", "You should eating candies.", "You are see doctor."],
        correctAnswer: "You should see a doctor and take medicine.",
        targetedMistake: "Cấu trúc lời khuyên 'You should + V-nguyên thể'.",
        explanation: "Sau 'should' dùng động từ nguyên thể: 'You should see a doctor'.",
      },
    ],
  },
  6: {
    grammar: [
      {
        id: 101,
        topic: "present_simple",
        topicTitle: "Present Simple (Hiện tại đơn)",
        prompt: "She always ______ her teeth before going to bed.",
        options: ["brush", "brushes", "brushing", "is brush"],
        correctAnswer: "brushes",
        targetedMistake: "Quy tắc thêm -es với động từ tận cùng là 'sh' khi đi với chủ ngữ số ít (She).",
        explanation: "Với chủ ngữ 'She', động từ tận cùng bằng 'sh' ta thêm '-es' -> 'brushes'.",
      },
      {
        id: 102,
        topic: "present_continuous",
        topicTitle: "Present Continuous (Hiện tại tiếp diễn)",
        prompt: "Be quiet! The baby ______ in the next bedroom.",
        options: ["sleeps", "is sleeping", "are sleeping", "sleeping"],
        correctAnswer: "is sleeping",
        targetedMistake: "Quy tắc to be 'is' + V-ing khi chủ ngữ là 'The baby' (số ít).",
        explanation: "'Be quiet!' là dấu hiệu Hiện tại tiếp diễn. 'The baby' là số ít nên dùng 'is sleeping'.",
      },
    ],
    listening: [
      {
        id: 201,
        topic: "listening_specific_info",
        topicTitle: "Nghe thông tin chi tiết (Giờ giấc, Số lượng)",
        audioScript: "David gets up at six fifteen, but his morning classes begin at seven forty-five.",
        prompt: "What time do David morning classes begin?",
        options: ["At 6:15", "At 7:15", "At 7:45", "At 8:00"],
        correctAnswer: "At 7:45",
        targetedMistake: "Luyện phân biệt giờ thức dậy (6:15) và giờ vào học (7:45).",
        explanation: "Trong audio nói: 'classes begin at seven forty-five' (7:45). 6:15 là giờ David thức dậy.",
      },
      {
        id: 202,
        topic: "listening_activities_hobbies",
        topicTitle: "Nghe hoạt động thường nhật & Sở thích",
        audioScript: "My sister loves swimming, but on Saturday she is cycling around the West Lake with her best friend.",
        prompt: "What is the sister doing on Saturday?",
        options: ["Swimming in the pool", "Cycling around the lake", "Watching movies", "Reading books"],
        correctAnswer: "Cycling around the lake",
        targetedMistake: "Phân biệt sở thích chung (swimming) và hành động diễn ra vào thứ Bảy (cycling).",
        explanation: "Thứ Bảy bạn ấy đi đạp xe quanh hồ ('cycling around the West Lake').",
      },
    ],
    speaking: [
      {
        id: 501,
        topic: "speaking_unfamiliar_words",
        topicTitle: "Phản xạ khi gặp từ không quen thuộc khi nói",
        audioScript: "The landscape of Ha Long Bay is extraordinarily picturesque. What does picturesque mean?",
        prompt: "Người bạn nói: 'The view is picturesque'. Em muốn hỏi lại nghĩa của từ 'picturesque' chuẩn ngữ pháp thì nói câu nào?",
        options: [
          "What does 'picturesque' mean?",
          "What is 'picturesque' meaning?",
          "Why you say 'picturesque'?",
          "Explain 'picturesque' word right now."
        ],
        correctAnswer: "What does 'picturesque' mean?",
        targetedMistake: "Khắc phục lỗi hỏi nghĩa từ mới chưa quen thuộc (dùng cấu trúc: What does ... mean?).",
        explanation: "Khi gặp từ vựng mới lạ trong lúc giao tiếp, câu hỏi chuẩn ngữ pháp là: 'What does [từ mới] mean?'.",
      },
      {
        id: 502,
        topic: "speaking_grammar_habits",
        topicTitle: "Ngữ pháp khẩu ngữ: Hiện tại đơn vs Tiếp diễn",
        audioScript: "Listen! The students are practicing speaking English in the classroom right now.",
        prompt: "Trong cuộc đối thoại: 'Right now, my classmates ______ the speaking dialogue in pairs.'",
        options: ["are practicing", "practices", "is practicing", "practiced"],
        correctAnswer: "are practicing",
        targetedMistake: "Lỗi chia động từ to be theo chủ ngữ số nhiều (my classmates) ở Hiện tại tiếp diễn.",
        explanation: "Với chủ ngữ số nhiều 'my classmates' và dấu hiệu 'Right now', ta dùng 'are practicing'.",
      },
    ],
    writing: [
      {
        id: 601,
        topic: "writing_sentence_order",
        topicTitle: "Trật tự từ & Vị trí trạng từ tần suất",
        prompt: "Sắp xếp các từ để viết thành câu đúng: 'always / breakfast / He / at 7:00 a.m. / eats / .'",
        options: [
          "He always eats breakfast at 7:00 a.m.",
          "He eats always breakfast at 7:00 a.m.",
          "Always he eats breakfast at 7:00 a.m.",
          "He eats breakfast always at 7:00 a.m."
        ],
        correctAnswer: "He always eats breakfast at 7:00 a.m.",
        targetedMistake: "Vị trí trạng từ tần suất 'always' đứng trước động từ thường 'eats'.",
        explanation: "Quy tắc trật tự từ: S + Trạng từ tần suất (always) + Động từ thường (eats) + Tân ngữ + Thời gian.",
      },
      {
        id: 602,
        topic: "writing_verb_tenses",
        topicTitle: "Chia thì Hiện tại đơn vs Hiện tại tiếp diễn",
        prompt: "Viết câu hoàn chỉnh diễn tả hành động đang diễn ra: 'Listen! The teacher (speak) ______ to the class.'",
        options: [
          "Listen! The teacher is speaking to the class.",
          "Listen! The teacher speaks to the class.",
          "Listen! The teacher are speaking to the class.",
          "Listen! The teacher speaking to the class."
        ],
        correctAnswer: "Listen! The teacher is speaking to the class.",
        targetedMistake: "Dấu hiệu 'Listen!' yêu cầu thì Hiện tại tiếp diễn: S(số ít) + is + V-ing.",
        explanation: "Với 'Listen!', hành động đang xảy ra ngay lúc nói, chủ ngữ 'The teacher' số ít đi với 'is speaking'.",
      },
      {
        id: 603,
        topic: "writing_prepositions",
        topicTitle: "Giới từ chỉ thời gian (at, on, in)",
        prompt: "Chọn câu viết đúng giới từ chỉ thời gian: 'My birthday party is ______ Sunday ______ 6:00 p.m.'",
        options: [
          "My birthday party is on Sunday at 6:00 p.m.",
          "My birthday party is in Sunday on 6:00 p.m.",
          "My birthday party is at Sunday in 6:00 p.m.",
          "My birthday party is on Sunday in 6:00 p.m."
        ],
        correctAnswer: "My birthday party is on Sunday at 6:00 p.m.",
        targetedMistake: "Quy tắc giới từ thời gian: 'on' đi với thứ, 'at' đi với giờ cụ thể.",
        explanation: "Dùng 'on Sunday' (thứ trong tuần) và 'at 6:00 p.m.' (giờ giấc chính xác).",
      },
    ],
  },
  7: {
    grammar: [
      {
        id: 301,
        topic: "used_to",
        topicTitle: "Thói quen trong quá khứ với Used to",
        prompt: "My uncle ______ drink coffee every morning, but now he prefers green tea.",
        options: ["used to", "uses to", "is used to", "use to"],
        correctAnswer: "used to",
        targetedMistake: "Cấu trúc 'used to + V' chỉ thói quen quá khứ.",
        explanation: "'used to + V-nguyên mẫu' diễn tả thói quen trước đây nay không còn nữa.",
      },
      {
        id: 302,
        topic: "conjunctions",
        topicTitle: "Liên từ tương phản Although",
        prompt: "______ the weather was cold, we enjoyed the outdoor trip.",
        options: ["Although", "Because", "Despite", "However"],
        correctAnswer: "Although",
        targetedMistake: "'Although + mệnh đề' chỉ sự nhượng bộ.",
        explanation: "Sau 'Although' là một mệnh đề 'the weather was cold'.",
      },
    ],
    listening: [
      {
        id: 401,
        topic: "listening_travel_experiences",
        topicTitle: "Nghe về lễ hội",
        audioScript: "The film festival runs for five days and showcases twenty-four international movies.",
        prompt: "How many days does the film festival run?",
        options: ["Five days", "Seven days", "Ten days", "Three days"],
        correctAnswer: "Five days",
        targetedMistake: "Nghe thông tin thời gian tổ chức sự kiện.",
        explanation: "Audio nêu rõ: 'runs for five days' (kéo dài 5 ngày).",
      },
      {
        id: 402,
        topic: "listening_specific_info",
        topicTitle: "Nghe thông tin giao thông",
        audioScript: "The traffic light turned red, so the driver stopped the car immediately.",
        prompt: "What color did the traffic light turn?",
        options: ["Red", "Green", "Yellow", "Orange"],
        correctAnswer: "Red",
        targetedMistake: "Nghe màu tín hiệu giao thông 'red'.",
        explanation: "Audio cho biết: 'traffic light turned red'.",
      },
    ],
    speaking: [
      {
        id: 501,
        topic: "speaking_past_stories",
        topicTitle: "Thói quen quá khứ với Used to",
        audioScript: "I used to cycle to school every day, but now I take the electric bus.",
        prompt: "Em muốn kể về thói quen cũ của mình: 'When I was small, I ______ play football every afternoon.'",
        options: ["used to", "use to", "was used to", "uses to"],
        correctAnswer: "used to",
        targetedMistake: "Cấu trúc 'used to + V-nguyên thể' chỉ thói quen trong quá khứ.",
        explanation: "Cấu trúc chuẩn là 'used to + V-nguyên thể'.",
      },
      {
        id: 502,
        topic: "speaking_invitations_suggestions",
        topicTitle: "Đưa ra lời mời lịch sự",
        audioScript: "Would you like to come to my birthday party this Saturday? I'd love to!",
        prompt: "Bạn mời: 'Would you like to join our study group?'. Em rất hào hứng muốn tham gia, em nói:",
        options: ["I would love to, thank you!", "Yes, I like.", "I am join now.", "No, I do not."],
        correctAnswer: "I would love to, thank you!",
        targetedMistake: "Đáp lại lời mời lịch sự bằng 'I would love to, thank you!'.",
        explanation: "Với lời mời 'Would you like to...?', cách đáp lại lịch sự nhất là 'I would love to, thank you!'.",
      },
    ],
  },
  8: {
    grammar: [
      {
        id: 301,
        topic: "present_perfect",
        topicTitle: "Hiện tại hoàn thành",
        prompt: "They ______ in this city since 2018.",
        options: ["have lived", "lived", "live", "are living"],
        correctAnswer: "have lived",
        targetedMistake: "Thì Hiện tại hoàn thành với 'since + mốc thời gian'.",
        explanation: "Với 'since 2018', dùng Hiện tại hoàn thành 'have lived'.",
      },
      {
        id: 302,
        topic: "conditional_sentences",
        topicTitle: "Câu điều kiện loại 1",
        prompt: "If you study hard, you ______ pass the final exam easily.",
        options: ["will", "would", "did", "are"],
        correctAnswer: "will",
        targetedMistake: "Mệnh đề chính của câu điều kiện loại 1 dùng 'will + V'.",
        explanation: "Công thức loại 1: If + S + V(hiện tại), S + will + V.",
      },
    ],
    listening: [
      {
        id: 401,
        topic: "listening_news_interview",
        topicTitle: "Nghe thông tin thiên tai & Thời tiết",
        audioScript: "The weather forecast warns that heavy snowfall will cover the mountainous region tonight.",
        prompt: "What will cover the mountainous region tonight?",
        options: ["Heavy snowfall", "Dense fog", "Sandstorm", "Forest fire"],
        correctAnswer: "Heavy snowfall",
        targetedMistake: "Nghe hiện tượng thời tiết 'heavy snowfall' (tuyết rơi dày).",
        explanation: "Audio thông báo: 'heavy snowfall will cover the mountainous region'.",
      },
      {
        id: 402,
        topic: "listening_travel_experiences",
        topicTitle: "Nghe dự án môi trường",
        audioScript: "By planting trees, the students help reduce air pollution around the neighborhood.",
        prompt: "What do students do to help reduce air pollution?",
        options: ["Planting trees", "Cleaning rivers", "Riding electric buses", "Recycling paper"],
        correctAnswer: "Planting trees",
        targetedMistake: "Nghe hành động bảo vệ môi trường 'planting trees'.",
        explanation: "Audio nói: 'By planting trees...'.",
      },
    ],
    speaking: [
      {
        id: 501,
        topic: "speaking_past_stories",
        topicTitle: "Nói về trải nghiệm với Hiện tại hoàn thành",
        audioScript: "Have you ever traveled to another country? No, I haven't had the chance yet.",
        prompt: "Trong cuộc phỏng vấn nói: 'Have you ever tried rock climbing?'. Em chưa từng thử, câu trả lời tự nhiên là:",
        options: ["No, I have never tried it before.", "No, I did not try.", "I have ever tried.", "No, I am not trying."],
        correctAnswer: "No, I have never tried it before.",
        targetedMistake: "Trả lời trải nghiệm bằng Hiện tại hoàn thành: 'I have never tried...'.",
        explanation: "Để trả lời trải nghiệm chưa từng làm, dùng: 'No, I have never tried it before.'.",
      },
      {
        id: 502,
        topic: "speaking_opinions_reasons",
        topicTitle: "Thuyết trình về môi trường với Điều kiện loại 1",
        audioScript: "If we sort household garbage properly, we will cut down waste significantly.",
        prompt: "Em muốn nói: 'Nếu chúng ta trồng thêm cây, không khí sẽ trong lành hơn', câu chuẩn là:",
        options: ["If we plant more trees, the air will be fresher.", "If we plant trees, air would be fresh.", "If we planted trees, air will be fresh.", "Unless we plant trees, air is fresh."],
        correctAnswer: "If we plant more trees, the air will be fresher.",
        targetedMistake: "Câu điều kiện loại 1: If + Hiện tại đơn, will + V.",
        explanation: "Cấu trúc loại 1: 'If we plant..., the air will be...'.",
      },
    ],
  },
  9: {
    grammar: [
      {
        id: 301,
        topic: "relative_clauses",
        topicTitle: "Đại từ quan hệ",
        prompt: "The scientist ______ discovered this new vaccine was honored yesterday.",
        options: ["who", "which", "whose", "whom"],
        correctAnswer: "who",
        targetedMistake: "Đại từ quan hệ 'who' thay thế cho danh từ chỉ người.",
        explanation: "'The scientist' là người, làm chủ ngữ nên dùng 'who'.",
      },
      {
        id: 302,
        topic: "conditional_sentences",
        topicTitle: "Câu điều kiện loại 2",
        prompt: "If I had a million dollars, I ______ build a free school for children.",
        options: ["would", "will", "can", "shall"],
        correctAnswer: "would",
        targetedMistake: "Mệnh đề chính điều kiện loại 2 dùng 'would + V'.",
        explanation: "Công thức loại 2: If + S + V2/ed, S + would + V.",
      },
    ],
    listening: [
      {
        id: 401,
        topic: "listening_news_interview",
        topicTitle: "Nghe phỏng vấn nghề nghiệp",
        audioScript: "The chief engineer stated that renewable energy will provide sixty percent of the grid capacity by 2030.",
        prompt: "What percentage will renewable energy provide by 2030?",
        options: ["60 percent", "30 percent", "50 percent", "80 percent"],
        correctAnswer: "60 percent",
        targetedMistake: "Nghe tỷ lệ phần trăm 'sixty percent' (60%).",
        explanation: "Audio nói: 'sixty percent of the grid capacity'.",
      },
      {
        id: 402,
        topic: "listening_travel_experiences",
        topicTitle: "Nghe văn hóa & Du lịch bền vững",
        audioScript: "Preserving local cultural heritage is key to attracting international cultural tourists.",
        prompt: "What is key to attracting international cultural tourists?",
        options: ["Preserving local cultural heritage", "Building luxury shopping malls", "Lowering airfares", "Opening fast food chains"],
        correctAnswer: "Preserving local cultural heritage",
        targetedMistake: "Nghe thông điệp cốt lõi 'Preserving local cultural heritage'.",
        explanation: "Audio khẳng định: 'Preserving local cultural heritage is key...'.",
      },
    ],
    speaking: [
      {
        id: 501,
        topic: "speaking_opinions_reasons",
        topicTitle: "Nói giả định với Điều kiện loại 2",
        audioScript: "If I had a chance to study abroad, I would specialize in artificial intelligence.",
        prompt: "Giám khảo hỏi: 'What would you do if you were the president of your school club?'. Câu trả lời chuẩn là:",
        options: ["If I were the president, I would organize weekly speaking workshops.", "If I am the president, I would organize.", "If I were president, I will organize.", "If I was president, I organize."],
        correctAnswer: "If I were the president, I would organize weekly speaking workshops.",
        targetedMistake: "Cấu trúc Điều kiện loại 2: If + were/V2, would + V.",
        explanation: "Điều kiện loại 2 giả định ở hiện tại: 'If I were..., I would organize...'.",
      },
      {
        id: 502,
        topic: "speaking_unfamiliar_words",
        topicTitle: "Ứng biến khi không nhớ từ vựng chính xác",
        audioScript: "Could you please elaborate on that complex point and provide a concrete example?",
        prompt: "Khi gặp thuật ngữ học thuật trừu tượng trong buổi tranh biện, câu đề nghị giải thích chuẩn học thuật là:",
        options: ["Could you please elaborate on that concept and provide an example?", "Why you use that hard word?", "I don't like that word, speak again.", "Stop talking about hard things."],
        correctAnswer: "Could you please elaborate on that concept and provide an example?",
        targetedMistake: "Mẫu câu đề nghị giải thích thêm lịch sự và học thuật.",
        explanation: "'Could you please elaborate on that concept...?' là câu đề nghị giải thích thêm cực kỳ chuẩn mực.",
      },
    ],
  },
};

// Next Practice question bank for Reading Skill (Grades 1 to 9)
const NEXT_PRACTICE_READING_BY_GRADE: Record<number, any[]> = {
  1: [
    {
      id: 601,
      topic: "reading_vocabulary_context",
      topicTitle: "Từ vựng màu sắc & Đồ vật trong văn bản",
      readingPassage: "Look at the big tree. There are three birds singing. One bird is blue and two birds are green.",
      prompt: "How many birds are singing in the tree?",
      options: ["Three birds", "Two birds", "One bird", "Four birds"],
      correctAnswer: "Three birds",
      targetedMistake: "Nhận biết số lượng 'three' trong đoạn văn ngắn.",
      explanation: "Đoạn văn viết rõ: 'There are three birds singing' (Có 3 chú chim đang hót).",
    },
    {
      id: 602,
      topic: "reading_grammar_tenses",
      topicTitle: "Đọc hiểu giới từ chỉ vị trí (in, under)",
      readingPassage: "I have a cute cat. Her name is Mimi. Mimi sleeps in a small basket under my bed.",
      prompt: "Where does Mimi the cat sleep?",
      options: ["In a small basket under the bed", "On the table", "In the garden", "At school"],
      correctAnswer: "In a small basket under the bed",
      targetedMistake: "Đọc hiểu vị trí với giới từ 'in' và 'under'.",
      explanation: "Đoạn văn viết: 'Mimi sleeps in a small basket under my bed'.",
    },
  ],
  2: [
    {
      id: 601,
      topic: "reading_vocabulary_context",
      topicTitle: "Từ vựng đồ dùng học tập & Hành động",
      readingPassage: "Ben has three apples and two bananas in his bag. He eats one apple at lunch time.",
      prompt: "What does Ben eat at lunch time?",
      options: ["One apple", "Two bananas", "Three oranges", "A sandwich"],
      correctAnswer: "One apple",
      targetedMistake: "Nhận biết thông tin hành động với thì Hiện tại đơn.",
      explanation: "Đoạn văn nêu rõ: 'He eats one apple at lunch time'.",
    },
    {
      id: 602,
      topic: "reading_prepositions_connectors",
      topicTitle: "Liên từ 'because' chỉ nguyên nhân trong câu đọc",
      readingPassage: "On Sundays, Lan usually plays badminton with her brother in the park because they love sports.",
      prompt: "Why do Lan and her brother play badminton in the park?",
      options: ["Because they love sports.", "Because it rains.", "Because they have homework.", "Because they are sleeping."],
      correctAnswer: "Because they love sports.",
      targetedMistake: "Hiểu liên từ 'because' chỉ nguyên nhân trong câu đọc.",
      explanation: "Liên từ 'because they love sports' giải thích lý do hai bạn chơi cầu lông.",
    },
  ],
  3: [
    {
      id: 601,
      topic: "reading_grammar_tenses",
      topicTitle: "Động từ chỉ sở thích 'enjoy + V-ing'",
      readingPassage: "Tom likes swimming in the summer, but his sister Anna enjoys riding her bicycle in the afternoon.",
      prompt: "Which sport does Anna enjoy doing?",
      options: ["Riding her bicycle", "Swimming in the pool", "Playing badminton", "Reading books"],
      correctAnswer: "Riding her bicycle",
      targetedMistake: "Động từ chỉ sở thích 'enjoys + V-ing' (riding).",
      explanation: "Đoạn văn chỉ rõ: 'Anna enjoys riding her bicycle'.",
    },
    {
      id: 602,
      topic: "reading_vocabulary_context",
      topicTitle: "Dấu hiệu thời gian Quá khứ đơn (Yesterday)",
      readingPassage: "Yesterday was Sunday. Nam stayed at home and helped his parents clean the living room.",
      prompt: "When did Nam help his parents clean the living room?",
      options: ["Yesterday (Sunday)", "Tomorrow", "Every Monday", "Next weekend"],
      correctAnswer: "Yesterday (Sunday)",
      targetedMistake: "Nhận diện mốc thời gian quá khứ 'Yesterday' và động từ có đuôi '-ed'.",
      explanation: "Đoạn văn dùng thì Quá khứ đơn với trạng từ 'Yesterday' và động từ 'stayed', 'helped'.",
    },
  ],
  4: [
    {
      id: 601,
      topic: "reading_grammar_tenses",
      topicTitle: "Động từ quá khứ bất quy tắc trong bài đọc",
      readingPassage: "Last summer, Linda visited Ha Long Bay with her family. They took a boat trip and ate delicious fresh seafood.",
      prompt: "What did Linda and her family do during their trip?",
      options: ["They took a boat trip and ate fresh seafood.", "They stayed in a tent on a mountain.", "They bought new winter coats.", "They watched television at home."],
      correctAnswer: "They took a boat trip and ate fresh seafood.",
      targetedMistake: "Phân biệt các động từ quá khứ bất quy tắc: take -> took, eat -> ate.",
      explanation: "Bài đọc kể chuyến đi trong quá khứ bằng hai động từ bất quy tắc 'took' và 'ate'.",
    },
    {
      id: 602,
      topic: "reading_vocabulary_context",
      topicTitle: "Trạng từ tần suất (always, never)",
      readingPassage: "Peter always brushes his teeth twice a day, but he never drinks sweet soft drinks before going to bed.",
      prompt: "How often does Peter drink sweet soft drinks before going to bed?",
      options: ["He never drinks them.", "He always drinks them.", "He drinks them every evening.", "Twice a day."],
      correctAnswer: "He never drinks them.",
      targetedMistake: "Hiểu đúng trạng từ tần suất phủ định 'never' trong văn bản.",
      explanation: "Trạng từ 'never' có nghĩa là không bao giờ uống nước ngọt trước khi đi ngủ.",
    },
  ],
  5: [
    {
      id: 601,
      topic: "reading_grammar_tenses",
      topicTitle: "Thì Tương lai đơn (will + V) và liên từ 'because'",
      readingPassage: "Next weekend, our class will visit the National History Museum because we are studying ancient civilizations in history class.",
      prompt: "Why will the students visit the National History Museum next weekend?",
      options: ["Because they are studying ancient civilizations.", "Because they want to watch a cartoon.", "Because school is closed.", "Because they want to buy toys."],
      correctAnswer: "Because they are studying ancient civilizations.",
      targetedMistake: "Nhận biết thì Tương lai đơn (will visit) kết hợp mệnh đề chỉ nguyên nhân (because).",
      explanation: "Bài đọc kết hợp thì tương lai 'will visit' với lý do 'because we are studying ancient civilizations'.",
    },
    {
      id: 602,
      topic: "reading_vocabulary_context",
      topicTitle: "So sánh hơn của tính từ (larger and quieter)",
      readingPassage: "The city library is much larger and quieter than the old bookstore near my house.",
      prompt: "According to the passage, how is the city library compared to the bookstore?",
      options: ["It is larger and quieter.", "It is noisier and smaller.", "It is crowded and dirty.", "It is older and darker."],
      correctAnswer: "It is larger and quieter.",
      targetedMistake: "Hiểu cấu trúc so sánh hơn của tính từ ngắn (larger) và tính từ hai âm tiết tận cùng -y (quieter).",
      explanation: "'larger and quieter than...' là cấu trúc so sánh hơn trong tiếng Anh.",
    },
  ],
  6: [
    {
      id: 601,
      topic: "reading_grammar_tenses",
      topicTitle: "Dấu hiệu Hiện tại tiếp diễn 'At present' vs Hiện tại đơn",
      readingPassage: "At present, Nam is practicing English with an interactive app on his tablet, whereas his older brother usually reads printed grammar books in the evening.",
      prompt: "In the sentence above, why is the verb 'is practicing' used instead of 'practices'?",
      options: ["Because 'At present' indicates an action taking place right now.", "Because it describes a permanent scientific fact.", "Because it happened yesterday.", "Because it expresses a past habit."],
      correctAnswer: "Because 'At present' indicates an action taking place right now.",
      targetedMistake: "Dấu hiệu thì Hiện tại tiếp diễn 'At present' diễn tả hành động đang diễn ra tại thời điểm nói.",
      explanation: "Cụm từ 'At present' (hiện tại) là dấu hiệu của thì Hiện tại tiếp diễn, nên động từ dùng 'is practicing'.",
    },
    {
      id: 602,
      topic: "reading_vocabulary_context",
      topicTitle: "Động từ chỉ sở thích đi với danh động từ V-ing (enjoy discovering)",
      readingPassage: "Many secondary students like joining the science club because they enjoy discovering how natural phenomena work.",
      prompt: "Which rule explains the word form 'discovering' in the text?",
      options: ["Verbs of liking (enjoy) are followed by a V-ing gerund.", "It is a past participle used in the passive voice.", "It is an irregular past simple verb.", "It is an adjective describing feelings."],
      correctAnswer: "Verbs of liking (enjoy) are followed by a V-ing gerund.",
      targetedMistake: "Quy tắc ngữ pháp: Sau động từ chỉ sở thích 'enjoy' luôn đi với danh động từ V-ing.",
      explanation: "Sau các động từ chỉ sự yêu thích (enjoy, like, love), động từ theo sau phải thêm đuôi -ing ('discovering').",
    },
    {
      id: 603,
      topic: "reading_prepositions_connectors",
      topicTitle: "Liên từ nhượng bộ 'Although' trong văn bản đọc hiểu",
      readingPassage: "Although the reading test contains several unfamiliar academic words, Mai can easily guess their meanings from the surrounding context.",
      prompt: "What does the connector 'Although' show in this context?",
      options: ["A contrast (concession) between difficulty and successful guessing", "A direct result of cause and effect", "A sequence of past events in time order", "A future condition"],
      correctAnswer: "A contrast (concession) between difficulty and successful guessing",
      targetedMistake: "Hiểu liên từ nhượng bộ 'Although' chỉ sự tương phản giữa thử thách và kết quả tích cực.",
      explanation: "'Although' (mặc dù) dùng để nối hai vế có ý tương phản: mặc dù bài có từ lạ nhưng Mai vẫn đoán được nghĩa.",
    },
  ],
  7: [
    {
      id: 601,
      topic: "reading_grammar_tenses",
      topicTitle: "Câu điều kiện Loại 1 trong văn bản môi trường",
      readingPassage: "If we continue to use single-use plastic bags, marine animals will suffer serious consequences.",
      prompt: "Which conditional sentence structure is used in the passage above?",
      options: ["First conditional: If + present simple, will + V-infinitive", "Second conditional: If + past simple, would + V", "Zero conditional: If + present, present", "Third conditional with had + V3"],
      correctAnswer: "First conditional: If + present simple, will + V-infinitive",
      targetedMistake: "Nhận biết câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại/tương lai.",
      explanation: "Công thức loại 1: 'If we continue (hiện tại đơn), marine animals will suffer (will + V)'.",
    },
    {
      id: 602,
      topic: "reading_vocabulary_context",
      topicTitle: "Đại từ quan hệ 'who' thay thế cho danh từ chỉ người",
      readingPassage: "The artisan who creates these intricate ceramic bowls has practiced pottery for more than thirty years.",
      prompt: "Why is the relative pronoun 'who' used in the sentence above?",
      options: ["Because 'The artisan' refers to a person and serves as the subject.", "Because it refers to a place.", "Because it shows possession.", "Because it refers to an object (ceramic bowl)."],
      correctAnswer: "Because 'The artisan' refers to a person and serves as the subject.",
      targetedMistake: "Đại từ quan hệ 'who' thay thế cho danh từ chỉ người làm chủ ngữ.",
      explanation: "'The artisan' (nghệ nhân) là danh từ chỉ người làm chủ ngữ, do đó dùng đại từ quan hệ 'who'.",
    },
  ],
  8: [
    {
      id: 601,
      topic: "reading_grammar_tenses",
      topicTitle: "Thể bị động Hiện tại đơn (be + V3/ed)",
      readingPassage: "Solar panels are installed on the rooftop of our green school to generate clean renewable electricity.",
      prompt: "Which grammatical voice is used in 'are installed'?",
      options: ["Passive voice in the present simple (be + V3/ed)", "Active voice in the past continuous", "Future simple tense", "Present perfect continuous"],
      correctAnswer: "Passive voice in the present simple (be + V3/ed)",
      targetedMistake: "Nhận biết thể bị động thì Hiện tại đơn: 'are installed'.",
      explanation: "Cấu trúc bị động Hiện tại đơn: S + am/is/are + V3/ed ('are installed' - được lắp đặt).",
    },
    {
      id: 602,
      topic: "reading_vocabulary_context",
      topicTitle: "Quá khứ tiếp diễn kết hợp Quá khứ đơn (While...)",
      readingPassage: "While Dr. Robert was conducting research in the laboratory, a sudden power failure interrupted the experiment.",
      prompt: "Which grammatical pattern describes the two actions in the sentence?",
      options: ["A long action in progress (past continuous) interrupted by a short action (past simple).", "Two future actions happening together.", "Habitual actions in the present.", "Passive voice."],
      correctAnswer: "A long action in progress (past continuous) interrupted by a short action (past simple).",
      targetedMistake: "Phân biệt hành động đang diễn ra (was conducting) và hành động cắt ngang (interrupted).",
      explanation: "Mệnh đề 'While + quá khứ tiếp diễn' diễn tả hành động đang diễn ra thì có hành động quá khứ đơn cắt ngang.",
    },
  ],
  9: [
    {
      id: 601,
      topic: "reading_grammar_tenses",
      topicTitle: "Câu điều kiện loại 2 giả định ở hiện tại",
      readingPassage: "If our city invested more financial resources in modern public transit, traffic congestion would decrease significantly.",
      prompt: "What does the conditional structure 'If... invested, ... would decrease' express?",
      options: ["An unreal or hypothetical condition at present (Second conditional)", "A real condition that definitely happens every day", "A completed action in the distant past", "A formal request in the imperative mood"],
      correctAnswer: "An unreal or hypothetical condition at present (Second conditional)",
      targetedMistake: "Cấu trúc câu điều kiện loại 2 giả định điều không có thật ở hiện tại: If + V2/ed, would + V.",
      explanation: "Điều kiện loại 2: 'If our city invested (quá khứ đơn), traffic congestion would decrease (would + V)' diễn tả giả định ở hiện tại.",
    },
    {
      id: 602,
      topic: "reading_vocabulary_context",
      topicTitle: "Mệnh đề quan hệ không xác định (Non-defining relative clause)",
      readingPassage: "Artificial intelligence, which is transforming modern healthcare and education, requires comprehensive ethical guidelines.",
      prompt: "In the sentence above, what type of clause is 'which is transforming modern healthcare and education'?",
      options: ["A non-defining relative clause providing extra explanatory information", "A conditional clause showing cause", "An adverbial clause of time", "An imperative command"],
      correctAnswer: "A non-defining relative clause providing extra explanatory information",
      targetedMistake: "Nhận diện mệnh đề quan hệ không xác định (đứng giữa hai dấu phẩy) bổ sung thông tin cho 'Artificial intelligence'.",
      explanation: "Mệnh đề quan hệ không xác định dùng đại từ 'which' nằm giữa hai dấu phẩy để bổ nghĩa thêm cho danh từ riêng/xác định.",
    },
  ],
};

// Helper: Rule-based pedagogical analysis for Grammar, Listening, Speaking and Writing
function normalizeForComparison(str: string): string {
  return String(str || '')
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:"']/g, '')
    .replace(/\s+/g, ' ');
}

function generateRuleBasedAnalysis(
  submissions: any[],
  skillType: "grammar" | "listening" | "speaking" | "writing" | "reading" = "grammar",
  gradeLevel: number = 6
) {
  const isListening = skillType === "listening";
  const isSpeaking = skillType === "speaking";
  const isWriting = skillType === "writing";
  const isReading = skillType === "reading";

  const detailedAnalysis = submissions.map((sub: any) => {
    const isEssay = isWriting && (sub.id === 6 || sub.isEssay || sub.topic === "writing_essay_paragraph");
    let isCorrect = false;

    if (isEssay) {
      const studentSentences = String(sub.studentAnswer || "")
        .trim()
        .split(/[.!?]+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 2);
      const studentWords = String(sub.studentAnswer || "")
        .trim()
        .split(/\s+/)
        .filter(Boolean);

      // Quy tắc số câu Câu 6: Lớp 1-3: 3-6 câu; Lớp 4-5: 8-10 câu; Lớp 6-9: >15 câu
      let minSentences = 3;
      let targetLabel = "3 - 6 câu";
      if (gradeLevel <= 3) {
        minSentences = 3;
        targetLabel = "3 - 6 câu";
        isCorrect = studentSentences.length >= 3;
      } else if (gradeLevel <= 5) {
        minSentences = 8;
        targetLabel = "8 - 10 câu";
        isCorrect = studentSentences.length >= 8;
      } else {
        minSentences = 16;
        targetLabel = "> 15 câu (trên 15 câu)";
        isCorrect = studentSentences.length > 15;
      }
    } else if (sub.score !== undefined) {
      isCorrect = Number(sub.score) >= 70;
    } else if (isWriting) {
      const normStudent = normalizeForComparison(sub.studentAnswer);
      const normCorrect = normalizeForComparison(sub.correctAnswer);
      isCorrect = normStudent.length > 0 && normStudent === normCorrect;
    } else {
      isCorrect =
        String(sub.studentAnswer).trim().toLowerCase() ===
        String(sub.correctAnswer).trim().toLowerCase();
    }

    let errorType = "";
    let shortExplanation = "";

    if (isCorrect) {
      if (isEssay) {
        const sentenceCount = String(sub.studentAnswer || "").trim().split(/[.!?]+/).filter((s) => s.trim().length > 2).length;
        shortExplanation = `Xuất sắc! Em đã viết được ${sentenceCount} câu, đạt chuẩn yêu cầu số câu cho Lớp ${gradeLevel} (${gradeLevel <= 3 ? "3 - 6 câu" : gradeLevel <= 5 ? "8 - 10 câu" : "> 15 câu"}). Bài viết đúng chủ đề, từ vựng phong phú và mạch lạc!`;
      } else if (isSpeaking) {
        shortExplanation =
          sub.score !== undefined
            ? `Xuất sắc! AI chấm điểm phát âm đạt ${sub.score}/100 điểm. Em đọc rất rõ ràng, tự tin và chuẩn ngữ điệu!`
            : "Rất tốt! Em đã sử dụng cấu trúc ngữ pháp khẩu ngữ chuẩn xác và phản xạ tự tin.";
      } else if (isListening) {
        shortExplanation = "Rất tốt! Em đã bắt đúng từ khóa chính và thông tin chuẩn trong đoạn nghe.";
      } else if (isWriting) {
        shortExplanation = "Tuyệt vời! Em đã tự viết và sắp xếp câu hoàn toàn chính xác ngữ pháp, tuân thủ đúng quy tắc mỗi từ chỉ dùng 1 lần.";
      } else if (isReading) {
        shortExplanation = sub.hintExplanation
          ? `Chính xác! ${sub.hintExplanation}`
          : "Rất tốt! Em đã đọc hiểu chính xác câu hỏi và nắm vững từ vựng, ngữ pháp trong ngữ cảnh đoạn văn.";
      } else {
        shortExplanation = "Tuyệt vời! Em đã chọn đúng cấu trúc ngữ pháp chuẩn xác.";
      }
    } else {
      if (isEssay) {
        const sentenceCount = String(sub.studentAnswer || "").trim().split(/[.!?]+/).filter((s) => s.trim().length > 2).length;
        const reqStr = gradeLevel <= 3 ? "3 - 6 câu" : gradeLevel <= 5 ? "8 - 10 câu" : "> 15 câu";
        errorType = `Số câu chưa đạt chuẩn yêu cầu của Lớp ${gradeLevel} (yêu cầu ${reqStr}, hiện có ${sentenceCount} câu)`;
        shortExplanation = `Bài viết hiện có ${sentenceCount} câu. Quy định cho Lớp ${gradeLevel} là ${reqStr}. Em hãy đọc kỹ các câu hỏi gợi ý và viết thêm câu để hoàn thiện đoạn văn nhé! Tham khảo: "${sub.correctAnswer}"`;
      } else if (isSpeaking) {
        errorType =
          sub.score !== undefined
            ? `Điểm phát âm đạt ${sub.score}/100 điểm. Một số từ hoặc âm đuôi cần đọc rõ hơn`
            : "Chưa phản xạ chính xác cấu trúc ngữ pháp khi nói hoặc lúng túng khi gặp từ lạ";
        shortExplanation =
          sub.score !== undefined
            ? `AI chấm phát âm đạt ${sub.score}/100 điểm. Em hãy nghe lại câu mẫu chuẩn và bấm luyện đọc lại để nâng cao độ trôi chảy nhé!`
            : sub.hintExplanation
            ? `${sub.hintExplanation} Đáp án chuẩn là "${sub.correctAnswer}".`
            : `Em hãy chú ý ngữ cảnh và cấu trúc câu. Đáp án chuẩn là "${sub.correctAnswer}".`;
      } else if (isListening) {
        errorType = "Chưa nghe rõ từ khóa then chốt hoặc bị phân tâm bởi thông tin gây nhiễu";
        shortExplanation = sub.hintExplanation
          ? `${sub.hintExplanation} Đáp án chuẩn là "${sub.correctAnswer}".`
          : `Em hãy chú ý ngữ cảnh và cấu trúc câu. Đáp án chuẩn là "${sub.correctAnswer}".`;
      } else if (isWriting) {
        errorType = "Lỗi trật tự từ, chia thì động từ hoặc cấu trúc câu khi tự viết";
        shortExplanation = sub.hintExplanation
          ? `${sub.hintExplanation} Câu viết chuẩn là: "${sub.correctAnswer}".`
          : `Em hãy chú ý trật tự từ và quy tắc chia thì khi viết. Câu chuẩn là: "${sub.correctAnswer}".`;
      } else if (isReading) {
        if (sub.topic === 'reading_vocabulary_context') {
          errorType = "Chưa hiểu rõ nghĩa từ vựng hoặc từ khóa trong ngữ cảnh đoạn văn";
        } else if (sub.topic === 'reading_grammar_tenses') {
          errorType = "Nhầm lẫn dấu hiệu thì động từ hoặc cấu trúc ngữ pháp trong câu đọc";
        } else if (sub.topic === 'reading_prepositions_connectors') {
          errorType = "Nhầm lẫn liên từ (because/although/so) hoặc giới từ trong bài đọc";
        } else if (sub.topic === 'reading_pronouns_references') {
          errorType = "Xác định nhầm đại từ thay thế trong bài đọc";
        } else if (sub.topic === 'reading_passive_voice') {
          errorType = "Nhầm lẫn thể bị động (be + V3/ed) trong văn bản";
        } else if (sub.topic === 'reading_conditionals_hypothetical') {
          errorType = "Nhầm lẫn câu điều kiện hoặc tình huống giả định trong văn bản";
        } else {
          errorType = "Chưa xác định đúng thông tin hoặc quy tắc ngữ pháp trong bài đọc";
        }

        shortExplanation = sub.hintExplanation
          ? `${sub.hintExplanation} Đáp án chuẩn theo bài đọc là: "${sub.correctAnswer}".`
          : `Em hãy đọc kỹ lại câu văn chứa từ khóa trong đoạn văn. Đáp án chuẩn là: "${sub.correctAnswer}".`;
      } else {
        errorType = "Nhầm lẫn cấu trúc ngữ pháp tương ứng";
        shortExplanation = sub.hintExplanation
          ? `${sub.hintExplanation} Đáp án chuẩn là "${sub.correctAnswer}".`
          : `Em hãy chú ý ngữ cảnh và cấu trúc câu. Đáp án chuẩn là "${sub.correctAnswer}".`;
      }
    }

    return {
      questionId: sub.id,
      topic: sub.topic,
      topicTitle: sub.topicTitle,
      isCorrect,
      studentAnswer: sub.studentAnswer,
      correctAnswer: sub.correctAnswer,
      audioScript: sub.audioScript,
      readingPassage: sub.readingPassage,
      errorType: isCorrect ? undefined : errorType,
      shortExplanation,
      score: sub.score,
    };
  });

  // Calculate topic statistics
  const topicStats: Record<string, { title: string; correct: number; total: number }> = {};

  detailedAnalysis.forEach((item: any) => {
    if (!topicStats[item.topic]) {
      topicStats[item.topic] = { title: item.topicTitle || item.topic, correct: 0, total: 0 };
    }
    topicStats[item.topic].total += 1;
    if (item.isCorrect) {
      topicStats[item.topic].correct += 1;
    }
  });

  const goodTopics: any[] = [];
  const needPracticeTopics: any[] = [];
  const priorityReviewTopics: any[] = [];

  Object.entries(topicStats).forEach(([key, val]) => {
    if (val.total > 0) {
      if (val.correct === val.total) {
        goodTopics.push({
          topic: key,
          topicTitle: val.title,
          status: "good",
          correctCount: val.correct,
          totalCount: val.total,
          statusNote: isWriting
            ? "Em viết câu rất chuẩn ngữ pháp, đúng trật tự từ và thì động từ!"
            : isSpeaking
            ? "Em phản xạ rất tự tin và vận dụng đúng cấu trúc ngữ pháp giao tiếp!"
            : isListening
            ? "Em bắt từ khóa và nghe hiểu rất tốt ở dạng này!"
            : isReading
            ? "Em đọc hiểu đoạn văn rất tốt, nắm vững từ vựng và ngữ pháp trong ngữ cảnh!"
            : "Em đã nắm rất chắc các câu hỏi ở dạng này!",
        });
      } else if (val.correct > 0) {
        needPracticeTopics.push({
          topic: key,
          topicTitle: val.title,
          status: "need_practice",
          correctCount: val.correct,
          totalCount: val.total,
          statusNote: isWriting
            ? "Em đã nắm được ý chính nhưng cần chú ý trật tự từ hoặc chia động từ khi viết câu."
            : isSpeaking
            ? "Em đã nắm được ý chính nhưng cần rèn thêm cách diễn đạt khi gặp từ vựng mới."
            : isListening
            ? "Em nghe bắt được ý cơ bản nhưng đôi khi bị thông tin phụ gây phân tâm."
            : isReading
            ? "Em đã hiểu ý chính của bài đọc nhưng cần chú ý kỹ hơn các từ khóa ngữ pháp và từ vựng cốt lõi."
            : "Em hiểu bài nhưng đôi chỗ còn nhầm lẫn nhỏ.",
        });
      } else {
        priorityReviewTopics.push({
          topic: key,
          topicTitle: val.title,
          status: "priority_review",
          correctCount: val.correct,
          totalCount: val.total,
          statusNote: isWriting
            ? "Em nên ôn lại cấu trúc viết câu (S + V + O), thì động từ và giới từ chỉ vị trí/thời gian trước khi làm tiếp."
            : isSpeaking
            ? "Em nên ôn lại các mẫu câu hỏi làm rõ từ mới (What does... mean?) và thì động từ trong lời nói."
            : isListening
            ? "Em nên nghe lại từ khóa then chốt và các từ chỉ vị trí/thời gian trước khi làm tiếp."
            : isReading
            ? "Em nên đọc chậm lại câu văn chứa từ khóa trong bài và ôn lại các điểm ngữ pháp cơ bản để hiểu sâu hơn nhé."
            : "Em nên xem kỹ lại quy tắc của chủ điểm này trước khi làm tiếp.",
        });
      }
    }
  });

  // Common mistake note
  const incorrectSubs = detailedAnalysis.filter((d: any) => !d.isCorrect);
  let commonMistakeNote = "";
  if (incorrectSubs.length === 0) {
    commonMistakeNote = isWriting
      ? `Chúc mừng em! Em đã viết chính xác cả ${submissions.length} câu bài tập kỹ năng Writing Lớp ${gradeLevel}. Cấu trúc câu và ngữ pháp của em rất vững vàng!`
      : isSpeaking
      ? `Chúc mừng em! Em đã trả lời chính xác cả ${submissions.length} câu kiểm tra kỹ năng Speaking Lớp ${gradeLevel}. Phản xạ và kiến thức nói của em rất tự tin!`
      : isListening
      ? `Chúc mừng em! Em đã nghe chính xác cả ${submissions.length} câu và hoàn thành xuất sắc bài kiểm tra Lớp ${gradeLevel}.`
      : isReading
      ? `Chúc mừng em! Em đã đọc hiểu chính xác cả ${submissions.length} câu kiểm tra kỹ năng Reading Lớp ${gradeLevel}. Khả năng nhận diện từ vựng và ngữ pháp trong bài đọc của em rất xuất sắc!`
      : `Em đã làm rất tốt toàn bộ ${submissions.length} câu kiểm tra ngữ pháp Lớp ${gradeLevel}! Em nắm rất vững kiến thức.`;
  } else {
    const mistakeNames = incorrectSubs.map((i: any) => i.topicTitle);
    commonMistakeNote = isWriting
      ? `Trong bài làm này, em cần lưu ý hơn khi viết về: ${Array.from(new Set(mistakeNames)).join(", ")}. Hãy chú ý trật tự trạng từ chỉ tần suất, thêm 's/es' với chủ ngữ số ít và dùng đúng giới từ 'at/on/in' nhé!`
      : isSpeaking
      ? `Trong lượt làm bài này, em cần lưu ý hơn về: ${Array.from(new Set(mistakeNames)).join(", ")}. Khi gặp từ lạ chưa biết nghĩa trong lúc nói, em đừng lo lắng mà hãy chủ động dùng câu hỏi 'What does [từ mới] mean?' hoặc 'Could you explain that word?' nhé!`
      : isListening
      ? `Trong bài làm này, em cần lưu ý hơn về: ${Array.from(new Set(mistakeNames)).join(", ")}. Hãy tập trung lắng nghe từ khóa chính và tránh để thông tin gây nhiễu làm phân tâm nhé!`
      : isReading
      ? `Trong bài đọc này, em cần lưu ý hơn về: ${Array.from(new Set(mistakeNames)).join(", ")}. Một số học sinh thường làm sai vì chưa hiểu rõ từ vựng trong ngữ cảnh hoặc chưa để ý thì/cấu trúc câu. Em hãy đọc chậm lại câu chứa từ khóa để tìm manh mối nhé!`
      : `Trong lượt làm bài này, em cần lưu ý hơn về: ${Array.from(new Set(mistakeNames)).join(", ")}. Hãy đọc kỹ dấu hiệu nhận biết và ôn lại quy tắc nhé!`;
  }

  // Pick Next Practice based on grade level
  const gradeKey = gradeLevel >= 1 && gradeLevel <= 9 ? gradeLevel : 6;
  const gradeData = NEXT_PRACTICE_BY_GRADE[gradeKey] || NEXT_PRACTICE_BY_GRADE[6];
  const nextPractice = isSpeaking
    ? gradeData.speaking
    : isListening
    ? gradeData.listening
    : isWriting
    ? (gradeData.writing || gradeData.grammar)
    : isReading
    ? (NEXT_PRACTICE_READING_BY_GRADE[gradeKey] || gradeData.grammar)
    : gradeData.grammar;

  return {
    detailedAnalysis,
    grammarMap: {
      goodTopics,
      needPracticeTopics,
      priorityReviewTopics,
      commonMistakeNote,
    },
    nextPractice,
    skillType,
    gradeLevel,
  };
}

// API Route: AI Analysis & Practice Generator
app.post("/api/analyze", async (req, res) => {
  const { submissions, skillType = "grammar", gradeLevel = 6 } = req.body;

  if (!submissions || !Array.isArray(submissions) || submissions.length === 0) {
    return res.status(400).json({ error: "Missing submissions array" });
  }

  const numGrade = Number(gradeLevel) || 6;
  const isListening = skillType === "listening";
  const isSpeaking = skillType === "speaking";
  const isWriting = skillType === "writing";
  const isReading = skillType === "reading";
  const currentSkillType: "grammar" | "listening" | "speaking" | "writing" | "reading" = isSpeaking
    ? "speaking"
    : isListening
    ? "listening"
    : isWriting
    ? "writing"
    : isReading
    ? "reading"
    : "grammar";
  const ai = getAiClient();

  // If AI is not configured or fails, use the robust rule-based pedagogical generator
  if (!ai) {
    return res.json(generateRuleBasedAnalysis(submissions, currentSkillType, numGrade));
  }

  try {
    const prompt = `
Bạn là Trợ lý AI sư phạm tiếng Anh cho học sinh LỚP ${numGrade} (đối tượng học sinh từ Lớp 1 đến Lớp 9) trong ứng dụng "GrammarPath AI".
Kỹ năng hiện tại: ${isSpeaking ? "NÓI (Speaking Tiếng Anh)" : isListening ? "NGHE (Listening)" : isWriting ? "VIẾT (Writing - Viết câu/văn ngắn)" : isReading ? "ĐỌC HIỂU (Reading Tiếng Anh)" : "NGỮ PHÁP (Grammar)"}.
Khối lớp đã chọn: Lớp ${numGrade}.

${isReading ? `
Lưu ý sư phạm đặc thù cho kỹ năng Reading (Đọc hiểu) Lớp ${numGrade}:
- Đối tượng: Học sinh Lớp ${numGrade} (đặc biệt học sinh Lớp 6 và THCS thường làm sai reading vì không hiểu rõ từ vựng hoặc ngữ pháp trong câu đọc).
- Mục tiêu: Giúp học sinh phát hiện dạng lỗi ngữ pháp/từ vựng thường gặp trong bài đọc, hiểu ngắn gọn nguyên nhân sai (1–2 câu) và luyện thêm đúng phần còn yếu. Không làm bài thay học sinh và không cam kết điểm số.
- Khi học sinh trả lời, AI cần:
  + Xác định câu đúng/sai;
  + Xác định lỗi ngữ pháp/từ vựng nếu sai;
  + Phân loại lỗi thuộc chủ điểm nào;
  + Giải thích quy tắc bằng 1–2 câu ngắn gọn, dễ hiểu phù hợp học sinh Lớp ${numGrade};
  + TUYỆT ĐỐI không nhận xét học sinh là "yếu", "kém".
- reading Map của em:
  + Chủ điểm đã khá tốt
  + Chủ điểm cần luyện thêm
  + Chủ điểm nên ưu tiên ôn
  + Lỗi thường gặp của học sinh trong bài làm này.
- Tạo ngay 2–3 câu hỏi mới (kèm readingPassage đoạn văn ngắn 1-3 câu) thuộc đúng phần học sinh làm sai để luyện lại.
` : ''}

${isWriting ? `
Lưu ý sư phạm đặc thù cho kỹ năng Writing Lớp ${numGrade}:
- Học sinh TỰ VIẾT câu trả lời bằng tiếng Anh (không chỉ trắc nghiệm):
  + Đối với các câu 1–5: QUY TẮC MỖI TỪ CHỈ SỬ DỤNG MỘT LẦN. Học sinh sắp xếp hoặc tự viết câu từ ngân hàng từ cho sẵn, mỗi từ chỉ được dùng đúng 1 lần. Hãy kiểm tra kỹ trật tự từ S-V-O, sự hòa hợp chủ vị, mạo từ và dấu câu. Nếu học sinh viết đúng ý nghĩa và ngữ pháp, hãy công nhận đúng và khen ngợi!
  + Đối với câu 6: ĐỀ BÀI VĂN TIẾNG ANH NGẪU NHIÊN (Paragraph/Essay Writing).
    * QUY ĐỊNH SỐ LƯỢNG CÂU BẮT BUỘC THEO KHỐI LỚP:
      - Lớp 1–3: viết từ 3 đến 6 câu.
      - Lớp 4–5: viết từ 8 đến 10 câu.
      - Lớp 6–9: viết trên 15 câu (> 15 câu).
    * Khối lớp hiện tại là Lớp ${numGrade}. Hãy đếm số câu trong đoạn văn của học sinh và đánh giá xem có đạt quy chuẩn số câu trên không:
      - Nếu số lượng câu đạt chuẩn (${numGrade <= 3 ? "3 - 6 câu" : numGrade <= 5 ? "8 - 10 câu" : "> 15 câu"}) và nội dung phù hợp: Khen ngợi nhiệt tình về số lượng câu và cách triển khai ý!
      - Nếu chưa đủ số lượng câu tối thiểu: Nhắc nhở nhẹ nhàng số câu đã viết so với yêu cầu chuẩn (${numGrade <= 3 ? "3 - 6 câu" : numGrade <= 5 ? "8 - 10 câu" : "> 15 câu"}), gợi ý thêm ý tưởng để viết tiếp.
    * Đánh giá tính mạch lạc, từ vựng phong phú và sửa 1–2 lỗi ngữ pháp (nếu có).
- Mục tiêu: Giúp học sinh phát hiện dạng lỗi ngữ pháp thường gặp khi tự viết, hiểu ngắn gọn nguyên nhân sai và luyện thêm đúng phần còn yếu. Không làm bài thay học sinh và không cam kết điểm số.
- Khi học sinh sai: xác định câu đúng/sai, xác định lỗi ngữ pháp nếu sai, phân loại lỗi thuộc chủ điểm nào, giải thích quy tắc bằng 1–2 câu ngắn phù hợp học sinh Lớp ${numGrade}.
- writing Map: Tổng hợp các chủ điểm (Chủ điểm đã khá tốt, Chủ điểm cần luyện thêm, Chủ điểm nên ưu tiên ôn, Lỗi thường gặp).
- Tạo 2–3 câu luyện tập tiếp theo phù hợp với lỗi vừa phát hiện của học sinh.
` : ''}

${isSpeaking ? `
Lưu ý sư phạm đặc thù cho kỹ năng Speaking Lớp ${numGrade}:
- Học sinh thường gặp lỗi ngữ pháp khi nói vì gặp từ không quen thuộc hoặc chưa vững cấu trúc câu trong văn nói.
- Mục tiêu: Giúp học sinh phát hiện điểm cần cải thiện, không làm bài thay học sinh và không cam kết điểm số.
- Khi học sinh sai: xác định câu đúng/sai, xác định lỗi ngữ pháp khi nói, phân loại thuộc chủ điểm nào, giải thích quy tắc ngắn gọn 1-2 câu phù hợp học sinh Lớp ${numGrade}.
- speaking Map: Tổng hợp các chủ điểm (Chủ điểm đã khá tốt, Chủ điểm cần luyện thêm, Chủ điểm nên ưu tiên ôn, Lỗi thường gặp).
- Tạo 2-3 câu luyện tập tiếp theo phù hợp với lỗi vừa phát hiện của học sinh (kèm audioScript là câu thoại mẫu).
` : ''}

Quy tắc cực kỳ quan trọng:
1. Đối tượng là học sinh Lớp ${numGrade}: Dùng ngôn ngữ tiếng Việt thân thiện, trong sáng, tích cực, phù hợp với lứa tuổi học sinh Lớp ${numGrade}.
2. TUYỆT ĐỐI KHÔNG nhận xét học sinh là "yếu", "kém" hoặc dùng bất kỳ ngôn ngữ tiêu cực nào.
3. Không giải bài dài dòng, chỉ giải thích ngắn gọn (1-2 câu) giúp học sinh hiểu bản chất kiến thức hoặc phản xạ tự tin khi gặp từ lạ.
4. Tổng hợp chính xác các chủ điểm theo bài nộp của học sinh thành 3 nhóm (goodTopics, needPracticeTopics, priorityReviewTopics) và rút ra nhận xét chung (commonMistakeNote).
5. Tạo 2-3 câu luyện tập tiếp theo (Next Practice) bám sát độ khó trình độ Lớp ${numGrade} nhằm khắc phục trực tiếp dạng câu học sinh vừa làm chưa chuẩn (cung cấp audioScript ngắn nếu là bài nghe/nói để học sinh nghe phát âm).

Dưới đây là bài nộp của học sinh:
${JSON.stringify(submissions, null, 2)}

Trả về kết quả JSON theo đúng schema.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            detailedAnalysis: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  questionId: { type: Type.INTEGER },
                  topic: { type: Type.STRING },
                  topicTitle: { type: Type.STRING },
                  isCorrect: { type: Type.BOOLEAN },
                  studentAnswer: { type: Type.STRING },
                  correctAnswer: { type: Type.STRING },
                  readingPassage: {
                    type: Type.STRING,
                    description: "Đoạn văn đọc hiểu nếu có",
                  },
                  audioScript: {
                    type: Type.STRING,
                    description: "Đoạn thoại tiếng Anh nếu có",
                  },
                  errorType: {
                    type: Type.STRING,
                    description: "Tên dạng lỗi nếu sai. Nếu đúng thì để chuỗi rỗng.",
                  },
                  shortExplanation: {
                    type: Type.STRING,
                    description: `1-2 câu giải thích ngắn gọn, dễ hiểu phù hợp học sinh Lớp ${numGrade}`,
                  },
                },
                required: [
                  "questionId",
                  "topic",
                  "topicTitle",
                  "isCorrect",
                  "studentAnswer",
                  "correctAnswer",
                  "shortExplanation",
                ],
              },
            },
            grammarMap: {
              type: Type.OBJECT,
              properties: {
                goodTopics: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      topic: { type: Type.STRING },
                      topicTitle: { type: Type.STRING },
                      status: { type: Type.STRING },
                      correctCount: { type: Type.INTEGER },
                      totalCount: { type: Type.INTEGER },
                      statusNote: { type: Type.STRING },
                    },
                    required: ["topic", "topicTitle", "status", "correctCount", "totalCount", "statusNote"],
                  },
                },
                needPracticeTopics: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      topic: { type: Type.STRING },
                      topicTitle: { type: Type.STRING },
                      status: { type: Type.STRING },
                      correctCount: { type: Type.INTEGER },
                      totalCount: { type: Type.INTEGER },
                      statusNote: { type: Type.STRING },
                    },
                    required: ["topic", "topicTitle", "status", "correctCount", "totalCount", "statusNote"],
                  },
                },
                priorityReviewTopics: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      topic: { type: Type.STRING },
                      topicTitle: { type: Type.STRING },
                      status: { type: Type.STRING },
                      correctCount: { type: Type.INTEGER },
                      totalCount: { type: Type.INTEGER },
                      statusNote: { type: Type.STRING },
                    },
                    required: ["topic", "topicTitle", "status", "correctCount", "totalCount", "statusNote"],
                  },
                },
                commonMistakeNote: {
                  type: Type.STRING,
                  description: "Nhận xét tổng quan tích cực về dạng lỗi thường gặp cần lưu ý",
                },
              },
              required: ["goodTopics", "needPracticeTopics", "priorityReviewTopics", "commonMistakeNote"],
            },
            nextPractice: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.INTEGER },
                  topic: { type: Type.STRING },
                  topicTitle: { type: Type.STRING },
                  readingPassage: {
                    type: Type.STRING,
                    description: "Đoạn văn đọc hiểu ngắn 1-3 câu nếu là bài luyện đọc tiếp theo",
                  },
                  prompt: { type: Type.STRING },
                  audioScript: {
                    type: Type.STRING,
                    description: "Đoạn văn hoặc câu thoại tiếng Anh ngắn nếu là bài nghe/nói tiếp theo",
                  },
                  options: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  correctAnswer: { type: Type.STRING },
                  targetedMistake: { type: Type.STRING },
                  explanation: { type: Type.STRING },
                },
                required: [
                  "id",
                  "topic",
                  "topicTitle",
                  "prompt",
                  "options",
                  "correctAnswer",
                  "targetedMistake",
                  "explanation",
                ],
              },
            },
          },
          required: ["detailedAnalysis", "grammarMap", "nextPractice"],
        },
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    if (!parsed || !parsed.grammarMap) {
      throw new Error("Phản hồi AI không đúng cấu trúc.");
    }
    return res.json({
      ...parsed,
      skillType: currentSkillType,
      gradeLevel: numGrade,
    });
  } catch (error) {
    console.error("AI Analysis error, using pedagogical fallback:", error);
    const fallbackData = generateRuleBasedAnalysis(
      submissions,
      currentSkillType,
      numGrade
    );
    return res.json({
      ...fallbackData,
      isFallback: true,
      note: "Hệ thống phân tích đã tự động kích hoạt chế độ dự phòng chuẩn xác.",
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`GrammarPath AI server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
