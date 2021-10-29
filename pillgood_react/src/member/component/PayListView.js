import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import moment from "moment";
import MemberPayRefundPage from "../pages/MemberPayRefundPage";
import { TableCell, TableRow } from "@mui/material";

class PayListView extends Component {
    render() {
        const { pay } = this.props;
        
        return (
            <TableRow>
                <TableCell align="center">
                    {moment(pay.pay_date).format("YYYY-MM-DD")}
                </TableCell>
                <TableCell align="center">
                    {pay.membership_id.type === 1
                        ? "1대1"
                        : pay.membership_id.type === 2
                        ? "1대2"
                        : pay.membership_id.type === 8
                        ? "1대8"
                        : "유형이 정확하지 않습니다."}
                </TableCell>
                <TableCell align="center">
                    {moment(pay.pay_date).format("YYYY-MM-DD")}~{pay.end_date}
                </TableCell>
                <TableCell align="center">
                    {pay.membership_id.number} / {pay.remain}
                </TableCell>
                <TableCell align="center">
                    {pay.pay_type === 1 ? "신용카드" : "현금결제"}
                </TableCell>
                <TableCell align="right">{pay.membership_id.price}</TableCell>
                <TableCell align="center">
                    {pay.status === 1
                        ? "정상결제"
                        : pay.status === 2
                        ? "환불"
                        : "에러"}

                    {pay.status === 1 &&
                    // pay.membership_id.number === pay.remain &&
                    pay.remain > 0 ? (
                        <Link
                            // to={`/member/refund/${pay.pay_id}`}
                            to={{
                                pathname: `/member/refund/${pay.pay_id}`,
                                state: {
                                    pay_id: pay.pay_id,
                                },
                            }}
                        >
                            환불
                        </Link>
                    ) : (
                        ""
                    )}
                </TableCell>

                <Route
                    exact
                    path="/member/refund/:id"
                    component={MemberPayRefundPage}
                />
            </TableRow>
        );
    }
}

export default PayListView;
