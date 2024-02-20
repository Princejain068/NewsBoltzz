import React from 'react'
import image from  './images/spinner.gif';
export default function Spinner() {
  return (
    <div className="text-center" style={{height:'50 px' ,width:'50px',justifyContent:'center'}}><img src={image} alt="" /></div>
  )
}
