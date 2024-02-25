import { useState } from 'react';
import '../home/home.css';
import { Link } from 'react-router-dom';
import { loginDropdown } from '../home/homeitem';
import './action.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Action() {
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
        <div className="action-container">
            <div className="action-wrapper">
                <h3 className="action-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
                aliqua. Posuere morbi leo urna molestie at elementum eu. Volutpat blandit aliquam etiam erat velit scelerisque in dictum <br/>
                non. Accumsan lacus vel facilisis volutpat. Sed arcu non odio euismod lacinia at. Aliquam sem et tortor consequat id porta <br/>
                nibh venenatis. Ut eu sem integer vitae justo eget magna. Fermentum odio eu feugiat pretium nibh ipsium consequat. <br/>
                Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Vivamus at augue eget arcu dictum varius duis at consectetur. Eu <br/>
                sem integer vitae justo eget magna. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Dictum fusce ut placerat <br/>
                orci nulla pellentesque dignissim enim. Adipiscing elit pellentesque habitant morbi tristque senectus et. Mauris augue <br/>
                neque gravida in. Ultricies integer quis auctor elit sed vulputate mi. Nibh praesent tristique magna sit amet purus.</h3>
            </div>
            <div className="actionbox-container">
                <div className="action-box">dashboard demo</div>
                <div className="action-box">student demo</div>
            </div>
            <div className="detail-container1">
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
        </div>
       
       
  )
}

export default Action