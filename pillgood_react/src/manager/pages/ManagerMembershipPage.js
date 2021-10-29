import React, { Component } from 'react';
import ManagerMembershipContainer from '../container/ManagerMembershipContainer';
import Home from '../../layout/Home';

class ManagerMembershipPage extends Component {
  render() {
    const user = window.localStorage.getItem("is_admin");
    if (user==="true") {
      return (
        <div>
          <ManagerMembershipContainer/>
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

export default ManagerMembershipPage;