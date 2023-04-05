import { Link } from 'react-router-dom'
import './Banner.scss'
import logo from './images/logo.png'

function Header() {
  return (
<>
    <div className='header'>
    <Link to="/"><img src={logo} alt='Logo Kasa'/></Link>
    <nav className='menu'>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/Apropos">A propos</Link>
        </li>
      </ul>
    </nav>
    </div>
    </>
  )
}

export default Header; 

