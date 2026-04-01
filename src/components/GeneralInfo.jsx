import "../styles/section.css"

function GeneralInfo({
  contactDetails,
  handleContactUpdates
}) {


  return (
    <div className="section">
      <div>Contact Details</div>
      <div>
        <label>* First name: <br />
          <input 
            type="text"
            value={contactDetails.firstName}
            onChange={handleContactUpdates.firstName}
            pattern="^[\p{L}]{3,15}$" 
          />
        </label>
        <label>* Last name: <br />
          <input 
            type="text"
            value={contactDetails.lastName} 
            onChange={handleContactUpdates.lastName}
            pattern="^[\p{L}]{3,15}$"
          />
        </label>
        <label>* Email: <br />
          <input 
            type="email" 
            value={contactDetails.email}
            onChange={handleContactUpdates.email}
          />
        </label>
        <label>Phone number: <br />
          <input 
            type="tel" 
            value={contactDetails.phoneNumber}
            onChange={handleContactUpdates.phoneNumber}
          />
        </label>
      </div>
    </div>
  )
}

export default GeneralInfo