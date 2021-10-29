import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Link } from "react-router-dom";
import { Box, Paper, TextField, Select, MenuItem, Button } from "@mui/material";

import "../qna.css";


class QnaCreateView extends Component {
    render() {
        const {onsetprops, oncreate, member} = this.props;
        return (
            <div>
                <Box>
                    <Paper>
                        <div class="cate-title">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="category"
                                value="운동문의"
                                onChange={(e) =>
                                    onsetprops(e.target.name, e.target.value)
                                }
                            >
                                <MenuItem value={"예약문의"}>예약문의</MenuItem>
                                <MenuItem value={"강의문의"}>강의문의</MenuItem>
                                <MenuItem value={"운동문의"}>운동문의</MenuItem>
                                <MenuItem value={"기타문의"}>기타문의</MenuItem>
                            </Select>
                            <TextField
                                required
                                id="outlined-required"
                                label="제목"
                                name="title"
                                onChange={(e) =>
                                    onsetprops(e.target.name, e.target.value)
                                }
                            />
                        </div>

                        <TextField
                            id="outlined-multiline-static"
                            label="질문"
                            multiline
                            rows={6}
                            name="question"
                            onChange={(e) =>
                                onsetprops(e.target.name, e.target.value)
                            }
                        />
                    </Paper>
                </Box>

                <div className="content-right">
                    <Button
                        variant="contained"
                        onClick={() => oncreate(`${member.id}`)}
                        className="custom-button-full"
                    >
                        등록
                    </Button>
                    <Button variant="contained" className="custom-button-full">
                        <Link to={`/qna/`}>목록</Link>
                    </Button>
                </div>
            </div>
        );
    }
}

export default observer(QnaCreateView);
