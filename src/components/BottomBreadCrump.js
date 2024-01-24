import React from 'react'
import HeaderSubtitle from './HeaderSubtitle'

function BottomBreadCrump() {

    function CheckedItem({title}){
        return(
            <div className='checked'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 29" fill="none">
                    <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{title}</p>
            </div>
        )
    }
  return (
    <section className='default-padding top-margin breadcrump'>
        <div className='default-padding '>
            <div className='bottomAdvert'>
                
                    <p>Ready to clear the path to perfect communication?</p>
                    <div className="checkedReasons">
                        <CheckedItem title={"30 days free trial"}/>
                        <CheckedItem title={"Cancel at any time"}/>
                        <CheckedItem title={"Access to all features"}/>
                        <CheckedItem title={"Peronalized onboarding"}/>
                    </div>
                    <div className='logo'>
                        <button className="default-btn white-bg-btn"> Talk to Sales</button>
                        <button className="default-btn blue-bg-btn"> Start your free trial</button>
                    
                    </div>
            </div>

            <div className='breadcrumpImg'>
                <img src={require("../images/Screen mockup (REPLACE FILL).png")} alt="" />
            </div>
        </div>
    </section>
  )
}

export default BottomBreadCrump
