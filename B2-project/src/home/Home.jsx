import { useState } from 'react';
import './home.css';
import image1 from '../assets/graduate.jpg';
import image2 from '../assets/person.png';
import { Link } from 'react-router-dom';
import { loginDropdown } from './homeitem';

function Home() {
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
        <Link to="/login" className='home'>Login</Link>
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
      <div className='homepage'>
        <div className='side-image'>
          <img src={image1} alt="image" className="desktop-img"/>
        </div>
        <div className='right-container'>
          <div className='right'>WellnessU</div>
          <h2 className="content">Meet our <strong>Generative AI</strong> <br/> wellness companion, enhancing <br/> 
          student experience with <br/> <strong> Predictive Analytics</strong> across <br/> multiple wellness dimensions. 
          <br/>Because in today{`'`}s world,<br/>student well-being is as <br/> important as their grades!</h2>
          <div className="student">
            <button className="class1">I{`'`}m a Student </button>
            <button className="class2">I{`'`}m a Resource Center </button>
          </div>
        </div>
      </div>
      <div className="bottomcontent ">
        <div className="content1">Career</div>
        <h3 className="content2">A professional sound (or career well) person engages in work to gain personal satisfaction and enrichment, consistent with values, goals and lifestyle.</h3>
      </div>
      <div className='container1'>
        <div className="bottomcontent1 ">
          <div className="content3">Emotional</div>
          <h3 className="content4">An emotionally well person can identify, express and manage the entir range of feelings and would consider seeking assistance to address areas of concern.</h3>
        </div>
        <div className="container3">
          <div className="bottomcontent2 ">
            <div className="content5">Environmental</div>
            <h3 className="content6">An environmentally well person recognizes the responsibility to preserve, protect, and improve the environment and appreciates the interconnectedness of nature and the individual.</h3>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="bottomcontent3 ">
          <div className="content7">Financial</div>
          <h3 className="content8">A financially well person is fully aware of financial state and budgets, saves and manages finances in order to achieve realistic goals.</h3>
        </div>
        <div className="bottomcontent4 ">
          <div className="content9">Spiritual</div>
          <h3 className="content10">A spiritually well person seeks harmony and balance by openly exploring the depth of human purpose, meaning, and connection through dialogue and self-reflection.</h3>
        </div>
      </div>
      <div className='container4'>
        <div className="bottomcontent5 ">
          <div className="content11">Social</div>
          <h3 className="content12">A socially well person has a network of support based on interdependence, mutual trust, respect and has developed a sensitivity and awareness towards the feelings of others.</h3>
        </div>
        <div className="bottomcontent6 ">
          <div className="content13">Creative</div>
          <h3 className="content14">A creatively well person values and actively participates in a diverse range of arts and culture experiences as a means to understand and appreciate the surrounding world.</h3>
        </div>
      </div>
      <div className="topic">
        <div className="topic-name">9 Wellness Dimensions</div>
      </div>
      <div className='image-container'>
        <img src={image2} alt="person" className='person-img'/> 
      </div>
      <div className='container5'>
        <div className="bottomcontent7 ">
          <div className="content15">Intellectual</div>
          <h3 className="content16">An intellectually well person values lifelong learning and seeks to foster critical thinking, develop moral reasoning, expand worldviews, and engage in education for the pursuit of knowledge.</h3>
        </div>
        <div className="bottomcontent8 ">
          <div className="content17">Physical</div>
          <h3 className="content18">A physically well person gets an adequate amount of sleep, eats a balanced and nutritious diet, engages in exercise for 150 minutes per week, attends regular medical check-ups, and practices safe and healthy sexual relations.</h3>
        </div>
      </div>
      <div>
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
    </div>
  );
}

export default Home;
