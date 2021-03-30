import React from 'react'
import style from './index.module.less'
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import defaultJSON from './Futian.json'
import layer from './class/layer.js'

import Button from '@material-ui/core/Button';

import ListView from './components/ListView'
import AddBoxIcon from '@material-ui/icons/AddBox';

mapboxgl.workerClass = MapboxWorker;

class BuildingLoader extends React.Component {
  constructor() {
    super();
    const that = this
    this.state = {
        map: ()=>({}),
        layers: [],
    };
  }

  componentDidMount() {

    console.log(defaultJSON)
    //添加默认图层
    const layers = this.state.layers
    const defaultLayer = new layer('Futian Center Area','geojson',defaultJSON,'#ffffff','0.8','','')
    layers.push(defaultLayer)
    this.setState({layers:layers})
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
                  removeLayer={()=>{}}
                  updateLayer={()=>{}}/>
                <Button disableElevation variant="contained"
                startIcon={<AddBoxIcon />}>Add Layer</Button>
              </div>
            </div>
        </div>
    );
  }
}

export default BuildingLoader;