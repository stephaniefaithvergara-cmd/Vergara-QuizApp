import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;

  // Handle case where user navigates directly to /result without completing quiz
  if (!state || !state.completed) {
    return (
      <main className="page-container">
        <div className="result-card empty-result-card">
          <div className="empty-state-icon">⚠️</div>
          <h2 className="result-title">No Quiz Results Found</h2>
          <p className="feedback-text feedback-neutral">
            Please complete the quiz to view your score and performance summary.
          </p>
          <div className="result-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/quiz')}
            >
              Start Quiz
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/')}
            >
              Return Home
            </button>
          </div>
        </div>
      </main>
    );
  }

  const {
    totalQuestions = 0,
    correctAnswers = 0,
    incorrectAnswers = 0,
    score = 0,
    percentage = 0,
  } = state;

  const handleRetake = () => {
    // Navigate to /quiz to start a clean attempt with reset state
    navigate('/quiz');
  };

  const handleHome = () => {
    // Navigate back to the home page
    navigate('/');
  };

  return (
    <main className="page-container">
      <ResultCard
        totalQuestions={totalQuestions}
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
        score={score}
        percentage={percentage}
        onRetake={handleRetake}
        onHome={handleHome}
      />
    </main>
  );
}

export default Result;
