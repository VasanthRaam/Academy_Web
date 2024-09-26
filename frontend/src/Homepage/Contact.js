import { Card, Container, Row, Col } from "react-bootstrap";
import './Contact.css'; // Import your custom CSS

export default function Contact() {
    return (
        <>
            <div className="image-container-2">
                <div className="overlay-container">
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            {/* Map column */}
                            <Col xs={12} md={6} className="mb-4 mb-md-0">
                                <div className="map-container">
                                    <iframe
                                        title="Location Map"
                                        src="https://maps.google.com/maps?q=vasanth%20academy&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: '0', borderRadius: '5px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    />
                                </div>
                            </Col>
                            {/* Card column */}
                            <Col xs={12} md={6}>
                                <Card className="p-4 shadow-sm">
                                    <Card.Body>
                                        <Card.Title className="mb-3">
                                            <h3><span style={{ color: "red" }}>V</span>asanth Academy</h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>Mobile 1:</strong> <a href="tel:9443333733" className="text-decoration-none">94433 33733</a>
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Mobile 2:</strong> <a href="tel:9159520889" className="text-decoration-none">91595 20889</a>
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Email:</strong> <a href="mailto:vasanthhindiacademy14@gmail.com" className="text-decoration-none">vasanthhindiacademy14@gmail.com</a>
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>YouTube:</strong> <a href="https://www.youtube.com/@vasanthacademy.1404" className="text-decoration-none">Vasanth Academy</a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
