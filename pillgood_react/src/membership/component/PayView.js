import React, { Component } from 'react';
import moment from 'moment';
class PayView extends Component {
    render() {
       const {membership} = this.props;
        return(
            <div>
                그룹 유형 : {membership.type}
                <br />
                기간 : {membership.period}({moment().format("YYYY-MM-DD")}~{moment().add(membership.period,'days').format("YYYY-MM-DD")}
                <br />
                결제 금액 : {membership.price}
                <br />
                회수 : {membership.number}
                <br />
                결제 일시 : {moment().format("YYYY-MM-DD")}
                <br />
                결제 방식 : 
                <input type="radio" name="type" value="1">신용카드</input>
                <input type="radio" name="type" value="2">계좌이체</input>
            </div>
            
        );
    }
}

export default PayView;