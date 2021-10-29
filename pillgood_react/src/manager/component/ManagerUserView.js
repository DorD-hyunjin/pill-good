import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';

class ManagerUserView extends Component {
  render() {
    const { columns, rows } = this.props;
    
    return (
      // <tr>
      //   <td>{user.email}</td>
      //   <td>{user.name}</td>
      //   <td>{user.type === 1 ? "관리자" :
      //     user.type === 2 ? "강사" :
      //       user.type === 3 ? "일반" : "탈퇴회원"}
      //   </td>
      //   <td>
      //     {user.type === 2 ? <button onClick={() => accessUser(user.id, user.type)}>일반 회원으로 변경</button> :
      //       user.type === 3 ? <button onClick={() => accessUser(user.id, user.type)}>강사 회원으로 변경</button> :
      //         '변경불가'}
      //   </td>
      // </tr>
            <DataGrid style={{ height: 500, width: '100%'}} 
            rows={rows}
            columns={columns}
            pageSize={7}
            hideFooterSelectedRowCount={true}
          />
    );
  }
}

export default ManagerUserView;