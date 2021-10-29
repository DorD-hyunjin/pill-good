import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';

import TextField from '@mui/material/TextField';
import { MenuItem, Typography } from "@material-ui/core";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Input } from "@mui/material";

import '../../instructor/instructorLec.css';
import { styled } from '@mui/styles';

class ManagerLecUpdateContainer extends Component {
  managerStore = ManagerStore;

  
  componentDidMount() {
    const { id } = this.props;
    this.managerStore.selectLec(id);
  }

  


  render() {
    const { lec, updateLec, deleteLec, setLecProps, handlerSetFile } = this.managerStore;
    const MyButton = styled(Button)({
      background: 'linear-gradient(90deg, #D5BA8C, #E2CEAE)',
      border: 0,
      borderRadius: 10,
      width: '200px',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: '20px'
    });
    return (
      <div>
      <h2 style={{textAlign:'center', color:'#D5BA8C', padding:10}} >강의 수정</h2>
      <div id="lec-name">
          <Typography  component="h2" variant="body1" gutterBottom>
              강의명
          </Typography>
          <TextField type="text"
                        id="title"
                        variant="outlined"
                        style ={{width: '50ch'}}
                        name="title"
                        value={lec.title}
            onChange={(e) => setLecProps(e.target.name, e.target.value)}/>
      </div>
      <div id="lec-content">
            <Typography component="h2" variant="body1" gutterBottom>
              강의 내용
          </Typography>
            <TextField
                            name="content" 
                            id ="content"
                            variant="outlined"
                            multiline
                            rows={4}
                            style ={{width: '50ch'}}
                            value={lec.content}
            onChange={(e) => setLecProps(e.target.name, e.target.value)}
            />
          </div>
          <div id="lec-image">
           <Typography component="h2" variant="body1" gutterBottom>
              파일첨부
           </Typography>
           <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={(e) => handlerSetFile(e)}
          />
            </div>
            <div id="lec-room">
          <Typography component="h2" variant="body1" gutterBottom>
              장소
           </Typography>
              <TextField select style ={{width: '40%'}} name="room" id="room" value={lec.room || ""}
            onChange={(e) => setLecProps(e.target.name, e.target.value)}>
                      <MenuItem value="">--강의실--</MenuItem>
                      <MenuItem value="301호">301호</MenuItem>
                      <MenuItem value="302호">302호</MenuItem>
                      <MenuItem value="303호">303호</MenuItem>
                      <MenuItem value="201호">201호</MenuItem>
                      <MenuItem value="202호">202호</MenuItem>
                      <MenuItem value="101호">101호</MenuItem>
                    </TextField>
           </div>
           <div id="lec-date">
             <Typography component="h2" variant="body1" gutterBottom>
              날짜
          </Typography>
              <TextField type="date" style ={{width: '40%'}} id="date"name="date" value={lec.date}
            onChange={(e) => setLecProps(e.target.name, e.target.value)}/>
            </div>
            <div id="lec-time">
          <Typography component="h2" variant="body1" gutterBottom>
              시간
          </Typography>
          <TextField
                      type="time"
                      value={lec.time}
                      style ={{width: '40%'}}
                      name="time"
                      onChange={(e) => setLecProps(e.target.name, e.target.value)}
                      />
          </div>
          <div id="lec-level">
          <Typography component="h2" variant="body1" gutterBottom>
              난이도
          </Typography>
              <TextField select style ={{width: '40%'}} name="level" id="level" value={lec.level||""}
                    onChange={(e) => setLecProps(e.target.name, e.target.value)}>
                      <MenuItem value="">--난이도--</MenuItem>
                      <MenuItem value="1">level-1 </MenuItem>
                      <MenuItem value="2">level-2 </MenuItem>
                      <MenuItem value="3">level-3 </MenuItem>
                    </TextField><br />
          </div>
          <div id="lec-number">
          <Typography component="h2" variant="body1" gutterBottom>
              인원
          </Typography>
            <TextField select style ={{width: '20%'}} name="number" id="number" value={lec.number||""}
                    onChange={(e) => setLecProps(e.target.name, e.target.value)}>
                    <MenuItem value="">--인원--</MenuItem>
                    <MenuItem value="1">1인 </MenuItem>
                    <MenuItem value="2">2인 </MenuItem>
                    <MenuItem value="8">8인</MenuItem>
            </TextField><br />
            </div>
            <div id="lec-number">
            <FormControl component="fieldset" >
              <FormLabel component="legend">활성</FormLabel>
              <RadioGroup row value={lec.status} name="status" onChange={(e) => setLecProps(e.target.name, e.target.value)}>
                <FormControlLabel value="1" control={<Radio size="small" />} label="대기" />
                <FormControlLabel value="2" control={<Radio size="small" />} label="승인" />
                <FormControlLabel value="3" control={<Radio size="small" />} label="거부" />
              </RadioGroup>
            </FormControl>
          </div>
        <div id="lec-button">
             <Link href={`/manager/lec`} style={{ textDecorationLine: 'none' }}>
             <MyButton onClick={() => updateLec()}>수정</MyButton>
             <MyButton onClick={() => deleteLec()}>삭제</MyButton></Link>
        </div>
      </div>
    );
  }
}

export default observer(ManagerLecUpdateContainer);