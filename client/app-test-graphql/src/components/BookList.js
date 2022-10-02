import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import BookDetails from './BookDetails'

import { useQuery } from '@apollo/client'
import { getBooks } from '../graphql-client/queries'

const BookList = () => {

  const { loading: loadingGetBooks , error, data } = useQuery(getBooks);
  const [bookSelected, setBookSelected] = useState(null);

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      {loadingGetBooks && data == null ?
        <>Loading...</> :
        <Row>
          <Col xs={8}>
            <Row>
              {data.books.map(book => {
                return <Col xs={4} className='p-0 p-1' key={book.id}>
                  <Card border='info' text='info' className='text-center shadow' onClick={setBookSelected.bind(this, book.id)}>
                  <Card.Body>
                      <Card.Title>{ book.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              })}
            </Row>
          </Col>
          <Col xs={4}>
            <BookDetails bookId={bookSelected} />
          </Col>
        </Row>
      }
    </>
  )
}

export default BookList;