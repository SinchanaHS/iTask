import React,{useState} from 'react';
import './App.css';
import Videos from './Videos'




function App() {
  const [number, setNumber] = useState(1);
  const [submit,setSubmit] = useState(1);

  function handleSubmit(){
    setSubmit(number)
    console.log("num",number)
  }
  
  return (
    <div className="App">
     
     <input type="number" min="1" max= "30" onChange={(e) => setNumber(e.target.value)}  />
     <input type="submit" value="submit" onClick={handleSubmit} />
     {console.log("number",number)}
     {console.log("submit",submit)}
     
     {submit?<Videos 
        number={submit}
        video1="http://158.58.130.148/mjpg/video.mjpg"
        video2="http://210.148.114.53/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000"

       />:null}
    
     
    </div>
  );
}

export default App;
