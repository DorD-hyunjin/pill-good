import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class InstructorLecView extends Component {
  render() {
    const {lec}  = this.props;
    const MyButton = styled(Button)({
            background: 'linear-gradient(90deg, #D5BA8C, #E2CEAE)',
            border: 0,
            borderRadius: 10,
            width: '130px',
            color: 'white',
            height: 48,
            padding: '0 30px',
          });

//     const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;

      return(

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableBody>
            <TableRow
              key={lec.lec_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell  width = "180" align="">
                {lec.title}
              </TableCell>

              <TableCell align="center">{moment(lec.date).format("YYYY-MM-DD")}</TableCell>
              <TableCell align="center" width = "180">{moment(lec.time,"HH:mm:ss").format("HH:mm")}</TableCell>
              <TableCell align="center" width = "180">{lec.room}</TableCell>
              <TableCell align="center" width = "180"><MyButton><Link to= {`/instructor/user/${lec.lec_id}`} style={{ textDecoration: 'none' }}>회원목록</Link>&nbsp;&nbsp;</MyButton></TableCell>
               </TableRow>

            </TableBody>
     </Table>
    </TableContainer>
    );
  }
}

export default InstructorLecView;