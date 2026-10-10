import React from 'react';

interface ResultCardProps {
  totalQuestions: number; correctAnswers: number; incorrectAnswers: number;
  score: number; percentage: number; onRetake: () => void; onHome: () => void;
}

function ResultCard({
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  score,
  percentage,
  onRetake,
  onHome
}: ResultCardProps) {
  // Determine message based on percentage
  let feedbackMessage = 'Keep practicing!';
  let feedbackClass = 'feedback-neutral';

  if (percentage >= 80) {
    feedbackMessage = 'Outstanding performance!';
    feedbackClass = 'feedback-success';
  } else if (percentage >= 50) {
    feedbackMessage = 'Good job! Nice effort!';
    feedbackClass = 'feedback-good';
  }

  return (
    <div className="result-card">
      <div className="result-header">
        <span className="result-badge">Quiz Completed</span>
        <h2 className="result-title">Your Score</h2>
        <div className="score-display">
          <span className="score-big">{score}</span>
          <span className="score-divider">/</span>
          <span className="score-total">{totalQuestions}</span>
        </div>
        <p className={`feedback-text ${feedbackClass}`}>{feedbackMessage}</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Percentage</span>
          <span className="stat-value highlight-percent">{percentage.toFixed(0)}%</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Questions</span>
          <span className="stat-value">{totalQuestions}</span>
        </div>
        <div className="stat-card success-stat">
          <span className="stat-label">Correct Answers</span>
          <span className="stat-value text-success">{correctAnswers}</span>
        </div>
        <div className="stat-card danger-stat">
          <span className="stat-label">Incorrect Answers</span>
          <span className="stat-value text-danger">{incorrectAnswers}</span>
        </div>
      </div>

      <div className="result-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onRetake}
        >
          Retake Quiz
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onHome}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
