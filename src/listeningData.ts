import { Question } from './types';
import { GradeLevel } from './components/GradeSelection';

// ------------------------------------------------------------------------------------
// BỘ CÂU HỎI LISTENING THEO TỪNG LỚP (LỚP 1 ĐẾN LỚP 9)
// Mỗi bài tập gồm từ 8 đến 10 câu kèm âm thanh chuẩn audio & transcript chi tiết
// ------------------------------------------------------------------------------------

export const LISTENING_QUESTIONS_BY_GRADE: Record<GradeLevel, Question[]> = {
  "1": [
    {
      "id": 1,
      "topic": "listening_phonics_letters",
      "topicTitle": "Nghe chữ cái & Âm thanh phát âm",
      "audioContext": "Cô giáo phát âm chữ cái tiếng Anh",
      "audioScript": "Listen carefully: /æ/ /æ/ ... Apple! Cat! Ant!",
      "prompt": "Which letter makes the sound /æ/ in \"Apple\" and \"Ant\"?",
      "options": [
        "Letter A",
        "Letter B",
        "Letter C",
        "Letter D"
      ],
      "correctAnswer": "Letter A",
      "hintExplanation": "Âm /æ/ là âm của chữ cái \"A\" trong bảng chữ cái tiếng Anh."
    },
    {
      "id": 2,
      "topic": "listening_phonics_letters",
      "topicTitle": "Nghe chữ cái & Âm thanh phát âm",
      "audioContext": "Giọng đọc từ vựng bắt đầu bằng phụ âm",
      "audioScript": "Listen and choose the word: Dog! A cute little dog!",
      "prompt": "Listen to the audio: What animal did you hear?",
      "options": [
        "Dog",
        "Cat",
        "Duck",
        "Bird"
      ],
      "correctAnswer": "Dog",
      "hintExplanation": "Từ được phát âm trong băng là \"Dog\" (chú chó con)."
    },
    {
      "id": 3,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe số đếm đồ vật (1-5)",
      "audioContext": "Bé Lucy đếm số bút chì màu trên bàn",
      "audioScript": "One, two, three, four! I have four colored pencils.",
      "prompt": "How many colored pencils does Lucy have?",
      "options": [
        "2 pencils",
        "3 pencils",
        "4 pencils",
        "5 pencils"
      ],
      "correctAnswer": "4 pencils",
      "hintExplanation": "Lucy đếm: \"One, two, three, four! I have four colored pencils\" (4 chiếc bút chì màu)."
    },
    {
      "id": 4,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe số đếm đồ vật (1-5)",
      "audioContext": "Ben nói về số lượng quả táo mẹ vừa mua",
      "audioScript": "Mom bought three big red apples for me.",
      "prompt": "How many apples did mom buy?",
      "options": [
        "Two apples",
        "Three apples",
        "Four apples",
        "One apple"
      ],
      "correctAnswer": "Three apples",
      "hintExplanation": "Ben nhắc rõ số lượng: \"Mom bought three big red apples\" (3 quả táo)."
    },
    {
      "id": 5,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe nhận diện màu sắc",
      "audioContext": "Anna khoe chiếc ba lô đi học mới",
      "audioScript": "Look at my new school bag! It is bright pink and blue.",
      "prompt": "What color is Anna school bag?",
      "options": [
        "Pink and blue",
        "Black and white",
        "Red and yellow",
        "Green and brown"
      ],
      "correctAnswer": "Pink and blue",
      "hintExplanation": "Anna miêu tả: \"It is bright pink and blue\" (màu hồng và xanh dương)."
    },
    {
      "id": 6,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe nhận diện màu sắc",
      "audioContext": "Khang chỉ vào chiếc xe đồ chơi",
      "audioScript": "I like this toy car. It is green like a leaf.",
      "prompt": "What color is the toy car?",
      "options": [
        "Green",
        "Red",
        "Yellow",
        "Purple"
      ],
      "correctAnswer": "Green",
      "hintExplanation": "Khang nói: \"It is green like a leaf\" (Màu xanh lá cây)."
    },
    {
      "id": 7,
      "topic": "listening_toys_animals",
      "topicTitle": "Nghe tên đồ chơi & Con vật",
      "audioContext": "Giọng nói giới thiệu món đồ chơi",
      "audioScript": "Look at my new toy! It is a cute brown teddy bear on the chair.",
      "prompt": "What toy is mentioned in the audio?",
      "options": [
        "A teddy bear",
        "A toy car",
        "A robot",
        "A kite"
      ],
      "correctAnswer": "A teddy bear",
      "hintExplanation": "Audio nói rõ: \"It is a cute brown teddy bear\" (một chú gấu bông)."
    },
    {
      "id": 8,
      "topic": "listening_actions_room",
      "topicTitle": "Nghe hành động đơn giản",
      "audioContext": "Mệnh lệnh lớp học",
      "audioScript": "Children, please clap your hands three times. One, two, three!",
      "prompt": "What should the children do according to the teacher?",
      "options": [
        "Clap their hands",
        "Close their eyes",
        "Stand on one foot",
        "Jump high"
      ],
      "correctAnswer": "Clap their hands",
      "hintExplanation": "Audio nói: \"please clap your hands\" (hãy vỗ tay)."
    }
  ],
  "2": [
    {
      "id": 1,
      "topic": "listening_animals_objects",
      "topicTitle": "Nghe nhận diện con vật nuôi",
      "audioContext": "Tiếng kêu và lời miêu tả con vật",
      "audioScript": "Look at that pet! It is swimming in the water bowl. It is an orange goldfish.",
      "prompt": "What pet is in the water bowl?",
      "options": [
        "A goldfish",
        "A puppy",
        "A kitten",
        "A rabbit"
      ],
      "correctAnswer": "A goldfish",
      "hintExplanation": "Đoạn băng miêu tả \"an orange goldfish\" (một chú cá vàng màu cam)."
    },
    {
      "id": 2,
      "topic": "listening_animals_objects",
      "topicTitle": "Nghe nhận diện con vật nuôi",
      "audioContext": "Bạn Nam kể về chú chó nhà mình",
      "audioScript": "My dog has long white ears and a very happy brown tail.",
      "prompt": "What color are the dog ears?",
      "options": [
        "White",
        "Black",
        "Brown",
        "Yellow"
      ],
      "correctAnswer": "White",
      "hintExplanation": "Nam nói: \"My dog has long white ears\" (đôi tai dài màu trắng)."
    },
    {
      "id": 3,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe các thành viên gia đình",
      "audioContext": "Mai giới thiệu bức ảnh gia đình",
      "audioScript": "In this photo, my mother is cooking soup, and my sister is drawing a tree.",
      "prompt": "What is Mai sister doing in the photo?",
      "options": [
        "Drawing a tree",
        "Cooking soup",
        "Sleeping",
        "Watching TV"
      ],
      "correctAnswer": "Drawing a tree",
      "hintExplanation": "Mai nói rõ: \"my sister is drawing a tree\" (chị gái đang vẽ cái cây)."
    },
    {
      "id": 4,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe các thành viên gia đình",
      "audioContext": "David giới thiệu ông nội",
      "audioScript": "My grandfather is seventy years old. He loves reading newspapers every morning.",
      "prompt": "What does David grandfather love doing?",
      "options": [
        "Reading newspapers",
        "Playing football",
        "Riding a bike",
        "Listening to music"
      ],
      "correctAnswer": "Reading newspapers",
      "hintExplanation": "David chia sẻ: \"He loves reading newspapers every morning\" (đọc báo)."
    },
    {
      "id": 5,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe lệnh chỉ dẫn cơ thể",
      "audioContext": "Giáo viên điều khiển trò chơi vận động",
      "audioScript": "Touch your nose! Touch your nose, and clap your hands two times!",
      "prompt": "What body part should you touch first?",
      "options": [
        "Your nose",
        "Your eyes",
        "Your ears",
        "Your mouth"
      ],
      "correctAnswer": "Your nose",
      "hintExplanation": "Khẩu lệnh đầu tiên được nhắc lại hai lần là: \"Touch your nose!\" (Chạm vào mũi)."
    },
    {
      "id": 6,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe lệnh chỉ dẫn cơ thể",
      "audioContext": "Hướng dẫn tập thể dục buổi sáng",
      "audioScript": "Now open your arms wide, and jump three times!",
      "prompt": "How many times should you jump?",
      "options": [
        "Three times",
        "Two times",
        "Four times",
        "Five times"
      ],
      "correctAnswer": "Three times",
      "hintExplanation": "Khẩu lệnh nói: \"jump three times!\" (nhảy 3 lần)."
    },
    {
      "id": 7,
      "topic": "listening_numbers_food",
      "topicTitle": "Nghe số lượng món ăn",
      "audioContext": "Đoạn hội thoại ở bữa tiệc nhỏ",
      "audioScript": "I am so hungry! Can I have four sweet bananas and a glass of milk, please?",
      "prompt": "How many bananas does the speaker want?",
      "options": [
        "Four bananas",
        "Two bananas",
        "Five bananas",
        "Three bananas"
      ],
      "correctAnswer": "Four bananas",
      "hintExplanation": "Audio nói: \"four sweet bananas\" (bốn quả chuối ngọt)."
    },
    {
      "id": 8,
      "topic": "listening_pets_places",
      "topicTitle": "Nghe vị trí thú cưng",
      "audioContext": "Tìm kiếm thú cưng trong nhà",
      "audioScript": "Where is my little puppy? Oh, it is sleeping under the wooden table!",
      "prompt": "Where is the little puppy sleeping?",
      "options": [
        "Under the wooden table",
        "On the green sofa",
        "Behind the door",
        "In the kitchen"
      ],
      "correctAnswer": "Under the wooden table",
      "hintExplanation": "Audio chỉ rõ: \"sleeping under the wooden table\" (dưới bàn gỗ)."
    }
  ],
  "3": [
    {
      "id": 1,
      "topic": "listening_positions",
      "topicTitle": "Nghe vị trí đồ vật trong phòng",
      "audioContext": "Peter đang tìm chiếc đồng hồ đeo tay",
      "audioScript": "Where is my watch? Ah, it is on the desk, next to the English book.",
      "prompt": "Where is Peter watch?",
      "options": [
        "On the desk",
        "Under the bed",
        "In the bag",
        "Behind the door"
      ],
      "correctAnswer": "On the desk",
      "hintExplanation": "Peter reo lên: \"it is on the desk, next to the English book\" (ở trên bàn học)."
    },
    {
      "id": 2,
      "topic": "listening_positions",
      "topicTitle": "Nghe vị trí đồ vật trong phòng",
      "audioContext": "Mẹ hỏi vị trí đôi giày thể thao của Tom",
      "audioScript": "Tom, your blue shoes are under the wooden chair in your bedroom.",
      "prompt": "Where are Tom shoes?",
      "options": [
        "Under the chair",
        "On the table",
        "In the box",
        "Near the window"
      ],
      "correctAnswer": "Under the chair",
      "hintExplanation": "Mẹ bảo: \"your blue shoes are under the wooden chair\" (ở dưới chiếc ghế gỗ)."
    },
    {
      "id": 3,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe khả năng (Can / Can't)",
      "audioContext": "Hoa kể về sở trường của hai chị em",
      "audioScript": "My sister can play the guitar very well, but I can only sing songs.",
      "prompt": "What musical instrument can Hoa sister play?",
      "options": [
        "Guitar",
        "Piano",
        "Drums",
        "Violin"
      ],
      "correctAnswer": "Guitar",
      "hintExplanation": "Hoa nói: \"My sister can play the guitar very well\" (chơi đàn ghi-ta)."
    },
    {
      "id": 4,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe khả năng (Can / Can't)",
      "audioContext": "Tony và Quân nói về môn thể thao",
      "audioScript": "Tony can skate very fast, but he cannot swim across the swimming pool.",
      "prompt": "What can Tony NOT do?",
      "options": [
        "He cannot swim",
        "He cannot skate",
        "He cannot run",
        "He cannot jump"
      ],
      "correctAnswer": "He cannot swim",
      "hintExplanation": "Đoạn băng cho biết: \"he cannot swim across the swimming pool\" (không biết bơi)."
    },
    {
      "id": 5,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe số lượng đồ dùng học tập",
      "audioContext": "Lan kiểm tra đồ đạc trước khi đến trường",
      "audioScript": "In my school bag today, I have seven notebooks and two pens.",
      "prompt": "How many notebooks does Lan have in her bag?",
      "options": [
        "Seven notebooks",
        "Two notebooks",
        "Five notebooks",
        "Nine notebooks"
      ],
      "correctAnswer": "Seven notebooks",
      "hintExplanation": "Lan đếm rõ: \"I have seven notebooks and two pens\" (7 quyển vở)."
    },
    {
      "id": 6,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe số lượng đồ dùng học tập",
      "audioContext": "Thầy giáo phát giấy vẽ cho học sinh",
      "audioScript": "Here are ten sheets of white paper for our drawing contest.",
      "prompt": "How many sheets of paper does the teacher give?",
      "options": [
        "Ten sheets",
        "Eight sheets",
        "Twelve sheets",
        "Six sheets"
      ],
      "correctAnswer": "Ten sheets",
      "hintExplanation": "Thầy giáo nói: \"Here are ten sheets of white paper\" (10 tờ giấy trắng)."
    },
    {
      "id": 7,
      "topic": "listening_school_subjects",
      "topicTitle": "Nghe thời khóa biểu các môn học",
      "audioContext": "Hội thoại hai bạn học sinh",
      "audioScript": "Do you have Science on Wednesday? No, on Wednesday I have English and Music.",
      "prompt": "What subjects does the speaker have on Wednesday?",
      "options": [
        "English and Music",
        "Math and Art",
        "Science and PE",
        "History and Geography"
      ],
      "correctAnswer": "English and Music",
      "hintExplanation": "Audio xác nhận: \"on Wednesday I have English and Music\"."
    },
    {
      "id": 8,
      "topic": "listening_birthday_celebration",
      "topicTitle": "Nghe ngày sinh nhật & Quà tặng",
      "audioContext": "Kể về tiệc sinh nhật",
      "audioScript": "Today is my eighth birthday! My mother baked a delicious chocolate cake with eight red candles.",
      "prompt": "What kind of cake did the mother bake?",
      "options": [
        "A chocolate cake",
        "A strawberry cake",
        "An apple pie",
        "An orange cake"
      ],
      "correctAnswer": "A chocolate cake",
      "hintExplanation": "Audio nhắc tới: \"a delicious chocolate cake\" (bánh sô cô la thơm ngon)."
    }
  ],
  "4": [
    {
      "id": 1,
      "topic": "listening_daily_schedule",
      "topicTitle": "Nghe thời gian biểu & Thứ trong tuần",
      "audioContext": "Linh nói về lịch học tiếng Anh của mình",
      "audioScript": "I have English classes on Tuesday and Thursday afternoons at four thirty.",
      "prompt": "On which days does Linh have English classes?",
      "options": [
        "Tuesday and Thursday",
        "Monday and Wednesday",
        "Friday and Saturday",
        "Sunday only"
      ],
      "correctAnswer": "Tuesday and Thursday",
      "hintExplanation": "Linh nói: \"on Tuesday and Thursday afternoons\" (thứ Ba và thứ Năm)."
    },
    {
      "id": 2,
      "topic": "listening_daily_schedule",
      "topicTitle": "Nghe thời gian biểu & Thứ trong tuần",
      "audioContext": "Bố gọi Nam dậy đi tập thể dục",
      "audioScript": "Nam, wake up! It is already six fifteen. The sun is shining!",
      "prompt": "What time is it in the morning?",
      "options": [
        "At 6:15",
        "At 6:45",
        "At 6:00",
        "At 7:15"
      ],
      "correctAnswer": "At 6:15",
      "hintExplanation": "Bố nhắc: \"It is already six fifteen\" (6 giờ 15 phút)."
    },
    {
      "id": 3,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe quê quán và quốc tịch",
      "audioContext": "Cuộc gặp gỡ của các bạn học sinh quốc tế",
      "audioScript": "Hello, my name is Linda. I come from London in England. I am English.",
      "prompt": "Where does Linda come from?",
      "options": [
        "London, England",
        "Tokyo, Japan",
        "Sydney, Australia",
        "New York, America"
      ],
      "correctAnswer": "London, England",
      "hintExplanation": "Linda giới thiệu: \"I come from London in England\" (Luân Đôn, nước Anh)."
    },
    {
      "id": 4,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe quê quán và quốc tịch",
      "audioContext": "Bạn học sinh mới chuyển đến lớp",
      "audioScript": "My name is Hakim. I am from Malaysia. My hometown is Kuala Lumpur.",
      "prompt": "What country is Hakim from?",
      "options": [
        "Malaysia",
        "Vietnam",
        "Singapore",
        "Thailand"
      ],
      "correctAnswer": "Malaysia",
      "hintExplanation": "Hakim nói rõ: \"I am from Malaysia\"."
    },
    {
      "id": 5,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe sở thích cuối tuần (Hobbies)",
      "audioContext": "Minh nói về hoạt động ngày Chủ nhật",
      "audioScript": "On Sundays, I do not play computer games. I love flying kites in the park with my cousin.",
      "prompt": "What does Minh love doing on Sundays?",
      "options": [
        "Flying kites in the park",
        "Playing computer games",
        "Watching television",
        "Swimming in the river"
      ],
      "correctAnswer": "Flying kites in the park",
      "hintExplanation": "Minh nói: \"I love flying kites in the park with my cousin\" (thả diều ở công viên)."
    },
    {
      "id": 6,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe sở thích cuối tuần (Hobbies)",
      "audioContext": "Sarah chia sẻ về món ăn yêu thích",
      "audioScript": "My favorite food is chicken soup, but today I am having noodles with beef.",
      "prompt": "What is Sarah favorite food?",
      "options": [
        "Chicken soup",
        "Beef noodles",
        "Fried rice",
        "Fish cake"
      ],
      "correctAnswer": "Chicken soup",
      "hintExplanation": "Sarah cho biết: \"My favorite food is chicken soup\" (súp gà)."
    },
    {
      "id": 7,
      "topic": "listening_phone_numbers",
      "topicTitle": "Nghe số điện thoại liên lạc",
      "audioContext": "Đọc số điện thoại gia đình",
      "audioScript": "If you want to contact me, my home phone number is oh nine eight, two four six, one three five.",
      "prompt": "What is the speaker's phone number?",
      "options": [
        "098 246 135",
        "098 123 456",
        "090 246 810",
        "097 654 321"
      ],
      "correctAnswer": "098 246 135",
      "hintExplanation": "Audio đọc: \"oh nine eight (098), two four six (246), one three five (135)\"."
    },
    {
      "id": 8,
      "topic": "listening_animal_features",
      "topicTitle": "Nghe miêu tả con vật ở sở thú",
      "audioContext": "Hướng dẫn viên sở thú",
      "audioScript": "Look at the giant giraffe over there! It has a very long neck and eats green leaves from tall trees.",
      "prompt": "What animal is being described in the audio?",
      "options": [
        "A giant giraffe",
        "A striped zebra",
        "A playful dolphin",
        "A brown bear"
      ],
      "correctAnswer": "A giant giraffe",
      "hintExplanation": "Audio mô tả: \"giant giraffe... long neck\" (hươu cao cổ)."
    },
    {
      "id": 9,
      "topic": "listening_invitation_weekend",
      "topicTitle": "Nghe lời mời đi chơi cuối tuần",
      "audioContext": "Rủ bạn cùng đi bơi",
      "audioScript": "Would you like to go swimming with me this Saturday morning? - That sounds fantastic, I would love to!",
      "prompt": "When will the friends go swimming together?",
      "options": [
        "This Saturday morning",
        "Sunday afternoon",
        "Friday evening",
        "Next Monday"
      ],
      "correctAnswer": "This Saturday morning",
      "hintExplanation": "Audio hỏi: \"go swimming with me this Saturday morning?\"."
    }
  ],
  "5": [
    {
      "id": 1,
      "topic": "listening_vacation_past",
      "topicTitle": "Nghe về chuyến đi nghỉ (Past Vacation)",
      "audioContext": "Tony kể về kỳ nghỉ hè năm ngoái",
      "audioScript": "Last summer, my family went to Da Nang by train. We stayed there for five sunny days.",
      "prompt": "How did Tony family travel to Da Nang?",
      "options": [
        "By train",
        "By plane",
        "By bus",
        "By coach"
      ],
      "correctAnswer": "By train",
      "hintExplanation": "Tony nói: \"my family went to Da Nang by train\" (đi bằng tàu hỏa)."
    },
    {
      "id": 2,
      "topic": "listening_vacation_past",
      "topicTitle": "Nghe về chuyến đi nghỉ (Past Vacation)",
      "audioContext": "Hoa miêu tả về chuyến đi đến Phú Quốc",
      "audioScript": "Phu Quoc was wonderful! We enjoyed delicious fresh seafood and took many photos on the beach.",
      "prompt": "What did Hoa family enjoy in Phu Quoc?",
      "options": [
        "Fresh seafood",
        "Spicy soup",
        "Apple pies",
        "Roast chicken"
      ],
      "correctAnswer": "Fresh seafood",
      "hintExplanation": "Hoa nói: \"We enjoyed delicious fresh seafood\" (hải sản tươi sống)."
    },
    {
      "id": 3,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe kế hoạch tương lai (be going to)",
      "audioContext": "Quân nói về dự định cuối tuần này",
      "audioScript": "This Sunday, my father and I are going to plant ten fruit trees in our countryside garden.",
      "prompt": "How many fruit trees are they going to plant?",
      "options": [
        "Ten trees",
        "Five trees",
        "Twenty trees",
        "Twelve trees"
      ],
      "correctAnswer": "Ten trees",
      "hintExplanation": "Quân nói: \"plant ten fruit trees\" (trồng 10 cây ăn quả)."
    },
    {
      "id": 4,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe kế hoạch tương lai (be going to)",
      "audioContext": "Mai chia sẻ về ước mơ nghề nghiệp",
      "audioScript": "When I grow up, I want to become an architect because I want to design green buildings.",
      "prompt": "What does Mai want to become in the future?",
      "options": [
        "An architect",
        "A doctor",
        "A flight attendant",
        "A music teacher"
      ],
      "correctAnswer": "An architect",
      "hintExplanation": "Mai nói: \"I want to become an architect\" (một kiến trúc sư)."
    },
    {
      "id": 5,
      "topic": "listening_school_places",
      "topicTitle": "Nghe hướng dẫn chỉ đường",
      "audioContext": "Người dân địa phương chỉ đường cho du khách",
      "audioScript": "To get to the supermarket, go straight for two hundred meters, then turn right at the traffic lights.",
      "prompt": "What should the tourist do at the traffic lights?",
      "options": [
        "Turn right",
        "Turn left",
        "Stop and wait",
        "Go straight"
      ],
      "correctAnswer": "Turn right",
      "hintExplanation": "Lời chỉ đường nói: \"turn right at the traffic lights\" (rẽ phải ở đèn giao thông)."
    },
    {
      "id": 6,
      "topic": "listening_school_places",
      "topicTitle": "Nghe hướng dẫn chỉ đường",
      "audioContext": "Bạn Nam hỏi vị trí rạp chiếu phim",
      "audioScript": "The cinema is opposite the central stadium, right between the bookstore and the cafe.",
      "prompt": "Where is the cinema located?",
      "options": [
        "Opposite the stadium",
        "Behind the museum",
        "Inside the park",
        "Next to the railway station"
      ],
      "correctAnswer": "Opposite the stadium",
      "hintExplanation": "Audio nói: \"The cinema is opposite the central stadium\" (đối diện sân vận động trung tâm)."
    },
    {
      "id": 7,
      "topic": "listening_transportation_speed",
      "topicTitle": "Nghe phương tiện đi lại & Thời gian",
      "audioContext": "Chuyến đi về quê",
      "audioScript": "We usually travel to our hometown by train. It takes about three hours and is very comfortable.",
      "prompt": "How do they travel to their hometown?",
      "options": [
        "By train",
        "By coach bus",
        "By motorbike",
        "By airplane"
      ],
      "correctAnswer": "By train",
      "hintExplanation": "Audio nói: \"travel to our hometown by train\" (bằng tàu hỏa)."
    },
    {
      "id": 8,
      "topic": "listening_story_fable",
      "topicTitle": "Nghe câu chuyện ngụ ngôn Rùa và Thỏ",
      "audioContext": "Kể truyện ngụ ngôn",
      "audioScript": "The rabbit ran very fast, but he fell asleep under a tree. The tortoise walked slowly and steadily, and won the race!",
      "prompt": "Why did the tortoise win the race?",
      "options": [
        "Because he walked slowly and steadily without stopping.",
        "Because the rabbit fell into a river.",
        "Because the tortoise had a bicycle.",
        "Because the race was canceled."
      ],
      "correctAnswer": "Because he walked slowly and steadily without stopping.",
      "hintExplanation": "Audio nêu rõ: \"The tortoise walked slowly and steadily, and won the race!\"."
    },
    {
      "id": 9,
      "topic": "listening_health_advice",
      "topicTitle": "Nghe lời khuyên bác sĩ về sức khỏe",
      "audioContext": "Bác sĩ dặn dò bệnh nhân",
      "audioScript": "You have a bad cough. You should drink warm honey water and avoid eating cold ice cream.",
      "prompt": "What should the patient drink?",
      "options": [
        "Warm honey water",
        "Iced lemon soda",
        "Cold milk tea",
        "Cold water with ice"
      ],
      "correctAnswer": "Warm honey water",
      "hintExplanation": "Audio dặn: \"drink warm honey water\" (uống nước mật ong ấm)."
    }
  ],
  "6": [
    {
      "id": 1,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe thông tin chi tiết (Giờ giấc, Số lượng)",
      "audioContext": "Tom đang kể về lịch trình buổi sáng của bạn ấy",
      "audioScript": "Hi, I am Tom. Every morning, I get up at six o'clock, and I have breakfast with my mom at six thirty. After that, I ride my bike to school at seven o'clock.",
      "prompt": "Listen to Tom: What time does he have breakfast with his mom?",
      "options": [
        "At 6:00",
        "At 6:30",
        "At 7:00",
        "At 7:30"
      ],
      "correctAnswer": "At 6:30",
      "hintExplanation": "Trong bài nghe, Tom nói rõ: \"I have breakfast with my mom at six thirty\" (6:30). Mốc 6:00 là giờ thức dậy và 7:00 là giờ đi học, đây là thông tin gây nhiễu."
    },
    {
      "id": 2,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe thông tin chi tiết (Giờ giấc, Số lượng)",
      "audioContext": "Lan đang giới thiệu số lượng thành viên câu lạc bộ Tiếng Anh",
      "audioScript": "Welcome to our class English club! Today we have twelve girls and eight boys, so there are twenty students here in total.",
      "prompt": "Listen to Lan: How many students are there in the English club in total?",
      "options": [
        "12 students",
        "8 students",
        "20 students",
        "28 students"
      ],
      "correctAnswer": "20 students",
      "hintExplanation": "Lan cho biết trong câu lạc bộ có \"twelve girls and eight boys, so there are twenty students here in total\". Tổng số học sinh là 20."
    },
    {
      "id": 3,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe hoạt động thường nhật & Sở thích",
      "audioContext": "Phong đang nói về hoạt động chiều thứ Bảy của mình",
      "audioScript": "Hello! It is Saturday afternoon. My brother is playing badminton in the front yard, but I am playing basketball with my classmates at the school gym.",
      "prompt": "Listen to Phong: What sport is Phong playing this afternoon?",
      "options": [
        "Football",
        "Badminton",
        "Basketball",
        "Table tennis"
      ],
      "correctAnswer": "Basketball",
      "hintExplanation": "Phong nói: \"My brother is playing badminton... but I am playing basketball with my classmates\". Như vậy Phong đang chơi bóng rổ (Basketball)."
    },
    {
      "id": 4,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe hoạt động thường nhật & Sở thích",
      "audioContext": "Mai chia sẻ về thói quen vào sáng Chủ nhật",
      "audioScript": "On Sunday morning, I do not watch cartoons on television. I usually help my mother water the red roses in our small garden.",
      "prompt": "Listen to Mai: What does Mai usually do on Sunday morning?",
      "options": [
        "Watches cartoons",
        "Waters flowers in the garden",
        "Cleans her bedroom",
        "Plays video games"
      ],
      "correctAnswer": "Waters flowers in the garden",
      "hintExplanation": "Mai nói: \"I do not watch cartoons... I usually help my mother water the red roses in our small garden\" (Tưới hoa trong vườn)."
    },
    {
      "id": 5,
      "topic": "listening_school_places",
      "topicTitle": "Nghe miêu tả trường học & Nơi chốn",
      "audioContext": "Thầy giáo hướng dẫn vị trí các phòng chức năng trong trường mới",
      "audioScript": "Look at our new school building. The science lab is on the first floor, and the big library is on the second floor, right next to the music room.",
      "prompt": "Listen to the teacher: Where is the library in the new school?",
      "options": [
        "On the first floor",
        "On the second floor",
        "Behind the playground",
        "Opposite the computer lab"
      ],
      "correctAnswer": "On the second floor",
      "hintExplanation": "Thầy giáo giới thiệu: \"The science lab is on the first floor, and the big library is on the second floor\". Thư viện nằm ở tầng hai (the second floor)."
    },
    {
      "id": 6,
      "topic": "listening_school_places",
      "topicTitle": "Nghe miêu tả trường học & Nơi chốn",
      "audioContext": "Nam miêu tả cảnh quan xung quanh ngôi nhà của mình",
      "audioScript": "My house is small and peaceful. There is a clean fish pond behind the house, and there are two tall mango trees in front of it.",
      "prompt": "Listen to Nam: What is there in front of Nam house?",
      "options": [
        "A clean fish pond",
        "Two tall mango trees",
        "A big garage",
        "A vegetable farm"
      ],
      "correctAnswer": "Two tall mango trees",
      "hintExplanation": "Nam nói: \"there are two tall mango trees in front of it\" (có 2 cây xoài cao ở phía trước nhà). \"A clean fish pond\" nằm ở phía sau nhà (behind the house)."
    },
    {
      "id": 7,
      "topic": "listening_club_activities",
      "topicTitle": "Nghe thông báo câu lạc bộ trường học",
      "audioContext": "Thông báo trên loa phát thanh",
      "audioScript": "Attention students! The Green School Club meets every Thursday at four PM in room three zero two to recycle plastic bottles.",
      "prompt": "What day and time does the Green School Club meet?",
      "options": [
        "Thursday at 4:00 PM",
        "Tuesday at 3:00 PM",
        "Friday at 5:00 PM",
        "Saturday morning at 8:00 AM"
      ],
      "correctAnswer": "Thursday at 4:00 PM",
      "hintExplanation": "Audio thông báo: \"every Thursday at four PM\" (Thứ Năm lúc 4 giờ chiều)."
    },
    {
      "id": 8,
      "topic": "listening_neighborhood_facilities",
      "topicTitle": "Nghe tiện ích khu phố",
      "audioContext": "Giới thiệu khu dân cư mới",
      "audioScript": "My neighborhood is very convenient. There is a modern sports center within a five-minute walk from my apartment.",
      "prompt": "How far is the modern sports center from the apartment?",
      "options": [
        "A five-minute walk",
        "A twenty-minute bus ride",
        "Ten kilometers away",
        "One hour drive"
      ],
      "correctAnswer": "A five-minute walk",
      "hintExplanation": "Audio chỉ rõ: \"within a five-minute walk\" (đi bộ 5 phút)."
    },
    {
      "id": 9,
      "topic": "listening_natural_wonders",
      "topicTitle": "Nghe kỳ quan thiên nhiên Việt Nam",
      "audioContext": "Hướng dẫn viên giới thiệu vịnh Hạ Long",
      "audioScript": "Ha Long Bay in Quang Ninh province features thousands of limestone islands towering dramatically over emerald waters.",
      "prompt": "What is Ha Long Bay famous for in the audio?",
      "options": [
        "Thousands of limestone islands over emerald waters",
        "Tall snowy mountains",
        "Endless sand dunes in the desert",
        "Active volcanoes"
      ],
      "correctAnswer": "Thousands of limestone islands over emerald waters",
      "hintExplanation": "Audio mô tả: \"thousands of limestone islands towering dramatically over emerald waters\"."
    },
    {
      "id": 10,
      "topic": "listening_future_robots",
      "topicTitle": "Nghe dự đoán vai trò của robot trong tương lai",
      "audioContext": "Bài giảng khoa học công nghệ",
      "audioScript": "Scientists predict that in the next decade, smart domestic robots will handle heavy household chores like washing and gardening.",
      "prompt": "What will domestic robots do in the future according to scientists?",
      "options": [
        "Handle heavy household chores like washing and gardening",
        "Drive airplanes across the ocean",
        "Replace teachers in schools completely",
        "Cook food in high-end restaurants only"
      ],
      "correctAnswer": "Handle heavy household chores like washing and gardening",
      "hintExplanation": "Audio khẳng định: \"smart domestic robots will handle heavy household chores like washing and gardening\"."
    }
  ],
  "7": [
    {
      "id": 1,
      "topic": "listening_travel_experiences",
      "topicTitle": "Nghe về lễ hội truyền thống (Festivals)",
      "audioContext": "Hướng dẫn viên giới thiệu lễ hội hoa Đà Lạt",
      "audioScript": "Da Lat Flower Festival takes place every two years in December, attracting thousands of visitors from across the country.",
      "prompt": "How often does the Da Lat Flower Festival take place?",
      "options": [
        "Every two years",
        "Every year",
        "Every six months",
        "Every five years"
      ],
      "correctAnswer": "Every two years",
      "hintExplanation": "Hướng dẫn viên nói: \"takes place every two years in December\" (cứ 2 năm một lần)."
    },
    {
      "id": 2,
      "topic": "listening_travel_experiences",
      "topicTitle": "Nghe về lễ hội truyền thống (Festivals)",
      "audioContext": "Bản tin văn hóa giới thiệu lễ hội cà chua La Tomatina",
      "audioScript": "In Bunol, Spain, people throw over one hundred tons of ripe tomatoes at each other during the festival.",
      "prompt": "What do people throw at each other in La Tomatina festival?",
      "options": [
        "Ripe tomatoes",
        "Water balloons",
        "Colored powder",
        "Orange flowers"
      ],
      "correctAnswer": "Ripe tomatoes",
      "hintExplanation": "Đoạn tin cho biết: \"throw over one hundred tons of ripe tomatoes\" (cà chua chín)."
    },
    {
      "id": 3,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe an toàn giao thông đường bộ",
      "audioContext": "Cảnh sát giao thông tuyên truyền cho học sinh",
      "audioScript": "Remember, you must always wear a helmet when riding a motorbike or an electric bicycle on the road.",
      "prompt": "What must you always wear when riding an electric bicycle?",
      "options": [
        "A helmet",
        "Sunglasses",
        "Raincoat",
        "Warm gloves"
      ],
      "correctAnswer": "A helmet",
      "hintExplanation": "Khuyến cáo: \"you must always wear a helmet\" (đội mũ bảo hiểm)."
    },
    {
      "id": 4,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe an toàn giao thông đường bộ",
      "audioContext": "Thông báo về khoảng cách an toàn",
      "audioScript": "Pedestrians should always walk on the pavement and cross the street at the zebra crossing.",
      "prompt": "Where should pedestrians cross the street?",
      "options": [
        "At the zebra crossing",
        "Anywhere on the road",
        "Under the bridge",
        "Behind large trucks"
      ],
      "correctAnswer": "At the zebra crossing",
      "hintExplanation": "Thông báo nhắc: \"cross the street at the zebra crossing\" (vạch kẻ đường cho người đi bộ)."
    },
    {
      "id": 5,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe đánh giá và cảm nhận về bộ phim",
      "audioContext": "Hai bạn trẻ thảo luận sau khi xem phim tại rạp",
      "audioScript": "The special effects were incredible, but the ending was very disappointing and sad.",
      "prompt": "How did the speaker feel about the film ending?",
      "options": [
        "Disappointing and sad",
        "Very funny",
        "Happy and exciting",
        "Boring and slow"
      ],
      "correctAnswer": "Disappointing and sad",
      "hintExplanation": "Người nói chia sẻ: \"the ending was very disappointing and sad\" (gây thất vọng và buồn)."
    },
    {
      "id": 6,
      "topic": "listening_activities_hobbies",
      "topicTitle": "Nghe đánh giá và cảm nhận về bộ phim",
      "audioContext": "Nhà phê bình giới thiệu phim tài liệu về thiên nhiên",
      "audioScript": "This documentary took three years to film in the deep ocean and cost five million dollars.",
      "prompt": "How long did it take to film the documentary?",
      "options": [
        "Three years",
        "Two years",
        "Five months",
        "Ten years"
      ],
      "correctAnswer": "Three years",
      "hintExplanation": "Nhà phê bình nói: \"took three years to film in the deep ocean\" (mất 3 năm)."
    },
    {
      "id": 7,
      "topic": "listening_traffic_safety_rules",
      "topicTitle": "Nghe quy tắc an toàn giao thông đường bộ",
      "audioContext": "Cảnh sát giao thông tuyên truyền trường học",
      "audioScript": "Remember that pedestrians must always look both ways and use the zebra crossing when crossing busy streets.",
      "prompt": "Where must pedestrians cross the street according to the officer?",
      "options": [
        "At the zebra crossing",
        "Anywhere on the highway",
        "Under the bridge only",
        "Behind stationary buses"
      ],
      "correctAnswer": "At the zebra crossing",
      "hintExplanation": "Audio dặn: \"use the zebra crossing when crossing busy streets\" (qua đường tại vạch kẻ qua đường cho người đi bộ)."
    },
    {
      "id": 8,
      "topic": "listening_traditional_festivals",
      "topicTitle": "Nghe về lễ hội truyền thống chọi trâu Đồ Sơn",
      "audioContext": "Phóng sự văn hóa lễ hội",
      "audioScript": "The Mid-Autumn Festival in Vietnam is beloved by children because of colorful star lanterns, lion dances, and mooncakes.",
      "prompt": "What do Vietnamese children enjoy during the Mid-Autumn Festival?",
      "options": [
        "Star lanterns, lion dances, and mooncakes",
        "Decorating Christmas trees with tinsel",
        "Giving chocolate eggs to classmates",
        "Wearing Halloween costumes"
      ],
      "correctAnswer": "Star lanterns, lion dances, and mooncakes",
      "hintExplanation": "Audio liệt kê: \"star lanterns, lion dances, and mooncakes\"."
    },
    {
      "id": 9,
      "topic": "listening_renewable_energy_sources",
      "topicTitle": "Nghe về năng lượng tái tạo",
      "audioContext": "Tọa đàm năng lượng xanh",
      "audioScript": "Hydroelectric power provides clean energy from river currents without emitting harmful carbon dioxide into the atmosphere.",
      "prompt": "What is the main benefit of hydroelectric power mentioned in the audio?",
      "options": [
        "It provides clean energy without emitting carbon dioxide.",
        "It is the most expensive energy source.",
        "It causes heavy smog in cities.",
        "It only works during sunny days."
      ],
      "correctAnswer": "It provides clean energy without emitting carbon dioxide.",
      "hintExplanation": "Audio nói rõ: \"provides clean energy... without emitting harmful carbon dioxide\"."
    },
    {
      "id": 10,
      "topic": "listening_film_review",
      "topicTitle": "Nghe nhận xét phê bình phim điện ảnh",
      "audioContext": "Bình luận viên điện ảnh",
      "audioScript": "Although the visual effects were truly spectacular, the dialogue felt predictable and the pacing dragged in the second half.",
      "prompt": "What weakness of the film did the reviewer point out?",
      "options": [
        "Predictable dialogue and slow pacing in the second half",
        "Terrible visual special effects",
        "Bad background musical score",
        "Very short running time"
      ],
      "correctAnswer": "Predictable dialogue and slow pacing in the second half",
      "hintExplanation": "Audio nhận xét: \"dialogue felt predictable and the pacing dragged in the second half\"."
    }
  ],
  "8": [
    {
      "id": 1,
      "topic": "listening_news_interview",
      "topicTitle": "Nghe bản tin thời tiết & Thiên tai",
      "audioContext": "Bản tin cảnh báo bão khẩn cấp trên đài phát thanh",
      "audioScript": "Tropical Typhoon Noru has caused severe flooding in three coastal provinces, destroying dozens of wooden houses.",
      "prompt": "What damage has Typhoon Noru caused in the coastal provinces?",
      "options": [
        "Severe flooding",
        "Earthquakes",
        "Forest fires",
        "Volcano eruption"
      ],
      "correctAnswer": "Severe flooding",
      "hintExplanation": "Bản tin thông báo: \"has caused severe flooding in three coastal provinces\" (ngập lụt nghiêm trọng)."
    },
    {
      "id": 2,
      "topic": "listening_news_interview",
      "topicTitle": "Nghe bản tin thời tiết & Thiên tai",
      "audioContext": "Cứu hộ khẩn cấp hướng dẫn người dân",
      "audioScript": "Residents are advised to store drinking water, dry food, and flashlights before the heavy storm arrives tonight.",
      "prompt": "What are residents advised to prepare?",
      "options": [
        "Water, dry food, and flashlights",
        "Heavy winter jackets",
        "Television sets",
        "Office books"
      ],
      "correctAnswer": "Water, dry food, and flashlights",
      "hintExplanation": "Hướng dẫn khẩn cấp: \"store drinking water, dry food, and flashlights\" (nước uống, lương khô và đèn pin)."
    },
    {
      "id": 3,
      "topic": "listening_travel_experiences",
      "topicTitle": "Nghe về bảo vệ môi trường sống",
      "audioContext": "Học sinh thuyết trình về dự án rác thải nhựa",
      "audioScript": "By using cloth tote bags instead of single-use plastic bags, our school community saved over two thousand bags last month.",
      "prompt": "How many plastic bags did the school save last month?",
      "options": [
        "Over 2,000 bags",
        "About 500 bags",
        "1,000 bags",
        "5,000 bags"
      ],
      "correctAnswer": "Over 2,000 bags",
      "hintExplanation": "Thuyết trình viên nói: \"saved over two thousand bags last month\" (hơn 2.000 túi nilon)."
    },
    {
      "id": 4,
      "topic": "listening_travel_experiences",
      "topicTitle": "Nghe về bảo vệ môi trường sống",
      "audioContext": "Dự án phân loại rác tại nguồn",
      "audioScript": "The green bin is used for organic kitchen waste, while the blue bin is designed for paper and cardboard.",
      "prompt": "What waste should be put into the green bin?",
      "options": [
        "Organic kitchen waste",
        "Plastic bottles",
        "Broken glass",
        "Metal cans"
      ],
      "correctAnswer": "Organic kitchen waste",
      "hintExplanation": "Audio nói rõ: \"The green bin is used for organic kitchen waste\" (rác hữu cơ nhà bếp)."
    },
    {
      "id": 5,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe phát minh khoa học công nghệ",
      "audioContext": "Chuyên gia công nghệ giới thiệu người máy thông minh",
      "audioScript": "The new rescue robot can navigate through thick smoke and detect survivors within forty meters.",
      "prompt": "What can the new rescue robot detect?",
      "options": [
        "Survivors within 40 meters",
        "Gold and diamonds",
        "Underground rivers",
        "Deep sea animals"
      ],
      "correctAnswer": "Survivors within 40 meters",
      "hintExplanation": "Chuyên gia nói: \"detect survivors within forty meters\" (phát hiện người còn sống sót trong phạm vi 40m)."
    },
    {
      "id": 6,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe phát minh khoa học công nghệ",
      "audioContext": "Hội chợ công nghệ giáo dục",
      "audioScript": "Students wearing these virtual reality glasses can explore outer space and walk on Mars without leaving their classroom.",
      "prompt": "What planet can students explore with VR glasses in the demo?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Saturn"
      ],
      "correctAnswer": "Mars",
      "hintExplanation": "Audio cho biết: \"walk on Mars without leaving their classroom\" (sao Hỏa - Mars)."
    },
    {
      "id": 7,
      "topic": "listening_ethnic_groups_vietnam",
      "topicTitle": "Nghe về trang phục và phong tục các dân tộc thiểu số",
      "audioContext": "Bảo tàng Dân tộc học",
      "audioScript": "The Hmong women are renowned for their elaborate indigo-dyed hemp costumes adorned with delicate silver jewelry.",
      "prompt": "What are Hmong women renowned for according to the guide?",
      "options": [
        "Elaborate indigo-dyed hemp costumes with silver jewelry",
        "Modern leather jackets and sneakers",
        "Plain uncolored cotton tunics",
        "Ceramic pottery making only"
      ],
      "correctAnswer": "Elaborate indigo-dyed hemp costumes with silver jewelry",
      "hintExplanation": "Audio giới thiệu: \"renowned for their elaborate indigo-dyed hemp costumes adorned with delicate silver jewelry\"."
    },
    {
      "id": 8,
      "topic": "listening_natural_disasters_warning",
      "topicTitle": "Nghe cảnh báo thiên tai bão nhiệt đới",
      "audioContext": "Bản tin khẩn cấp đài khí tượng",
      "audioScript": "A category three tropical storm is projected to make landfall along the central coast tomorrow night with sustained winds over 120 km/h.",
      "prompt": "When is the tropical storm projected to make landfall?",
      "options": [
        "Tomorrow night along the central coast",
        "Early this morning in the north",
        "Next weekend in the south",
        "In two weeks time"
      ],
      "correctAnswer": "Tomorrow night along the central coast",
      "hintExplanation": "Audio dự báo: \"projected to make landfall along the central coast tomorrow night\"."
    },
    {
      "id": 9,
      "topic": "listening_communication_technology",
      "topicTitle": "Nghe công nghệ giao tiếp video holography",
      "audioContext": "Giới thiệu công nghệ tương lai",
      "audioScript": "Holographic video calls will soon allow distant family members to project three-dimensional life-sized avatars in real time.",
      "prompt": "What capability will holographic video calls offer?",
      "options": [
        "Project 3D life-sized avatars in real time",
        "Send paper letters by drone in seconds",
        "Record audio only without visuals",
        "Block all internet connections automatically"
      ],
      "correctAnswer": "Project 3D life-sized avatars in real time",
      "hintExplanation": "Audio miêu tả: \"project three-dimensional life-sized avatars in real time\"."
    },
    {
      "id": 10,
      "topic": "listening_teen_stress_management",
      "topicTitle": "Nghe chuyên gia tâm lý tư vấn giải tỏa áp lực học tập",
      "audioContext": "Chuyên gia tư vấn học đường",
      "audioScript": "Balancing academic deadlines with outdoor physical exercise and sufficient sleep is crucial for mitigating teenage anxiety.",
      "prompt": "What helps teenagers reduce academic anxiety according to the expert?",
      "options": [
        "Outdoor exercise and sufficient sleep",
        "Studying through the night without breaks",
        "Drinking lots of energy drinks",
        "Skipping all school exams"
      ],
      "correctAnswer": "Outdoor exercise and sufficient sleep",
      "hintExplanation": "Audio khuyên: \"outdoor physical exercise and sufficient sleep is crucial for mitigating teenage anxiety\"."
    }
  ],
  "9": [
    {
      "id": 1,
      "topic": "listening_news_interview",
      "topicTitle": "Nghe phỏng vấn hướng nghiệp (Career Interview)",
      "audioContext": "Một lập trình viên phần mềm trả lời phỏng vấn",
      "audioScript": "To become a successful software developer, you must possess strong logical thinking and the ability to learn continuously.",
      "prompt": "What essential quality is emphasized for software developers?",
      "options": [
        "Logical thinking and continuous learning",
        "Singing talent",
        "Fast handwriting",
        "Knowing five foreign languages"
      ],
      "correctAnswer": "Logical thinking and continuous learning",
      "hintExplanation": "Lập trình viên nói: \"strong logical thinking and the ability to learn continuously\" (tư duy logic và khả năng học tập liên tục)."
    },
    {
      "id": 2,
      "topic": "listening_news_interview",
      "topicTitle": "Nghe phỏng vấn hướng nghiệp (Career Interview)",
      "audioContext": "Bác sĩ trẻ chia sẻ lý do chọn ngành y",
      "audioScript": "My father was a dedicated surgeon, and his commitment to saving patients lives inspired me to pursue medicine.",
      "prompt": "Who inspired the young doctor to pursue medicine?",
      "options": [
        "Her father",
        "Her high school teacher",
        "Her best friend",
        "A famous movie star"
      ],
      "correctAnswer": "Her father",
      "hintExplanation": "Bác sĩ chia sẻ: \"My father was a dedicated surgeon... inspired me to pursue medicine\"."
    },
    {
      "id": 3,
      "topic": "listening_travel_experiences",
      "topicTitle": "Nghe du lịch và khám phá văn hóa thế giới",
      "audioContext": "Ký sự du lịch về vịnh Hạ Long và du lịch bền vững",
      "audioScript": "Eco-tourism in Ha Long Bay aims to protect marine biodiversity while providing stable income for local fishing communities.",
      "prompt": "What is one major goal of eco-tourism in Ha Long Bay?",
      "options": [
        "Protecting marine biodiversity",
        "Building luxury skyscrapers",
        "Catching all rare fish",
        "Cutting down mangrove forests"
      ],
      "correctAnswer": "Protecting marine biodiversity",
      "hintExplanation": "Đoạn audio nhấn mạnh: \"aims to protect marine biodiversity\" (bảo vệ đa dạng sinh học biển)."
    },
    {
      "id": 4,
      "topic": "listening_travel_experiences",
      "topicTitle": "Nghe du lịch và khám phá văn hóa thế giới",
      "audioContext": "Trải nghiệm du học sinh tại Úc",
      "audioScript": "Adapting to local Australian slang and independent living was challenging at first, but it helped me mature quickly.",
      "prompt": "What helped the student mature quickly during her study abroad?",
      "options": [
        "Adapting to slang and independent living",
        "Buying expensive clothes",
        "Staying home all day",
        "Eating only fast food"
      ],
      "correctAnswer": "Adapting to slang and independent living",
      "hintExplanation": "Du học sinh chia sẻ: \"Adapting to local Australian slang and independent living... helped me mature quickly\"."
    },
    {
      "id": 5,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe vấn đề môi trường & Biến đổi khí hậu",
      "audioContext": "Nhà khoa học phân tích hiện tượng nước biển dâng",
      "audioScript": "According to recent satellite data, global sea levels have risen at an accelerating rate of 3.7 millimeters per year.",
      "prompt": "What is the accelerating rate of global sea level rise per year?",
      "options": [
        "3.7 millimeters",
        "7.3 millimeters",
        "1.5 millimeters",
        "10.2 millimeters"
      ],
      "correctAnswer": "3.7 millimeters",
      "hintExplanation": "Nhà khoa học đưa ra số liệu vệ tinh: \"3.7 millimeters per year\"."
    },
    {
      "id": 6,
      "topic": "listening_specific_info",
      "topicTitle": "Nghe vấn đề môi trường & Biến đổi khí hậu",
      "audioContext": "Hội nghị năng lượng tái tạo",
      "audioScript": "Solar and wind energy now account for over twenty-five percent of the total electricity generation in the region.",
      "prompt": "What percentage of total electricity comes from solar and wind energy?",
      "options": [
        "Over 25%",
        "Under 10%",
        "Exactly 50%",
        "Around 5%"
      ],
      "correctAnswer": "Over 25%",
      "hintExplanation": "Audio khẳng định: \"over twenty-five percent of the total electricity generation\" (hơn 25%)."
    },
    {
      "id": 7,
      "topic": "listening_space_exploration_mars",
      "topicTitle": "Nghe thám hiểm sao Hỏa và trạm vũ trụ",
      "audioContext": "Hội thảo khoa học thiên văn",
      "audioScript": "NASA's Perseverance rover has been analyzing Martian soil samples to determine whether microscopic microbial life existed billions of years ago.",
      "prompt": "What is the primary mission of the Perseverance rover on Mars?",
      "options": [
        "Analyze soil samples for past microscopic life",
        "Build human colonies immediately",
        "Mine commercial gold and diamonds",
        "Transport tourists between planets"
      ],
      "correctAnswer": "Analyze soil samples for past microscopic life",
      "hintExplanation": "Audio giải thích: \"analyzing Martian soil samples to determine whether microscopic microbial life existed\"."
    },
    {
      "id": 8,
      "topic": "listening_sustainable_tourism_impact",
      "topicTitle": "Nghe tác động của du lịch bền vững đối với sinh thái",
      "audioContext": "Hội thảo bảo tồn thiên nhiên",
      "audioScript": "Ecotourism aims to minimize environmental footprints by utilizing renewable energy and channeling admission fees directly into wildlife conservation.",
      "prompt": "How does ecotourism support local conservation?",
      "options": [
        "By channeling admission fees directly into wildlife conservation",
        "By constructing huge concrete luxury resorts",
        "By allowing tourists to feed wild animals freely",
        "By cutting down mangrove forests for highways"
      ],
      "correctAnswer": "By channeling admission fees directly into wildlife conservation",
      "hintExplanation": "Audio chỉ rõ: \"channeling admission fees directly into wildlife conservation\"."
    },
    {
      "id": 9,
      "topic": "listening_career_pathways_ai",
      "topicTitle": "Nghe định hướng nghề nghiệp trong kỷ nguyên số",
      "audioContext": "Buổi tư vấn tuyển sinh đại học",
      "audioScript": "While automated algorithms can crunch data rapidly, human creativity, empathy, and critical thinking remain irreplaceable across medical and educational professions.",
      "prompt": "Which human skills remain irreplaceable according to the speaker?",
      "options": [
        "Human creativity, empathy, and critical thinking",
        "Repetitive mechanical calculation speed",
        "Memorizing phone directories",
        "Manual data entry on spreadsheets"
      ],
      "correctAnswer": "Human creativity, empathy, and critical thinking",
      "hintExplanation": "Audio khẳng định: \"human creativity, empathy, and critical thinking remain irreplaceable\"."
    },
    {
      "id": 10,
      "topic": "listening_biodiversity_loss",
      "topicTitle": "Nghe về mất đa dạng sinh học và giải pháp phục hồi",
      "audioContext": "Báo cáo môi trường quốc tế",
      "audioScript": "Reforestation initiatives spanning Southeast Asia have restored over half a million hectares of degraded tropical canopy since 2020.",
      "prompt": "How much degraded tropical forest has been restored since 2020?",
      "options": [
        "Over half a million hectares",
        "Less than one thousand hectares",
        "Exactly two million square meters",
        "Fifty square kilometers"
      ],
      "correctAnswer": "Over half a million hectares",
      "hintExplanation": "Audio báo cáo: \"restored over half a million hectares of degraded tropical canopy\"."
    }
  ]
};
