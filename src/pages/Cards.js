import React from "react";
import img from "../components/images/madison.jpeg";
import "./Cards.css";
import article1 from "../components/images/articles/article1.webp"
import article2 from "../components/images/articles/article2.webp"
import article3 from "../components/images/articles/article3.webp"
function Cards(props) {
  let reqimg;
  if(props.keydata.id===1){
    reqimg=article1
  }
  else if(props.keydata.id===2){
    reqimg=article2
  }
  else if(props.keydata.id===3){
    reqimg=article3
  }
  return (
    <div className="card">
      <img src={reqimg} className="card_img" />
      <div className="card_head">{props.keydata.head}</div>
      <div className="card_body">Read here</div>
    </div>
  );
}

export default Cards;
