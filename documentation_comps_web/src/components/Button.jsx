import React from 'react'
import className from 'classnames'
import { twMerge } from 'tailwind-merge'


function Button({ children, primary, secondary, success, warning, danger, outline, rounded, large, medium}) {

  const spacingClassName = className('px-5 py-5')
  const themeClassName = twMerge(className(spacingClassName,{
    'bg-red-500 text-white' : danger,
    'rounded-lg' : rounded,
    'bg-blue-500 text-white' : primary,
    'outline outline-2 outline-offset-2 bg-white text-black' : outline && primary,
    'w-44 h-44' : medium,
    'w-96 h-60' : large,
  }))

  return (
    <>
    <button className={themeClassName}>
        {children}
    </button>
    </>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    //Number(!!value) -> 0
    //Number(!!value) + Number(!!value) -> 0
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
    if (count > 1) {
      return new Error('Only One Primary,Secondary,Success,Warning,Danger can be true') 
    }
  }
}

export default Button