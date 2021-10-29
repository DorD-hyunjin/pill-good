import { observer } from "mobx-react";
import React, { Component } from "react";
import PayListView from "../component/PayListView";
import PayStore from "../store/PayStore";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

class PayListContainer extends Component {
    payStore = PayStore;

    componentDidMount() {
        const user = window.localStorage.getItem("id");
        console.log(user)
        
        this.payStore.selectMember(user); 
    }

    render() {
        const { pays } = this.payStore;

        const payList = pays.map((pay) => {
            return <PayListView key={pay.pay_id} pay={pay} />;
        });

        return (
            <div id="memberPayList">
                <h3>멤버십 결제내역</h3>
                <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">결제일</TableCell>
                                <TableCell align="center">유형</TableCell>
                                <TableCell align="center">기간</TableCell>
                                <TableCell align="center">총/잔여횟수</TableCell>
                                <TableCell align="center">결제방식</TableCell>
                                <TableCell align="center">가격</TableCell>
                                <TableCell align="center">상태</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {payList.length ? (
                                payList
                            ) : (
                                <tr>
                                    <td colSpan="7">
                                        멤버십 결제내역이 존재하지 않습니다.
                                    </td>
                                </tr>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default observer(PayListContainer);
