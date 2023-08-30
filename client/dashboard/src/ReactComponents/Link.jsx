
function Link({ text, onclick }) {
  return (
    <a className="link-btn" onClick={onclick}>{text}</a>
  )
}

export default Link