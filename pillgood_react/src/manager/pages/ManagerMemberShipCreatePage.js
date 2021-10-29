import React, { Component } from 'react';
import ManagerMembershipCreateContainer from '../container/ManagerMembershipCreateContainer';
import Home from '../../layout/Home';

class ManagerMemberShipCreatePage extends Component {
  render() {
    const user = window.localStorage.getItem("is_admin");
    if (user==="true") {
      return (
        <div>
          <ManagerMembershipCreateContainer />
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

export default ManagerMemberShipCreatePage;