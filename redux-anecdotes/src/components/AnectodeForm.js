import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnectode } from '../reducers/anecdoteReducer';
import { setNotification, unsetNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anectodes';

const AnectodeForm = (s) => {

  const dispatch = useDispatch();

  const createAnectode = async (event) => {
    event.preventDefault();
    const inputText = event.target.anectode.value;
    const newAnectode = await anecdoteService.createNew(inputText);
    dispatch(addAnectode(newAnectode));
    dispatch(setNotification(`Created new anectode - ${newAnectode.content}`));
    window.setTimeout(() => dispatch(unsetNotification()), 5000);
  }

  return <React.Fragment>
    <h2>create new</h2>
    <form onSubmit={createAnectode}>
      <div><input name="anectode"/></div>
      <button>create</button>
    </form>
  </React.Fragment>;
}

export default AnectodeForm;