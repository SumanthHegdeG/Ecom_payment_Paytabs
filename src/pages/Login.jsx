import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login, resetErrors } from '../features/users/userSlice'
import { Link, Navigate } from 'react-router-dom'

const FormCustome = () => {
  const [validate, setValidate] = useState({ values: {}, errors: {} })

  const { userInfo, error } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetErrors())
  }, [])

  const checkError = (e, state) => {
    var errors = {}

    if (!state.values.email) {
      errors.email = 'Reqired'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.values.email)
    )
      if (!state.values.password) {
        errors.templateName = 'Required'
      }

    try {
      return errors[e.target.name]
    } catch {
      return errors
    }
  }

  const handleChange = (e) => {
    var error = undefined
    setValidate((state) => {
      const newState = {
        ...state,
        values: {
          ...state.values,
          [e.target.name]: e.target.value,
        },
      }

      error = checkError(e, newState)
      return { ...newState }
    })

    setValidate((state) => {
      if (state.values.messageType && state.values.messageType !== '0200') {
        delete state.errors.isDecline
      }
      return {
        ...state,
        errors: {
          ...state.errors,
          [e.target.name]: error,
        },
      }
    })
  }

  if (userInfo.name) {
    dispatch(resetErrors())
    return <Navigate to='/' />
  }

  const submit = (e) => {
    e.preventDefault()
    const errors = checkError(null, validate)

    if (Object.keys(errors).length)
      setValidate((state) => ({ ...state, errors: { ...errors } }))
    else {
      dispatch(login({ ...validate.values }))
    }
  }

  return (
    <div className='d-flex flex-column gap-3 justify-content-center align-items-center mt-5'>
      <div className='col-md-6 col-11 border p-4 rounded-3 shadow'>
        <Form>
          <h3>{error}</h3>
          <Form.Group className='mb-3'>
            <Form.Label>Enter Email</Form.Label>
            <Form.Control
              className={validate.errors.email && ' is-invalid'}
              type='text'
              name='email'
              onChange={handleChange}
              onBlur={handleChange}
              placeholder={'Email ...'}
              value={validate.values.email || ''}
            />
            {validate.errors.email && (
              <div className='invalid-feedback'>{validate.errors.email}</div>
            )}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              className={validate.errors.password && ' is-invalid'}
              type='password'
              name='password'
              placeholder='Password...'
              onChange={handleChange}
              onBlur={handleChange}
              value={validate.values.password || ''}
            />
            {validate.errors.password && (
              <div className='invalid-feedback'>{validate.errors.password}</div>
            )}
          </Form.Group>
          <Button type='submit' onClick={submit}>
            Login
          </Button>
        </Form>
      </div>
      <p>
        New here ? <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default FormCustome
