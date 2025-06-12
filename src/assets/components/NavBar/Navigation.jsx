import React from 'react'
import { BsHeadset,BsFillHouseFill, BsPersonFillGear ,BsFillTelephoneFill  } from "react-icons/bs";
import './Navigation.css'
function Navigation() {
    const navLink = [
        {name: 'Home', icon: <BsFillHouseFill/>},
        {name: 'Services', icon: <BsHeadset/>},
        {name: 'Skills', icon: <BsPersonFillGear/>},
        {name: 'Contact', icon: <BsFillTelephoneFill/>}
    ]
  return (
    <div className='navCont'>
        <nav className='navigationBar'>
            <span className='initialName'>R.S</span>
            <div className='linkWrap'>
                <ul>
                    {navLink.map((item , index) => (
                        <li key={index}><div  className='linkItem'><span className='linkIcon'>{item.icon}</span>{item.name}</div></li>
                    ))}
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navigation