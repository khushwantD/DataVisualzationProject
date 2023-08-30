
function Button({activeClass, text, onclick, children}) {
  return (
    <button className="button" onClick={onclick}>
      <p className={`btn-txt ${activeClass}`}>{text}</p>
      {children && <div className="btn-container">{children}</div>}
    </button>
  );
}

export default Button