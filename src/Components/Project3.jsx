import Worktopimg from '../Components/worktopimg'
import Slider from '../Components/Slider3'
import img1 from '../Assets/p/p3/1.jpg'
import img2 from '../Assets/p/p3/2.png'
import img3 from '../Assets/p/p3/3.png'
import img4 from '../Assets/p/p3/4.png'

const Project1 = () => {
  return (
    <div className='bg-gray-300'>
      <Worktopimg img1={img1} />
      <div className='container w-full px-6 py-18 text-center TEXT-BOLDER text-pink-600 '>
        <h1 className='text-5xl text-bold font-[Cormorant Garamond]'>Project 03</h1>
      </div>
      <Slider img2={img2} img3={img3} img4={img4} />
    </div>
  )
}

export default Project1
