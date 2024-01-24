import React from 'react'
import RobotSvg from './imageSvgs/RobotSvg'
import Microphone from './imageSvgs/Microphone'
import Camera from './imageSvgs/Camera'
import Screen from './imageSvgs/Screen'
import Emoji from './imageSvgs/Emoji'
import Comment from './imageSvgs/Comment'
import Gear from './imageSvgs/Gear'
import Star from './imageSvgs/Star'

function HeroSection() {

    function ImageSvg({color, url}){
        return (
            <div className='svgImage' >
                <img style={{"background-color":color}}  src={require(`../images/image 72.png`)} />
                </div>
        )
    }
  return (
    <div className='default-padding'>
    <div class="hero default-padding">
    <div>
        <h1>Uniting the world,<br />one video call at a time</h1>
        <p>Experience the future of communication with ClearLink –
            where crystal-clear video conferencing meets
            unparalleled simplicity</p>
        <div className='robot'>
            <button className="default-btn blue-bg-btn"> Start your free trial</button>
            <div className='robot'>
                <RobotSvg/>
                <h6>Discover AI assistant</h6>
            </div>
        </div>
        <div className='HeroReview'>
            <div className='HeroReviewLeft'>
                <img className='reviewAvatar' src={require('../images/image 100.png')} alt="" />
                <img className='reviewAvatar' src={require('../images/image 100.png')} alt="" />
                <img className='reviewAvatar' src={require('../images/image 100.png')} alt="" />
                <img className='reviewAvatar' src={require('../images/image 100.png')} alt="" />
            </div>
            <div className='low HeroReview'>
                <div className=' HeroReview'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <span>5.0</span>
                </div>
                <p className="light-highlight"> from 3,000+ review</p>
            </div>
        </div>
    </div>

    <div className="rightHero">
        <div className="svgHero">
            <ImageSvg color={" #FF9C66"}/>
            <ImageSvg color={" #D6BBFB"}/>
            <ImageSvg color={" #ACDC79"}/>
            <ImageSvg color={" #B3B8DB"}/>
            <ImageSvg color={" #FEC84B"}/>
            <ImageSvg color={" #FEA3B4"}/>
            
        </div>
        <div class="svgs">
            <Microphone/>
            <Camera/>
            <Screen/>
            <Emoji/>
            <Comment/>
            <Gear/>


        </div>

    </div>
    </div></div>
  )
}

export default HeroSection