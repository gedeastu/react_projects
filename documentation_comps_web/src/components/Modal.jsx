import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
const Modal = ({dismissModal,buttonAction,isShow}) => {
  useEffect(() => {
    if (isShow) {
        document.body.classList.add("overflow-hidden")
    }
    return () => {
        document.body.classList.remove("overflow-hidden")
    }
  },[])
  return ReactDOM.createPortal(
        <div>
            <div onClick={dismissModal} className='fixed inset-0 bg-gray-300 opacity-80 w-full'></div>
            <div className='fixed inset-40 p-10 bg-white flex flex-col gap-10 justify-center items-center w-96 h-60 m-auto'>
            <h1>This is Modal</h1>
            {buttonAction}
            </div>
        </div>,
        document.querySelector('.modal-container')
  )
}

export default Modal