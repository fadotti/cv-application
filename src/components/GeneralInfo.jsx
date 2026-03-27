import "../styles/section.css"

function GeneralInfo() {


  return (
    <div className="section">
      <div>Contact Details</div>
      <div>
        <label>* First name: <br />
          <input type="text" />
        </label>
        <label>* Last name: <br />
          <input type="text" />
        </label>
        <label>* Email: <br />
          <input type="text" />
        </label>
        <label>Phone number: <br />
          <input type="text" />
        </label>
      </div>
    </div>
  )
}

export default GeneralInfo