import React,{useState} from 'react'

function BookCreate({ onCreateBook }) {

  const [title,setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    
    onCreateBook(title)

    if (title.trim() !== '') {
      setTitle('')
    }
  }

  const handleChange = (event) => {
    setTitle(
        (previous) => previous = event.target.value
    )
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='mx-5 gap-5 flex flex-row'>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} type="text" onChange={handleChange} className='border border-black'/>
        <button disabled={title.trim() === ''}>Create</button>
    </form>
    </>
  )

}

export default BookCreate