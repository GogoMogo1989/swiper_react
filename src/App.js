import './App.css'
import SwiperContainer from './components/Swiper';
import {useState, useEffect} from "react"

import "swiper/css/bundle";
import "./index.css";


function App() {

  const [img, setImg] = useState(null)

  useEffect(() => {
      fetch('./components/img.json')
         .then(res =>{
             return res.json()
         })
         .then(data =>{
             console.log(data)
             setImg(data)
         })
  }, []) 

  return (
    <div>
     { img && <SwiperContainer img={img}/> }
    </div>
  );
}

export default App;
