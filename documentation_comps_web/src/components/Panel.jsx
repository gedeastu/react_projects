import React from 'react'
import classNames from 'classnames';
import {twMerge} from 'tailwind-merge'

function Panel({children,...props}) {
  const spacingClassName = classNames('p-3')
  const styleClassName = twMerge(classNames(props.className,`border rounded shadow bg-white w-full ${spacingClassName}`,{}))
  return(
    <div {...props} className={styleClassName}>{children}</div>
  )
}

export default Panel