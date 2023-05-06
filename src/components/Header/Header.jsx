import './styles.scss'
import Logo from '../../assets/images/logo.png'

const links = [
  {name: 'Home', url: '/#'},
  {name: 'About', url: '/#'},
  {name: 'Service', url: '/#'},
  {name: 'Team', url: '/#'},
  {name: 'Contact', url: '/#'},
]

export default function Header() {
  return (
    <div className="header-container">
      <img src={Logo} alt="O-Digital Logo" />
      <ul>
        {
          links.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          ))
        }
      </ul>
      <button>Get A Quote</button>
    </div>
  )
}