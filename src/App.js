import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import Crew from "./routes/Crew";
import Board from "./routes/Board";
import Navigator from './component/Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(){
  return(
    <HashRouter>
      <Navigator/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/crew" component={Crew}/>
      <Route path="/board" component={Board}/>
    </HashRouter>
  )
}

export default App;
