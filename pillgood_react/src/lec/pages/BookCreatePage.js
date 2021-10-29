import React, { Component } from 'react';
import BookCreateContainer from '../container/BookCreateContainer';

//page를 하나의 html로 생각.
class BookCreatePage extends Component {
    render() {
    const {params} = this.props.match;

        return (
            <div>
                <BookCreateContainer id={params.id} />
            </div>
        );
    }
}

export default BookCreatePage;