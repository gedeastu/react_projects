import React from 'react'
import Dropdown from '../components/Dropdown'
function Dropdownpage() {
  const options = [
    {
        id: 1,
        label: "Action",
        value: "action"
    },
    {
        id: 2,
        label: "Romance",
        value: "romance",
    },
    {
        id: 3,
        label: "Sci-Fi",
        value: "sci-fi"
    },
    {
        id:4,
        label: "Thiller",
        value: "Thiller"
    },
  ]
  return (
    <>
    <div className='w-screen h-screen'>
    <Dropdown options={options}/>
    </div>
    </>
  )
}

export default Dropdownpage