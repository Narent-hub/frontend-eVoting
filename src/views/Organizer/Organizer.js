import OrganizerForm from '../../components/OranizerForm/OrganizerForm'
import './Organizer.css'

export default function Organizer() {
  return (
    <div className='col main'>
      {/* <div className='organizerPara col-sm-12 col-md-6 col-lg-12'>
        <p>
          Welcome to our eVoting platform. In this page, you can create your own
          poll.
        </p>
      </div> */}

      <div className='formWrapper'>
        <OrganizerForm />
        <div className='para col-sm-12 col-md-6 col-lg-12'>
          <p>Already have an account? Please login instead.</p>
          <p>First time user? Please register instead.</p>
        </div>
      </div>
    </div>
  )
}
