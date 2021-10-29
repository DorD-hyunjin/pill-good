import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';
import ManagerLecDetailView from '../component/ManagerLecDetailView';
class ManagerLecDetailContainer extends Component {

  managerStore = ManagerStore;
  
  render() {
    const {lec, accessLec} = this.managerStore;
    return (
      <div style={{width: '25%', margin: '30px auto'}}>
        <ManagerLecDetailView lec={lec} accessLec={accessLec}/>
      </div>
    );
  }
}

export default observer(ManagerLecDetailContainer);