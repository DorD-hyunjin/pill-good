import React, { Component } from 'react';
import ManagerStore from '../store/ManagerStore';
import { observer } from 'mobx-react'
import ManagerUserView from '../component/ManagerUserView'

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

class ManagerUserContainer extends Component {
  managerStore = ManagerStore;

  state = {
    open: false
  };

  handleOpen = e => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.managerStore.selectUserAll();
  }
  

  render() {
    const columns = [
      {
        field: 'email', headerName: 'Email', width: 200,
        renderCell: (cellValues) => {
          return <Link href={`/manager/user/${cellValues.row.id}`} style={{textDecorationLine:'none', color:'black'}}>{cellValues.row.email}</Link>;
        }
      },
      { field: 'name', headerName: '이름', width: 200 },
      { field: 'type', headerName: '분류', width: 200 },
      {
        field: "change", headerName: '변경', width: 200,
        renderCell: (cellValues) => {
          return (
            <Button style={{color: 'white', background: '#D5BA8C', borderRadius:'4px'}} onClick={(event) => { accessUser(cellValues.row.id, cellValues.row.type); }}>변경</Button>
          );
        }
      }
    ];

    const { users, userFilter, accessUser, changeUserFilter } = this.managerStore;
    const rows = [];
    users.forEach((user) => {
      if (user.type === 1) return;

      if (userFilter === '2') {
        if (user.type === 3) return;
        rows.push(
          { id: user.id, email: user.email, name: user.name, type: "강사" }
        );
      }
      else if (userFilter === '3') {
        if (user.type === 2) return;
        rows.push(
          { id: user.id, email: user.email, name: user.name, type: "일반" }
        );
      }
      else {
        rows.push(
          { id: user.id, email: user.email, name: user.name, type: (user.type === 2 ? "강사" : "일반")}
        );
      }
    });
    return (
      <div style={{ width: '90%', margin: '30px auto' }}>
        <h2 style={{ textAlign: 'center', color:'#D5BA8C' }} >회원관리</h2>
        <Box>
          <FormControl >
            <NativeSelect
              Value={userFilter}
              onChange={(e) => changeUserFilter(e.target.value)}
              inputProps={{
                name: 'type',
                id: 'type',
              }}
            >
              <option value={0}>전체</option>
              <option value={2}>강사</option>
              <option value={3}>일반</option>
            </NativeSelect>
          </FormControl>
        </Box>
        {<ManagerUserView columns={columns} rows={rows} />}
      </div>
    );
  }
}

export default observer(ManagerUserContainer);