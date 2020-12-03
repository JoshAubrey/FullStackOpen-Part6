import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
// import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    return state.filter === 'ALL'
      ? state.anecdotes
      : state.anecdotes.filter(anec => anec.content.toLowerCase().includes(state.filter.toLowerCase()))

  })

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`you voted for ${anecdote.content}`, 5))
    // setTimeout(() => {
    //   dispatch(clearNotification())
    // }, 5000)
  }

  return(
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList