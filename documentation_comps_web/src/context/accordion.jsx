import { createContext,useState } from "react";

const AccordionContext = createContext();
function Provider({children}) {

    const [expandedIndex,setExpandedIndex] = useState()

    const handleClickAccordion = (index) =>{
        setExpandedIndex(index)
    }

    const isExpanded = (index) =>{
        index === expandedIndex
    }

    const valueToShare ={
        expandedIndex: expandedIndex,
        isExpanded: isExpanded,
        setExpandedIndex: setExpandedIndex,
        handleClickAccordion: handleClickAccordion
    }

    return(<AccordionContext.Provider value={valueToShare}>
            {children}
        </AccordionContext.Provider>)
}
export{ Provider }
export default AccordionContext