import anectodesService from '../services/anectodes';
import { initAnecdotes, addAnectode, updateAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from './notification';

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anectodesService.getAll();
    dispatch(initAnecdotes(anecdotes));
  };
}

export const createAnecdote = (inputText) => {
  return async (dispatch) => {
    const newAnectode = await anectodesService.createNew(inputText);
    dispatch(addAnectode(newAnectode));
    dispatch(setNotification(`Created new anectode - ${newAnectode.content}`, 5000));
  };
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anectodesService.update({ ...anecdote, votes: anecdote.votes + 1 });
    dispatch(updateAnecdote(anecdote.id, updatedAnecdote));
    dispatch(setNotification(`Upvoted anectode - ${anecdote.content}`, 5000));  
  };
}