import React,{useContext, useState} from 'react'
import useAccordionContext from '../hooks/use-accordion-context'
import AccordionContext from '../context/accordion'
import { FaAngleDown,FaAngleUp } from "react-icons/fa";

function Accordion({items}) {
  const [expandedIndex,setExpandedIndex] = useState(-1)

  //const {expandedIndex,handleClickAccordion} = useAccordionContext()
  const handleClick = (index) => {
   setExpandedIndex((previous) => {
    if(previous === index ){
      return -1
    }else{
      return index
    }})
   //console.log(expandedIndex)
  }

  const renderItems = items.map((item,index)=>{
    const isExpanded = index === expandedIndex
    const icon = <span className=''>{isExpanded ? <FaAngleUp /> : <FaAngleDown />}</span>
    return (
        <div 
            key={item.id} 
            onClick={() => {
              //handleClick((index === expandedIndex) ? isExpanded : index )
              handleClick(index)
            }}
            className='flex flex-col items-center justify-center'
        >
            <h1 className='flex flex-row items-center justify-center gap-5 bg-gray-100 cursor-pointer w-96 h-14'>{item.label}{icon}</h1>
            {isExpanded && <div className='flex justify-center w-96 py-3'>{item.content}</div>}
        </div>
    )
  })
  return (
    <>
    <div className='flex flex-col justify-center h-full w-full items-center'>
    {renderItems} 
    </div>
    </>
  )
}

export default Accordion