import React, { Component } from 'react';
import Homepage from '../components/HomePage';
import Login from '../components/Login/login';
import BoardHeaderClick from '../components/Board/header/boardHeaderClick';
import BoardBG from '../components/Board/boardBG/boardBG';
import '../assets/style/app.less'

import BoardHeader from '../components/Board/header/boardHeader';
import SubHeader from '../components/Board/subHeader/subHeader';

class App extends Component {
  render() {
    return (
      <div className="fullbody">
        {/* <Homepage/>
        <Login/> */}
        {/* <BoardHeaderClick/> */}
        <BoardHeader/>
        <SubHeader/>
        <BoardBG/>
      </div>
    );
  }
}

export default App;
