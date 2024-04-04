import './App.css'
import ImageList from './components/imageList';

const images = [
  {id: 'a', name: 'Leaf', src: 'https://picsum.photos/seed/abd/200/300' },
  {id: 'b', name: 'House', src: 'https://picsum.photos/seed/gqk/200/300' },
  {id: 'c', name: 'Tree', src: 'https://picsum.photos/seed/ias/200/300' },
];
function App() {
  return (
    <>
      <ImageList images={images}/>
    </>
  )
}

export default App
