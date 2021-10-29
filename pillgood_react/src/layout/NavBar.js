import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import UserLoginContainer from '../user/container/UserLoginContainer';
import UserStore from "../user/store/UserStore";
import "./NavBar.css";


class NavBar extends Component {

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

        const {handlerLogout} = this.userStore;
        
        const theme = createTheme();

        theme.typography.Nav = {
        fontSize: '1.1rem'
        }
                       

      return (
        <div id="background_color">
            <div id="imageBox">
                <Link href="/">
                    <img alt="logo" src="https://pillgoodimagebucket.s3.ap-northeast-2.amazonaws.com/logo/logologo.png"/>
                </Link>
            </div>
            <div id="button-align">
                    <Button
                        style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}
                        id="basic-button"
                        aria-controls="basic-menu">
                        <Link href="/membership" underline="none" color="black">
                            <ThemeProvider theme={theme}>
                                <Typography variant="Nav">멤버십</Typography>
                            </ThemeProvider>
                        </Link>
                    </Button>
                    <Button
                        style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}
                        id="basic-button"
                        aria-controls="basic-menu">
                        <Link href="/lec" underline="none" color="black">
                            <ThemeProvider theme={theme}>
                                <Typography variant="Nav">강의 예약</Typography>
                            </ThemeProvider>
                        </Link>
                    </Button>
                <Button
                    style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}
                    id="basic-button"
                    aria-controls="basic-menu">
                    <Link href="/qna" underline="none" color="black">
                        <ThemeProvider theme={theme}>
                            <Typography variant="Nav">상담</Typography>
                        </ThemeProvider>
                    </Link>
                </Button>

                {window.localStorage.getItem('type') === "1"
                ?
                <Button
                    style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}
                    id="basic-button"
                    aria-controls="basic-menu">
                    <Link href="/manager" underline="none" color="black">   
                        <ThemeProvider theme={theme}>
                            <Typography variant="Nav">관리자페이지</Typography>
                        </ThemeProvider>   
                    </Link>
                </Button>
                :
                window.localStorage.getItem('type') === "2" | window.localStorage.getItem('type') === "3"
                ?
                <Button
                style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}
                id="basic-button"
                aria-controls="basic-menu">
                <Link href="/member" underline="none" color="black">   
                    <ThemeProvider theme={theme}>
                        <Typography variant="Nav">마이페이지</Typography>
                    </ThemeProvider>   
                </Link>
                </Button> 
                :  
                null
                }
                {window.localStorage.getItem('email') !== null
                ?
                <Button
                style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px', color:"black" }}
                id="basic-button"
                aria-controls="basic-menu"
                onClick={()=>handlerLogout()}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="Nav">로그아웃</Typography>
                    </ThemeProvider>   
                </Button>
                :    
                <Button
                    style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px', color:"black" }}
                    id="basic-button"
                    aria-controls="basic-menu"
                    onClick={this.handleOpen}>
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <Box>
                            <UserLoginContainer/> 
                        </Box>
                    </Modal>
                    <ThemeProvider theme={theme}>
                        <Typography variant="Nav">로그인</Typography>
                    </ThemeProvider> 
                </Button>
                }
            </div>    
        </div>
      );
    }
}

export default NavBar;