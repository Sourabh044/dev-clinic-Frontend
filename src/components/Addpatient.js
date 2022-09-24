import React, { useContext, useState } from 'react';
import PatientContext from '../context/Patients/patientContext';

const AddPatient = (props) => {
  const {newpatient} = useContext(PatientContext);  
  const [pdata, setPdata] = useState({name:'',gender:'',phone:'',email:''})

const AddPatient = async () => {
  console.log(pdata)
  await newpatient(pdata);
  props.close();
}
const onChange = (e) => {
  setPdata({...pdata, [e.target.name]: e.target.value})
};
  return (
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className='container'>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="gender" className="form-label">Gender</label>
    <input type="gender" className="form-control" name='gender' id="gender"onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="mobile" className="form-label">Mobile</label>
    <input type="mobile" className="form-control" name='mobile' id="mobile"onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" name='email' id="email"onChange={onChange}/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={AddPatient}>Add patient</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddPatient;
