import React, { Component } from "react";
import PayRefundContainer from "../container/PayRefundContainer";

class MemberPayRefundPage extends Component {
    render() {
        // const { pay_id } = this.props.location.state.pay_id;
        return (
            <div>
                <PayRefundContainer payId={this.props.match.params['id']}/>
            </div>
        );
    }
}

export default MemberPayRefundPage;
