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
    return <div key={option.value} onClick={()=> handleOptionClick(option)} className='cursor-pointer' >
        <h1>
        {option.label}
        </h1>
    </div>
  })

  let content = "Select Genre!"
  if (select) {
    content = select.label
  }
  return (
   <>
    <div className='flex flex-col justify-center h-full w-full items-center'>
        <div onClick={handleClick} className='cursor-pointer'>{select ? select.label : "Select Genre"}</div>
       {appear && renderOptions}
    </div>
   </>
  )

}

export default Dropdown