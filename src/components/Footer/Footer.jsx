// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footer-content-left">
//             <img src={assets.logo_5} alt="" />
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//             <div className="footer-social-icons">
//                 <img src={assets.facebook_icon} alt="" />
//                 <img src={assets.twitter_icon} alt="" />
//                 <img src={assets.linkedin_icon} alt="" />
//             </div>
//         </div>
//         <div className="footer-content-center">
//             <h2>COMPANY</h2>
//             <ul>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy policy</li>
//             </ul>
//         </div>
//         <div className="footer-content-right">
//             <h2>GET IN TOUCH</h2>
//             <ul>
//                 <li>+1-212-456-7890</li>
//                 <li>contact@tomato.com</li>
//             </ul>
//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">Copyright 2024 © Food Corner.com - All Right Reserved.</p>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img className='logo-1' src={assets.logo_5}></img> */}
          <p>
            Hungry? Order from Food Corner. Fresh food, delivered fast.Your next delicious meal is just a tap away.<br/> Download the Tomato app and enjoy swift delivery.
          </p>
          <div className="footer-social-icons">
            {/* <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" /> */}
            <a href="https://www.instagram.com/ankit_03279?igsh=MTFqN2FxYnIwOWF6Zw==" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://x.com/RuhminKing?t=hoIoDVZZdq3KexYa6oBiQg&s=09" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/ankit-k-gautam-8498242ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91-7985244511</li>
            <li>ankitanuj032@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 &copy; Food Corner.com- All Rights Reserved.</p>
      <p>@Ankit K Gautam</p>
    </div>
  );
}

export default Footer

