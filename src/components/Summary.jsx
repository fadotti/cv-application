import "../styles/section.css"

function Summary({summary, handleSummaryChange}) {


  return (
    <div className="section"> 
      <div>Brief Summary</div>
      <div>
        <label className="span-2">A short overview of your professional history: <br />
          <textarea 
            name="summary" 
            id="personal-summary"
            value={summary}
            onChange={handleSummaryChange}
          >
          </textarea>
        </label>
      </div>
    </div>
  )
}

export default Summary

//single-column