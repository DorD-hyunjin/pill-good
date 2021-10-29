import React, { Component } from 'react';
import LecContainer from '../container/LecContainer';

//page를 하나의 html로 생각.
class LecDetailPage extends Component {
    render() {
        console.log(this.props.match.params)
        const {params} = this.props.match;
        return (
            <div>
                <LecContainer id={params.id} />
            </div>
        );
    }
}

export default LecDetailPage;
