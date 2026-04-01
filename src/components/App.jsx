import { useState, useRef } from 'react'
import "../styles/App.css"
import Education from "./Education.jsx"
import Experience from "./Experience.jsx"
import "./GeneralInfo.jsx"
import GeneralInfo from "./GeneralInfo.jsx"
import Summary from "./Summary.jsx"
import React from 'react'
import deleteOutline from "../assets/delete-outline.svg"
import plusIcon from "../assets/plus.svg"
import printerOutline from "../assets/printer-outline.svg"

let nextId = 1;

function App() {

  const [hideForm, setHideForm] = useState(false);

  const [contactDetails, setContactDetails] = useState({
    firstName: 'Arsène',
    lastName: 'Lupin',
    email: 'alupin@gmail.com',
    phoneNumber: '33999881799'
  })

  const handleContactUpdates = {
    firstName: function(e) {
      setContactDetails({
        ...contactDetails,
        firstName: e.target.value
      })
      setIsFormValid({
        ...isFormValid, 
        firstName: e.target.checkValidity()
      })
    },
    lastName: function(e) {
      console.log(e.target.checkValidity())
      setContactDetails({
        ...contactDetails,
        lastName: e.target.value
      })
      setIsFormValid({
        ...isFormValid, 
        lastName: e.target.checkValidity()
      })
      console.log(isFormValid);
    },
    email: function(e) {
      setContactDetails({
        ...contactDetails,
        email: e.target.value
      })
      setIsFormValid({
        ...isFormValid, 
        email: e.target.checkValidity()
      })
    },
    phoneNumber: function(e) {
      setContactDetails({
        ...contactDetails,
        phoneNumber: e.target.value
      })
    }
  }

  const [summary, setSummary] = useState('Private investigator with a long track record of apprehending villainous characters. Expert at uncovering valuable items hiding in plain sight.');

  function handleSummaryChange(e) {
    setSummary(e.target.value);
  }

  const [education, setEducation] = useState({
    university: 'Paris Police Academy',
    discipline: 'Forensic Science',
    degreeLevel: 'Doctorate',
    graduationDate: '1902-04-08'
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
      companyName: 'Lupin Enterprises',
      jobTitle: 'Gentleman Thief',
      startDate: '1905-10-20',
      endDate: '',
      jobDescription: 'Main job duties are: \n\n -Taking walks along the Seine. \n -Keeping an eye out for unattended wealth. \n -Saving France from the war. \n -Having a pint with Herlock Sholmès.'
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
        <span className="span-2 justify-left dialog-job-description">{job.jobDescription}</span>
      </div>
    </React.Fragment>
  )

  function handleCompanyNameChange(e) {
    // console.log(e.target.className.split('-').at(-1));
    const reactKey = Number(e.target.className.split('-').at(-1));
    const job = experienceArray.filter(job => job.id === reactKey);
    const remainingJobs = experienceArray.filter(job => job.id !== reactKey);
    // console.log(job[0], remainingJobs)
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
    // console.log(e.target.value);
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
  const printRef = useRef(null);

  const [isFormValid, setIsFormValid] = useState({
    firstName: true,
    lastName: true,
    email: true
  })

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
            addJobIconURL={plusIcon}
            removeJobIconURL={deleteOutline}
          />
          <button ref={printRef} onClick={(e) => {
            if(isFormValid.firstName && isFormValid.lastName && isFormValid.email) {
              e.preventDefault();
              printRef.current.setCustomValidity('');
              setHideForm(true);
              dialogRef.current.showModal();
              setTimeout(() => {
                window.print();
                setHideForm(false);
                dialogRef.current.close();
              }, 30)
            } else {
              e.preventDefault();
              let validationMessage = '';
              if(!isFormValid.firstName) {
                validationMessage += 'First names must be between 3 and 15 characters long and contain only letters. ';
              }
              if(!isFormValid.lastName) {
                validationMessage += '\nLast names must be between 3 and 15 characters long and contain only letters. ';
              }
              if(!isFormValid.email) {
                validationMessage += '\nEmails must follow the standard email format, i.e. alupin@gmail.com ';
              }
              printRef.current.setCustomValidity(validationMessage);
              printRef.current.reportValidity();
              console.log(validationMessage);
            }
          }}>
            <img src={printerOutline} alt="" />
            <span>Print CV</span>
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
            <span className="span-2 justify-left">{summary}</span>
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
