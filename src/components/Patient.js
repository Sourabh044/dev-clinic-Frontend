import React, { useContext, useEffect, useState } from 'react';
import PatientContext from '../context/Patients/patientContext';
import AddPatient from './Addpatient';
import UserContext from "../context/User/userContext";
import  { useNavigate } from 'react-router-dom';
// import Otp from "./Otp";


const Patient = () => {
  const {patients, getpatients , pcount} = useContext(PatientContext);
  const {login, isVerfied} = useContext(UserContext);
  const Navigate = useNavigate();

  const [modal, setModal] = useState(false);
  useEffect(()=>{
    getpatients();
    // eslint-disable-next-line
},[])

  const openmodal = () =>{setModal(true)}
  const closemodal = () =>{setModal(false)}

  if(!login){
    return Navigate('/')
  }
  if(!isVerfied){
    alert('You need to verify Your Account')
    return Navigate('verify')
  }

  return (
    <div className='animate__slideInUp'>
      <h5 className='lead mt-4'>Listing all Patients.</h5>
      <div>
        <div className="lead">{pcount}</div>
<button type="button" className="btn btn-primary my-2" onClick={openmodal} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Patient
</button>

      </div>
      <table className="table table-hover table-light container">
  <thead className='table-dark'>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody className='table-group-divider'>
    {patients.map((patient) => {
      return  ( <tr key={patient.id}>
      <th scope="row">{patient.id}</th>
      <td>{patient.name}</td>
      <td>{patient.gender}</td>
      <td>{patient.email}</td>
      <td>{patient.phone}</td>
    </tr>)
    })}
  </tbody>
</table>
{modal && <AddPatient show={modal} close={closemodal} />}
    </div>
  )
}

export default Patient
