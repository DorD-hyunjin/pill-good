import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MembershipStore from '../store/MembershipStore';
import PayView from '../component/PayView';

class PayContainer extends Component {
    membershipStore = MembershipStore;

    componentDidMount() {
        this.membershipStore.selectPay();
    }
    render() {
        const {membership} = this.membershipStore;
        return (
            <div>
                <h1>Pay Page</h1>
                <PayView membership={membership} />
                
            </div>
        );
    }
}

export default observer(PayContainer);