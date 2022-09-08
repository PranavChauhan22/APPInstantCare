import React,{useState} from 'react'
import "./Home.css"
import imgdoc from "../components/images/doc_img_home.jpg"
import Carousel from './carousel/Carousel'
import logo from "../components/images/rbglogo.png"
import Lottie from "lottie-react";
import homeanime from "./animes/94903-health.json";
import Main from './Main'
function Home() {
  const [screen, setscreen] = useState(false)
  if(screen){
    return <Main/>
  }
  return (
    <div className='home'>
        <img src={logo} className="home_logo"/>
        <Lottie animationData={homeanime} loop={true} className="homeanime"/>
        <div className='home_head1'>
            Welcome to
        </div>
        <div className='home_head2'>
            InstantCare
        </div>
        <div className='home_head3'>
        Let's heal from the BEST
        </div>
        <Carousel/>
        <div className='btn_wrap'>

        <div className='home_btn' onClick={()=>setscreen(true)}>
            Get Started
        </div>
        </div>


    </div>
  )
}

export default Home