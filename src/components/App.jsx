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

  const [hideForm, setHideForm] = useState(false);

  const [contactDetails, setContactDetails] = useState({
    firstName: 'Federico',
    lastName: 'Dotti',
    email: 'ee',
    phoneNumber: '999'
  })

  const handleContactUpdates = {
    firstName: function(e) {
      setContactDetails({
        ...contactDetails,
        firstName: e.target.value
      })
    },
    lastName: function(e) {
      setContactDetails({
        ...contactDetails,
        lastName: e.target.value
      })
    },
    email: function(e) {
      setContactDetails({
        ...contactDetails,
        email: e.target.value
      })
    },
    phoneNumber: function(e) {
      setContactDetails({
        ...contactDetails,
        phoneNumber: e.target.value
      })
    }
  }

  const [summary, setSummary] = useState('');

  function handleSummaryChange(e) {
    setSummary(e.target.value);
  }

  const [education, setEducation] = useState({
    university: 'N/A',
    discipline: '',
    degreeLevel: '',
    graduationDate: ''
  })

  const handleEducationUpdates = {
    university: function(e) {
      setEducation({
        ...education,
        university: e.target.value
      })
    },
    discipline: function(e) {
      setEducation({
        ...education,
        discipline: e.target.value
      })
    },
    degreeLevel: function(e) {
      setEducation({
        ...education,
        degreeLevel: e.target.value
      })
    },
    graduationDate: function(e) {
      setEducation({
        ...education,
        graduationDate: e.target.value
      })
    }
  }

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
        <span><b>Company Name:</b> {job.companyName}</span>
        <span><b>Job Title:</b> {job.jobTitle}</span>
        <span><b>Start Date:</b> {job.startDate}</span>
        <span><b>End Date:</b> {job.endDate}</span>
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
      <form action="" className={hideForm ? 'hidden' : ''}>
        <div className="form-wrapper">
          <GeneralInfo
            contactDetails={contactDetails}
            handleContactUpdates={handleContactUpdates}
          />
          <Summary
            summary={summary}
            handleSummaryChange={handleSummaryChange}
          />
          <Education
            education={education}
            handleEducationUpdates={handleEducationUpdates}
          />
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
            setHideForm(true);
            dialogRef.current.showModal();
            setTimeout(() => {
              window.print();
              setHideForm(false);
              dialogRef.current.close();
            }, 1)
          }}>
            Print CV
          </button>
        </div>
      </form>
      <dialog ref={dialogRef}>
        <div>
          <div className="section-header">{contactDetails.firstName} {contactDetails.lastName} | CV</div>
          <div className="grid">
            <span className="span-2"><b>Email:</b> {contactDetails.email} | <b>Phone number:</b> {contactDetails.phoneNumber}</span>
          </div>
          <div className="section-header">Summary</div>
          <div className="grid">
            <span className="span-2">{summary}</span>
          </div>
          <div className="section-header">Education</div>
          <div className="grid">
            <span><b>{education.university}</b></span>
            <span><b>Graduation date:</b></span>
            <span>{education.degreeLevel} {(education.discipline != '') && 'in ' + education.discipline}</span>
            <span>{education.graduationDate}</span>
          </div>
          <div className="section-header">Experience</div>
          {experienceList}
        </div>
      </dialog>
    </>
  )
}

export default App
