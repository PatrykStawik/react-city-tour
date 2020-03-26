import React, {Component} from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from './components/NavBar/NavBar';
import TourList from './components/TourList/TourList';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <NavBar/>
        <TourList/>
      </>
     );
  }
}
 
export default App;
