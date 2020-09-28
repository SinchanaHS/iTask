import React,{useEffect,useState} from 'react'
import './Videos.css'

// function nearestSq(n){
//     let i,j;
//     for(i=j=n;Math.sqrt(i)%1!=0&&Math.sqrt(j)%1!=0;i++,j--);
//       return Math.sqrt(i)%1==0?i:j
//     }
//     console.log(nearestSq(21));

function Videos({video1,video2,number}) {

   
   
    const [display,setDisplay] = useState(false);
    const [videos,setVideos] = useState([]);
    const [width,setWidth] = useState("100%");
    const [height,setHeight] = useState("100%");
    const imgEl = React.useRef(null);

    useEffect(() =>{
        const videos = [];
        setVideos(videos)
        var area = (window.innerWidth)*(window.innerHeight);
        var eachImgArea = area/number;
        var imgWidth = eachImgArea/2;
        var width=window.innerWidth/number+'px';
        var height=(window.innerHeight)+'px';
        if(width<window.innerHeight){
            height=(window.innerHeight/(number/2))+'px';
        }

        console.log("width",width);
        console.log("height",height);
        // var wid = (100)/(number);
        var widthh = `${imgWidth}px`
        console.log("innerw",window.innerWidth)
        console.log("innerh",window.innerHeight)
        

        console.log("area",area);
        console.log("eachImgArea",eachImgArea);
        console.log("imgWidth",imgWidth);
        
       

    
        console.log("widthh",widthh);
        // console.log("wid",wid);
        setWidth(width);
        setHeight(height)
        console.log(width)
        for(var i=0;i<number;i++){
            videos.push(video1)
            i++
            if(i<number){
                videos.push(video2)
            }

        }
        setVideos(videos);
        console.log("what inside",number)

        // if(counter<=number){
        //     console.log("Insidecounter")
        //     counter%2 == 0 ? videos.push(video1) : videos.push(video2) 
        // }
        // if(counter==number){
        //     setDisplay(true);
        // }
        // setCounter(counter+1)
        setDisplay(true);
        console.log("videos",videos);
    },[number])
    console.log("inbetween",videos)
    return (
        console.log("insidereturn",videos),
        <div className='Vid__style'>
        {videos.map(videos => {

        

         return(<img 
         width={width}
         height={height}

        //  ref={imgEl}
        //  onLoad={() => console.log("imgsize",imgEl.current.naturalHeight) }
         
    
      src={videos}
      alt="new"
      />)  
        
        })}
    </div> 
    );
   
}

export default Videos;
