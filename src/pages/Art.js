import React,{useState} from "react";
import img from "../components/images/madison.jpeg";
import "./Art.css";
import data from "./data"
import article1 from "../components/images/articles/article1.webp"
import article2 from "../components/images/articles/article2.webp"
import article3 from "../components/images/articles/article3.webp"
import logo from "../components/images/whitelogo.png"
import {IoIosArrowForward} from 'react-icons/io'
import Main from "./Main";
function Art(props) {
  const [change, setchange] = useState(false)
  if(change){
    return <Main/>
  }
  let reqimg;
  if(props.keyid===1){
    reqimg=article1;
  }
  else if(props.keyid===2){
    reqimg=article2;
  }
  else if(props.keyid===3){
    reqimg=article3;
  }
  console.log(data[props.keyid])
  return (
    <div className="art">
      <IoIosArrowForward className="backicon" onClick={()=>setchange(true)}/>
      <img src={logo} className="logomain"/>
      <div className="crd_bo">

      <img src={reqimg} className="art_img" />
      <div className="art_head">{data[props.keyid].head}</div>
      <div className="art_body">
      {data[props.keyid].body}
      </div>
      </div>
    </div>
  );
}

export default Art;
