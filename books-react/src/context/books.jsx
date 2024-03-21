import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {

    const[count,setCount] = useState(0)

    const IncrementCount = {
        count: count,
        incrementCount: () => {
            setCount((previous)=>previous+1)
        }
    }

    return(<BooksContext.Provider value={IncrementCount}>
            {children}
        </BooksContext.Provider>)
    
}

export{ Provider }
export default BooksContext

