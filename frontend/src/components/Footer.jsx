import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerRow">
        <div className="footerCol">
          <div className="footerInfo">
            <div className="footerDiv">
              <h2 className="footerTitle">Ricpe <span>T</span>axi</h2>
            </div>
            <div className="footerDiv">
              &copy; 2022 | <Link to='/' className='footerPrivacy'>Politique de confidentialité</Link>
            </div>
          </div>
          <div className="footerInfo">
            <p className="footerCopyright">Tous les droits sont réservés. Alimenté par GR3 -oth-Tz.</p>
          </div>
        </div>
        <div className="footerCol">
          <ul className="footerSocials">
            <li>
              <Link to='/'></Link>
            </li>
            <li>
              <Link to='/'></Link>
            </li>
            <li>
              <Link to='/'></Link>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <div className="footerCalls">
            <p><span>Contact</span> +212 614789632</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer