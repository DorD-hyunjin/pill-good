import React, { Component } from 'react';
import PayItemContainer from '../container/PayItemContainer';
import PayListContainer from '../container/PayListContainer';

class MemberPayListPage extends Component {
    render() {
        return (
            <div>
                <PayItemContainer />
                <PayListContainer />
            </div>
        );
    }
}

export default MemberPayListPage;