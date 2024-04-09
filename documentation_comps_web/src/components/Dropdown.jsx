import React, { useState } from 'react'
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import className from 'classnames';
import {twMerge} from 'tailwind-merge'
import Panel from './Panel';

function Dropdown({options, handleSelect, select}) {
  const [appear,setAppear] = useState(false)

  const handleClick = () => {
    setAppear((previous) => {
        return !previous
    })
  }

  const handleOptionClick = (option) => {
    setAppear((previous)=>{
        return previous = false
    })
    handleSelect(option)
  }

  const icon = <span className=''>{appear ? <FaAngleUp /> : <FaAngleDown />}</span>

  const renderOptions = options.map((option)=>{
    return(
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={()=> handleOptionClick(option)} >
         <h1>
         {option.label}
         </h1>
      </div>
    )
  })

  return (
   <>
    <div className='flex flex-col justify-center h-full w-full items-center'>
        <div className='w-48 relative'>
            <Panel onClick={handleClick} className='cursor-pointer flex items-center justify-between '>{select?.label || "Select Genre"}{icon}</Panel>
            {appear && <Panel className='absolute top-full'>{renderOptions}</Panel>}
        </div>
    </div>
   </>
  )

}

export default Dropdown