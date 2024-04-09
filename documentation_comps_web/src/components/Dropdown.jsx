import React, { useState } from 'react'

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

  const renderOptions = options.map((option)=>{
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={()=> handleOptionClick(option)} >
        <h1>
        {option.label}
        </h1>
    </div>
  })

  return (
   <>
    <div className='flex flex-col justify-center h-full w-full items-center'>
        <div className='w-48 relative'>
            <div onClick={handleClick} className='cursor-pointer flex items-center justify-between rounded p-3 shadow-md bg-white w-full border '>{select?.label || "Select Genre"}</div>
            {appear && <div className='absolute top-full w-full bg-white shadow-md border'>{renderOptions}</div>}
        </div>
    </div>
   </>
  )

}

export default Dropdown