import "../styles/section.css"
import { useState } from 'react'
import React from 'react'
export { Experience, }

function Experience({
  experienceArray,
  handleCompanyNameChange,
  handleJobTitleChange,
  handleStartDateChange,
  handleEndDateChange,
  handleJobDescriptionChange,
  handleAddExperienceClick,
  handleRemoveJobClick
}) {
  const experienceList = experienceArray.map((job, index) => 
    <React.Fragment key={job.id}>
      {index > 0 && <hr />} 
      <button className={`react-key-${job.id}`} onClick={handleRemoveJobClick}>
        Remove job
      </button>
      <div>
        <label>Company name: <br />
          <input 
            className={`react-key-${job.id}`}
            type="text" 
            value={job.companyName}
            onChange={handleCompanyNameChange}
          />
        </label>
        <label>Job title: <br />
          <input
            className={`react-key-${job.id}`} 
            type="text" 
            value={job.jobTitle} 
            onChange={handleJobTitleChange}
          />
        </label>
        <label>Start date: <br />
          <input
            className={`react-key-${job.id}`} 
            type="date" 
            value={job.startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <label>End date: <br />
          <input
            className={`react-key-${job.id}`} 
            type="date" 
            value={job.endDate}
            onChange={handleEndDateChange}
          />
        </label>
        <label className="span-2">Job description: <br />
          <textarea
            className={`react-key-${job.id}`} 
            name={`jobdescription-${job.id}`} 
            id="" 
            value={job.jobDescription}
            onChange={handleJobDescriptionChange}>
          </textarea>
        </label>
      </div>
    </React.Fragment>
  );

  return (
    <div className="section experience">
      <div>Experience</div>
      {experienceList}
      <button onClick={handleAddExperienceClick}>
        Add new job experience
      </button>
    </div>
  )
}

export default Experience