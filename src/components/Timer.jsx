/* eslint-disable react/prop-types */

const Timer = ({ width,timeLeft }) => {


  return (
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
  );
};

export default Timer;
