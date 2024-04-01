import { createContext, useCallback, useState } from "react";
import axios from 'axios'

const BooksContext = createContext();

function Provider({ children }) {

    const [books,setBooks] = useState([])

    //Fetching Books
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    },[])

   

    //Create Book
    const handleCreateBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books',{
        title:title,
        })
        const updatedBooks = [
        ...books,response.data
        ]
        setBooks(updatedBooks)
    }

    //Delete Book by Id
    const handleDeleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((book)=>{
        return book.id != id
        })
        setBooks(updatedBooks)
    }

    //Edit Book by Id
    const handleEditedByIndex = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
        title : newTitle
        })
        const updatedBooks = books.map((book)=>{
        if (book.id == id) {
            return{...book, ...response.data,}
        }
        return book
        })
        setBooks(updatedBooks)
    }

    const valueToShare ={
        books : books,
        fetchBooks: fetchBooks,
        createBook: handleCreateBook,
        deleteBook: handleDeleteBookById,
        editBook: handleEditedByIndex
    }

    return(<BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>)
    
}

export{ Provider }
export default BooksContext

