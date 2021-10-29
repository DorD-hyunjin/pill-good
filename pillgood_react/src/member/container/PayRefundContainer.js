import { observer } from "mobx-react";
import React, { Component } from "react";
import PayRefundView from "../component/PayRefundView";
import PayStore from "../store/PayStore";
import MemberStore from "../store/MemberStore";

class PayRefundContainer extends Component {
    payStore = PayStore;
    memberStore = MemberStore;

    componentDidMount() {
        const user = window.localStorage.getItem("id");
        console.log(user)
        
        this.memberStore.selectMember(user);
        this.payStore.selectMember(user);
        this.payStore.selectPay(this.props.payId);
    }

    render() {
        const { pay, refundPay } = this.payStore;
        const { member } = this.memberStore;
        return (
            <div>
                <PayRefundView pay={pay} member={member} onRefund={refundPay}/>
            </div>
        );
    }
}

export default observer(PayRefundContainer);
