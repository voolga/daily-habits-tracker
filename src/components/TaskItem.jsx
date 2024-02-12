import { useState } from "react";
import TaskProgressScale from "./TaskProgressScale";
const max = 100;

export default function TaskItem({ stepsQty, taskHeader, handleFullProgress }) {
  let [progress, setProgress] = useState({
    progress: 0,
    style: { backgroundColor: "#89CFF0" },
    steps: 0,
  });

  let progressValue = 100 / stepsQty;
  let canIncr = progress.progress < max;

  function increaseProgress() {
    if (canIncr) {
      let newStyle = progress.style;
      let newProgress = progress.progress + progressValue;

      if (progress.progress > 30 && progress.progress <= 70) {
        newStyle = { backgroundColor: "#C3B1E1" };
      } else if (progress.progress > 70) {
        newStyle = { backgroundColor: "#addfad" };
      }

      if (newProgress >= 99 && newProgress <= 101) {
        handleFullProgress(100);
      }

      setProgress({
        ...progress,
        progress: newProgress,
        steps: progress.steps + 1,
        style: newStyle,
      });
    }
  }

  return (
    <div className="container" style={progress.style}>
      <h2>{taskHeader}</h2>

      <hr />
      <TaskProgressScale
        stepsQty={stepsQty}
        progress={progress.progress}
        steps={progress.steps}
      />
      <hr />
      {canIncr ? (
        <button onClick={increaseProgress}>Make step</button>
      ) : (
        "All done!"
      )}
    </div>
  );
}
