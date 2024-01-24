import React from 'react'
import HeaderSubtitle from './HeaderSubtitle'
import Camera from './imageSvgs/Camera'
import * as Fa from "react-icons/fa";
import * as Hi2 from "react-icons/hi2";
import * as Bs from "react-icons/bs";
import { GiPadlockOpen } from "react-icons/gi";
function WhyUsSection() {
    function WhyChooseItems({title,description,icon}){
        return (
            <div className='whyItems'>
                <div className='rightHeroSvg'>{icon}</div>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        )
    }
    function GridImage({color,imageUrl}){
    
        return (
            <div className='svgImage2' >
                <div>
                <img  style={{"background-color":color}}  src={imageUrl} />
                </div>
            </div>
        )
    }
  return (
    <section className="pad-top default-padding ">
        
    <div className='top-margin default-padding'>
      <HeaderSubtitle short_title={'The ClearLink Advantage'} title={'Why choose ClearLink?'} words={"In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:"}/>
      <div className="whyBottom ">
        <div className="whyReasons">

        <WhyChooseItems title={"Crystal-clear HD video"} description={"No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings."} icon={<Hi2.HiOutlineVideoCamera color='#175CD3' />}/>
            <WhyChooseItems title={"Noise-Cancelling audio"} description={"Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations."} icon={<Bs.BsSoundwave color='#175CD3' />}/>
            <WhyChooseItems title={"Schedule made easy"} description={"Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."} icon={<Bs.BsCalendarDate color='#175CD3'/>}/>
            
            <WhyChooseItems title={"Bank-grade security"} description={"Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."} icon={<GiPadlockOpen color='#175CD3'/>}/>
        </div>
        <div className="imageGrid">
            
        <div className='svgImage2' >
                <img    src={require("../images/Rectangle 1.png")} />
                
            </div>
            
        </div>
      </div>
    </div></section>
  )
}

export default WhyUsSection
