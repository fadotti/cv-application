import "../styles/section.css"

function Education() {


  return (
    <div className="section">
      <div>Education</div>
      <div>
        <label>Name of university: <br />
          <input type="text" />
        </label>
        <label>Discipline: <br />
          <input type="text" />
        </label>
        <label>Degree level: <br />
          <select name="educational-attainment" id="degree-level">
            <option value="">--Please choose an option--</option>
            <option value="bachelors">Bachelor's degree</option>
            <option value="masters">Master's degree</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </label>
        <label>Graduation date: <br />
          <input type="date" />
        </label>
      </div>
    </div>
  )
}

export default Education