import React from "react";
import Navigation from "./Navbar";
import './Home.css';
import '../Aboutpage/Aboutus.css';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Contact";

export default function Home(){
    return(
        <>
            <Navigation isHomePage={true} />
            <div className="image-container">
                <img src="./images/sample.jpg" alt="home" />
            </div>
            <div id="idididid">
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link> */}
      <style>
          
      </style>
    <Container className="Aboutus ml-5 mt-5 mb-5" >
      <h1><span style={{"color":"red"}}>A</span>bout Us</h1>
      <Row>
        <Col id="paraa" md={8}>Since our establishment in 2010, we have steadily grown to become a leading institution, specializing in both Hindi education and extracurricular activities. What began as a modest initiative, driven by a small group of dedicated and passionate educators, has flourished over the years. With a strong commitment to quality and a student-centered approach, we have expanded our reach, welcoming more students into our programs each year. Our growth has been a testament to the effectiveness of our educational philosophy, which emphasizes not only academic excellence but also the importance of personal development through extracurricular engagement. This journey has enabled us to create a dynamic learning environment that continues to evolve and accommodate the growing needs of our diverse student body.</Col>
        <Col id="imcol" md={4}><img src="/images/abt1.png" alt='about-us' style={{"width":"65%"}} className='right' id="abtimg" ></img></Col>
      </Row>
      <br></br><br></br>
      <Row>
        <h2 className="text-end"><span style={{"color":"red"}}>M</span>ission Statement</h2>
        <Col id="imcol" md={4}><img src="/images/abt2.png" alt='mission-statement' style={{"width":"45%"}} className='left missionuh' id="abtimg" ></img></Col>
        <Col id="paraa" md={8}>Our mission is to provide high-quality education that helps students excel academically and in extracurricular activities. We foster an environment where students can reach their full potential through a balanced curriculum and opportunities for growth in areas like sports, arts, and leadership. Our goal is to equip students with critical thinking, problem-solving, and creative skills, while nurturing their unique talents to achieve success and contribute positively to society.</Col>
      </Row>
      <br></br><br></br>
      <Row>
        <h2><span style={{"color":"red"}}>H</span>istory</h2>
        <Col id="paraa" md={8}>Since our establishment in 2010, we have grown into a leading institution in Hindi education and extracurricular activities. What started with a small group of passionate educators has expanded significantly, welcoming more students each year. Our focus on quality and student-centered learning has allowed us to create an evolving educational environment that meets the needs of our growing student body.</Col>
        <Col id="imcol" md={4}><img src="/images/abt3.png" alt='history' style={{"width":"45%"}} className='right' id="abtimg" ></img></Col>
      </Row>
      <br></br><br></br>
      <Row>
        <h2 className="text-end"><span style={{"color":"red"}}>A</span>ccreditations and <span style={{"color":"red"}}>A</span>ffiliations</h2>
        <Col id="imcol" md={4}><img src="/images/abt4.png" alt='a-and-a' style={{"width":"55%"}} className='left' id="abtimg" ></img></Col>
        <Col id="paraa" md={8}>We are accredited by the central government and affiliated with prominent educational boards to ensure that our programs adhere to the highest standards of excellence. This accreditation reflects our commitment to providing quality education and maintaining rigorous academic and operational standards. Our affiliation with leading educational boards allows us to stay aligned with national educational guidelines and best practices, ensuring that our curriculum and teaching methodologies are both current and effective. By meeting these stringent requirements, we guarantee that our students receive a well-regarded and reputable education that prepares them for future success. This recognition reinforces our dedication to delivering an educational experience that is both comprehensive and distinguished.</Col>
      </Row><br></br><br></br>
      <Row>
        <h2><span style={{"color":"red"}}>F</span>aculty and <span style={{"color":"red"}}>S</span>taff</h2>
        <Col id="paraa" md={8}>Our dedicated team of educators, guided by Mrs. Revathi, Hindi Pandit, M.A., is committed to providing each student with personalized attention and exceptional instruction. Mrs. Revathi's leadership ensures that our educational approach is both individualized and of the highest quality. Our team works diligently to tailor their teaching methods to meet the unique needs of every student, fostering an environment where each learner can thrive. This commitment to personalized education is a cornerstone of our mission, aiming to deliver the best possible learning experience for all students.</Col>
        <Col id="imcol" md={4}><img src="/images/abt5.png" alt='staffs' style={{"width":"55%"}} className='right' id="abtimg" ></img></Col>
      </Row>
      
    </Container>
    <br></br>
            </div>
            <Contact/>
        </>
    )
}