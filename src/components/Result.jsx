/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { resetQuiz } from "../redux/quizSlice";

const Result = ({ setTimeLeft, score }) => {
  const dispatch = useDispatch();
  const handlePlayAgain = () => {
    dispatch(resetQuiz());
    setTimeLeft(5);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold text-blue-900">Result</h1>
      <h2 className="text-lg">
        Your Score: <span className="text-xl font-semibold">{score}</span>
      </h2>
      {score < 1 && (
        <div className="font-semibold text-2xl text-blue-800">
          Better luck next time...
        </div>
      )}
      {score > 2 && (
        <div className="font-semibold text-2xl text-blue-800">Great!!!</div>
      )}
      <button
        onClick={handlePlayAgain}
        className="bg-green-500 text-white px-4 py-2 m-2 rounded"
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;
