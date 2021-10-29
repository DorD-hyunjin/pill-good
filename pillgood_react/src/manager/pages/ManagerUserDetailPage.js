import React, { Component } from 'react';
import ManagerUserDetailContainer from '../container/ManagerUserDetailContainer';
import Home from '../../layout/Home';

class ManagerUserDetailPage extends Component {
  render() {
    const user = window.localStorage.getItem("is_admin");
    if (user==="true") {
      return (
        <div>
          <ManagerUserDetailContainer id={this.props.match.params.id} />
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

export default ManagerUserDetailPage;