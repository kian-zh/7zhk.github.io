import React from 'react'
import style from './index.module.less'
import mapboxgl from 'mapbox-gl';

class BuildingLoader extends React.Component {
  constructor() {
    super();
    this.state = {
        map: ()=>({}),
        layers: [],
    };
  }

  componentDidMount() {
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
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
        // add a sky layer that will show when the map is highly pitched
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
  }

  componentDidUpdate() {
  }

  render() {
    return (
        <div style={{position:'absolute',width:'100vw',height:'100vh'}}>
            <div className={style.banner}>
                <h1 className={style.title}>A Web-based 3D Building Loader</h1>
            </div>
            <div
            style={{width:'100%',height:'90%',backgroundColor:'aqua',position:'absolute', top:'10%'}} 
            ref={el => this.mapContainer = el}>
            </div>
        </div>
    );
  }
}

export default BuildingLoader;