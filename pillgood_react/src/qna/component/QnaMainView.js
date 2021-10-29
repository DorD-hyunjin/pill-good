import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class QnaMainView extends Component {
    render() {
        const {qna} = this.props;
        return (
            <TableRow>
                <TableCell align="center" width="80">{qna.qna_id}</TableCell>
                <TableCell align="left" width="500"><Link to={`/qna/detail/${qna.qna_id}`}>{qna.title}</Link></TableCell>
                <TableCell align="center" width="120">{qna.category}</TableCell>
                <TableCell align="center" width="80">{qna.question_user.name}</TableCell>
                <TableCell align="center" width="100">{moment(qna.date).format("YYYY-MM-DD")}</TableCell>
            </TableRow>

            // <div>
            //     <TableContainer component={Paper}>
            //         <Table
            //             sx={{
            //                 minWidth: 650
            //             }}
            //             aria-label="a dense table"size="small" >
            //             <TableHead>
                           
            //             </TableHead>
            //             <TableBody>
            //                 <TableRow
            //                     key={qna.qna_id}
            //                     sx={{'&:last-child td, &:last-child th' : {
            //                             border: 0
            //                         }}}>

            //                     <TableCell component="th" scope="row">{qna.qna_id}</TableCell>
            //                     <TableCell align="right" ><Link to={`/qna/detail/${qna.qna_id}`}>{qna.title}</Link></TableCell>
            //                     <TableCell align="right">{qna.category}</TableCell>
            //                     <TableCell align="right">{qna.question_user.name}</TableCell>
            //                     <TableCell align="right">{moment(qna.date).format("YYYY-MM-DD")}</TableCell>
            //                 </TableRow>
            //             </TableBody>
            //         </Table>
            //     </TableContainer>

            // </div>
        );
    }
}

export default QnaMainView;