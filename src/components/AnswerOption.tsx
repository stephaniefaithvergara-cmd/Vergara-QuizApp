import React from 'react';

interface AnswerOptionProps {
  choice: string;
  index: number;
  isSelected: boolean;
  onSelect: (choice: string) => void;
}

function AnswerOption({ choice, index, isSelected, onSelect }: AnswerOptionProps) {
  const optionLabels = ['A', 'B', 'C', 'D'];
  const label = optionLabels[index] || `${index + 1}`;

  return (
    <button
      type="button"
      className={`answer-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(choice)}
      aria-pressed={isSelected}
    >
      <span className="option-badge">{label}</span>
      <span className="option-text">{choice}</span>
      <span className="option-radio" aria-hidden="true">
        <span className="option-radio-dot" />
      </span>
    </button>
  );
}

export default AnswerOption;
