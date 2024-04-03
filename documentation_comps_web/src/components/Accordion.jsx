import React,{useContext, useState} from 'react'
import useAccordionContext from '../hooks/use-accordion-context'
import AccordionContext from '../context/accordion'

function Accordion({items}) {
  const [expandedIndex,setExpandedIndex] = useState(0)

  //const {setExpandedIndex,isExpanded} = useAccordionContext()
  const handleClick = (index) => {
   setExpandedIndex(index)
  }
  const renderItems = items.map((item,index)=>{
    const isExpanded = index === expandedIndex
    return (
        <div 
            key={item.id} 
            onClick={() => {
              handleClick(index)
            }}
        >
            <h1>{item.label}</h1>
            {isExpanded && <div>{item.content}</div>}
        </div>
    )
  })

  return (
    <>
    {renderItems} 
    </>
  )
}

export default Accordion