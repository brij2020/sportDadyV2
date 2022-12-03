import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import img from './logo.png';

function Header() {
    return (
        <Navbar className="header-section">
            <div style={{}}>
                <img src={img} width="60" height="60"></img>
            </div>
            <div style={{ marginLeft: 170 }} >
                <Container fluid>
                    <Navbar.Collapse id="navbar-dark-example">
                        <Link to='/' className='header-text'> <Nav>Home</Nav></Link>
                        <Link to='livescore' className='header-text'>Live Scores</Link>
                        <Link to='schedule' className='header-text'>Schedule</Link>
                        <Link to='archives' className='header-text'>Archives</Link>

                        <Nav
                        >
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="News"
                                menuVariant="white"
                                className='header-text navteam bd-dark'
                                style={{ zIndex: 5, }}
                            >
                                <NavDropdown.Item className='dropdown-text'><Link to="news">All Stories</Link></NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>News</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Topic</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Spotlight</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Opinion</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Special</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Stats & Analysis</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Interview</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Live Blogs</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        <Nav
                        >
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Series"
                                menuVariant="white"
                                className='header-text navteam bd-dark'
                                style={{ zIndex: 5, }}
                            >
                                <NavDropdown.Item className='d-text'>India tour of New Zealand, 2022</NavDropdown.Item>
                                <NavDropdown.Item className='d-text'>England tour of Pakistan, 2022</NavDropdown.Item>
                                <NavDropdown.Item className='d-text'>West Indies tour of Australia, 2022</NavDropdown.Item>
                                <NavDropdown.Item className='d-text'>Afghanistan tour of Sri Lanka, 2022</NavDropdown.Item>
                                <NavDropdown.Item className='d-text'>India A tour of Sri Lanka, 2022</NavDropdown.Item>
                                <NavDropdown.Item className='d-text'>Vijay Hazare Trophy 2022</NavDropdown.Item>
                                <NavDropdown.Item className='d-text'>T10 League 2022</NavDropdown.Item>
                                <NavDropdown.Item className='d-text'>Women Big Bash League 2022</NavDropdown.Item>
                                <NavDropdown.Item className='d-text'><Link to="series">All Series</Link></NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        <Link to='video' className='header-text'>Videos</Link>

                        <Nav
                        >
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Team"
                                menuVariant="white"
                                className='header-text navteam bd-dark'
                                style={{ zIndex: 5, }}
                            >
                                <div style={{ display: 'flex' }}>
                                    <h6 className='dropdown-heading'>TEST TEAMS</h6>
                                    <h6 className='dropdown-heading'>ASSOCIATE</h6>
                                </div>
                                <NavDropdown.Divider />

                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'><Link to='team'>India</Link></NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>Afghanistan</NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>Afghanistan</NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>Nepal</NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>Ireland</NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>Germany</NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>Pakistan</NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>Namibia</NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Australia
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Denmark
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Sri Lanka
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Singapore
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Bangladesh
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Papua New Guinea
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>
                                        England
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Kuwait
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>
                                        West Indies
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Vanuatu
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>
                                        South Africa
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Jersey
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Zimbabwe
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Oman
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text'>
                                        New Zealand
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text'>
                                        Fiji
                                    </NavDropdown.Item>
                                </div>

                            </NavDropdown>

                        </Nav>

                        <Nav
                        >
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Ranking"
                                menuVariant="white"
                                className='header-text navteam bd-dark'
                                style={{ zIndex: 5, }}
                            >
                                <NavDropdown.Item className='dropdown-text'>ICC Ranking - Men</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>ICC Ranking - Women</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        <Nav
                        >
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="More"
                                menuVariant="white"
                                className='header-text navteam bd-dark'
                                style={{ zIndex: 5, }}
                            >
                                <NavDropdown.Item className='dropdown-text'>World Test Championship</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>World Cup Super League</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Quiz</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Photos</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Mobile App</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Careers</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text'>Contact Us</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </div>
            <div>
                <Link className='header-text'><i class="fa fa-search icon" aria-hidden="true"></i></Link>
                <Link className='header-text'><i class="fa fa-user-circle-o icon"></i></Link>
            </div>
        </Navbar>
    );
}
export default Header;