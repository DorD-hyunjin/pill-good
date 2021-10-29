import React, { Component } from 'react';
import LecListContainer from '../container/LecListContainer';

//page를 하나의 html로 생각.
class MainPage extends Component {
    render() {
        return (
            <div>
                <LecListContainer />
            </div>
        );
    }
}

export default MainPage;
