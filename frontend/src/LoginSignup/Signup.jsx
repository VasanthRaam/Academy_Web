import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Navigation from '../Homepage/Navbar';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import './CustomCheckbox.css';

export default function Signup() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const [courses, setCourses] = useState({
        hindi: false,
        spoken: false,
        abacus: false,
        dance: false,
        keyboard: false,
    });

    const [registeredData, setRegisteredData] = useState({
        name: '',
        fathersName: '',
        mothersName: '',
        dateOfBirth: '',
        phoneNumber1: '',
        phoneNumber2: '',
        branch: '',
        email: '',
        courses: {}, 
    });

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setRegisteredData({ ...registeredData, password: e.target.value });
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleCourseChange = (e) => {
        const updatedCourses = { ...courses, [e.target.name]: e.target.checked };
        setCourses(updatedCourses);
        setRegisteredData({ ...registeredData, courses: updatedCourses }); 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegisteredData({ ...registeredData, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validatePassword()) {
            toast.error("Password must be 8-16 characters and contain at least one number.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return;
        }

        
        axios.post('http://localhost:8000/api/register', registeredData, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then(() => {
                toast.success("You have signed up successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                });
                setRegisteredData({
                    name: '',
                    fathersName: '',
                    mothersName: '',
                    dateOfBirth: '',
                    phoneNumber1: '',
                    phoneNumber2: '',
                    branch: '',
                    email: '',
                    courses: {},
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('An error occurred. Please try again.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                });
            });
        
        console.log("Registered Data:", registeredData); 
    };

    return (
        <>
            <Navigation />
            <Container className="mt-4">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Card className="p-4 shadow-sm">
                            <h3 className="text-center mb-4">Register</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} controlId="formName">
                                    <Form.Label column md={4}>
                                        Name
                                    </Form.Label>
                                    <Col md={8}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter your name" 
                                            name="name" 
                                            value={registeredData.name} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formNamef" className="mt-3">
                                    <Form.Label column md={4}>
                                        Father's Name
                                    </Form.Label>
                                    <Col md={8}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter your father's name" 
                                            name="fathersName" 
                                            value={registeredData.fathersName} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formNameM" className="mt-3">
                                    <Form.Label column md={4}>
                                        Mother's Name
                                    </Form.Label>
                                    <Col md={8}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter your mother's name" 
                                            name="mothersName" 
                                            value={registeredData.mothersName} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formDOB" className="mt-3">
                                    <Form.Label column md={4}>
                                        Date of Birth
                                    </Form.Label>
                                    <Col md={8}>
                                        <Form.Control 
                                            type="date" 
                                            name="dateOfBirth" 
                                            value={registeredData.dateOfBirth} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPhone1" className="mt-3">
                                    <Form.Label column md={4}>
                                        Phone Number 1
                                    </Form.Label>
                                    <Col md={8}>
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Enter your phone number" 
                                            name="phoneNumber1" 
                                            value={registeredData.phoneNumber1} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPhone2" className="mt-3">
                                    <Form.Label column md={4}>
                                        Phone Number 2
                                    </Form.Label>
                                    <Col md={8}>
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Enter your phone number" 
                                            name="phoneNumber2" 
                                            value={registeredData.phoneNumber2} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formBranch" className="mt-3">
                                    <Form.Label column md={4}>
                                        Branch
                                    </Form.Label>
                                    <Col md={8}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter your branch" 
                                            name="branch" 
                                            value={registeredData.branch} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formEmail" className="mt-3">
                                    <Form.Label column md={4}>
                                        Email
                                    </Form.Label>
                                    <Col md={8}>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            name="email" 
                                            value={registeredData.email} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group controlId="formCourses" className="mt-3">
                                    <Form.Label>Select Courses</Form.Label>
                                    <div className="custom-checkbox-group">
                                        <label className={`custom-checkbox ${courses.hindi ? 'selected' : ''}`}>
                                            <input
                                                type="checkbox"
                                                name="hindi"
                                                checked={courses.hindi}
                                                onChange={handleCourseChange}
                                            />
                                            Hindi
                                        </label>
                                        <label className={`custom-checkbox ${courses.spoken ? 'selected' : ''}`}>
                                            <input
                                                type="checkbox"
                                                name="spoken"
                                                checked={courses.spoken}
                                                onChange={handleCourseChange}
                                            />
                                            Spoken
                                        </label>
                                        <label className={`custom-checkbox ${courses.abacus ? 'selected' : ''}`}>
                                            <input
                                                type="checkbox"
                                                name="abacus"
                                                checked={courses.abacus}
                                                onChange={handleCourseChange}
                                            />
                                            Abacus
                                        </label>
                                        <label className={`custom-checkbox ${courses.dance ? 'selected' : ''}`}>
                                            <input
                                                type="checkbox"
                                                name="dance"
                                                checked={courses.dance}
                                                onChange={handleCourseChange}
                                            />
                                            Dance
                                        </label>
                                        <label className={`custom-checkbox ${courses.keyboard ? 'selected' : ''}`}>
                                            <input
                                                type="checkbox"
                                                name="keyboard"
                                                checked={courses.keyboard}
                                                onChange={handleCourseChange}
                                            />
                                            Keyboard
                                        </label>
                                    </div>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPassword" className="mt-3">
                                    <Form.Label column md={4}>
                                        Password
                                    </Form.Label>
                                    <Col md={8} className="d-flex align-items-center">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        <Button
                                            variant="light"
                                            onClick={togglePasswordVisibility}
                                            className="ml-2"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </Button>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formConfirmPassword" className="mt-3">
                                    <Form.Label column md={4}>
                                        Confirm Password
                                    </Form.Label>
                                    <Col md={8} className="d-flex align-items-center">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                            required
                                        />
                                        <Button
                                            variant="light"
                                            onClick={togglePasswordVisibility}
                                            className="ml-2"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </Button>
                                    </Col>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-4 w-100">
                                    Register
                                </Button>
                            </Form>

                            <p className="text-center mt-3">
                                Already a user? <Link to="/login">Login</Link>
                            </p>
                        </Card>
                    </Col>
                </Row>
                <br/><br/>
                <ToastContainer />
            </Container>
        </>
    );
}
