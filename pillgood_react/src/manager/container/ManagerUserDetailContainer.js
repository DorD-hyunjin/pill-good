import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';
import BookStore from '../../member/store/BookStore';
import PayStore from '../../member/store/PayStore';
import ManagerUserBookView from '../component/ManagerUserBookView';
import ManagerUserExbookView from '../component/ManagerUserExbookView';
import ManagerUserPayView from '../component/ManagerUserPayView';
import ManagerUserExpayView from '../component/ManagerUserExpayView';
import moment from 'moment';
import { S3_BUCKET, REGION } from '../../image/S3bucket';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class ManagerUserDetailContainer extends Component {
  managerStore = ManagerStore;
  bookStore = BookStore;
  payStore = PayStore;

  componentDidMount() {
    const { id } = this.props;
    this.managerStore.selectUser(id);
    this.bookStore.selectBookAll(id);
    this.payStore.selectMember(id);
  }

  render() {
    const { user } = this.managerStore;
    const today = moment().format("YY.MM.DD")
    const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${user.image}`;

    const { books } = this.bookStore;
    const bookrow = [];
    const exbookrow = [];
    const book_columns = [
      { field: 'title', headerName: '강의명', width: 200 },
      { field: 'date', headerName: '날짜', width: 120 },
      { field: 'time', headerName: '시간', width: 120 },
      { field: "room", headerName: '장소', width: 120 },
      { field: "number", headerName: '인원', width: 120 },
      { field: "status", headerName: '상태', width: 120 }
    ];
    books.forEach((book) => {
      if (moment({ today }).isBefore(book.lec_id.date)) {
        bookrow.push(
          {
            id: book.lec_id, title: book.lec_id.title, date: moment(book.lec_id.date).format("YY.MM.DD"),
            time: moment(book.lec_id.time, "HH:mm:ss").format("HH:mm"), room: book.lec_id.room,
            number: book.lec_id.number, status: (book.status === 1 ? "예약"
              : book.status === 2 ? "취소" : "완료")
          }
        );
      }
      else {
        exbookrow.push(
          {
            id: book.lec_id, title: book.lec_id.title, date: moment(book.lec_id.date).format("YY.MM.DD"),
            time: moment(book.lec_id.time, "HH:mm:ss").format("HH:mm"), room: book.lec_id.room,
            number: book.lec_id.number, status: (book.status === 1 ? "예약"
              : book.status === 2 ? "취소" : "완료")
          }
        );
      }
    });
    const { pays } = this.payStore;
    const payrow = [];
    const expayrow = [];
    const formatter = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'KRW'})
    const pay_columns=[
      { field: 'remain', headerName: '잔여횟수', width: 140 },
      { field: 'end_date', headerName: '만료일', width: 120 },
      { field: 'type', headerName: '유형', width: 120 },
      { field: 'pay_date', headerName: '결제일', width: 120 },
      { field: 'price', headerName: '가격', width: 120 },
      { field: 'status', headerName: '상태', width: 120 }
    ];
          pays.forEach((pay) => {
        if (moment({today}).isBefore(pay.end_date) && pay.remain !== 0){
          payrow.push(
            {
              id: pay.pay_id, remain:pay.remain, end_date:moment(pay.end_date).format("YY.MM.DD"), 
              type:(pay.membership_id.type === 1 ? "1인"
                : pay.membership_id.type === 2 ? "2인"
                : pay.membership_id.type === 8 ? "8인" : "유형이 정확하지 않습니다."),
              pay_date:moment(pay.pay_date).format("YY.MM.DD"),
              price:(pay.membership_id.price?(formatter.format(pay.membership_id.price)): ""),
              status:(pay.status === 1 ? "결제" : "환불")
            }
            );
        }
        else {
          expayrow.push(
            {
              id: pay.pay_id, remain:pay.remain, end_date:moment(pay.end_date).format("YY.MM.DD"), 
              type:(pay.membership_id.type === 1 ? "1인"
                : pay.membership_id.type === 2 ? "2인"
                : pay.membership_id.type === 8 ? "8인" : "유형이 정확하지 않습니다."),
              pat_type:(pay.pay_type === 1 ? "신용카드" : "현금결제"), pay_date:moment(pay.pay_date).format("YY.MM.DD"),
              price:(pay.membership_id.price?(formatter.format(pay.membership_id.price)): ""),
              status:(pay.status === 1 ? "결제" :  "환불")
            }
            );
        }
    });
    return (
      <Paper sx={{ p: 2, margin: 'auto', minWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Card sx={{ minWidth: 250 }}>
              <CardMedia
                component="img"
                height="140"
                image={imgUrl}
                alt="등록된 이미지가 없습니다 :("
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {user.name} ( {user.email} )
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {user.intro ? user.intro : "자기소개가 없습니다 :("}
                </Typography>
                <Typography variant="body2">
                  연락처: {user.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  가입일: {moment(user.join_date).format("YY.MM.DD")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  접속일: {user.last_login === null ? "기록이 없습니다 :(" : moment(user.last_login).format("YY.MM.DD")}
                </Typography>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div" style={{ color:'#D5BA8C' }}>
                {user.type === 1 ? "관리자" : user.type === 2 ? "강사" : "회원"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>예약 정보</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {<ManagerUserBookView columns={book_columns} rows={bookrow} />}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>만료된 예약 정보</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {<ManagerUserExbookView columns={book_columns} rows={exbookrow} />}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>멤버십 정보</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {<ManagerUserPayView columns={pay_columns} rows={payrow}/>}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>만료된 멤버십 정보</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {<ManagerUserExpayView columns={pay_columns} rows={expayrow}/>}
          </AccordionDetails>
        </Accordion>
      </Paper>

      // <div>
      //   <h1>기본정보</h1>
      //   이미지:<img src={imgUrl} alt="프로필사진" width="200"/>
      //   이름: {user.name}<br />
      //   소개: {user.intro === "" ? "소개가 없습니다 :(" : user.intro}<br />
      //   ID: {user.email}<br />
      //   연락처: {user.phone}<br />
      //   가입일자: {moment(user.join_date).format("YY.MM.DD")}<br />
      //   마지막 접속일자: {user.last_login === null ? "기록이 없습니다 :(" : moment(user.last_login).format("YY.MM.DD")}
      //   <h1>예약정보</h1>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th>강의명</th>
      //         <th>날짜</th>
      //         <th>시간</th>
      //         <th>장소</th>
      //         <th>예약인원</th>
      //         <th>상태</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //           {bookrow.length ? (
      //             bookrow)        
      //           : (
      //             <tr>
      //               <td colSpan='3'>회원 목록이 없습니다 :(</td>
      //             </tr>
      //           )}
      //         </tbody>
      //     {/* <tbody>
      //       {bookList.length ? (
      //         bookList
      //       ) : (
      //         <tr>
      //           <td colSpan='7'>강의 예약 및 진행 내역이 존재하지 않습니다.</td>
      //         </tr>
      //       )}
      //     </tbody> */}
      //   </table>
      //   <h3>만료된 예약</h3>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th>강의명</th>
      //         <th>날짜</th>
      //         <th>시간</th>
      //         <th>장소</th>
      //         <th>예약인원</th>
      //         <th>상태</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //           {exbookrow.length ? (
      //             exbookrow)        
      //           : (
      //             <tr>
      //               <td colSpan='3'>예약 목록이 없습니다 :(</td>
      //             </tr>
      //           )}
      //         </tbody>
      //   </table>
      //   <h1>멤버쉽정보</h1>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th>결제일</th>
      //         <th>유형</th>
      //         <th>만료일</th>
      //         <th>잔여횟수</th>
      //         <th>결제방식</th>
      //         <th>가격</th>
      //         <th>상태</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {payrow.length ? (
      //         payrow
      //       ) : (
      //         <tr>
      //           <td colSpan='7'>멤버십 결제내역이 존재하지 않습니다.</td>
      //         </tr>
      //       )}
      //     </tbody>
      //   </table>
      //   <h3>만료된 멤버쉽</h3>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th>결제일</th>
      //         <th>유형</th>
      //         <th>만료일</th>
      //         <th>잔여횟수</th>
      //         <th>결제방식</th>
      //         <th>가격</th>
      //         <th>상태</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {expayrow.length ? (
      //         expayrow
      //       ) : (
      //         <tr>
      //           <td colSpan='7'>멤버십 결제내역이 존재하지 않습니다.</td>
      //         </tr>
      //       )}
      //     </tbody>
      //   </table>
      // </div>
    );
  }
}

export default observer(ManagerUserDetailContainer);