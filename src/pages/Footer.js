import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import img from './logo.png';

function Footer() {
    return (
        <>
            <div>
                <div style={{ background: '#000', paddingLeft: 50 }}>

                    <div class="footer-social-link">
                        <h3 className='cont-heading'>Follow us</h3>
                        <ul className='d-flex'>
                            <li>
                                <a>
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i class="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="row">
                        <div class="col-md-12 col-lg-10">
                            <div class="footer-widget footer-left-widget">
                                <div class="section-heading">
                                    {/* <h3 className='cont-heading'>Useful Links</h3> */}
                                    <span class="animate-border border-black"></span>
                                </div>
                                <div className='d-flex'>
                                    <ul style={{ marginTop: 20, }}>
                                        <li>
                                            <a className='cont-text'>About us</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Live Score</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Players</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Teams</a>
                                        </li>
                                    </ul>
                                    <ul style={{ marginTop: 20, }}>
                                        <li>
                                            <a className='cont-text'>Contact us</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Latest News and Articles</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>More</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Faq</a>
                                        </li>
                                    </ul>
                                    <ul style={{ marginTop: 20, }}>
                                        <li>
                                            <a className='cont-text'>Features Video</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Live Photos</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Schedule</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Ranking</a>
                                        </li>
                                    </ul>
                                    <ul style={{ marginTop: 20, }}>
                                        <li>
                                            <a className='cont-text'>ICC - Ranking Men</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>ICC - Ranking Women</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Series</a>
                                        </li>
                                        <li>
                                            <a className='cont-text'>Quiz</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-start'>
                        <input class="form-field" type="text" placeholder="Enter your E-mail" />
                        <button className='submit-btn'>Submit</button>
                    </div>

                </div>

                <div class="copyright">
                    <div class="container">
                        {/* <div class="row"> */}
                            <div class="col-md-6">
                                <span>Copyright © 2019, All Right Reserved Seobin</span>
                            </div>
                            <div class="col-md-6">
                                <div class="copyright-menu">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>

            </div>

        </>

    );
}
export default Footer;