import React, { useContext, useEffect } from 'react'
import AppointmentContext from '../context/Appointments/appointmentContext'
import UserContext from '../context/User/userContext';
import { Navigate } from 'react-router-dom';
const Appointments = () => {
    const {login} = useContext(UserContext)
    const {appointments, getappointments ,acount} = useContext(AppointmentContext);
    useEffect(()=>{
        getappointments();
            // eslint-disable-next-line
    },[])
      return (!login?<Navigate to='/'/>:
    <div>
      <h5 className='lead mt-4'>Listing all Appointments.</h5>
      <h5 className='lead'>{acount}</h5>
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
