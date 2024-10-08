import { Provider } from "react-redux";
import store from "./redux/store";
import Quiz from "./components/Quiz";
import { useState } from "react";
import Instructions from "./components/Instructions";
import './app.css'; // Import the CSS file

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <Provider store={store}>
      <div className="App flex flex-col gap-5 items-center justify-center app-background">
        <h1 className="font-bold my-10 text-4xl text-gray-100">Quick Quiz</h1>

        <div className="border border-gray-400 p-8 rounded-xl bg-slate-300 w-80 lg:w-1/3 mb-3">
          {!startQuiz ? <Instructions setStartQuiz={setStartQuiz} /> : <Quiz />}
        </div>
      </div>
    </Provider>
  );
}

export default App;
