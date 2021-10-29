import React, { Component } from 'react';
import InstructorContainer from '../container/InstructorContainer';
import moment from 'moment';

class InstructorView extends Component {
    render() {
        return (
            <div>
                 <span> ========================</span><br />
            강의명 : {lec.title}<br />
            강의 내용 : {lec.content}<br />
            장소: {lec.room}<br />
            날짜: {lec.date}<br />
            시간: {lec.time}<br />
            난이도: {lec.level}<br />
            강사명 : {lec.email}
            인원 :{lec.number}

            </div>
        );
    }
}

export default InstructorView;