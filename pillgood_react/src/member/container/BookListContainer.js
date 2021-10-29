import { observer } from "mobx-react";
import React, { Component } from "react";
import BookListView from "../component/BookListView";
import BookStore from "../store/BookStore";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

class BookListContainer extends Component {
    bookStore = BookStore;

    componentDidMount() {
        const user = window.localStorage.getItem("id");
        console.log(user)

        this.bookStore.selectBookAll(user);
    }

    render() {
        const { books, cancelBook } = this.bookStore;

        const bookList = books.map((book) => {
            return <BookListView key={book.book_id} book={book} onCancel={cancelBook} />;
        });

        return (
            <div id="memberPayList">
                <h3>내 예약내역</h3>

                <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">강의명</TableCell>
                                <TableCell align="center">날짜</TableCell>
                                <TableCell align="center">시간</TableCell>
                                <TableCell align="center">장소</TableCell>
                                <TableCell align="center">강사</TableCell>
                                <TableCell align="center">예약인원</TableCell>
                                <TableCell align="center">상태</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookList.length ? (
                                bookList
                            ) : (
                                <tr>
                                    <td colSpan="7">
                                        강의 예약 및 진행 내역이 존재하지
                                        않습니다.
                                    </td>
                                </tr>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default observer(BookListContainer);
