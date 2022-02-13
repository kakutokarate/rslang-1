export interface AnswerProps {
  answerText: string;
  currentAnswer: string;
  correctAnswer: string;
  onSelectAnswer: (answerText: string) => void;
}
