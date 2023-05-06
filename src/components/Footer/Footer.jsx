import './styles.scss'
import { 
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaArrowRight,
  FaMailBulk,
  FaMapMarkerAlt
 } from "react-icons/fa"
 import Logo from '../../assets/images/logo.png'

 const companyLinks = [
  {id: 1, href: '/#', anchor: 'About Us'},
  {id: 2, href: '/#', anchor: 'Services'},
  {id: 3, href: '/#', anchor: 'Blog'},
  {id: 4, href: '/#', anchor: 'Features'},
 ]

 const supportLinks = [
  {id: 1, href: '/#', anchor: 'Help Center'},
  {id: 2, href: '/#', anchor: 'Terms & Privacy'},
  {id: 3, href: '/#', anchor: 'Feedback'},
  {id: 4, href: '/#', anchor: 'Afiliate'},
 ]



export default function Footer() {
  return (
    <div className="footer">
      <div className='footer-links'>
        <div className='column-1'>
          <img src={Logo} alt="Logo da O-Digital" />
          <form action="/newsletter">
            <input type="text" name="subscribe" />
            <button type='submit'>
              <FaArrowRight />
            </button>
          </form>
            <span>
              Subscribe Our Weekly Blog
            </span>
        </div>
        <div className='column-2'>
          <h3>Company</h3>
          <ul>
            {
              companyLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.anchor}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='column-3'>
         <h3>Support</h3>
         <ul>
            {
              supportLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.anchor}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='column-4'>
          <h3>Get In Toch</h3>
          <p>
          Sed uterspis unde omnis iste  lano natus error voluem
          </p>
          <div className='adress-email'>
            <span>
              <FaMapMarkerAlt />
            </span>
            255 Main street, New york
          </div>
          <div className='adress-email'>
            <span>
              <FaMailBulk />
            </span>
            support@gmail.com
          </div>
        </div>

      </div>
      <div className='copy'>
        <span>©  2023  | All rights Reserved</span>
        <div className='social-links'>
          <span><FaFacebookF /></span>
          <span><FaTwitter /></span>
          <span><FaInstagram /></span>
        </div>
      </div>
    </div>
  )
}