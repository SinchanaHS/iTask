import React,{useEffect,useState} from 'react'
import './Videos.css'

function Videos({video1,video2,number}) {

    const [videos,setVideos] = useState([]);
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);
    

    useEffect(() =>{
        const videos = [];
        setVideos(videos)
        if(number > 1) {
            var area = (window.innerWidth)*(window.innerHeight);
        var eachImgArea = area/number;
        var imgWidth = Math.sqrt(eachImgArea);
        var videosInRow = Math.floor(window.innerWidth/imgWidth);
        var videosInCol = Math.ceil(number/videosInRow);
        var widthOfImage = ((window.innerWidth-20)/videosInRow)+'px';
        var heightOfImage = (window.innerHeight/videosInCol)+'px'
        
        setWidth(widthOfImage);
        setHeight(heightOfImage)

        }
            
        for(var i=0;i<number;i++){
            videos.push(video1)
            i++
            if(i<number){
                videos.push(video2)
            }

        }
        setVideos(videos);
    },[number])
    return (
        <div className='Vid__style'>
        {videos.map(videos => {

        

         return(<img 
         width={width}
         height={height}

       
      src={videos}
      alt="new"
      />)  
        
        })}
    </div> 
    );
   
}

export default Videos;