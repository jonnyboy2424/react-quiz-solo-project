export default function Question({ question, incorrectChoice1, incorrectChoice2, incorrectChoice3, correctChoice }) {
  return (
    <div>
      <h2>{question}</h2>
      <form>
        <label>
          <input type="radio" name="option" value="1" /> {incorrectChoice1}
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="2" /> {incorrectChoice2}
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="3" /> {incorrectChoice3}
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="4" /> {correctChoice}
        </label>
      </form>
    </div>
  );
}
