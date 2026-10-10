import React from 'react';

interface QuizHeaderProps { title?: string; currentQuestion: number; totalQuestions: number; }

function QuizHeader({ title = 'Frontend Quiz', currentQuestion, totalQuestions }: QuizHeaderProps) {
  return (
    <header className="quiz-header">
      <div className="quiz-header-top">
        <h1 className="quiz-header-title">{title}</h1>
        <div className="question-counter-badge">
          Question <span className="counter-highlight">{currentQuestion}</span> of {totalQuestions}
        </div>
      </div>
    </header>
  );
}

export default QuizHeader;
