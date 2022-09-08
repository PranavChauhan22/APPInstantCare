import React from 'react'
import "./Carousel.scss"
// import "../Main.css"
import mh from "../../components/images/mh.jpeg";
import health from "../../components/images/health (1).jpeg";
import pos from "../../components/images/positivity.png";
import aff from "../../components/images/aff.webp";
function Car() {
  return (
    <div class="slider bordermod" style={{marginTop:"10px"}}>
	<div class="slide-track">
		<div class="slide aa">
			<img src={mh} className="box_white_ele"/>
		</div>
		<div class="slide aa">
			<img src={health} className="box_white_ele"/>
		</div>
		<div class="slide aa">
			<img src={pos} className="box_white_ele"/>
		</div>
		<div class="slide aa">
			<img src={aff} className="box_white_ele"/>
		</div>
		<div class="slide aa">
		<img src={mh} className="box_white_ele"/>
		</div>
		<div class="slide aa">
		<img src={health} className="box_white_ele"/>
		</div>
		
		<div class="slide aa">
		<img src={pos} className="box_white_ele"/>
		</div>
		
		<div class="slide aa">
		<img src={aff} className="box_white_ele"/>
		</div>
		<div class="slide aa">
		<img src={mh} className="box_white_ele"/>
		</div>
		<div class="slide aa">
		<img src={health} className="box_white_ele"/>
		</div>
		
		<div class="slide aa">
		<img src={pos} className="box_white_ele"/>
		</div>
		
		<div class="slide aa">
		<img src={aff} className="box_white_ele"/>
		</div>
		<div class="slide aa">
		<img src={mh} className="box_white_ele"/>
		</div>
		<div class="slide aa">
		<img src={health} className="box_white_ele"/>
		</div>
		
		<div class="slide aa">
		<img src={pos} className="box_white_ele"/>
		</div>
		
		<div class="slide aa">
		<img src={aff} className="box_white_ele"/>
		</div>
		
		
	</div>
</div>
  )
}

export default Car