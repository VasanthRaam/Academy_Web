import React, { useState } from 'react';
import { Button,Container, Row, Col, Dropdown,DropdownButton } from 'react-bootstrap';
import './Course.css';
import appleImg from './images/apple.jpg';
import mangoImg from './images/mango.jpeg';
import bananaImg from './images/banana.jpg';
import orangeImg from './images/orange.jpg';
import Navigation from '../Homepage/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    'Type Writing': mangoImg,
    'Spoken English':orangeImg,
    Keyboard:mangoImg,
    Violin:bananaImg,
    Vocal:orangeImg,
    Bharathanaatiyam:bananaImg
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
    Abacus: "Our Abacus course is designed to sharpen your child’s mathematical abilities through the ancient art of mental calculation. This program introduces learners to the use of the abacus as a powerful tool for performing fast and accurate arithmetic operations. By mastering abacus techniques, students will enhance their concentration, memory, and problem-solving skills, allowing them to solve complex calculations mentally with ease. The course offers interactive lessons, practice exercises, and personalized guidance from experienced instructors. Join us to give your child a head start in mathematics and boost their cognitive development in a fun and engaging way!",
    Language: "This language course covers both English and local languages, focusing on speaking, listening, and comprehension skills.",
    Drawing: "This course is about honing creative skills in drawing, from basic shapes to advanced techniques in sketching.",
    Music: "In this course, students will learn the basics of music theory, and instruments like keyboard, guitar, and singing.",
    'Classical Dance': "This is a classical dance course focused on traditional Indian dance forms such as Bharatanatyam and Kathak.",
    'Type Writing': "This course helps students improve typing speed and accuracy, teaching them how to type efficiently without looking at the keyboard.",
    'Spoken English':"Our Spoken English course is designed to help learners develop fluency and confidence in everyday English communication. Whether you're a beginner or looking to refine your conversational skills, this course offers practical lessons on pronunciation, vocabulary building, and sentence structure. Through engaging activities and real-life scenarios, you will learn to speak clearly and effectively in various social, academic, and professional contexts. With personalized feedback and practice sessions, our experienced instructors will guide you every step of the way to ensure you achieve your language goals. Join us to unlock new opportunities by mastering the art of spoken English!",
    Keyboard:"Our Keyboard course offers a comprehensive approach to learning the fundamentals of music and mastering the art of keyboard playing. Whether you're a beginner or looking to refine your skills, this course covers essential techniques like finger placement, scales, chords, and reading sheet music. Through a blend of theory and practical sessions, students will explore various music styles, from classical to contemporary. With personalized instruction and hands-on practice, you’ll develop coordination, rhythm, and musical expression. Join us to unlock the joy of playing the keyboard and take your musical talents to the next level!",
    Violin:"Our Violin course is crafted to guide students through the beautiful journey of learning this classical instrument. Designed for all skill levels, the course focuses on fundamental techniques such as bowing, finger positioning, and sound production. You’ll explore a range of musical styles, from classical masterpieces to modern pieces, enhancing your understanding of music theory and expression. With expert instructors offering personalized feedback, you'll develop the precision, tone, and artistry required to master the violin. Embark on this enriching experience and discover the elegance and depth of violin music!",
    Vocal:"Our Vocal course is designed to help singers of all levels refine their voice and unlock their full vocal potential. Through focused training on breathing techniques, pitch control, vocal range, and tone, students will learn to perform confidently in a variety of genres. Whether you're preparing for professional performances or simply want to improve your singing, this course provides personalized guidance from experienced vocal coaches. You’ll also work on vocal exercises, performance techniques, and musical interpretation to enhance your stage presence and expressiveness. Join us to elevate your vocal abilities and find your true voice!",
    Bharathanaatiyam:"Our Bharatanatyam course offers an immersive journey into one of India's most revered classical dance forms, blending grace, rhythm, and expression. This course is designed for both beginners and advanced learners, focusing on the foundational aspects of Bharatanatyam, including posture, mudras (hand gestures), adavus (basic steps), and abhinaya (expressive storytelling). Students will also gain a deep understanding of its rich cultural significance and the connection between music, rhythm, and movement. With expert guidance from seasoned instructors, you will develop not only technical skills but also the emotional depth needed to bring stories to life through dance. Join us to experience the spiritual and artistic essence of Bharatanatyam!"
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
          <h2>Courses</h2>
            <Col md={2}>
              <br></br>
              
              <div className="inline-buttons">
                <DropdownButton className='crsopt' id="dropdown-basic-button" title="Languages">
                  <Dropdown.Item onClick={() => handleCourseClick('Hindi')} href="#/action-1">Hindi</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCourseClick('Spoken English')} href="#/action-2">Spoken English</Dropdown.Item>
                </DropdownButton>
                
                <DropdownButton className='crsopt' id="dropdown-basic-button" title="Subjects">
                  <Dropdown.Item onClick={() => handleCourseClick('Hindi')} href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCourseClick('Hindi')} href="#/action-1">Maths</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCourseClick('Hindi')} href="#/action-1">Science</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCourseClick('Hindi')} href="#/action-1">Social</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCourseClick('Hindi')} href="#/action-1">Tamil</Dropdown.Item>
                </DropdownButton>
                
                <Button id="dropdown-basic-button" className='crsopt btn22' onClick={() => handleCourseClick('Abacus')} variant="primary">Abacus</Button>
                
                <DropdownButton className='crsopt' id="dropdown-basic-button" title="Music">
                  <Dropdown.Item onClick={() => handleCourseClick('Keyboard')} href="#/action-1">Keyboard</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCourseClick('Violin')} href="#/action-1">Violin</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCourseClick('Vocal')} href="#/action-1">Vocal</Dropdown.Item>
                </DropdownButton>
                
                <DropdownButton className='crsopt' id="dropdown-basic-button" title="Dance">
                  <Dropdown.Item onClick={() => handleCourseClick('Bharathanaatiyam')} href="#/action-1">Bharatanatiyam</Dropdown.Item>
                </DropdownButton>
                
                <Button className='crsopt  btn22' id="dropdown-basic-button" onClick={() => handleCourseClick('Type Writing')} variant="primary">Type Writing</Button>
                <Button className='crsopt  btn22' id="dropdown-basic-button" onClick={() => handleCourseClick('Drawing')} variant="primary">Drawing</Button>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={8} id="description-box" className="description-box">
              <Right selectedCourse={selectedCourse} fade={fade} courseDetails={courseDetails} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Course;
