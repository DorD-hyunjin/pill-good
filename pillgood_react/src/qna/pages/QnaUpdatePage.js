import React, { Component } from 'react';
import QnaUpdateContainer from '../container/QnaUpdateContainer'
class QnaUpdatePage extends Component {
    render() {
    
        return (
            <div>
                <QnaUpdateContainer qnaId={this.props.match.params["id"]}/>

            </div>
        );
    }
}

export default QnaUpdatePage;