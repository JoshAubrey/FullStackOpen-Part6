import React from 'react'
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()

  const addAnec = async (event) => {
    event.preventDefault()

    const content = event.target.anec.value
    event.target.anec.value = ''
    // dispatch(createAnecdote(content))
    // dispatch(setNotification(`${content} has been added`, 5))
    props.createAnecdote(content)
    props.setNotification(`${content} has been added`, 5)
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

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
export default ConnectedAnecdoteForm
//export default AnecdoteForm