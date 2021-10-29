import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';

class ManagerLecView extends Component {
  render() {
    const { columns, rows } = this.props;
    return (
      <DataGrid style={{ height: 500, width: '100%'}}
            rows={rows}
            columns={columns}
            pageSize={7}
            hideFooterSelectedRowCount={true}
          />
    );
  }
}

export default ManagerLecView;