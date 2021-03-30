class layer{
    constructor(name, type, data, color, opacity, heightField){
        this.name = name
        this.type = type  //geojson 
        this.state = true // true or false
        this.data = data
        this.color = color
        this.opacity = opacity
        this.heightField = heightField
    }
    switchState(){
        this.state = !this.state;
    }
    setStyle(color, opacity, heightField){
        this.color = color
        this.opacity = opacity
        this.heightField = heightField
    }
}

export default layer