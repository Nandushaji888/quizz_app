/* eslint-disable react/prop-types */
const Instructions = ({ setStartQuiz }) => {
  return (
    <div className="py-6  text-center lg:mt-0 mt-5">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Ultimate Quiz Challenge!
      </h1>
      <p className="text-lg mb-6">
        Thank you for joining us! Get ready to test your knowledge with our fun
        and engaging quiz. Before we begin, here are a few things you need to
        know:
      </p>

      <ul className="text-left mb-6 list-disc list-inside">
        <li>
          <strong>Time Limit:</strong> You have <strong>5 seconds</strong> to
          answer each question. A timer will be displayed at the top of the
          screen, so keep an eye on it!
        </li>
        <li>
          <strong>Change Your Answer:</strong> If you change your mind, you can
          select a different answer within the 5-second limit.
        </li>
        <li>
          <strong>Auto-Advance:</strong> If you don’t choose an answer within 5
          seconds, the quiz will automatically move on to the next question.
        </li>
        <li>
          <strong>Scoring:</strong> You’ll earn <strong>1 point</strong> for
          every correct answer. Try to score as high as possible!
        </li>
        <li>
          <strong>Review:</strong> After submitting your answer, the correct
          answer will be highlighted, and you’ll have 5 seconds to review it
          before moving on.
        </li>
        <li>
          <strong>Final Score:</strong> At the end of the quiz, your final score
          will be displayed. You’ll have the option to play again and try to
          beat your score.
        </li>
      </ul>

      <button
        onClick={() => setStartQuiz(true)}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Instructions;
