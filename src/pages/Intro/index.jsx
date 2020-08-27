import React from 'react'
//  import NodeChart from './components/nodeChart' 
import './index.css'
import pic_me from './me.png'
import pic_linkedin from './linkedin.png'
import pic_github from './github.png'
import pic_zhihu from './zhihu.png'
import pic_csdn from './csdn.png'

const Intro = () => {

  return (
    <div className="body">
      <div style={{backgroundColor:'teal', position:'fixed',top:'0px',left:'0px',right:'0px',bottom:'0px',zIndex:'-99'}}>
      </div>

      <div className="page1">
        <img className="myPic" src={pic_me} /><br/>
        <h1 style={{ lineHeight:'10vh'}}>Jingyuan (Kian) Zhang <span style={{whiteSpace:'nowrap'}}>张景源</span></h1>
        <h2>Front-End Developer & Individual Researcher in Location Intelligence<br/>
        Now working in <span style={{whiteSpace:'nowrap'}}>SF-Tech 顺丰科技</span> for Better User Interface</h2>
        <img className="imgToClick" src={pic_linkedin} onClick={()=>{window.open("https://www.linkedin.com/in/zhang1998/")}} />
        <img className="imgToClick" src={pic_zhihu} onClick={()=>{window.open("https://www.zhihu.com/people/sgis")}} />
        <img className="imgToClick" src={pic_csdn} onClick={()=>{window.open("https://blog.csdn.net/nju_zjy")}} />
        <img className="imgToClick" src={pic_github} onClick={()=>{window.open("https://github.com/7zhk")}} />
      </div>

      <div className="page2">
      </div>

      <div className="page3">
        <div className="page2Content">
          Bio
        </div>
        
      </div>
    </div>
  );
}

export default Intro;