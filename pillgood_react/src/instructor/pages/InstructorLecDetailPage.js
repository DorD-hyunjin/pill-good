import React, { Component } from 'react';
import InstructorLecDetailContainer from '../container/InstructorLecDetailContainer';


class InstructorLecDetailPage extends Component {
    render() {
     const {params} = this.props.match;
        return (
            <div>
             <InstructorLecDetailContainer id={params.id}/>
            </div>
        );
    }
}

export default InstructorLecDetailPage;