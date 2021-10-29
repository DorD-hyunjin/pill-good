import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./layout/Home";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import './layout/Home.css';


import UserJoinPage from "./user/pages/UserJoinPage";
import UserLoginPage from "./user/pages/UserLoginPage";

import MemberMainPage from "./member/pages/MemberMainPage";

import UserListPage from "./instructor/pages/UserListPage";

import ManagerMainPage from "./manager/pages/ManagerMainPage";

import MembershipMainPage from "./membership/pages/MembershipMainPage";
import PayPage from "./membership/pages/PayPage";

import LecDetailPage from "./lec/pages/LecDetailPage";
import LecMainPage from "./lec/pages/LecMainPage";
import BookCreatePage from "./lec/pages/BookCreatePage"

import QnaMainPage from "./qna/pages/QnaMainPage";
import QnaDetailPage from "./qna/pages/QnaDetailPage";
import QnaCreatePage from "./qna/pages/QnaCreatePage";
import QnaUpdatePage from "./qna/pages/QnaUpdatePage";
import QnaAnswerPage from "./qna/pages/QnaAnswerPage";

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <div id="mainRouter">
                    <Switch>
                        <Route exact path="/" component={Home} />

                        {/* user */}
                        <Route
                            exact
                            path="/user/join/"
                            component={UserJoinPage}
                        />
                        <Route
                            exact
                            path="/user/login"
                            component={UserLoginPage}
                        />

                        {/* member */}
                        <Route path="/member" component={MemberMainPage} />

                        {/* instructor */}
                        <Route path="/instructor/" component={MemberMainPage} />
                        <Route
                            exact
                            path="/instructor/user/:id"
                            component={UserListPage}
                        />

                        {/* manager */}
                        <Route path="/manager" component={ManagerMainPage} />

                        {/* membership */}
                        <Route
                            exact
                            path="/membership"
                            component={MembershipMainPage}
                        />
                        <Route
                            exact
                            path="/membership/pay"
                            component={PayPage}
                        />

                        {/* lec */}
                        <Route exact path="/lec" component={LecMainPage} />
                        <Route
                            exact
                            path="/lec/:id"
                            component={LecDetailPage}
                        />
                        <Route
                            exact
                            path="/lec/create/book/:id"
                            component={BookCreatePage}
                        />

                        {/* qna */}
                        <Route exact path="/qna" component={QnaMainPage} />
                        <Route
                            exact
                            path="/qna/detail/:id"
                            component={QnaDetailPage}
                        />
                        <Route
                            exact
                            path="/qna/create/"
                            component={QnaCreatePage}
                        />
                        <Route
                            exact
                            path="/qna/update/:id"
                            component={QnaUpdatePage}
                        />
                        <Route
                            exact
                            path="/qna/answer/:id"
                            component={QnaAnswerPage}
                        />
                    </Switch>
                </div>
                <Footer />
            </Router>
        );
    }
}

export default App;