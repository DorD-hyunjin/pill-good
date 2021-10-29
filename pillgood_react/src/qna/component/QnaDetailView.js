import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../qna.css";
import { Paper } from '@mui/material';
import { Box } from '@mui/system';
class QnaDetailView extends Component {
    render() {
        const {qna, ondelete, admin} = this.props;
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

                        {qna.answer !== "null" && qna.answer ? (
                            <dl className="dl-dt-dd">
                                <dt>답변</dt>
                                <dd>{qna.answer}</dd>
                            </dl>
                        ) : (
                            ""
                        )}
                    </Paper>
                </Box>

                <div className="button-align">
                    <Button variant="contained">
                        <Link
                            to={{
                                pathname: `/qna/update/${qna.qna_id}`,
                                state: { qna_id: qna.qna_id },
                            }}
                        >
                            수정
                        </Link>
                    </Button>
                    <Button variant="contained" onClick={() => ondelete()}>
                        삭제
                    </Button>
                    <Button variant="contained">
                        <Link to={`/qna/`}>목록</Link>
                    </Button>
                    {admin !== true ? (
                        <Button variant="contained">
                            {" "}
                            <Link to={`/qna/answer/${qna.qna_id}`}>답변</Link>
                        </Button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        );
    }
}

export default QnaDetailView;

