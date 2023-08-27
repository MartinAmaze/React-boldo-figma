import './App.css';
import logo from './assest/Logo3.svg';
import hero from './assest/hero.svg'
import Rectangle from './assest/Rectangle.svg'

function boldo() {
  return (
    <div className="Rectangle1267">
      <nav className='nav-bar'>
      <div className='Group285'>
        <div className='logo'>
           <img src={logo} alt='my logo' className='my-logo'/>
           <div className='Boldo'>Boldo</div>
        </div>

        <div className='Navigation'>
          <ul>
            <li><a href="/product">Product</a></li>
            <li><a href="/Service">Services</a></li>
            <li><a href="/About">About</a></li>
            <li>
             <button><a href="/LogIn">Log In</a></button> 
              </li>
          </ul>
        </div>
        </div>
        </nav>
        <div className='Frame284'>
         <div className='Frame267'>
          <div className='Heading'>
            <h1>Save time by building <br/> fast with Boldo Template </h1>
            <p>Funding handshake buyer business-to-business metrics iPad partnership.<br/> 
              First mover advantage innovator success deployment non-disclosure.</p>
          </div>

          <div className='Headings-button'>
            <button className='green-button'>Buy template</button>
            <button className='plain-button'>Explore</button>
          </div>
          </div>
          
          <div className='hero-graphics'>
               <img src={hero } alt='my hero'/>
          </div>
        </div>

        <div className='Rectangle-1288'>
           <img src={Rectangle} alt='my Rectangle'/>
        </div>

          </div>
  );
}

export default boldo;
