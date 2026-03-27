import { useState } from 'react'
import "../styles/App.css"
import Education from "./Education.jsx"
import Experience from "./Experience.jsx"
import "./GeneralInfo.jsx"
import GeneralInfo from "./GeneralInfo.jsx"
import Summary from "./Summary.jsx"

function App() {

  return (
    <>
      <div>CV Generator</div>
      <div>Required fields are marked with an '*'</div>
      <form action="">
        <div className="form-wrapper">
          <GeneralInfo/>
          <Summary/>
          <Education/>
          <Experience/>
        </div>
      </form>
    </>
  )
}

export default App
