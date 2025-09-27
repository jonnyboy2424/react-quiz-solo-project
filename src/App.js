import './App.css';
import { useState, useEffect } from 'react';
import Question from './Question';
function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [finishedWithQuiz, setFinishedWithQuiz] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null,
    answer5: null
  });


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
  }, []);


  return (
    <div className="App">
      {!hasQuizStarted && <header className="App-header">
        <h1>Quizzical</h1>
      </header>}

      {!hasQuizStarted && <button onClick={() => {
        setHasQuizStarted(!hasQuizStarted);
      }}>Start Quiz</button>}


      {hasQuizStarted &&
        <div>
          {quizQuestions && quizQuestions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              incorrectChoice1={question.incorrect_answers[0]}
              incorrectChoice2={question.incorrect_answers[1]}
              incorrectChoice3={question.incorrect_answers[2]}
              correctChoice={question.correct_answer}
              addCorrectAnswer={(answer) => {
                setCorrectAnswers((prev) => [...prev, answer])
              }}
              selectedAnswers={selectedAnswers}
              setSelectedAnswers={setSelectedAnswers}
            />
          ))}
          {!finishedWithQuiz && <button onClick={() => {

            setFinishedWithQuiz(!finishedWithQuiz)
          }}>Check Answers</button>}
          {finishedWithQuiz && <button onClick={() => {
            setHasQuizStarted(false);
            setFinishedWithQuiz(false);
          }}>Play Again</button>}
        </div>}
    </div>
  );
}

export default App;
