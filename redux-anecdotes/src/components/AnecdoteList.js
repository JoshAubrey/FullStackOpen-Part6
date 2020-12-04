import React from 'react'
import { connect } from 'react-redux'
//import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  //const dispatch = useDispatch()
  // const anecdotes = useSelector(state => {
  //   return state.filter === 'ALL'
  //     ? state.anecdotes
  //     : state.anecdotes.filter(anec => anec.content.toLowerCase().includes(state.filter.toLowerCase()))

  // })
  // const anecdotes = () => {
  //   return props.filter === 'ALL'
  //   ? props.anecdotes
  //   : props.anecdotes.filter(anec => anec.content.toLowerCase().includes(props.filter.toLowerCase()))
  // }
  

  const vote = (anecdote) => {
    // dispatch(voteAnecdote(anecdote))
    // dispatch(setNotification(`you voted for ${anecdote.content}`, 5))
    props.voteAnecdote(anecdote)
    props.setNotification(`you voted for ${anecdote.content}`, 5)
  }

  return(
    <div>
      {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
  // return {
  //   anecdotes: state.anecdotes,
  //   filter: state.filter,
  // }
  return {
    anecdotes: (state.filter === 'ALL'
    ? state.anecdotes
    : state.anecdotes.filter(anec => anec.content.toLowerCase().includes(state.filter.toLowerCase()))
    )
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)
export default ConnectedAnecdoteList
//export default AnecdoteList