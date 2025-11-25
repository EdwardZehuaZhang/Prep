export interface Question {
  topic: string;
  question: string;
  type: 'fill' | 'short' | 'multiple-choice';
  answer: string | string[];
  acceptableAnswers?: string[];
  options?: string[];
  hint: string;
}

export interface QuizState {
  currentQuestion: number;
  userAnswer: string;
  showFeedback: boolean;
  isCorrect: boolean;
  score: number;
  attempted: number;
  selectedTopic: string;
}
