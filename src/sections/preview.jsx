import React from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { Promovideo } from '../assets';

const preview = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();
  
    const handleVideo = () => {
      setPlayVideo((prevPlayVideo) => !prevPlayVideo);
  
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    };
  
    return (
      <div className="relative w-[100%] h-[100%] object-cover">
        <video
          ref={vidRef}
          src={Promovideo}
          loop
          controls={false}
          muted
          className="w-full h-full object-cover"
        />
  
        <div className="absolute inset-0 bg-black bg-opacity-65 flex justify-center items-center">
          <div
            className="flex justify-center items-center xs:w-[100px] xs:h-[100px] w-[70px] h-[70px] rounded-full cursor-pointer border-[1px]"
            onClick={handleVideo}
          >
            {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
          </div>
        </div>
      </div>
    );
  };
  
  export default preview;
  
