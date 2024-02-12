export default function TaskProgressScale({stepsQty, progress, steps}) {
  return (
    <>
      <div
        className="progress"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning text-dark"
          style={{ width: `${progress}%` }}
        >{progress.toFixed(0)}%</div>
      </div>
      <p style={{ margin: "5px"}}><span className="startPoint">{steps}</span> / <span className="endPoint">{stepsQty}</span></p>
    </>
  );
}
