import React, { useContext, useEffect } from 'react'
import AppointmentContext from '../context/Appointments/appointmentContext'

const Appointments = () => {
    const {appointments, getappointments } = useContext(AppointmentContext);
    useEffect(()=>{
        getappointments();
            // eslint-disable-next-line
    },[])
      return (
    <div>
      <h5 className='lead text-left'>Listing all Appointments.</h5>
      <table className="table table-hover table-light container">
  <thead className='table-dark'>
    <tr>
      <th scope="col">id</th>
      <th scope="col">description</th>
      <th scope="col">Dr Name</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody className='table-group-divider'>
    {/* {console.log(appointments)} */}
  {appointments.map((appointments) => {
      return  ( <tr key={appointments.uid}>
      <th scope="row">{appointments.patient}</th>
      <td>{appointments.description}</td>
      <td>{appointments.Dr_Name}</td>
      <td>{appointments.approved?'Aprroved':'Not Approved'}</td>
    </tr>)
    })}
  </tbody>
</table>
    </div>
  )
}

export default Appointments
