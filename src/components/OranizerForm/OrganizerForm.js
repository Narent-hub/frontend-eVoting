// import './OrganizerForm.scss'
// import React, { Component } from 'react'
// import { Formik } from 'formik'
// import axios from 'axios'
// import * as Yup from 'yup'

// import Error from '../Error/Error'

// const validationSchema = Yup.object().shape({})
// class OrganizerForm extends Component() {
//   constructor() {
//     super()
//     this.state = {
//       election_name: '',
//       status: '',
//       contact: '',
//       start_date: '',
//       end_date: '',
//       votes: '',
//       industry: '',
//     }
//   }

//   render() {
//     return (
//       <Formik
//         initialValues={{
//           election_name: '',
//           status: '',
//           contact: '',
//           start_date: '',
//           end_date: '',
//           votes: '',
//           industry: '',
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values, { setSubmitting, resetForm }) => {
//           setSubmitting(true)
//           console.log(values)
//           setTimeout(() => {
//             axios
//               .post('http://127.0.0.1:8000/api/electionorganizers', {
//                 election_name: values.election_name,
//                 status: values.status,
//                 contact: values.contact,
//                 start_date: values.start_date,
//                 end_date: values.end_date,
//                 votes: values.votes,
//                 industry: values.industry,
//               })
//               .then((response) => {
//                 console.log(response)
//               })
//             resetForm()
//             setSubmitting(false)
//             alert(`${values.name} Registered Successfully !!!!`)
//           }, 500)
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//           isSubmitting,
//         }) => (
//           <form>
//             <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
//               <input
//                 name='election_name'
//                 type='text'
//                 placeholder='Election Title'
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.election_name}
//                 className={
//                   touched.election_name && errors.election_name
//                     ? 'has-error'
//                     : null
//                 }
//               ></input>
//               <Error
//                 touched={touched.election_name}
//                 message={errors.election_name}
//               />
//             </div>

//             <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
//               <input
//                 name='status'
//                 type='text'
//                 placeholder='Status'
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.status}
//                 className={touched.status && errors.status ? 'has-error' : null}
//               ></input>
//               <Error touched={touched.status} message={errors.status} />
//             </div>

//             <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
//               <input
//                 name='contact'
//                 type='tel'
//                 placeholder='Contact Info'
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.contact}
//                 className={
//                   touched.contact && errors.contact ? 'has-error' : null
//                 }
//               ></input>
//               <Error touched={touched.contact} message={errors.contact} />
//             </div>

//             <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
//               <input
//                 name='start_date'
//                 type='date'
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.start_date}
//                 className={
//                   touched.start_date && errors.start_date ? 'has-error' : null
//                 }
//               ></input>
//               <Error touched={touched.start_date} message={errors.start_date} />
//               <br></br>
//               <label className='pollDate'>Start date:</label>
//             </div>

//             <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
//               <input
//                 name='end_date'
//                 type='date'
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.end_date}
//                 className={
//                   touched.end_date && errors.end_date ? 'has-error' : null
//                 }
//               ></input>
//               <Error touched={touched.end_date} message={errors.end_date} />
//               <br></br>
//               <label className='pollDate'>End date:</label>
//             </div>

//             <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
//               <input
//                 name='votes'
//                 type='number'
//                 placeholder='Contact Info'
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.votes}
//                 className={touched.votes && errors.votes ? 'has-error' : null}
//               ></input>
//               <Error touched={touched.votes} message={errors.votes} />
//             </div>

//             <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
//               <select
//                 name='industry'
//                 id='industry'
//                 onChange={handleChange}
//                 defaultValue='Choose the voting industry'
//                 onBlur={handleBlur}
//                 className={
//                   touched.industry && errors.industry ? 'has-error' : null
//                 }
//               >
//                 <option defaultValue>--Choose the voting industry--</option>
//                 <option value='economy'>Economy</option>
//                 <option value='ict'>ICT</option>
//                 <option value='election'>Election</option>
//                 <option value='positions'>Positions</option>
//               </select>
//               <Error touched={touched.industry} message={errors.industry} />
//               {/* <Error touched={touched.gender} message={errors.gender} /> */}
//             </div>

//             <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
//               <button
//                 type='submit'
//                 className='btnn btn btn-secondary'
//                 disabled={isSubmitting}
//               >
//                 Submit
//               </button>
//               <a href>
//                 <button className='btnn btn btn-outline-dark'>Preview</button>{' '}
//               </a>
//             </div>
//           </form>
//         )}
//       </Formik>
//     )
//   }
// }
// export default OrganizerForm
