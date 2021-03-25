import './OrganizerForm.css'

export default function OrganizerForm() {
  return (
    <form>
      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <input
          name='election_name'
          type='text'
          placeholder='Election Title'
        ></input>
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <input name='status' type='text' placeholder='Status'></input>
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <input name='contact' type='tel' placeholder='Contact Info'></input>
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <input name='start_date' type='date'></input>
        <br></br>
        <label className='pollDate'>Start date:</label>
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <input name='end_date' type='date'></input>
        <br></br>
        <label className='pollDate'>End date:</label>
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <input name='votes' type='number' placeholder='Contact Info'></input>
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <select name='industry' id='industry'>
          <option value='female'>--Choose the voting industry--</option>
          <option value='economy'>Economy</option>
          <option value='ict'>ICT</option>
          <option value='election'>Election</option>
          <option value='positions'>Positions</option>
        </select>
        {/* <Error touched={touched.gender} message={errors.gender} /> */}
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <button className='btnn btn btn-secondary'>Submit</button>
        <a href>
          <button className='btnn btn btn-outline-dark'>Preview</button>{' '}
        </a>
      </div>
    </form>
  )
}
