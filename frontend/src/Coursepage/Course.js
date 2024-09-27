import React, { useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './Course.css';
import appleImg from './images/apple.jpg';
import mangoImg from './images/mango.jpeg';
import bananaImg from './images/banana.jpg';
import orangeImg from './images/orange.jpg';
import Navigation from '../Homepage/Navbar';

function Right({ selectedCourse, fade, courseDetails }) {
  if (!selectedCourse) {
    return <div>Select a course to view details</div>;
  }
  const courseImages = {
    Hindi: appleImg,
    'Subject Level': bananaImg,
    Abacus: orangeImg,
    Language: mangoImg,
    Drawing: mangoImg,
    Music: mangoImg,
    'Classical Dance': mangoImg,
    'Type Writing': mangoImg
  };

  return (
    <div id="contentbox" className={`content ${fade ? 'fade-out' : 'fade-in'}`}>
      <h3>{selectedCourse}</h3>
      <img id="imgincourse" src={courseImages[selectedCourse]} alt={selectedCourse} width="200px" />
      <p>{courseDetails[selectedCourse]}</p>
    </div>
  );
}

function Course() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [fade, setFade] = useState(false);

  const courseDetails = {
    Hindi: "This is the Hindi course. It covers speaking, reading, and writing in Hindi, with an emphasis on grammar and conversation practice.",
    'Subject Level': "This course is subject-level, providing in-depth tutorials and resources for various subjects like math, science, and social studies.",
    Abacus: "The Abacus course teaches mental math skills using the ancient tool of abacus. It's designed for young learners.",
    Language: "This language course covers both English and local languages, focusing on speaking, listening, and comprehension skills.",
    Drawing: "This course is about honing creative skills in drawing, from basic shapes to advanced techniques in sketching.",
    Music: "In this course, students will learn the basics of music theory, and instruments like keyboard, guitar, and singing.",
    'Classical Dance': "This is a classical dance course focused on traditional Indian dance forms such as Bharatanatyam and Kathak.",
    'Type Writing': "This course helps students improve typing speed and accuracy, teaching them how to type efficiently without looking at the keyboard."
  };

  const handleCourseClick = (course) => {
    setFade(true);
    setTimeout(() => {
      setSelectedCourse(course);
      setFade(false);
    }, 300);
  };

  return (
    <>
      <Navigation />
      <div className="App">
        <Container id="about">
          <Row className="justify-content-center">
            <Col md={12}>
              <h2>Courses</h2>
              <ListGroup className="inline-buttons">
                <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Hindi')}>Hindi</ListGroup.Item>
                <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Subject Level')}>Subject Level</ListGroup.Item>
                <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Abacus')}>Abacus</ListGroup.Item>
                <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Language')}>Language</ListGroup.Item>
                <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Drawing')}>Drawing</ListGroup.Item>
                <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Music')}>Music</ListGroup.Item>
                <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Classical Dance')}>Classical Dance</ListGroup.Item>
                <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Type Writing')}>Type Writing</ListGroup.Item>
              </ListGroup>
            </Col>

          </Row>
          <Row className="justify-content-center">
            <Col md={12} className="description-box">
              <Right selectedCourse={selectedCourse} fade={fade} courseDetails={courseDetails} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Course;
