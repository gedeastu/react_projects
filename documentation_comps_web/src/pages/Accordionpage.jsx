import React from 'react'
import Accordion from '../components/Accordion';
function Accordionpage() {
    const items = [
      {
        id: 1,
        label: 'Can I use React on a project?',
        content:
          'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
      },
      {
        id: 2,
        label: 'Can I use Javascript on a project?',
        content:
          'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
      },
      {
        id: 3,
        label: 'Can I use CSS on a project?',
        content:
          'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
      },
    ];
  
    return (
      <>
      <div className='h-[80vh]'>
      <Accordion items={items}/>
      </div>
      {/* <Homepage/> */}
      </>
    )
  }

export default Accordionpage