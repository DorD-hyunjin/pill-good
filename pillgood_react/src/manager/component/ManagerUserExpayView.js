import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';
class ManagerUserExpayView extends Component {
  render() {
    const { columns, rows} = this.props;
    return (
      <DataGrid style={{ height: 300, width: '100%'}} 
            rows={rows}
            columns={columns}
            pageSize={3}
            hideFooterSelectedRowCount={true}
          />
    );
  }
}

export default ManagerUserExpayView;