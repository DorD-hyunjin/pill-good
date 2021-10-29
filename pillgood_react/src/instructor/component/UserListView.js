import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';

//lec은 강의 정보를 담은 배열(books와 같음), for each로 돌아가면서 강의 정보하나하나를 element로 받아서 출력.  
class UserListView extends Component {
  render() {

    const { columns, rows, useStyles  } = this.props;
    const classes = useStyles;

      return(
      <DataGrid style={{ height: 500, width: '100%'}}
            rows={rows}
            columns={columns}
            pageSize={5}
            hideFooterSelectedRowCount={true}
            className={classes.root}
          />

//        <div>
//          <p>
//            회원 이메일 : {user.email}<br />
//            회원 성함 : {user.name}<br />
//            특이사항 : {user.intro}<br />
//           </p>
//
//        </div>
   
    );
  }
}

export default UserListView;