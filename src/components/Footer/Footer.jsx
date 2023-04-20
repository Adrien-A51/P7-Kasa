import { Link } from 'react-router-dom';
import './Footer.scss'
import Logonb from './images/logonb.png'

export default function Footer() {
    return (<>

    <div className='footer'>
    <p><Link to="/"><img src={Logonb} alt='Logo Kasa n&b'/></Link><br></br>
    © 2020 Kasa. All rights reserved</p>
    </div>
    
    </>)
  }
