import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFooter,
} from "@ionic/react";
import logo from "../components/images/rbglogo.png";
import "./Main.css";
import abt from "../components/images/aboutus.svg";
import Car from "./carousel/Car";
import Cards from "./Cards";
import Slides from "./Slides";
import Carousel from "./carousel/Carousel";
import FAQ from "./FAQ";
import data from "./data.js"
import Art from "./Art";
function Main() {
  const [searchText, setSearchText] = useState("");
  const [pushscreen, setpushscreen] = useState(0)
  if(pushscreen!==0){
    return <Art keyid={pushscreen}/>
  }
  return (
    <IonPage>
      <IonContent className="main_con">
        <img src={logo} className="home_logo" />
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value)}
          placeholder="Search"
        ></IonSearchbar>
        <div className="gmh">Good Morning 👋🏻,</div>
        <div className="gmb">How are you?</div>

        <Car />
        <div className="abt_con mainbg">
          <div className="abt_content">
            <div className="abt_head">About Us</div>
            <div className="abt_body">
              A young company that attempts to not just decrease as well as
              thoroughly take out and mangle MENTAL HEALTH.
            </div>
          </div>
          <img src={abt} className="abt_img" />
        </div>
        <div className="article_head">Articles</div>
        <div className="card_wrap">
          {
            data.map(e=>{
              return <div onClick={()=>setpushscreen(e.id)}><Cards keydata={e}/></div>
            })
          }
        </div>
        <div className="faq">FAQ's</div>
        <FAQ/>
        <Carousel/>
        <Slides/>
        
      </IonContent>
    </IonPage>
  );
}

export default Main;
