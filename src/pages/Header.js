import { Link } from 'react-router-dom';
// import '../App.css';
// import img from './logo.png';
// import Dropdown from 'react-bootstrap/Dropdown';

// function Header() {
//     return (
//         <div className="header-section">
//             {/* <Link> */}
//            
//             {/* </Link> */}
//             <div style={{ alignSelf: "center", paddingRight: '5px' }}>
//                 <Link to='/' className='header-text'>Home</Link>
//                 <Link className='header-text'>Live Scores</Link>
//                 <Link className='header-text'>Schedule</Link>
//                 <Link className='header-text'>Archives</Link>
//                 <Link className='header-text'>News</Link>
//                 <Link className='header-text'>Series</Link>
//                 <Link className='header-text'>
//                     <Dropdown className='header-text'>
//                         <Dropdown.Toggle id="dropdown-basic">
//                             Teams
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                             <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                             <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </Link>
//                 <Link to='video' className='header-text'>Videos</Link>
//                 <Link className='header-text'>More</Link>
//                 <Link className='header-text'><i class="fa fa-search icon" aria-hidden="true"></i></Link>
//                 <Link className='header-text'><i class="fa fa-user-circle-o icon"></i></Link>
//             </div>
//         </div>
//     );
// }

// export default Header;

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
            <div style={{ marginLeft: 170 }}>
                <Container fluid>
                    <Navbar.Collapse id="navbar-dark-example">
                        <Link to='/' className='header-text'> <Nav>Home</Nav></Link>
                        <Link className='header-text'>Live Scores</Link>
                        <Link className='header-text'>Schedule</Link>
                        <Link className='header-text'>Archives</Link>
                        <Link className='header-text'>News</Link>
                        <Link className='header-text'>Series</Link>
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
                                    <NavDropdown.Item className='dropdown-heading' href="#action/3.1">TEST TEAMS</NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-heading' href="#action/3.2">ASSOCIATE</NavDropdown.Item>
                                </div>
                                <NavDropdown.Divider />
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.1">India</NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">Afghanistan</NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">Afghanistan</NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">Nepal</NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.3">Ireland</NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">Germany</NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.4">Pakistan</NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">Namibia</NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.4">
                                        Australia
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">
                                        Denmark
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.4">
                                        Sri Lanka
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">
                                        Singapore
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.4">
                                        Bangladesh
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">
                                        Papua New Guinea
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.4">
                                        England
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">
                                        Kuwait
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.4">
                                        West Indies
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">
                                        Vanuatu
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.4">
                                        South Africa
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">
                                        Jersey
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.4">
                                        Zimbabwe
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">
                                        Oman
                                    </NavDropdown.Item>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.4">
                                        New Zealand
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown-text' href="#action/3.2">
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
                                <NavDropdown.Item className='dropdown-text' href="#action/3.4">ICC Ranking - Men</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text' href="#action/3.2">ICC Ranking - Women</NavDropdown.Item>
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
                                <NavDropdown.Item className='dropdown-text' href="#action/3.4">World Test Championship</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text' href="#action/3.2">World Cup Super League</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text' href="#action/3.2">Quiz</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text' href="#action/3.2">Photos</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text' href="#action/3.2">Mobile App</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text' href="#action/3.2">Careers</NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-text' href="#action/3.2">Contact Us</NavDropdown.Item>
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
