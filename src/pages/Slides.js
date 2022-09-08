import React from "react";
import { IonSlides, IonSlide, IonContent } from "@ionic/react";
import ib1 from "../components/images/ib1 (1).jpeg";
import ib2 from "../components/images/ib2 (1).jpeg";
import ib3 from "../components/images/ib3.jpeg";
import ib4 from "../components/images/ib4.png";
import "./Slides.css";
// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

function Slides() {
  return (
    <IonContent class="aab">
      <IonSlides>
        <IonSlide className="content_ion">
          <div className="slide_div">
            <img src={ib1} className="slide_img" style={{ height: "200px" }} />
            <div className="slide_hd1">Mental health</div>
            <div className="slide_bd">
              We provide high class facilities to resolve the issue of mental health
            </div>
          </div>
        </IonSlide>
        <IonSlide className="content_ion">
        <div className="slide_div">
            <img src={ib2} className="slide_img" style={{ height: "200px" }} />
            <div className="slide_hd1">Health</div>
            <div className="slide_bd">
              We brings to you amazing doctors to cure event minute issue of your health
            </div>
          </div>
        </IonSlide>
        <IonSlide className="content_ion">
        <div className="slide_div">
            <img src={ib4} className="slide_img" style={{ height: "200px" }} />
            <div className="slide_hd1">Affordable</div>
            <div className="slide_bd">
              We provide the best facilities and services at the lowest rate
            </div>
          </div>
        </IonSlide>
        <IonSlide className="content_ion">
        <div className="slide_div">
            <img src={ib3} className="slide_img" style={{ height: "200px" }} />
            <div className="slide_hd1">Positivity</div>
            <div className="slide_bd">
              We spread positivity via our sessions and articles
            </div>
          </div>
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
}

export default Slides;
