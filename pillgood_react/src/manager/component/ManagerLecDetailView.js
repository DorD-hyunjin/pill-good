import React, { Component } from 'react';
import moment from 'moment';
import "moment/locale/ko"
import {S3_BUCKET, REGION} from '../../image/S3bucket';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';

class ManagerLecDetailView extends Component {
  render() {
    const {lec, accessLec} = this.props;
    const userImg = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.email?.image}`;
    const lecImg = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        avatar={(<Avatar alt="O" src={userImg} />)}
        title={lec.email?.name}
        subheader={lec.email?.intro? lec.email?.intro : "자기소개가 없습니다:("}
      />
      <CardActions style={{float: 'right'}}>
      <Link href={`/manager/lec/update/${lec.lec_id}`} style={{textDecorationLine:'none', color:'#D5BA8C', fontSize:'small'}}>수정</Link>
      </CardActions>
      <CardMedia
        component="img"
        height="140"
        image= {lecImg}
        alt="등록된 이미지가 없습니다 :("
      />

      <br/>
      <hr />
      <br/>
      <CardContent style={{textAlign:'center', color:'#353535'}}>
      <Typography variant="h5" component="div">
        {lec.title}
      </Typography>
      <br/>
      <Typography variant="subtitle2" gutterBottom>
      일시: {moment(lec.date).format("MM.DD, dddd")}<br/>
      시간: {moment(lec.time,"HH:mm:ss").format('LT')}<br/>
      장소: {lec.room}<br/>
      인원: {lec.number ===  1 ? "1인" : lec.number === 2 ? "2인" : "8인"}<br/>
      단계: {lec.level === 1 ? "level-1" : lec.level === 2 ? "level-2" : "level-3"}
      </Typography>
      <br/>
      <hr/>
      <br/>
      <Typography variant="subtitle1" gutterBottom component="div">
        {lec.content}
      </Typography>
      </CardContent>
      <CardActions style={{float: 'right'}}>
      <Link href={`/manager/lec`} style={{textDecorationLine:'none' }} >{lec.status === 2 ? "" : <Button  size="small" onClick={()=>accessLec(lec.lec_id, lec.status, 'access')} style={{color:'#D5BA8C'}}>승인</Button >}</Link>
      <Link href={`/manager/lec`} style={{textDecorationLine:'none' }} >{lec.status === 3 ? "" : <Button  size="small" onClick={()=>accessLec(lec.lec_id, lec.status, 'reject')} style={{color:'#D5BA8C'}}>미승인</Button >}</Link>
        </CardActions>
    </Card>
    );
  }
}

export default ManagerLecDetailView;