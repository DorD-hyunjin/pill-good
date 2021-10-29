import React, { Component } from 'react';
// import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class BookCreateView extends Component {
  render() {
      const { lec, createBook } = this.props;
      const user_id = window.localStorage.getItem("id");
      return (
          <div>
              {moment(lec.date).format("YY.MM.DD")} ,  {moment(lec.time,"HH:mm:ss").format("HH:mm")} / "{lec.title}" 강의 예약을 진행하시겠습니까?<br />
              현재 인원은 {lec.lec_count}명 이며,  정원은 {lec.number}명입니다.

              <br />
              <button onClick={() => createBook(user_id)}>예약 확정</button>
              &nbsp;&nbsp;
              <Link to="/lec">
                  <button>강의 목록</button>
              </Link>
              &nbsp;&nbsp;
          </div>
      );
  }
}

export default BookCreateView;


