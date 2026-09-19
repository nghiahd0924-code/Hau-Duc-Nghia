import { GradeLevel } from './components/GradeSelection';
export type { GradeLevel };

export type GrammarTopic =
  | 'present_simple'
  | 'present_continuous'
  | 'there_is_are'
  | 'letters_phonics'
  | 'numbers_colors'
  | 'family_animals'
  | 'simple_actions'
  | 'prepositions_place'
  | 'can_ability'
  | 'time_dates'
  | 'past_simple'
  | 'comparatives'
  | 'used_to'
  | 'conjunctions'
  | 'present_perfect'
  | 'passive_voice'
  | 'relative_clauses'
  | 'conditional_sentences';

export type ListeningTopic =
  | 'listening_specific_info'
  | 'listening_activities_hobbies'
  | 'listening_school_places'
  | 'listening_phonics_letters'
  | 'listening_animals_objects'
  | 'listening_positions'
  | 'listening_daily_schedule'
  | 'listening_vacation_past'
  | 'listening_travel_experiences'
  | 'listening_news_interview';

export type SpeakingTopic =
  | 'speaking_unfamiliar_words'
  | 'speaking_grammar_habits'
  | 'speaking_opinions_reasons'
  | 'speaking_greetings_intro'
  | 'speaking_classroom_commands'
  | 'speaking_questions_answers'
  | 'speaking_past_stories'
  | 'speaking_invitations_suggestions'
  | 'speaking_debates_interviews';

export type WritingTopic =
  | 'writing_sentence_order'
  | 'writing_verb_tenses'
  | 'writing_prepositions'
  | 'writing_conjunctions'
  | 'writing_adjectives_order'
  | 'writing_subject_verb_agreement'
  | 'writing_simple_compound'
  | 'writing_relative_clauses'
  | 'writing_conditionals_opinion'
  | 'writing_essay_paragraph';

export type ReadingTopic =
  | 'reading_vocabulary_context'
  | 'reading_grammar_tenses'
  | 'reading_prepositions_connectors'
  | 'reading_main_idea_details'
  | 'reading_reference_words'
  | 'reading_phonics_sight_words'
  | 'reading_daily_routines'
  | 'reading_inference_logic'
  | 'reading_passive_conditionals';

export type TopicKey = GrammarTopic | ListeningTopic | SpeakingTopic | WritingTopic | ReadingTopic | string;

export interface EssayPromptDetails {
  topicKey: string;
  topicTitleEn: string;
  topicTitleVi: string;
  instructionsEn: string;
  instructionsVi: string;
  guidingQuestions: string[];
  suggestedStarters: string[];
  minSentences?: number;
  maxSentences?: number;
  targetSentences?: string;
  minWords: number;
  targetWords: string;
  sampleEssay: string;
  grade?: GradeLevel;
}

export interface TextbookPeriod {
  id: string;
  periodNumber: number;
  periodName: string;
  lessonTitle: string;
  textbookSection: string;
  summary: string;
  skillFocus: {
    grammar: string;
    listening: string;
    reading: string;
    writing: string;
    speaking: string;
  };
}

export interface TextbookUnit {
  id: string;
  unitNumber: number;
  unitTitle: string;
  themeVi: string;
  icon: string;
  periods: TextbookPeriod[];
}

export interface Question {
  id: number;
  topic: TopicKey;
  topicTitle: string;
  prompt: string;
  unitTitle?: string;
  periodName?: string;
  lessonId?: string;
  readingPassage?: string; // Đoạn văn đọc hiểu cho bài tập Reading
  audioScript?: string; // Lời thoại / đoạn audio để học sinh nghe
  audioContext?: string; // Gợi ý ngữ cảnh nghe
  options: string[];
  correctAnswer: string;
  hintExplanation: string;
  grade?: GradeLevel;
  // Writing specific properties:
  isEssay?: boolean;
  essayDetails?: EssayPromptDetails;
  inputType?: 'text' | 'textarea' | 'choice';
  wordBank?: string[];
}

export interface QuestionAnalysis {
  questionId: number;
  topic: TopicKey;
  topicTitle: string;
  isCorrect: boolean;
  studentAnswer: string;
  correctAnswer: string;
  readingPassage?: string;
  audioScript?: string;
  errorType?: string;
  shortExplanation: string;
  score?: number; // Điểm số AI chấm (0 - 100)
  isEssay?: boolean;
  essayTopicTitle?: string;
  strengths?: string[];
  corrections?: string[];
}

export interface TopicMapSummary {
  topic: TopicKey;
  topicTitle: string;
  status: 'good' | 'need_practice' | 'priority_review';
  correctCount: number;
  totalCount: number;
  statusNote: string;
}

export interface PracticeQuestion {
  id: number;
  topic: TopicKey;
  topicTitle: string;
  prompt: string;
  readingPassage?: string;
  audioScript?: string;
  options: string[];
  correctAnswer: string;
  targetedMistake: string;
  explanation: string;
}

export interface AnalysisResponse {
  detailedAnalysis: QuestionAnalysis[];
  grammarMap: {
    goodTopics: TopicMapSummary[];
    needPracticeTopics: TopicMapSummary[];
    priorityReviewTopics: TopicMapSummary[];
    commonMistakeNote: string;
  };
  nextPractice: PracticeQuestion[];
  skillType?: 'grammar' | 'listening' | 'speaking' | 'writing' | 'reading';
  gradeLevel?: GradeLevel;
}

export interface GrammarLesson {
  id: string;
  titleVi: string;
  titleEn: string;
  category: 'tenses' | 'structures' | 'parts_of_speech' | 'advanced_syntax';
  categoryLabel: string;
  levelBadge: string;
  formulaSummary: string;
  shortDescription: string;
  theoryOverview: {
    definition: string;
    rules: { rule: string; example: string }[];
    signalWords?: string[];
    commonMistakes?: string[];
  };
  questions: Question[];
}

export interface InventoryItem {
  id: string;
  name: string;
  type: string;
  icon: string;
  description: string;
  rarity?: string;
  obtainedDate?: string;
}
