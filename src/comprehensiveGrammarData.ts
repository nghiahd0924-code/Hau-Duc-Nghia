import { GrammarLesson } from './types';

export const COMPREHENSIVE_GRAMMAR_LESSONS: GrammarLesson[] = [
  // 1. CÁC THÌ ĐỘNG TỪ (TENSES)
  {
    id: 'present_simple',
    titleVi: 'Thì Hiện Tại Đơn',
    titleEn: 'Present Simple Tense',
    category: 'tenses',
    categoryLabel: 'Các thì động từ',
    levelBadge: 'Căn bản & Cốt lõi',
    formulaSummary: 'Khẳng định: S + V(s/es) | Phủ định: S + do/does not + V_inf',
    shortDescription: 'Diễn tả thói quen lặp đi lặp lại, sự thật hiển nhiên, chân lý hoặc lịch trình cố định.',
    theoryOverview: {
      definition: 'Thì hiện tại đơn diễn tả một hành động lặp đi lặp lại như một thói quen, một sự thật hiển nhiên hoặc một lịch trình đã định sẵn.',
      rules: [
        { rule: 'Khẳng định với To Be', example: 'I am a student. / He is friendly. / They are happy.' },
        { rule: 'Khẳng định với Động từ thường', example: 'I/You/We/They + V_nguyên thể (They play football). He/She/It + V-s/es (She watches TV).' },
        { rule: 'Quy tắc thêm -es', example: 'Động từ tận cùng là -o, -s, -ch, -x, -sh, -z thêm -es: watch -> watches, go -> goes.' },
        { rule: 'Phủ định & Nghi vấn', example: 'Does she like milk? - No, she does not (doesn\'t) like milk.' }
      ],
      signalWords: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'every day', 'every weekend', 'once a week'],
      commonMistakes: [
        'Quên thêm -s/-es khi chủ ngữ là ngôi thứ ba số ít (he/she/it).',
        'Vẫn giữ -s/-es trong câu phủ định hoặc nghi vấn dù đã có trợ động từ does/doesn\'t.'
      ]
    },
    questions: [
      {
        id: 101,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: 'The Earth _______ around the Sun.',
        options: ['move', 'moves', 'is moving', 'moved'],
        correctAnswer: 'moves',
        hintExplanation: 'Diễn tả chân lý, sự thật hiển nhiên: Chủ ngữ "The Earth" là ngôi thứ ba số ít nên động từ thêm -s ("moves").'
      },
      {
        id: 102,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: 'My brother _______ coffee in the evening because it keeps him awake.',
        options: ["doesn't drink", "don't drink", 'not drinks', 'drinks not'],
        correctAnswer: "doesn't drink",
        hintExplanation: '"My brother" là chủ ngữ số ít, câu phủ định dùng trợ động từ "doesn\'t + V-nguyên thể" (doesn\'t drink).'
      },
      {
        id: 103,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: '_______ your parents live in Da Nang City?',
        options: ['Do', 'Does', 'Are', 'Is'],
        correctAnswer: 'Do',
        hintExplanation: '"your parents" (bố mẹ bạn) là danh từ số nhiều, câu hỏi thì hiện tại đơn với động từ thường "live" phải dùng trợ động từ "Do".'
      },
      {
        id: 104,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: 'He usually _______ his teeth twice a day.',
        options: ['brush', 'brushes', 'brushing', 'brushed'],
        correctAnswer: 'brushes',
        hintExplanation: 'Trạng từ chỉ tần suất "usually" và chủ ngữ "He" đòi hỏi động từ kết thúc bằng đuôi -sh phải thêm -es -> "brushes".'
      },
      {
        id: 105,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: 'The train to Hanoi _______ at 6:00 AM tomorrow morning.',
        options: ['leave', 'leaves', 'is leaving', 'left'],
        correctAnswer: 'leaves',
        hintExplanation: 'Hiện tại đơn dùng để diễn tả lịch trình tàu xe, máy bay cố định: "The train" số ít nên động từ chia "leaves".'
      },
      {
        id: 106,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: 'Water _______ at 100 degrees Celsius.',
        options: ['boil', 'boils', 'is boiling', 'boiled'],
        correctAnswer: 'boils',
        hintExplanation: 'Sự thật khoa học hiển nhiên: "Water" là danh từ không đếm được (tương đương số ít), chia "boils".'
      },
      {
        id: 107,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: 'How often _______ she go to the English library?',
        options: ['do', 'does', 'is', 'has'],
        correctAnswer: 'does',
        hintExplanation: 'Câu hỏi tần suất với chủ ngữ "she" và động từ thường "go" cần mượn trợ động từ "does".'
      },
      {
        id: 108,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: 'They _______ play badminton on rainy days.',
        options: ['never', 'always does', 'not', 'rare'],
        correctAnswer: 'never',
        hintExplanation: '"never" là trạng từ chỉ tần suất đứng trước động từ thường "play".'
      },
      {
        id: 109,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: 'My father _______ a teacher. He _______ English at a secondary school.',
        options: ['is / teaches', 'are / teach', 'is / teach', 'be / teaches'],
        correctAnswer: 'is / teaches',
        hintExplanation: '"My father" số ít đi với to be "is" và động từ thường "teach" có đuôi -ch nên thêm -es -> "teaches".'
      },
      {
        id: 110,
        topic: 'present_simple',
        topicTitle: 'Thì Hiện tại đơn',
        prompt: 'What time _______ the library close on Saturdays?',
        options: ['do', 'does', 'is', 'has'],
        correctAnswer: 'does',
        hintExplanation: '"the library" là chủ ngữ ngôi thứ ba số ít, câu hỏi dùng trợ động từ "does".'
      }
    ]
  },

  {
    id: 'present_continuous',
    titleVi: 'Thì Hiện Tại Tiếp Diễn',
    titleEn: 'Present Continuous Tense',
    category: 'tenses',
    categoryLabel: 'Các thì động từ',
    levelBadge: 'Căn bản & Thực hành',
    formulaSummary: 'S + am/is/are + V-ing',
    shortDescription: 'Diễn tả hành động đang xảy ra ngay lúc nói, hoặc xu hướng thay đổi tạm thời.',
    theoryOverview: {
      definition: 'Thì hiện tại tiếp diễn dùng để diễn đạt một hành động đang diễn ra tại thời điểm nói hoặc xung quanh thời điểm nói.',
      rules: [
        { rule: 'Cấu trúc khẳng định', example: 'I am studying. / She is reading a book. / We are listening to music.' },
        { rule: 'Cấu trúc phủ định', example: 'S + am/is/are + not + V-ing (He isn\'t watching TV right now).' },
        { rule: 'Động từ không chia tiếp diễn (Stative Verbs)', example: 'Các từ chỉ cảm xúc, giác quan, sở hữu: know, like, love, understand, believe, want...' }
      ],
      signalWords: ['now', 'right now', 'at the moment', 'at present', 'Look!', 'Listen!', 'Be quiet!'],
      commonMistakes: [
        'Chia V-ing với các động từ chỉ nhận thức, tri giác như: know, love, hate, want, understand (Không nói: "I am knowing him").'
      ]
    },
    questions: [
      {
        id: 201,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'Look! The little birds _______ their morning song in the tree.',
        options: ['sing', 'are singing', 'sang', 'is singing'],
        correctAnswer: 'are singing',
        hintExplanation: 'Dấu hiệu "Look!" chỉ hành động đang diễn ra trước mắt. "The little birds" số nhiều nên đi với "are singing".'
      },
      {
        id: 202,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'Please be quiet! My baby brother _______ in the bedroom.',
        options: ['sleeps', 'is sleeping', 'slept', 'are sleeping'],
        correctAnswer: 'is sleeping',
        hintExplanation: '"Please be quiet!" là dấu hiệu hành động đang diễn ra. "My baby brother" số ít nên chia "is sleeping".'
      },
      {
        id: 203,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'I cannot hear what you are saying because everyone _______ loudly.',
        options: ['talks', 'is talking', 'are talking', 'talked'],
        correctAnswer: 'is talking',
        hintExplanation: 'Đại từ bất định "everyone" luôn đi với động từ số ít, thì tiếp diễn chia "is talking".'
      },
      {
        id: 204,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'Which sentence is grammatically correct?',
        options: [
          'I am understanding this grammar rule now.',
          'I understand this grammar rule now.',
          'I understanding this grammar rule now.',
          'I am understand this grammar rule now.'
        ],
        correctAnswer: 'I understand this grammar rule now.',
        hintExplanation: '"understand" là động từ chỉ nhận thức (stative verb), không chia ở dạng tiếp diễn dù có từ "now".'
      },
      {
        id: 205,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'Where is Linda? - She _______ in the garden with her cat.',
        options: ['plays', 'is playing', 'played', 'playing'],
        correctAnswer: 'is playing',
        hintExplanation: 'Hành động đang diễn ra ngay lúc được hỏi: "She is playing".'
      },
      {
        id: 206,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'We _______ our final project at the moment, so we are very busy.',
        options: ['do', 'are doing', 'did', 'have done'],
        correctAnswer: 'are doing',
        hintExplanation: 'Dấu hiệu "at the moment" chỉ thì hiện tại tiếp diễn: "We are doing".'
      },
      {
        id: 207,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'Listen! Someone _______ at the front door.',
        options: ['knocks', 'is knocking', 'knocked', 'are knocking'],
        correctAnswer: 'is knocking',
        hintExplanation: '"Listen!" báo hiệu hành động đang diễn ra ngay lúc nói. "Someone" số ít đi với "is knocking".'
      },
      {
        id: 208,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'Why _______ you _______ your heavy winter coat today? It is quite warm.',
        options: ['are / wearing', 'do / wear', 'did / wear', 'have / worn'],
        correctAnswer: 'are / wearing',
        hintExplanation: 'Hành động đang diễn ra trong ngày hôm nay: "Why are you wearing...".'
      },
      {
        id: 209,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'The world\'s climate _______ warmer year by year.',
        options: ['gets', 'is getting', 'got', 'was getting'],
        correctAnswer: 'is getting',
        hintExplanation: 'Hiện tại tiếp diễn diễn tả một xu hướng biến đổi dần dần: "is getting warmer".'
      },
      {
        id: 210,
        topic: 'present_continuous',
        topicTitle: 'Thì Hiện tại tiếp diễn',
        prompt: 'I am sorry, but Tom cannot answer the phone right now. He _______ a bath.',
        options: ['takes', 'is taking', 'has taken', 'took'],
        correctAnswer: 'is taking',
        hintExplanation: '"right now" báo hiệu hành động đang diễn ra ngay lúc gọi: "He is taking a bath".'
      }
    ]
  },

  {
    id: 'past_simple',
    titleVi: 'Thì Quá Khứ Đơn',
    titleEn: 'Past Simple Tense',
    category: 'tenses',
    categoryLabel: 'Các thì động từ',
    levelBadge: 'Căn bản & Thường gặp',
    formulaSummary: 'S + V2/ed | S + did not + V_inf | was / were',
    shortDescription: 'Diễn tả hành động đã bắt đầu và kết thúc hoàn toàn tại một thời điểm xác định trong quá khứ.',
    theoryOverview: {
      definition: 'Thì quá khứ đơn diễn đạt một hành động đã xảy ra và chấm dứt hoàn toàn trong quá khứ, có thời gian xác định.',
      rules: [
        { rule: 'Với To Be', example: 'I/He/She/It was at home yesterday. We/You/They were happy.' },
        { rule: 'Động từ có quy tắc (-ed)', example: 'visit -> visited, play -> played, study -> studied.' },
        { rule: 'Động từ bất quy tắc (V2)', example: 'go -> went, see -> saw, buy -> bought, have -> had.' },
        { rule: 'Phủ định & Nghi vấn', example: 'Did you see Peter yesterday? - No, I didn\'t see him.' }
      ],
      signalWords: ['yesterday', 'ago (two days ago)', 'last night', 'last week', 'in 2015', 'when I was young'],
      commonMistakes: [
        'Vẫn chia V2/ed sau trợ động từ did/didn\'t (Sai: "I didn\'t went" -> Đúng: "I didn\'t go").'
      ]
    },
    questions: [
      {
        id: 301,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: 'My family _______ to Nha Trang for our summer holiday last year.',
        options: ['go', 'goes', 'went', 'have gone'],
        correctAnswer: 'went',
        hintExplanation: 'Dấu hiệu "last year" chỉ hành động đã kết thúc trong quá khứ. Động từ bất quy tắc của "go" ở quá khứ là "went".'
      },
      {
        id: 302,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: 'They _______ the famous movie yesterday because they were busy.',
        options: ["didn't watch", "didn't watched", "don't watch", "haven't watched"],
        correctAnswer: "didn't watch",
        hintExplanation: 'Câu phủ định thì quá khứ đơn có cấu trúc: "didn\'t + V-nguyên thể" -> "didn\'t watch".'
      },
      {
        id: 303,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: 'Where _______ you two hours ago?',
        options: ['was', 'were', 'did', 'are'],
        correctAnswer: 'were',
        hintExplanation: '"ago" là dấu hiệu quá khứ. Chủ ngữ "you" đi với động từ to be ở quá khứ là "were".'
      },
      {
        id: 304,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: 'Alexander Graham Bell _______ the telephone in 1876.',
        options: ['invent', 'invents', 'invented', 'was inventing'],
        correctAnswer: 'invented',
        hintExplanation: 'Mốc thời gian xác định trong quá khứ "in 1876", động từ có quy tắc thêm -ed -> "invented".'
      },
      {
        id: 305,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: '_______ did you buy that lovely green notebook? - I bought it at the bookstore.',
        options: ['When', 'Where', 'Why', 'Who'],
        correctAnswer: 'Where',
        hintExplanation: 'Câu trả lời "at the bookstore" (ở hiệu sách) là địa điểm nên từ để hỏi phải là "Where".'
      },
      {
        id: 306,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: 'She _______ late for school yesterday because of the heavy traffic.',
        options: ['is', 'was', 'were', 'been'],
        correctAnswer: 'was',
        hintExplanation: '"yesterday" chỉ quá khứ. Chủ ngữ "She" đi với to be số ít "was".'
      },
      {
        id: 307,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: 'We _______ dinner at a cozy Italian restaurant two days ago.',
        options: ['have', 'has', 'had', 'having'],
        correctAnswer: 'had',
        hintExplanation: '"two days ago" chỉ quá khứ đơn, dạng quá khứ của "have" là "had".'
      },
      {
        id: 308,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: 'Did you _______ your keys this morning?',
        options: ['find', 'found', 'finding', 'finds'],
        correctAnswer: 'find',
        hintExplanation: 'Sau trợ động từ "Did" trong câu hỏi thì động từ chính trở về dạng nguyên mẫu không "to" -> "find".'
      },
      {
        id: 309,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: 'I _______ a great novel all day yesterday.',
        options: ['read', 'reads', 'reading', 'have read'],
        correctAnswer: 'read',
        hintExplanation: 'Động từ "read" viết ở quá khứ vẫn giữ nguyên chính tả là "read" (phát âm là /red/).'
      },
      {
        id: 310,
        topic: 'past_simple',
        topicTitle: 'Thì Quá khứ đơn',
        prompt: 'When he was small, he _______ up trees very easily.',
        options: ['climbs', 'climbed', 'is climbing', 'has climbed'],
        correctAnswer: 'climbed',
        hintExplanation: '"When he was small" chỉ một hành động hoặc thói quen trong quá khứ -> chia quá khứ đơn "climbed".'
      }
    ]
  },

  {
    id: 'present_perfect',
    titleVi: 'Thì Hiện Tại Hoàn Thành',
    titleEn: 'Present Perfect Tense',
    category: 'tenses',
    categoryLabel: 'Các thì động từ',
    levelBadge: 'Trọng tâm & Nâng cao',
    formulaSummary: 'S + have/has + V3/ed',
    shortDescription: 'Diễn tả hành động xảy ra trong quá khứ kéo dài đến hiện tại, hoặc trải nghiệm cuộc đời.',
    theoryOverview: {
      definition: 'Thì hiện tại hoàn thành kết nối quá khứ với hiện tại: hành động đã xảy ra không rõ thời gian, vừa mới xảy ra, hoặc đã bắt đầu trong quá khứ và vẫn tiếp diễn.',
      rules: [
        { rule: 'Cấu trúc', example: 'I/You/We/They + have + V3/ed. He/She/It + has + V3/ed.' },
        { rule: 'Phân biệt Since và For', example: 'Since + Mốc thời gian (since 2010, since last week). For + Khoảng thời gian (for 5 years, for two hours).' },
        { rule: 'Vị trí của Just, Already, Yet', example: 'I have just finished (giữa have và V3). Have you finished yet? (cuối câu phủ định/nghi vấn).' }
      ],
      signalWords: ['already', 'yet', 'just', 'ever', 'never', 'since', 'for', 'recently', 'so far', 'up to now'],
      commonMistakes: [
        'Nhầm lẫn dùng thì quá khứ đơn khi có mốc thời gian không xác định hoặc khi có "since/for".',
        'Dùng "yet" trong câu khẳng định (Yet chỉ dùng trong câu phủ định và nghi vấn).'
      ]
    },
    questions: [
      {
        id: 401,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'I have lived in this beautiful city _______ 2015.',
        options: ['for', 'since', 'in', 'at'],
        correctAnswer: 'since',
        hintExplanation: '"2015" là mốc thời gian xác định bắt đầu hành động, do đó ta dùng giới từ "since".'
      },
      {
        id: 402,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'Have you _______ seen a real panda in person?',
        options: ['ever', 'never', 'yet', 'just'],
        correctAnswer: 'ever',
        hintExplanation: '"ever" (đã từng) thường được dùng trong câu hỏi thì hiện tại hoàn thành để hỏi về trải nghiệm.'
      },
      {
        id: 403,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'She _______ her homework yet, so she cannot play video games.',
        options: ["hasn't finished", "didn't finish", "doesn't finish", "haven't finished"],
        correctAnswer: "hasn't finished",
        hintExplanation: 'Từ "yet" ở cuối câu phủ định chỉ thì hiện tại hoàn thành. Chủ ngữ "She" đi với "hasn\'t finished".'
      },
      {
        id: 404,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'Mr. Brown has taught English at this school _______ ten years.',
        options: ['since', 'for', 'during', 'from'],
        correctAnswer: 'for',
        hintExplanation: '"ten years" là một khoảng thời gian (duration), vì vậy ta dùng giới từ "for".'
      },
      {
        id: 405,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'Be careful! The paint is still wet; I have _______ painted the fence.',
        options: ['just', 'yet', 'ever', 'since'],
        correctAnswer: 'just',
        hintExplanation: '"just" (vừa mới) đứng giữa have và V3 diễn tả hành động vừa mới kết thúc để lại kết quả ở hiện tại.'
      },
      {
        id: 406,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'They _______ to Da Lat three times this year.',
        options: ['have been', 'have gone', 'went', 'were'],
        correctAnswer: 'have been',
        hintExplanation: '"have been to" diễn tả đã từng đến một nơi nào đó và đã quay trở về (trải nghiệm).'
      },
      {
        id: 407,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'This is the first time I _______ such a breathtaking sunset.',
        options: ['see', 'saw', 'have seen', 'had seen'],
        correctAnswer: 'have seen',
        hintExplanation: 'Cấu trúc "This is the first/second time + S + have/has + V3/ed" diễn tả số lần trải nghiệm.'
      },
      {
        id: 408,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'Tom has already _______ all his science assignments.',
        options: ['submit', 'submitted', 'submitting', 'submits'],
        correctAnswer: 'submitted',
        hintExplanation: 'Sau trợ động từ "has" trong thì hiện tại hoàn thành là quá khứ phân từ V3/ed -> "submitted".'
      },
      {
        id: 409,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'How long _______ you _______ your best friend?',
        options: ['have / known', 'did / know', 'do / know', 'are / knowing'],
        correctAnswer: 'have / known',
        hintExplanation: '"How long" hỏi về khoảng thời gian kéo dài từ quá khứ đến nay -> dùng thì hiện tại hoàn thành "have you known".'
      },
      {
        id: 410,
        topic: 'present_perfect',
        topicTitle: 'Thì Hiện tại hoàn thành',
        prompt: 'I cannot find my keys. I think I _______ them.',
        options: ['lost', 'have lost', 'lose', 'am losing'],
        correctAnswer: 'have lost',
        hintExplanation: 'Hành động làm mất chìa khóa đã xảy ra trong quá khứ nhưng để lại hậu quả hiện tại không vào được nhà -> chia hiện tại hoàn thành "have lost".'
      }
    ]
  },

  {
    id: 'passive_voice',
    titleVi: 'Câu Bị Động Toàn Diện',
    titleEn: 'Passive Voice',
    category: 'structures',
    categoryLabel: 'Cấu trúc câu',
    levelBadge: 'Trọng tâm SGK & Thi',
    formulaSummary: 'S + Be (chia theo thì) + V3/ed (+ by + O)',
    shortDescription: 'Nhấn mạnh đối tượng chịu tác động của hành động thay vì người thực hiện.',
    theoryOverview: {
      definition: 'Câu bị động được dùng khi muốn nhấn mạnh vào bản thân hành động hoặc người/vật chịu tác động hơn là đối tượng thực hiện hành động.',
      rules: [
        { rule: 'Hiện tại đơn bị động', example: 'S + am/is/are + V3/ed (English is spoken all over the world).' },
        { rule: 'Quá khứ đơn bị động', example: 'S + was/were + V3/ed (The letter was sent yesterday).' },
        { rule: 'Hiện tại hoàn thành bị động', example: 'S + have/has + been + V3/ed (The bridge has been built recently).' },
        { rule: 'Động từ khuyết thiếu bị động', example: 'S + modal verb + be + V3/ed (This task must be done right now).' }
      ],
      signalWords: ['by + tác nhân', 'is made of', 'was built in', 'be done', 'be cleaned'],
      commonMistakes: [
        'Quên chia động từ "to be" tương ứng với thì của câu chủ động.',
        'Nhầm lẫn quá khứ phân từ V3 của các động từ bất quy tắc (ví dụ: write -> written, speak -> spoken).'
      ]
    },
    questions: [
      {
        id: 501,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'This famous novel _______ by Charles Dickens in the 19th century.',
        options: ['wrote', 'is written', 'was written', 'has written'],
        correctAnswer: 'was written',
        hintExplanation: 'Câu ở thì quá khứ ("in the 19th century"), chủ ngữ "This famous novel" số ít chịu tác động -> "was written".'
      },
      {
        id: 502,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'English _______ as a compulsory subject in almost every school in Vietnam.',
        options: ['teaches', 'is taught', 'was taught', 'taught'],
        correctAnswer: 'is taught',
        hintExplanation: 'Hiện tại đơn mang tính chân lý/thực tế: "English is taught" (Tiếng Anh được dạy).'
      },
      {
        id: 503,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'All plastic bottles should _______ to protect the environment.',
        options: ['recycle', 'be recycled', 'being recycled', 'recycled'],
        correctAnswer: 'be recycled',
        hintExplanation: 'Sau động từ khuyết thiếu "should", thể bị động là "modal + be + V3/ed" -> "should be recycled".'
      },
      {
        id: 504,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'A new modern bridge _______ across the river since last month.',
        options: ['has built', 'has been built', 'was built', 'is building'],
        correctAnswer: 'has been built',
        hintExplanation: 'Dấu hiệu "since last month" kết hợp thể bị động của hiện tại hoàn thành: "has been + V3/ed" -> "has been built".'
      },
      {
        id: 505,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'The classroom floors _______ by the students every afternoon.',
        options: ['clean', 'are cleaned', 'is cleaned', 'cleaned'],
        correctAnswer: 'are cleaned',
        hintExplanation: '"The classroom floors" là chủ ngữ số nhiều, bị động hiện tại đơn chia "are cleaned".'
      },
      {
        id: 506,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'The stolen car _______ by the local police two days ago.',
        options: ['found', 'was found', 'is found', 'has been found'],
        correctAnswer: 'was found',
        hintExplanation: '"two days ago" là thì quá khứ đơn, bị động với chủ ngữ số ít là "was found".'
      },
      {
        id: 507,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'Thousands of trees _______ in the national park next spring.',
        options: ['will plant', 'will be planted', 'are planted', 'were planted'],
        correctAnswer: 'will be planted',
        hintExplanation: '"next spring" là tương lai đơn, bị động tương lai đơn có cấu trúc "will be + V3/ed" -> "will be planted".'
      },
      {
        id: 508,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'This delicious cake was made _______ my grandmother.',
        options: ['with', 'by', 'for', 'from'],
        correctAnswer: 'by',
        hintExplanation: 'Giới từ "by" đứng trước tác nhân trực tiếp thực hiện hành động trong câu bị động ("by my grandmother").'
      },
      {
        id: 509,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'These ancient monuments must _______ carefully from bad weather.',
        options: ['protect', 'be protected', 'protected', 'being protected'],
        correctAnswer: 'be protected',
        hintExplanation: 'Bị động với modal verb "must": "must be protected".'
      },
      {
        id: 510,
        topic: 'passive_voice',
        topicTitle: 'Câu bị động',
        prompt: 'The light bulb was invented _______ Thomas Edison.',
        options: ['by', 'of', 'in', 'at'],
        correctAnswer: 'by',
        hintExplanation: '"was invented by" (được phát minh bởi ai).'
      }
    ]
  },

  {
    id: 'conditionals_1_2',
    titleVi: 'Câu Điều Kiện Loại 1 & Loại 2',
    titleEn: 'Conditionals (Type 1 & Type 2)',
    category: 'structures',
    categoryLabel: 'Cấu trúc câu',
    levelBadge: 'Trọng tâm SGK',
    formulaSummary: 'L1: If + S + V(s/es), S + will + V | L2: If + S + V2/were, S + would + V',
    shortDescription: 'Diễn tả điều kiện có thể xảy ra ở hiện tại/tương lai (Loại 1) hoặc giả định trái với thực tế hiện tại (Loại 2).',
    theoryOverview: {
      definition: 'Câu điều kiện gồm 2 mệnh đề: Mệnh đề điều kiện (If-clause) và mệnh đề chính (Main clause).',
      rules: [
        { rule: 'Loại 1 (Có thể xảy ra ở hiện tại/tương lai)', example: 'If it rains tomorrow, we will stay at home.' },
        { rule: 'Loại 2 (Giả định trái với hiện tại)', example: 'If I had a million dollars, I would travel around the world.' },
        { rule: 'To Be trong Loại 2', example: 'To be luôn ưu tiên dùng "were" cho mọi ngôi (If I were you, I would take that job).' },
        { rule: 'Unless = If... not', example: 'Unless you study hard, you will fail = If you don\'t study hard, you will fail.' }
      ],
      signalWords: ['If', 'Unless', 'will / won\'t', 'would / wouldn\'t', 'were'],
      commonMistakes: [
        'Dùng "will" hoặc "would" ngay trong mệnh đề If (Sai: "If I will go" -> Đúng: "If I go").'
      ]
    },
    questions: [
      {
        id: 601,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'If it _______ sunny this weekend, we will go on a picnic in the park.',
        options: ['is', 'will be', 'was', 'were'],
        correctAnswer: 'is',
        hintExplanation: 'Câu điều kiện loại 1: Mệnh đề If chia ở hiện tại đơn (is), mệnh đề chính chia will + V.'
      },
      {
        id: 602,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'If I _______ you, I would apologize to the teacher immediately.',
        options: ['am', 'was', 'were', 'have been'],
        correctAnswer: 'were',
        hintExplanation: 'Câu điều kiện loại 2 giả định trái ngược với hiện tại, động từ to be ở mệnh đề If luôn dùng "were" cho mọi ngôi.'
      },
      {
        id: 603,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'What _______ you do if you found a wallet full of money on the street?',
        options: ['will', 'would', 'do', 'did'],
        correctAnswer: 'would',
        hintExplanation: 'Mệnh đề If chia quá khứ đơn ("found") -> Đây là điều kiện loại 2, mệnh đề chính dùng "would + V_inf".'
      },
      {
        id: 604,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'Unless you _______ your teeth regularly, you will get toothaches.',
        options: ['brush', "don't brush", 'brushed', 'will brush'],
        correctAnswer: 'brush',
        hintExplanation: '"Unless" bản thân đã mang nghĩa phủ định (= If you do not), do đó động từ đi sau chia ở dạng khẳng định: "Unless you brush".'
      },
      {
        id: 605,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'If she had more free time, she _______ a musical instrument.',
        options: ['learns', 'will learn', 'would learn', 'learned'],
        correctAnswer: 'would learn',
        hintExplanation: 'Điều kiện loại 2 ("If she had"): mệnh đề chính dùng "would + V_inf" -> "would learn".'
      },
      {
        id: 606,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'If we hurry up, we _______ the early morning express train.',
        options: ['catch', 'will catch', 'caught', 'would catch'],
        correctAnswer: 'will catch',
        hintExplanation: 'Điều kiện loại 1 diễn tả sự việc có thể xảy ra ở tương lai: "we will catch".'
      },
      {
        id: 607,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'If plants do not get enough sunlight and water, they _______.',
        options: ['die', 'will die', 'would die', 'died'],
        correctAnswer: 'die',
        hintExplanation: 'Câu điều kiện loại 0 diễn tả quy luật tự nhiên, khoa học hiển nhiên: Cả hai vế đều chia hiện tại đơn -> "die".'
      },
      {
        id: 608,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'If he _______ harder, he would pass the final examination with high marks.',
        options: ['studies', 'studied', 'study', 'had studied'],
        correctAnswer: 'studied',
        hintExplanation: 'Vế chính có "would pass" (Loại 2) nên vế If phải chia thì quá khứ đơn -> "studied".'
      },
      {
        id: 609,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'Unless it rains, we _______ football on the school field this afternoon.',
        options: ['play', 'will play', 'played', 'would play'],
        correctAnswer: 'will play',
        hintExplanation: 'Cấu trúc loại 1 với Unless: mệnh đề chính dùng "will play".'
      },
      {
        id: 610,
        topic: 'conditionals',
        topicTitle: 'Câu điều kiện',
        prompt: 'If I lived near the sea, I _______ swimming every single morning.',
        options: ['go', 'will go', 'would go', 'went'],
        correctAnswer: 'would go',
        hintExplanation: 'Điều kiện loại 2 giả định ("If I lived"): mệnh đề chính dùng "would go".'
      }
    ]
  },

  {
    id: 'relative_clauses',
    titleVi: 'Mệnh Đề Quan Hệ',
    titleEn: 'Relative Clauses',
    category: 'structures',
    categoryLabel: 'Cấu trúc câu',
    levelBadge: 'Nâng cao & Điểm cao',
    formulaSummary: 'Who (người) | Whom (tân ngữ) | Which (vật) | Whose (sở hữu) | That (thay thế)',
    shortDescription: 'Dùng đại từ quan hệ để nối hai câu, bổ nghĩa và làm rõ cho danh từ đứng trước.',
    theoryOverview: {
      definition: 'Mệnh đề quan hệ là mệnh đề phụ dùng để giải thích rõ hơn cho danh từ đứng trước nó.',
      rules: [
        { rule: 'Who', example: 'Thay thế cho danh từ chỉ người làm chủ ngữ (The girl who is singing is my sister).' },
        { rule: 'Which', example: 'Thay thế cho danh từ chỉ con vật hoặc đồ vật (The book which is on the table is interesting).' },
        { rule: 'Whose', example: 'Thay thế cho tính từ sở hữu (The boy whose father is a doctor is my classmate).' },
        { rule: 'That', example: 'Có thể thay thế cho Who/Which trong mệnh đề quan hệ xác định (không có dấu phẩy).' },
        { rule: 'Mệnh đề không xác định (Non-defining)', example: 'Có dấu phẩy, dùng để bổ sung thông tin cho danh từ riêng; KHÔNG được dùng "that".' }
      ],
      signalWords: ['who', 'whom', 'which', 'that', 'whose', 'where (nơi chốn)', 'when (thời gian)'],
      commonMistakes: [
        'Dùng "that" trong mệnh đề quan hệ không xác định (có dấu phẩy).'
      ]
    },
    questions: [
      {
        id: 701,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'The young teacher _______ teaches us mathematics is very kind and patient.',
        options: ['who', 'which', 'whom', 'whose'],
        correctAnswer: 'who',
        hintExplanation: '"The young teacher" là danh từ chỉ người đóng vai trò chủ ngữ của động từ "teaches", nên dùng đại từ quan hệ "who".'
      },
      {
        id: 702,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'The laptop _______ I bought last month has a very long battery life.',
        options: ['who', 'which', 'whose', 'whom'],
        correctAnswer: 'which',
        hintExplanation: '"The laptop" là danh từ chỉ đồ vật, đại từ quan hệ thay thế là "which" (hoặc that).'
      },
      {
        id: 703,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'Do you know the boy _______ dog won the first prize in the pet show?',
        options: ['who', 'whom', 'whose', 'which'],
        correctAnswer: 'whose',
        hintExplanation: '"whose" dùng để chỉ sở hữu: chú chó của cậu bé ("whose dog").'
      },
      {
        id: 704,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'Ha Long Bay, _______ is located in Quang Ninh province, is recognized as a UNESCO World Heritage Site.',
        options: ['which', 'that', 'where', 'who'],
        correctAnswer: 'which',
        hintExplanation: 'Đây là mệnh đề quan hệ không xác định (có dấu phẩy), bổ nghĩa cho danh từ riêng, tuyệt đối KHÔNG dùng "that", phải dùng "which".'
      },
      {
        id: 705,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'That is the old high school _______ my parents first met each other.',
        options: ['where', 'which', 'when', 'who'],
        correctAnswer: 'where',
        hintExplanation: '"high school" ở đây là địa điểm nơi diễn ra hành động gặp gỡ -> dùng trạng từ quan hệ nơi chốn "where".'
      },
      {
        id: 706,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'I will never forget the day _______ we won the national championship.',
        options: ['when', 'where', 'which', 'who'],
        correctAnswer: 'when',
        hintExplanation: '"the day" là danh từ chỉ thời gian, trạng từ quan hệ tương ứng là "when".'
      },
      {
        id: 707,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'The woman _______ you were talking to is our new school principal.',
        options: ['whom', 'which', 'whose', 'where'],
        correctAnswer: 'whom',
        hintExplanation: '"The woman" là người làm tân ngữ cho giới từ "to" -> dùng "whom" (hoặc who trong văn nói).'
      },
      {
        id: 708,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'This is the most interesting book _______ I have ever read.',
        options: ['that', 'which', 'who', 'whose'],
        correctAnswer: 'that',
        hintExplanation: 'Sau các cấu trúc so sánh nhất ("the most interesting"), đại từ quan hệ ưu tiên bắt buộc dùng là "that".'
      },
      {
        id: 709,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'The scientist _______ discovered penicillin was Alexander Fleming.',
        options: ['who', 'which', 'whose', 'whom'],
        correctAnswer: 'who',
        hintExplanation: '"The scientist" là danh từ chỉ người làm chủ ngữ -> dùng "who".'
      },
      {
        id: 710,
        topic: 'relative_clauses',
        topicTitle: 'Mệnh đề quan hệ',
        prompt: 'Can you show me the bicycle _______ was repaired yesterday?',
        options: ['who', 'which', 'whose', 'whom'],
        correctAnswer: 'which',
        hintExplanation: '"bicycle" là danh từ chỉ vật -> dùng "which".'
      }
    ]
  },

  {
    id: 'reported_speech',
    titleVi: 'Câu Tường Thuật (Gián Tiếp)',
    titleEn: 'Reported Speech',
    category: 'structures',
    categoryLabel: 'Cấu trúc câu',
    levelBadge: 'Trọng tâm THCS & Thi vào 10',
    formulaSummary: 'S + said (that) / told + O + S + V(lùi thì)',
    shortDescription: 'Thuật lại lời nói hoặc suy nghĩ của người khác với quy tắc lùi thì và đổi đại từ.',
    theoryOverview: {
      definition: 'Câu tường thuật dùng để nhắc lại lời nói của một ai đó mà không cần dùng nguyên văn từng từ trong dấu ngoặc kép.',
      rules: [
        { rule: 'Lùi thì (Backshift)', example: 'Hiện tại đơn -> Quá khứ đơn (am/is/are -> was/were, V1 -> V2). Hiện tại tiếp diễn -> Quá khứ tiếp diễn. Can -> could, will -> would.' },
        { rule: 'Đổi đại từ', example: 'I -> he/she, my -> his/her, we -> they, our -> their.' },
        { rule: 'Đổi trạng từ chỉ thời gian', example: 'now -> then, today -> that day, tomorrow -> the next day/the following day, yesterday -> the day before.' },
        { rule: 'Câu hỏi gián tiếp', example: 'S + asked + if/whether + S + V (không đảo trợ động từ ra trước chủ ngữ).' }
      ],
      signalWords: ['said (that)', 'told + O', 'asked + if/whether', 'wondered'],
      commonMistakes: [
        'Vẫn đảo trợ động từ ra trước chủ ngữ trong câu hỏi tường thuật (Sai: "He asked me where did I live" -> Đúng: "He asked me where I lived").'
      ]
    },
    questions: [
      {
        id: 801,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: 'Nam said: "I am reading an interesting comic book." -> Nam said that he _______ an interesting comic book.',
        options: ['is reading', 'was reading', 'read', 'has read'],
        correctAnswer: 'was reading',
        hintExplanation: 'Quy tắc lùi thì: Hiện tại tiếp diễn ("am reading") lùi về Quá khứ tiếp diễn ("was reading").'
      },
      {
        id: 802,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: 'She said to me: "I will visit you tomorrow." -> She told me that she _______ me the following day.',
        options: ['will visit', 'would visit', 'visited', 'visits'],
        correctAnswer: 'would visit',
        hintExplanation: 'Trong câu tường thuật, "will" lùi thành "would", "tomorrow" đổi thành "the following day".'
      },
      {
        id: 803,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: 'The teacher asked Peter: "Where do you live?" -> The teacher asked Peter where _______.',
        options: ['did he live', 'he lived', 'does he live', 'he lives'],
        correctAnswer: 'he lived',
        hintExplanation: 'Trong câu hỏi gián tiếp, câu chuyển thành câu trần thuật (không đảo trợ động từ): "where he lived".'
      },
      {
        id: 804,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: 'Tom asked Mary: "Do you like classical music?" -> Tom asked Mary _______ she liked classical music.',
        options: ['if', 'that', 'what', 'does'],
        correctAnswer: 'if',
        hintExplanation: 'Câu hỏi Yes/No chuyển sang gián tiếp cần dùng liên từ "if" hoặc "whether".'
      },
      {
        id: 805,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: 'He said that he _______ his wallet the day before.',
        options: ['loses', 'lost', 'had lost', 'has lost'],
        correctAnswer: 'had lost',
        hintExplanation: '"the day before" là dạng gián tiếp của "yesterday" (quá khứ đơn), lùi thì về quá khứ hoàn thành -> "had lost".'
      },
      {
        id: 806,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: 'My mother told me _______ up too late playing computer games.',
        options: ['not stay', 'not to stay', 'to not stay', "didn't stay"],
        correctAnswer: 'not to stay',
        hintExplanation: 'Câu mệnh lệnh phủ định: "tell someone not to + V_inf" -> "not to stay".'
      },
      {
        id: 807,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: 'Mary told me that she _______ swim across the river when she was younger.',
        options: ['can', 'could', 'may', 'will'],
        correctAnswer: 'could',
        hintExplanation: '"can" trong câu trực tiếp khi lùi thì ở câu tường thuật chuyển thành "could".'
      },
      {
        id: 808,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: 'They said to us: "We are going to buy a new house." -> They told us that they _______ a new house.',
        options: ['are going to buy', 'were going to buy', 'will buy', 'bought'],
        correctAnswer: 'were going to buy',
        hintExplanation: '"are going to" lùi thì thành "were going to buy".'
      },
      {
        id: 809,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: '"Please turn off the lights before leaving," the monitor said. -> The monitor asked us _______ the lights before leaving.',
        options: ['turn off', 'to turn off', 'turning off', 'turned off'],
        correctAnswer: 'to turn off',
        hintExplanation: 'Cấu trúc nhờ vả / yêu cầu: "ask somebody to + V_inf" -> "to turn off".'
      },
      {
        id: 810,
        topic: 'reported_speech',
        topicTitle: 'Câu tường thuật',
        prompt: 'Daisy asked me what time the train _______.',
        options: ['left', 'did leave', 'leaves', 'will leave'],
        correctAnswer: 'left',
        hintExplanation: 'Câu hỏi gián tiếp có từ để hỏi: "what time + S + V(lùi thì)" -> "what time the train left".'
      }
    ]
  },

  {
    id: 'wish_sentences',
    titleVi: 'Cấu Trúc Câu Ước Wish',
    titleEn: 'Wish Clauses',
    category: 'structures',
    categoryLabel: 'Cấu trúc câu',
    levelBadge: 'Trọng tâm & Điểm nhấn',
    formulaSummary: 'Hiện tại: S + wish + S + V2/were | Quá khứ: S + wish + S + had + V3',
    shortDescription: 'Diễn tả mong ước về một điều gì đó không có thật ở hiện tại hoặc quá khứ.',
    theoryOverview: {
      definition: 'Cấu trúc Wish diễn tả mong muốn thay đổi một thực tế trái ngược với sự thật.',
      rules: [
        { rule: 'Ước ở hiện tại (Present Wish)', example: 'S + wish(es) + S + V2/ed (To be chia là "were" cho mọi ngôi). Ví dụ: I wish I were taller.' },
        { rule: 'Ước ở quá khứ (Past Wish)', example: 'S + wish(es) + S + had + V3/ed. Ví dụ: I wish I had studied harder for the test.' },
        { rule: 'Ước ở tương lai (Future Wish)', example: 'S + wish(es) + S + would/could + V_inf. Ví dụ: I wish it would stop raining.' }
      ],
      signalWords: ['I wish', 'If only', 'were', 'had + V3', 'would + V'],
      commonMistakes: [
        'Chia động từ ở thì hiện tại sau Wish (Sai: "I wish I have a car" -> Đúng: "I wish I had a car").'
      ]
    },
    questions: [
      {
        id: 901,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'I do not have enough money to buy that laptop. I wish I _______ enough money.',
        options: ['have', 'had', 'have had', 'will have'],
        correctAnswer: 'had',
        hintExplanation: 'Ước điều trái ngược với thực tế hiện tại ("I do not have"): lùi về quá khứ đơn "had".'
      },
      {
        id: 902,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'He is short. He wishes he _______ taller so he could join the basketball team.',
        options: ['is', 'was', 'were', 'will be'],
        correctAnswer: 'were',
        hintExplanation: 'Trong câu ước ở hiện tại, động từ to be ưu tiên dùng "were" cho tất cả các ngôi.'
      },
      {
        id: 903,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'I wish it _______ raining so we could play badminton outside.',
        options: ['stops', 'stopped', 'would stop', 'will stop'],
        correctAnswer: 'would stop',
        hintExplanation: 'Ước một hành động thay đổi trong tương lai hoặc phàn nàn về thời tiết: "S + wish + S + would + V_inf".'
      },
      {
        id: 904,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'She failed the exam yesterday. She wishes she _______ harder.',
        options: ['studied', 'had studied', 'studies', 'would study'],
        correctAnswer: 'had studied',
        hintExplanation: 'Ước điều trái ngược với quá khứ ("failed yesterday"): dùng quá khứ hoàn thành "had studied".'
      },
      {
        id: 905,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'If only I _______ speak French fluently!',
        options: ['can', 'could', 'may', 'will'],
        correctAnswer: 'could',
        hintExplanation: '"If only" mang nghĩa như "I wish", ước khả năng ở hiện tại: "could + V_inf".'
      },
      {
        id: 906,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'My brother wishes he _______ fly a plane in the sky.',
        options: ['can', 'could', 'is able to', 'will'],
        correctAnswer: 'could',
        hintExplanation: 'Ước khả năng ở hiện tại dùng "could + V_inf".'
      },
      {
        id: 907,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'We have to go to school on Saturday. We wish we _______ go to school on Saturday.',
        options: ["didn't have to", "don't have to", "hadn't to", "won't have to"],
        correctAnswer: "didn't have to",
        hintExplanation: 'Thực tế hiện tại là "have to", ước ngược lại ở hiện tại phủ định quá khứ đơn: "didn\'t have to".'
      },
      {
        id: 908,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'I wish you _______ make so much noise while I am studying!',
        options: ["wouldn't", "won't", "don't", "haven't"],
        correctAnswer: "wouldn't",
        hintExplanation: 'Cấu trúc "wish + someone + wouldn\'t + V_inf" dùng để phàn nàn và yêu cầu ai ngừng làm một việc phiền toái.'
      },
      {
        id: 909,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'Hoa wishes she _______ visit London next summer vacation.',
        options: ['can', 'could', 'will', 'is visiting'],
        correctAnswer: 'could',
        hintExplanation: 'Ước về một cơ hội hoặc khả năng trong tương lai: "could visit".'
      },
      {
        id: 910,
        topic: 'wish_sentences',
        topicTitle: 'Câu ước Wish',
        prompt: 'Tom wishes he _______ at the party last night with his friends.',
        options: ['was', 'were', 'had been', 'has been'],
        correctAnswer: 'had been',
        hintExplanation: 'Dấu hiệu "last night" là quá khứ, ước trái với quá khứ dùng quá khứ hoàn thành "had been".'
      }
    ]
  },

  {
    id: 'tag_questions',
    titleVi: 'Câu Hỏi Đuôi',
    titleEn: 'Tag Questions',
    category: 'advanced_syntax',
    categoryLabel: 'Ngữ pháp nâng cao',
    levelBadge: 'Phổ biến & Giao tiếp',
    formulaSummary: 'Khẳng định -> Đuôi phủ định | Phủ định -> Đuôi khẳng định',
    shortDescription: 'Dùng ở cuối câu trần thuật để xác nhận thông tin hoặc tìm kiếm sự đồng thuận.',
    theoryOverview: {
      definition: 'Câu hỏi đuôi gồm một mệnh đề trần thuật đi kèm một câu hỏi ngắn ở đuôi.',
      rules: [
        { rule: 'Quy tắc đối nghịch', example: 'Mệnh đề khẳng định (+), đuôi phủ định (-): You are a student, aren\'t you?' },
        { rule: 'Mệnh đề phủ định (+)', example: 'Mệnh đề phủ định (-), đuôi khẳng định (+): She doesn\'t like tea, does she?' },
        { rule: 'Trường hợp đặc biệt với I am', example: 'I am right, aren\'t I? (Không dùng amn\'t I).' },
        { rule: 'Trường hợp với Let\'s', example: 'Let\'s go to the cinema, shall we?' },
        { rule: 'Câu mệnh lệnh', example: 'Open the door, will you?' }
      ],
      signalWords: ['aren\'t you?', 'doesn\'t she?', 'did he?', 'shall we?', 'will you?'],
      commonMistakes: [
        'Dùng sai trợ động từ không khớp với thì của mệnh đề trước (Ví dụ: thì quá khứ lại dùng don\'t/doesn\'t thay vì didn\'t).'
      ]
    },
    questions: [
      {
        id: 1001,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'You are an excellent student in this class, _______?',
        options: ["aren't you", "are you", "don't you", "isn't you"],
        correctAnswer: "aren't you",
        hintExplanation: 'Vế trước dùng to be khẳng định "are", câu hỏi đuôi phải dùng phủ định tương ứng: "aren\'t you?".'
      },
      {
        id: 1002,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'Mary went to Paris last summer, _______?',
        options: ["didn't she", "did she", "wasn't she", "doesn't she"],
        correctAnswer: "didn't she",
        hintExplanation: 'Vế trước thì quá khứ đơn khẳng định ("went"), câu hỏi đuôi dùng trợ động từ quá khứ phủ định: "didn\'t she?".'
      },
      {
        id: 1003,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'I am late for the meeting, _______?',
        options: ["aren't I", "am not I", "amn't I", "isn't I"],
        correctAnswer: "aren't I",
        hintExplanation: 'Trường hợp đặc biệt bắt buộc: "I am..." đi với câu hỏi đuôi là "aren\'t I?".'
      },
      {
        id: 1004,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'Let\'s go out for some fresh air, _______?',
        options: ['shall we', 'will we', 'do we', 'are we'],
        correctAnswer: 'shall we',
        hintExplanation: 'Đề nghị với "Let\'s..." câu hỏi đuôi luôn là "shall we?".'
      },
      {
        id: 1005,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'Your parents have lived here for a long time, _______?',
        options: ["haven't they", "have they", "don't they", "didn't they"],
        correctAnswer: "haven't they",
        hintExplanation: 'Vế trước hiện tại hoàn thành khẳng định "have lived", chủ ngữ "your parents" = they -> "haven\'t they?".'
      },
      {
        id: 1006,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'He cannot speak Russian, _______?',
        options: ['can he', "can't he", 'does he', 'is he'],
        correctAnswer: 'can he',
        hintExplanation: 'Vế trước phủ định với modal verb "cannot", đuôi phải ở dạng khẳng định: "can he?".'
      },
      {
        id: 1007,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'There is a post office near here, _______?',
        options: ["isn't there", "is there", "isn't it", "is it"],
        correctAnswer: "isn't there",
        hintExplanation: 'Với chủ ngữ giả "There is", câu hỏi đuôi dùng lại "there": "isn\'t there?".'
      },
      {
        id: 1008,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'Nobody called me yesterday, _______?',
        options: ['did they', "didn't they", 'did he', "didn't he"],
        correctAnswer: 'did they',
        hintExplanation: '"Nobody" mang nghĩa phủ định, nên đuôi phải ở dạng khẳng định. Đại từ bất định chỉ người được quy về "they", trợ động từ quá khứ là "did" -> "did they?".'
      },
      {
        id: 1009,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'Please don\'t make any noise, _______?',
        options: ['will you', 'shall you', 'do you', 'can you'],
        correctAnswer: 'will you',
        hintExplanation: 'Câu mệnh lệnh phủ định ("Don\'t + V") luôn có câu hỏi đuôi là "will you?".'
      },
      {
        id: 1010,
        topic: 'tag_questions',
        topicTitle: 'Câu hỏi đuôi',
        prompt: 'She hardly ever eats meat, _______?',
        options: ['does she', "doesn't she", 'is she', "isn't she"],
        correctAnswer: 'does she',
        hintExplanation: '"hardly ever" (hầu như không bao giờ) mang nghĩa bán phủ định, vì vậy câu hỏi đuôi phải ở dạng khẳng định: "does she?".'
      }
    ]
  },

  {
    id: 'comparisons',
    titleVi: 'Cấu Trúc So Sánh',
    titleEn: 'Comparatives & Superlatives',
    category: 'advanced_syntax',
    categoryLabel: 'Ngữ pháp nâng cao',
    levelBadge: 'Cốt lõi & Ứng dụng',
    formulaSummary: 'Bằng: as...as | Hơn: adj-er / more adj than | Nhất: the adj-est / the most adj',
    shortDescription: 'So sánh tính từ và trạng từ ngắn/dài trong các cấp độ: bằng nhau, hơn kém và cao nhất.',
    theoryOverview: {
      definition: 'Cấu trúc so sánh dùng để đối chiếu đặc điểm, tính chất giữa hai hoặc nhiều đối tượng.',
      rules: [
        { rule: 'So sánh bằng', example: 'S1 + be/V + as + adj/adv + as + S2 (He is as tall as his brother).' },
        { rule: 'So sánh hơn (Tính từ ngắn)', example: 'S1 + be + adj-er + than + S2 (My house is bigger than yours).' },
        { rule: 'So sánh hơn (Tính từ dài)', example: 'S1 + be + more + adj + than + S2 (This watch is more expensive than that one).' },
        { rule: 'So sánh nhất', example: 'the + adj-est / the most + adj (Mount Everest is the highest mountain in the world).' },
        { rule: 'Bất quy tắc đặc biệt', example: 'good -> better -> best; bad -> worse -> worst; far -> farther/further -> farthest/furthest.' }
      ],
      signalWords: ['than', 'the ... -est', 'the most', 'as ... as', 'The more..., the more...'],
      commonMistakes: [
        'Dùng cả "more" lẫn đuôi "-er" cùng lúc (Sai: "more faster" -> Đúng: "faster").',
        'Quên mạo từ "the" trước dạng so sánh nhất.'
      ]
    },
    questions: [
      {
        id: 1101,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'Da Nang is _______ than Hanoi in terms of traffic congestion.',
        options: ['peaceful', 'more peaceful', 'peacefuller', 'most peaceful'],
        correctAnswer: 'more peaceful',
        hintExplanation: '"peaceful" là tính từ dài có 2 âm tiết, so sánh hơn cần dùng "more peaceful than".'
      },
      {
        id: 1102,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'Russia is the _______ country in the world by land area.',
        options: ['larger', 'largest', 'most large', 'large'],
        correctAnswer: 'largest',
        hintExplanation: 'So sánh nhất của tính từ ngắn "large": thêm -est -> "the largest".'
      },
      {
        id: 1103,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'Her health is much _______ today than it was yesterday.',
        options: ['good', 'better', 'best', 'well'],
        correctAnswer: 'better',
        hintExplanation: 'Dạng so sánh hơn của "good/well" là bất quy tắc "better".'
      },
      {
        id: 1104,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'This exercise is not _______ difficult _______ I originally thought.',
        options: ['as / as', 'so / than', 'more / as', 'as / than'],
        correctAnswer: 'as / as',
        hintExplanation: 'Cấu trúc so sánh bằng ở thể phủ định: "not as/so + adj + as".'
      },
      {
        id: 1105,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'The harder you study, the _______ results you will achieve.',
        options: ['good', 'better', 'best', 'more good'],
        correctAnswer: 'better',
        hintExplanation: 'Cấu trúc so sánh kép (The more... the more...): "The harder..., the better...".'
      },
      {
        id: 1106,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'Which planet is the _______ from the Sun in our Solar System?',
        options: ['farther', 'farthest', 'further', 'more far'],
        correctAnswer: 'farthest',
        hintExplanation: 'So sánh nhất chỉ khoảng cách không gian: "the farthest".'
      },
      {
        id: 1107,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'Air pollution in cities is getting _______ every day.',
        options: ['worse and worse', 'bad and bad', 'more and more bad', 'worst and worst'],
        correctAnswer: 'worse and worse',
        hintExplanation: 'Cấu trúc so sánh càng ngày càng: "worse and worse" (ngày càng tệ hơn).'
      },
      {
        id: 1108,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'Gold is much _______ than silver.',
        options: ['heavy', 'heavier', 'more heavy', 'heaviest'],
        correctAnswer: 'heavier',
        hintExplanation: '"heavy" kết thúc bằng đuôi -y chuyển thành -ier trong so sánh hơn -> "heavier".'
      },
      {
        id: 1109,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'Who is _______ student in your English club?',
        options: ['the most intelligent', 'most intelligent', 'more intelligent', 'intelligentest'],
        correctAnswer: 'the most intelligent',
        hintExplanation: 'So sánh nhất với tính từ dài phải có "the most + adj" -> "the most intelligent".'
      },
      {
        id: 1110,
        topic: 'comparisons',
        topicTitle: 'Cấu trúc so sánh',
        prompt: 'He drives much _______ than his brother.',
        options: ['more careful', 'carefuller', 'more carefully', 'most carefully'],
        correctAnswer: 'more carefully',
        hintExplanation: 'Bổ nghĩa cho động từ thường "drives" cần dùng trạng từ so sánh hơn "more carefully".'
      }
    ]
  },

  {
    id: 'gerund_infinitive',
    titleVi: 'Danh Động Từ & Động Từ Nguyên Mẫu',
    titleEn: 'Gerunds (V-ing) vs Infinitives (To-V)',
    category: 'parts_of_speech',
    categoryLabel: 'Từ loại & Thành phần',
    levelBadge: 'Cốt lõi & Phân biệt',
    formulaSummary: 'V + V-ing (enjoy, avoid...) vs V + To-V (decide, hope...)',
    shortDescription: 'Phân biệt khi nào động từ theo sau chia ở dạng V-ing hoặc To-V, và các nhóm từ đổi nghĩa.',
    theoryOverview: {
      definition: 'Một số động từ theo sau bởi V-ing (Gerund), một số theo sau bởi To-V (Infinitive), và một số từ đổi hẳn nghĩa khi đổi dạng.',
      rules: [
        { rule: 'Động từ đi với V-ing', example: 'enjoy, avoid, suggest, mind, spend (time), practice, finish, keep on.' },
        { rule: 'Động từ đi với To-V', example: 'decide, want, hope, plan, promise, agree, refuse, afford.' },
        { rule: 'Sau giới từ luôn là V-ing', example: 'interested in learning, good at playing, thank you for coming.' },
        { rule: 'Nhóm đổi nghĩa đặc biệt', example: 'stop + V-ing (dừng hẳn việc đang làm) vs stop + To-V (dừng lại để làm việc khác); remember + V-ing (nhớ đã làm gì) vs remember + To-V (nhớ phải làm gì).' }
      ],
      signalWords: ['enjoy + V-ing', 'decide + to V', 'remember to / V-ing', 'look forward to + V-ing'],
      commonMistakes: [
        'Dùng To-V sau giới từ (Sai: "good at to draw" -> Đúng: "good at drawing").',
        'Quên rằng "look forward to" đi với V-ing chứ không phải V-nguyên mẫu.'
      ]
    },
    questions: [
      {
        id: 1201,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'They decided _______ a new computer for their online study.',
        options: ['buy', 'buying', 'to buy', 'bought'],
        correctAnswer: 'to buy',
        hintExplanation: 'Động từ "decide" luôn đi với động từ nguyên mẫu có to: "decide to do something" -> "to buy".'
      },
      {
        id: 1202,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'She really enjoys _______ novels before going to bed.',
        options: ['read', 'reading', 'to read', 'reads'],
        correctAnswer: 'reading',
        hintExplanation: 'Động từ chỉ sở thích "enjoy" luôn đi kèm với danh động từ V-ing -> "reading".'
      },
      {
        id: 1203,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'I am really looking forward to _______ you at the weekend party.',
        options: ['see', 'seeing', 'to see', 'saw'],
        correctAnswer: 'seeing',
        hintExplanation: 'Cấu trúc cố định: "look forward to + V-ing" (rất mong đợi việc gì) -> "seeing".'
      },
      {
        id: 1204,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'Remember _______ off all the lights before you leave the room.',
        options: ['turn', 'turning', 'to turn', 'turned'],
        correctAnswer: 'to turn',
        hintExplanation: '"remember to + V" có nghĩa là nhớ phải làm một bổn phận/nhiệm vụ trong tương lai -> "to turn".'
      },
      {
        id: 1205,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'He gave up _______ two years ago because it was harmful to his lungs.',
        options: ['smoke', 'smoking', 'to smoke', 'smoked'],
        correctAnswer: 'smoking',
        hintExplanation: 'Cụm động từ kết thúc bằng giới từ "up" ("give up") bắt buộc đi với V-ing -> "smoking".'
      },
      {
        id: 1206,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'Would you mind _______ the window? It is very chilly inside.',
        options: ['close', 'closing', 'to close', 'closed'],
        correctAnswer: 'closing',
        hintExplanation: 'Cấu trúc lịch sự: "Would you mind + V-ing" -> "closing".'
      },
      {
        id: 1207,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'They stopped _______ a hot cup of coffee on their long way home.',
        options: ['drink', 'drinking', 'to drink', 'drank'],
        correctAnswer: 'to drink',
        hintExplanation: '"stop to + V" nghĩa là tạm dừng hành động đang làm để chuyển sang làm việc khác -> "to drink".'
      },
      {
        id: 1208,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'He promised _______ me with my English pronunciation.',
        options: ['help', 'helping', 'to help', 'helped'],
        correctAnswer: 'to help',
        hintExplanation: '"promise to do something" (hứa sẽ làm gì) -> "to help".'
      },
      {
        id: 1209,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'She spent two hours _______ this difficult science exercise.',
        options: ['solve', 'solving', 'to solve', 'solved'],
        correctAnswer: 'solving',
        hintExplanation: 'Cấu trúc: "spend + time + V-ing" (dành thời gian làm gì) -> "solving".'
      },
      {
        id: 1210,
        topic: 'gerund_infinitive',
        topicTitle: 'Danh động từ & Động từ nguyên mẫu',
        prompt: 'It is very important _______ hard every single day.',
        options: ['study', 'studying', 'to study', 'studied'],
        correctAnswer: 'to study',
        hintExplanation: 'Cấu trúc: "It is + adj + to + V_inf" -> "to study".'
      }
    ]
  },

  {
    id: 'modal_verbs',
    titleVi: 'Động Từ Khuyết Thiếu (Modal Verbs)',
    titleEn: 'Modal Verbs',
    category: 'parts_of_speech',
    categoryLabel: 'Từ loại & Thành phần',
    levelBadge: 'Căn bản & Nâng cao',
    formulaSummary: 'S + can / could / must / have to / should / may + V_inf',
    shortDescription: 'Diễn tả khả năng, sự bắt buộc, lời khuyên, sự cho phép hoặc mức độ chắc chắn.',
    theoryOverview: {
      definition: 'Động từ khuyết thiếu không chia theo ngôi và luôn theo sau bởi một động từ nguyên mẫu không có "to".',
      rules: [
        { rule: 'Khả năng (Ability)', example: 'can (hiện tại), could (quá khứ). Ví dụ: I can swim.' },
        { rule: 'Bắt buộc (Obligation)', example: 'must (bắt buộc chủ quan), have to (bắt buộc khách quan theo luật/quy định).' },
        { rule: 'Cấm đoán (Prohibition)', example: 'mustn\'t (tuyệt đối không được phép làm).' },
        { rule: 'Không cần thiết', example: 'don\'t have to / doesn\'t have to (không bắt buộc, có thể làm hoặc không).' },
        { rule: 'Lời khuyên (Advice)', example: 'should / ought to (nên làm gì).' }
      ],
      signalWords: ['must', 'mustn\'t', 'should', 'don\'t have to', 'can / could', 'may / might'],
      commonMistakes: [
        'Nhầm lẫn giữa "mustn\'t" (cấm đoán) và "don\'t have to" (không cần thiết).',
        'Thêm "to" sau can, must, should (Sai: "I must to go" -> Đúng: "I must go").'
      ]
    },
    questions: [
      {
        id: 1301,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'You _______ tell anyone about this secret. It is strictly confidential.',
        options: ["mustn't", "don't have to", 'should', 'might not'],
        correctAnswer: "mustn't",
        hintExplanation: '"mustn\'t" diễn tả sự cấm đoán tuyệt đối không được phép làm ("không được nói cho ai biết").'
      },
      {
        id: 1302,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'Tomorrow is Sunday, so I _______ wake up early in the morning.',
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correctAnswer: "don't have to",
        hintExplanation: '"don\'t have to" diễn tả việc không cần thiết phải làm (vì ngày mai là Chủ nhật).'
      },
      {
        id: 1303,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'You look very tired and pale. You _______ go see a doctor.',
        options: ['should', 'mustn\'t', 'may', 'would'],
        correctAnswer: 'should',
        hintExplanation: '"should" đưa ra lời khuyên chân thành ("bạn nên đi khám bác sĩ").'
      },
      {
        id: 1304,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'All passengers _______ wear their seatbelts during flight takeoff and landing.',
        options: ['must', 'can', 'may', 'could'],
        correctAnswer: 'must',
        hintExplanation: '"must" chỉ quy định an toàn bắt buộc trong hàng không.'
      },
      {
        id: 1305,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'Look at those dark grey clouds. It _______ rain very soon.',
        options: ['might', 'should', 'must to', 'ought'],
        correctAnswer: 'might',
        hintExplanation: '"might" diễn tả khả năng có thể xảy ra nhưng không chắc chắn 100%.'
      },
      {
        id: 1306,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'When he was only five years old, Mozart _______ already play the piano brilliantly.',
        options: ['can', 'could', 'may', 'must'],
        correctAnswer: 'could',
        hintExplanation: '"could" diễn tả khả năng bẩm sinh trong quá khứ ("When he was only five").'
      },
      {
        id: 1307,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'Students _______ use their mobile phones during the exam. It is against the school rules.',
        options: ["mustn't", "needn't", "don't have to", "might not"],
        correctAnswer: "mustn't",
        hintExplanation: 'Hành vi vi phạm quy chế thi cử bị cấm đoán tuyệt đối: "mustn\'t".'
      },
      {
        id: 1308,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'Excuse me, _______ I borrow your dictionary for a moment?',
        options: ['May', 'Must', 'Should', 'Would'],
        correctAnswer: 'May',
        hintExplanation: '"May I...?" là lời xin phép trang trọng và lịch sự nhất.'
      },
      {
        id: 1309,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'You _______ eat so much fast food; it is not good for your health.',
        options: ["shouldn't", "mustn't", "can't", "don't have to"],
        correctAnswer: "shouldn't",
        hintExplanation: '"shouldn\'t" đưa ra lời khuyên không nên làm gì vì có hại cho sức khỏe.'
      },
      {
        id: 1310,
        topic: 'modal_verbs',
        topicTitle: 'Động từ khuyết thiếu',
        prompt: 'We have plenty of milk in the fridge, so you _______ buy any more today.',
        options: ["needn't", "mustn't", "shouldn't", "can't"],
        correctAnswer: "needn't",
        hintExplanation: '"needn\'t" (= don\'t need to) nghĩa là không cần phải mua thêm.'
      }
    ]
  },

  {
    id: 'articles',
    titleVi: 'Mạo Từ (A, An, The & Zero Article)',
    titleEn: 'Articles',
    category: 'parts_of_speech',
    categoryLabel: 'Từ loại & Thành phần',
    levelBadge: 'Căn bản & Chi tiết',
    formulaSummary: 'A/An (số ít, chưa xác định) | The (đã xác định, độc nhất) | Ø (nói chung)',
    shortDescription: 'Quy tắc dùng mạo từ không xác định (a/an), mạo từ xác định (the) và các trường hợp không dùng mạo từ.',
    theoryOverview: {
      definition: 'Mạo từ đứng trước danh từ để chỉ ra danh từ đó là xác định hay không xác định.',
      rules: [
        { rule: 'A / An', example: 'Dùng cho danh từ đếm được số ít chưa xác định. Dùng "an" trước nguyên âm phát âm: an apple, an hour (h câm), an umbrella. Dùng "a" trước phụ âm: a book, a university (phát âm /ju:/).' },
        { rule: 'The', example: 'Dùng cho đối tượng đã được nhắc đến trước đó, duy nhất (the Sun, the Moon, the President), hoặc trước nhạc cụ (play the guitar).' },
        { rule: 'Zero Article (Không dùng mạo từ)', example: 'Trước danh từ số nhiều nói chung, tên bữa ăn (have breakfast), môn học (study math), môn thể thao (play football), tên đất nước số ít (Vietnam, Japan).' }
      ],
      signalWords: ['a / an', 'the Sun', 'the Earth', 'play the piano', 'in the morning'],
      commonMistakes: [
        'Dùng "an" dựa vào chữ cái viết thay vì âm phát ra (Ví dụ: "a university" chứ không phải "an university"; "an hour" chứ không phải "a hour").'
      ]
    },
    questions: [
      {
        id: 1401,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: 'My uncle works as _______ honest police officer in this town.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'an',
        hintExplanation: 'Từ "honest" có âm "h" câm, bắt đầu bằng nguyên âm /ɒ/, vì vậy dùng mạo từ "an" ("an honest police officer").'
      },
      {
        id: 1402,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: '_______ Moon revolves around the Earth.',
        options: ['A', 'An', 'The', 'No article'],
        correctAnswer: 'The',
        hintExplanation: '"Moon" và "Earth" là các vật thể độc nhất vô nhị trong vũ trụ, bắt buộc dùng mạo từ xác định "The".'
      },
      {
        id: 1403,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: 'My younger brother can play _______ piano very skillfully.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'the',
        hintExplanation: 'Trước tên các loại nhạc cụ (musical instruments) luôn dùng mạo từ xác định: "play the piano".'
      },
      {
        id: 1404,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: 'We usually have _______ breakfast together at 7:00 AM.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'no article',
        hintExplanation: 'Trước tên các bữa ăn thông thường trong ngày (breakfast, lunch, dinner) không dùng mạo từ.'
      },
      {
        id: 1405,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: 'I saw _______ car on the street. _______ car was bright red.',
        options: ['a / The', 'the / A', 'a / A', 'the / The'],
        correctAnswer: 'a / The',
        hintExplanation: 'Chiếc xe được nhắc đến lần đầu dùng mạo từ không xác định "a car"; khi nhắc lại lần thứ hai người nghe đã biết xe nào nên dùng "The car".'
      },
      {
        id: 1406,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: 'She wants to study at _______ university in the United Kingdom.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'a',
        hintExplanation: 'Từ "university" bắt đầu bằng bán nguyên âm phụ âm /j/ (/juːnɪˈvɜːrsəti/), nên dùng mạo từ "a".'
      },
      {
        id: 1407,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: 'Football is _______ most popular sport in the world.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'the',
        hintExplanation: 'Trước tính từ so sánh nhất "most popular" bắt buộc dùng mạo từ "the".'
      },
      {
        id: 1408,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: '_______ Nile is the longest river in Africa.',
        options: ['A', 'An', 'The', 'No article'],
        correctAnswer: 'The',
        hintExplanation: 'Trước tên sông, đại dương, dãy núi luôn dùng mạo từ "The" ("The Nile").'
      },
      {
        id: 1409,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: 'He goes to school by _______ bus every single day.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'no article',
        hintExplanation: 'Cụm từ chỉ phương tiện giao thông "by + phương tiện" không dùng mạo từ (by bus, by car, by train).'
      },
      {
        id: 1410,
        topic: 'articles',
        topicTitle: 'Mạo từ',
        prompt: 'We had _______ wonderful holiday in Da Nang last month.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'a',
        hintExplanation: '"holiday" là danh từ đếm được số ít, đứng sau tính từ "wonderful" bắt đầu bằng phụ âm -> dùng "a wonderful holiday".'
      }
    ]
  },

  {
    id: 'prepositions',
    titleVi: 'Giới Từ Thời Gian & Nơi Chốn',
    titleEn: 'Prepositions of Time & Place',
    category: 'parts_of_speech',
    categoryLabel: 'Từ loại & Thành phần',
    levelBadge: 'Căn bản & Quy tắc',
    formulaSummary: 'At (giờ, điểm cụ thể) | On (ngày, thứ, bề mặt) | In (tháng, năm, không gian)',
    shortDescription: 'Quy tắc tam giác giới từ In - On - At ứng dụng chuẩn xác cho thời gian và địa điểm.',
    theoryOverview: {
      definition: 'Giới từ biểu thị mối quan hệ giữa danh từ hoặc đại từ với các thành phần khác trong câu về thời gian hoặc không gian.',
      rules: [
        { rule: 'Quy tắc tam giác Thời gian', example: 'At: giờ cụ thể, dịp lễ ngắn (at 6:00, at noon, at Christmas). On: ngày cụ thể, thứ trong tuần (on Monday, on May 5th). In: khoảng thời gian lớn hơn (in July, in 2024, in the morning).' },
        { rule: 'Quy tắc tam giác Nơi chốn', example: 'At: địa điểm cụ thể (at the bus stop, at home, at school). On: trên bề mặt (on the table, on the wall, on the 2nd floor). In: không gian khép kín (in the room, in the box, in Vietnam).' }
      ],
      signalWords: ['at 5 PM', 'on Monday', 'in summer', 'at the airport', 'on the table', 'in the city'],
      commonMistakes: [
        'Dùng "in" trước các thứ trong tuần (Sai: "in Monday" -> Đúng: "on Monday").',
        'Dùng "at" trước các tháng/năm (Sai: "at 2020" -> Đúng: "in 2020").'
      ]
    },
    questions: [
      {
        id: 1501,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'The English class starts promptly _______ 8:30 AM.',
        options: ['in', 'on', 'at', 'for'],
        correctAnswer: 'at',
        hintExplanation: 'Trước mốc giờ cụ thể xác định ta dùng giới từ "at" ("at 8:30 AM").'
      },
      {
        id: 1502,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'Our national independence day is _______ September 2nd.',
        options: ['in', 'on', 'at', 'by'],
        correctAnswer: 'on',
        hintExplanation: 'Trước ngày cụ thể trong tháng ta dùng giới từ "on" ("on September 2nd").'
      },
      {
        id: 1503,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'Vietnam has many beautiful festivals _______ spring.',
        options: ['in', 'on', 'at', 'with'],
        correctAnswer: 'in',
        hintExplanation: 'Trước các mùa trong năm (spring, summer, autumn, winter) ta dùng giới từ "in".'
      },
      {
        id: 1504,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'There is a colorful painting hanging _______ the wall.',
        options: ['in', 'on', 'at', 'under'],
        correctAnswer: 'on',
        hintExplanation: 'Treo trên bề mặt bức tường dùng giới từ "on the wall".'
      },
      {
        id: 1505,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'I will meet you _______ the bus stop right in front of the museum.',
        options: ['in', 'on', 'at', 'into'],
        correctAnswer: 'at',
        hintExplanation: 'Chỉ địa điểm cụ thể dùng giới từ "at the bus stop".'
      },
      {
        id: 1506,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'They arrived in Paris _______ midnight.',
        options: ['in', 'on', 'at', 'by'],
        correctAnswer: 'at',
        hintExplanation: 'Cụm từ cố định: "at midnight" (lúc nửa đêm), "at noon" (lúc giữa trưa).'
      },
      {
        id: 1507,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'My grandparents love taking a gentle walk _______ the evening.',
        options: ['in', 'on', 'at', 'with'],
        correctAnswer: 'in',
        hintExplanation: 'Các buổi trong ngày dùng "in the morning", "in the afternoon", "in the evening" (trừ "at night").'
      },
      {
        id: 1508,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'The library is located _______ the second floor of the building.',
        options: ['in', 'on', 'at', 'from'],
        correctAnswer: 'on',
        hintExplanation: 'Chỉ các tầng của tòa nhà dùng giới từ "on" ("on the second floor").'
      },
      {
        id: 1509,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'He was born _______ 2012 in a peaceful countryside town.',
        options: ['in', 'on', 'at', 'since'],
        correctAnswer: 'in',
        hintExplanation: 'Trước năm ta dùng giới từ "in" ("in 2012").'
      },
      {
        id: 1510,
        topic: 'prepositions',
        topicTitle: 'Giới từ',
        prompt: 'She is sitting _______ her desk, reading a fascinating story.',
        options: ['at', 'on', 'in', 'to'],
        correctAnswer: 'at',
        hintExplanation: 'Ngồi tại bàn làm việc/học tập để làm việc: "sit at the desk".'
      }
    ]
  },

  {
    id: 'conjunctions_connectors',
    titleVi: 'Liên Từ & Mệnh Đề Trạng Ngữ',
    titleEn: 'Conjunctions & Connectors',
    category: 'advanced_syntax',
    categoryLabel: 'Ngữ pháp nâng cao',
    levelBadge: 'Liên kết câu & Viết',
    formulaSummary: 'Although/Because + Mệnh đề vs In spite of/Because of + Cụm danh từ',
    shortDescription: 'Kết nối các ý tương phản, nguyên nhân - kết quả để bài viết và lời nói mạch lạc.',
    theoryOverview: {
      definition: 'Liên từ dùng để liên kết các từ, cụm từ hoặc mệnh đề trong câu.',
      rules: [
        { rule: 'Chỉ nguyên nhân', example: 'Because / Since / As + S + V vs Because of / Due to + Noun / V-ing.' },
        { rule: 'Chỉ sự tương phản, nhượng bộ', example: 'Although / Even though / Though + S + V vs Despite / In spite of + Noun / V-ing.' },
        { rule: 'Chỉ kết quả', example: 'So / Therefore / As a result (He was tired, so he went to bed early).' },
        { rule: 'Trạng từ liên kết', example: 'However / Nevertheless (dùng với dấu phẩy ngăn cách).' }
      ],
      signalWords: ['Although', 'Despite', 'Because', 'Because of', 'However', 'Therefore', 'So'],
      commonMistakes: [
        'Dùng cả "Although" và "But" trong cùng một câu tiếng Anh (Sai: "Although it rained, but we went" -> Đúng: "Although it rained, we went").',
        'Dùng mệnh đề có chủ ngữ vị ngữ sau "Despite/Because of".'
      ]
    },
    questions: [
      {
        id: 1601,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: '_______ it rained heavily all morning, the students arrived at school on time.',
        options: ['Although', 'Because', 'Despite', 'In spite of'],
        correctAnswer: 'Although',
        hintExplanation: 'Sau chỗ trống là một mệnh đề ("it rained heavily"), mang nghĩa nhượng bộ tương phản -> dùng "Although".'
      },
      {
        id: 1602,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: '_______ the bad weather, the football match was not canceled.',
        options: ['Despite', 'Although', 'Even though', 'Because'],
        correctAnswer: 'Despite',
        hintExplanation: '"the bad weather" là một cụm danh từ (Noun phrase), chỉ sự tương phản nên dùng "Despite" (hoặc In spite of).'
      },
      {
        id: 1603,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: 'We stayed at home yesterday _______ the heavy traffic and thunderstorm.',
        options: ['because', 'because of', 'although', 'in spite of'],
        correctAnswer: 'because of',
        hintExplanation: '"the heavy traffic and thunderstorm" là cụm danh từ chỉ nguyên nhân -> dùng "because of".'
      },
      {
        id: 1604,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: 'He studied extremely hard for the final exam; _______, he achieved the highest mark in class.',
        options: ['therefore', 'however', 'although', 'but'],
        correctAnswer: 'therefore',
        hintExplanation: 'Chỉ mối quan hệ nguyên nhân - kết quả mang tính trang trọng: "therefore" (vì vậy, do đó).'
      },
      {
        id: 1605,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: 'She was very tired; _______, she tried her best to finish typing the report.',
        options: ['however', 'so', 'because', 'although'],
        correctAnswer: 'however',
        hintExplanation: '"however" (tuy nhiên) đứng sau dấu chấm phẩy và trước dấu phẩy để nối hai mệnh đề tương phản.'
      },
      {
        id: 1606,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: 'We decided to go camping _______ it was a bright and sunny day.',
        options: ['because', 'because of', 'despite', 'although'],
        correctAnswer: 'because',
        hintExplanation: 'Theo sau là mệnh đề đầy đủ ("it was a bright and sunny day") chỉ lý do -> dùng "because".'
      },
      {
        id: 1607,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: 'In spite of _______ exhausted, they continued walking up the mountain trail.',
        options: ['be', 'being', 'been', 'were'],
        correctAnswer: 'being',
        hintExplanation: 'Sau giới từ "In spite of" là động từ thêm đuôi -ing -> "being exhausted".'
      },
      {
        id: 1608,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: 'You can either have vanilla ice cream _______ a slice of chocolate cake.',
        options: ['or', 'nor', 'and', 'but'],
        correctAnswer: 'or',
        hintExplanation: 'Cặp liên từ tương quan: "either... or" (hoặc cái này hoặc cái kia).'
      },
      {
        id: 1609,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: 'Neither Peter _______ his brother likes eating mushrooms.',
        options: ['nor', 'or', 'and', 'with'],
        correctAnswer: 'nor',
        hintExplanation: 'Cặp liên từ tương quan: "neither... nor" (cả hai đều không).'
      },
      {
        id: 1610,
        topic: 'conjunctions',
        topicTitle: 'Liên từ',
        prompt: 'Turn off the tap while brushing your teeth, _______ you will waste a lot of clean water.',
        options: ['or', 'and', 'so', 'but'],
        correctAnswer: 'or',
        hintExplanation: '"or" trong câu mệnh lệnh mang nghĩa cảnh báo: "nếu không thì".'
      }
    ]
  }
];

export const GRAMMAR_CATEGORIES = [
  { id: 'all', label: 'Tất cả chuyên đề 🌟' },
  { id: 'tenses', label: 'Các thì động từ ⏱️' },
  { id: 'structures', label: 'Cấu trúc câu 🏗️' },
  { id: 'parts_of_speech', label: 'Từ loại & Thành phần 🧩' },
  { id: 'advanced_syntax', label: 'Ngữ pháp nâng cao 🎯' }
];
