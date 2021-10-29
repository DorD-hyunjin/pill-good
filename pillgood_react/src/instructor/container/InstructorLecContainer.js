import React, { Component } from "react";
import {observer} from 'mobx-react';
import InstructorStore from "../store/InstructorStore";
import InstructorLecView from '../component/InstructorLecView';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';


class InstructorLecContainer extends Component {
  instructorStore = InstructorStore;


    componentDidMount() {
        const user = window.localStorage.getItem("id");
        this.instructorStore.instructorLec(user);//mount 되면 전체 강의
        console.log(user)
    }

    render() {

        const {lecs} = this.instructorStore;
        const mylecList = lecs && lecs.map((lec)=>{
            return (<InstructorLecView key = {lec.lec_id} lec={lec}/>)
        });

        return (
              <div id="lecTitle">
              <h2  style={{textAlign:'center', color:'#574934', marginBottom: 20}} >내 강의 목록</h2>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead id="lecList">
            <TableRow>
                <TableCell align="center" width = "180" >강의명</TableCell>
                <TableCell align="center" width = "200" >날짜</TableCell>
                <TableCell align="center" width = "180">시간</TableCell>
                <TableCell align="center" width = "180">장소</TableCell>
                <TableCell align="center" width = "180">회원</TableCell>
            </TableRow>
            </TableHead>
            </Table>
                {mylecList}
            </div>

    );
  }

}
export default observer(InstructorLecContainer);
