import { useState, useRef } from 'react'
import "../styles/App.css"
import Education from "./Education.jsx"
import Experience from "./Experience.jsx"
import "./GeneralInfo.jsx"
import GeneralInfo from "./GeneralInfo.jsx"
import Summary from "./Summary.jsx"
import React from 'react'

let nextId = 1;

function App() {

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

  const experienceList = experienceArray.map((job, index) =>
    <React.Fragment key={job.id}>
      {index > 0 && <hr />}
      <div className='grid'>
        <span>Company Name: {job.companyName}</span>
        <span>Job Title: {job.jobTitle}</span>
        <span>Start Date: {job.startDate}</span>
        <span>End Date: {job.endDate}</span>
      </div>
    </React.Fragment>
  )

  console.log(experienceList);

  function handleCompanyNameChange(e) {
    console.log(e.target.className.split('-').at(-1));
    const reactKey = Number(e.target.className.split('-').at(-1));
    const job = experienceArray.filter(job => job.id === reactKey);
    const remainingJobs = experienceArray.filter(job => job.id !== reactKey);
    console.log(job[0], remainingJobs)
    job[0].companyName = e.target.value;
    setExperienceArray([
      ...remainingJobs, job[0]
    ].sort((a, b) => a.id - b.id))
  }

  function handleJobTitleChange(e) {
    const reactKey = Number(e.target.className.split('-').at(-1));
    const job = experienceArray.filter(job => job.id === reactKey);
    const remainingJobs = experienceArray.filter(job => job.id !== reactKey);
    job[0].jobTitle = e.target.value;
    setExperienceArray([
      ...remainingJobs, job[0]
    ].sort((a, b) => a.id - b.id))
  }

  function handleStartDateChange(e) {
    const reactKey = Number(e.target.className.split('-').at(-1));
    const job = experienceArray.filter(job => job.id === reactKey);
    const remainingJobs = experienceArray.filter(job => job.id !== reactKey);
    job[0].startDate = e.target.value;
    setExperienceArray([
      ...remainingJobs, job[0]
    ].sort((a, b) => a.id - b.id))
  }

  function handleEndDateChange(e) {
    const reactKey = Number(e.target.className.split('-').at(-1));
    const job = experienceArray.filter(job => job.id === reactKey);
    const remainingJobs = experienceArray.filter(job => job.id !== reactKey);
    job[0].endDate = e.target.value;
    setExperienceArray([
      ...remainingJobs, job[0]
    ].sort((a, b) => a.id - b.id))
  }

  function handleJobDescriptionChange(e) {
    const reactKey = Number(e.target.className.split('-').at(-1));
    const job = experienceArray.filter(job => job.id === reactKey);
    const remainingJobs = experienceArray.filter(job => job.id !== reactKey);
    job[0].jobDescription = e.target.value;
    setExperienceArray([
      ...remainingJobs, job[0]
    ].sort((a, b) => a.id - b.id))
  }

  function handleAddExperienceClick(e) {
    e.preventDefault();
    const job = {
      id: nextId,
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      jobDescription: ''
    }

    ++nextId;

    setExperienceArray([
      ...experienceArray, job
    ])
  }

  function handleRemoveJobClick(e) {
    e.preventDefault();
    const reactKey = Number(e.target.className.split('-').at(-1));
    const newExperienceArray = experienceArray.filter(job => job.id !== reactKey);
    setExperienceArray(newExperienceArray);
  }

  const dialogRef = useRef(null);


  return (
    <>
      <div>CV Generator</div>
      <div>Required fields are marked with an '*'</div>
      <form action="">
        <div className="form-wrapper">
          <GeneralInfo/>
          <Summary/>
          <Education/>
          <Experience
            experienceArray={experienceArray}
            handleCompanyNameChange={handleCompanyNameChange}
            handleJobTitleChange={handleJobTitleChange}
            handleStartDateChange={handleStartDateChange}
            handleEndDateChange={handleEndDateChange}
            handleJobDescriptionChange={handleJobDescriptionChange}
            handleAddExperienceClick={handleAddExperienceClick}
            handleRemoveJobClick={handleRemoveJobClick}
          />
          <button onClick={(e) => {
            e.preventDefault();
            dialogRef.current.showModal();
            // window.print();
            // dialogRef.current.close();
          }}>
            Print CV
          </button>
        </div>
      </form>
      <dialog ref={dialogRef}>
        <div>
          <div className="section-header">Experience</div>
          {experienceList}
        </div>
      </dialog>
    </>
  )
}

export default App
