import React from 'react';
import { addAnectode } from '../reducers/anecdoteReducer';
import { setNotification, unsetNotification } from '../reducers/notificationReducer';

import { useDispatch } from 'react-redux';

const AnectodeForm = (s) => {

  const dispatch = useDispatch();

  const createAnectode = (event) => {
    event.preventDefault();
    dispatch(addAnectode(event.target.anectode.value));
    dispatch(setNotification(`Created new anectode - ${event.target.anectode.value}`));
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