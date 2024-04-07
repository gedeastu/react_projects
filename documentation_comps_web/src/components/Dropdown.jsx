import React, { useState } from 'react'

function Dropdown({options}) {
  const [label,setLabel] = useState('')
  const [appear,setAppear] = useState(false)

  const handleClick = () => {
    setAppear((previous) => {
        return !previous
    })
  }

  const handleOptionClick = (event) => {
    setAppear((previous)=>{
        return previous = false
    })
    console.log(event)
  }

  const renderOptions = options.map((option)=>{
    return <div key={option.value} onClick={()=> handleOptionClick} className='cursor-pointer' >
        <h1>
        {option.label}
        </h1>
    </div>
  })

  return (
   <>
    <div className='flex flex-col justify-center h-full w-full items-center'>
        <div onClick={() => handleClick} className='cursor-pointer'>Select... {appear.toString()}</div>
       {appear && renderOptions}
    </div>
   </>
  )

}

export default Dropdown