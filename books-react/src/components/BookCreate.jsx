import React,{useState} from 'react'

function BookCreate({createBook}) {
  const [title,setTitle] = useState('');
  const handleChange = () => {
    setTitle(
        (prev) => prev
    )
  }
  return (
    <input value={title} type="text" onChange={handleChange}/>
  )
}

export default BookCreate