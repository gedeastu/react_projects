import React,{useState} from 'react'

function ImageList({ images }) {
    const [selectedName, setSelectedName] = useState('');
   
    const handleClick = (name) => {
      setSelectedName(name);
    };
  
    const renderedImages = images.map((image, index) => {
      // The editor might say there is a syntax error with the next line.  
      // There is no error!
      return (
        <img key={image.id} src={image.src} />
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