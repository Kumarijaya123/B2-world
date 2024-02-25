import { useState } from 'react';
import '../home/home.css';
import { Link } from 'react-router-dom';
import { loginDropdown } from '../home/homeitem';
import './reach.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Reach() {
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
        <div className="reach-container">
        <div className="reachWrapper">
            <div className="reachLeft">
                <h3 className="reachLogo">We would love to connect with you!</h3>
                <span className="reachDesc">
                    aliqua. Posuera morbi leo urna molestie at elementum eu. <br/>
                    Volutpat blandit aliquam etiam erat velit scelerisque in <br/> dictum non. Accumsan 
                    lacus vel facilisis volutpat. Sed arcu <br/>non odio euismod lacinia at.
                     
                </span>
                <div className="email">
              <a href="https://www.email.com/your_email_username" className="email-link">Email: wellnessU@gmail.com</a>  
          </div>
          <div className="contact-icons">
          <a href="https://www.instagram.com/your_instagram_username" target="_blank">
          <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/your_linkedin_username" target="_blank">
         <i className="bi bi-linkedin"></i>
           </a>
         <a href="https://www.facebook.com/your_facebook_username" target="_blank">
        <i className="bi bi-facebook"></i>
       </a>
      <a href="https://twitter.com/your_twitter_username" target="_blank">
        <i className="bi bi-twitter"></i>
    </a>
    </div>
     </div>
    <div className="reachRight">
        <div className="reachBox">
        <div className='reach-in'>Say Hello!</div>
            <h3 className="reach-name">Name</h3>
            <input type="name"  className="reachInput" id=''/>
            <h3 className="reach-name">Email Id</h3>
            <input type="name"  className="reachInput" id=''/>
            <h3 className="reach-name">Message</h3>
            <input type="name"  className="reachInput1" id=''/>
            </div>
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
       
  )
}

export default Reach