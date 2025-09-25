/* https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple */
import './App.css';
import { useState } from 'react';
import Question from './Question';
function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [finishedWithQuiz, setFinishedWithQuiz] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quizzical</h1>
      </header>

      {!hasQuizStarted && <button onClick={() => { setHasQuizStarted(!hasQuizStarted) }}>Start Quiz</button>}


      {hasQuizStarted &&
        <div>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          {!finishedWithQuiz && <button onClick={() => setFinishedWithQuiz(!finishedWithQuiz)}>Check Answers</button>}
          {finishedWithQuiz && <button>Play Again</button>}
        </div>}
    </div>
  );
}

export default App;
