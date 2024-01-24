import React from 'react'

function HeaderSubtitle({short_title,title, words}) {
  return (
    <div className='headerSubtitle'>
      <div>{short_title}</div>
      <h2>
        {title}
        </h2>
        <p>{words}</p>
      
    </div>
  )
}

export default HeaderSubtitle