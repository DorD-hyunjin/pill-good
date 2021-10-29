import React, { Component } from "react";
import { observer } from "mobx-react";
import MemberStore from "../store/MemberStore";
import MemberView from "../component/MemberView";
import '../member.css';

class MemberContainer extends Component {
    memberStore = MemberStore;

    componentDidMount() {
        const user = window.localStorage.getItem("id");
        console.log(user)

        this.memberStore.selectMember(user);
    }

    render() {
        const { member } = this.memberStore;
        return (
            <div>
                <MemberView member={member}/>
            </div>
        );
    }
}

export default observer(MemberContainer);
