import { TextbookUnit, TextbookPeriod } from '../types';

interface PrimaryUnitDef {
  unitNumber: number;
  unitTitle: string;
  themeVi: string;
  icon: string;
  vocab: string;
  sentencePattern: string;
  phonics: string;
}

function buildPrimaryUnit(grade: number, def: PrimaryUnitDef): TextbookUnit {
  const uId = `g${grade}-u${def.unitNumber}`;

  const periods: TextbookPeriod[] = [
    {
      id: `${uId}-p1`,
      periodNumber: 1,
      periodName: 'Tiết 1: Lesson 1',
      lessonTitle: `Từ vựng & Mẫu câu mở đầu: ${def.vocab}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang ${(def.unitNumber - 1) * 6 + 6} (Lesson 1)`,
      summary: `Học sinh quan sát tranh, nghe và nhắc lại các từ vựng mới: ${def.vocab} cùng mẫu câu giao tiếp nền tảng.`,
      skillFocus: {
        grammar: `Cấu trúc câu hỏi - đáp cơ bản: ${def.sentencePattern}.`,
        listening: `Nghe và phân biệt cách phát âm các từ vựng mới: ${def.vocab}.`,
        reading: `Nhìn chữ, đọc thành tiếng từ vựng và nhận diện hình ảnh minh họa tương ứng.`,
        writing: `Tập tô và viết các từ vựng mới ${def.vocab} vào vở ô ly.`,
        speaking: `Thực hành chỉ vào tranh và nói to, rõ ràng: "Point and say".`
      }
    },
    {
      id: `${uId}-p2`,
      periodNumber: 2,
      periodName: 'Tiết 2: Lesson 2',
      lessonTitle: `Luyện tập giao tiếp & Phản xạ: ${def.sentencePattern}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang ${(def.unitNumber - 1) * 6 + 7} (Lesson 2)`,
      summary: `Khắc sâu mẫu câu giao tiếp qua bài nghe chọn tranh (Listen and tick) và hoạt động nói tương tác (Let's talk).`,
      skillFocus: {
        grammar: `Biến đổi câu hỏi - đáp với các chủ ngữ và danh từ khác nhau: ${def.sentencePattern}.`,
        listening: `Nghe đoạn hội thoại và tích chọn (tick) vào bức tranh chính xác.`,
        reading: `Đọc đoạn hội thoại mẫu ngắn và nối câu hỏi với câu trả lời phù hợp.`,
        writing: `Điền từ còn thiếu vào chỗ trống để hoàn thành câu giao tiếp hoàn chỉnh.`,
        speaking: `Đóng vai hỏi đáp cùng bạn cùng bàn (Let's talk) phản xạ tự nhiên.`
      }
    },
    {
      id: `${uId}-p3`,
      periodNumber: 3,
      periodName: 'Tiết 3: Lesson 3',
      lessonTitle: `Ngữ âm Phonics & Ôn tập 4 kỹ năng: ${def.phonics}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang ${(def.unitNumber - 1) * 6 + 8} (Lesson 3)`,
      summary: `Luyện phát âm chuẩn ngữ âm ${def.phonics} qua bài vè chant vui nhộn, làm bài tập đọc viết và sản phẩm dự án nhỏ.`,
      skillFocus: {
        grammar: `Củng cố toàn bộ cấu trúc và từ vựng của cả bài học ${def.unitTitle}.`,
        listening: `Nghe bài vè chant, bắt nhịp điệu và vỗ tay theo âm ${def.phonics}.`,
        reading: `Đọc hiểu bài thơ ngắn hoặc đoạn văn 2-3 câu ứng dụng từ vựng đã học.`,
        writing: `Viết lại câu hoàn chỉnh hoặc hoàn thành bài viết ngắn giới thiệu về bản thân.`,
        speaking: `Hát bài chant và thuyết trình bức vẽ hoặc dự án nhỏ (Project) trước lớp.`
      }
    }
  ];

  return {
    id: uId,
    unitNumber: def.unitNumber,
    unitTitle: def.unitTitle,
    themeVi: def.themeVi,
    icon: def.icon,
    periods
  };
}

// ==========================================
// TIỂU HỌC: LỚP 1 (16 UNITS)
// ==========================================
export const TEXTBOOK_GRADE_1_UNITS: TextbookUnit[] = [
  buildPrimaryUnit(1, { unitNumber: 1, unitTitle: 'Unit 1: In the school playground', themeVi: 'Ở sân trường', icon: '🏫', vocab: 'Bill, bike, book, ball', sentencePattern: "Hi, I'm Bill. / It's a bike.", phonics: 'Âm /b/ (letter B, b)' }),
  buildPrimaryUnit(1, { unitNumber: 2, unitTitle: 'Unit 2: In the dining room', themeVi: 'Trong phòng ăn', icon: '🍽️', vocab: 'cake, car, cat, cup', sentencePattern: "I have a cake. / It's a car.", phonics: 'Âm /k/ (letter C, c)' }),
  buildPrimaryUnit(1, { unitNumber: 3, unitTitle: 'Unit 3: At the street market', themeVi: 'Ở chợ phố', icon: '🍎', vocab: 'apple, bag, can, hat', sentencePattern: "An apple, please! / I see an apple.", phonics: 'Âm /æ/ (letter A, a)' }),
  buildPrimaryUnit(1, { unitNumber: 4, unitTitle: 'Unit 4: In the bedroom', themeVi: 'Trong phòng ngủ', icon: '🛏️', vocab: 'desk, dog, door, duck', sentencePattern: "Look at the desk. / Point to the door.", phonics: 'Âm /d/ (letter D, d)' }),
  buildPrimaryUnit(1, { unitNumber: 5, unitTitle: 'Unit 5: At the fish and chip shop', themeVi: 'Ở quán ăn', icon: '🐟', vocab: 'fish, chips, chicken, milk', sentencePattern: "I like fish. / Do you like chips?", phonics: 'Âm /i/ (letter I, i)' }),
  buildPrimaryUnit(1, { unitNumber: 6, unitTitle: 'Unit 6: In the classroom', themeVi: 'Trong lớp học', icon: '✏️', vocab: 'pen, pencil, bell, red', sentencePattern: "It's a red pen. / Show me your pencil.", phonics: 'Âm /e/ (letter E, e)' }),
  buildPrimaryUnit(1, { unitNumber: 7, unitTitle: 'Unit 7: In the garden', themeVi: 'Trong vườn hoa', icon: '🌻', vocab: 'girl, gate, goat, garden', sentencePattern: "There is a goat in the garden.", phonics: 'Âm /g/ (letter G, g)' }),
  buildPrimaryUnit(1, { unitNumber: 8, unitTitle: 'Unit 8: In the park', themeVi: 'Trong công viên', icon: '🌳', vocab: 'pen, parrot, pizza, park', sentencePattern: "Let's play in the park.", phonics: 'Âm /p/ (letter P, p)' }),
  buildPrimaryUnit(1, { unitNumber: 9, unitTitle: 'Unit 9: In the grocery store', themeVi: 'Ở tiệm tạp hóa', icon: '🏪', vocab: 'mango, monkey, mother, milk', sentencePattern: "I want a mango, please.", phonics: 'Âm /m/ (letter M, m)' }),
  buildPrimaryUnit(1, { unitNumber: 10, unitTitle: 'Unit 10: At the zoo', themeVi: 'Ở sở thú', icon: '🦓', vocab: 'zebra, zoo, zebu, zero', sentencePattern: "I can see a zebra at the zoo.", phonics: 'Âm /z/ (letter Z, z)' }),
  buildPrimaryUnit(1, { unitNumber: 11, unitTitle: 'Unit 11: In the playground', themeVi: 'Ở sân chơi', icon: '🛝', vocab: 'lemon, lion, lock, lake', sentencePattern: "Look at the big lion.", phonics: 'Âm /l/ (letter L, l)' }),
  buildPrimaryUnit(1, { unitNumber: 12, unitTitle: 'Unit 12: At the lake', themeVi: 'Ở hồ nước', icon: '🦆', vocab: 'turtle, table, tiger, tent', sentencePattern: "There is a turtle by the lake.", phonics: 'Âm /t/ (letter T, t)' }),
  buildPrimaryUnit(1, { unitNumber: 13, unitTitle: 'Unit 13: In the school canteen', themeVi: 'Ở nhà ăn trường học', icon: '🥪', vocab: 'nut, noodle, nest, nine', sentencePattern: "I eat noodles for lunch.", phonics: 'Âm /n/ (letter N, n)' }),
  buildPrimaryUnit(1, { unitNumber: 14, unitTitle: 'Unit 14: In the toy shop', themeVi: 'Ở cửa hàng đồ chơi', icon: '🧸', vocab: 'robot, rabbit, ring, red', sentencePattern: "I have a nice robot.", phonics: 'Âm /r/ (letter R, r)' }),
  buildPrimaryUnit(1, { unitNumber: 15, unitTitle: 'Unit 15: At the football match', themeVi: 'Ở trận bóng đá', icon: '⚽', vocab: 'football, father, foot, fox', sentencePattern: "Let's play football together.", phonics: 'Âm /f/ (letter F, f)' }),
  buildPrimaryUnit(1, { unitNumber: 16, unitTitle: 'Unit 16: At home', themeVi: 'Ở nhà cùng gia đình', icon: '🏠', vocab: 'hat, hand, horse, house', sentencePattern: "This is my lovely home.", phonics: 'Âm /h/ (letter H, h)' })
];

// ==========================================
// TIỂU HỌC: LỚP 2 (16 UNITS)
// ==========================================
export const TEXTBOOK_GRADE_2_UNITS: TextbookUnit[] = [
  buildPrimaryUnit(2, { unitNumber: 1, unitTitle: 'Unit 1: At my birthday party', themeVi: 'Tiệc sinh nhật', icon: '🎂', vocab: 'popcorn, pasta, pizza, party', sentencePattern: "I like popcorn. / Happy birthday!", phonics: 'Âm /p/' }),
  buildPrimaryUnit(2, { unitNumber: 2, unitTitle: 'Unit 2: In the backyard', themeVi: 'Sau sân nhà', icon: '🏡', vocab: 'kite, kitten, bike, fly', sentencePattern: "He is flying a kite.", phonics: 'Âm /k/ (letter K, k)' }),
  buildPrimaryUnit(2, { unitNumber: 3, unitTitle: 'Unit 3: At the seaside', themeVi: 'Ở bờ biển', icon: '🏖️', vocab: 'sand, sun, sail, sea', sentencePattern: "Look at the sun. / I like the sea.", phonics: 'Âm /s/' }),
  buildPrimaryUnit(2, { unitNumber: 4, unitTitle: 'Unit 4: In the countryside', themeVi: 'Ở miền quê', icon: '🌾', vocab: 'water, walk, wall, watch', sentencePattern: "They are walking in the countryside.", phonics: 'Âm /w/' }),
  buildPrimaryUnit(2, { unitNumber: 5, unitTitle: 'Unit 5: In the classroom', themeVi: 'Trong lớp học', icon: '🎒', vocab: 'book, bag, bell, boy', sentencePattern: "Open your book, please.", phonics: 'Âm /b/' }),
  buildPrimaryUnit(2, { unitNumber: 6, unitTitle: 'Unit 6: On the farm', themeVi: 'Ở trang trại', icon: '🚜', vocab: 'horse, hen, house, hat', sentencePattern: "There are horses on the farm.", phonics: 'Âm /h/' }),
  buildPrimaryUnit(2, { unitNumber: 7, unitTitle: 'Unit 7: In the kitchen', themeVi: 'Trong phòng bếp', icon: '🍳', vocab: 'jam, juice, jelly, jar', sentencePattern: "Pass me the orange juice, please.", phonics: 'Âm /dʒ/ (letter J, j)' }),
  buildPrimaryUnit(2, { unitNumber: 8, unitTitle: 'Unit 8: In the village', themeVi: 'Ở ngôi làng', icon: '🏘️', vocab: 'van, village, volleyball, view', sentencePattern: "We play volleyball in the village.", phonics: 'Âm /v/' }),
  buildPrimaryUnit(2, { unitNumber: 9, unitTitle: 'Unit 9: In the grocery store', themeVi: 'Ở cửa hàng tạp hóa', icon: '🛍️', vocab: 'yogurt, yam, yellow, yo-yo', sentencePattern: "I want some yellow yogurt.", phonics: 'Âm /j/ (letter Y, y)' }),
  buildPrimaryUnit(2, { unitNumber: 10, unitTitle: 'Unit 10: At the zoo', themeVi: 'Ở sở thú', icon: '🦚', vocab: 'queen, quilt, quiet, quiz', sentencePattern: "Be quiet, please! Look at the peacock.", phonics: 'Âm /kw/ (letter Qu)' }),
  buildPrimaryUnit(2, { unitNumber: 11, unitTitle: 'Unit 11: In the playground', themeVi: 'Ở sân chơi', icon: '🛹', vocab: 'box, fox, six, taxi', sentencePattern: "I see a big box and a small fox.", phonics: 'Âm /ks/ (letter X, x)' }),
  buildPrimaryUnit(2, { unitNumber: 12, unitTitle: 'Unit 12: At the cafe', themeVi: 'Ở quán cà phê', icon: '☕', vocab: 'chair, cheese, chocolate, chips', sentencePattern: "I would like some cheese and chocolate.", phonics: 'Âm /tʃ/ (ch)' }),
  buildPrimaryUnit(2, { unitNumber: 13, unitTitle: 'Unit 13: In the maths class', themeVi: 'Giờ học Toán', icon: '📐', vocab: 'three, thirteen, thirty, think', sentencePattern: "How many are there? There are three.", phonics: 'Âm /θ/ (th)' }),
  buildPrimaryUnit(2, { unitNumber: 14, unitTitle: 'Unit 14: At the campsite', themeVi: 'Ở khu cắm trại', icon: '⛺', vocab: 'moon, spoon, boots, pool', sentencePattern: "Look at the bright moon tonight.", phonics: 'Âm /u:/ (oo)' }),
  buildPrimaryUnit(2, { unitNumber: 15, unitTitle: 'Unit 15: In the clothes shop', themeVi: 'Ở tiệm quần áo', icon: '👗', vocab: 'shirt, shoes, shorts, sheep', sentencePattern: "I like that blue shirt and shoes.", phonics: 'Âm /ʃ/ (sh)' }),
  buildPrimaryUnit(2, { unitNumber: 16, unitTitle: 'Unit 16: At home', themeVi: 'Ở nhà cùng người thân', icon: '👨‍👩‍👧', vocab: 'ring, sing, wing, king', sentencePattern: "We sing songs together at home.", phonics: 'Âm /ŋ/ (ng)' })
];

// ==========================================
// TIỂU HỌC: LỚP 3 (20 UNITS)
// ==========================================
export const TEXTBOOK_GRADE_3_UNITS: TextbookUnit[] = [
  buildPrimaryUnit(3, { unitNumber: 1, unitTitle: 'Unit 1: Hello', themeVi: 'Xin chào', icon: '👋', vocab: 'Hello, hi, how are you, fine, thanks', sentencePattern: 'Hello, I am Linh. / How are you? - I am fine, thank you.', phonics: 'Âm /h/ và /b/' }),
  buildPrimaryUnit(3, { unitNumber: 2, unitTitle: 'Unit 2: Our names', themeVi: 'Tên của chúng mình', icon: '📛', vocab: 'name, spell, how, what', sentencePattern: 'What is your name? - My name is Nam. / How do you spell your name?', phonics: 'Âm /m/ và /n/' }),
  buildPrimaryUnit(3, { unitNumber: 3, unitTitle: 'Unit 3: Our friends', themeVi: 'Bạn bè của chúng mình', icon: '🤝', vocab: 'friend, this, that, yes, no', sentencePattern: 'This is my friend, Mary. / Is that Bill? - Yes, it is.', phonics: 'Âm /th/ và /d/' }),
  buildPrimaryUnit(3, { unitNumber: 4, unitTitle: 'Unit 4: Our bodies', themeVi: 'Cơ thể chúng mình', icon: '👀', vocab: 'eye, nose, ear, mouth, hand, touch', sentencePattern: 'Touch your nose! / This is my eye. / These are my ears.', phonics: 'Âm /e/ và /aʊ/' }),
  buildPrimaryUnit(3, { unitNumber: 5, unitTitle: 'Unit 5: My hobbies', themeVi: 'Sở thích của em', icon: '🎨', vocab: 'singing, dancing, drawing, swimming, cooking', sentencePattern: 'What is your hobby? - I like singing and dancing.', phonics: 'Đuôi -ing' }),
  buildPrimaryUnit(3, { unitNumber: 6, unitTitle: 'Unit 6: Our school', themeVi: 'Ngôi trường của em', icon: '🏫', vocab: 'school, classroom, library, playground, gym', sentencePattern: 'Is this our school? - Yes, it is. / Let us go to the library.', phonics: 'Âm /sk/ và /kl/' }),
  buildPrimaryUnit(3, { unitNumber: 7, unitTitle: 'Unit 7: Classroom instructions', themeVi: 'Hiệu lệnh trong lớp', icon: '📢', vocab: 'stand up, sit down, open, close, ask, come in', sentencePattern: 'May I come in, teacher? - Yes, you can. / Open your book, please.', phonics: 'Âm /st/ và /s/' }),
  buildPrimaryUnit(3, { unitNumber: 8, unitTitle: 'Unit 8: My school things', themeVi: 'Đồ dùng học tập', icon: '📏', vocab: 'pen, pencil, ruler, eraser, pencil case', sentencePattern: 'I have a pen. / Do you have a ruler? - Yes, I do.', phonics: 'Âm /p/ và /r/' }),
  buildPrimaryUnit(3, { unitNumber: 9, unitTitle: 'Unit 9: Colours', themeVi: 'Màu sắc quanh em', icon: '🎨', vocab: 'red, blue, yellow, green, black, white, brown', sentencePattern: 'What colour is this pen? - It is blue. / They are green.', phonics: 'Âm /bl/ và /br/' }),
  buildPrimaryUnit(3, { unitNumber: 10, unitTitle: 'Unit 10: Break time activities', themeVi: 'Giờ ra chơi', icon: '🏃', vocab: 'football, basketball, chess, table tennis, skipping', sentencePattern: 'What do you do at break time? - I play football.', phonics: 'Âm /f/ và /sk/' }),
  buildPrimaryUnit(3, { unitNumber: 11, unitTitle: 'Unit 11: My family', themeVi: 'Gia đình yêu thương', icon: '👨‍👩‍👧‍👦', vocab: 'father, mother, brother, sister, grandfather, grandmother', sentencePattern: 'Who is that? - That is my mother. She is thirty-five years old.', phonics: 'Âm /f/ và /m/' }),
  buildPrimaryUnit(3, { unitNumber: 12, unitTitle: 'Unit 12: My house', themeVi: 'Ngôi nhà của em', icon: '🏡', vocab: 'living room, bedroom, kitchen, bathroom, hall, garden', sentencePattern: 'Where is the living room? - It is here. / Is there a garden? - Yes, there is.', phonics: 'Âm /h/ và /l/' }),
  buildPrimaryUnit(3, { unitNumber: 13, unitTitle: 'Unit 13: My room', themeVi: 'Căn phòng của em', icon: '🛏️', vocab: 'bed, lamp, fan, door, window, desk, chair', sentencePattern: 'Where is my bag? - It is on the bed. / In, on, under, behind.', phonics: 'Giới từ in, on, under' }),
  buildPrimaryUnit(3, { unitNumber: 14, unitTitle: 'Unit 14: My toys', themeVi: 'Đồ chơi yêu thích', icon: '🧸', vocab: 'car, doll, train, plane, robot, teddy bear', sentencePattern: 'What toy do you have? - I have a red car and two trains.', phonics: 'Số nhiều -s/-es' }),
  buildPrimaryUnit(3, { unitNumber: 15, unitTitle: 'Unit 15: My clothes', themeVi: 'Trang phục của em', icon: '👕', vocab: 'shirt, T-shirt, dress, skirt, trousers, shoes', sentencePattern: 'What are you wearing? - I am wearing a blue T-shirt and white shoes.', phonics: 'Âm /ʃ/ và /sk/' }),
  buildPrimaryUnit(3, { unitNumber: 16, unitTitle: 'Unit 16: My pets', themeVi: 'Thú cưng trong nhà', icon: '🐕', vocab: 'dog, cat, bird, rabbit, goldfish, parrot', sentencePattern: 'Do you have any pets? - Yes, I have a puppy and two birds.', phonics: 'Âm /d/ và /k/' }),
  buildPrimaryUnit(3, { unitNumber: 17, unitTitle: 'Unit 17: Our toys', themeVi: 'Đồ chơi của chúng mình', icon: '🚂', vocab: 'kite, ball, ship, truck, bus, how many', sentencePattern: 'How many kites do you have? - I have three kites.', phonics: 'Số đếm 1-20' }),
  buildPrimaryUnit(3, { unitNumber: 18, unitTitle: 'Unit 18: Playing sports', themeVi: 'Chơi thể thao', icon: '🏸', vocab: 'badminton, volleyball, swimming, running, tennis', sentencePattern: 'Can you play badminton? - Yes, I can. / No, I cannot.', phonics: 'Can và Can\'t' }),
  buildPrimaryUnit(3, { unitNumber: 19, unitTitle: 'Unit 19: Outdoor activities', themeVi: 'Hoạt động ngoài trời', icon: '🪁', vocab: 'cycling, flying kites, skating, walking, in the park', sentencePattern: 'What is she doing? - She is cycling in the park.', phonics: 'Thì Hiện tại tiếp diễn' }),
  buildPrimaryUnit(3, { unitNumber: 20, unitTitle: 'Unit 20: At the zoo', themeVi: 'Tham quan sở thú', icon: '🐘', vocab: 'tiger, elephant, monkey, bear, big, small, fast', sentencePattern: 'Look at the elephant! It is very big. / What animal do you like?', phonics: 'Tính từ miêu tả con vật' })
];

// ==========================================
// TIỂU HỌC: LỚP 4 (20 UNITS)
// ==========================================
export const TEXTBOOK_GRADE_4_UNITS: TextbookUnit[] = [
  buildPrimaryUnit(4, { unitNumber: 1, unitTitle: 'Unit 1: My friends', themeVi: 'Những người bạn', icon: '🌏', vocab: 'Vietnam, England, America, Australia, nationality', sentencePattern: 'Where are you from? - I am from Vietnam. I am Vietnamese.', phonics: 'Tên quốc gia & quốc tịch' }),
  buildPrimaryUnit(4, { unitNumber: 2, unitTitle: 'Unit 2: Time and daily routines', themeVi: 'Thời gian & Sinh hoạt', icon: '⏰', vocab: 'o\'clock, half past, get up, have breakfast, go to bed', sentencePattern: 'What time is it? - It is seven o\'clock. / What time do you get up?', phonics: 'Giờ giấc' }),
  buildPrimaryUnit(4, { unitNumber: 3, unitTitle: 'Unit 3: My week', themeVi: 'Một tuần của em', icon: '📅', vocab: 'Monday, Tuesday, Wednesday, Thursday, Friday, weekend', sentencePattern: 'What day is it today? - It is Wednesday. / What do you do on Fridays?', phonics: 'Các ngày trong tuần' }),
  buildPrimaryUnit(4, { unitNumber: 4, unitTitle: 'Unit 4: My birthday party', themeVi: 'Tiệc sinh nhật', icon: '🎁', vocab: 'January, February, March, date, birthday, invitation', sentencePattern: 'When is your birthday? - It is in May. / It is on the fifth of May.', phonics: 'Tháng & Ngày thứ tự' }),
  buildPrimaryUnit(4, { unitNumber: 5, unitTitle: 'Unit 5: Things we can do', themeVi: 'Khả năng của chúng mình', icon: '🎸', vocab: 'swim, ride a bike, play the guitar, cook, skate', sentencePattern: 'Can you play the guitar? - Yes, I can. / No, but I can sing.', phonics: 'Can / Can\'t' }),
  buildPrimaryUnit(4, { unitNumber: 6, unitTitle: 'Unit 6: Our school facilities', themeVi: 'Cơ sở vật chất trường học', icon: '🏢', vocab: 'computer room, art room, music room, playground, floor', sentencePattern: 'Where is your school? - It is in the city. / Where is the music room?', phonics: 'Số thứ tự tầng' }),
  buildPrimaryUnit(4, { unitNumber: 7, unitTitle: 'Unit 7: Our timetables', themeVi: 'Thời khóa biểu', icon: '📚', vocab: 'English, Maths, Science, Art, Music, PE, IT', sentencePattern: 'What subjects do you have today? - I have Maths, Science and English.', phonics: 'Tên môn học' }),
  buildPrimaryUnit(4, { unitNumber: 8, unitTitle: 'Unit 8: My favourite subjects', themeVi: 'Môn học em yêu thích', icon: '⭐', vocab: 'favourite, subject, because, sing, draw, numbers', sentencePattern: 'What is your favourite subject? - It is English because I like singing songs.', phonics: 'Liên từ because' }),
  buildPrimaryUnit(4, { unitNumber: 9, unitTitle: 'Unit 9: Our sports day', themeVi: 'Ngày hội thể thao', icon: '🏆', vocab: 'sports day, table tennis, relay race, tug of war, medal', sentencePattern: 'When will Sports Day be? - It will be on Saturday.', phonics: 'Thì tương lai với will' }),
  buildPrimaryUnit(4, { unitNumber: 10, unitTitle: 'Unit 10: Where were you yesterday?', themeVi: 'Hôm qua bạn ở đâu?', icon: '⏮️', vocab: 'yesterday, at home, at school, on the beach, in the zoo', sentencePattern: 'Where were you yesterday? - I was at home. / What did you do? - I watered the flowers.', phonics: 'Was / Were (Quá khứ)' }),
  buildPrimaryUnit(4, { unitNumber: 11, unitTitle: 'Unit 11: My home', themeVi: 'Tổ ấm gia đình', icon: '🏡', vocab: 'flat, cottage, street, lane, avenue, address', sentencePattern: 'What is your address? - It is 105 Hoa Binh Lane. / Where do you live?', phonics: 'Từ chỉ địa chỉ' }),
  buildPrimaryUnit(4, { unitNumber: 12, unitTitle: 'Unit 12: Jobs', themeVi: 'Nghề nghiệp', icon: '👨‍⚕️', vocab: 'doctor, nurse, teacher, driver, farmer, worker', sentencePattern: 'What does your father do? - He is a doctor. He works in a hospital.', phonics: 'Nghề nghiệp & Nơi làm việc' }),
  buildPrimaryUnit(4, { unitNumber: 13, unitTitle: 'Unit 13: Appearance', themeVi: 'Ngoại hình & Tính cách', icon: '🧍', vocab: 'tall, short, slim, strong, friendly, hard-working', sentencePattern: 'What does he look like? - He is tall and slim. / Who is taller?', phonics: 'So sánh hơn tính từ ngắn' }),
  buildPrimaryUnit(4, { unitNumber: 14, unitTitle: 'Unit 14: Daily activities', themeVi: 'Hoạt động thường nhật', icon: '🚴', vocab: 'always, usually, often, sometimes, do morning exercise', sentencePattern: 'What do you usually do after school? - I often play badminton.', phonics: 'Trạng từ tần suất' }),
  buildPrimaryUnit(4, { unitNumber: 15, unitTitle: 'Unit 15: My favourite food and drink', themeVi: 'Món ăn & Đồ uống', icon: '🍜', vocab: 'beef, chicken, fish, orange juice, water, lemonade', sentencePattern: 'What is your favourite food? - It is chicken. / What would you like to drink?', phonics: 'Would you like...?' }),
  buildPrimaryUnit(4, { unitNumber: 16, unitTitle: 'Unit 16: Weather', themeVi: 'Thời tiết hôm nay', icon: '☀️', vocab: 'sunny, rainy, windy, cloudy, snowy, cold, hot', sentencePattern: 'What is the weather like today? - It is sunny and warm.', phonics: 'Tính từ chỉ thời tiết' }),
  buildPrimaryUnit(4, { unitNumber: 17, unitTitle: 'Unit 17: In the city', themeVi: 'Khám phá thành phố', icon: '🏙️', vocab: 'bakery, pharmacy, bookshop, cinema, supermarket', sentencePattern: 'Where are you going? - I am going to the bookshop to buy some pens.', phonics: 'To-infinitive chỉ mục đích' }),
  buildPrimaryUnit(4, { unitNumber: 18, unitTitle: 'Unit 18: At the shopping centre', themeVi: 'Đi mua sắm', icon: '🛒', vocab: 'T-shirt, jacket, jeans, skirt, price, how much', sentencePattern: 'How much is this jacket? - It is two hundred thousand dong.', phonics: 'Hỏi giá tiền How much' }),
  buildPrimaryUnit(4, { unitNumber: 19, unitTitle: 'Unit 19: Animals', themeVi: 'Thế giới động vật', icon: '🐒', vocab: 'kangaroo, crocodile, giraffe, monkey, roar, climb', sentencePattern: 'Why do you like monkeys? - Because they are funny and clever.', phonics: 'Hỏi lý do Why - Because' }),
  buildPrimaryUnit(4, { unitNumber: 20, unitTitle: 'Unit 20: At summer camp', themeVi: 'Tham gia trại hè', icon: '🏕️', vocab: 'summer camp, build a campfire, tell stories, tent', sentencePattern: 'What are you going to do this summer? - I am going to join a summer camp.', phonics: 'Be going to tương lai' })
];

// ==========================================
// TIỂU HỌC: LỚP 5 (20 UNITS)
// ==========================================
export const TEXTBOOK_GRADE_5_UNITS: TextbookUnit[] = [
  buildPrimaryUnit(5, { unitNumber: 1, unitTitle: 'Unit 1: All about me', themeVi: 'Bản thân em', icon: '🙋', vocab: 'address, hometown, peaceful, crowded, hometown', sentencePattern: 'Where do you live? - I live in a quiet village. / What is your hometown like?', phonics: 'Từ vựng nơi chốn' }),
  buildPrimaryUnit(5, { unitNumber: 2, unitTitle: 'Unit 2: Our homes', themeVi: 'Nhà ở & Sinh hoạt', icon: '🏡', vocab: 'routine, always, usually, once a week, twice a month', sentencePattern: 'How often do you study with a partner? - I study with him twice a week.', phonics: 'Hỏi tần suất How often' }),
  buildPrimaryUnit(5, { unitNumber: 3, unitTitle: 'Unit 3: My foreign friends', themeVi: 'Những người bạn quốc tế', icon: '🤝', vocab: 'Malaysia, Japan, America, Australia, speak English', sentencePattern: 'Where did you go on holiday? - I went to Ha Long Bay by coach.', phonics: 'Thì Quá khứ đơn' }),
  buildPrimaryUnit(5, { unitNumber: 4, unitTitle: 'Unit 4: Our free-time activities', themeVi: 'Hoạt động lúc rảnh rỗi', icon: '🛹', vocab: 'surf the internet, go camping, karate, clean the house', sentencePattern: 'What do you do in your free time? - I often surf the Internet and read books.', phonics: 'Hiện tại đơn' }),
  buildPrimaryUnit(5, { unitNumber: 5, unitTitle: 'Unit 5: My future job', themeVi: 'Nghề nghiệp tương lai', icon: '👨‍✈️', vocab: 'pilot, architect, writer, astronaut, look after patients', sentencePattern: 'What would you like to be in the future? - I would like to be a pilot.', phonics: 'Would like to be' }),
  buildPrimaryUnit(5, { unitNumber: 6, unitTitle: 'Unit 6: Our school rooms', themeVi: 'Các phòng ban trường học', icon: '🏫', vocab: 'gym, laboratory, language lab, school yard, ground floor', sentencePattern: 'How many lessons do you have today? - I have four lessons.', phonics: 'Số lượng bài học' }),
  buildPrimaryUnit(5, { unitNumber: 7, unitTitle: 'Unit 7: School activities', themeVi: 'Hoạt động trường học', icon: '🎨', vocab: 'practice, speak, listen, write, read comics, foreign languages', sentencePattern: 'How do you practice speaking English? - I speak English with foreign friends.', phonics: 'Cách học tiếng Anh' }),
  buildPrimaryUnit(5, { unitNumber: 8, unitTitle: 'Unit 8: Our school subjects', themeVi: 'Môn học em yêu thích', icon: '📖', vocab: 'story, character, kind, brave, fairy tale, Aladdin', sentencePattern: 'What are you reading? - I am reading The Story of Tam and Cam.', phonics: 'Tính cách nhân vật truyện' }),
  buildPrimaryUnit(5, { unitNumber: 9, unitTitle: 'Unit 9: Our teachers\' day', themeVi: 'Ngày Nhà giáo Việt Nam', icon: '💐', vocab: 'Teachers\' Day, song festival, flowers, stage, celebrate', sentencePattern: 'What will you do on Teachers\' Day? - We will give flowers and sing songs.', phonics: 'Thì tương lai với will' }),
  buildPrimaryUnit(5, { unitNumber: 10, unitTitle: 'Unit 10: Our school trips', themeVi: 'Chuyến dã ngoại trường em', icon: '🚌', vocab: 'trip, zoo, museum, dinosaur, explore, had fun', sentencePattern: 'What did you see at the zoo? - I saw baby elephants and tigers.', phonics: 'Động từ bất quy tắc saw, went' }),
  buildPrimaryUnit(5, { unitNumber: 11, unitTitle: 'Unit 11: Health problems', themeVi: 'Vấn đề sức khỏe', icon: '🩺', vocab: 'headache, toothache, stomach ache, fever, sore throat', sentencePattern: 'What is the matter with you? - I have a bad toothache. You should see a dentist.', phonics: 'Should / Shouldn\'t' }),
  buildPrimaryUnit(5, { unitNumber: 12, unitTitle: 'Unit 12: Preventing accidents', themeVi: 'Phòng tránh tai nạn tại nhà', icon: '⚠️', vocab: 'knife, stove, stairs, burn, fall off your bike, cut', sentencePattern: 'Don\'t play with matches! - OK, I won\'t. / Why shouldn\'t I run down the stairs?', phonics: 'Câu mệnh lệnh Don\'t...' }),
  buildPrimaryUnit(5, { unitNumber: 13, unitTitle: 'Unit 13: Free time stories', themeVi: 'Truyện đọc lúc rảnh rỗi', icon: '🦊', vocab: 'fox, crow, clever, piece of meat, fable, moral', sentencePattern: 'What happened in the story? - First, the fox saw the crow with meat...', phonics: 'Trạng từ kể chuyện First, Then' }),
  buildPrimaryUnit(5, { unitNumber: 14, unitTitle: 'Unit 14: What would you like to eat?', themeVi: 'Em muốn ăn món gì?', icon: '🍲', vocab: 'bowl of noodles, glass of milk, bottle of water, packet', sentencePattern: 'What would you like to eat? - I would like a bowl of beef noodles, please.', phonics: 'Lượng từ a bowl of, a glass of' }),
  buildPrimaryUnit(5, { unitNumber: 15, unitTitle: 'Unit 15: What would you like to be?', themeVi: 'Ước mơ tương lai', icon: '🚀', vocab: 'nurse, engineer, footballer, fly planes, design houses', sentencePattern: 'Why would you like to be an architect? - Because I want to design modern buildings.', phonics: 'Lý do chọn nghề nghiệp' }),
  buildPrimaryUnit(5, { unitNumber: 16, unitTitle: 'Unit 16: Weather and seasons', themeVi: 'Thời tiết bốn mùa', icon: '🍁', vocab: 'spring, summer, autumn, winter, dry, humid, warm', sentencePattern: 'What is winter like in your country? - It is usually very cold and dry.', phonics: 'Miêu tả mùa' }),
  buildPrimaryUnit(5, { unitNumber: 17, unitTitle: 'Unit 17: Places of interest', themeVi: 'Danh lam thắng cảnh', icon: '🏯', vocab: 'pagoda, bridge, museum, temple, historical, attractive', sentencePattern: 'How can I get to Hoan Kiem Lake? - You can take bus number 09.', phonics: 'Hỏi đường và phương tiện' }),
  buildPrimaryUnit(5, { unitNumber: 18, unitTitle: 'Unit 18: Means of transport', themeVi: 'Phương tiện giao thông', icon: '🚆', vocab: 'motorbike, underground, boat, coach, train, plane', sentencePattern: 'How did you get there? - I went by express train. It was very fast.', phonics: 'Giới từ đi với phương tiện By' }),
  buildPrimaryUnit(5, { unitNumber: 19, unitTitle: 'Unit 19: Which place to visit?', themeVi: 'Em muốn đi thăm nơi nào?', icon: '🗺️', vocab: 'Phu Quoc Island, Ba Na Hills, Trang An, exciting, more attractive', sentencePattern: 'Which place would you like to visit, Dam Sen Park or Suoi Tien Theme Park?', phonics: 'So sánh lựa chọn' }),
  buildPrimaryUnit(5, { unitNumber: 20, unitTitle: 'Unit 20: Life in the future', themeVi: 'Cuộc sống trong tương lai', icon: '🛸', vocab: 'space, underwater, robot assistant, solar power, high-tech', sentencePattern: 'Where will you live in the future? - I think I will live in a modern smart house.', phonics: 'Tương lai với Will' })
];
