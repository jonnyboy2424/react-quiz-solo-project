export default function Question() {
  return (
    <div>
      <h2>This is a question</h2>
      <form>
        <label>
          <input type="radio" name="option" value="1" /> Option 1
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="2" /> Option 2
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="3" /> Option 3
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="4" /> Option 4
        </label>
      </form>
    </div>
  );
}
