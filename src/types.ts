export interface QuizResultState {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  score: number;
  percentage: number;
  userAnswers: Record<number, string>;
  completed: boolean;
}
