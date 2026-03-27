import "../styles/section.css"

function Summary() {


  return (
    <div className="section single-column">
      <div>Brief Summary</div>
      <div>
        <label>A short overview of your professional history: <br />
          <textarea name="summary" id="personal-summary"></textarea>
        </label>
      </div>
    </div>
  )
}

export default Summary