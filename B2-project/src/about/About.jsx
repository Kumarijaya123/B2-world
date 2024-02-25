import { useState } from 'react'
import '../home/home.css'
import './about.css'
import { Link } from 'react-router-dom'
import { loginDropdown } from '../home/homeitem'
import blankimage from '../assets/blankimage.jpg'


function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="container" style={{ paddingTop: '45px', marginLeft: '65px' }}>
        <div className='logo'> WU</div>

        <Link to="/" className='home'>Home</Link>
        <Link to="/about" className='home'>About</Link>
        <Link to="/reach-out" className='home'>Reach out?</Link>
        <Link to="/action" className='home'>See in it Action</Link>
        <div className='home' onClick={toggleDropdown}>Login</div>

        {isOpen && (
          <div className="dropdown-content">
            <ul className="login-submenu">
              {loginDropdown.map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className={item.cName}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
      )}
      </div>
      <h2 className="topic-title" style={{fontFamily:"sans-serif", marginTop:"45px", marginLeft:"140px"}}>Our Journey</h2>  
      <div className="box-container">
        <div className="box"></div>
        <div className="curve-container">
        <div className="curve"></div>
        <div className="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" width="24px" height="24px">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 15.41l-4.29-4.29L6 12.71 12 18l6-5.29-1.71-1.71L12 15.41z"/>
      </svg>
    </div>
      </div>
      <div className="box-container1">
        <div className="box1"></div>
     </div>
     <div className="curve-container1">
        <div className="curve1"></div>
        </div>
  </div>
  
  <div className="box-container2">
        <div className="box2"></div>
     </div>
     <div className="box-container3">
        <div className="box3"></div>
     </div>
     <div className="box-container4">
        <div className="box4"></div>
     </div>
     <div className="box-container5">
        <div className="box5"></div>
     </div>
     <div className="heading-container">
      <div className="heading">
      Meet The Core Team
      </div>
      <div className="photo-container">
    <div className="photo-wrapper">
      <img src={blankimage} alt="image" className='photos' />
      <div className="name">Avantika Singh <br/> <h4 className="names">Chief Executive Officer <br/> AI Chip Design, EECS</h4></div>
    </div>
    <div className="photo-wrapper">
      <img src={blankimage} alt="image" className='photos'/>
      <div className="name">Neil Nagaraj <br/> <h4 className="names">Chief Technology Officer <br/> AI Computer Science</h4></div>
    </div>
    <div className="photo-wrapper">
      <img src={blankimage} alt="image" className='photos'/>
      <div className="name">Jaideep Rao Alladi <br/> <h4 className="names">Chief Operating Officer <br/> Mechanical & Aerospace Engineering</h4></div>
    </div>
    <div className="photo-wrapper">
      <img src={blankimage} alt="image" className='photos'/>
      <div className="name">Himanshu Singh <br/> <h4 className="names">Chief Financial Officer</h4></div>
    </div>
    </div>
    <div className="photo-container1">
    <div className="photo-wrapper">
      <img src={blankimage} alt="image" className='photos'/>
      <div className="name">Avani Rao Alladi <br/> <h4 className="names">UX Designer</h4></div>
    </div>
    <div className="photo-wrapper">
      <img src={blankimage} alt="image" className='photos'/>
      <div className="name">Bhargav <br/> <h4 className="names">Developer</h4></div>
    </div>
  </div>
</div>
<div className="detail-container">
          <div className="details">WellnessU</div>
          <div className="insta">
              <a href="https://www.instagram.com/your_instagram_username" className="insta-link">Instagram</a> | 
              <a href="https://www.facebook.com/your_facebook_username" className="insta-link">Facebook</a> | 
              <a href="https://www.twitter.com/twitter" className="insta-link">Twitter</a> | 
              <a href="https://www.linkedin.com/your_linkedin_username" className="insta-link">LinkedIn</a>
          </div>
          <h5 className="copywrite">WellnesU | 2024 &copy; All Rights Are Reserved</h5>
        </div>
</div>
  );
}

export default About
