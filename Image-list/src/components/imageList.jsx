import React,{useState} from 'react'

function ImageList({ images }) {
    const [selectedName, setSelectedName] = useState('');
   
    const handleClick = (name) => {
      setSelectedName((previous)=>{
        if(previous === name ){
            return ''
          }else{
            return name
          }})
      }
  
    const renderedImages = images.map((image, index) => {
      // The editor might say there is a syntax error with the next line.  
      // There is no error!

      const isClicked = selectedName === image.name
      return (
        <div key={image.id} onClick={()=>handleClick(image.name)}>
            <img src={image.src}/>
            {isClicked && <h1>{image.name}</h1>}
        </div>
      );
    });
  
    return (
      <div>
        <h1>Image name: {selectedName}</h1>
        <div>
          {renderedImages}
        </div>
      </div>
    );

  }

export default ImageList