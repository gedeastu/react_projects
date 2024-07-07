import React,{useState} from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'
const Modalpage = () => {
  const [showModal,setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(true)
  }
  const handleDismiss = () => {
    setShowModal(false)
  }
  const buttonAction = (
    <Button onClick={handleDismiss} primary>
        Okay
    </Button>
  )
  return (
    <div className='flex h-[80vh] flex-col justify-center items-center relative'>
        <Button onClick={handleClick} rounded primary outline>
            Show Modal
        </Button>
        {
            showModal && <Modal dismissModal={handleDismiss} buttonAction={buttonAction} isShow={showModal}/>
        }
    </div>
  )
}

export default Modalpage