import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <main className="page-container">
      <div className="home-card">
        <div className="home-icon-wrapper">
          <span className="quiz-symbol">💡</span>
        </div>

        <p className="home-subtitle">Welcome to the</p>
        <h1 className="home-title">Frontend Quiz!</h1>

        <p className="home-description">
          Test your web development skills across HTML, CSS, JavaScript, and React.
          Answer all 10 questions to see how well you know modern frontend development.
        </p>

        <div className="quiz-details-pills">
          <span className="pill">📝 10 Questions</span>
          <span className="pill">⏱️ Self-Paced</span>
          <span className="pill">🎯 Multiple Choice</span>
        </div>

        <div className="home-action">
          <button
            type="button"
            className="btn btn-primary btn-large"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
