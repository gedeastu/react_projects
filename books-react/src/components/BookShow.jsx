import { useState } from "react"
import BookEdit from "./BookEdit"

function BookShow({book, onDelete, onEdit}) {


  const handleClickDelete = () =>{
    onDelete(book.id)
  }

  const [showEdit,setShowEdit] = useState(false)
  
  const handleShowEdit = () => {
    setShowEdit(
      (previous) => !previous
    )
  }

  return (
    <>
    <div className="border border-black w-96 my-20 mx-5 flex flex-col items-center justify-center">
      <div className="flex flex-row justify-end">
      <button onClick={handleShowEdit} className="border border-black">edit</button>
      <button onClick={handleClickDelete} className="border border-black"> X </button>
      </div>
      <h1>{showEdit ? <BookEdit titleBook={book.title} onEdit={onEdit}/> : book.title}</h1>
    </div>
    </>
  )
}

export default BookShow