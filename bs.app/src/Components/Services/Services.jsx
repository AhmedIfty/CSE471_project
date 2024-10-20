import React from 'react'
import './Services.scss'
import basic from '../../Assects/basic4.jpg'
import advance from '../../Assects/advance.jpg'
import pro from '../../Assects/pro3.jpg'
import basic_icon from '../../Assects/basic_icon.png'
import advance_icon from '../../Assects/advance_icon.png'
import pro_icon from '../../Assects/pro_icon.png'
const services = () => {
  return (
    <div className='services'>
        <div className='service'>
            <img src={basic} alt="" />
            <a href='/'>
                <div className="caption">
                    <img src={basic_icon} alt="" />
                    <p>Small PP</p>
                </div>
            </a>
        </div>
        <div className='service'>
            <img src={advance} alt="" />
            <a href='/'>
                <div className="caption">
                    <img src={advance_icon} alt="" />
                    <p>Big D</p>
                </div>
            </a>
        </div>
        <div className='service'>
            <img src={pro} alt="" />
            <a href='/'>
                <div className="caption">
                    <img src={pro_icon} alt="" />
                    <p>Jason Luv</p>
                </div>
            </a>
        </div>
        
    </div>
  )
}

export default services