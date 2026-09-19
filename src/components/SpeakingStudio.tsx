import React, { useState } from 'react';
import { Mic, Volume2, Sparkles, CheckCircle2, RotateCcw, MessageSquare, Headphones, Award, AlertCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { VoiceSpeakingInput } from './VoiceSpeakingInput';
import { GradeLevel } from './GradeSelection';

interface SpeakingScenario {
  id: number;
  grade: GradeLevel;
  title: string;
  contextVi: string;
  partnerPromptEn: string;
  partnerPromptVi: string;
  suggestedAnswerEn: string;
  suggestedAnswerVi: string;
  unfamiliarWordStrategy?: string; // Hướng dẫn xử lý khi gặp từ lạ
  grammarFocus: string;
}

const SPEAKING_SCENARIOS_BY_GRADE: Record<GradeLevel, SpeakingScenario[]> = {
  1: [
    {
      id: 101,
      grade: 1,
      title: 'Chào hỏi và giới thiệu tên',
      contextVi: 'Em gặp một người bạn mới ở sân trường mầm non/tiểu học.',
      partnerPromptEn: 'Hello! What is your name?',
      partnerPromptVi: 'Xin chào! Bạn tên là gì?',
      suggestedAnswerEn: 'Hello! My name is Nam.',
      suggestedAnswerVi: 'Xin chào! Tên của mình là Nam.',
      grammarFocus: 'Cấu trúc giới thiệu: My name is + [Tên]',
      unfamiliarWordStrategy: 'Khi bạn nói câu nào em chưa hiểu, em hãy mỉm cười và nói: "Hello!" hoặc "Please say again!".',
    },
    {
      id: 102,
      grade: 1,
      title: 'Nói về màu sắc yêu thích',
      contextVi: 'Cô giáo dạy vẽ hỏi về chiếc bút chì màu của em.',
      partnerPromptEn: 'What color is your pencil?',
      partnerPromptVi: 'Chiếc bút chì của em màu gì?',
      suggestedAnswerEn: 'It is a red pencil.',
      suggestedAnswerVi: 'Nó là một chiếc bút chì màu đỏ.',
      grammarFocus: 'Cấu trúc: It is a + [Màu sắc] + [Đồ vật]',
    },
  ],
  2: [
    {
      id: 201,
      grade: 2,
      title: 'Giới thiệu thành viên trong nhà',
      contextVi: 'Bạn đến chơi nhà và nhìn thấy một bức ảnh gia đình.',
      partnerPromptEn: 'Who is this tall man in the photo?',
      partnerPromptVi: 'Người đàn ông cao trong bức ảnh này là ai vậy?',
      suggestedAnswerEn: 'This is my father. He is very kind.',
      suggestedAnswerVi: 'Đây là bố của mình. Bố rất tốt bụng.',
      grammarFocus: 'Đại từ nhân xưng: He is (cho nam giới) và This is my...',
    },
    {
      id: 202,
      grade: 2,
      title: 'Xin phép thầy cô trong lớp học',
      contextVi: 'Em đến lớp hơi muộn và muốn xin phép thầy giáo bước vào phòng học.',
      partnerPromptEn: 'Yes, who is outside the classroom?',
      partnerPromptVi: 'Ai đang ở ngoài cửa lớp vậy?',
      suggestedAnswerEn: 'May I come in, teacher?',
      suggestedAnswerVi: 'Em xin phép thầy cho em vào lớp ạ.',
      grammarFocus: 'Mẫu câu xin phép lịch sự: May I come in, please?',
    },
  ],
  3: [
    {
      id: 301,
      grade: 3,
      title: 'Nói về đồ dùng học tập trong cặp sách',
      contextVi: 'Bạn cùng bàn hỏi xem em có bao nhiêu chiếc bút mực.',
      partnerPromptEn: 'How many pens do you have in your pencil case?',
      partnerPromptVi: 'Bạn có bao nhiêu chiếc bút trong hộp bút?',
      suggestedAnswerEn: 'I have three blue pens in my pencil case.',
      suggestedAnswerVi: 'Mình có ba chiếc bút màu xanh trong hộp bút.',
      grammarFocus: 'Danh từ số nhiều thêm "s": three pens.',
    },
    {
      id: 302,
      grade: 3,
      title: 'Hỏi về sở thích thú cưng',
      contextVi: 'Bạn hỏi em có thích nuôi mèo không.',
      partnerPromptEn: 'Do you like cats or dogs?',
      partnerPromptVi: 'Bạn thích mèo hay chó hơn?',
      suggestedAnswerEn: 'I like dogs because they are very friendly.',
      suggestedAnswerVi: 'Mình thích chó vì chúng rất thân thiện.',
      grammarFocus: 'Mẫu câu nêu lý do đơn giản: I like... because they are...',
    },
  ],
  4: [
    {
      id: 401,
      grade: 4,
      title: 'Nói về thời gian biểu hàng ngày',
      contextVi: 'Bạn hỏi về giờ em thường thức dậy vào buổi sáng.',
      partnerPromptEn: 'What time do you usually get up in the morning?',
      partnerPromptVi: 'Bạn thường thức dậy lúc mấy giờ vào buổi sáng?',
      suggestedAnswerEn: 'I usually get up at six o\'clock every morning.',
      suggestedAnswerVi: 'Mình thường thức dậy vào lúc 6 giờ mỗi sáng.',
      grammarFocus: 'Trạng từ chỉ tần suất: usually get up at + [giờ].',
    },
    {
      id: 402,
      grade: 4,
      title: 'Hỏi và trả lời về môn học yêu thích',
      contextVi: 'Bạn hỏi tại sao em lại yêu thích môn Tiếng Anh.',
      partnerPromptEn: 'Why do you like English so much?',
      partnerPromptVi: 'Tại sao bạn lại thích môn Tiếng Anh đến vậy?',
      suggestedAnswerEn: 'Because I want to talk to foreign friends around the world.',
      suggestedAnswerVi: 'Bởi vì mình muốn nói chuyện với các bạn bè quốc tế trên thế giới.',
      grammarFocus: 'Cấu trúc: Because I want to + [động từ nguyên thể].',
    },
  ],
  5: [
    {
      id: 501,
      grade: 5,
      title: 'Kể về kỳ nghỉ hè đã qua (Thì Quá khứ đơn)',
      contextVi: 'Sau kỳ nghỉ hè, bạn hỏi em đã đi đâu và làm gì.',
      partnerPromptEn: 'Where did you go on your summer holiday?',
      partnerPromptVi: 'Kỳ nghỉ hè vừa rồi bạn đã đi đâu?',
      suggestedAnswerEn: 'I went to Ha Long Bay with my family and swam in the sea.',
      suggestedAnswerVi: 'Mình đã đến Vịnh Hạ Long cùng gia đình và bơi ở biển.',
      grammarFocus: 'Động từ bất quy tắc thì quá khứ: went (go), swam (swim).',
    },
    {
      id: 502,
      grade: 5,
      title: 'Nói về ước mơ nghề nghiệp tương lai',
      contextVi: 'Thầy giáo hỏi em muốn làm nghề gì khi lớn lên.',
      partnerPromptEn: 'What would you like to be in the future?',
      partnerPromptVi: 'Em muốn làm nghề gì trong tương lai?',
      suggestedAnswerEn: 'I would like to be an English teacher because I love teaching children.',
      suggestedAnswerVi: 'Em muốn trở thành một giáo viên tiếng Anh vì em thích dạy các em nhỏ.',
      grammarFocus: 'Cấu trúc: I would like to be a/an + [nghề nghiệp].',
    },
  ],
  6: [
    {
      id: 601,
      grade: 6,
      title: 'Xử lý khi bạn dùng từ vựng lạ (Kỹ năng phản xạ)',
      contextVi: 'Bạn người nước ngoài mô tả khu phố của bạn ấy: "My town is very tranquil."',
      partnerPromptEn: 'My hometown is very tranquil and peaceful. Do you know where it is?',
      partnerPromptVi: 'Quê của mình rất "tranquil" và thanh bình. Bạn có biết nó ở đâu không?',
      suggestedAnswerEn: 'Excuse me, could you please explain what "tranquil" means?',
      suggestedAnswerVi: 'Xin lỗi bạn, bạn có thể giải thích từ "tranquil" có nghĩa là gì được không?',
      grammarFocus: 'Mẫu câu hỏi làm rõ từ lạ: Could you please explain what [từ] means?',
      unfamiliarWordStrategy: 'Khi người đối thoại dùng từ mới lạ mà em chưa từng nghe, đừng lo lắng! Hãy tự tin dùng: "What does [từ mới] mean?" hoặc "Could you explain that word?". Đây là kỹ năng phản xạ được đánh giá rất cao!',
    },
    {
      id: 602,
      grade: 6,
      title: 'Giới thiệu về trường học mới (Lớp 6)',
      contextVi: 'Một người bạn hỏi cảm nhận của em về ngôi trường trung học cơ sở mới.',
      partnerPromptEn: 'How do you feel about your new secondary school?',
      partnerPromptVi: 'Bạn cảm thấy trường THCS mới của mình như thế nào?',
      suggestedAnswerEn: 'My new school has a large library and the teachers are very friendly.',
      suggestedAnswerVi: 'Trường mới của mình có một thư viện lớn và các thầy cô giáo rất thân thiện.',
      grammarFocus: 'Thì Hiện tại đơn với chủ ngữ số ít: My school has...',
    },
  ],
  7: [
    {
      id: 701,
      grade: 7,
      title: 'Phản xạ khi gặp từ chỉ hoạt động tình nguyện khó',
      contextVi: 'Bạn hỏi về dự án từ thiện và dùng từ: "philanthropy".',
      partnerPromptEn: 'Our club is involved in community philanthropy this weekend.',
      partnerPromptVi: 'Câu lạc bộ chúng mình tham gia hoạt động "philanthropy" cuối tuần này.',
      suggestedAnswerEn: 'Sorry, I am not familiar with the word "philanthropy". Does it mean charity work?',
      suggestedAnswerVi: 'Xin lỗi, mình chưa quen với từ "philanthropy". Có phải nó có nghĩa là công việc từ thiện không?',
      grammarFocus: 'Mẫu câu xác nhận: I am not familiar with... Does it mean...?',
      unfamiliarWordStrategy: 'Chiến thuật đoán nghĩa và hỏi lại bằng câu phỏng đoán: "Does it mean...?" giúp cuộc trò chuyện không bị ngắt quãng!',
    },
    {
      id: 702,
      grade: 7,
      title: 'Đưa ra lời khuyên về thói quen ăn uống lành mạnh',
      contextVi: 'Bạn em than phiền rằng dạo này bạn ấy thường xuyên thức khuya và mệt mỏi.',
      partnerPromptEn: 'I feel exhausted lately because I always stay up late studying.',
      partnerPromptVi: 'Dạo này mình thấy kiệt sức vì hay thức khuya học bài.',
      suggestedAnswerEn: 'You should get at least eight hours of sleep and avoid drinking too much coffee.',
      suggestedAnswerVi: 'Bạn nên ngủ ít nhất 8 tiếng và tránh uống quá nhiều cà phê.',
      grammarFocus: 'Động từ khuyết thiếu: You should + [nguyên thể] và avoid + V-ing.',
    },
  ],
  8: [
    {
      id: 801,
      grade: 8,
      title: 'Diễn đạt ý tưởng khi bị thiếu từ vựng (Paraphrasing)',
      contextVi: 'Em muốn kể về một dụng cụ đo động đất nhưng quên mất từ "seismograph".',
      partnerPromptEn: 'What instrument do scientists use to detect earthquakes?',
      partnerPromptVi: 'Các nhà khoa học dùng thiết bị gì để phát hiện động đất?',
      suggestedAnswerEn: 'I cannot remember the exact technical term, but it is a device that detects and records ground vibrations.',
      suggestedAnswerVi: 'Tôi không nhớ thuật ngữ chính xác, nhưng đó là thiết bị phát hiện và ghi lại các rung chấn của mặt đất.',
      grammarFocus: 'Mệnh đề quan hệ: ...a device that detects and records...',
      unfamiliarWordStrategy: 'Kỹ thuật Paraphrasing (diễn giải định nghĩa đồ vật) là bí quyết vàng trong Speaking khi quên từ vựng chuyên ngành.',
    },
    {
      id: 802,
      grade: 8,
      title: 'Nói về phong tục tập quán truyền thống',
      contextVi: 'Khách du lịch quốc tế hỏi về phong tục đón Tết Nguyên Đán ở Việt Nam.',
      partnerPromptEn: 'What is the most unique custom during Tet holiday in Vietnam?',
      partnerPromptVi: 'Phong tục độc đáo nhất trong dịp Tết ở Việt Nam là gì?',
      suggestedAnswerEn: 'Families gather to make Banh Chung and give lucky money to children for good health.',
      suggestedAnswerVi: 'Các gia đình quây quần gói bánh chưng và mừng tuổi cho trẻ nhỏ để chúc sức khỏe.',
      grammarFocus: 'Động từ chỉ mục đích: gather to make... and give... for...',
    },
  ],
  9: [
    {
      id: 901,
      grade: 9,
      title: 'Phản xạ với thuật ngữ học thuật phức tạp',
      contextVi: 'Trong bài thuyết trình, bạn dùng thuật ngữ "sustainable urbanization".',
      partnerPromptEn: 'We need to focus strictly on sustainable urbanization to mitigate global warming.',
      partnerPromptVi: 'Chúng ta cần tập trung vào "đô thị hóa bền vững" để giảm thiểu sự nóng lên toàn cầu.',
      suggestedAnswerEn: 'Could you please elaborate on sustainable urbanization and give a practical example in our city?',
      suggestedAnswerVi: 'Bạn có thể vui lòng giải thích chi tiết hơn về đô thị hóa bền vững và đưa ra một ví dụ thực tế ở thành phố chúng ta không?',
      grammarFocus: 'Mẫu câu trang trọng: Could you please elaborate on... and give an example?',
      unfamiliarWordStrategy: 'Dùng cụm "Could you elaborate on..." để yêu cầu đối phương giải thích sâu hơn một cách học thuật và lịch sự.',
    },
    {
      id: 902,
      grade: 9,
      title: 'Bày tỏ quan điểm về vai trò của tiếng Anh toàn cầu',
      contextVi: 'Thầy giáo hỏi em tại sao tiếng Anh lại quan trọng đối với thế hệ trẻ ngày nay.',
      partnerPromptEn: 'In your opinion, why is mastering English essential for young people today?',
      partnerPromptVi: 'Theo em, tại sao việc làm chủ tiếng Anh lại thiết yếu đối với người trẻ ngày nay?',
      suggestedAnswerEn: 'English acts as a global passport, enabling us to access international knowledge and connect with global opportunities.',
      suggestedAnswerVi: 'Tiếng Anh như một tấm hộ chiếu toàn cầu, giúp chúng ta tiếp cận tri thức quốc tế và kết nối với các cơ hội trên khắp thế giới.',
      grammarFocus: 'Cấu trúc: acts as..., enabling us to access... and connect...',
    },
  ],
};

interface SpeakingStudioProps {
  gradeLevel: GradeLevel;
  onBackToQuiz?: () => void;
}

export const SpeakingStudio: React.FC<SpeakingStudioProps> = ({
  gradeLevel,
  onBackToQuiz,
}) => {
  const scenarios = SPEAKING_SCENARIOS_BY_GRADE[gradeLevel] || SPEAKING_SCENARIOS_BY_GRADE[6];
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [lastTranscript, setLastTranscript] = useState<string>('');
  const [lastScore, setLastScore] = useState<number | null>(null);
  const [isCompletedScenario, setIsCompletedScenario] = useState<boolean>(false);

  const scenario = scenarios[currentScenarioIndex] || scenarios[0];

  const handleSpoken = (transcript: string, matchedOption?: string, accuracyScore?: number) => {
    setLastTranscript(transcript);
    setLastScore(accuracyScore || 80);
    setIsCompletedScenario(true);
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex((prev) => prev + 1);
      setLastTranscript('');
      setLastScore(null);
      setIsCompletedScenario(false);
    }
  };

  const handleResetCurrent = () => {
    setLastTranscript('');
    setLastScore(null);
    setIsCompletedScenario(false);
  };

  const playPromptAudio = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 mb-8" id="speaking-studio">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
              <Mic className="w-5 h-5" />
            </span>
            <h2 className="text-lg font-bold text-slate-800">
              Phòng Luyện Nói Tương Tác (Speaking Studio) – Lớp {gradeLevel}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Thực hành phản xạ nói trực tiếp qua Micro, khắc phục lỗi ngữ pháp khẩu ngữ và tự tin xử lý khi gặp từ lạ.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {onBackToQuiz && (
            <button
              type="button"
              onClick={onBackToQuiz}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Về bài kiểm tra chẩn đoán
            </button>
          )}
          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Tình huống {currentScenarioIndex + 1}/{scenarios.length}
          </span>
        </div>
      </div>

      {/* Scenario Card */}
      <div className="bg-gradient-to-br from-emerald-50/40 via-white to-slate-50 border border-emerald-100 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
            Chủ đề: {scenario.title}
          </span>
          <span className="text-xs font-medium text-slate-500">
            Trình độ: Lớp {gradeLevel}
          </span>
        </div>

        <p className="text-xs text-slate-600 mb-4 bg-white/80 p-3 rounded-xl border border-slate-200/60">
          📍 <strong>Bối cảnh giao tiếp:</strong> {scenario.contextVi}
        </p>

        {/* AI Partner / Speaker Audio Prompt */}
        <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-2xs mb-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              Bạn hội thoại hỏi em:
            </span>
            <button
              type="button"
              onClick={() => playPromptAudio(scenario.partnerPromptEn)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Nghe câu hỏi</span>
            </button>
          </div>

          <p className="text-base sm:text-lg font-bold text-slate-900 mb-1">
            "{scenario.partnerPromptEn}"
          </p>
          <p className="text-xs text-slate-500 italic">
            ({scenario.partnerPromptVi})
          </p>
        </div>

        {/* Suggested Response with Voice Input */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Câu trả lời mẫu gợi ý:
              </span>
              <button
                type="button"
                onClick={() => playPromptAudio(scenario.suggestedAnswerEn)}
                className="text-xs text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe phát âm chuẩn</span>
              </button>
            </div>
            <p className="text-sm font-semibold text-emerald-950">
              "{scenario.suggestedAnswerEn}"
            </p>
            <p className="text-xs text-slate-500 italic mt-0.5">
              ({scenario.suggestedAnswerVi})
            </p>
          </div>

          {/* Micro Speaking Area */}
          <VoiceSpeakingInput
            targetSentence={scenario.suggestedAnswerEn}
            onSpoken={handleSpoken}
            label="Luyện nói câu này bằng Micro của em"
          />

          {/* Pedagogical Strategy when encountering unfamiliar words */}
          {scenario.unfamiliarWordStrategy && (
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950 flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-900">Chiến thuật xử lý khi gặp từ lạ khi nói:</strong>
                <p className="mt-0.5 text-amber-900/90 leading-relaxed">
                  {scenario.unfamiliarWordStrategy}
                </p>
              </div>
            </div>
          )}

          {/* Grammar focus rule note */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
            <span className="font-bold text-slate-700">Quy tắc ngữ pháp khi nói:</span>
            <span>{scenario.grammarFocus}</span>
          </div>

          {/* Action to proceed to next scenario */}
          {isCompletedScenario && (
            <div className="pt-3 flex items-center justify-between gap-3 animate-fadeIn">
              <button
                type="button"
                onClick={handleResetCurrent}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Nói lại câu này</span>
              </button>

              {currentScenarioIndex < scenarios.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNextScenario}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors cursor-pointer"
                >
                  <span>Sang tình huống tiếp theo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <Award className="w-4 h-4" />
                  <span>Em đã hoàn thành xuất sắc các tình huống luyện nói Lớp {gradeLevel}!</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
