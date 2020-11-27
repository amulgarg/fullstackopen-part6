import React from 'react';
import { addAnectode } from '../reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';

const AnectodeForm = (s) => {

  const dispatch = useDispatch();

  const createAnectode = (event) => {
    event.preventDefault();
    dispatch(addAnectode(event.target.anectode.value));
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