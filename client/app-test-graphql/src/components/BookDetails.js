import React, { Fragment, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import { getSingleBook } from '../graphql-client/queries';
import { useQuery } from '@apollo/client';

function BookDetails({ bookId }) {

    const { loading, error, data } = useQuery(getSingleBook, {
        variables: {
            id: bookId
        },
        skip: bookId === null
    });

    return (
        <Card bg='info' text='white' className='shadow'>
            {
                (loading === true) ? <Card.Body><Card.Text>Đang tải thông tin sách...</Card.Text></Card.Body> :
                (error !== undefined) ? <Card.Body><Card.Text>Đã có lỗi xảy ra !!!</Card.Text></Card.Body> :
                (data == null || data.book == null ) ? <Card.Body><Card.Text>Chọn 1 quyển sách...</Card.Text></Card.Body> :
                (<>
                <Card.Body>
                    <Fragment>
                        <Card.Title>{ data.book.name}</Card.Title>
                        <Card.Subtitle>{ data.book.genre}</Card.Subtitle>
                        <p><strong>{ data.book.author.name}</strong></p>
                        <p>Tuổi: { data.book.author.age}</p>
                        <p>Tác giả {<strong>{ data.book.author.name}</strong>} đã viết các cuốn sách sau</p>
                        <ul>
                            {data.book.author.books.map(book => <li key={book.id}>{ book.name}</li>)}
                        </ul>
                    </Fragment>
                </Card.Body>
                </>)
           }
        </Card>
    )
}

export default BookDetails