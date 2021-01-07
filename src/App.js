import Nav from './component/Nav.js';
import Imagelist from './component/Imagelist';

import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {

  state = { images: [] };
  onsearchsubmit=async term => {

   const response = await axios.get('https://api.unsplash.com/search/photos/', {
     
      params:{query:term, per_page:1000},
      headers: {
        Authorization:'Client-ID PPcRnaa4Iph9awnhzGwAN4aoPoCeG_fbnyUDhh-jmac'
      }
    });
    this.setState({images:response.data.results})
  
  }
      
render(){
  return (
    <div className="App">
      <Nav onsubmit={this.onsearchsubmit} />
      <Imagelist img={this.state.images}  />
      
    </div>
  );
}};
export default App;
