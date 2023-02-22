import React, { useState } from 'react'
import './checkoutform.scss'

const Checkoutform = (props) => {


    const [focused, setFocused] = useState(false)
    const {label,errorMessage, onChange, id, ...inputProps} = props
    const handleFocus = (e) => {
      setFocused(true)
    }
   

  return (
    <div className='checkoutForm'>
       <label>{label}</label>
       <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused}/>
       <span>{errorMessage}</span>
    </div>
  )
}

export default Checkoutform