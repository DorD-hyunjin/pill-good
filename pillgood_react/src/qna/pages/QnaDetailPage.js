import React, { Component } from 'react';
import QnaDetailContainer from '../container/QnaDetailContainer'
class QnaDetailPage extends Component {
    render() {
        return (
            <div>
                <QnaDetailContainer id={this.props.match.params.id}/>
            </div>
        );
    }
}

export default QnaDetailPage;