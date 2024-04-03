import { useContext } from "react"
import AccordionContext from "../context/accordion"

function useAccordionContext() {
    return useContext(AccordionContext)
}

export default useAccordionContext