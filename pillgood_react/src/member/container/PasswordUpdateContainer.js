import { observer } from 'mobx-react';
import React, { Component } from 'react';
import PasswordUpdateView from '../component/PasswordUpdateView';
import MemberStore from '../store/MemberStore';

class PasswordUpdateContainer extends Component {
    memberStore = MemberStore;

    componentDidMount() {
        const user = window.localStorage.getItem("id");
        console.log(user)
        this.memberStore.selectMember(user);
    } 
       
    render() {
        const {member} = this.memberStore; 
        return (
            <div>
                <PasswordUpdateView member={member}/>
            </div>
        );
    }
}

export default observer(PasswordUpdateContainer);