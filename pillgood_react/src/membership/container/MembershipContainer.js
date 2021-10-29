import React, { Component } from 'react';
import {observer} from 'mobx-react';
import MembershipStore from "../store/MembershipStore";
import MembershipView from "../component/MembershipView";
import '../membership.css';

class MembershipContainer extends Component {
    membershipStore = MembershipStore;

    componentDidMount() {
        this.membershipStore.selectMembershipAll();
        
    }
    render() {
        const {memberships, setmembership, Pay} = this.membershipStore;
        const user = window.localStorage.getItem("id");
        const membershipList1 = memberships.filter((membership)=>membership.type===1 && membership.status===1).map(membership =>{
            return <span onClick={(e) => setmembership(membership.membership_id)}><MembershipView key={membership.membership_id} membership = {membership} user={user} pay={Pay}/></span>
        });
        const membershipList2 = memberships.filter((membership)=>membership.type===2 && membership.status===1).map(membership =>{
            return <span onClick={(e) => setmembership(membership.membership_id)}><MembershipView key={membership.membership_id} membership = {membership} user={user} pay={Pay}/></span>
        });
        const membershipList3 = memberships.filter((membership)=>membership.type===8 && membership.status===1).map(membership =>{
            return <span onClick={(e) => setmembership(membership.membership_id)}><MembershipView key={membership.membership_id} membership = {membership} user={user} pay={Pay}/></span>
        });
        
        return (
            <div>
                <h1>Membership</h1>
                <div className = "item-flex">
                <h3 className = "group-title">One-on-One(1:1)</h3>
                {membershipList1}
                </div>
                <div className = "item-flex">
                <h3 className = "group-title">Couple(1:2)</h3>
                {membershipList2}
                </div>
                <div className = "item-flex">
                <h3 className = "group-title">Group(1:8)</h3>
                {membershipList3}
                </div>
                
            </div>
        );
    }
}

export default observer(MembershipContainer);