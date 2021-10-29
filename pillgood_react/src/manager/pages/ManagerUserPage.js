import React, { Component } from 'react';
import Home from '../../layout/Home';
import ManagerUserContainer from '../container/ManagerUserContainer'


class ManagerUserPage extends Component {
  render() {
    const user = window.localStorage.getItem("is_admin");
    if (user==="true") {
      return (
        <div>
          <ManagerUserContainer />
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

export default ManagerUserPage;