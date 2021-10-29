import React, { Component } from "react";
import {observer} from 'mobx-react';
import UserStore from "../store/UserStore";
import '../user.css';

import Modal from '@mui/material/Modal';
import UserLoginContainer from './UserLoginContainer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';



class UserJoinContainer extends Component {
    userStore = UserStore;
    
    state = {
        open: false
    };

    handleOpen = e => {
        this.setState({open : true});
    };

    handleClose = () => {
        this.setState({open : false});
    };

    render() {
        const {handlerSet, handlerJoin} = this.userStore; 

        const MyButton = styled(Button)({
            background: 'linear-gradient(90deg, #D5BA8C, #E2CEAE)',
            border: 0,
            borderRadius: 10,
            width: '300px',
            color: 'white',
            height: 48,
            padding: '0 30px',
          });

        return (
            <div className="align-join">
                <h2>회원가입</h2>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >                    
                    <Box
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '62ch' },
                    }}
                    >
                        <div>
                            <TextField className="emailField"
                                id="outlined-required"
                                label="이메일"
                                type="email"
                                name="email"                                         
                                onChange={(e)=>{handlerSet(e.target.name, e.target.value)}}/>
                        </div>
                    </Box>
                
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '30ch' },
                        }}
                        >
                        <div>
                            <TextField
                                id="outlined-required"
                                label="비밀번호"
                                type="password"
                                name="password"       
                                placeholder="영문자, 숫자 포함 8자 이상 입력"   
                                onChange={(e)=>{passwordEquivCheck(e.target.name, e.target.value);
                                                handlerSet(e.target.name, e.target.value)}}/>
                    
                            <TextField
                                id="outlined-required"
                                label="비밀번호 확인"
                                type="password"
                                name="checkPassword"
                                placeholder="영문자, 숫자 포함 8자 이상 입력"                                 
                                onChange={(e)=>{passwordEquivCheck(e.target.name, e.target.value);
                                                handlerSet(e.target.name, e.target.value)}}/>
                            <div>
                                <div>&nbsp; 비밀번호는 영문자, 숫자를 포함하여 8자 이상을 사용하세요.</div>
                                <div id="checkTrue" className="blue-color hidden">
                                    &nbsp; 비밀번호가 일치합니다.
                                </div>
                                <div id="checkFalse" className="red-color hidden">
                                    &nbsp; 비밀번호가 일치하지 않습니다.
                                </div>
                            </div>    
                        </div>

                        <div>
                            <TextField
                                id="outlined-required"
                                label="이름"
                                type="text"
                                name="name"                               
                                onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    
                            <TextField
                                id="outlined-required"
                                label="연락처"
                                type="text"
                                name="phone"
                                placeholder="000-0000-0000"                               
                                onChange={(e)=>{handlerSet(e.target.name, e.target.value)}}/>
                        </div>
                        <MyButton id="mainButton" onClick={()=>handlerJoin(check)}>가입하기</MyButton>
                    </Box>
                </Box>
                <span>이미 회원이신가요?</span>
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    onClick={this.handleOpen}                        
                    >
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <Box>
                            <UserLoginContainer/> 
                        </Box>
                    </Modal>
                    로그인
                </Button>
                <hr/>
                <img alt="favicon" src="https://pillgoodimagebucket.s3.ap-northeast-2.amazonaws.com/logo/favicon.png"/>
            </div>
        );
    }
}

let password = "";
let checkPassword = "";
let check = "";

const passwordEquivCheck = (name, value) => {
    const checkTrue = document.querySelector("#checkTrue");
    const checkFalse = document.querySelector("#checkFalse");

    if (name === "password") {
        password = value;
    } 
    else if (name === "checkPassword") {
        checkPassword = value;
    }

    if (password === "" || checkPassword === "") {
        checkTrue.classList.add("hidden");
        checkFalse.classList.add("hidden");
        check = "no";
    } 
    else if (password === checkPassword) {
        checkTrue.classList.remove("hidden");
        checkFalse.classList.add("hidden");
        check = "okay";
    } 
    else {
        checkTrue.classList.add("hidden");
        checkFalse.classList.remove("hidden");
        check = "no";
    }

};

export default observer(UserJoinContainer);

  
