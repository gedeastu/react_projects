import React from 'react'
import classNames from 'classnames'
import useNavigationContext from '../hooks/use-navigation-context'
import { twMerge } from 'tailwind-merge'

function Link({to,children,classVisited,...props}) {
  const {navigate,currentPath} = useNavigationContext()
  const classes = twMerge(classNames(
    props.className,`text-blue-500 ${currentPath === to && classVisited}`,{}
  ))
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault()
    navigate(to)
  }
  return (
    <>
    <a href={to} {...props} onClick={handleClick} className={classes}>
        {children}
    </a>
    </>
  )
}

export default Link