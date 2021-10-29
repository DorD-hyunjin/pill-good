import { Container, Grid, Link, List, ListItem, ListSubheader } from '@mui/material';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import '../../member/member.css';
import ManagerLecDetailPage from './ManagerLecDetailPage';
import ManagerLecPage from './ManagerLecPage';
import ManagerLecUpdatePage from './ManagerLecUpdatePage';
import ManagerMemberShipCreatePage from './ManagerMemberShipCreatePage';
import ManagerMembershipPage from './ManagerMembershipPage';
import ManagerUserDetailPage from './ManagerUserDetailPage';
import ManagerUserPage from './ManagerUserPage';

class ManagerMainPage extends Component {
    render() {
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
                            className="white-round-all"
                        >
                            <ListSubheader
                                component="div"
                                id="nested-list-subheader"
                            >
                                관리자
                            </ListSubheader>
                            <ListItem button>
                                <Link
                                    href="/manager/"
                                    underline="none"
                                    color="black"
                                >
                                    회원관리
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link
                                    href="/manager/lec/"
                                    underline="none"
                                    color="black"
                                >
                                    강의관리
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link
                                    href="/manager/membership/"
                                    underline="none"
                                    color="black"
                                >
                                    멤버십 관리
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
                                    path="/manager/"
                                    component={ManagerUserPage}
                                />
                                <Route
                                    exact
                                    path="/manager/lec/"
                                    component={ManagerLecPage}
                                />
                                <Route
                                    exact
                                    path="/manager/membership/"
                                    component={ManagerMembershipPage}
                                />

                                
                        <Route
                            exact
                            path="/manager/user/:id"
                            component={ManagerUserDetailPage}
                        />
                        <Route
                            exact
                            path="/manager/lec/:id"
                            component={ManagerLecDetailPage}
                        />
                        <Route
                            exact
                            path="/manager/lec/update/:id"
                            component={ManagerLecUpdatePage}
                        />
                        <Route
                            exact
                            path="/manager/membership/create/"
                            component={ManagerMemberShipCreatePage}
                        />
                            </Switch>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default ManagerMainPage;