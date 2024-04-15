import React from 'react'
import useNavigationContext from '../hooks/use-navigation-context'

function Link({to,children}) {
  const {navigate} = useNavigationContext()
  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
  }
  return (
    <>
    <a href={to} onClick={handleClick}>
        {children}
    </a>
    </>
  )
}

export default Link