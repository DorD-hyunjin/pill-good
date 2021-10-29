import React, { Component } from 'react';
import { observer } from 'mobx-react';
import QnaUpdateView from '../component/QnaUpdateView';
import QnaStore from '../store/QnaStore';
import "../qna.css";

class QnaUpdateContainer extends Component {
    qnaStore = QnaStore;

    componentDidMount() {
        this.qnaStore.selectQna(this.props.qnaId);
    }
    render() {
        const {qna, handlerSet, handlerModify} = this.qnaStore;
        return (
            <div id="qnaForm">
                <h2>문의 수정</h2>
                <QnaUpdateView qna = {qna} onsetprops = {handlerSet} onupdate = {handlerModify}/>
            </div>
        );
    }
}

export default observer(QnaUpdateContainer);