import React, { Component } from 'react';
import ManagerLecContainer from '../container/ManagerLecContainer';
import Home from '../../layout/Home';

class ManagerLecPage extends Component {
  render() {
    const user = window.localStorage.getItem("is_admin");
    if (user==="true") {
      return (
        <div>
          <ManagerLecContainer />
        </div>
      );
    }    
    else{
      window.alert("권한이없습니다!")
      return (
        <div>
          <Home />
        </div>
      )
    }
  }
}

export default ManagerLecPage;