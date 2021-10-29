import { Card, CardContent, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React, { Component } from "react";
import PayActiveItemView from "../component/PayActiveItemView";
import PayStore from "../store/PayStore";

class PayItemContainer extends Component {
    payStore = PayStore;

    componentDidMount() {
        const user = window.localStorage.getItem("id");
        console.log(user)
        
        this.payStore.selectMember(user);
    }

    render() {
        const { pays } = this.payStore;
        let today = new Date().toISOString().split("T")[0];

        const payList = pays
            .filter((pay) => pay.end_date >= today && pay.remain > 0)
            .map((pay) => {
                return <PayActiveItemView key={pay.pay_id} pay={pay} />;
            });

        return (
            <div id="myMembership">
                <h3>이용중인 멤버십</h3>
                {payList.length ? (
                    payList
                ) : (
                    <Card>
                        <CardContent>
                            <Typography component="div" className="card-none">
                                현재 이용중인 멤버십이<br/> 존재하지 않습니다.
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </div>
        );
    }
}

export default observer(PayItemContainer);
