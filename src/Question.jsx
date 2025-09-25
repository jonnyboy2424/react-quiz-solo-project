export default function Question({ question, incorrectChoice1, incorrectChoice2, incorrectChoice3, correctChoice }) {
  const questionOptions = [incorrectChoice1, incorrectChoice2, incorrectChoice3, correctChoice];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledQuestions = shuffle(questionOptions);

  return (
    <div>
      <h2>{question}</h2>
      <form>
        <label>
          <input type="radio" name="option" value="1" /> {shuffledQuestions[0]}
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="2" /> {shuffledQuestions[1]}
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="3" /> {shuffledQuestions[2]}
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="4" /> {shuffledQuestions[3]}
        </label>
      </form>
    </div>
  );
}
