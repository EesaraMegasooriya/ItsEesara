import React from 'react'
import Myimg from '../assets/me.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Home() {
    const [text] = useTypewriter({
        words: ['a Youtuber', 'a Developer', 'a Designer', 'a Content Creator', 'an Undergraduate'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
      });
      


  return (
    <div className=''>

        <div className='pl-36 mt-20 flex xl:text-6xl font-bold text-white sm:text-5xl'>Hello,  It's Eesara...</div> 
        <div className=' pl-36 px-9 mt-9 mb-28 sm:mb-24 xl:text-5xl font-bold text-white sm:text-4xl '>
        I'm {' '}
              <span style={{ fontWeight: 'bold', color: '#0091ff' }}>{text}</span>
              <span style={{ color: 'red' }}><Cursor cursorStyle='|' /></span>
        </div>
        <div className='xl:flex-row flex justify-between xl:px-36 xl:gap-28 sm:gap-16 sm:flex-col sm:items-center sm:px-7'>
            <img src={Myimg} alt="Myimg" className='xl:w-80 sm:w-64 rounded-full'/>
            <div className='sm:px-6 sm:text-center text-white text-2xl'>I'm Eesara Megasooriya, a dedicated <b>full stack developer</b> from Sri Lanka and an undergraduate at SLIIT, specializing in Web Development with a focus on React Js. Alongside coding, I have experience in video editing and have completed various projects in this field. Feel free to reach out for class videos, YouTube content, or any other video editing needs! I thrive in environments where I can apply my skills and keep learning.<div className='mt-9'> 
<a href='https://drive.google.com/file/d/1_eJhd5cYey9VQBFuFoGV_uODt04VVAlk/view?usp=share_link'><button
  class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
>
  <span class="text-lg">Download CV</span>
  <div
    class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
  >
    <div class="relative h-full w-10 bg-white/20"></div>
  </div>
</button></a>
</div> </div>
        </div>
        <hl className='mt-20 xl:px-36 sm:px-7 text-white'/>
        <div className='font-poppins font-bold text-center xl:pt-32 sm:pt-20 xl:text-4xl sm:text-3xl text-white'>Connect With Me</div>
        <div className='flex justify-center gap-10 mt-12 '>
            <a href='https://www.linkedin.com/in/eesara-megasooriya/' target='_blank' rel='noreferrer'>
            <i className='bx bxl-linkedin text-6xl text-white hover:text-blue-400'></i></a>
            <a href='https://github.com/EesaraMegasooriya' target='_blank' rel='noreferrer'>
            <i className='bx bxl-github text-6xl text-white hover:text-blue-400'></i></a>
            <a href='https://www.facebook.com/eesaramegasooriya/' target='_blank' rel='noreferrer'>
            <i className='bx bxl-facebook text-6xl text-white hover:text-blue-400'></i></a>
            <a href='https://www.instagram.com/_eesara_/' target='_blank' rel='noreferrer'>
                <i className='bx bxl-instagram text-6xl text-white hover:text-blue-400'></i>
            </a>
        </div>
        

    </div>
  )
}

export default Home