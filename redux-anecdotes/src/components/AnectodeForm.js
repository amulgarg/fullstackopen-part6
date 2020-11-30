import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../actionCreators/anectodes';

const AnectodeForm = (s) => {

  const dispatch = useDispatch();

  const createAnectode = async (event) => {
    event.preventDefault();
    dispatch(createAnecdote(event.target.anectode.value));
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