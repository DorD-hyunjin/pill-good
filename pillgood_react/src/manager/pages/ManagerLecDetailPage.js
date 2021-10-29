import React, { Component } from 'react';
import ManagerLecDetailContainer from '../container/ManagerLecDetailContainer';
import Home from '../../layout/Home';

class ManagerLecDetailPage extends Component {
  render() {
    const user = window.localStorage.getItem("is_admin");
    if (user==="true") {
      return (
        <div>
          <ManagerLecDetailContainer id={this.props.match.params.id} />
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

export default ManagerLecDetailPage;