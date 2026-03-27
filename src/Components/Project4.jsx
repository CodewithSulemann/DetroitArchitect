import Worktopimg from '../Components/worktopimg'
import Slider from '../Components/Slider4'
import img1 from '../Assets/p/p4/1.jpg'
import img2 from '../Assets/p/p4/2.png'
import img3 from '../Assets/p/p4/3.jpg'
import img4 from '../Assets/p/p4/4.jpg'

const Project1 = () => {
  return (
    <div className='bg-gray-300'>
      <Worktopimg img1={img1} />
      <div className='container w-full px-6 py-18 text-center TEXT-BOLDER text-pink-600 '>
        <h1 className='text-5xl text-bold font-[Cormorant Garamond]'>Project 04</h1>
      </div>
      <Slider img2={img2} img3={img3} img4={img4} />
    </div>
  )
}

export default Project1
