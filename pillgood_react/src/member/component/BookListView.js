import { TableCell, TableRow } from '@mui/material';
import moment from 'moment';
import React, { Component } from 'react';

class BookListView extends Component {
    render() {
        const {book, onCancel} = this.props;
        return (
            <TableRow>
                <TableCell>{book.lec_id.title}</TableCell>
                <TableCell align="center">{book.lec_id.date}</TableCell>
                <TableCell align="center">{book.lec_id.time}</TableCell>
                <TableCell align="center">{book.lec_id.room}</TableCell>
                <TableCell align="center">{book.lec_id.email.name}</TableCell>
                <TableCell align="center">
                    {book.lec_id.lec_count} / {book.lec_id.number}
                </TableCell>
                <TableCell align="center">
                    {book.status === 1 && book.lec_id.date > moment().format('YYYY-MM-DD')? (
                        <span>
                            예약
                            <input
                                type="button"
                                value="취소"
                                onClick={(e) => {
                                    onCancel(
                                        book.book_id,
                                        book.email.id,
                                        book.lec_id.lec_id
                                    );
                                }}
                            />
                        </span>
                    ) : book.status === 2 ? (
                        "취소"
                    ) : (
                        "완료"
                    )}
                </TableCell>
            </TableRow>
        );
    }
}

export default BookListView;