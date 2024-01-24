import React from 'react'
import PartnerImage from './imageSvgs/PartnerImage'
import Star from './imageSvgs/Star'
import ArrowLeft from './imageSvgs/ArrowLeft'

function CommentSection() {
  return (
    <section className='comment top-margin default-padding layout1 bg-gray'>
    <div className='default-padding '>
      <div className='default-padding '>
        <div className="rightComment">
        <PartnerImage imageUrl={require("../images/Shopify.com svg.jpg")}/>
      <div className=' HeroReview'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    
                </div>
      <p>Experience the future of communication with ClearLink –
            where crystal-clear video conferencing meets
            unparalleled simplicity</p>

            <div className="userProfile">
              <div className="user">
                <img src={require('../images/Avatar.png')} alt="" />
                <div>
                  <h6>Sarah Thompson</h6>
                  <p>Project Manager, Shopify</p>
                </div>
              </div>
              <div className="arrows">
                <ArrowLeft/>
                <ArrowLeft right={true}/>
              </div>
            </div>
      </div>
      </div>


      <div className="leftSectionImages">
<img src={require("../images/Image (5).png")} alt="" />
<img src={require("../images/Image.png")} alt="" />
<img src={require("../images/Image (1).png")} alt="" />
<img src={require("../images/Image (3).png")} alt="" />
<img src={require("../images/Image (4).png")} alt="" />

      </div>
    </div></section>
  )
}

export default CommentSection
