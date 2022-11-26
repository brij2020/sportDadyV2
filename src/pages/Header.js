import { Link } from 'react-router-dom';
import '../App.css';
import img from './logo.png';

function Header() {
    return (
        
        <>
        <div className="header-section">
            {/* <Link> */}
            <div style={{ alignSelf: "center",}}>
                <img src={img} width="60" height="60"></img>
            </div>
            {/* </Link> */}
            <div style={{ alignSelf: "center", paddingRight: '5px' }}>
                <Link to='/' className='header-text'>Home</Link>
                <Link to="livescore" className='header-text'>Live Scores</Link>
                <Link to='schedule' className='header-text'>Schedule</Link>
                <Link className='header-text'>Archives</Link>
                <Link className='header-text'>News</Link>
                <Link className='header-text'>Series</Link>
                <Link to='team' className='header-text'>Teams</Link>
                <Link to='video' className='header-text'>Videos</Link>
                <Link className='header-text'>More</Link>
                <Link className='header-text'><i class="fa fa-search icon" aria-hidden="true"></i></Link>
                <Link className='header-text'><i class="fa fa-user-circle-o icon"></i></Link>
            </div>
        </div>

        
        </>
    );
}

export default Header;
