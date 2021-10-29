import { Card, CardContent, Typography } from "@mui/material";
import moment from "moment";
import React, { Component } from "react";


class DeleteView extends Component {
    render() {
        const { pay, onDelete } = this.props;
        let html;

        if (pay.remain === undefined || pay.remain === 0 || pay.end_date < moment().format("YYYY-MM-DD")) {
            html = (
                <div id="memberDelete">
                    <p className="card-none">
                        소진되지 않은 멤버십이 존재하지 않습니다. <br />
                        탈퇴하시려면 아래 버튼을 눌러주세요.
                    </p>
                    <input
                        type="button"
                        value="회원 탈퇴"
                        onClick={(e) => onDelete()}
                    />
                </div>
            );
        }else {
            html = (
                <div id="memberDelete">
                    <h3>! 소진되지 않은 멤버십이 존재합니다.</h3>
                    <Card>
                    <CardContent>
                    <Typography variant="h5" component="div" className="card-title">
                        {pay.membership_id.type === 1
                            ? "1대1"
                            : pay.membership_id.type === 2
                            ? "1대2"
                            : pay.membership_id.type === 8
                            ? "1대8"
                            : "유형이 정확하지 않습니다."}{" "}
                        수업 이용권
                    </Typography>
                    <Typography className="card-content">
                        {moment(pay.pay_date).format("YYYY-MM-DD")} ~{" "}
                        {pay.end_date} (잔여{" "}
                        {moment(pay.end_date).diff(moment(), "days")}일)
                    </Typography>
                    <Typography className="card-content">
                        {pay.membership_id.number}회 중 {pay.remain} 회 남음
                    </Typography>
                    </CardContent>
                    </Card>

                    <p>모두 소진 후 탈퇴가 가능합니다.</p>
                </div>
            );
        }

        return <div>{html}</div>;
    }
}

export default DeleteView;
