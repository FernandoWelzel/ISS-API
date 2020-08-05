import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      latitude: 50,
      longitude: 50
    }
  }

  getCoor = async function() {
    const response =  await fetch('http://api.open-notify.org/iss-now.json');
    const data = await response.json();
    console.log(data.iss_position)
    return data.iss_position;
  };

  setCoor = async function() {
    const coords = await this.getCoor();
    const { latitude, longitude } = coords;
    const per_latitude = (latitude/180)*50 + 50;
    const per_longitude = (longitude/180)*50 + 50;
    this.setState({ latitude:per_latitude, longitude:per_longitude });
    console.log(this.state)
  }

  render() {
    // this.setCoor();
    return (
    <div className="App">
      <div className='ISS' style={{top:(this.state.latitude + 'vh'), left:(this.state.longitude + 'vw')}}></div>
    </div>
    );
  }
}

export default App;
