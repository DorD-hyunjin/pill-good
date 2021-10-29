import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {S3_BUCKET, REGION} from '../../image/S3bucket';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';



class LecView extends Component {

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
    const {lec}  = this.props;
     const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;
      const Img = styled('img')({
          margin: 'auto',
          display: 'block',
          maxWidth: '120%',
          maxHeight: '110%',
        });
        const MyButton = styled(Button)({
            background: 'linear-gradient(90deg, #D5BA8C, #E2CEAE)',
            border: 0,
            borderRadius: 10,
            width: '150px',
            color: 'white',
            height: 48,
            padding: '0 30px',
          });

      return(

      <Paper sx={{ p: 2, marginTop: 5, marginBottom: 5, marginLeft:60, maxWidth: 600, flexGrow: 1 }}>
      <Grid container spacing={5}>

        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="강의사진 " src={imgUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="title1" component="div">
                {lec.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {lec.email}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                인원: {lec.lec_count} / {lec.number}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            <MyButton>
              <Link to = {`/lec/${lec.lec_id}` } style={{ textDecoration: 'none' }} >강의 내용</Link>
            </MyButton>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
   );
  }
}
export default LecView;