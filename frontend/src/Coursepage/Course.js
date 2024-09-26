import React, { useState } from 'react';
import { Container, Row, Col, ListGroup} from 'react-bootstrap';
import './Course.css';
import appleImg from './images/apple.jpg';
import mangoImg from './images/mango.jpeg';
import bananaImg from './images/banana.jpg';
import orangeImg from './images/orange.jpg';
import Navigation from '../Homepage/Navbar';

function Right({ selectedCourse, fade }) {
  if (!selectedCourse) {
    return <div>Enna pazham Venum</div>;
  }
  const courseImages = {
    Apple: appleImg,
    Banana: bananaImg,
    Orange: orangeImg,
    Mango: mangoImg
  };
  
  const para = "Apple paththi para, neraya solalaam apple paththi apro enna saaptoya nalla irukiya jolly ah iruka mass thaam";

  return (
    <div className={`content ${fade ? 'fade-out' : 'fade-in'}`}>
      <h3>{selectedCourse}</h3>
      <img src={courseImages[selectedCourse]} alt={selectedCourse} width="200px"/>
      <p>{para}</p>
    </div>
  );
}

function Course() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [fade, setFade] = useState(false);

  const handleCourseClick = (course) => {
    setFade(true);
    setTimeout(() => {
      setSelectedCourse(course); 
      setFade(false);
    }, 300); 
  };

  return (
    <>
    <Navigation/>

    <div className="App">
      <Container id="about">
        <Row>
          <Col md={4}>
            <h2>Courses</h2>
            <ListGroup className="leftlist">
              <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Apple')}>Hindi</ListGroup.Item>
              <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Banana')}>Subject Level</ListGroup.Item>
              <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Orange')}>Abacus</ListGroup.Item>
              <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Mango')}>Language</ListGroup.Item>
              <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Mango')}>Drawing</ListGroup.Item>
              <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Mango')}>Music</ListGroup.Item>
              <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Mango')}>Classical Dance</ListGroup.Item>
              <ListGroup.Item action className="me-2 mb-2" onClick={() => handleCourseClick('Mango')}>Type Writing</ListGroup.Item>
            </ListGroup>

          </Col>
          <br/><br/>
          <Col md={8} className="about-col-2">
           <Right selectedCourse={selectedCourse} fade={fade} />
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>
    </>
  );
}

export default Course;
