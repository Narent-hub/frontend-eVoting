import './OrganizerForm.css'

export default function OrganizerForm() {
  return (
    <form>
      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <input name='title' type='text' placeholder='Election Title'></input>
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <input
          name='organization'
          type='text'
          placeholder='Organization name'
        ></input>
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <input name='contact' type='tel' placeholder='Contact Info'></input>
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <select
          name='industry'
          id='industry'
          // value={values.role}
          // onChange={handleChange}
          // onBlur={handleBlur}
          // className={
          //   touched.gender && errors.gender ? 'has-error' : null
          // }
        >
          <option value='female'>--Choose the voting industry--</option>
          <option value='economy'>Economy</option>
          <option value='ict'>ICT</option>
          <option value='election'>Election</option>
          <option value='positions'>Positions</option>
        </select>
        {/* <Error touched={touched.gender} message={errors.gender} /> */}
      </div>

      <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
        <button className='btnn'>Submit</button>
        <a href>
          <button className='btnn'>Preview</button>{' '}
        </a>
      </div>
    </form>
  )
}
