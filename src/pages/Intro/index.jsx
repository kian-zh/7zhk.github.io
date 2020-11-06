import React from 'react'
import NodeChart from './components/nodeChart' 
import './index.css'
import pic_me from './me.png'
import pic_linkedin from './linkedin.png'
import pic_github from './github.png'
import pic_zhihu from './zhihu.png'
import pic_csdn from './csdn.png'
import mapboxgl from 'mapbox-gl';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: [
        { center: {lng: 118.35564770648534, lat: 34.3628044306963}, zoom: 13 },
        { center: {lng: 118.78499064620274, lat: 34.129301470101524}, zoom: 16 },
        { center: {lng: 118.9545245567819, lat: 32.11425436214563}, zoom: 14 },
        { center: {lng: 114.21065841012057, lat: 22.41858902417195}, zoom: 10 },
      ],
      text: [
        'Born in 1998, he spent his childhood in Xinyi, a small town in northern China.',
        'From 2013 to 2016, he studied at ShuYang High School.',
        'He came to Nanjing University in 2016 and received a bachelor`s degree in Geographic Information Science in 2020.',
        'He will continue his studies at The Chinese University of Hongkong in 2020-2021.'
      ],
      map: ()=>({}),
      popup: ()=>({}),
    };
  }

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiemhhbmdqaW5neXVhbiIsImEiOiJja2R5cHhoNXYycGVtMnlteXkwZGViZDc2In0.UhckH-74AgPwMsDhPjparQ';
    
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    //  style: 'mapbox://styles/mapbox/streets-v11',
    //  style: 'mapbox://styles/mapbox/navigation-preview-day-v2',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [110, 30],
    zoom: 4,
    scrollZoom: false,
    });

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');
    const marker = [];
    for(let j = 0; j < this.state.point.length; j++) {
      const item = this.state.point[j].center;
      marker[j] = new mapboxgl.Marker()
      .setLngLat([item.lng, item.lat])
      .addTo(map);
    }

    this.setState({map: map});
  }

  clickTime(index){
      if(!(this.state.popup.length===0))
      { this.state.popup.remove(); }
      this.state.map.flyTo(this.state.point[index]);

      const popup = new mapboxgl.Popup({offset: 50, closeButton: false, className: `popup`})
        .setLngLat(this.state.point[index].center)
        .setHTML(this.state.text[index])
        .setMaxWidth("400px")
        .addTo(this.state.map);

      this.setState({popup:popup});
  }

  render() { 
    return (
      <div className="body">
        <div style={{backgroundColor:'teal', position:'fixed',top:'0px',left:'0px',right:'0px',bottom:'0px',zIndex:'-99'}}>
        </div>

        <div className="page1">
          <img className="myPic" alt='My Picture' src={pic_me} /><br/>
          <h1 style={{ lineHeight:'10vh'}}>Jingyuan Zhang <span style={{whiteSpace:'nowrap'}}>张景源</span></h1>
          <h2>Front-End Developer & <span style={{whiteSpace:'nowrap'}}>GIS Developer</span></h2>
          <h2>Now working in <span style={{whiteSpace:'nowrap'}}>SF-Tech 顺丰科技</span> for Better User Interface</h2>
          <img className="imgToClick" alt='Pictrue of Linkedin' src={pic_linkedin} onClick={()=>{window.open("https://www.linkedin.com/in/zhang1998/")}} />
          <img className="imgToClick" alt='Pictrue of Zhihu' src={pic_zhihu} onClick={()=>{window.open("https://www.zhihu.com/people/sgis")}} />
          <img className="imgToClick" alt='Pictrue of CSDN' src={pic_csdn} onClick={()=>{window.open("https://blog.csdn.net/nju_zjy")}} />
          <img className="imgToClick" alt='Pictrue of Github' src={pic_github} onClick={()=>{window.open("https://github.com/7zhk")}} />
        </div>


        <div className="page3">
          <div className="page3Content">
            <h2 style={{color: '#fff'}}>Biography</h2>
            <p>
            Jingyuan Zhang received the BSc degree in GIS from Nanjing Univeristy, China, in 2020.
            He is currently a graduate student at The Chinese Univeristy of Hongkong, China.
            </p>
            <p>
            He has research experience in remote sensing image processing, spatial analysis, etc. 
            But now his interests are mainly concentrated in Web graphics, human-computer interaction, and spatial data visualization.
            </p>
            <p>
            Also, he has extensive experience in front-end development and GIS development. 
            He used to work as an intern at Jiangsu Urban Design and Planning Research Institute, Esri China, and SF-Tech.
            </p>
            <br/>
            <a href='./cv.pdf'>Full-text Curriculum Vitae</a>
            <br/>
            <a href='mailto:kianzh@outlook.com'>Mail him:</a> kianzh@outlook.com
            <br/>
            <br/>
          </div> 
        </div>


        <div className="page2">
          <div className="mapCover">
            <span className="mpaCoverTitle">TimeLine</span><br/>
            <span className="itemToClick" onClick={()=>this.clickTime(0)}>1998-2013</span><br/>
            <span className="itemToClick"  onClick={()=>this.clickTime(1)}>2013-2016</span><br/>
            <span className="itemToClick"  onClick={()=>this.clickTime(2)}>2016-2020</span><br/>
            <span className="itemToClick"  onClick={()=>this.clickTime(3)}>2020-2021</span><br/>
          </div>
          <div ref={el => this.mapContainer = el} className="mapContainer" />
        </div>


        <div className="page4">
          <div className="page4Content">
            <NodeChart>
            </NodeChart>
          </div>
        </div>

      </div>
    );
  }
}

export default Intro;