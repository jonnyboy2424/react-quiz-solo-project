/* https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple */
import './App.css';
import { useState, useEffect } from 'react';
import Question from './Question';
function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [finishedWithQuiz, setFinishedWithQuiz] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(null);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        return response.json();
      })
      .then(data => {
        setQuizQuestions(data.results);
      })
  }, [])


  return (
    <div className="App">
      {!hasQuizStarted && <header className="App-header">
        <h1>Quizzical</h1>
      </header>}

      {!hasQuizStarted && <button onClick={() => { setHasQuizStarted(!hasQuizStarted) }}>Start Quiz</button>}


      {hasQuizStarted &&
        <div>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          {!finishedWithQuiz && <button onClick={() => setFinishedWithQuiz(!finishedWithQuiz)}>Check Answers</button>}
          {finishedWithQuiz && <button onClick={() => {
            setHasQuizStarted(false);
            setFinishedWithQuiz(false);
          }}>Play Again</button>}
        </div>}
    </div>
  );
}

export default App;
