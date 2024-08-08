import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, increaseScore } from "../redux/quizSlice";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, showResults, score } = useSelector(
    (state) => state.quiz
  );
  const [timeLeft, setTimeLeft] = useState(5);
  const [width, setWidth] = useState(100);
//   const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [btnDisabled, setBtnDisable] = useState(false);

  useEffect(() => {
    if (timeLeft === -1) {
    //   setShowCorrectAnswer(true);
      setBtnDisable(true);
      setTimeout(() => {
        // setShowCorrectAnswer(false);
        dispatch(nextQuestion());
        setTimeLeft(5);
        setWidth(100);
        setBtnDisable(false);
      }, 5000);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, dispatch]);

  useLayoutEffect(() => {
    setWidth((timeLeft / 5) * 100);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(5);
    setWidth(100);
  }, [currentQuestionIndex]);

  if (showResults) {
    return <Result setTimeLeft={setTimeLeft} score={score} />;
  }

  const currentQuestion = questions[currentQuestionIndex];
//   const correctAnswer = currentQuestion?.correctAnswer;
  return (
    <div className="quiz">
      <h1 className="text-xl font-bold text-blue-700 my-4">Question</h1>

      <Question
        question={currentQuestion}
        onAnswer={(isCorrect) => {
          if (isCorrect) dispatch(increaseScore());
        }}
        btnDisabled={btnDisabled}
      />
      <div className="w-full h-2 bg-gray-300 mt-6 relative overflow-hidden">
        <div
          className={`h-full transition-all ${
            timeLeft <= 1 ? "bg-red-500" : "bg-green-500"
          }`}
          style={{
            width: `${width}%`,
            transitionDuration: `${timeLeft === 5 ? "0s" : "1s"}`,
            transitionTimingFunction: "linear",
          }}
        ></div>
      </div>
      {/* {showCorrectAnswer && (
        <div className="">
          <span className="font-bold">Correct answer</span>: {correctAnswer}
        </div>
      )} */}
    </div>
  );
};

export default Quiz;
