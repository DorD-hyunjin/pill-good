import { Container, Divider, Grid, Link, List, ListItem, ListSubheader } from '@mui/material';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import InstructorLecPage from '../../instructor/pages/InstructorLecPage';
import LecCreatePage from '../../instructor/pages/LecCreatePage';
import MemberBookListPage from './MemberBookListPage';
import MemberDeletePage from './MemberDeletePage';
import MemberInfoPage from './MemberInfoPage';
import MemberPayListPage from './MemberPayListPage';
import MemberPayRefundPage from './MemberPayRefundPage';
import MemberUpdatePage from './MemberUpdatePage';
import '../member.css';
import UserListPage from '../../instructor/pages/UserListPage';

class MemberMainPage extends Component {

    render() {
        const user_type = window.localStorage.getItem("type");

        return (
            <Container className="main-content">
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <List
                            sx={{
                                width: "100%",
                                bgcolor: "background.paper",
                            }}
                            // component="nav"
                            // aria-labelledby="nested-list-subheader"
                            className="white-round-top"
                        >
                            <ListSubheader
                                component="div"
                                id="nested-list-subheader"
                            >
                                회원
                            </ListSubheader>
                            <ListItem button>
                                <Link
                                    href="/member/"
                                    underline="none"
                                    color="black"
                                >
                                    내 정보
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link
                                    href="/member/update"
                                    underline="none"
                                    color="black"
                                >
                                    회원정보 수정
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link
                                    href="/member/paylist"
                                    underline="none"
                                    color="black"
                                >
                                    멤버십 결제내역
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link
                                    href="/member/book"
                                    underline="none"
                                    color="black"
                                >
                                    강의 예약내역
                                </Link>
                            </ListItem>
                        </List>
                        {user_type === "2" || user_type === "1" ? <Divider /> : ""}
                        {user_type === "2" || user_type === "1" ? (
                            <List
                                sx={{
                                    width: "100%",
                                    bgcolor: "background.paper",
                                }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                <ListSubheader
                                    component="div"
                                    id="nested-list-subheader"
                                >
                                    강사
                                </ListSubheader>
                                <ListItem button>
                                    <Link
                                        href="/instructor/lec/:id"
                                        underline="none"
                                        color="black"
                                    >
                                        내 강의
                                    </Link>
                                </ListItem>
                                <ListItem button>
                                    <Link
                                        href="/instructor/create"
                                        underline="none"
                                        color="black"
                                    >
                                        강의 등록
                                    </Link>
                                </ListItem>
                            </List>
                        ) : (
                            ""
                        )}
                        <Divider />
                        <List
                            sx={{
                                width: "100%",
                                bgcolor: "background.paper",
                            }}
                            component="nav"
                            className="white-round-bottom"
                        >
                            <ListItem button>
                                <Link
                                    href="/member/delete"
                                    underline="none"
                                    color="black"
                                >
                                    회원 탈퇴
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid
                            item
                            sx={{
                                width: "100%",
                                bgcolor: "background.paper",
                            }}
                            className="main-content white-round-all"
                        >
                            <Switch>
                                <Route
                                    exact
                                    path="/member"
                                    component={MemberInfoPage}
                                />
                                <Route
                                    exact
                                    path="/member/update"
                                    component={MemberUpdatePage}
                                />
                                <Route
                                    exact
                                    path="/member/delete"
                                    component={MemberDeletePage}
                                />
                                <Route
                                    exact
                                    path="/member/paylist"
                                    component={MemberPayListPage}
                                />
                                <Route
                                    exact
                                    path="/member/refund/:id"
                                    component={MemberPayRefundPage}
                                />
                                <Route
                                    exact
                                    path="/member/book"
                                    component={MemberBookListPage}
                                />
                                <Route
                                    exact
                                    path="/instructor/lec/:id"
                                    component={InstructorLecPage}
                                />
                                <Route
                                      exact
                                      path="/instructor/user/:id"
                                      component={UserListPage}
                                />
                                <Route
                                    exact
                                    path="/instructor/create"
                                    component={LecCreatePage}
                                />
                            </Switch>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default MemberMainPage;