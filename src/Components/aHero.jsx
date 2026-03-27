
import video from '../Assets/home-1.mp4'

const aHero = () => {
  return (
    <div>
    
        <video autoPlay loop muted className='top-0 left-0 w-full h-full object-cover opacity-80'>
          <source src={video} type="video/mp4" />Your browser does not support the video tag.</video>


    </div>
  )
}

export default aHero