import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '@mui/material/Button';
import { Box, Paper, TextField} from "@mui/material";
import "../qna.css";
 
class QnaAnswerView extends Component {
    render() {
        const {qna, handlerSet, onAnswer, adminId} = this.props;
        return (
            <div>
                <Box>
                    <Paper>
                        <dl className="dl-dt-dd">
                            <dt>제목</dt>
                            <dd>{qna.title}</dd>
                        </dl>
                        <dl className="dl-dt-dd">
                            <dt>작성자</dt>
                            <dd>{qna.question_user.name}</dd>
                        </dl>
                        <dl className="dl-dt-dd">
                            <dt>카테고리</dt>
                            <dd>{qna.category}</dd>
                        </dl>
                        <dl className="dl-dt-dd">
                            <dt>등록일</dt>
                            <dd>{moment(qna.date).format("YYYY-MM-DD")}</dd>
                        </dl>
                        <dl className="dl-dt-dd">
                            <dt>질문내용</dt>
                            <dd>{qna.question}</dd>
                        </dl>

                        <dl className="dl-dt-dd">
                            <dt>답변</dt>
                            <dd>
                            <TextField
                            id="outlined-multiline-static"
                            label="질문"
                            multiline
                            rows={6}
                            name="answer"
                            onChange={(e) =>
                                handlerSet(e.target.name, e.target.value)
                            }
                        />
                            </dd>
                        </dl>
                    </Paper>
                </Box>
                
                <div className="content-right">
                    <Button
                        variant="contained"
                        onClick={()=>onAnswer(`${adminId}`)}
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

export default QnaAnswerView;