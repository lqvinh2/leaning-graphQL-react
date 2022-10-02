import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import { useQuery } from '@apollo/client'

function BookDetails() {
    return (
        <Card bg='info' text='white' className='shadow'>
            <Card.Body>
                <Fragment>
                    <Card.Title>Ky Nghe Lay Tay</Card.Title>
                    <Card.Subtitle>Phong Su</Card.Subtitle>
                    <p>Vu Trong Phung}</p>
                    <p>Age: 102</p>
                    <p>All books by this author</p>
                    <ul>
                        <li>Ky Lay Tay</li>
                        <li>So Do</li>
                    </ul>
                </Fragment>
            </Card.Body>
        </Card>
    )
}

export default BookDetails