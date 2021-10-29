import { observer } from "mobx-react";
import React, { Component } from "react";
import DeleteView from "../component/DeleteView";
import MemberStore from "../store/MemberStore";
import PayStore from "../store/PayStore";

class DeleteContainer extends Component {
    memberStore = MemberStore;
    payStore = PayStore;

    componentDidMount() {
        const user = window.localStorage.getItem("id");
        console.log(user)

        this.memberStore.selectMember(user);
        this.payStore.selectMember(user);
    }

    render() {
        const { pay, period } = this.payStore;
        const {deleteMember} = this.memberStore;
        return (
            <div>
                <DeleteView pay={pay} period={period} onDelete={deleteMember}/>
            </div>
        );
    }
}

export default observer(DeleteContainer);
