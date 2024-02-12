export default function TaskAddForm({
  textValue,
  numberValue,
  handleNumberInput,
  handleTextInput,
  submitData,
}) {
  return (
    <>
      <div className="container">
        <form onSubmit={submitData}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Введите название задания"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={textValue}
              onChange={handleTextInput}
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Введите количество шагов"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={numberValue}
              onChange={handleNumberInput}
              required
            />
          </div>
          <button type="submit">Add new task</button>
        </form>
      </div>
    </>
  );
}
