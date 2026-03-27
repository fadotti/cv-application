import "../styles/section.css"
import { useState } from 'react'
import React from 'react'

function Experience() {
  const [experienceArray, setExperienceArray] = useState([
    {
      id: 0,
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      jobDescription: ''
    }
  ])

  const experienceList = experienceArray.map(job => 
    <React.Fragment key={job.id}>
      <div>
        <label>Company name: <br />
          <input type="text" value={job.companyName}/>
        </label>
        <label>Job title: <br />
          <input type="text" value={job.jobTitle} />
        </label>
        <label>Start date: <br />
          <input type="date" value={job.startDate}/>
        </label>
        <label>End date: <br />
          <input type="date" value={job.endDate}/>
        </label>
        <label>Job description: <br />
          <textarea name={`jobdescription-${job.id}`} id="" value={job.jobDescription}></textarea>
        </label>
      </div>
      <hr />
    </React.Fragment>
  );

  return (
    <div className="section">
      <div>Experience</div>
      {/* <div>
        <label>Company name: <br />
          <input type="text" />
        </label>
        <label>Job title: <br />
          <input type="text" />
        </label>
        <label>Start date: <br />
          <input type="date" />
        </label>
        <label>End date: <br />
          <input type="date" />
        </label>
        <label>Job description: <br />
          <textarea name="jobdescription-1" id=""></textarea>
        </label>
      </div> */}
      {experienceList}
      <hr />
      <button>Add new job experience</button>
    </div>
  )
}

export default Experience