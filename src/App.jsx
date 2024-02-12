import { useState, useEffect } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import TaskAddForm from "./components/TaskAddForm";

function App() {
  let [tasks, setTask] = useState([
    { text: "Побубнеть", number: 7, current: 0 },
    { text: "Посмотреть в окно", number: 8, current: 0 },
  ]);

  let [inputValue, setInputValue] = useState(["", ""]);

  let [isAllCompleted, setIsAllCompleted] = useState([]);

  function handleFullProgress(num) {
    let newArr = [...isAllCompleted, num];
    setIsAllCompleted(newArr);
  }

  useEffect(() => {
    if (isAllCompleted.length === tasks.length) {
      document.body.style.backgroundColor = " #A7FC00";
    } else {
      document.body.style.backgroundColor = "grey";
    }
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [isAllCompleted.length, tasks.length]);

  function handleTextInput(e) {
    let newArr = [...inputValue];
    newArr[0] = e.target.value;
    setInputValue(newArr);
  }

  function handleNumberInput(e) {
    let newArr = [...inputValue];
    newArr[1] = e.target.value;
    setInputValue(newArr);
  }

  function submitData(e) {
    e.preventDefault();
    setTask([...tasks, { text: inputValue[0], number: inputValue[1] }]);
    setInputValue(["", ""]);
  }

  return (
    <>
      <h1>Daily routine tracker</h1>
      <div className="first-container">
        <TaskAddForm
          textValue={inputValue[0]}
          numberValue={inputValue[1]}
          handleTextInput={handleTextInput}
          handleNumberInput={handleNumberInput}
          submitData={submitData}
        />

        {tasks.map((item, i) => {
          return (
            <TaskItem
              stepsQty={item.number}
              taskHeader={item.text}
              key={i}
              handleFullProgress={handleFullProgress}
            />
          );
        })}
        {isAllCompleted.length === tasks.length && (
          <h1 className="display-3">
            Dogs days are OVER!
            <br />
            Congratulations!
          </h1>
        )}
      </div>
    </>
  );
}

export default App;
