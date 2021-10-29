import React, { Component } from 'react';
import {S3_BUCKET, REGION} from '../../image/S3bucket';
import moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../lec.css";
import { styled } from '@mui/styles';




class LecDetailView extends Component {


    state = {
        open: false
    };

   handleOpen = (lecId) => {
    this.lecStore.selectLec(lecId);
    this.setState({ open: true });
  };

    handleClose = () => {
        this.setState({open : false});
    };

  render() {
    const {lec, createBook } = this.props;
    const user_id = window.localStorage.getItem("id");

    const MyButton = styled(Button)({
            background: 'linear-gradient(90deg, #D5BA8C, #E2CEAE)',
            border: 0,
            borderRadius: 10,
            width: '250px',
            color: 'white',
            height: 48,
            padding: '0 30px',
            marginLeft: '30px',
            margin: '20px'
          });

    const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;
    return (
          <Card sx={{ maxWidth: 450 }}  className="margin-center">
           <CardMedia
                component="img"
                height="400"
                img src={imgUrl}
                alt="강의사진"
           />
           <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              <h4>{lec.title}</h4>
            </Typography>
            <Typography variant="body2" color="text.secondary">
             날짜: {moment(lec.date).format("YY.MM.DD")}  / 시간: {moment(lec.time,"HH:mm:ss").format("HH:mm")} <br />
                  난이도: {lec.level}<br />
                  강사명: {lec.email}<br />
             </Typography>
             </CardContent>
            <MyButton  onClick={() => createBook(user_id)}>예약 신청</MyButton>



        </Card>

    );
  }
}

export default LecDetailView;


