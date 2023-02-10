import React from 'react'


const Button = ( props )  => {
  return (
    <div className="header-btns">
    <a href={props.href} target="_blank" className="header-btn" onClick={props.onClick}>{props.title}</a>
    </div>
    
  )
}
export default Button;
