import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
//import { setNotification, clearNotification } from '../reducers/notificationReducer'
//import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnec = async (event) => {
    event.preventDefault()

    const content = event.target.anec.value
    event.target.anec.value = ''
    dispatch(createAnecdote(content))
    //const newAnec = await anecdoteService.createNew(content)
    //dispatch(createAnecdote(newAnec))
    dispatch(setNotification(`${content} has been added`, 5))
    // setTimeout(() => {
    //   dispatch(clearNotification())
    // }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <div><input name='anec'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm