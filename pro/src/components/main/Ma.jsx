import React from "react";

import "./Main.css";
import { assets } from "../../assets/assets";
import { useState } from "react"
import axios from "axios"
import  "./Forms.jsx"
import { useNavigate } from 'react-router-dom';
import "../Side/Sidebar.jsx";
import Sidebar from "../Side/Sidebar.jsx";
function Ma() {
  const navigate=useNavigate();
const handleclick = () =>{
  console.log("handleClick");
navigate('/Forms');
};

const [question,setQuestion]=useState("");
const [answer,setAnswer]=useState("");
const[showresult,setShowResult]=useState(false);
const[loader,setloader]=useState(true);
async function generateAnswer(){
const response=await
axios({
url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDc_txOLNSwCj-7oNWU0xOfubtJG8Y1OBw",
method:"post",
data:{
contents:[
{parts:[{text:question}]}
]
}

}
);
let res=response['data']['candidates'][0]['content']['parts'][0]['text'];

let resArray=(res).split("##");
console.log(resArray);

for(let i=0; i<resArray.length; i++){
  let newArr = "";
if(i===0||i%2!==1){
newArr+=resArray[i];
}
setAnswer(resArray);
if(response['data']['candidates'][0]['content']['parts'][0]['text']){
setloader(false)
}
else{
setloader(true);
}
}
}



function getres(){
generateAnswer();
setShowResult(true);
}
return (<div className="flex">
<Sidebar></Sidebar>
<div className="main" data-theme="dark">
      <div className="nav ">
        <p> JARVIS</p>
        <img src={assets.user_icon} onClick={handleclick} />
      </div>
      <div className="main-container">
{!showresult?
<>
 <div className="greet">
          <p>
            <span style={
              {
                color:"#FFD700"
              }
            }>Hello,Vivek</span>
          </p>
          {/* <span>JARVIS</span> */}
          <p>How can i help you today?</p>
          <div class="cards">
            <div class="card red">
              <p class="tip">
                Suggest beautiful places to see on an upcoming road trip{" "}
                <img src={assets.compass_icon} alt="" />
              </p>
            </div>
<div class="card blue" onClick={()=>{
setQuestion("Briefly Summarize React JS");
}}>
              <p class="tip">
Briefly Summarize React JS <img src={assets.bulb_icon} alt="" />
              </p>
            </div>
<div class="card green" onClick={()=>{
setQuestion("Improve the readability of the following code");
}}>
              <p class="tip">
                Improve the readability of the following code{" "}
<img src={assets.code_icon} alt="" />
              </p>
            </div>
            <div class="card red">
              <p class="tip">
                Suggest beautiful places to see on an upcoming road trip{" "}
                <img src={assets.compass_icon} alt="" />
              </p>
            </div>
          </div>
          </div>
          </>
:<div className="result">
<div className="result-title">
<img src={assets.user_icon} ></img>
{loader
? <div class="wrapper">
  <div class="blue ball"></div>
  <div class="red ball"></div>
  <div class="yellow ball"></div>
  <div class="green ball"></div>
</div>
:<p>{question}</p>
}
</div>
<div className="result-data">
<img src={assets.gemini_icon}></img>
<p>{answer}</p>
</div>
</div>
}
       
          <div className="main-bottom">
            <div className="search-box">
<input onChange={(e)=>setQuestion(e.target.value)} value={question}type="text" placeholder="Enter a prompt here" />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
<img onClick={()=>getres()}src={assets.send_icon} alt="" />
              </div>
            </div>
            <div className="bottom-info">
              <p>
                Gemini may display inaccurate info, including about people, so
                double-check its responses.Thank you for using Gemini.
              </p>
            </div>
          </div>
    </div>
    </div>
</div>
  );
};

export default Ma;
