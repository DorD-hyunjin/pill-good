import React, { Component } from 'react';

class PayRefundView extends Component {
    render() {
        const {pay, member, onRefund} = this.props;
        return (
            <div>
                <h2>결제 내역</h2>
                <dl>
                    <dd>이름</dd>
                    <dt>{member.name}</dt>
                </dl>
                <dl>
                    <dd>유형</dd>
                    <dt>{pay.membership_id.type === 1
                    ? "1대1"
                    : pay.membership_id.type === 2
                    ? "1대2"
                    : pay.membership_id.type === 3
                    ? "1대8"
                    : "유형이 정확하지 않습니다."}</dt>
                </dl>
                <dl>
                    <dd>기간</dd>
                    <dt>{pay.pay_date} ~ {pay.end_date}</dt>
                </dl>
                <dl>
                    <dd>환불금액</dd>
                    <dt>{pay.membership_id.price} 원</dt>
                </dl>
                <dl>
                    <dd>결제일자</dd>
                    <dt>{pay.pay_date}</dt>
                </dl>
                <dl>
                    <dd>결제방식</dd>
                    <dt>{pay.pay_type === 1 ? "신용카드" : "현금결제"}</dt>
                </dl>

                <input type="button" value="환불" onClick={(e)=>onRefund()}/>
            </div>
        );
    }
}

export default PayRefundView;