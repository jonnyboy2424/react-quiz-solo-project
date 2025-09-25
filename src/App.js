/* https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple */
import './App.css';
import { useState, useEffect } from 'react';
import Question from './Question';
function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [finishedWithQuiz, setFinishedWithQuiz] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [guessedAnswers, setGuessedAnswers] = useState(null);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        return response.json();
      })
      .then(data => {
        setQuizQuestions(data.results.map((question, index) => {
          return (
            <Question key={index} question={question.question} incorrectChoice1={question.incorrect_answers[0]} incorrectChoice2={question.incorrect_answers[1]} incorrectChoice3={question.incorrect_answers[2]} correctChoice={question.correct_answer} />
          )
        }));
      })
  }, [])


  return (
    <div className="App">
      {!hasQuizStarted && <header className="App-header">
        <h1>Quizzical</h1>
      </header>}

      {!hasQuizStarted && <button onClick={() => {
        {
          console.log(quizQuestions)
          setHasQuizStarted(!hasQuizStarted)
        }
      }}>Start Quiz</button>}


      {hasQuizStarted &&
        <div>
          {quizQuestions}
          {!finishedWithQuiz && <button onClick={() => setFinishedWithQuiz(!finishedWithQuiz)}>Check Answers</button>}
          {finishedWithQuiz && <button onClick={() => {
            setGuessedAnswers([]);
            setHasQuizStarted(false);
            setFinishedWithQuiz(false);
          }}>Play Again</button>}
        </div>}
    </div>
  );
}

export default App;
