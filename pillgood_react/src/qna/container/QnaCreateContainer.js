import React, { Component } from 'react';
import { observer } from 'mobx-react'
import QnaCreateView from '../component/QnaCreateView';
import QnaStore from '../store/QnaStore';
import MemberStore from '../../member/store/MemberStore';
import "../qna.css";
class QnaCreateContainer extends Component {
    qnaStore = QnaStore;
    memberStore = MemberStore;

    componentDidMount() {
        let user = window.localStorage.getItem("id");
        this.memberStore.selectMember(user);
    }
    render() {
        const {handlerSet, createQna} = this.qnaStore;
        const {member} = this.memberStore;
        return (
            <div id="qnaForm">
                <h2>문의 등록</h2>
                <QnaCreateView onsetprops = {handlerSet} oncreate = {createQna} member={member}/>
    
            </div>
        );
    }
}

export default observer(QnaCreateContainer);