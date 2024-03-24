import { useState } from "react"
import BookEdit from "./BookEdit"
import useBooksContext from "../hooks/use-books-context"

function BookShow({book}) {

  const {deleteBook} = useBooksContext()

  const handleClickDelete = () =>{
    deleteBook(book.id)
  }

  const [showEdit,setShowEdit] = useState(false)
  
  const handleShowEdit = () => {
    setShowEdit(
      (previous) => !previous
    )
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  return ( 
    <>
    <div className="border border-black w-96 my-4 mx-5 flex flex-col items-center justify-center">
      <img src={`https://picsum.photos/seed/${book.id}/200/200`} alt="" />
      <div className="flex flex-row justify-end p-3 gap-3">
        <button onClick={handleShowEdit} className="border border-black px-5">{showEdit ? "cancle" : "edit"}</button>
        <button onClick={handleClickDelete} className="border border-black px-5"> X </button>
      </div>
      <h1 className="py-3 text-2xl">{showEdit ? <BookEdit titleBook={book} onSubmit={handleSubmit}/> : book.title}</h1>
    </div>
    </>
  )
}

export default BookShow