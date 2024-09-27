import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Nav-Loggedin";
import { ToastContainer, toast } from 'react-toastify';
import { Col, Container, Row, ProgressBar } from "react-bootstrap";
import user from "./images/user.png";
import "./stud-dash.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AttendanceCircle = ({ percentage }) => {
    return (
        <div style={{ width: 150, height: 150 }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    rotation: 3,
                    pathColor:percentage>75?'#4caf50':percentage>50?'#ffeb3b':'#f44336',
                    textColor: '#000',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                    pathTransitionDuration: 3,
                })}
            />
        </div>
    );
};


export default function StudentDashboard() {
    const { id } = useParams(); 
    const [studentData, setStudentData] = useState({
        name: '',
        email: '',
        courses: {},
        p1: '',
        dob:'',
    });

    useEffect(() => {
        toast.success("You have logged in successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });
        const fetchStudentData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/student', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id })
                });

                if (response.ok) {
                    const data = await response.json();
                    setStudentData({
                        name: data.name,
                        email: data.email,
                        courses: data.courses,
                        p1:data.p1,
                        dob:new Date(data.dob).toLocaleDateString()
                    });
                } else {
                    console.error('Failed to fetch student data');
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, [id]);
    const generateRandomProgress = () => Math.floor(Math.random() * (100 - 50 + 1)) + 50;

    return (
        <>
            <Navigation />
            <ToastContainer />
            <br></br>
            <Container>
                <br />
                <Row>
                    <Col id="stud-img" md={3}>
                        <img alt="user-image" style={{ width: "75%" }} src={user} />
                    </Col>
                    <Col md={6} id="stud-info">
                        <h3 id="top-details">Welcome, {studentData.name}</h3>
                        <br></br>
                        <p id="top-details">Email: {studentData.email}</p>
                        <p id="top-details">Phone: {studentData.p1}</p>
                        <p id="top-details">DOB: {studentData.dob}</p>
                    </Col>
                    <Col md={3} id="stud-info" className="atdns">
                    <h3 id="top-details">Attendance</h3><br></br>
                        <AttendanceCircle percentage={75} />
                    </Col>
                </Row>
                <br />
                <br />
                <h5 id="stud-info">Enrolled Courses</h5>
                {Object.keys(studentData.courses).map((course, index) => (
                    studentData.courses[course] && (
                        <div key={index}>
                            <p id="stud-info">{course.charAt(0).toUpperCase() + course.slice(1)}</p>
                            <ProgressBar  id="stud-info"
                                now={generateRandomProgress()} 
                                label={`${generateRandomProgress()}%`} 
                            />
                        </div>
                    )
                ))}
                <br/>
                
                
            </Container>
        </>
    );
}
