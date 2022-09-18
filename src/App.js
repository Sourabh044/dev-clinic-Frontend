import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Patient from './components/Patient';
import Appointments from './components/Appointments';
import About from './components/About';
import PatientState from './context/Patients/patientState';
import AppointmentState from './context/Appointments/appointmentState';
function App() {
  return (
    <PatientState>
      <AppointmentState>
    <div className="App">
      <Navbar/>
      <div className="border border-top-0 ">
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='patients' element={<Patient/>}></Route>
        <Route path='appointments' element={<Appointments/>}></Route>
        <Route path='about-us' element={<About/>}></Route>
      </Routes>
      </div>
    </div>
    </AppointmentState>
    </PatientState>
  );
}

export default App;
