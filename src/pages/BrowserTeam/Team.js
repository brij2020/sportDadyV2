import '../../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cricketimg1 from '../../assets/images/cricketimg1.jpg';
import cricketimg2 from '../../assets/images/cricketimg2.jpeg';
import cricketimg3 from '../../assets/images/cricketimg3.jpeg';
function Team() {
    return (
        <div className="App">
            <Container>
                <h1 style={{ textAlign: "start", color: "black" }}>India National Cricket Team
                </h1>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">INTERNATIONAL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">T20 LEAGUES</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="link-2">DOMESTIC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">WOMEN</Nav.Link>
                    </Nav.Item>
                </Nav>
                <hr></hr>
                <h3 style={{ textAlign: "start", marginLeft: "30px", color: "black" }}>
                    Test Teams
                </h3>
                <Row>
                    <Col xs={4}><img src={cricketimg1} width="80%" height="auto"></img>
                    </Col>
                    <Col xs={8}><h3 style={{ textAlign: "start", color: "black" }}>Rain threat looms large as India eye series-levelling win</h3>
                        <p style={{ textAlign: "start", color: "grey" }}>
                            Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                            <br></br>Nov 26 2022
                        </p>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="mt-5">
                    <Col xs={4}><img src={cricketimg2} width="80%" height="auto"></img>
                    </Col>
                    <Col xs={8}><h3 style={{ textAlign: "start", color: "black" }}>Rain threat looms large as India eye series-levelling win</h3>
                        <p style={{ textAlign: "start", color: "grey" }}>
                            Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                            <br></br>Nov 26 2022
                        </p>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="mt-5">
                    <Col xs={4}><img src={cricketimg3} width="80%" height="auto"></img>
                    </Col>
                    <Col xs={8}><h3 style={{ textAlign: "start", color: "black" }}>Rain threat looms large as India eye series-levelling win</h3>
                        <p style={{ textAlign: "start", color: "grey" }}>
                            Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                            <br></br>Nov 26 2022
                        </p>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="mt-5">
                    <Col xs={4}><img src={cricketimg1} width="80%" height="auto"></img>
                    </Col>
                    <Col xs={8}><h3 style={{ textAlign: "start", color: "black" }}>Rain threat looms large as India eye series-levelling win</h3>
                        <p style={{ textAlign: "start", color: "grey" }}>
                            Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                            <br></br>Nov 26 2022
                        </p>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="mt-5">
                    <Col xs={4}><img src={cricketimg1} width="80%" height="auto"></img>
                    </Col>
                    <Col xs={8}><h3 style={{ textAlign: "start", color: "black" }}>Rain threat looms large as India eye series-levelling win</h3>
                        <p style={{ textAlign: "start", color: "grey" }}>
                            Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                            <br></br>Nov 26 2022
                        </p>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="mt-5">
                    <Col xs={4}><img src={cricketimg1} width="80%" height="auto"></img>
                    </Col>
                    <Col xs={8}><h3 style={{ textAlign: "start", color: "black" }}>Rain threat looms large as India eye series-levelling win</h3>
                        <p style={{ textAlign: "start", color: "grey" }}>
                            Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                            <br></br>Nov 26 2022
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Team;
