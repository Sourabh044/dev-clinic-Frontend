import React, { useContext, useEffect } from 'react';
import PatientContext from '../context/Patients/patientContext';

const Patient = () => {
  const {patients, getpatients} = useContext(PatientContext);;
  useEffect(()=>{
    getpatients();
    // eslint-disable-next-line
},[])

  return (
    <div className='animate__slideInUp'>
      <h5 className='lead text-left'>Listing all Patients.</h5>
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
    </div>
  )
}

export default Patient
