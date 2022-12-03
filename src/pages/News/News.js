import '../../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cricketimg1 from '../../assets/images/cricketimg1.jpg';
import cricketimg2 from '../../assets/images/cricketimg2.jpeg';
import cricketimg3 from '../../assets/images/cricketimg3.jpeg';
function News() {

    const NewsSection = () => {
        return (
            <>
                <Row>
                    <Col xs={4}><img src={cricketimg1} width="80%" height="auto"></img>
                    </Col>
                    <Col xs={7}><h3 style={{ textAlign: "start", color: "black" }}>Rain threat looms large as India eye series-levelling win</h3>
                        <p style={{ textAlign: "start", color: "grey", }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            <br /> <br /> <br /> <br /> <br />
                        </p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p className='p-gray'>Nov 26 2022</p>
                            <p className='see-more'>See More</p>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
            </>);
    }
    return (
        <div className="App">
            <Container>

                <div>
                    <h1>India National Cricket News
                    </h1>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">ALL STORIES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">NEWS</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="link-2">TOPIC</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">INTERVIEW</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">LIVE BLOGS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">SPECIAL</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <hr></hr>
                    <h3 style={{ textAlign: "start", marginLeft: "30px", color: "black" }}>
                        Test News
                    </h3>

                </div>

                <NewsSection />
                <NewsSection />
                <NewsSection />
                <NewsSection />
                <NewsSection />


            </Container>
        </div>
    );
}

export default News;
