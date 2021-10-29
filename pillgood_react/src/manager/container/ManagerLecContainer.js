import React, { Component } from 'react';
import ManagerLecView from '../component/ManagerLecView';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ManagerLecDetailContainer from './ManagerLecDetailContainer';

class ManagerLecContainer extends Component {
  managerStore = ManagerStore;

  state = {
    open: false
  };

  handleOpen = (lecId) => {
    this.managerStore.selectLec(lecId);
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.managerStore.selectLecAll();
  }

  render() {
    const columns = [
      { field: 'title', headerName: '강의명', width: 200,
            renderCell: (cellValues) => {
          return (
            <div>
          <Button onClick={()=>this.handleOpen(cellValues.row.id)} >{cellValues.row.title}</Button>
          </div>
          );
        }} ,
      { field: 'name', headerName: '강사명', width: 120 },
      
      { field: 'date', headerName: '날짜', width: 120 },
      { field: 'time', headerName: '시간', width: 120 },
      { field: 'room', headerName: '장소', width: 120 },
      { field: 'access', headerName: '신청', width: 120 },
    ];
    const { lecs, lecFilter, changeLecFilter } = this.managerStore;
    const rows = [];
    lecs.forEach((lec) => {
      if (lecFilter === '1') {
        if (lec.status === 2) return;
        if (lec.status === 3) return;
        rows.push(
          { id: lec.lec_id, email:lec.email.email, name:lec.email.name, title:lec.title, date:lec.date,
            time: lec.time, room:lec.room, access:(lec.status?"대기":"") }
        );
      }
      else if (lecFilter === '2') {
        if (lec.status === 1) return;
        if (lec.status === 3) return;
        rows.push(
          { id: lec.lec_id, email:lec.email.email, name:lec.email.name, title:lec.title, date:lec.date,
            time:lec.time, room:lec.room, access:(lec.status?"승인":"") }
        );
      }
      else if (lecFilter === '3') {
        if (lec.status === 1) return;
        if (lec.status === 2) return;
        rows.push(
          { id: lec.lec_id, email:lec.email.email, name:lec.email.name, title:lec.title, date:lec.date,
            time:lec.time, room:lec.room, access:(lec.status?"거부":"") }
        );
      }
      else {
        rows.push(
          { id: lec.lec_id, email:lec.email.email, name:lec.email.name, title:lec.title, date:lec.date,
            time:lec.time, room:lec.room, 
            access:(lec.status === 1 ? "대기": lec.status === 2 ? "승인": lec.status === 3 ? "거부" : "")}
        );
      }
    });

    return (
      <div style={{width: '90%', margin: '30px auto'}}>
        <h2 style={{textAlign:'center', color:'#D5BA8C'}} >강의관리</h2>
        <Box>
          <FormControl >
            <NativeSelect
              defaultValue={0}
              onChange={(e) => changeLecFilter(e.target.value)}
              inputProps={{
                name: 'status',
                id: 'status',
              }}
            >
              <option value={0}>전체</option>
              <option value={1}>대기</option>
              <option value={2}>승인</option>
              <option value={3}>거부</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <ManagerLecView columns = {columns} rows = {rows} />
        <Modal open={this.state.open} onClose={this.handleClose} >
            <Box>
              <ManagerLecDetailContainer />
            </Box>
          </Modal>
      </div>
    );
  }
}

export default observer(ManagerLecContainer);