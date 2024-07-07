import React from 'react'
import Link from './Link'
import { useState } from 'react'
function Sidebar() {
  const link = [
    {
        id:1,
        label: "Dropdown",
        href:'/dropdown'
    },
    {
        id:2,
        label: "Button",
        href:'/'
    },
    {
        id:3,
        label: "Accordion",
        href:'/accordion'
    },
    {
        id:4,
        label:"Modal",
        href:"/modal"
    }
  ]
  const links = link.map((link) => {
   return <Link className={`mb-3`} key={link.id} to={link.href} classVisited={`border-l-2 border-blue-500 pl-2 transition-all font-bold`}>{link.label}</Link>
  })
  return (
    <>
    <div className='sticky top-0 overflow-y-scroll flex flex-col justify-center items-start'>
     {links}
    </div>
    </>
  )
}

export default Sidebar