import React from 'react'

function ArrowLeft({right}) {
  return (
    !right ?
    <div className='rightHeroSvg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
    :
    <div className='rightHeroSvg right'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
  )
}

export default ArrowLeft
