import React, { Component } from 'react';
import QnaAnswerContainer from '../container/QnaAnswerContainer'
class QnaAnswerPage extends Component {
    render() {
        return (
            <div>
                <QnaAnswerContainer id={this.props.match.params.id}/>
                
            </div>
        );
    }
}

export default QnaAnswerPage;