import React from 'react'
import style from './index.module.less'
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import defaultJSON from './Futian.json'
import layer from './class/layer.js'

import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';

import ListView from './components/ListView'
import DialogView from './components/DialogView'

mapboxgl.workerClass = MapboxWorker;

class BuildingLoader extends React.Component {
  constructor() {
    super();
    this.state = {
        map: ()=>({}),
        layers: [],
        currentLayer: null,
        isDialog: false,
        nextIndex: 0
    };
  }

  componentDidMount() {
    //添加默认图层
    const layers = this.state.layers
    const nextIndex = this.state.nextIndex
    const defaultLayer = new layer(nextIndex, 'Futian Center Area','geojson', defaultJSON,'#ffffff','0.8','')
    layers.push(defaultLayer)
    this.setState({layers:layers, nextIndex: nextIndex+1})
    //初始化底图
    mapboxgl.accessToken = 'pk.eyJ1IjoiemhhbmdqaW5neXVhbiIsImEiOiJja2R5cHhoNXYycGVtMnlteXkwZGViZDc2In0.UhckH-74AgPwMsDhPjparQ';
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    //  style: 'mapbox://styles/mapbox/streets-v11',
    //  style: 'mapbox://styles/mapbox/navigation-preview-day-v2',
    style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
    center: [114.0547, 22.5425],
    zoom: 14,
    pitch: 60,
    bearing: 30,
    scrollZoom: true,
    });

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');
    map.on('load', function () {
        map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 20
        });
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 2.0 });
        map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
        'sky-type': 'atmosphere',
        'sky-atmosphere-sun': [0.0, 0.0],
        'sky-atmosphere-sun-intensity': 15
        }
        });
    });

    this.setState({map: map});

    alert('正在建设中！')
  }

  componentDidUpdate() {
  }

  removeLayer(layer) {
    const targetIndex = layer.index
    const layers = this.state.layers
    const newLayers = []
    layers.forEach((listLayer)=>{
      if(listLayer.index != targetIndex){
        newLayers.push(listLayer)
      }
    })
    this.setState({layers: newLayers})
  }

  addLayer(name, source, color, opacity, heightField){
    const layers = this.state.layers
    const nextIndex = this.state.nextIndex
    const newLayer = new layer(nextIndex, name, 'geojson', source, color, opacity, heightField)
    layers.push(newLayer)
    this.setState({layers:layers, nextIndex: nextIndex+1})
  }

  changeLayer(index, name, color, opacity, heightField){
    const newLayers = []
    const layers = this.state.layers
    layers.forEach((layer)=>{
      if(layer.index == index){
        const newLayer = layer
        newLayer.name = name
        newLayer.color = color
        newLayer.opacity = opacity
        newLayer.heightField = heightField
        newLayers.push(newLayer)
      }else{
        newLayers.push(layer)
      }
    })
    this.setState({layers: newLayers})
  }


  render() {
    return (
        <div style={{position:'absolute',width:'100vw',height:'100vh'}}>
            <div className={style.banner}>
                <h1 className={style.title}>A Web-based 3D Building Loader</h1>
                <Button disableElevation variant="contained" color="primary"
                style={{position:'absolute',right:'50px',top:'2vh',height:'5vh'}}
                >Export</Button>
            </div>
            <div
            style={{width:'100%',height:'90%',backgroundColor:'aqua',position:'absolute', top:'10%'}} 
            ref={el => this.mapContainer = el}>
            </div>
            <div className={style.toolWindow}>
              <h3 style={{fontWeight:'400'}} >DATA</h3>
              <div className={style.listContainer}>
                <ListView 
                  layers={this.state.layers} 
                  reloadLayers={()=>{this.setState({layers: this.state.layers})}}
                  removeLayer={(layer)=>{this.removeLayer(layer)}}
                  updateLayer={(layer)=>{this.setState({currentLayer:layer},()=>{this.setState({isDialog:true})})}}/>
                <Button disableElevation variant="contained"
                  startIcon={<AddBoxIcon />}
                  onClick={()=>{this.setState({currentLayer:null},()=>{this.setState({isDialog:true})})}}
                  >Add Layer</Button>
              </div>
            </div>
            <DialogView
            isDialog={this.state.isDialog}
            currentLayer={this.state.currentLayer}
            changeLayer={(...args)=>{this.changeLayer(...args)}}
            addLayer={(...args)=>{this.addLayer(...args)}}
            handleClose={()=>{this.setState({currentLayer: null, isDialog: false})}} 
            />
        </div>
    );
  }
}

export default BuildingLoader;