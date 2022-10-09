import "./TrackBar.scss"

export default function TrackBar({ progress }) {

  let color = ("#CF5C5C");

  if (progress <= 25) {
    color = ("#158463");
  } else if (progress <= 50) {
    color = ("#158463")
  } else if (progress <= 75 || progress <= 99) {
    color = ("#FD9345")
  } else if (progress <= 100) {
    color = ("#CF5C5C")
  } else if (progress > 100) {

  }

  const progressStyles = {
    width: `${progress}%`,
    backgroundColor: `${color}`,
  }

  if (!progress) {
    return (
      <h1>Track bar failed to load</h1>
    )
  }

  return (
    <>
      <div className="trackBar">
        <div className="trackBar__inner" style={progressStyles}></div>
      </div>
    </>
  )
}