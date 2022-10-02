import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import BookDetails from './BookDetails'

import { useQuery } from '@apollo/client'
import { getBooks } from '../graphql-client/queries'

const BookList = () => {

  const { loading, error, data } = useQuery(getBooks);

  if (loading) {
    return <p>loading....</p>
  }
  if (error) {
    return <p>{ error}</p>
  }


  return (
    <Row>
      <Col xs={8}>
        <Row>
          <Col xs={4} className='p-0 p-1'>
            <Card border='info' text='info' className='text-center shadow'>
              <Card.Body>
                <Card.Title>Ky Nghe Lay Tay</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={4} className='p-0 p-1'>
            <Card border='info' text='info' className='text-center shadow'>
              <Card.Body>
                <Card.Title>Ky Nghe Lay Tay</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={4} className='p-0 p-1'>
            <Card border='info' text='info' className='text-center shadow'>
              <Card.Body>
                <Card.Title>Ky Nghe Lay Tay</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={4} className='p-0 p-1'>
            <Card border='info' text='info' className='text-center shadow'>
              <Card.Body>
                <Card.Title>Ky Nghe Lay Tay</Card.Title>
              </Card.Body>
            </Card>
          </Col>


          <Col xs={4} className='p-0 p-1'>
            <Card border='info' text='info' className='text-center shadow'>
              <Card.Body>
                <Card.Title>Ky Nghe Lay Tay</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={4} className='p-0 p-1'>
            <Card border='info' text='info' className='text-center shadow'>
              <Card.Body>
                <Card.Title>Ky Nghe Lay Tay</Card.Title>
              </Card.Body>
            </Card>
          </Col>



        </Row>
      </Col>
      <Col xs={4}>
        <BookDetails />
      </Col>
    </Row>
  )
}

export default BookList;