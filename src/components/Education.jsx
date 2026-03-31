import "../styles/section.css"

function Education({
  education,
  handleEducationUpdates
}) {


  return (
    <div className="section">
      <div>Education</div>
      <div>
        <label>Name of university: <br />
          <input 
            type="text"
            value={education.university}
            onChange={handleEducationUpdates.university} 
          />
        </label>
        <label>Discipline: <br />
          <input 
            type="text" 
            value={education.discipline}
            onChange={handleEducationUpdates.discipline}
          />
        </label>
        <label>Degree level: <br />
          <select 
            name="educational-attainment" 
            id="degree-level"
            value={education.degreeLevel}
            onChange={handleEducationUpdates.degreeLevel}
          >
            <option value="">--Please choose an option--</option>
            <option value="Bachelor's degree">Bachelor's degree</option>
            <option value="Master's degree">Master's degree</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </label>
        <label>Graduation date: <br />
          <input 
            type="date" 
            value={education.graduationDate}
            onChange={handleEducationUpdates.graduationDate}
          />
        </label>
      </div>
    </div>
  )
}

export default Education