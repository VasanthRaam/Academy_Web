import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Homepage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './LoginSignup/Signup';
import Login from './LoginSignup/Login';
import AboutUs from './Aboutpage/Aboutus';
import StudentDashboard from './Dashboard/studentDashboard';
import Course from './Coursepage/Course';


function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/about" element={<AboutUs />} /> */}
            <Route path="/courses" element={<Course />} />
            <Route path="/student/:id" element={<StudentDashboard/>} />
        </Routes>


    </Router>
      
    </>
  );
}

export default App;
