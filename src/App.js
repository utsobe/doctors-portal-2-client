import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequrieAuth from './Pages/Login/RequrieAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyReview from './Pages/Dashboard/MyReview';
import MyAppointments from './Pages/Dashboard/MyAppointments';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={<RequrieAuth>
          <Appointment />
        </RequrieAuth>}></Route>
        <Route path='/dashboard' element={<RequrieAuth>
          <Dashboard />
        </RequrieAuth>}>
          <Route index element={<MyAppointments />} />
          <Route path='review' element={<MyReview />} />
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
