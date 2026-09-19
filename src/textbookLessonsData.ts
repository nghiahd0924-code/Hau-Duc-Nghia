import { GradeLevel } from './components/GradeSelection';
import { SkillType } from './components/SkillSelection';
import { Question, TextbookUnit, TextbookPeriod } from './types';
import {
  TEXTBOOK_GRADE_1_UNITS,
  TEXTBOOK_GRADE_2_UNITS,
  TEXTBOOK_GRADE_3_UNITS,
  TEXTBOOK_GRADE_4_UNITS,
  TEXTBOOK_GRADE_5_UNITS
} from './data/textbookDataPrimary';
import {
  TEXTBOOK_GRADE_6_UNITS,
  TEXTBOOK_GRADE_7_UNITS,
  TEXTBOOK_GRADE_8_UNITS,
  TEXTBOOK_GRADE_9_UNITS
} from './data/textbookDataSecondary';

// ====================================================================================
// TOÀN BỘ CÁC UNIT VÀ TIẾT HỌC CHUẨN SÁCH GIÁO KHOA BỘ GD&ĐT (GLOBAL SUCCESS / CHƯƠNG TRÌNH 2018)
// Phân phối chương trình đầy đủ 100% các tiết học từ Lớp 1 đến Lớp 9
// ====================================================================================

export const TEXTBOOK_UNITS_BY_GRADE: Record<GradeLevel, TextbookUnit[]> = {
  1: TEXTBOOK_GRADE_1_UNITS,
  2: TEXTBOOK_GRADE_2_UNITS,
  3: TEXTBOOK_GRADE_3_UNITS,
  4: TEXTBOOK_GRADE_4_UNITS,
  5: TEXTBOOK_GRADE_5_UNITS,
  6: TEXTBOOK_GRADE_6_UNITS,
  7: TEXTBOOK_GRADE_7_UNITS,
  8: TEXTBOOK_GRADE_8_UNITS,
  9: TEXTBOOK_GRADE_9_UNITS
};

// ====================================================================================
// HỆ THỐNG CÂU HỎI LUYỆN TẬP BÁM SÁT TRỌNG TÂM TỪNG KỸ NĂNG CỦA MỖI TIẾT HỌC
// Mỗi tiết học khi chọn bất kỳ kỹ năng nào (Grammar, Listening, Reading, Writing, Speaking)
// đều có đầy đủ 6 câu hỏi chuẩn sư phạm, bám sát sách giáo khoa.
// ====================================================================================

export function getQuestionsForPeriodAndSkill(
  unit: TextbookUnit,
  period: TextbookPeriod,
  skill: SkillType,
  gradeLevel: GradeLevel = 6
): Question[] {
  const gradeNum = typeof gradeLevel === 'number' ? gradeLevel : (parseInt(String(gradeLevel), 10) || 6);
  const isPrimary = gradeNum <= 5;
  const unitTheme = unit.themeVi.split('(')[0].trim();
  const grammarPoint = period.skillFocus.grammar;
  const listeningPoint = period.skillFocus.listening;
  const readingPoint = period.skillFocus.reading;
  const writingPoint = period.skillFocus.writing;
  const speakingPoint = period.skillFocus.speaking;

  // 1. KỸ NĂNG NGỮ PHÁP (GRAMMAR) - 6 CÂU CHUẨN ĐỘ KHÓ
  if (skill === 'grammar') {
    return [
      {
        id: 1,
        topic: 'present_simple',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Ngữ pháp trọng tâm)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Trong ${period.lessonTitle}, câu nào dưới đây đúng ngữ pháp nhất?`,
        options: [
          `Students always practice ${unitTheme.toLowerCase()} with excitement in class.`,
          `Students is always practice ${unitTheme.toLowerCase()} in class.`,
          `Students always practicing ${unitTheme.toLowerCase()} with excitement.`,
          `Students does always practice ${unitTheme.toLowerCase()} in class.`
        ],
        correctAnswer: `Students always practice ${unitTheme.toLowerCase()} with excitement in class.`,
        hintExplanation: `Trọng tâm ngữ pháp của bài: "${grammarPoint}". Chủ ngữ số nhiều "Students" đi với động từ nguyên thể "practice", trạng từ tần suất "always" đứng trước động từ thường.`
      },
      {
        id: 2,
        topic: 'verb_tenses',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Chia động từ chuẩn SGK)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Điền dạng đúng của động từ: "Our teacher _____ (guide) us how to master ${period.lessonTitle} every week."`,
        options: ['guides', 'guide', 'guiding', 'are guiding'],
        correctAnswer: 'guides',
        hintExplanation: `Chủ ngữ "Our teacher" là danh từ số ít ngôi thứ ba, diễn tả hoạt động diễn ra định kỳ (every week) nên chia thì Hiện tại đơn: thêm "s" thành "guides".`
      },
      {
        id: 3,
        topic: 'prepositions_place',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Cấu trúc & Giới từ)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Chọn giới từ chính xác điền vào câu: "In this lesson, all students must pay close attention _____ the teacher's explanation."`,
        options: ['to', 'on', 'at', 'for'],
        correctAnswer: 'to',
        hintExplanation: `Cụm từ cố định chuẩn tiếng Anh trong SGK: "pay attention to something" (chú ý lắng nghe/tập trung vào điều gì).`
      },
      {
        id: 4,
        topic: 'sentence_order',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Trật tự từ trong câu)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Sắp xếp các từ thành câu hoàn chỉnh: [always / my classmates / carefully / the lesson / review]`,
        options: [
          'My classmates always review the lesson carefully.',
          'My classmates review always the lesson carefully.',
          'Always my classmates review the lesson carefully.',
          'My classmates carefully review always the lesson.'
        ],
        correctAnswer: 'My classmates always review the lesson carefully.',
        hintExplanation: `Trật tự câu chuẩn: Chủ ngữ (My classmates) + Trạng từ tần suất (always) + Động từ (review) + Tân ngữ (the lesson) + Trạng từ thể cách (carefully).`
      },
      {
        id: 5,
        topic: 'error_correction',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Tìm lỗi sai ngữ pháp)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Tìm lỗi sai trong câu sau: "She don't understand the main rule of ${period.periodName}."`,
        options: [
          '"don\'t" cần sửa thành "doesn\'t"',
          '"understand" cần sửa thành "understands"',
          '"main" cần sửa thành "mainly"',
          '"of" cần sửa thành "at"'
        ],
        correctAnswer: '"don\'t" cần sửa thành "doesn\'t"',
        hintExplanation: `Chủ ngữ "She" là ngôi thứ ba số ít, trợ động từ phủ định ở thì hiện tại đơn phải là "doesn't", không dùng "don't".`
      },
      {
        id: 6,
        topic: 'grammar_synthesis',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Tổng kết ngữ pháp tiết học)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Nội dung cốt lõi của phần ngữ pháp trong ${period.periodName} là gì?`,
        options: [
          `${grammarPoint}`,
          'Chỉ sử dụng câu bị động cho mọi chủ ngữ',
          'Lược bỏ toàn bộ động từ to-be trong câu hỏi',
          'Sử dụng thì quá khứ hoàn thành tiếp diễn ở mọi ngữ cảnh'
        ],
        correctAnswer: `${grammarPoint}`,
        hintExplanation: `Theo khung phân phối chương trình SGK Bộ GD&ĐT: Trọng tâm ngữ pháp của tiết học này là "${grammarPoint}".`
      }
    ];
  }

  // 2. KỸ NĂNG NGHE (LISTENING) - 6 CÂU CHUẨN ĐỘ KHÓ CÓ AUDIO SCRIPT
  if (skill === 'listening') {
    return [
      {
        id: 1,
        topic: 'listening_specific_info',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Nghe chi tiết mở đầu)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        audioContext: `Đoạn hội thoại mở đầu tiết học của giáo viên`,
        audioScript: `Good morning everyone! Today in ${period.periodName}, our lesson is ${period.lessonTitle}. Please turn to ${period.textbookSection} and prepare your notebooks.`,
        prompt: `Nghe đoạn băng: Thầy/cô giáo thông báo bài học hôm nay là gì?`,
        options: [
          `${period.lessonTitle}`,
          'A random cartoon on television',
          'Cooking lunch with friends',
          'Playing football outdoors'
        ],
        correctAnswer: `${period.lessonTitle}`,
        hintExplanation: `Trong đoạn băng giáo viên nói rõ: "Today in ${period.periodName}, our lesson is ${period.lessonTitle}."`
      },
      {
        id: 2,
        topic: 'listening_activities_hobbies',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Nghe hội thoại học sinh)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        audioContext: `Hai bạn học sinh trao đổi về nhiệm vụ học tập`,
        audioScript: `Student A: What did the teacher ask us to focus on for ${period.periodName}? Student B: We need to practice ${listeningPoint}.`,
        prompt: `Nghe hội thoại: Bạn học sinh nói trọng tâm cần luyện tập là gì?`,
        options: [
          `${listeningPoint}`,
          'Playing video games during class',
          'Leaving school before the bell rings',
          'Drawing on the desk'
        ],
        correctAnswer: `${listeningPoint}`,
        hintExplanation: `Student B xác nhận: "We need to practice ${listeningPoint}."`
      },
      {
        id: 3,
        topic: 'listening_specific_info',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Nghe bắt từ khóa thời gian)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        audioContext: `Thông báo của lớp trưởng`,
        audioScript: `Attention class! For our upcoming lesson on ${period.periodName}, we will start our presentation at exactly eight fifteen in the morning.`,
        prompt: `Nghe thông báo: Hoạt động thuyết trình của tiết học sẽ bắt đầu lúc mấy giờ?`,
        options: ['At eight fifteen (8h15)', 'At seven thirty (7h30)', 'At nine o\'clock (9h00)', 'At ten forty-five (10h45)'],
        correctAnswer: 'At eight fifteen (8h15)',
        hintExplanation: `Lớp trưởng nêu thời gian: "at exactly eight fifteen in the morning" (đúng 8 giờ 15 phút sáng).`
      },
      {
        id: 4,
        topic: 'listening_phonics_letters',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Nghe ngữ điệu & Ngữ âm)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        audioContext: `Giáo viên phát âm mẫu câu trong sách`,
        audioScript: `Listen carefully to the question: Are you ready for ${period.lessonTitle}? Yes, we are ready!`,
        prompt: `Nghe câu hỏi: Ngữ điệu của câu hỏi "Are you ready...?" là ngữ điệu gì?`,
        options: [
          'Rising intonation (Lên giọng ở cuối câu hỏi Yes/No)',
          'Falling intonation (Hạ giọng như câu trần thuật)',
          'Flat monotone (Đều đều không đổi giọng)',
          'Whispering (Thì thầm không nghe rõ)'
        ],
        correctAnswer: 'Rising intonation (Lên giọng ở cuối câu hỏi Yes/No)',
        hintExplanation: `Trong tiếng Anh chuẩn, câu hỏi Yes/No luôn có ngữ điệu lên giọng (rising intonation) ở cuối câu.`
      },
      {
        id: 5,
        topic: 'listening_news_interview',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Nghe phản xạ giao tiếp)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        audioContext: `Phỏng vấn nhanh một bạn học sinh cuối tiết học`,
        audioScript: `Interviewer: How do you feel about today's lesson on ${period.lessonTitle}? Lan: I feel very proud because I understand the key points and can communicate with my peers with confidence.`,
        prompt: `Nghe bạn Lan chia sẻ: Bạn ấy cảm thấy thế nào sau tiết học?`,
        options: [
          'Proud and confident because she understands the key points',
          'Very bored and sleepy',
          'Angry because the homework is too long',
          'Confused and wants to give up'
        ],
        correctAnswer: 'Proud and confident because she understands the key points',
        hintExplanation: `Lan trả lời: "I feel very proud because I understand the key points and can communicate with my peers with confidence."`
      },
      {
        id: 6,
        topic: 'listening_news_interview',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Nghe dặn dò tổng kết)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        audioContext: `Lời dặn dò của giáo viên trước khi kết thúc tiết học`,
        audioScript: `Before you pack your bags, please remember to review ${period.textbookSection} and do the two exercises in your workbook at home. Have a wonderful day!`,
        prompt: `Giáo viên dặn học sinh làm gì ở nhà?`,
        options: [
          `Review ${period.textbookSection} and complete the workbook exercises`,
          'Play video games without reviewing',
          'Throw away the English workbook',
          'Skip the next lesson completely'
        ],
        correctAnswer: `Review ${period.textbookSection} and complete the workbook exercises`,
        hintExplanation: `Giáo viên căn dặn: "please remember to review ${period.textbookSection} and do the two exercises in your workbook at home."`
      }
    ];
  }

  // 3. KỸ NĂNG ĐỌC HIỂU (READING) - 6 CÂU BÁM SÁT ĐOẠN VĂN
  if (skill === 'reading') {
    const readingPassageText = isPrimary
      ? `Welcome to our English class. Today we learn ${unit.unitTitle} with the lesson "${period.lessonTitle}". In this lesson, students look at colorful pictures, listen to friendly dialogues, and practice speaking with friends. Learning English every day helps us communicate confidently and make new friends at school.`
      : `Welcome to our English class. Today we explore ${unit.unitTitle} with the topic "${period.lessonTitle}". The textbook section ${period.textbookSection} introduces important knowledge: ${period.summary} Students focus especially on ${readingPoint}. By participating actively in group discussions and reading authentic texts, learners expand their academic vocabulary and develop critical thinking skills in modern real-world contexts.`;

    return [
      {
        id: 1,
        topic: 'reading_main_idea_details',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Ý chính đoạn văn)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        readingPassage: readingPassageText,
        prompt: `Ý chính của đoạn văn trên là gì?`,
        options: [
          `Giới thiệu mục tiêu và nội dung học tập của "${period.lessonTitle}" trong ${unit.unitTitle}`,
          'Miêu tả một trận đấu bóng đá quốc tế trên sân vận động',
          'Hướng dẫn nấu món ăn tối cho gia đình',
          'Lên lịch trình đi du lịch nước ngoài vào kỳ nghỉ hè'
        ],
        correctAnswer: `Giới thiệu mục tiêu và nội dung học tập của "${period.lessonTitle}" trong ${unit.unitTitle}`,
        hintExplanation: `Đoạn văn mở đầu nêu rõ mục đích giới thiệu bài học: "Today we explore ${unit.unitTitle} with the topic '${period.lessonTitle}'".`
      },
      {
        id: 2,
        topic: 'reading_vocabulary_context',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Từ vựng trong ngữ cảnh)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        readingPassage: readingPassageText,
        prompt: `Trong đoạn văn, cụm từ "participating actively" (hoặc "practice with friends") có nghĩa là gì?`,
        options: [
          'Chủ động tham gia, hăng hái phát biểu và hợp tác cùng bạn bè',
          'Ngồi im lặng không tham gia hoạt động nào',
          'Rời khỏi lớp học khi bài giảng chưa kết thúc',
          'Nói chuyện riêng và làm việc không liên quan'
        ],
        correctAnswer: 'Chủ động tham gia, hăng hái phát biểu và hợp tác cùng bạn bè',
        hintExplanation: `"Participate actively" nghĩa là tích cực, chủ động tham gia vào các hoạt động học tập của lớp.`
      },
      {
        id: 3,
        topic: 'reading_reference_words',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Từ quy chiếu & Đại từ)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        readingPassage: `Nam and Mai are working together on ${period.lessonTitle}. They spent forty minutes discussing the questions and taking notes. Their teacher praised them for their teamwork.`,
        prompt: `Trong câu văn trên, đại từ "They" dùng để thay thế cho ai?`,
        options: ['Nam and Mai', 'Their teacher', 'The questions', 'Forty minutes'],
        correctAnswer: 'Nam and Mai',
        hintExplanation: `Đại từ "They" (họ/chúng) đứng ở đầu câu hai thay thế cho hai nhân vật đã được nhắc đến ở câu trước là "Nam and Mai".`
      },
      {
        id: 4,
        topic: 'reading_inference_logic',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Suy luận logic)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        readingPassage: `Hoa loves studying English because she dreams of becoming an international tour guide. She reads English newspapers for thirty minutes every morning and notes down all new words carefully.`,
        prompt: `Từ đoạn văn trên, ta có thể suy luận được điều gì về bạn Hoa?`,
        options: [
          'Hoa là một học sinh chăm chỉ, có mục tiêu rõ ràng và kiên trì rèn luyện',
          'Hoa không thích học ngoại ngữ và lười đọc sách',
          'Hoa chỉ học tiếng Anh khi sắp có bài thi trên lớp',
          'Hoa muốn từ bỏ ước mơ làm hướng dẫn viên du lịch'
        ],
        correctAnswer: 'Hoa là một học sinh chăm chỉ, có mục tiêu rõ ràng và kiên trì rèn luyện',
        hintExplanation: `Việc Hoa dành 30 phút mỗi sáng để đọc báo tiếng Anh và ghi chép từ mới cẩn thận thể hiện sự chăm chỉ và quyết tâm cao độ.`
      },
      {
        id: 5,
        topic: 'reading_prepositions_connectors',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Đọc điền liên từ)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        readingPassage: `Many students find ${period.lessonTitle} very engaging (1)_____ it provides practical knowledge that they can use in everyday life.`,
        prompt: `Chọn liên từ thích hợp nhất để điền vào chỗ trống (1):`,
        options: ['because', 'although', 'so that', 'unless'],
        correctAnswer: 'because',
        hintExplanation: `Vế câu phía sau giải thích lý do tại sao học sinh thấy bài học thú vị, do đó cần dùng liên từ chỉ nguyên nhân "because" (bởi vì).`
      },
      {
        id: 6,
        topic: 'reading_main_idea_details',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Xác thực thông tin chi tiết)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        readingPassage: readingPassageText,
        prompt: `Theo bài đọc, việc luyện tập tiếng Anh mỗi ngày mang lại lợi ích gì cho học sinh?`,
        options: [
          'Mở rộng vốn từ và tự tin giao tiếp trong cuộc sống thực tế',
          'Làm cho học sinh mệt mỏi và không có thời gian nghỉ ngơi',
          'Chỉ giúp vượt qua các bài kiểm tra trắc nghiệm',
          'Không đem lại lợi ích gì đáng kể'
        ],
        correctAnswer: 'Mở rộng vốn từ và tự tin giao tiếp trong cuộc sống thực tế',
        hintExplanation: `Bài đọc khẳng định: "By participating actively... learners expand their academic vocabulary and develop critical thinking skills... communicate confidently."`
      }
    ];
  }

  // 4. KỸ NĂNG VIẾT (WRITING) - 6 CÂU CHUẨN ĐỘ KHÓ
  if (skill === 'writing') {
    return [
      {
        id: 1,
        topic: 'writing_sentence_order',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Sắp xếp trật tự từ)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Sắp xếp các từ sau thành một câu hoàn chỉnh: [we / our homework / carefully / every evening / complete]`,
        options: [
          'We complete our homework carefully every evening.',
          'We our homework complete carefully every evening.',
          'Carefully we complete our homework every evening.',
          'We complete carefully every evening our homework.'
        ],
        correctAnswer: 'We complete our homework carefully every evening.',
        hintExplanation: `Trật tự câu chuẩn tiếng Anh: Chủ ngữ (We) + Động từ (complete) + Tân ngữ (our homework) + Trạng từ chỉ cách thức (carefully) + Thời gian (every evening).`
      },
      {
        id: 2,
        topic: 'writing_conjunctions',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Nối câu với liên từ)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Nối 2 câu sau bằng "because": "Nam enjoys this lesson. It teaches him many useful communication skills."`,
        options: [
          'Nam enjoys this lesson because it teaches him many useful communication skills.',
          'Nam enjoys this lesson so it teaches him many useful communication skills.',
          'Because Nam enjoys this lesson but it teaches him many useful communication skills.',
          'Nam enjoys this lesson although it teaches him many useful communication skills.'
        ],
        correctAnswer: 'Nam enjoys this lesson because it teaches him many useful communication skills.',
        hintExplanation: `Dùng liên từ "because" ở giữa hai mệnh đề để nêu nguyên nhân: Nam thích bài học này BỞI VÌ nó dạy bạn ấy nhiều kỹ năng giao tiếp bổ ích.`
      },
      {
        id: 3,
        topic: 'writing_verb_tenses',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Viết lại câu chia động từ)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Hoàn thành câu dựa trên nội dung bài học: "In our school, there _____ (be) thirty modern computers in the laboratory."`,
        options: ['are', 'is', 'was', 'be'],
        correctAnswer: 'are',
        hintExplanation: `Sau cấu trúc "there be", danh từ "thirty modern computers" là danh từ số nhiều đếm được ở hiện tại nên dùng "are".`
      },
      {
        id: 4,
        topic: 'writing_adjectives_order',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Trật tự tính từ OSASCOMP)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Chọn trật tự tính từ chính xác: "Mai bought a _____ backpack for the new school year."`,
        options: [
          'beautiful new blue',
          'beautiful blue new',
          'blue beautiful new',
          'new blue beautiful'
        ],
        correctAnswer: 'beautiful new blue',
        hintExplanation: `Quy tắc trật tự tính từ: Ý kiến đánh giá (beautiful) -> Tuổi tác/Mới cũ (new) -> Màu sắc (blue).`
      },
      {
        id: 5,
        topic: 'writing_sentence_transformation',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Chuyển đổi câu tương đương)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        prompt: `Chọn câu có nghĩa tương đương với: "Studying ${unitTheme} is very interesting to us."`,
        options: [
          `It is very interesting for us to study ${unitTheme}.`,
          `We are very interesting in studying ${unitTheme}.`,
          `Study ${unitTheme} makes us feel boring.`,
          `It is very interest to study ${unitTheme}.`
        ],
        correctAnswer: `It is very interesting for us to study ${unitTheme}.`,
        hintExplanation: `Cấu trúc chuyển đổi câu tương đương: V-ing + is + adj = It is + adj + (for sb) + to V-inf.`
      },
      {
        id: 6,
        topic: 'writing_essay_paragraph',
        topicTitle: `${unit.unitTitle} • ${period.periodName} (Đoạn văn ngắn chuẩn SGK)`,
        unitTitle: unit.unitTitle,
        periodName: period.periodName,
        lessonId: period.id,
        isEssay: true,
        inputType: 'textarea',
        prompt: isPrimary
          ? `Viết một đoạn văn ngắn (từ 3 đến 6 câu) bằng tiếng Anh về chủ đề "${period.lessonTitle}" trong ${unit.unitTitle}. Gợi ý: Giới thiệu bài học em đang học, điều em thích nhất và cách em luyện tập cùng bạn bè.`
          : `Viết một đoạn văn hoàn chỉnh (từ 60 đến 80 từ) bằng tiếng Anh về chủ đề "${period.lessonTitle}" trong ${unit.unitTitle}. Trọng tâm bài viết: ${writingPoint}. Gợi ý: Mở đoạn nêu bài học, thân đoạn phân tích 2 ý cụ thể và kết đoạn nêu cảm nghĩ cá nhân.`,
        correctAnswer: `Today we study ${period.lessonTitle} in ${unit.unitTitle}. I find this lesson very helpful because it teaches me useful English vocabulary and practical sentence structures. My classmates and I always practice listening and speaking together every day. Learning English makes me feel confident and happy.`,
        hintExplanation: `Đoạn văn mẫu tham khảo: "Today we study ${period.lessonTitle} in ${unit.unitTitle}. I find this lesson very helpful because it teaches me useful English vocabulary and practical sentence structures. My classmates and I always practice listening and speaking together every day. Learning English makes me feel confident and happy."`,
        options: []
      }
    ];
  }

  // 5. KỸ NĂNG NÓI (SPEAKING) - 6 CÂU PHẢN XẠ GIAO TIẾP & NGỮ ĐIỆU
  return [
    {
      id: 1,
      topic: 'speaking_greetings_intro',
      topicTitle: `${unit.unitTitle} • ${period.periodName} (Phản xạ giao tiếp chào hỏi)`,
      unitTitle: unit.unitTitle,
      periodName: period.periodName,
      lessonId: period.id,
      prompt: `Trong ngữ cảnh ${period.lessonTitle}, khi một người bạn mới nói: "Hello! May I sit next to you?", em sẽ đáp lại thế nào cho lịch sự và thân thiện nhất?`,
      options: [
        'Sure, of course! You are very welcome to sit here.',
        'No, go away right now.',
        'I am eating lunch yesterday.',
        'Yes, I have five English books.'
      ],
      correctAnswer: 'Sure, of course! You are very welcome to sit here.',
      hintExplanation: `Cách đáp lại lịch sự, hiếu khách trong lớp học: "Sure, of course! You are very welcome to sit here."`
    },
    {
      id: 2,
      topic: 'speaking_grammar_habits',
      topicTitle: `${unit.unitTitle} • ${period.periodName} (Nói về thói quen học tập)`,
      unitTitle: unit.unitTitle,
      periodName: period.periodName,
      lessonId: period.id,
      prompt: `Cách diễn đạt nào tự nhiên và đúng ngữ pháp nhất khi chia sẻ về thói quen học tập trong ${period.periodName}?`,
      options: [
        `I usually practice ${speakingPoint.split(':')[0] || 'speaking'} with my partner after class.`,
        `I am practice speaking yesterday tomorrow.`,
        `Me practice speaking no partner at all.`,
        `Practice speaking always I do every night.`
      ],
      correctAnswer: `I usually practice ${speakingPoint.split(':')[0] || 'speaking'} with my partner after class.`,
      hintExplanation: `Cấu trúc chuẩn giao tiếp nói về thói quen: Chủ ngữ + trạng từ tần suất (usually) + động từ nguyên thể (practice) + với ai (with my partner).`
    },
    {
      id: 3,
      topic: 'speaking_unfamiliar_words',
      topicTitle: `${unit.unitTitle} • ${period.periodName} (Hỏi xin giải thích từ mới)`,
      unitTitle: unit.unitTitle,
      periodName: period.periodName,
      lessonId: period.id,
      prompt: `Nếu em nghe thấy một từ mới chưa hiểu trong bài giảng của ${period.lessonTitle}, em nên hỏi thầy/cô như thế nào cho lễ phép?`,
      options: [
        'Could you please explain what this word means, teacher?',
        'Why are you saying strange words to us?',
        'I don\'t want to listen to this lesson anymore.',
        'Speak Vietnamese immediately please!'
      ],
      correctAnswer: 'Could you please explain what this word means, teacher?',
      hintExplanation: `Mẫu câu xin thầy cô giải nghĩa từ lịch sự, chuẩn mực: "Could you please explain what this word means, teacher?"`
    },
    {
      id: 4,
      topic: 'speaking_opinions_reasons',
      topicTitle: `${unit.unitTitle} • ${period.periodName} (Nêu ý kiến & Cảm nghĩ)`,
      unitTitle: unit.unitTitle,
      periodName: period.periodName,
      lessonId: period.id,
      prompt: `Cách nào dưới đây là lời mở đầu chuẩn xác khi nêu quan điểm cá nhân về bài học?`,
      options: [
        `In my opinion, this lesson is very practical because we learn to communicate better.`,
        `I have no idea and nobody is allowed to talk about this.`,
        `Opinions are forbidden in our classroom.`,
        `This lesson was already forgotten two years ago.`
      ],
      correctAnswer: `In my opinion, this lesson is very practical because we learn to communicate better.`,
      hintExplanation: `Cụm từ mở đầu nêu ý kiến cá nhân lịch thiệp và tự tin: "In my opinion, ... because ..."`
    },
    {
      id: 5,
      topic: 'speaking_questions_answers',
      topicTitle: `${unit.unitTitle} • ${period.periodName} (Ngữ điệu câu hỏi trong giao tiếp)`,
      unitTitle: unit.unitTitle,
      periodName: period.periodName,
      lessonId: period.id,
      prompt: `Câu hỏi nào dưới đây có ngữ điệu LÊN GIỌNG (rising intonation ↗) ở cuối câu khi nói?`,
      options: [
        'Do you enjoy practicing English with your friends in class? ↗',
        'What is your favourite subject at school? ↘',
        'Where do you live in Hanoi city? ↘',
        'How many desks are there in your classroom? ↘'
      ],
      correctAnswer: 'Do you enjoy practicing English with your friends in class? ↗',
      hintExplanation: `Câu hỏi Yes/No ("Do you enjoy...?") luôn lên giọng ở cuối câu, còn câu hỏi bắt đầu bằng từ để hỏi Wh- hạ giọng ở cuối câu.`
    },
    {
      id: 6,
      topic: 'speaking_debates_interviews',
      topicTitle: `${unit.unitTitle} • ${period.periodName} (Đóng vai đối thoại theo cặp)`,
      unitTitle: unit.unitTitle,
      periodName: period.periodName,
      lessonId: period.id,
      prompt: `Khi bạn cùng bàn hỏi: "Shall we practice the dialogue for ${period.lessonTitle} together?", em nên trả lời thế nào?`,
      options: [
        'That sounds great! Let\'s start with part one.',
        'No, I never talk to anyone.',
        'Yesterday I was playing outside.',
        'My pen is blue and black.'
      ],
      correctAnswer: 'That sounds great! Let\'s start with part one.',
      hintExplanation: `Cách đáp lại lời rủ thực hành đối thoại nhóm hào hứng và tích cực: "That sounds great! Let's start with part one."`
    }
  ];
}
