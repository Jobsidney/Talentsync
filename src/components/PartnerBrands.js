import React from 'react'
import Partner from '../images/Group.svg'
import Shopify from './imageSvgs/PartnerImage'
import PartnerImage from './imageSvgs/PartnerImage'
function PartnerBrands() {
  return (
    <section className='default-padding'>
    <div className='partners default-padding'>
      <p>Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div className='Logopartners'>
        <PartnerImage imageUrl={require("../images/Shopify.com svg.jpg")}/>
        <PartnerImage imageUrl={require("../images/Coinbase svg.png")}/>
        <PartnerImage imageUrl={require("../images/Dropbox svg.png")}/>
        <PartnerImage imageUrl={require("../images/Intercom svg.png")}/>
        <PartnerImage imageUrl={require("../images/Marvel svg.png")}/>
        <PartnerImage imageUrl={require("../images/Automattic svg.png")}/>
      </div>
    </div></section>
  )
}

export default PartnerBrands
