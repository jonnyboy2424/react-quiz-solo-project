import { useEffect, useState } from "react";

export default function Question({ question, incorrectChoice1, incorrectChoice2, incorrectChoice3, correctChoice, addCorrectAnswer, selectedAnswers, setSelectedAnswers }) {
  const questionOptions = [incorrectChoice1, incorrectChoice2, incorrectChoice3, correctChoice];
  const [shuffledAnswers] = useState(() => shuffle(questionOptions));




  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }




  useEffect(() => {
    addCorrectAnswer(prev => ({
      ...prev,
      [question]: correctChoice
    })
    )
  }, []);


  return (
    <div>
      <h2>{question}</h2>
      <form>
        <label>
          <input
            type="radio"
            name="option"
            value={shuffledAnswers[0]}
            onChange={() =>
              setSelectedAnswers(prev => ({
                ...prev,
                [question]: shuffledAnswers[0]
              }))
            }
          />
          {shuffledAnswers[0]}
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="option"
            value={shuffledAnswers[1]}
            onChange={() =>
              setSelectedAnswers(prev => ({
                ...prev,
                [question]: shuffledAnswers[1]
              }))
            }
          />
          {shuffledAnswers[1]}
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="option"
            value={shuffledAnswers[2]}
            onChange={() =>
              setSelectedAnswers(prev => ({
                ...prev,
                [question]: shuffledAnswers[2]
              }))
            }
          />
          {shuffledAnswers[2]}
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="option"
            value={shuffledAnswers[3]}
            onChange={() =>
              setSelectedAnswers(prev => ({
                ...prev,
                [question]: shuffledAnswers[3]
              }))
            }
          />
          {shuffledAnswers[3]}
        </label>
      </form>
    </div>
  );
}
