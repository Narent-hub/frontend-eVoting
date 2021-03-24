import OrganizerForm from '../../components/OranizerForm/OrganizerForm'
import './Organizer.css'

export default function Organizer() {
  return (
    <div className='row main'>
      <OrganizerForm />
      <div className='col-sm-12 col-md-6 col-lg-12'>
        <p>Already have an account? Please login instead.</p>
        <p>First time user? Please register instead.</p>
      </div>
    </div>
  )
}
