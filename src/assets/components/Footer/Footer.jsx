import React from 'react'
import { BsFacebook, BsTwitterX, BsInstagram ,} from "react-icons/bs";
import './Footer.css'
function Footer() {
    const  socialIcon =[
        {icon:<BsFacebook/>, link: 'https://www.facebook.com/roland.shane.35'},
        {icon:<BsTwitterX/>, link: 'https://x.com/'},
        {icon:<BsInstagram/>, link: 'https://www.instagram.com/shanero22/'},
    ]
  return (
    <div className='footCont'>
        <footer>
        <span className='initialName'>R.S</span>
        <div className='socialWrap'>
        {socialIcon.map((item, index) =>
        <a href={item.link} target='_blank'>
            {item.icon}
        </a> )}
        </div>
        </footer>
        
    </div>
  )
}

export default Footer