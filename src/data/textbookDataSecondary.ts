import { TextbookUnit, TextbookPeriod } from '../types';

interface SecondaryUnitDef {
  unitNumber: number;
  unitTitle: string;
  themeVi: string;
  icon: string;
  vocab: string;
  grammarFocus: string;
  readingTopic: string;
  listeningTopic: string;
  writingTopic: string;
  speakingTopic: string;
}

function buildSecondaryUnit(grade: number, def: SecondaryUnitDef): TextbookUnit {
  const uId = `g${grade}-u${def.unitNumber}`;

  const periods: TextbookPeriod[] = [
    {
      id: `${uId}-p1`,
      periodNumber: 1,
      periodName: 'Tiết 1: Getting Started',
      lessonTitle: `Khởi động & Làm quen: ${def.unitTitle}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang 6-7 (Getting Started)`,
      summary: `Giới thiệu ngữ cảnh và từ vựng mở đầu về chủ đề ${def.themeVi}. Học sinh nghe đọc đoạn hội thoại dẫn nhập.`,
      skillFocus: {
        grammar: `Cấu trúc câu giới thiệu cơ bản: ${def.grammarFocus}`,
        listening: `Luyện nghe đoạn hội thoại mở đầu bài học, bắt từ khóa về ${def.vocab}.`,
        reading: `Đọc hiểu hội thoại dẫn nhập, trả lời câu hỏi tìm ý chính và chi tiết.`,
        writing: `Viết lại các câu ngắn giới thiệu về bản thân hoặc hoàn cảnh theo mẫu bài học.`,
        speaking: `Thực hành đóng vai giao tiếp tự nhiên theo ngữ cảnh bài học mở đầu.`
      }
    },
    {
      id: `${uId}-p2`,
      periodNumber: 2,
      periodName: 'Tiết 2: A Closer Look 1',
      lessonTitle: `Vocabulary & Pronunciation: ${def.vocab}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang 8-9 (A Closer Look 1)`,
      summary: `Mở rộng trường từ vựng chuyên sâu về ${def.vocab} và rèn luyện ngữ âm, trọng âm, ngữ điệu chuẩn bản xứ.`,
      skillFocus: {
        grammar: `Phân loại danh từ, tính từ và động từ thuộc chủ đề ${def.vocab}.`,
        listening: `Nghe nhận diện phát âm, âm tiết và trọng âm của các từ vựng mới.`,
        reading: `Đọc nối từ với định nghĩa hoặc hình ảnh minh họa tương ứng.`,
        writing: `Điền từ vựng đúng chính tả vào chỗ trống trong câu hoàn chỉnh.`,
        speaking: `Luyện phát âm to, tròn vành rõ chữ các từ và cụm từ trọng tâm.`
      }
    },
    {
      id: `${uId}-p3`,
      periodNumber: 3,
      periodName: 'Tiết 3: A Closer Look 2',
      lessonTitle: `Grammar Focus: ${def.grammarFocus}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang 9-10 (A Closer Look 2)`,
      summary: `Khắc sâu quy tắc ngữ pháp trọng điểm của Unit: ${def.grammarFocus}. Thực hành làm bài tập biến đổi câu.`,
      skillFocus: {
        grammar: def.grammarFocus,
        listening: `Nghe câu và phân tích cấu trúc ngữ pháp được người nói sử dụng.`,
        reading: `Đọc văn bản ngắn để nhận diện hiện tượng ngữ pháp trong ngữ cảnh thực tế.`,
        writing: `Chia động từ theo đúng thì, viết lại câu hoặc sửa lỗi sai ngữ pháp.`,
        speaking: `Đặt câu hỏi và trả lời ứng dụng ngay cấu trúc ngữ pháp vừa học.`
      }
    },
    {
      id: `${uId}-p4`,
      periodNumber: 4,
      periodName: 'Tiết 4: Communication',
      lessonTitle: `Everyday English & CLIL Văn hóa: ${def.speakingTopic}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang 11 (Communication)`,
      summary: `Mẫu câu tiếng Anh giao tiếp đời thường (Everyday English) và tìm hiểu kiến thức văn hóa, xã hội thế giới.`,
      skillFocus: {
        grammar: `Các mẫu câu giao tiếp chức năng: đề nghị, đồng ý, từ chối, hỏi ý kiến.`,
        listening: `Nghe đoạn hội thoại giao tiếp tự nhiên ngoài đời sống hàng ngày.`,
        reading: `Đọc các bài văn hóa ngắn (CLIL) so sánh phong tục hoặc lối sống.`,
        writing: `Viết lời hồi đáp tin nhắn, bình luận hoặc lời mời ngắn gọn.`,
        speaking: def.speakingTopic
      }
    },
    {
      id: `${uId}-p5`,
      periodNumber: 5,
      periodName: 'Tiết 5: Skills 1',
      lessonTitle: `Reading & Speaking: ${def.readingTopic}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang 12 (Skills 1)`,
      summary: `Rèn luyện chuyên sâu 2 kỹ năng Đọc hiểu văn bản dài và Thảo luận nhóm, thuyết trình chia sẻ ý kiến.`,
      skillFocus: {
        grammar: `Cấu trúc câu phức, mệnh đề quan hệ hoặc liên từ logic trong bài đọc.`,
        listening: `Nghe củng cố các ý chính hỗ trợ cho bài thảo luận nói.`,
        reading: def.readingTopic,
        writing: `Ghi chú (take notes) các ý chính và luận điểm từ văn bản đọc.`,
        speaking: `Trình bày ý kiến cá nhân, tranh luận hoặc thuyết trình ngắn trước lớp.`
      }
    },
    {
      id: `${uId}-p6`,
      periodNumber: 6,
      periodName: 'Tiết 6: Skills 2',
      lessonTitle: `Listening & Writing: ${def.listeningTopic}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang 13 (Skills 2)`,
      summary: `Luyện nghe bắt thông tin chi tiết và rèn luyện kỹ năng viết đoạn văn hoàn chỉnh theo chủ đề ${def.themeVi}.`,
      skillFocus: {
        grammar: `Cách sử dụng liên từ chỉ lý do, kết quả và đối lập trong đoạn văn.`,
        listening: def.listeningTopic,
        reading: `Đọc bài viết mẫu để phân tích dàn ý, cấu trúc mở - thân - kết.`,
        writing: def.writingTopic,
        speaking: `Trao đổi và nhận xét chéo bài viết cùng bạn học (Peer review).`
      }
    },
    {
      id: `${uId}-p7`,
      periodNumber: 7,
      periodName: 'Tiết 7: Looking Back & Project',
      lessonTitle: `Ôn tập tổng hợp & Dự án học tập: ${def.unitTitle}`,
      textbookSection: `SGK Tiếng Anh ${grade} - Trang 14-15 (Looking Back & Project)`,
      summary: `Hệ thống hóa toàn bộ từ vựng, ngữ pháp và 4 kỹ năng đã học trong Unit. Trình bày sản phẩm dự án.`,
      skillFocus: {
        grammar: `Tổng kết toàn diện kiến thức ngữ pháp của cả bài: ${def.grammarFocus}.`,
        listening: `Nghe tổng hợp các tình huống ôn tập lại toàn bộ bài học.`,
        reading: `Đọc rà soát và hoàn thành các bài tập kiểm tra năng lực cuối Unit.`,
        writing: `Viết nội dung áp phích, bài giới thiệu hoặc slide cho dự án học tập.`,
        speaking: `Thuyết trình sản phẩm dự án học tập trước lớp một cách tự tin.`
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

function buildReviewUnit(grade: number, reviewNum: number, title: string, themeVi: string, coveredUnits: string): TextbookUnit {
  const uId = `g${grade}-rev${reviewNum}`;
  return {
    id: uId,
    unitNumber: 100 + reviewNum,
    unitTitle: title,
    themeVi: `${themeVi} (${coveredUnits})`,
    icon: '🎯',
    periods: [
      {
        id: `${uId}-p1`,
        periodNumber: 1,
        periodName: 'Tiết 1: Language Review',
        lessonTitle: `Ôn tập Ngôn ngữ: Ngữ âm, Từ vựng & Ngữ pháp (${coveredUnits})`,
        textbookSection: `SGK Tiếng Anh ${grade} - Phần Language Review`,
        summary: `Hệ thống lại toàn bộ từ vựng, phát âm và các cấu trúc ngữ pháp trọng tâm đã học trong ${coveredUnits}.`,
        skillFocus: {
          grammar: `Tổng hợp và đối chiếu các thì, cấu trúc câu đã học trong ${coveredUnits}.`,
          listening: `Nghe phân biệt các cặp âm và trọng âm từ vựng.`,
          reading: `Đọc điền từ và hoàn thành các câu trắc nghiệm ngôn ngữ.`,
          writing: `Chuyển đổi câu, sửa lỗi ngữ pháp và viết câu đúng trật tự.`,
          speaking: `Thực hành nói các câu mẫu chứa các điểm ngữ pháp trọng tâm.`
        }
      },
      {
        id: `${uId}-p2`,
        periodNumber: 2,
        periodName: 'Tiết 2: Skills Review',
        lessonTitle: `Ôn tập 4 Kỹ năng: Nghe, Nói, Đọc, Viết (${coveredUnits})`,
        textbookSection: `SGK Tiếng Anh ${grade} - Phần Skills Review`,
        summary: `Luyện đề thi thử và bài tập đánh giá năng lực toàn diện cho cả 4 kỹ năng ngôn ngữ.`,
        skillFocus: {
          grammar: `Ứng dụng ngữ pháp chuẩn xác vào ngữ cảnh bài thi 4 kỹ năng.`,
          listening: `Luyện nghe đoạn độc thoại hoặc phỏng vấn tổng hợp, trả lời câu hỏi trắc nghiệm.`,
          reading: `Đọc hiểu đoạn văn đánh giá năng lực, tìm ý chính và suy luận.`,
          writing: `Viết một đoạn văn hoàn chỉnh theo chủ đề tổng hợp của các Unit đã học.`,
          speaking: `Thực hành bài nói phỏng vấn hoặc thuyết trình chủ đề tổng hợp.`
        }
      }
    ]
  };
}

// ==========================================
// THCS: LỚP 6 (12 UNITS + 4 REVIEWS)
// ==========================================
export const TEXTBOOK_GRADE_6_UNITS: TextbookUnit[] = [
  buildSecondaryUnit(6, {
    unitNumber: 1,
    unitTitle: 'Unit 1: My New School',
    themeVi: 'Trường học mới',
    icon: '🏫',
    vocab: 'Đồ dùng học tập, môn học, các hoạt động ở trường (compass, calculator, uniform, science)',
    grammarFocus: 'Thì hiện tại đơn (Present Simple) và Trạng từ chỉ tần suất (always, usually, often, sometimes, never)',
    readingTopic: 'Đọc hiểu về ngôi trường đặc biệt An Sơn School và các hoạt động học tập thú vị',
    listeningTopic: 'Nghe hai bạn Duy và Phong nói về ngày đầu tiên đi học ở trường mới',
    writingTopic: 'Viết một đoạn văn ngắn (50-60 từ) kể về ngôi trường mới của em',
    speakingTopic: 'Giao tiếp giới thiệu bản thân và hỏi bạn bè về các môn học yêu thích'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 2,
    unitTitle: 'Unit 2: My House',
    themeVi: 'Ngôi nhà của em',
    icon: '🏡',
    vocab: 'Các loại nhà, phòng ốc và đồ nội thất (town house, country house, villa, chest of drawers, dishwasher)',
    grammarFocus: 'Giới từ chỉ vị trí (in, on, under, behind, in front of, between, next to) và Sở hữu cách (\'s)',
    readingTopic: 'Đọc bức thư của Mi miêu tả căn phòng ngủ ấm cúng và ngôi nhà của cô ấy',
    listeningTopic: 'Nghe bạn Nick miêu tả về ngôi nhà kỳ lạ của bạn ấy và bắt vị trí các đồ đạc',
    writingTopic: 'Viết một đoạn văn ngắn (50-60 từ) miêu tả căn phòng ngủ yêu thích của em',
    speakingTopic: 'Hỏi và chỉ vị trí các đồ vật trong gia đình cho khách đến chơi'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 3,
    unitTitle: 'Unit 3: My Friends',
    themeVi: 'Những người bạn của em',
    icon: '👫',
    vocab: 'Tính từ miêu tả ngoại hình và tính cách (caring, clever, creative, confident, hard-working, patient)',
    grammarFocus: 'Thì hiện tại tiếp diễn (Present Continuous) diễn tả hành động đang xảy ra hoặc kế hoạch tương lai',
    readingTopic: 'Đọc bài báo về trại hè Super Summer Camp và các bạn học sinh tài năng',
    listeningTopic: 'Nghe đoạn hội thoại giữa các bạn bè đang lên kế hoạch cho chuyến đi dã ngoại',
    writingTopic: 'Viết một đoạn văn ngắn miêu tả người bạn thân nhất của em (ngoại hình và tính cách)',
    speakingTopic: 'Khen ngợi bạn bè và đưa ra lời mời tham gia các trò chơi tập thể'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 4,
    unitTitle: 'Unit 4: My Neighbourhood',
    themeVi: 'Khu phố nơi em sống',
    icon: '🏘️',
    vocab: 'Địa điểm trong khu dân cư và tính từ chỉ cảnh quan (suburb, square, memorial, cathedral, peaceful, noisy)',
    grammarFocus: 'So sánh hơn của tính từ ngắn và tính từ dài (Comparative adjectives: -er / more + adj)',
    readingTopic: 'Đọc bài blog của Khang so sánh cuộc sống ở vùng ngoại ô yên tĩnh và thành phố',
    listeningTopic: 'Nghe đoạn ghi âm hướng dẫn đường đi tới các địa điểm trong khu phố',
    writingTopic: 'Viết đoạn văn so sánh khu phố của em với một khu phố khác mà em từng đến',
    speakingTopic: 'Hỏi và chỉ đường trong khu phố (Go straight, turn left, take the second turning)'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 5,
    unitTitle: 'Unit 5: Natural Wonders of Viet Nam',
    themeVi: 'Kỳ quan thiên nhiên Việt Nam',
    icon: '🏞️',
    vocab: 'Cảnh quan thiên nhiên và đồ dùng đi dã ngoại (waterfall, desert, cave, island, compass, plaster, suncream)',
    grammarFocus: 'Danh từ đếm được và không đếm được; Động từ khuyết thiếu Must / Mustn\'t chỉ mệnh lệnh',
    readingTopic: 'Đọc cẩm nang du lịch về Vịnh Hạ Long và Đảo Phú Quốc',
    listeningTopic: 'Nghe hướng dẫn viên du lịch nhắc nhở các quy định an toàn khi đi thám hiểm hang động',
    writingTopic: 'Viết đoạn văn ngắn đưa ra các lời khuyên (must/mustn\'t) khi đi du lịch khám phá thiên nhiên',
    speakingTopic: 'Gợi ý các địa điểm du lịch thiên nhiên nổi tiếng ở Việt Nam cho bạn bè quốc tế'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 6,
    unitTitle: 'Unit 6: Our Tet Holiday',
    themeVi: 'Ngày Tết cổ truyền Việt Nam',
    icon: '🧧',
    vocab: 'Phong tục ngày Tết, món ăn và lời chúc (peach blossom, sticky rice cake, lucky money, calendar, decorate)',
    grammarFocus: 'Cấu trúc Should / Shouldn\'t đưa ra lời khuyên; Phân biệt Some và Any',
    readingTopic: 'Đọc bài viết về phong tục đón năm mới ở Việt Nam và các nước châu Á',
    listeningTopic: 'Nghe bạn Mai kể về những việc gia đình bạn ấy làm trước và trong dịp Tết',
    writingTopic: 'Viết một email hoặc đoạn văn ngắn kể về những điều nên làm và không nên làm vào dịp Tết',
    speakingTopic: 'Gửi những lời chúc mừng năm mới ý nghĩa bằng tiếng Anh tới bạn bè và thầy cô'
  }),
  buildReviewUnit(6, 1, 'Review 1: Học kì 1 (Part 1)', 'Ôn tập tổng hợp', 'Units 1 - 2 - 3'),
  buildReviewUnit(6, 2, 'Review 2: Ôn thi Học kì 1', 'Ôn tập tổng hợp cuối kì 1', 'Units 4 - 5 - 6'),
  buildSecondaryUnit(6, {
    unitNumber: 7,
    unitTitle: 'Unit 7: Television',
    themeVi: 'Truyền hình & Giải trí',
    icon: '📺',
    vocab: 'Các chương trình TV và nhân vật truyền hình (MC, animated film, documentary, game show, educational)',
    grammarFocus: 'Từ để hỏi Wh-words (What, Where, When, Who, Why, How) và Liên từ nối (and, but, although, because, so)',
    readingTopic: 'Đọc lịch phát sóng các chương trình truyền hình bổ ích dành cho trẻ em',
    listeningTopic: 'Nghe cuộc trò chuyện về chương trình truyền hình yêu thích nhất vào dịp cuối tuần',
    writingTopic: 'Viết đoạn văn ngắn (50-60 từ) kể về kênh truyền hình hoặc chương trình em thích xem nhất',
    speakingTopic: 'Hỏi và trả lời về thói quen xem ti vi và chương trình bổ ích cho học sinh'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 8,
    unitTitle: 'Unit 8: Sports and Games',
    themeVi: 'Thể thao và Trò chơi',
    icon: '⚽',
    vocab: 'Các môn thể thao, dụng cụ và tính từ (table tennis, karate, badminton, racket, goggles, sporty, fit)',
    grammarFocus: 'Thì Quá khứ đơn (Past Simple) với động từ có quy tắc và bất quy tắc; Câu mệnh lệnh (Imperatives)',
    readingTopic: 'Đọc tiểu sử về vận động viên xuất sắc hoặc lịch sử của môn bóng đá thế giới',
    listeningTopic: 'Nghe đoạn phỏng vấn về một trận thi đấu thể thao sôi động ở trường',
    writingTopic: 'Viết đoạn văn kể về một môn thể thao em yêu thích hoặc một trò chơi dân gian',
    speakingTopic: 'Nói về trải nghiệm tham gia hoạt động thể thao cuối tuần vừa rồi của em'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 9,
    unitTitle: 'Unit 9: Cities of the World',
    themeVi: 'Các thành phố trên thế giới',
    icon: '🗽',
    vocab: 'Địa danh, biểu tượng văn hóa và tính từ (landmark, tower, palace, floating market, historic, modern)',
    grammarFocus: 'Thì Hiện tại hoàn thành (Present Perfect) diễn tả trải nghiệm (Have you ever been to...?)',
    readingTopic: 'Đọc bưu thiếp của các bạn học sinh gửi về từ London, Sydney và New York',
    listeningTopic: 'Nghe dự báo thời tiết và các điểm tham quan nổi tiếng ở các thủ đô lớn',
    writingTopic: 'Viết một bưu thiếp (postcard) ngắn gửi cho gia đình kể về chuyến tham quan thành phố',
    speakingTopic: 'Hỏi và chia sẻ về những địa danh nổi tiếng thế giới mà em từng ghé thăm hoặc muốn đến'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 10,
    unitTitle: 'Unit 10: Our Houses in the Future',
    themeVi: 'Ngôi nhà trong tương lai',
    icon: '🛸',
    vocab: 'Thiết bị gia dụng thông minh và năng lượng tương lai (solar energy, smart TV, robot, automatic, space)',
    grammarFocus: 'Thì Tương lai đơn với Will / Won\'t và Động từ khuyết thiếu Might / Might not (khả năng xảy ra)',
    readingTopic: 'Đọc bài văn miêu tả về ngôi nhà nổi trên biển và ngôi nhà trên mặt trăng trong tương lai',
    listeningTopic: 'Nghe bạn học sinh trình bày ý tưởng về một căn phòng tương lai được điều khiển bằng giọng nói',
    writingTopic: 'Viết đoạn văn ngắn (50-60 từ) miêu tả ngôi nhà mơ ước trong tương lai của em',
    speakingTopic: 'Thuyết trình về thiết bị gia dụng tương lai giúp con người tiết kiệm thời gian'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 11,
    unitTitle: 'Unit 11: Our Greener World',
    themeVi: 'Thế giới xanh của chúng ta',
    icon: '🌱',
    vocab: 'Môi trường, rác thải và nguyên tắc 3R (reduce, reuse, recycle, environment, pollution, plastic bags)',
    grammarFocus: 'Câu điều kiện loại 1 (Conditional Sentence Type 1: If + S + V(s/es), S + will + V-inf)',
    readingTopic: 'Đọc bài viết về câu lạc bộ 3R Club ở trường học và các biện pháp giảm rác thải nhựa',
    listeningTopic: 'Nghe buổi nói chuyện về cách tái chế giấy vụn và đồ hộp đã qua sử dụng',
    writingTopic: 'Viết một đoạn văn về những việc học sinh nên làm để trường học luôn xanh - sạch - đẹp',
    speakingTopic: 'Đưa ra các ý tưởng sáng tạo để tái chế đồ vật cũ trong gia đình thành vật dụng hữu ích'
  }),
  buildSecondaryUnit(6, {
    unitNumber: 12,
    unitTitle: 'Unit 12: Robots',
    themeVi: 'Người máy thông minh',
    icon: '🤖',
    vocab: 'Các loại robot và kỹ năng của robot (home robot, worker robot, doctor robot, guard, iron clothes)',
    grammarFocus: 'Động từ chỉ khả năng: Can / Could / Will be able to (khả năng ở hiện tại, quá khứ và tương lai)',
    readingTopic: 'Đọc bài giới thiệu về triển lãm người máy quốc tế International Robot Show',
    listeningTopic: 'Nghe đoạn phỏng vấn một kỹ sư chế tạo robot gia đình hỗ trợ người già',
    writingTopic: 'Viết đoạn văn ngắn miêu tả một chú robot mà em mong muốn sở hữu và khả năng của nó',
    speakingTopic: 'Bày tỏ quan điểm về vai trò của người máy trong cuộc sống tương lai của loài người'
  }),
  buildReviewUnit(6, 3, 'Review 3: Học kì 2 (Part 1)', 'Ôn tập tổng hợp', 'Units 7 - 8 - 9'),
  buildReviewUnit(6, 4, 'Review 4: Ôn thi Học kì 2', 'Ôn tập tổng hợp cuối năm học', 'Units 10 - 11 - 12')
];

// ==========================================
// THCS: LỚP 7 (12 UNITS + 4 REVIEWS)
// ==========================================
export const TEXTBOOK_GRADE_7_UNITS: TextbookUnit[] = [
  buildSecondaryUnit(7, {
    unitNumber: 1,
    unitTitle: 'Unit 1: Hobbies',
    themeVi: 'Sở thích cá nhân',
    icon: '🎨',
    vocab: 'Các sở thích và tính từ chỉ cảm xúc (arranging flowers, making pottery, bird-watching, carving wood)',
    grammarFocus: 'Thì Hiện tại đơn (Present Simple) và Động từ chỉ sự thích/ghét (like, love, enjoy, hate + V-ing)',
    readingTopic: 'Đọc bài chia sẻ của ba bạn trẻ về những sở thích độc đáo và lợi ích của chúng',
    listeningTopic: 'Nghe bạn Trang kể về sở thích làm đồ gốm và bộ sưu tập búp bê của mình',
    writingTopic: 'Viết một đoạn văn ngắn (70 từ) giới thiệu về một sở thích bổ ích của em',
    speakingTopic: 'Hỏi đáp với bạn về sở thích rảnh rỗi và lý do tại sao em yêu thích hoạt động đó'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 2,
    unitTitle: 'Unit 2: Healthy Living',
    themeVi: 'Lối sống khỏe mạnh',
    icon: '🥗',
    vocab: 'Sức khỏe, bệnh thông thường và lối sống (acne, sunburn, allergy, dim light, vegeterian, stay in shape)',
    grammarFocus: 'Câu đơn (Simple sentences) với chủ ngữ, động từ, tân ngữ và Liên từ kết hợp (and, or, but, so)',
    readingTopic: 'Đọc bài viết về bí quyết sống thọ và khỏe mạnh của người dân đảo Okinawa (Nhật Bản)',
    listeningTopic: 'Nghe bác sĩ tư vấn về cách phòng tránh các vấn đề sức khỏe mùa hè cho học sinh',
    writingTopic: 'Viết đoạn văn đưa ra các lời khuyên để duy trì chế độ ăn uống và lối sống lành mạnh',
    speakingTopic: 'Đóng vai bác sĩ và bệnh nhân hỏi thăm triệu chứng và đưa ra lời khuyên sức khỏe'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 3,
    unitTitle: 'Unit 3: Community Service',
    themeVi: 'Hoạt động vì cộng đồng',
    icon: '🤝',
    vocab: 'Hoạt động thiện nguyện và giúp đỡ cộng đồng (donate, tutor, elderly people, nursing home, clean up)',
    grammarFocus: 'Thì Quá khứ đơn (Past Simple) diễn tả các hành động thiện nguyện đã hoàn thành trong quá khứ',
    readingTopic: 'Đọc bài báo về dự án tình nguyện của học sinh giúp đỡ trẻ em nghèo vùng cao',
    listeningTopic: 'Nghe cuộc phỏng vấn hai bạn tình nguyện viên về chiến dịch dọn sạch bãi biển',
    writingTopic: 'Viết một đoạn văn kể về một hoạt động thiện nguyện mà em hoặc trường em từng tham gia',
    speakingTopic: 'Thảo luận và đề xuất các hoạt động vì cộng đồng thiết thực cho lớp học'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 4,
    unitTitle: 'Unit 4: Music and Arts',
    themeVi: 'Âm nhạc và Nghệ thuật',
    icon: '🎵',
    vocab: 'Các loại hình nghệ thuật và nhạc cụ (composer, portrait, water puppetry, exhibition, sculpture)',
    grammarFocus: 'So sánh tương đương và khác biệt: (not) as... as, the same as, different from',
    readingTopic: 'Đọc bài viết về nghệ thuật múa rối nước truyền thống độc đáo của Việt Nam',
    listeningTopic: 'Nghe cuộc trò chuyện về chuyến tham quan triển lãm tranh nghệ thuật',
    writingTopic: 'Viết thư mời bạn đi xem một buổi hòa nhạc hoặc triển lãm tranh nghệ thuật',
    speakingTopic: 'Bày tỏ sở thích và so sánh giữa hai thể loại âm nhạc hoặc hai họa sĩ nổi tiếng'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 5,
    unitTitle: 'Unit 5: Food and Drink',
    themeVi: 'Ẩm thực và Đồ uống',
    icon: '🍲',
    vocab: 'Nguyên liệu nấu ăn và món ăn truyền thống (ingredient, recipe, broth, turmeric, eel, pancake, pour)',
    grammarFocus: 'Lượng từ: some, any, much, many, a lot of, lots of và Câu hỏi lượng: How much? How many?',
    readingTopic: 'Đọc bài giới thiệu về món Phở - tinh hoa ẩm thực truyền thống Việt Nam',
    listeningTopic: 'Nghe hướng dẫn từng bước nấu một món ăn gia đình đơn giản',
    writingTopic: 'Viết công thức và các bước nấu một món ăn hoặc pha chế đồ uống em yêu thích',
    speakingTopic: 'Giao tiếp gọi món tại nhà hàng và hỏi về nguyên liệu của món ăn'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 6,
    unitTitle: 'Unit 6: A Visit to a School',
    themeVi: 'Thăm trường học lịch sử',
    icon: '🏛️',
    vocab: 'Trường học lịch sử, di tích và cơ sở vật chất (Temple of Literature, Imperial Academy, pavilion, relic)',
    grammarFocus: 'Giới từ chỉ thời gian và nơi chốn (at, in, on) và Phân biệt câu bị động sơ cấp',
    readingTopic: 'Đọc bài hướng dẫn tham quan Văn Miếu - Quốc Tử Giám Hà Nội',
    listeningTopic: 'Nghe hướng dẫn viên thuyết minh về lịch sử trường Quốc Tử Giám',
    writingTopic: 'Viết một đoạn văn giới thiệu về một ngôi trường hoặc di tích lịch sử nổi tiếng',
    speakingTopic: 'Giới thiệu các quy tắc ứng xử và điểm tham quan cho du khách ghé thăm trường'
  }),
  buildReviewUnit(7, 1, 'Review 1: Học kì 1 (Part 1)', 'Ôn tập tổng hợp', 'Units 1 - 2 - 3'),
  buildReviewUnit(7, 2, 'Review 2: Ôn thi Học kì 1', 'Ôn tập tổng hợp cuối kì 1', 'Units 4 - 5 - 6'),
  buildSecondaryUnit(7, {
    unitNumber: 7,
    unitTitle: 'Unit 7: Traffic',
    themeVi: 'Giao thông đường bộ',
    icon: '🚦',
    vocab: 'Phương tiện giao thông và an toàn đường bộ (pedestrian, zebra crossing, seatbelt, cycle lane, traffic jam)',
    grammarFocus: 'Chủ ngữ giả "It" chỉ khoảng cách (It is ... km from... to...) và Mẫu câu used to chỉ thói quen quá khứ',
    readingTopic: 'Đọc bài báo về luật an toàn giao thông và các phương tiện di chuyển ở các nước phát triển',
    listeningTopic: 'Nghe cuộc phỏng vấn về tình hình tắc nghẽn giao thông vào giờ cao điểm tại thành phố',
    writingTopic: 'Viết một đoạn văn về các quy tắc an toàn giao thông mà học sinh cần tuân thủ khi đến trường',
    speakingTopic: 'Cảnh báo và nhắc nhở bạn bè tuân thủ tín hiệu đèn giao thông và đội mũ bảo hiểm'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 8,
    unitTitle: 'Unit 8: Films',
    themeVi: 'Phim ảnh và Điện ảnh',
    icon: '🎬',
    vocab: 'Các thể loại phim và từ vựng phê bình điện ảnh (sci-fi, horror, comedy, director, actor, critic, plot)',
    grammarFocus: 'Liên từ nhượng bộ: Although / Though / Even though và Despite / In spite of; Đuôi tính từ -ed và -ing',
    readingTopic: 'Đọc bài phê bình (film review) về bộ phim bom tấn Avatar hoặc Titanic',
    listeningTopic: 'Nghe cuộc đối thoại chọn phim xem rạp giữa hai bạn học sinh',
    writingTopic: 'Viết một bài đánh giá phim ngắn (film review) về bộ phim em thích nhất',
    speakingTopic: 'Tranh luận về kết thúc của một bộ phim và đưa ra ý kiến khen chê diễn xuất'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 9,
    unitTitle: 'Unit 9: Festivals around the World',
    themeVi: 'Lễ hội trên thế giới',
    icon: '🎉',
    vocab: 'Các lễ hội độc đáo trên thế giới (La Tomatina, Halloween, Carnival, Rio, parade, feast, costume)',
    grammarFocus: 'Câu hỏi Yes/No và Câu hỏi thông tin Wh-question; Cụm trạng ngữ chỉ thời gian và nơi chốn',
    readingTopic: 'Đọc bài viết về Lễ hội ném cà chua La Tomatina ở Tây Ban Nha và Lễ hội hoa đăng Thái Lan',
    listeningTopic: 'Nghe miêu tả về không khí rực rỡ của lễ hội hóa trang Rio Carnival ở Brazil',
    writingTopic: 'Viết đoạn văn ngắn (70 từ) giới thiệu về một lễ hội truyền thống ở Việt Nam hoặc thế giới',
    speakingTopic: 'Đóng vai du khách chia sẻ những trải nghiệm đáng nhớ khi tham dự lễ hội'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 10,
    unitTitle: 'Unit 10: Energy Sources',
    themeVi: 'Các nguồn năng lượng',
    icon: '⚡',
    vocab: 'Năng lượng tái tạo và không tái tạo (solar power, wind energy, fossil fuel, renewable, carbon footprint)',
    grammarFocus: 'Thì Hiện tại tiếp diễn mang ý nghĩa tương lai (Present Continuous for future) và Ôn tập câu điều kiện',
    readingTopic: 'Đọc bài báo khoa học về xu hướng chuyển dịch sang năng lượng mặt trời và gió',
    listeningTopic: 'Nghe bài giảng về các biện pháp tiết kiệm điện và giảm khí thải nhà kính trong gia đình',
    writingTopic: 'Viết đoạn văn ngắn về những thói quen giúp gia đình em tiết kiệm nguồn năng lượng',
    speakingTopic: 'Thảo luận nhóm về ưu điểm và nhược điểm của các nguồn năng lượng sạch'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 11,
    unitTitle: 'Unit 11: Travelling in the Future',
    themeVi: 'Phương tiện di chuyển tương lai',
    icon: '🚀',
    vocab: 'Phương tiện giao thông hiện đại (bullet train, flying car, hyperloop, autopilot, teleport, driverless)',
    grammarFocus: 'Đại từ sở hữu (Possessive pronouns: mine, yours, his, hers, ours, theirs) và Thì tương lai đơn',
    readingTopic: 'Đọc bài viết về các phát minh phương tiện di chuyển không người lái và tàu siêu tốc',
    listeningTopic: 'Nghe chuyên gia thuyết trình về viễn cảnh giao thông đô thị năm 2050',
    writingTopic: 'Viết đoạn văn (70-80 từ) miêu tả một phương tiện di chuyển trong tương lai mà em mơ ước',
    speakingTopic: 'Trình bày ý tưởng sáng tạo về phương tiện giúp giải quyết vấn đề ô nhiễm môi trường'
  }),
  buildSecondaryUnit(7, {
    unitNumber: 12,
    unitTitle: 'Unit 12: English-Speaking Countries',
    themeVi: 'Các quốc gia nói tiếng Anh',
    icon: '🌏',
    vocab: 'Địa lý, văn hóa và biểu tượng các nước (Australia, Canada, New Zealand, the UK, the USA, native, accent)',
    grammarFocus: 'Mạo từ (Articles): A, An, The và Zero article (Không dùng mạo từ trước tên nước số ít...)',
    readingTopic: 'Đọc bài viết về thiên nhiên kỳ vĩ, văn hóa bản địa và biểu tượng chuột túi của Úc',
    listeningTopic: 'Nghe hướng dẫn viên giới thiệu về thành phố cảng Sydney hoặc thủ đô London',
    writingTopic: 'Viết một đoạn văn giới thiệu về một quốc gia nói tiếng Anh mà em mơ ước được đặt chân đến',
    speakingTopic: 'Chia sẻ các sự thật thú vị về văn hóa, ẩm thực hoặc thể thao của các nước nói tiếng Anh'
  }),
  buildReviewUnit(7, 3, 'Review 3: Học kì 2 (Part 1)', 'Ôn tập tổng hợp', 'Units 7 - 8 - 9'),
  buildReviewUnit(7, 4, 'Review 4: Ôn thi Học kì 2', 'Ôn tập tổng hợp cuối năm học', 'Units 10 - 11 - 12')
];

// ==========================================
// THCS: LỚP 8 (12 UNITS + 4 REVIEWS)
// ==========================================
export const TEXTBOOK_GRADE_8_UNITS: TextbookUnit[] = [
  buildSecondaryUnit(8, {
    unitNumber: 1,
    unitTitle: 'Unit 1: Leisure Time',
    themeVi: 'Thời gian rảnh rỗi',
    icon: '🎧',
    vocab: 'Hoạt động giải trí lành mạnh và công nghệ (DIY, origami, hangout, surf the net, virtual, addict)',
    grammarFocus: 'Động từ chỉ sự thích/ghét đi kèm Danh động từ hoặc To-infinitive (fancy, adore, detest + V-ing)',
    readingTopic: 'Đọc bài khảo sát về cách thanh thiếu niên cân bằng giữa mạng xã hội và hoạt động ngoài trời',
    listeningTopic: 'Nghe các bạn trẻ chia sẻ về niềm đam mê tự làm đồ thủ công mỹ nghệ (DIY)',
    writingTopic: 'Viết một đoạn văn (80-100 từ) về hoạt động giải trí lành mạnh em thích làm cùng gia đình',
    speakingTopic: 'Phỏng vấn bạn cùng lớp về thời lượng sử dụng thiết bị điện tử trong thời gian rảnh'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 2,
    unitTitle: 'Unit 2: Life in the Countryside',
    themeVi: 'Cuộc sống ở miền quê',
    icon: '🌾',
    vocab: 'Cảnh quan nông thôn và mùa màng (harvest time, paddy field, canal, cattle, hospitable, vast, peaceful)',
    grammarFocus: 'So sánh hơn của Trạng từ (Comparatives of adverbs: -er / more + adv + than)',
    readingTopic: 'Đọc bài chia sẻ của một bạn học sinh thành phố về trải nghiệm mùa gặt ở quê ông bà',
    listeningTopic: 'Nghe câu chuyện về những đổi thay tích cực ở các làng quê nông thôn mới',
    writingTopic: 'Viết đoạn văn so sánh nhịp sống giữa vùng nông thôn yên bình và thành thị sôi động',
    speakingTopic: 'Bày tỏ sở thích: Em thích sống ở miền quê hay ở thành phố lớn hơn và giải thích lý do'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 3,
    unitTitle: 'Unit 3: Teenagers',
    themeVi: 'Lứa tuổi thanh thiếu niên',
    icon: '🎒',
    vocab: 'Áp lực học tập, bạn bè và kỹ năng sống (peer pressure, expectation, forum, bully, connect, mature)',
    grammarFocus: 'Câu ghép (Compound sentences) và Câu phức (Complex sentences) với liên từ chỉ nguyên nhân, kết quả',
    readingTopic: 'Đọc các bài đăng trên diễn đàn Teen Forum về cách vượt qua áp lực điểm số và thi cử',
    listeningTopic: 'Nghe chuyên gia tâm lý học đường tư vấn cách xây dựng sự tự tin và giải quyết mâu thuẫn',
    writingTopic: 'Viết một bài đăng diễn đàn chia sẻ giải pháp giúp bạn bè giảm bớt áp lực học tập',
    speakingTopic: 'Đưa ra lời khuyên chân thành và cách động viên một người bạn đang gặp căng thẳng'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 4,
    unitTitle: 'Unit 4: Ethnic Groups of Viet Nam',
    themeVi: 'Các dân tộc Việt Nam',
    icon: '🧣',
    vocab: 'Trang phục, nhà rông và phong tục dân tộc (stilt house, communal house, terraced field, folk dance, weave)',
    grammarFocus: 'Câu hỏi Yes/No và Câu hỏi thông tin Wh-question; Danh từ đếm được và không đếm được',
    readingTopic: 'Đọc bài giới thiệu về nét văn hóa độc đáo của người Tày, Nùng và người H\'Mông',
    listeningTopic: 'Nghe bài thuyết minh về chợ phiên vùng cao Bắc Hà và nghệ thuật thêu thổ cẩm',
    writingTopic: 'Viết một đoạn văn giới thiệu về trang phục hoặc một lễ hội của đồng bào dân tộc thiểu số',
    speakingTopic: 'Thuyết trình về sự phong phú và đoàn kết giữa 54 dân tộc anh em tại Việt Nam'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 5,
    unitTitle: 'Unit 5: Our Customs and Traditions',
    themeVi: 'Phong tục và Tập quán',
    icon: '🏮',
    vocab: 'Nghi lễ, phong tục gia đình và lòng hiếu thảo (tradition, custom, ancestor, worship, offspring, filial piety)',
    grammarFocus: 'Động từ khuyết thiếu: Have to / Must (bắt buộc) và Should (khuyên bảo); Mạo từ chỉ tập hợp',
    readingTopic: 'Đọc bài viết về phong tục cúng tổ tiên và nét đẹp văn hóa thờ cúng Vua Hùng',
    listeningTopic: 'Nghe đoạn hội thoại bàn về các phong tục chào hỏi và phép lịch sự trên bàn ăn',
    writingTopic: 'Viết một đoạn văn kể về một phong tục truyền thống tốt đẹp của gia đình em',
    speakingTopic: 'Chia sẻ quan điểm về việc gìn giữ phong tục truyền thống trong đời sống hiện đại'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 6,
    unitTitle: 'Unit 6: Lifestyles',
    themeVi: 'Lối sống của các cộng đồng',
    icon: '⛺',
    vocab: 'Lối sống du mục, truyền thống và hiện đại (nomadic, tribal, online learning, street food, staple food)',
    grammarFocus: 'Thì Tương lai đơn và Các thì Hiện tại; Mệnh đề thời gian với When, While, As soon as',
    readingTopic: 'Đọc bài báo về lối sống của người du mục trên thảo nguyên Mông Cổ và người Inuit Bắc Cực',
    listeningTopic: 'Nghe phóng sự về sự thay đổi thói quen mua sắm và giao tiếp của giới trẻ hiện nay',
    writingTopic: 'Viết đoạn văn so sánh lối sống truyền thống trước đây và lối sống số hiện đại',
    speakingTopic: 'Thảo luận về lối sống xanh, tối giản và tác động của nó tới sức khỏe con người'
  }),
  buildReviewUnit(8, 1, 'Review 1: Học kì 1 (Part 1)', 'Ôn tập tổng hợp', 'Units 1 - 2 - 3'),
  buildReviewUnit(8, 2, 'Review 2: Ôn thi Học kì 1', 'Ôn tập tổng hợp cuối kì 1', 'Units 4 - 5 - 6'),
  buildSecondaryUnit(8, {
    unitNumber: 7,
    unitTitle: 'Unit 7: Environmental Protection',
    themeVi: 'Bảo vệ môi trường',
    icon: '🌲',
    vocab: 'Hệ sinh thái, ô nhiễm và bảo tồn (ecosystem, habitat, endangered species, global warming, wildlife)',
    grammarFocus: 'Câu phức với mệnh đề trạng ngữ chỉ nguyên nhân, kết quả và Câu điều kiện loại 2 sơ bộ',
    readingTopic: 'Đọc bài báo về thực trạng rác thải đại dương và nỗ lực bảo tồn rùa biển',
    listeningTopic: 'Nghe buổi tọa đàm về các giải pháp phục hồi rừng đầu nguồn và đa dạng sinh học',
    writingTopic: 'Viết một bài luận ngắn (80-100 từ) về các hành động cụ thể để giảm thiểu biến đổi khí hậu',
    speakingTopic: 'Trình bày giải pháp hạn chế sử dụng túi nilon và đồ nhựa dùng một lần tại trường học'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 8,
    unitTitle: 'Unit 8: Shopping',
    themeVi: 'Mua sắm và Tiêu dùng',
    icon: '🛒',
    vocab: 'Trung tâm mua sắm, giá cả và khuyến mãi (bargain, discount, receipt, specialty shop, shopaholic, browsing)',
    grammarFocus: 'Thì Hiện tại đơn mang ý nghĩa thời gian biểu (Timetable) và Thì Hiện tại tiếp diễn',
    readingTopic: 'Đọc bài phân tích ưu nhược điểm giữa mua sắm trực tuyến (online) và mua sắm tại chợ truyền thống',
    listeningTopic: 'Nghe cuộc đối thoại thương lượng giá cả và đổi trả hàng tại trung tâm thương mại',
    writingTopic: 'Viết một email phàn nàn lịch sự về sản phẩm bị lỗi và yêu cầu hoàn tiền hoặc đổi mới',
    speakingTopic: 'Đóng vai người mua và người bán hàng thực hành giao dịch, hỏi giá và thanh toán'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 9,
    unitTitle: 'Unit 9: Natural Disasters',
    themeVi: 'Thiên tai và Thảm họa tự nhiên',
    icon: '🌪️',
    vocab: 'Các loại thiên tai và công tác cứu hộ (earthquake, tsunami, volcanic eruption, evacuation, rescue team)',
    grammarFocus: 'Thì Quá khứ tiếp diễn (Past Continuous) và Sự kết hợp giữa Quá khứ đơn & Quá khứ tiếp diễn với When/While',
    readingTopic: 'Đọc bài tin tức tường thuật về trận bão lịch sử và tinh thần tương thân tương ái của người dân',
    listeningTopic: 'Nghe bản tin cảnh báo thời tiết khẩn cấp và các bước chuẩn bị sơ tán an toàn',
    writingTopic: 'Viết một bản tin ngắn (80 từ) thuật lại một thảm họa thiên tai và công tác hỗ trợ người bị nạn',
    speakingTopic: 'Hướng dẫn các kỹ năng sinh tồn cơ bản khi xảy ra động đất hoặc bão lũ lớn'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 10,
    unitTitle: 'Unit 10: Communication in the Future',
    themeVi: 'Giao tiếp trong tương lai',
    icon: '📡',
    vocab: 'Công nghệ giao tiếp tiên tiến (telepathy, hologram, video conference, emoji, network, interact)',
    grammarFocus: 'Giới từ chỉ thời gian và nơi chốn; Đại từ sở hữu và Ôn tập câu gián tiếp',
    readingTopic: 'Đọc bài viết về công nghệ thần giao cách cảm nhân tạo và hình ảnh 3D chiếu không gian (Hologram)',
    listeningTopic: 'Nghe cuộc trò chuyện dự đoán cách học sinh sẽ tham gia lớp học ảo trong tương lai',
    writingTopic: 'Viết một đoạn văn nêu quan điểm: Liệu công nghệ số có làm giảm sự gắn kết mặt đối mặt?',
    speakingTopic: 'Tranh biện về lợi ích và tác hại của việc lạm dụng giao tiếp qua mạng xã hội'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 11,
    unitTitle: 'Unit 11: Science and Technology',
    themeVi: 'Khoa học và Công nghệ',
    icon: '🔬',
    vocab: 'Phát minh, y học và trí tuệ nhân tạo (inventor, breakthrough, artificial intelligence, nanotechnology)',
    grammarFocus: 'Câu gián tiếp (Reported Speech: Statements and Questions) - Tường thuật lời nói và câu hỏi',
    readingTopic: 'Đọc bài viết về những đột phá khoa học đã làm thay đổi hoàn toàn lịch sử nhân loại',
    listeningTopic: 'Nghe bài phát biểu của một nhà khoa học trẻ về ứng dụng AI trong chẩn đoán y tế',
    writingTopic: 'Viết một đoạn văn (80-100 từ) miêu tả một phát minh khoa học mà em kỳ vọng sẽ xuất hiện',
    speakingTopic: 'Thuyết trình về một nhà khoa học nổi tiếng và cống hiến to lớn của họ cho thế giới'
  }),
  buildSecondaryUnit(8, {
    unitNumber: 12,
    unitTitle: 'Unit 12: Life on Other Planets',
    themeVi: 'Sự sống ngoài hành tinh',
    icon: '🪐',
    vocab: 'Vũ trụ, hành tinh và sinh vật ngoài Trái Đất (alien, galaxy, UFO, gravity, oxygen, telescope, solar system)',
    grammarFocus: 'Ôn tập câu gián tiếp; Câu hỏi đuôi (Tag questions) và Động từ khuyết thiếu dự đoán',
    readingTopic: 'Đọc bài báo về cuộc tìm kiếm dấu vết nước và sự sống trên Sao Hỏa của tàu thăm dò NASA',
    listeningTopic: 'Nghe đoạn tường thuật của một phi hành gia kể về cảm giác ngắm nhìn Trái Đất từ vũ trụ',
    writingTopic: 'Viết một đoạn văn tưởng tượng cuộc sống của con người nếu di cư lên Mặt Trăng trong tương lai',
    speakingTopic: 'Bày tỏ ý kiến về câu hỏi: Liệu có tồn tại nền văn minh ngoài Trái Đất hay không?'
  }),
  buildReviewUnit(8, 3, 'Review 3: Học kì 2 (Part 1)', 'Ôn tập tổng hợp', 'Units 7 - 8 - 9'),
  buildReviewUnit(8, 4, 'Review 4: Ôn thi Học kì 2', 'Ôn tập tổng hợp cuối năm học', 'Units 10 - 11 - 12')
];

// ==========================================
// THCS: LỚP 9 (12 UNITS + 4 REVIEWS)
// ==========================================
export const TEXTBOOK_GRADE_9_UNITS: TextbookUnit[] = [
  buildSecondaryUnit(9, {
    unitNumber: 1,
    unitTitle: 'Unit 1: Local Community',
    themeVi: 'Cộng đồng địa phương & Làng nghề',
    icon: '🏺',
    vocab: 'Làng nghề truyền thống, thợ thủ công và sản phẩm (craftsman, pottery, lacquerware, artisan, preserve)',
    grammarFocus: 'Cụm động từ (Phrasal verbs: look after, pass down, turn down, keep up with, deal with)',
    readingTopic: 'Đọc bài viết về làng gốm Bát Tràng và nỗ lực giữ gìn nghề gia truyền của các nghệ nhân trẻ',
    listeningTopic: 'Nghe cuộc phỏng vấn một nghệ nhân dệt lụa Vạn Phúc về bí quyết tạo nên tấm lụa tơ tằm',
    writingTopic: 'Viết một bài giới thiệu (100-120 từ) về một làng nghề truyền thống nổi tiếng ở quê hương em',
    speakingTopic: 'Thuyết trình về các giải pháp giúp làng nghề truyền thống thu hút khách du lịch quốc tế'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 2,
    unitTitle: 'Unit 2: City Life',
    themeVi: 'Cuộc sống đô thị',
    icon: '🏙️',
    vocab: 'Đô thị hóa, tiện ích và các vấn đề thành phố (cosmopolitan, metro, hustle and bustle, congestion, affordable)',
    grammarFocus: 'So sánh kép: The + comparative..., the + comparative... (Càng... càng...) và So sánh tính từ nâng cao',
    readingTopic: 'Đọc bài phân tích về chất lượng sống tại các thành phố đáng sống nhất thế giới',
    listeningTopic: 'Nghe hai người bạn thảo luận về những khó khăn khi tìm kiếm nhà ở và việc làm tại đô thị lớn',
    writingTopic: 'Viết đoạn văn nêu những điểm tích cực và tiêu cực khi sinh sống tại một thành phố lớn',
    speakingTopic: 'Đề xuất các ý tưởng xây dựng thành phố thông minh và thân thiện với người đi bộ'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 3,
    unitTitle: 'Unit 3: Healthy Living for Teens',
    themeVi: 'Sức khỏe thể chất & Tinh thần tuổi Teen',
    icon: '🧘',
    vocab: 'Căng thẳng, quản lý cảm xúc và sức khỏe tinh thần (anxiety, counselor, mental health, overcome, empathy)',
    grammarFocus: 'Từ để hỏi trước động từ nguyên mẫu có to: Wh-words + to-infinitive (who to talk to, where to go)',
    readingTopic: 'Đọc bức thư tâm sự của các bạn học sinh lớp 9 về kỳ thi vào 10 và lời khuyên của chuyên gia',
    listeningTopic: 'Nghe buổi tư vấn tâm lý về cách quản lý thời gian và giữ tinh thần tích cực trước kỳ thi',
    writingTopic: 'Viết một bức thư động viên một người bạn đang gặp khủng hoảng tinh thần hoặc quá tải học tập',
    speakingTopic: 'Đóng vai chuyên gia tư vấn đưa ra lời khuyên cho các tình huống áp lực học đường'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 4,
    unitTitle: 'Unit 4: Remembering the Past',
    themeVi: 'Ký ức quá khứ & Giá trị lịch sử',
    icon: '📜',
    vocab: 'Di sản, phong tục xưa và lịch sử (preservation, generations, illiterate, barefoot, street vendor, memory)',
    grammarFocus: 'Cấu trúc Used to / Didn\'t use to; Cấu trúc Wish ở hiện tại (S + wish + S + V-ed / could + V)',
    readingTopic: 'Đọc bài viết về tuổi thơ của thế hệ ông bà thời kỳ bao cấp và những trò chơi dân gian xưa',
    listeningTopic: 'Nghe lời kể của một cựu chiến binh về tinh thần đoàn kết và vượt khó của nhân dân thời chiến',
    writingTopic: 'Viết một đoạn văn (100 từ) miêu tả một nét đẹp văn hóa trong quá khứ mà em mong muốn lưu giữ',
    speakingTopic: 'Bày tỏ điều ước (wishes) của em về sự thay đổi tích cực cho gia đình và cộng đồng'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 5,
    unitTitle: 'Unit 5: Wonders of Viet Nam',
    themeVi: 'Kỳ quan Việt Nam',
    icon: '🏰',
    vocab: 'Kỳ quan thiên nhiên, kiến trúc và di sản (fortress, geological, limestone, picturesque, spectacular)',
    grammarFocus: 'Câu bị động khách quan: It is said / believed / reported that... và Cấu trúc Suggest + V-ing / that + should',
    readingTopic: 'Đọc bài hướng dẫn du lịch khám phá Quần thể danh thắng Tràng An và Hoàng thành Thăng Long',
    listeningTopic: 'Nghe đoạn giới thiệu về Hang Sơn Đoòng - hang động tự nhiên lớn nhất hành tinh',
    writingTopic: 'Viết một bài viết ngắn giới thiệu về một danh lam thắng cảnh của Việt Nam cho khách du lịch',
    speakingTopic: 'Đưa ra các gợi ý và kế hoạch tham quan kỳ quan thiên nhiên cho đoàn du khách'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 6,
    unitTitle: 'Unit 6: Viet Nam: Then and Now',
    themeVi: 'Việt Nam: Xưa và Nay',
    icon: '⏳',
    vocab: 'Sự chuyển mình của đất nước qua các thời kỳ (modernization, infrastructure, tram, straw roof, transform)',
    grammarFocus: 'Thì Quá khứ hoàn thành (Past Perfect: had + V3/ed) và Ôn tập các cấu trúc tính từ đi với to-infinitive/that-clause',
    readingTopic: 'Đọc bài ký sự ảnh so sánh diện mạo thủ đô Hà Nội thời kỳ đầu thế kỷ 20 và hiện đại ngày nay',
    listeningTopic: 'Nghe cuộc phỏng vấn một cụ già 80 tuổi chia sẻ về sự phát triển vượt bậc của quê hương',
    writingTopic: 'Viết đoạn văn thuật lại những thay đổi lớn nhất ở nơi em đang sinh sống trong 10 năm qua',
    speakingTopic: 'Thảo luận về những cơ hội và thách thức của giới trẻ Việt Nam trong thời kỳ hội nhập quốc tế'
  }),
  buildReviewUnit(9, 1, 'Review 1: Học kì 1 (Part 1)', 'Ôn tập tổng hợp', 'Units 1 - 2 - 3'),
  buildReviewUnit(9, 2, 'Review 2: Ôn thi Học kì 1', 'Ôn tập tổng hợp cuối kì 1', 'Units 4 - 5 - 6'),
  buildSecondaryUnit(9, {
    unitNumber: 7,
    unitTitle: 'Unit 7: Natural Wonders of the World',
    themeVi: 'Kỳ quan thiên nhiên thế giới',
    icon: '🌋',
    vocab: 'Kỳ quan thế giới, địa chất và du lịch mạo hiểm (canyon, aurora, coral reef, glacier, majestic, biodiversity)',
    grammarFocus: 'Câu điều kiện loại 2 (If + S + V-ed/were, S + would/could + V-inf) diễn tả giả định không có thật ở hiện tại',
    readingTopic: 'Đọc bài viết về Rạn san hô Great Barrier Reef ở Úc và Hẻm núi Grand Canyon ở Mỹ',
    listeningTopic: 'Nghe nhà thám hiểm kể về trải nghiệm ngắm cực quang phương Bắc (Northern Lights)',
    writingTopic: 'Viết đoạn văn nêu giả định: Nếu em có cơ hội đến thăm một kỳ quan thế giới, em sẽ chọn nơi nào và làm gì?',
    speakingTopic: 'Thuyết trình về tầm quan trọng của việc bảo vệ các di sản thiên nhiên thế giới trước biến đổi khí hậu'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 8,
    unitTitle: 'Unit 8: Tourism',
    themeVi: 'Du lịch và Khám phá',
    icon: '✈️',
    vocab: 'Du lịch sinh thái, hành trình và dịch vụ du lịch (ecotourism, itinerary, expedition, hospitality, destination)',
    grammarFocus: 'Mệnh đề quan hệ xác định và không xác định (Defining and Non-defining relative clauses: who, whom, which, that, whose)',
    readingTopic: 'Đọc bài cẩm nang về du lịch có trách nhiệm (responsible tourism) và bảo vệ môi trường bản địa',
    listeningTopic: 'Nghe đoạn ghi âm tư vấn lựa chọn tour du lịch sinh thái tại vườn quốc gia Cát Tiên',
    writingTopic: 'Viết một lịch trình du lịch (travel itinerary) 3 ngày 2 đêm cho gia đình tại một điểm đến hấp dẫn',
    speakingTopic: 'Tranh luận về tác động của du lịch đại chúng (mass tourism) đối với đời sống người dân địa phương'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 9,
    unitTitle: 'Unit 9: World Englishes',
    themeVi: 'Tiếng Anh trên toàn thế giới',
    icon: '🌐',
    vocab: 'Ngôn ngữ toàn cầu, phương ngữ và ngữ âm (bilingual, fluent, accent, official language, dialect, intimidate)',
    grammarFocus: 'Mệnh đề quan hệ với Giới từ (in which, to whom...) và Rút gọn mệnh đề quan hệ',
    readingTopic: 'Đọc bài nghiên cứu về vị thế của tiếng Anh như một ngôn ngữ quốc tế (lingua franca) trong thời đại số',
    listeningTopic: 'Nghe các trích đoạn giọng nói tiếng Anh mang âm sắc khác nhau (Anh, Mỹ, Úc, Singapore, Ấn Độ)',
    writingTopic: 'Viết đoạn văn chia sẻ kinh nghiệm học từ vựng và cải thiện khả năng giao tiếp tiếng Anh tự tin',
    speakingTopic: 'Thảo luận về tầm quan trọng của việc học ngoại ngữ đối với cơ hội nghề nghiệp tương lai'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 10,
    unitTitle: 'Unit 10: Planet Earth & Space Exploration',
    themeVi: 'Trái Đất và Thám hiểm vũ trụ',
    icon: '🌌',
    vocab: 'Du hành không gian, trạm vũ trụ và thiên văn (astronomy, spacecraft, microgravity, orbit, cosmonaut, satellite)',
    grammarFocus: 'Thì Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous) và Ôn tập câu điều kiện hỗn hợp',
    readingTopic: 'Đọc bài viết về Trạm Vũ trụ Quốc tế (ISS) và các thí nghiệm sinh học trong môi trường không trọng lực',
    listeningTopic: 'Nghe đoạn băng ghi âm cuộc liên lạc giữa trung tâm điều khiển mặt đất và các phi hành gia ngoài không gian',
    writingTopic: 'Viết một đoạn văn (100-120 từ) bàn về việc liệu con người có nên đầu tư vào thám hiểm không gian',
    speakingTopic: 'Chia sẻ hiểu biết về anh hùng Phạm Tuân - người Việt Nam và châu Á đầu tiên bay vào vũ trụ'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 11,
    unitTitle: 'Unit 11: Electronic Devices & AI',
    themeVi: 'Thiết bị điện tử & Trí tuệ nhân tạo',
    icon: '💻',
    vocab: 'Thiết bị thông minh, thuật toán và tự động hóa (wearable device, algorithm, virtual assistant, cybersecurity)',
    grammarFocus: 'Câu bị động với Động từ khuyết thiếu (Modal verbs in passive voice: can/should/must + be + V3/ed)',
    readingTopic: 'Đọc bài báo về tác động của trí tuệ nhân tạo (AI) đối với giáo dục và phương pháp tự học của học sinh',
    listeningTopic: 'Nghe chuyên gia an ninh mạng cảnh báo về cách bảo vệ thông tin cá nhân trên không gian mạng',
    writingTopic: 'Viết đoạn văn bàn luận về việc sử dụng điện thoại thông minh và máy tính bảng trong giờ học',
    speakingTopic: 'Tranh biện: Trí tuệ nhân tạo sẽ thay thế hay hỗ trợ con người trong công việc tương lai?'
  }),
  buildSecondaryUnit(9, {
    unitNumber: 12,
    unitTitle: 'Unit 12: Career Paths',
    themeVi: 'Định hướng nghề nghiệp tương lai',
    icon: '👔',
    vocab: 'Nghề nghiệp, kỹ năng làm việc và phẩm chất (profession, qualification, apprenticeship, career adviser, passion)',
    grammarFocus: 'Mệnh đề trạng ngữ chỉ sự nhượng bộ, mục đích và kết quả (so that, in order that, despite the fact that)',
    readingTopic: 'Đọc bài trắc nghiệm định hướng nghề nghiệp và những kỹ năng cốt lõi của công dân thế kỷ 21',
    listeningTopic: 'Nghe chia sẻ của các chuyên gia tư vấn tuyển sinh về cách chọn ngành nghề phù hợp với năng lực',
    writingTopic: 'Viết một bài luận ngắn (100-120 từ) miêu tả nghề nghiệp mơ ước trong tương lai và kế hoạch phấn đấu',
    speakingTopic: 'Phỏng vấn xin việc giả định (Mock interview) và trả lời các câu hỏi về điểm mạnh, điểm yếu của bản thân'
  }),
  buildReviewUnit(9, 3, 'Review 3: Học kì 2 (Part 1)', 'Ôn tập tổng hợp', 'Units 7 - 8 - 9'),
  buildReviewUnit(9, 4, 'Review 4: Ôn thi Vào Lớp 10', 'Ôn tập tổng lực thi chuyển cấp', 'Toàn bộ chương trình Lớp 9')
];
