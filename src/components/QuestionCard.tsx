import React from 'react';
import type { Question } from '../data/questions';

interface QuestionCardProps { questionData: Question | undefined; selectedAnswer: string; onSelectAnswer: (choice: string) => void; }
import AnswerOption from './AnswerOption';

function QuestionCard({ questionData, selectedAnswer, onSelectAnswer }: QuestionCardProps) {
  if (!questionData) return null;

  return (
    <div className="question-card">
      <h3 className="question-title">
        {questionData.question}
      </h3>

      <div className="options-grid" role="group" aria-label="Answer choices">
        {questionData.choices.map((choice, index) => (
          <AnswerOption
            key={index}
            choice={choice}
            index={index}
            isSelected={selectedAnswer === choice}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
