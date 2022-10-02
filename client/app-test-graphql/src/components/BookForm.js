import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { getAuthors } from '../graphql-client/queries'
import { useQuery } from '@apollo/client'


const BookForm = () => {
    const [newBook, setNewBook] = useState({
        name: '',
        genre: '',
        authorId: ''
    })

    const { name, genre, authorId } = newBook

    const onInputChange = event => {
        setNewBook({
            ...newBook,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log('test deploy')
        setNewBook({ name: '', genre: '', authorId: '' })
    }

    const { loading: loadingGetAuthors, error: authorsError, data: authorsData } = useQuery(getAuthors)

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className='mb-2'>
                <Form.Control
                    type='text'
                    placeholder='Book name'
                    name='name'
                    onChange={onInputChange}
                    value={name}
                    required
                />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Control
                    type='text'
                    placeholder='Book genre'
                    name='genre'
                    onChange={onInputChange}
                    value={genre}
                    required
                />
            </Form.Group>
			<Form.Group className='mb-2'>
				{loadingGetAuthors ? (
					<p>Đang tải danh sách tác giả...</p>
				) : (
					<Form.Control
						as='select'
						name='authorId'
						onChange={onInputChange}
						value={authorId}
						required
					>
						<option value='' disabled>
							Chọn tác giả
						</option>
						{authorsData.authors.map(author => (
							<option key={author.id} value={author.id}>
								{author.name}
							</option>
						))}
					</Form.Control>
				)}
			</Form.Group>
            <Button className='float-right' variant='info' type='submit'>
                Add Book
            </Button>
        </Form>
    )
}

export default BookForm
