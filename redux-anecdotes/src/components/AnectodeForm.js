import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../actionCreators/anectodes';

const AnectodeForm = (props) => {
  const createAnectode = async (event) => {
    event.preventDefault();
    props.createAnecdote(event.target.anectode.value);
  }

  return <React.Fragment>
    <h2>create new</h2>
    <form onSubmit={createAnectode}>
      <div><input name="anectode"/></div>
      <button>create</button>
    </form>
  </React.Fragment>;
}

const mapDispatchToProps = (dispatch) => ({
  createAnecdote: (anecdoteText) => {
    dispatch(createAnecdote(anecdoteText));
  }
});

export default connect(null, mapDispatchToProps)(AnectodeForm);