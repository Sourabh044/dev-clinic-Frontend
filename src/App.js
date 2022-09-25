import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Patient from './components/Patient';
import Appointments from './components/Appointments';
import About from './components/About';
import PatientState from './context/Patients/patientState';
import AppointmentState from './context/Appointments/appointmentState';
import UserState from './context/User/userState';
import Addpatient from './components/Addpatient';
import { Navigate } from 'react-router-dom';
import Otp from './components/Otp';
// import NavbarTwo from './components/NavbarTwo';

function App() {
  return (
  <UserState>
    {/*/ / <NavbarTwo/> */}
    <PatientState>
      <AppointmentState>
    <div className="App">
      <Navbar/>
      <div className=" ">
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='patients' element={<Patient/>}></Route>
        <Route path='appointments' element={<Appointments/>}></Route>
        <Route path='about-us' element={<About/>}></Route>
        <Route path='add-patient' element={<Addpatient/>}></Route>
        <Route path='verify' element={<Otp/>}></Route>
        <Route path="*"element={<Navigate to="/" replace />}/>
      </Routes>
      </div>
    </div>
    </AppointmentState>
    </PatientState>
    </UserState>
  );
}

export default App;
