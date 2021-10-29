import React, { Component } from 'react';
import ManagerLecUpdateContainer from '../container/ManagerLecUpdateContainer';
import Home from '../../layout/Home';

class ManagerLecUpdatePage extends Component {
  render() {
    const user = window.localStorage.getItem("is_admin");
    if (user==="true") {
      return (
        <div>
          <ManagerLecUpdateContainer id={this.props.match.params.id}/>
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

export default ManagerLecUpdatePage;