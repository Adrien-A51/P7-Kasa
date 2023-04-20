import { NavLink } from 'react-router-dom'
import './Banner.scss'
import logo from './images/logo.png'

export default function Header() {
  return (<>
    <div className='header'>
    <NavLink to="/"><img src={logo} alt='Logo Kasa'/></NavLink>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/Apropos">A propos</NavLink>
      </nav>
    </div>
    </>)
}