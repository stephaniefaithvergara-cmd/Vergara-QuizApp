import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import QuizHeader from '../components/QuizHeader';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import type { QuizResultState } from '../types';

function Quiz() {
  const navigate = useNavigate();

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const totalQuestions = questions.length;
  const currentQuestionData = questions[currentQuestionIndex];
  const currentSelectedAnswer = selectedAnswers[currentQuestionIndex] || '';

  // Handler to select or change an answer for the current question
  const handleSelectAnswer = (choice: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: choice,
    }));
  };

  // Handler to navigate back to previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Handler to move to next question or submit final results
  const handleNext = () => {
    // If not on the last question, advance to next question
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate final score accurately without double counting
      let correctCount = 0;
      questions.forEach((q, index) => {
        if (selectedAnswers[index] === q.correctAnswer) {
          correctCount++;
        }
      });

      const incorrectCount = totalQuestions - correctCount;
      const percentage = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;

      // Navigate to the result page with calculated data
      const resultState: QuizResultState = {
        totalQuestions,
        correctAnswers: correctCount,
        incorrectAnswers: incorrectCount,
        score: correctCount,
        percentage,
        userAnswers: selectedAnswers,
        completed: true,
      };
      navigate('/result', { state: resultState });
    }
  };

  const isAnswerSelected = Boolean(currentSelectedAnswer);
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <main className="page-container">
      <div className="quiz-wrapper">
        <QuizHeader
          title="Frontend Quiz"
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
        />

        <ProgressBar
          current={currentQuestionIndex + 1}
          total={totalQuestions}
        />

        <QuestionCard
          questionData={currentQuestionData}
          selectedAnswer={currentSelectedAnswer}
          onSelectAnswer={handleSelectAnswer}
        />

        <div className="quiz-navigation-controls">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            aria-label="Go to previous question"
          >
            Previous
          </button>

          <button
            type="button"
            className={`btn btn-primary ${isLastQuestion ? 'btn-submit' : ''}`}
            onClick={handleNext}
            disabled={!isAnswerSelected}
            aria-label={isLastQuestion ? 'Submit Quiz' : 'Next Question'}
          >
            {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default Quiz;
