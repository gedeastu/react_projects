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

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false)
    onEdit(id,newTitle)
  }

  return (
    <>
    <div className="border border-black w-96 my-20 mx-5 flex flex-col items-center justify-center">
      <img src={`https://picsum.photos/seed/${book.id}/200/200`} alt="" />
      <div className="flex flex-row justify-end">
      <button onClick={handleShowEdit} className="border border-black">edit</button>
      <button onClick={handleClickDelete} className="border border-black"> X </button>
      </div>
      <h1>{showEdit ? <BookEdit titleBook={book} onSubmit={handleSubmit}/> : book.title}</h1>
    </div>
    </>
  )
}

export default BookShow