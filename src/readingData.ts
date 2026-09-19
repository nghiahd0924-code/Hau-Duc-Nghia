import { Question } from './types';
import { GradeLevel } from './components/GradeSelection';

// ------------------------------------------------------------------------------------
// BỘ CÂU HỎI KỸ NĂNG ĐỌC HIỂU (READING) THEO TỪNG LỚP (LỚP 1 ĐẾN LỚP 9)
// Mỗi lớp gồm từ 8 đến 10 câu kèm các đoạn văn ngắn, bám sát các chủ điểm ngữ cảnh
// ------------------------------------------------------------------------------------

export const READING_QUESTIONS_BY_GRADE: Record<GradeLevel, Question[]> = {
  "1": [
    {
      "id": 1,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng màu sắc & Đồ vật trong văn bản",
      "readingPassage": "This is my dog, Max. Max is brown. He has two big ears and a happy tail. Max likes to play with a red ball in the garden.",
      "prompt": "What color is Max the dog?",
      "options": [
        "Brown",
        "Yellow",
        "Black",
        "White"
      ],
      "correctAnswer": "Brown",
      "hintExplanation": "Đoạn văn viết rõ: \"Max is brown\" (Max có màu nâu)."
    },
    {
      "id": 2,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng màu sắc & Đồ vật trong văn bản",
      "readingPassage": "This is my dog, Max. Max is brown. He has two big ears and a happy tail. Max likes to play with a red ball in the garden.",
      "prompt": "What toy does Max like to play with?",
      "options": [
        "A red ball",
        "A blue fish",
        "A green pencil",
        "A big box"
      ],
      "correctAnswer": "A red ball",
      "hintExplanation": "Đoạn văn viết: \"Max likes to play with a red ball\" (một quả bóng màu đỏ)."
    },
    {
      "id": 3,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Số ít / số nhiều & There is / There are trong bài đọc",
      "readingPassage": "Look at our classroom. There is a big green board on the wall. We have five desks and five chairs. A cute cat is under the teacher's desk.",
      "prompt": "How many desks are there in the classroom?",
      "options": [
        "Five desks",
        "Three desks",
        "Two desks",
        "Ten desks"
      ],
      "correctAnswer": "Five desks",
      "hintExplanation": "Đoạn văn nêu rõ số lượng: \"We have five desks\" (chúng tớ có năm chiếc bàn)."
    },
    {
      "id": 4,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Số ít / số nhiều & There is / There are trong bài đọc",
      "readingPassage": "Look at our classroom. There is a big green board on the wall. We have five desks and five chairs. A cute cat is under the teacher's desk.",
      "prompt": "Where is the cute cat sleeping?",
      "options": [
        "Under the teacher's desk",
        "On the roof",
        "In the school bag",
        "Behind the board"
      ],
      "correctAnswer": "Under the teacher's desk",
      "hintExplanation": "Câu cuối đoạn văn: \"A cute cat is under the teacher's desk\" (ở dưới bàn của cô giáo)."
    },
    {
      "id": 5,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Đọc hiểu hành động & Từ chỉ thành viên gia đình",
      "readingPassage": "Every morning, my mom drinks warm milk. My dad eats a red apple. I eat two slices of bread. We are very happy together.",
      "prompt": "Who drinks warm milk in the morning?",
      "options": [
        "Mom",
        "Dad",
        "Me",
        "The cat"
      ],
      "correctAnswer": "Mom",
      "hintExplanation": "Đoạn văn chỉ rõ: \"my mom drinks warm milk\" (mẹ uống sữa ấm)."
    },
    {
      "id": 6,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Đọc hiểu hành động & Từ chỉ thành viên gia đình",
      "readingPassage": "Every morning, my mom drinks warm milk. My dad eats a red apple. I eat two slices of bread. We are very happy together.",
      "prompt": "What does Dad eat for breakfast?",
      "options": [
        "A red apple",
        "Two bananas",
        "A fish",
        "Warm milk"
      ],
      "correctAnswer": "A red apple",
      "hintExplanation": "Đoạn văn viết: \"My dad eats a red apple\" (bố ăn một quả táo đỏ)."
    },
    {
      "id": 7,
      "topic": "reading_food_likes",
      "topicTitle": "Đọc hiểu món ăn & Trái cây yêu thích",
      "readingPassage": "Anna loves fruit. Every day she eats one sweet red apple and one yellow banana. Fruit makes her strong and healthy.",
      "prompt": "How many apples does Anna eat every day?",
      "options": [
        "One red apple",
        "Three red apples",
        "Five green apples",
        "No apples"
      ],
      "correctAnswer": "One red apple",
      "hintExplanation": "Đoạn văn viết rõ: \"Every day she eats one sweet red apple\" (một quả táo đỏ ngọt)."
    },
    {
      "id": 8,
      "topic": "reading_food_likes",
      "topicTitle": "Đọc hiểu món ăn & Trái cây yêu thích",
      "readingPassage": "Anna loves fruit. Every day she eats one sweet red apple and one yellow banana. Fruit makes her strong and healthy.",
      "prompt": "What fruit is yellow in the story?",
      "options": [
        "The banana",
        "The apple",
        "The grape",
        "The orange"
      ],
      "correctAnswer": "The banana",
      "hintExplanation": "Đoạn văn viết: \"one yellow banana\" (một quả chuối màu vàng)."
    }
  ],
  "2": [
    {
      "id": 1,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng đồ dùng học tập trong ngữ cảnh",
      "readingPassage": "Lucy is seven years old. She has a yellow school bag. Inside her bag, there are two pencils, an eraser, and three colorful notebooks.",
      "prompt": "What color is Lucy's school bag?",
      "options": [
        "Yellow",
        "Blue",
        "Pink",
        "Green"
      ],
      "correctAnswer": "Yellow",
      "hintExplanation": "Đoạn văn nói: \"She has a yellow school bag\" (Bạn ấy có chiếc cặp màu vàng)."
    },
    {
      "id": 2,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng đồ dùng học tập trong ngữ cảnh",
      "readingPassage": "Lucy is seven years old. She has a yellow school bag. Inside her bag, there are two pencils, an eraser, and three colorful notebooks.",
      "prompt": "How many pencils are inside Lucy's bag?",
      "options": [
        "Two pencils",
        "Three pencils",
        "Four pencils",
        "One pencil"
      ],
      "correctAnswer": "Two pencils",
      "hintExplanation": "Đoạn văn liệt kê: \"there are two pencils\" (có hai chiếc bút chì)."
    },
    {
      "id": 3,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Cấu trúc Can / Cannot chỉ khả năng trong bài đọc",
      "readingPassage": "On sunny afternoons, Tom and his brother ride bicycles in the park. They can ride very fast. But they cannot ride near the deep pond because it is dangerous.",
      "prompt": "What can Tom and his brother do in the park?",
      "options": [
        "They can ride bicycles very fast.",
        "They can swim in the pond.",
        "They can fly kites.",
        "They can climb tall trees."
      ],
      "correctAnswer": "They can ride bicycles very fast.",
      "hintExplanation": "Đoạn văn khẳng định: \"They can ride very fast\" (Các bạn có thể đạp xe rất nhanh)."
    },
    {
      "id": 4,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Cấu trúc Can / Cannot chỉ khả năng trong bài đọc",
      "readingPassage": "On sunny afternoons, Tom and his brother ride bicycles in the park. They can ride very fast. But they cannot ride near the deep pond because it is dangerous.",
      "prompt": "Why cannot they ride near the pond?",
      "options": [
        "Because it is dangerous.",
        "Because it is cold.",
        "Because it is small.",
        "Because they are sleepy."
      ],
      "correctAnswer": "Because it is dangerous.",
      "hintExplanation": "Lý do được nêu rõ sau từ because: \"because it is dangerous\" (bởi vì ao sâu rất nguy hiểm)."
    },
    {
      "id": 5,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Giới từ chỉ nơi chốn & Thời gian trong bài đọc",
      "readingPassage": "My grandmother lives in a quiet village. She has three chickens and one white rabbit. The chickens wake up early in the morning and look for corn in the yard.",
      "prompt": "Where does the grandmother live?",
      "options": [
        "In a quiet village",
        "In a noisy city",
        "In a tall apartment",
        "In a shopping mall"
      ],
      "correctAnswer": "In a quiet village",
      "hintExplanation": "Đoạn văn mở đầu: \"My grandmother lives in a quiet village\" (sống ở một ngôi làng yên bình)."
    },
    {
      "id": 6,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Giới từ chỉ nơi chốn & Thời gian trong bài đọc",
      "readingPassage": "My grandmother lives in a quiet village. She has three chickens and one white rabbit. The chickens wake up early in the morning and look for corn in the yard.",
      "prompt": "When do the chickens wake up?",
      "options": [
        "Early in the morning",
        "Late in the evening",
        "At midnight",
        "In the afternoon"
      ],
      "correctAnswer": "Early in the morning",
      "hintExplanation": "Đoạn văn ghi: \"wake up early in the morning\" (thức dậy sớm vào buổi sáng)."
    },
    {
      "id": 7,
      "topic": "reading_park_picnic",
      "topicTitle": "Đọc hiểu buổi dã ngoại gia đình ở công viên",
      "readingPassage": "On warm Sundays, my family has a picnic in the green park. My mother brings delicious sandwiches, and my father pours cool orange juice for everyone.",
      "prompt": "Where does the family have a picnic on Sundays?",
      "options": [
        "In the green park",
        "At the school yard",
        "On the beach",
        "Inside the supermarket"
      ],
      "correctAnswer": "In the green park",
      "hintExplanation": "Đoạn văn mở đầu: \"my family has a picnic in the green park\" (ở công viên cây xanh)."
    },
    {
      "id": 8,
      "topic": "reading_park_picnic",
      "topicTitle": "Đọc hiểu buổi dã ngoại gia đình ở công viên",
      "readingPassage": "On warm Sundays, my family has a picnic in the green park. My mother brings delicious sandwiches, and my father pours cool orange juice for everyone.",
      "prompt": "What drink does the father pour for everyone?",
      "options": [
        "Cool orange juice",
        "Warm tea",
        "Cold soda",
        "Hot chocolate"
      ],
      "correctAnswer": "Cool orange juice",
      "hintExplanation": "Đoạn văn viết: \"pours cool orange juice for everyone\" (nước cam mát lạnh)."
    }
  ],
  "3": [
    {
      "id": 1,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng về thời gian biểu & Bữa ăn sáng",
      "readingPassage": "Peter usually gets up at 6:00. He washes his face, brushes his teeth, and has breakfast with bread and eggs. He never skips breakfast because it gives him good energy for morning lessons.",
      "prompt": "What does Peter eat for breakfast?",
      "options": [
        "Bread and eggs",
        "Rice and chicken",
        "Sandwich and orange juice",
        "Noodles and tea"
      ],
      "correctAnswer": "Bread and eggs",
      "hintExplanation": "Đoạn văn ghi: \"has breakfast with bread and eggs\" (ăn sáng với bánh mì và trứng)."
    },
    {
      "id": 2,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng về thời gian biểu & Bữa ăn sáng",
      "readingPassage": "Peter usually gets up at 6:00. He washes his face, brushes his teeth, and has breakfast with bread and eggs. He never skips breakfast because it gives him good energy for morning lessons.",
      "prompt": "Why does Peter never skip breakfast?",
      "options": [
        "Because it gives him good energy.",
        "Because his teacher is angry.",
        "Because he has a new clock.",
        "Because he wants to sleep more."
      ],
      "correctAnswer": "Because it gives him good energy.",
      "hintExplanation": "Đoạn văn giải thích: \"because it gives him good energy for morning lessons\"."
    },
    {
      "id": 3,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Động từ khuyết thiếu Must / Can trong nội quy thư viện",
      "readingPassage": "Our school has a wonderful library on the second floor. There are hundreds of colorful storybooks. Students must keep quiet while reading, but they can borrow two books every week.",
      "prompt": "What must students do inside the library?",
      "options": [
        "They must keep quiet.",
        "They must talk loudly.",
        "They must eat snacks.",
        "They must run around."
      ],
      "correctAnswer": "They must keep quiet.",
      "hintExplanation": "Đoạn văn nêu nội quy bắt buộc: \"Students must keep quiet while reading\" (phải giữ yên lặng)."
    },
    {
      "id": 4,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Động từ khuyết thiếu Must / Can trong nội quy thư viện",
      "readingPassage": "Our school has a wonderful library on the second floor. There are hundreds of colorful storybooks. Students must keep quiet while reading, but they can borrow two books every week.",
      "prompt": "How many books can a student borrow each week?",
      "options": [
        "Two books",
        "One book",
        "Three books",
        "Five books"
      ],
      "correctAnswer": "Two books",
      "hintExplanation": "Đoạn văn nêu rõ: \"they can borrow two books every week\" (được mượn 2 cuốn sách)."
    },
    {
      "id": 5,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Giới từ vị trí & Liên từ nguyên nhân (Because)",
      "readingPassage": "Monkeys live in tall trees and swing with their long arms. They eat sweet fruits. Under the trees, little rabbits hide in holes because big foxes are watching them.",
      "prompt": "Where do the monkeys live?",
      "options": [
        "In tall trees",
        "In deep water holes",
        "Under the ground",
        "Inside caves"
      ],
      "correctAnswer": "In tall trees",
      "hintExplanation": "Đoạn văn mở đầu: \"Monkeys live in tall trees\" (khỉ sống trên những ngọn cây cao)."
    },
    {
      "id": 6,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Giới từ vị trí & Liên từ nguyên nhân (Because)",
      "readingPassage": "Monkeys live in tall trees and swing with their long arms. They eat sweet fruits. Under the trees, little rabbits hide in holes because big foxes are watching them.",
      "prompt": "Why do little rabbits hide in holes?",
      "options": [
        "Because big foxes are watching them.",
        "Because it is cold and raining.",
        "Because they are looking for grass.",
        "Because monkeys call them."
      ],
      "correctAnswer": "Because big foxes are watching them.",
      "hintExplanation": "Đoạn văn giải thích: \"because big foxes are watching them\" (vì lũ cáo lớn đang rình rập)."
    },
    {
      "id": 7,
      "topic": "reading_school_library",
      "topicTitle": "Đọc hiểu nội quy và hoạt động ở thư viện trường",
      "readingPassage": "Our school library is large and quiet. There are hundreds of colorful storybooks on the white shelves. Students must speak softly and return books on time.",
      "prompt": "What must students do when they are inside the library?",
      "options": [
        "Speak softly and return books on time",
        "Run and play hide-and-seek",
        "Eat snacks and talk loudly",
        "Listen to loud music"
      ],
      "correctAnswer": "Speak softly and return books on time",
      "hintExplanation": "Đoạn văn nêu quy định: \"Students must speak softly and return books on time\" (nói khẽ và trả sách đúng hạn)."
    },
    {
      "id": 8,
      "topic": "reading_school_library",
      "topicTitle": "Đọc hiểu nội quy và hoạt động ở thư viện trường",
      "readingPassage": "Our school library is large and quiet. There are hundreds of colorful storybooks on the white shelves. Students must speak softly and return books on time.",
      "prompt": "Where are the colorful storybooks placed?",
      "options": [
        "On the white shelves",
        "On the floor",
        "In the teacher's bag",
        "Under the chairs"
      ],
      "correctAnswer": "On the white shelves",
      "hintExplanation": "Đoạn văn viết: \"on the white shelves\" (trên các giá sách màu trắng)."
    }
  ],
  "4": [
    {
      "id": 1,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng thời khóa biểu & Hoạt động môn học",
      "readingPassage": "At Greenwood Primary School, pupils have English on Monday, Wednesday, and Friday mornings. Their English teacher, Ms. Ha, is very friendly. She often brings flashcards and plays fun grammar games with the class.",
      "prompt": "On which days do pupils have English lessons?",
      "options": [
        "Monday, Wednesday, and Friday",
        "Tuesday and Thursday only",
        "Saturday and Sunday",
        "Every Tuesday afternoon"
      ],
      "correctAnswer": "Monday, Wednesday, and Friday",
      "hintExplanation": "Đoạn văn ghi cụ thể: \"on Monday, Wednesday, and Friday mornings\"."
    },
    {
      "id": 2,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng thời khóa biểu & Hoạt động môn học",
      "readingPassage": "At Greenwood Primary School, pupils have English on Monday, Wednesday, and Friday mornings. Their English teacher, Ms. Ha, is very friendly. She often brings flashcards and plays fun grammar games with the class.",
      "prompt": "What does Ms. Ha often use to make lessons enjoyable?",
      "options": [
        "Flashcards and fun grammar games",
        "Chalk and tests only",
        "A loud whistle",
        "Difficult math problems"
      ],
      "correctAnswer": "Flashcards and fun grammar games",
      "hintExplanation": "Đoạn văn nhắc: \"brings flashcards and plays fun grammar games\"."
    },
    {
      "id": 3,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Thì Quá khứ đơn (Past Simple) trong văn bản kể chuyện",
      "readingPassage": "Last Sunday was sunny and warm. Nam's family visited an organic farm in the countryside. Nam helped the farmers pick ripe strawberries, while his sister fed the ducks by the pond. They had a delicious picnic lunch under an oak tree.",
      "prompt": "What did Nam do at the organic farm?",
      "options": [
        "He helped pick ripe strawberries.",
        "He fed the ducks.",
        "He cooked lunch.",
        "He planted new trees."
      ],
      "correctAnswer": "He helped pick ripe strawberries.",
      "hintExplanation": "Đoạn văn viết: \"Nam helped the farmers pick ripe strawberries\"."
    },
    {
      "id": 4,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Thì Quá khứ đơn (Past Simple) trong văn bản kể chuyện",
      "readingPassage": "Last Sunday was sunny and warm. Nam's family visited an organic farm in the countryside. Nam helped the farmers pick ripe strawberries, while his sister fed the ducks by the pond. They had a delicious picnic lunch under an oak tree.",
      "prompt": "Which set of verbs shows that the story took place in the past?",
      "options": [
        "was, visited, helped, had",
        "is, visit, help, have",
        "will be, will visit",
        "visiting, helping, having"
      ],
      "correctAnswer": "was, visited, helped, had",
      "hintExplanation": "Các động từ ở thì Quá khứ đơn diễn tả sự việc đã xảy ra: was, visited, helped, had."
    },
    {
      "id": 5,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Liên từ đối lập (However) & Sở thích cá nhân",
      "readingPassage": "Linh loves swimming because it keeps her body fit and strong. However, her brother Minh prefers playing badminton. They both practice their favorite sports at the community sports center near their house.",
      "prompt": "Why does Linh love swimming?",
      "options": [
        "Because it keeps her body fit and strong.",
        "Because her brother likes it.",
        "Because it is cheap.",
        "Because she dislikes sports."
      ],
      "correctAnswer": "Because it keeps her body fit and strong.",
      "hintExplanation": "Đoạn văn giải thích: \"because it keeps her body fit and strong\"."
    },
    {
      "id": 6,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Liên từ đối lập (However) & Sở thích cá nhân",
      "readingPassage": "Linh loves swimming because it keeps her body fit and strong. However, her brother Minh prefers playing badminton. They both practice their favorite sports at the community sports center near their house.",
      "prompt": "What is the function of the word \"However\" in the text?",
      "options": [
        "To show a contrast between Linh and Minh's preferences",
        "To explain the time of the match",
        "To give a reason for swimming",
        "To describe the sports center"
      ],
      "correctAnswer": "To show a contrast between Linh and Minh's preferences",
      "hintExplanation": "Liên từ \"However\" (tuy nhiên) dùng để chỉ sự tương phản đối lập giữa sở thích bơi của Linh và cầu lông của Minh."
    },
    {
      "id": 7,
      "topic": "reading_zoo_visit",
      "topicTitle": "Đọc hiểu chuyến tham quan sở thú",
      "readingPassage": "Yesterday, class 4A visited the city zoo. They watched two baby pandas chewing green bamboo leaves. The zookeeper explained that pandas sleep for nearly twelve hours every day.",
      "prompt": "What were the baby pandas doing when the students watched them?",
      "options": [
        "Chewing green bamboo leaves",
        "Swimming in the pond",
        "Climbing high rocks",
        "Running after each other"
      ],
      "correctAnswer": "Chewing green bamboo leaves",
      "hintExplanation": "Đoạn văn viết: \"chewing green bamboo leaves\" (đang gặm lá tre xanh)."
    },
    {
      "id": 8,
      "topic": "reading_zoo_visit",
      "topicTitle": "Đọc hiểu chuyến tham quan sở thú",
      "readingPassage": "Yesterday, class 4A visited the city zoo. They watched two baby pandas chewing green bamboo leaves. The zookeeper explained that pandas sleep for nearly twelve hours every day.",
      "prompt": "How many hours do pandas sleep every day according to the zookeeper?",
      "options": [
        "Nearly twelve hours",
        "Only two hours",
        "Twenty hours",
        "Five hours"
      ],
      "correctAnswer": "Nearly twelve hours",
      "hintExplanation": "Đoạn văn viết: \"sleep for nearly twelve hours every day\" (gần 12 tiếng)."
    },
    {
      "id": 9,
      "topic": "reading_zoo_visit",
      "topicTitle": "Đọc hiểu chuyến tham quan sở thú",
      "readingPassage": "Yesterday, class 4A visited the city zoo. They watched two baby pandas chewing green bamboo leaves. The zookeeper explained that pandas sleep for nearly twelve hours every day.",
      "prompt": "Which class visited the city zoo yesterday?",
      "options": [
        "Class 4A",
        "Class 5B",
        "Class 3C",
        "Class 1A"
      ],
      "correctAnswer": "Class 4A",
      "hintExplanation": "Câu đầu đoạn văn: \"Yesterday, class 4A visited the city zoo\"."
    }
  ],
  "5": [
    {
      "id": 1,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng du lịch & Dự định tương lai trong bài đọc",
      "readingPassage": "Next summer vacation, Lan and her parents are going to visit Ha Long Bay for three days. They are going to stay in a modern hotel near the coast and take a boat cruise to explore marvelous caves like Sung Sot Cave.",
      "prompt": "How long are Lan and her parents going to stay in Ha Long Bay?",
      "options": [
        "For three days",
        "For one week",
        "For five days",
        "For a month"
      ],
      "correctAnswer": "For three days",
      "hintExplanation": "Đoạn văn nêu rõ thời lượng: \"for three days\" (trong vòng 3 ngày)."
    },
    {
      "id": 2,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng du lịch & Dự định tương lai trong bài đọc",
      "readingPassage": "Next summer vacation, Lan and her parents are going to visit Ha Long Bay for three days. They are going to stay in a modern hotel near the coast and take a boat cruise to explore marvelous caves like Sung Sot Cave.",
      "prompt": "In the passage, the word \"marvelous\" in \"marvelous caves\" is closest in meaning to:",
      "options": [
        "Wonderful / Magnificent",
        "Small and dirty",
        "Boring",
        "Crowded and noisy"
      ],
      "correctAnswer": "Wonderful / Magnificent",
      "hintExplanation": "\"Marvelous\" có nghĩa là kỳ diệu, tuyệt đẹp, đồng nghĩa với \"Wonderful / Magnificent\"."
    },
    {
      "id": 3,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Đọc hiểu lời khuyên sức khỏe & Cấu trúc khuyên bảo",
      "readingPassage": "Eating balanced meals is essential for growing children. Fast food contains too much sugar and unhealthy fat, which makes people sluggish. Doctors advise students to drink at least 1.5 liters of clean water daily and sleep 8 hours every night.",
      "prompt": "According to doctors, what should students do every day?",
      "options": [
        "Drink at least 1.5 liters of clean water and sleep 8 hours",
        "Eat fast food after school",
        "Drink soft drinks before sleeping",
        "Skip breakfast to lose weight"
      ],
      "correctAnswer": "Drink at least 1.5 liters of clean water and sleep 8 hours",
      "hintExplanation": "Đoạn văn viết: \"Doctors advise students to drink at least 1.5 liters of clean water daily and sleep 8 hours every night\"."
    },
    {
      "id": 4,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Đọc hiểu lời khuyên sức khỏe & Cấu trúc khuyên bảo",
      "readingPassage": "Eating balanced meals is essential for growing children. Fast food contains too much sugar and unhealthy fat, which makes people sluggish. Doctors advise students to drink at least 1.5 liters of clean water daily and sleep 8 hours every night.",
      "prompt": "Why is fast food considered harmful in the text?",
      "options": [
        "Because it contains too much sugar and unhealthy fat",
        "Because it has too many vitamins",
        "Because it is very expensive",
        "Because it is hard to find in stores"
      ],
      "correctAnswer": "Because it contains too much sugar and unhealthy fat",
      "hintExplanation": "Nguyên nhân thức ăn nhanh có hại: \"contains too much sugar and unhealthy fat\"."
    },
    {
      "id": 5,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Cấu trúc so sánh hơn & Liên từ nhượng bộ (Although)",
      "readingPassage": "Life in the countryside is generally more peaceful than in the city. The air is fresher, and the streets are less crowded. Although city life offers modern conveniences, many families prefer the tranquility of rural villages at weekends.",
      "prompt": "According to the passage, how is the air in the countryside compared to the city?",
      "options": [
        "It is fresher.",
        "It is more polluted.",
        "It is colder.",
        "It is dustier."
      ],
      "correctAnswer": "It is fresher.",
      "hintExplanation": "Đoạn văn so sánh: \"The air is fresher\" (Không khí trong lành hơn)."
    },
    {
      "id": 6,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Cấu trúc so sánh hơn & Liên từ nhượng bộ (Although)",
      "readingPassage": "Life in the countryside is generally more peaceful than in the city. The air is fresher, and the streets are less crowded. Although city life offers modern conveniences, many families prefer the tranquility of rural villages at weekends.",
      "prompt": "What does the word \"tranquility\" in the text refer to?",
      "options": [
        "Peacefulness and calmness",
        "Heavy traffic",
        "Modern factories",
        "Fast-paced lifestyle"
      ],
      "correctAnswer": "Peacefulness and calmness",
      "hintExplanation": "\"Tranquility\" nghĩa là sự thanh bình, tĩnh lặng (peacefulness and calmness)."
    },
    {
      "id": 7,
      "topic": "reading_hometown_danang",
      "topicTitle": "Đọc hiểu miêu tả thành phố biển Đà Nẵng",
      "readingPassage": "Da Nang is a vibrant coastal city in central Vietnam. It is world-famous for the impressive Dragon Bridge, which breathes fire and water on weekend evenings, attracting thousands of delighted visitors.",
      "prompt": "What special feature of the Dragon Bridge is highlighted in the text?",
      "options": [
        "It breathes fire and water on weekend evenings.",
        "It is the oldest wooden bridge in Asia.",
        "It is painted entirely in white.",
        "It only opens for boats at midnight."
      ],
      "correctAnswer": "It breathes fire and water on weekend evenings.",
      "hintExplanation": "Đoạn văn nêu rõ: \"breathes fire and water on weekend evenings\"."
    },
    {
      "id": 8,
      "topic": "reading_hometown_danang",
      "topicTitle": "Đọc hiểu miêu tả thành phố biển Đà Nẵng",
      "readingPassage": "Da Nang is a vibrant coastal city in central Vietnam. It is world-famous for the impressive Dragon Bridge, which breathes fire and water on weekend evenings, attracting thousands of delighted visitors.",
      "prompt": "Where is Da Nang located in Vietnam?",
      "options": [
        "In central Vietnam",
        "In northern Vietnam",
        "In southern Vietnam",
        "On an isolated high mountain"
      ],
      "correctAnswer": "In central Vietnam",
      "hintExplanation": "Đoạn văn mở đầu: \"vibrant coastal city in central Vietnam\" (miền Trung Việt Nam)."
    },
    {
      "id": 9,
      "topic": "reading_hometown_danang",
      "topicTitle": "Đọc hiểu miêu tả thành phố biển Đà Nẵng",
      "readingPassage": "Da Nang is a vibrant coastal city in central Vietnam. It is world-famous for the impressive Dragon Bridge, which breathes fire and water on weekend evenings, attracting thousands of delighted visitors.",
      "prompt": "Who is attracted by the Dragon Bridge on weekend evenings?",
      "options": [
        "Thousands of delighted visitors",
        "Only local fishermen",
        "Nobody because it is closed",
        "Only school teachers"
      ],
      "correctAnswer": "Thousands of delighted visitors",
      "hintExplanation": "Đoạn văn viết: \"attracting thousands of delighted visitors\" (hàng ngàn du khách thích thú)."
    }
  ],
  "6": [
    {
      "id": 1,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng ngữ cảnh trong bài đọc Lớp 6",
      "readingPassage": "My new secondary school, Sunrise Academy, is located on a quiet street in Da Nang. Unlike my old primary school, we now have specialized science laboratories, a modern multimedia room, and a spacious sports hall. At the moment, our class is carrying out a fascinating biology experiment on plant leaves, whereas the grade 7 students are playing basketball in the gymnasium.",
      "prompt": "In the passage, what does the word \"spacious\" in \"a spacious sports hall\" mean?",
      "options": [
        "Large with plenty of room to move around",
        "Dark and narrow",
        "Very old and dusty",
        "Noisy and crowded"
      ],
      "correctAnswer": "Large with plenty of room to move around",
      "hintExplanation": "Từ \"spacious\" (bắt nguồn từ danh từ \"space\" - không gian) có nghĩa là rộng rãi, thoáng đãng, nhiều chỗ để vận động."
    },
    {
      "id": 2,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng ngữ cảnh trong bài đọc Lớp 6",
      "readingPassage": "My new secondary school, Sunrise Academy, is located on a quiet street in Da Nang. Unlike my old primary school, we now have specialized science laboratories, a modern multimedia room, and a spacious sports hall. At the moment, our class is carrying out a fascinating biology experiment on plant leaves, whereas the grade 7 students are playing basketball in the gymnasium.",
      "prompt": "What modern facility is available at Sunrise Academy that was NOT present in the student's primary school?",
      "options": [
        "Specialized science laboratories and a multimedia room",
        "A simple chalkboard",
        "A small playground with swings",
        "Wooden desks"
      ],
      "correctAnswer": "Specialized science laboratories and a multimedia room",
      "hintExplanation": "Đoạn văn dùng từ \"Unlike my old primary school, we now have specialized science laboratories, a modern multimedia room...\" để nhấn mạnh trang thiết bị mới."
    },
    {
      "id": 3,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Phân biệt thì Hiện tại đơn & Hiện tại tiếp diễn trong đoạn văn",
      "readingPassage": "Mai usually walks to school every morning because her house is only 500 meters away. However, this week her father is driving her to school every day because the main bridge is being repaired. At weekends, she enjoys reading science fiction novels and planting flowers with her mother.",
      "prompt": "Why is Mai's father driving her to school this week instead of her usual walk?",
      "options": [
        "Because the main bridge is being repaired (a temporary situation).",
        "Because Mai is too lazy to walk.",
        "Because her bicycle is broken.",
        "Because the weather is stormy today."
      ],
      "correctAnswer": "Because the main bridge is being repaired (a temporary situation).",
      "hintExplanation": "Thì Hiện tại tiếp diễn \"is driving her... this week\" diễn tả sự việc tạm thời khác với thói quen hằng ngày (\"usually walks\") do cây cầu đang sửa."
    },
    {
      "id": 4,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Phân biệt thì Hiện tại đơn & Hiện tại tiếp diễn trong đoạn văn",
      "readingPassage": "Mai usually walks to school every morning because her house is only 500 meters away. However, this week her father is driving her to school every day because the main bridge is being repaired. At weekends, she enjoys reading science fiction novels and planting flowers with her mother.",
      "prompt": "In the sentence \"she enjoys reading science fiction novels and planting flowers\", which grammatical rule is applied?",
      "options": [
        "Verbs of liking (enjoy) must be followed by gerunds (V-ing)",
        "Past simple tense for finished past actions",
        "Passive voice with be + past participle",
        "Future continuous tense"
      ],
      "correctAnswer": "Verbs of liking (enjoy) must be followed by gerunds (V-ing)",
      "hintExplanation": "Quy tắc ngữ pháp: Sau các động từ chỉ sự yêu thích (enjoy, like, love, prefer), động từ đi sau phải thêm đuôi -ing (reading, planting)."
    },
    {
      "id": 5,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Liên từ chỉ quan hệ nhân quả (because) & Nhượng bộ (although)",
      "readingPassage": "Environmental protection begins with our everyday habits. Many students in Grade 6 are participating in the \"Green Sunday\" campaign. They collect plastic bottles and beverage cans around the neighborhood because plastic waste takes hundreds of years to decompose. Although the voluntary work is physically tiring, the students feel enthusiastic and proud of keeping their community clean.",
      "prompt": "Why do the students collect discarded plastic bottles and cans?",
      "options": [
        "Because plastic waste takes hundreds of years to decompose.",
        "Because they want to sell them for pocket money.",
        "Because their teachers punish them.",
        "Because they do not have any homework."
      ],
      "correctAnswer": "Because plastic waste takes hundreds of years to decompose.",
      "hintExplanation": "Liên từ \"because\" nêu nguyên nhân: rác thải nhựa mất hàng trăm năm mới phân hủy được, do đó cần được thu gom tái chế."
    },
    {
      "id": 6,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Liên từ chỉ quan hệ nhân quả (because) & Nhượng bộ (although)",
      "readingPassage": "Environmental protection begins with our everyday habits. Many students in Grade 6 are participating in the \"Green Sunday\" campaign. They collect plastic bottles and beverage cans around the neighborhood because plastic waste takes hundreds of years to decompose. Although the voluntary work is physically tiring, the students feel enthusiastic and proud of keeping their community clean.",
      "prompt": "How do the student volunteers feel despite the hard work?",
      "options": [
        "Enthusiastic and proud of keeping their community clean",
        "Exhausted and complaining all the time",
        "Unhappy and wanting to quit immediately",
        "Bored with the campaign"
      ],
      "correctAnswer": "Enthusiastic and proud of keeping their community clean",
      "hintExplanation": "Liên từ nhượng bộ \"Although\" (mặc dù mệt nhưng): \"Although the voluntary work is physically tiring, the students feel enthusiastic and proud\"."
    },
    {
      "id": 7,
      "topic": "reading_green_school_campaign",
      "topicTitle": "Đọc hiểu chiến dịch trường học xanh bảo vệ môi trường",
      "readingPassage": "Nguyen Du Secondary School launched the \"Clean & Green Campus\" initiative last month. Students collected over 300 kilograms of discarded plastic bottles and planted fifty miniature shade trees along the running track.",
      "prompt": "How many kilograms of plastic bottles did the students collect?",
      "options": [
        "Over 300 kilograms",
        "Exactly 50 kilograms",
        "Under 10 kilograms",
        "One thousand kilograms"
      ],
      "correctAnswer": "Over 300 kilograms",
      "hintExplanation": "Đoạn văn ghi rõ: \"collected over 300 kilograms of discarded plastic bottles\"."
    },
    {
      "id": 8,
      "topic": "reading_green_school_campaign",
      "topicTitle": "Đọc hiểu chiến dịch trường học xanh bảo vệ môi trường",
      "readingPassage": "Nguyen Du Secondary School launched the \"Clean & Green Campus\" initiative last month. Students collected over 300 kilograms of discarded plastic bottles and planted fifty miniature shade trees along the running track.",
      "prompt": "What did the students plant along the running track?",
      "options": [
        "Fifty miniature shade trees",
        "Corn and potatoes",
        "Big cactus plants",
        "Apple trees only"
      ],
      "correctAnswer": "Fifty miniature shade trees",
      "hintExplanation": "Đoạn văn viết: \"planted fifty miniature shade trees along the running track\"."
    },
    {
      "id": 9,
      "topic": "reading_local_mid_autumn",
      "topicTitle": "Đọc hiểu phong tục Tết Trung Thu truyền thống",
      "readingPassage": "During the Mid-Autumn Festival, children across Vietnam carry illuminated star lanterns through village paths. Neighbors gather outdoors to enjoy fragrant lotus tea, sweet mooncakes, and watch lively lion dancers.",
      "prompt": "What lanterns do children carry through village paths?",
      "options": [
        "Illuminated star lanterns",
        "Paper boat lanterns",
        "Electric torches",
        "Pumpkin lanterns"
      ],
      "correctAnswer": "Illuminated star lanterns",
      "hintExplanation": "Đoạn văn chỉ rõ: \"carry illuminated star lanterns\" (đèn ông sao lấp lánh)."
    },
    {
      "id": 10,
      "topic": "reading_local_mid_autumn",
      "topicTitle": "Đọc hiểu phong tục Tết Trung Thu truyền thống",
      "readingPassage": "During the Mid-Autumn Festival, children across Vietnam carry illuminated star lanterns through village paths. Neighbors gather outdoors to enjoy fragrant lotus tea, sweet mooncakes, and watch lively lion dancers.",
      "prompt": "What treats do neighbors enjoy together outdoors?",
      "options": [
        "Fragrant lotus tea and sweet mooncakes",
        "Spicy hotpot and iced coffee",
        "Hamburgers and French fries",
        "Watermelon seeds only"
      ],
      "correctAnswer": "Fragrant lotus tea and sweet mooncakes",
      "hintExplanation": "Đoạn văn ghi: \"enjoy fragrant lotus tea, sweet mooncakes\" (trà sen thơm ngát và bánh trung thu ngọt ngào)."
    }
  ],
  "7": [
    {
      "id": 1,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng văn hóa lễ hội & Phong tục truyền thống",
      "readingPassage": "Tet, or the Lunar New Year, is the most celebrated festival in Vietnam. Families thoroughly clean and decorate their homes with yellow apricot blossoms or pink peach flowers. Tet is a sacred occasion for family reunions, where relatives gather to express gratitude to ancestors and wish each other longevity and prosperity.",
      "prompt": "What do yellow apricot blossoms and pink peach flowers represent during Tet?",
      "options": [
        "Traditional festive flowers used to decorate homes",
        "Food served for dinner",
        "Gifts given to pets",
        "Clothes worn during sports"
      ],
      "correctAnswer": "Traditional festive flowers used to decorate homes",
      "hintExplanation": "Đoạn văn chỉ rõ hoa mai vàng và hoa đào hồng là hoa trang trí nhà cửa dịp Tết."
    },
    {
      "id": 2,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng văn hóa lễ hội & Phong tục truyền thống",
      "readingPassage": "Tet, or the Lunar New Year, is the most celebrated festival in Vietnam. Families thoroughly clean and decorate their homes with yellow apricot blossoms or pink peach flowers. Tet is a sacred occasion for family reunions, where relatives gather to express gratitude to ancestors and wish each other longevity and prosperity.",
      "prompt": "In the passage, what does the word \"prosperity\" mean?",
      "options": [
        "Wealth, success, and good fortune",
        "Severe sickness",
        "Bad luck",
        "Cold weather"
      ],
      "correctAnswer": "Wealth, success, and good fortune",
      "hintExplanation": "\"Prosperity\" nghĩa là sự thịnh vượng, phát đạt và may mắn (wealth, success, and good fortune)."
    },
    {
      "id": 3,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Câu điều kiện loại 1 & Đại từ quan hệ (Who / Which) trong bài đọc",
      "readingPassage": "If we continue to use single-use plastics carelessly, our oceans will suffer irreversible damage. Marine animals that swallow plastic bags often die of starvation. Scientists who study marine life warn that microplastics have already entered the human food chain.",
      "prompt": "According to the passage, what will happen if we do not stop using single-use plastics carelessly?",
      "options": [
        "Our oceans will suffer irreversible damage.",
        "The sea will become cleaner.",
        "Fishes will grow much faster.",
        "Plastic will disappear naturally."
      ],
      "correctAnswer": "Our oceans will suffer irreversible damage.",
      "hintExplanation": "Cấu trúc câu điều kiện loại 1: \"If we continue to use single-use plastics carelessly, our oceans will suffer irreversible damage\"."
    },
    {
      "id": 4,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Câu điều kiện loại 1 & Đại từ quan hệ (Who / Which) trong bài đọc",
      "readingPassage": "If we continue to use single-use plastics carelessly, our oceans will suffer irreversible damage. Marine animals that swallow plastic bags often die of starvation. Scientists who study marine life warn that microplastics have already entered the human food chain.",
      "prompt": "In the clause \"Scientists who study marine life\", what is the grammatical role of \"who\"?",
      "options": [
        "A relative pronoun referring to people (scientists)",
        "A question word asking for identity",
        "A conjunction expressing cause",
        "An adverb of degree"
      ],
      "correctAnswer": "A relative pronoun referring to people (scientists)",
      "hintExplanation": "\"Who\" là đại từ quan hệ thay thế cho danh từ chỉ người (Scientists) làm chủ ngữ trong mệnh đề quan hệ."
    },
    {
      "id": 5,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Liên từ nguyên nhân - kết quả (Therefore, Because) & Từ nối chuyển ý",
      "readingPassage": "Regular physical exercise enhances blood circulation and strengthens our immune system. Therefore, teenagers should dedicate at least 45 minutes every day to sporting activities like swimming or cycling. In addition, getting adequate sleep helps restore mental focus.",
      "prompt": "What does the word \"Therefore\" indicate in the passage?",
      "options": [
        "A logical result or consequence of regular exercise",
        "A surprising contrast",
        "A past timeline",
        "A condition that never happens"
      ],
      "correctAnswer": "A logical result or consequence of regular exercise",
      "hintExplanation": "Liên từ \"Therefore\" (do đó, vì vậy) dùng để diễn đạt kết quả logic rút ra từ mệnh đề đứng trước."
    },
    {
      "id": 6,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Liên từ nguyên nhân - kết quả (Therefore, Because) & Từ nối chuyển ý",
      "readingPassage": "Regular physical exercise enhances blood circulation and strengthens our immune system. Therefore, teenagers should dedicate at least 45 minutes every day to sporting activities like swimming or cycling. In addition, getting adequate sleep helps restore mental focus.",
      "prompt": "How much time do health experts recommend teenagers spend on sports each day?",
      "options": [
        "At least 45 minutes",
        "Only 10 minutes",
        "More than 4 hours",
        "None"
      ],
      "correctAnswer": "At least 45 minutes",
      "hintExplanation": "Đoạn văn ghi rõ: \"dedicate at least 45 minutes every day to sporting activities\"."
    },
    {
      "id": 7,
      "topic": "reading_renewable_solar_energy",
      "topicTitle": "Đọc hiểu năng lượng mặt trời và giảm thiểu khí thải",
      "readingPassage": "Solar energy harnesses light and heat radiating from the sun using photovoltaic rooftop panels. Unlike coal-fired thermal plants, solar installations produce zero carbon emissions during daily operation, making them pivotal in the fight against climate change.",
      "prompt": "Why are solar installations pivotal in fighting climate change?",
      "options": [
        "They produce zero carbon emissions during daily operation.",
        "They consume tons of coal every hour.",
        "They only function during rainy weather.",
        "They are the loudest energy systems."
      ],
      "correctAnswer": "They produce zero carbon emissions during daily operation.",
      "hintExplanation": "Đoạn văn nêu rõ lý do: \"solar installations produce zero carbon emissions during daily operation\"."
    },
    {
      "id": 8,
      "topic": "reading_renewable_solar_energy",
      "topicTitle": "Đọc hiểu năng lượng mặt trời và giảm thiểu khí thải",
      "readingPassage": "Solar energy harnesses light and heat radiating from the sun using photovoltaic rooftop panels. Unlike coal-fired thermal plants, solar installations produce zero carbon emissions during daily operation, making them pivotal in the fight against climate change.",
      "prompt": "What equipment is used to capture light and heat from the sun on roofs?",
      "options": [
        "Photovoltaic rooftop panels",
        "Coal generators",
        "Windmills on rivers",
        "Electric stoves"
      ],
      "correctAnswer": "Photovoltaic rooftop panels",
      "hintExplanation": "Đoạn văn ghi: \"using photovoltaic rooftop panels\" (các tấm pin quang điện trên mái nhà)."
    },
    {
      "id": 9,
      "topic": "reading_traffic_congestion_solutions",
      "topicTitle": "Đọc hiểu giải pháp giảm ùn tắc giao thông đô thị",
      "readingPassage": "Major metropolitan cities are expanding elevated metro rail networks to persuade commuters to leave personal motorbikes at home. Studies reveal that one rapid transit train can replace over eight hundred individual passenger vehicles on crowded thoroughfares.",
      "prompt": "How many individual vehicles can one rapid transit train replace?",
      "options": [
        "Over eight hundred individual vehicles",
        "Only twenty motorbikes",
        "Exactly ten thousand cars",
        "None at all"
      ],
      "correctAnswer": "Over eight hundred individual vehicles",
      "hintExplanation": "Đoạn văn chứng minh: \"one rapid transit train can replace over eight hundred individual passenger vehicles\"."
    },
    {
      "id": 10,
      "topic": "reading_traffic_congestion_solutions",
      "topicTitle": "Đọc hiểu giải pháp giảm ùn tắc giao thông đô thị",
      "readingPassage": "Major metropolitan cities are expanding elevated metro rail networks to persuade commuters to leave personal motorbikes at home. Studies reveal that one rapid transit train can replace over eight hundred individual passenger vehicles on crowded thoroughfares.",
      "prompt": "What infrastructure are metropolitan cities expanding to reduce traffic jams?",
      "options": [
        "Elevated metro rail networks",
        "More private parking lots only",
        "Narrower pedestrian streets",
        "Underground canals"
      ],
      "correctAnswer": "Elevated metro rail networks",
      "hintExplanation": "Đoạn văn mở đầu: \"expanding elevated metro rail networks\" (mở rộng mạng lưới tàu điện trên cao)."
    }
  ],
  "8": [
    {
      "id": 1,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng công nghệ số & Tác động của mạng xã hội",
      "readingPassage": "Smartphones have revolutionized the way modern teenagers interact and acquire knowledge. With instant access to educational platforms, students can study anytime. However, excessive screen time often triggers insomnia and reduces face-to-face communication among family members.",
      "prompt": "In the passage, what does the word \"insomnia\" mean?",
      "options": [
        "Difficulty in falling or staying asleep",
        "Feeling extremely hungry",
        "A sudden eye infection",
        "A desire to exercise"
      ],
      "correctAnswer": "Difficulty in falling or staying asleep",
      "hintExplanation": "\"Insomnia\" là chứng mất ngủ hoặc khó ngủ (difficulty in falling or staying asleep)."
    },
    {
      "id": 2,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng công nghệ số & Tác động của mạng xã hội",
      "readingPassage": "Smartphones have revolutionized the way modern teenagers interact and acquire knowledge. With instant access to educational platforms, students can study anytime. However, excessive screen time often triggers insomnia and reduces face-to-face communication among family members.",
      "prompt": "What is a drawback of excessive smartphone screen time mentioned in the text?",
      "options": [
        "It reduces face-to-face communication among family members.",
        "It increases physical strength.",
        "It makes books cheaper.",
        "It stops internet connection."
      ],
      "correctAnswer": "It reduces face-to-face communication among family members.",
      "hintExplanation": "Đoạn văn nêu mặt trái: \"reduces face-to-face communication among family members\"."
    },
    {
      "id": 3,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Câu bị động (Passive Voice) & Mệnh đề chỉ mục đích",
      "readingPassage": "Renewable energy sources such as solar and wind power are being widely adopted across the globe. Thousands of solar panels have been installed on school rooftops in order to decrease dependence on fossil fuels. If more investments are made, clean energy will replace coal entirely in the near future.",
      "prompt": "Why have solar panels been installed on school rooftops?",
      "options": [
        "In order to decrease dependence on fossil fuels",
        "To make the buildings look shiny",
        "To block the rain",
        "To store extra toys"
      ],
      "correctAnswer": "In order to decrease dependence on fossil fuels",
      "hintExplanation": "Cụm từ chỉ mục đích \"in order to decrease dependence on fossil fuels\" nêu lý do lắp đặt pin mặt trời."
    },
    {
      "id": 4,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Câu bị động (Passive Voice) & Mệnh đề chỉ mục đích",
      "readingPassage": "Renewable energy sources such as solar and wind power are being widely adopted across the globe. Thousands of solar panels have been installed on school rooftops in order to decrease dependence on fossil fuels. If more investments are made, clean energy will replace coal entirely in the near future.",
      "prompt": "In the sentence \"Thousands of solar panels have been installed...\", which passive structure is used?",
      "options": [
        "Present Perfect Passive (have/has + been + V3/ed)",
        "Past Simple Passive (was/were + V3/ed)",
        "Future Simple Passive (will be + V3/ed)",
        "Present Continuous Passive"
      ],
      "correctAnswer": "Present Perfect Passive (have/has + been + V3/ed)",
      "hintExplanation": "Cấu trúc bị động của thì Hiện tại hoàn thành: have been + installed (V3/ed)."
    },
    {
      "id": 5,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Liên từ phức hợp (Despite, In spite of, As a result)",
      "readingPassage": "Despite severe weather conditions during the storm, rescue teams successfully evacuated hundreds of residents to safe shelters. As a result of their prompt actions, no casualties were reported.",
      "prompt": "What does the prepositional phrase \"Despite severe weather conditions\" express?",
      "options": [
        "A concession / obstacle that did not stop the rescue mission",
        "The main reason why the storm started",
        "The exact time the storm ended",
        "A future weather forecast"
      ],
      "correctAnswer": "A concession / obstacle that did not stop the rescue mission",
      "hintExplanation": "\"Despite + Noun phrase\" (mặc dù điều kiện thời tiết khắc nghiệt) diễn đạt sự nhượng bộ, không ngăn cản được đội cứu hộ."
    },
    {
      "id": 6,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Liên từ phức hợp (Despite, In spite of, As a result)",
      "readingPassage": "Despite severe weather conditions during the storm, rescue teams successfully evacuated hundreds of residents to safe shelters. As a result of their prompt actions, no casualties were reported.",
      "prompt": "What was the outcome of the rescue teams' prompt actions?",
      "options": [
        "No casualties were reported.",
        "Many houses were destroyed.",
        "The storm became stronger.",
        "Communication lines were cut."
      ],
      "correctAnswer": "No casualties were reported.",
      "hintExplanation": "Cụm \"As a result of... no casualties were reported\" (kết quả là không có thương vong nào)."
    },
    {
      "id": 7,
      "topic": "reading_ethnic_minority_traditions",
      "topicTitle": "Đọc hiểu phong tục dệt thổ cẩm của người phụ nữ Thái",
      "readingPassage": "Traditional brocade weaving has been meticulously preserved for generations by Thai women in northwestern Vietnam. Using natural vegetable dyes extracted from forest roots, they weave intricate geometric patterns depicting rivers, flowers, and animals onto durable cotton fabric.",
      "prompt": "What materials do Thai women use to create dyes for brocade weaving?",
      "options": [
        "Natural vegetable dyes extracted from forest roots",
        "Artificial industrial chemicals",
        "Imported acrylic paints",
        "Metallic powders"
      ],
      "correctAnswer": "Natural vegetable dyes extracted from forest roots",
      "hintExplanation": "Đoạn văn viết: \"Using natural vegetable dyes extracted from forest roots\" (thuốc nhuộm thực vật tự nhiên từ rễ cây rừng)."
    },
    {
      "id": 8,
      "topic": "reading_ethnic_minority_traditions",
      "topicTitle": "Đọc hiểu phong tục dệt thổ cẩm của người phụ nữ Thái",
      "readingPassage": "Traditional brocade weaving has been meticulously preserved for generations by Thai women in northwestern Vietnam. Using natural vegetable dyes extracted from forest roots, they weave intricate geometric patterns depicting rivers, flowers, and animals onto durable cotton fabric.",
      "prompt": "What do the intricate geometric patterns depict?",
      "options": [
        "Rivers, flowers, and animals",
        "Modern skyscrapers and airplanes",
        "Abstract English letters",
        "Automobile engines"
      ],
      "correctAnswer": "Rivers, flowers, and animals",
      "hintExplanation": "Đoạn văn nêu rõ: \"patterns depicting rivers, flowers, and animals\"."
    },
    {
      "id": 9,
      "topic": "reading_teen_screen_time",
      "topicTitle": "Đọc hiểu tác động của thời gian sử dụng màn hình điện tử",
      "readingPassage": "Pediatric sleep specialists caution that blue light emitted by smartphone screens suppresses melatonin secretion, disrupting teenagers' circadian rhythms. Adolescents who disconnect digital devices at least forty-five minutes before sleep consistently report higher academic focus the following morning.",
      "prompt": "What physiological effect does screen blue light have before bedtime?",
      "options": [
        "It suppresses melatonin secretion and disrupts sleep cycles.",
        "It improves night vision immediately.",
        "It prevents all eye diseases.",
        "It increases deep sleep stages."
      ],
      "correctAnswer": "It suppresses melatonin secretion and disrupts sleep cycles.",
      "hintExplanation": "Đoạn văn giải thích: \"blue light... suppresses melatonin secretion, disrupting teenagers' circadian rhythms\"."
    },
    {
      "id": 10,
      "topic": "reading_teen_screen_time",
      "topicTitle": "Đọc hiểu tác động của thời gian sử dụng màn hình điện tử",
      "readingPassage": "Pediatric sleep specialists caution that blue light emitted by smartphone screens suppresses melatonin secretion, disrupting teenagers' circadian rhythms. Adolescents who disconnect digital devices at least forty-five minutes before sleep consistently report higher academic focus the following morning.",
      "prompt": "How long before sleep should adolescents disconnect their digital devices?",
      "options": [
        "At least forty-five minutes before sleep",
        "Five seconds before closing eyes",
        "Three hours after midnight",
        "Only in the afternoon"
      ],
      "correctAnswer": "At least forty-five minutes before sleep",
      "hintExplanation": "Đoạn văn khuyến nghị: \"disconnect digital devices at least forty-five minutes before sleep\"."
    }
  ],
  "9": [
    {
      "id": 1,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng học thuật & Suy luận ngữ cảnh nâng cao Lớp 9",
      "readingPassage": "Artificial Intelligence (AI) algorithms are reshaping contemporary education by tailoring curriculum to individual learning paces. While proponents argue that personalized feedback accelerates cognitive mastery, critics caution that over-reliance on automated tutoring may diminish critical thinking and interpersonal empathy.",
      "prompt": "In the passage, the word \"proponents\" is closest in meaning to:",
      "options": [
        "Supporters / Advocates",
        "Opponents / Enemies",
        "Beginners",
        "Examiners"
      ],
      "correctAnswer": "Supporters / Advocates",
      "hintExplanation": "\"Proponents\" là những người ủng hộ, tán thành (supporters / advocates)."
    },
    {
      "id": 2,
      "topic": "reading_vocabulary_context",
      "topicTitle": "Từ vựng học thuật & Suy luận ngữ cảnh nâng cao Lớp 9",
      "readingPassage": "Artificial Intelligence (AI) algorithms are reshaping contemporary education by tailoring curriculum to individual learning paces. While proponents argue that personalized feedback accelerates cognitive mastery, critics caution that over-reliance on automated tutoring may diminish critical thinking and interpersonal empathy.",
      "prompt": "What major concern do critics raise regarding AI in education?",
      "options": [
        "It might diminish students' critical thinking and empathy.",
        "It makes internet connection too slow.",
        "It requires too much paper and textbooks.",
        "It is impossible to use in mathematics."
      ],
      "correctAnswer": "It might diminish students' critical thinking and empathy.",
      "hintExplanation": "Đoạn văn nêu lo ngại của giới phê bình: \"may diminish critical thinking and interpersonal empathy\"."
    },
    {
      "id": 3,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Mệnh đề quan hệ xác định / không xác định & Cấu trúc so sánh kép",
      "readingPassage": "Vocational training programs, which equip students with practical technical skills, have gained tremendous popularity among grade 9 graduates. The more thoroughly students explore their genuine talents, the more confidently they choose an appropriate career pathway.",
      "prompt": "What is the grammatical function of the non-defining relative clause \", which equip students with practical technical skills,\"?",
      "options": [
        "Providing extra, non-essential information about vocational training programs",
        "Stating the only condition under which students can study",
        "Comparing grade 9 students with university graduates",
        "Indicating the exact time of technical exams"
      ],
      "correctAnswer": "Providing extra, non-essential information about vocational training programs",
      "hintExplanation": "Mệnh đề quan hệ không xác định (đặt giữa hai dấu phẩy với đại từ \"which\") cung cấp thêm thông tin bổ trợ cho danh từ đứng trước."
    },
    {
      "id": 4,
      "topic": "reading_grammar_tenses",
      "topicTitle": "Mệnh đề quan hệ xác định / không xác định & Cấu trúc so sánh kép",
      "readingPassage": "Vocational training programs, which equip students with practical technical skills, have gained tremendous popularity among grade 9 graduates. The more thoroughly students explore their genuine talents, the more confidently they choose an appropriate career pathway.",
      "prompt": "In the second sentence, which grammar structure is used?",
      "options": [
        "The comparative + the comparative (The more... the more...)",
        "Third conditional sentence (If + had V3, would have V3)",
        "Reported speech with ask/tell",
        "Inversion with negative adverbs"
      ],
      "correctAnswer": "The comparative + the comparative (The more... the more...)",
      "hintExplanation": "Cấu trúc so sánh kép: \"The more + adverb... the more + adverb...\" (Càng... thì càng...)."
    },
    {
      "id": 5,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Đọc hiểu suy luận logic (Inference) & Liên từ điều kiện nâng cao",
      "readingPassage": "Unless students develop disciplined time-management habits early in their secondary school years, they will inevitably experience acute stress during high school entrance examinations. Setting priority milestones allows candidates to revise systematically without compromising their emotional well-being.",
      "prompt": "What can be inferred from the sentence starting with \"Unless...\"?",
      "options": [
        "Disciplined time management is essential for avoiding severe exam stress.",
        "High school exams are canceled for disciplined students.",
        "Secondary students do not need to study for entrance tests.",
        "Stress only occurs if students set milestones."
      ],
      "correctAnswer": "Disciplined time management is essential for avoiding severe exam stress.",
      "hintExplanation": "\"Unless = If not\": Nếu học sinh không rèn luyện kỹ năng quản lý thời gian kỷ luật từ sớm thì tất yếu sẽ bị căng thẳng tột độ."
    },
    {
      "id": 6,
      "topic": "reading_prepositions_connectors",
      "topicTitle": "Đọc hiểu suy luận logic (Inference) & Liên từ điều kiện nâng cao",
      "readingPassage": "Unless students develop disciplined time-management habits early in their secondary school years, they will inevitably experience acute stress during high school entrance examinations. Setting priority milestones allows candidates to revise systematically without compromising their emotional well-being.",
      "prompt": "According to the passage, what benefit does setting priority milestones offer?",
      "options": [
        "It allows candidates to revise systematically while protecting emotional well-being.",
        "It guarantees 100% test scores without revision.",
        "It eliminates the need for teachers.",
        "It shortens the examination time."
      ],
      "correctAnswer": "It allows candidates to revise systematically while protecting emotional well-being.",
      "hintExplanation": "Đoạn văn kết luận: \"allows candidates to revise systematically without compromising their emotional well-being\"."
    },
    {
      "id": 7,
      "topic": "reading_space_debris_challenge",
      "topicTitle": "Đọc hiểu thách thức rác thải vũ trụ ở quỹ đạo Trái Đất",
      "readingPassage": "Over six decades of orbital missions have left millions of high-velocity space debris fragments circling Earth. Even a minute paint fleck travelling at twenty-eight thousand kilometers per hour possesses enough kinetic energy to breach the pressurised hull of the International Space Station.",
      "prompt": "Why are tiny space debris fragments extremely hazardous to spacecraft?",
      "options": [
        "Because their hyper-velocity velocity yields enormous kinetic destructive energy.",
        "Because they are radioactive chemical bombs.",
        "Because they block all solar sunlight permanently.",
        "Because they fall back to Earth within minutes."
      ],
      "correctAnswer": "Because their hyper-velocity velocity yields enormous kinetic destructive energy.",
      "hintExplanation": "Đoạn văn chỉ ra: \"travelling at twenty-eight thousand kilometers per hour possesses enough kinetic energy to breach the pressurised hull\"."
    },
    {
      "id": 8,
      "topic": "reading_space_debris_challenge",
      "topicTitle": "Đọc hiểu thách thức rác thải vũ trụ ở quỹ đạo Trái Đất",
      "readingPassage": "Over six decades of orbital missions have left millions of high-velocity space debris fragments circling Earth. Even a minute paint fleck travelling at twenty-eight thousand kilometers per hour possesses enough kinetic energy to breach the pressurised hull of the International Space Station.",
      "prompt": "What speed can space debris travel at in low Earth orbit according to the text?",
      "options": [
        "Twenty-eight thousand kilometers per hour",
        "One hundred kilometers per hour",
        "Speed of sound only",
        "Ten meters per second"
      ],
      "correctAnswer": "Twenty-eight thousand kilometers per hour",
      "hintExplanation": "Đoạn văn nêu con số chính xác: \"twenty-eight thousand kilometers per hour\" (28.000 km/h)."
    },
    {
      "id": 9,
      "topic": "reading_mangrove_ecosystem_restoration",
      "topicTitle": "Đọc hiểu phục hồi hệ sinh thái rừng ngập mặn ven biển",
      "readingPassage": "Mangrove forests along the Mekong Delta serve as biological shock absorbers against storm surges while sequestering up to five times more carbon dioxide per hectare than terrestrial tropical rainforests. Community-led reforestation protects fragile aquaculture farms from devastating soil erosion.",
      "prompt": "How much carbon dioxide can mangroves sequester compared to terrestrial rainforests?",
      "options": [
        "Up to five times more carbon dioxide per hectare",
        "Equal amounts per hectare",
        "Less than half as much",
        "Zero carbon dioxide"
      ],
      "correctAnswer": "Up to five times more carbon dioxide per hectare",
      "hintExplanation": "Đoạn văn ghi nhận: \"sequestering up to five times more carbon dioxide per hectare than terrestrial tropical rainforests\"."
    },
    {
      "id": 10,
      "topic": "reading_mangrove_ecosystem_restoration",
      "topicTitle": "Đọc hiểu phục hồi hệ sinh thái rừng ngập mặn ven biển",
      "readingPassage": "Mangrove forests along the Mekong Delta serve as biological shock absorbers against storm surges while sequestering up to five times more carbon dioxide per hectare than terrestrial tropical rainforests. Community-led reforestation protects fragile aquaculture farms from devastating soil erosion.",
      "prompt": "What role do mangrove forests play during coastal storm surges?",
      "options": [
        "They serve as biological shock absorbers against storm surges.",
        "They accelerate ocean tidal waves into cities.",
        "They completely block rivers from flowing into the sea.",
        "They destroy all shrimp farming ponds."
      ],
      "correctAnswer": "They serve as biological shock absorbers against storm surges.",
      "hintExplanation": "Đoạn văn khẳng định: \"serve as biological shock absorbers against storm surges\"."
    }
  ]
};
