import React from 'react'
import { Link } from 'react-router-dom'

const Box = () => {
    return (
        <div className='box'>
            <div className="boxRow">
                <div className="boxCol">
                    <div className="boxInner">
                        <div className="boxTop">
                            <img src="./assets/uploads/icon1.png" alt="" />
                            <p>Rapide&<span> <br></br> Sécuriser</span></p>
                        </div>
                        <div className="boxMiddle">
                            <p className="boxDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis, veniam itaque rem illum dolorem. <Link to='/'></Link></p>
                        </div>
                    </div>
                </div>
                <div className="boxCol">
                    <div className="boxInner">
                        <div className="boxTop">
                            <img src="./assets/uploads/icon2.png" alt="" />
                            <p>Meilleure<span> <br></br> Prix</span></p>
                        </div>
                        <div className="boxMiddle">
                            <p className="boxDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis, veniam itaque rem illum dolorem. <Link to='/'></Link></p>
                        </div>
                    </div>
                </div>
                <div className="boxCol">
                    <div className="boxInner">
                        <div className="boxTop">
                            <img src="./assets/uploads/icon3.png" alt="" />
                            <p>livraison<span> <br></br> Valise</span></p>
                        </div>
                        <div className="boxMiddle">
                            <p className="boxDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis, veniam itaque rem illum dolorem. <Link to='/'></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box