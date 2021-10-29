import { observer } from "mobx-react";
import React, { Component } from "react";
import MemberUpdateView from "../component/MemberUpdateView";
import MemberStore from "../store/MemberStore";

class MemberUpdateContainer extends Component {
    memberStore = MemberStore;

    componentDidMount() {
        const user = window.localStorage.getItem("id");
        console.log(user)

        this.memberStore.selectMember(user);
    }

    render() {
        const { member, handlerSetProps, updateMember, handlerSetFile } = this.memberStore;
        return (
            <div>
                <MemberUpdateView
                    member={member}
                    onSetProps={handlerSetProps}
                    onUpdate={updateMember}
                    onFileInput={handlerSetFile}
                />
            </div>
        );
    }
}

export default observer(MemberUpdateContainer);
