import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'VOTE_ANECDOTE':
      const id = action.data.id
      const anecToChange = state.find(a => a.id === id)
      const changedAnec = { 
        ...anecToChange, 
        votes: anecToChange.votes + 1 
      }
      return state
              .map(anec => anec.id !== id ? anec : changedAnec )
              .sort((a,b) => b.votes - a.votes)
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createAnecdote = (data) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(anecdote.id, {...anecdote, votes: anecdote.votes + 1})
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: updatedAnecdote
    })
  }
}

export default anecdoteReducer