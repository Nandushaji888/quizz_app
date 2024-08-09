/* eslint-disable react/prop-types */
import { useState } from "react";

const Question = ({ question, onAnswer, btnDisabled }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    onAnswer(answer === question.correctAnswer);
  };

  return (
    <div className="question">
      <h2 className="text-lg mb-4 ">{question.question}</h2>
      <p className="my-3 font-semibold">options:</p>
      <div className="options grid grid-cols-1 lg:grid-cols-2 gap-5">
        {question.options.map((option, index) => (
          <button
            disabled={btnDisabled}
            key={index}
            onClick={() => handleAnswer(option)}
            className={`option px-1 py-2 rounded text-white transition-transform duration-200 ease-in-out ${
              btnDisabled
                ? option === question.correctAnswer
                  ? "bg-green-500"
                  : selectedAnswer === option
                  ? "bg-red-500"
                  : "bg-blue-500"
                : selectedAnswer === option
                ? "bg-orange-400"
                : "bg-blue-500 hover:bg-blue-600 hover:scale-105"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
