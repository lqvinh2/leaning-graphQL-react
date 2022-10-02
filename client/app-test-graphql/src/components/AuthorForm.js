import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const AuthorForm = () => {
    const [newAuthor, setNewAuthor] = useState({
        name: '',
        age: ''
    })

    const { name, age } = newAuthor
    const onInputChange = event => {

        setNewAuthor({
            ...newAuthor,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault()

        setNewAuthor({ name: '', age: '' })
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className='invisible mb-2'>
                <Form.Control />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Control
                    type='text'
                    placeholder='Author name'
                    name='name'
                    onChange={onInputChange}
                    value={name}
                    required
                />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Control
                    type='number'
                    placeholder='Author age'
                    name='age'
                    onChange={onInputChange}
                    value={age}
                    required
                >


                </Form.Control>
            </Form.Group>
            <Button className='float-right' variant='info' type='submit'>
                Add Author
            </Button>
        </Form>
    )
}

export default AuthorForm
