import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';

const AnectodeList = () => {

  const dispatch = useDispatch();

  const anecdotes = useSelector(state => state.sort((a, b) => {
    if(a.votes > b.votes) return -1;
    else return 1;
  }));

  const vote = (id) => {
    dispatch(addVote(id));
  }

  React.useEffect(() => {
    console.log('rendering: App.js');
  });

  return <React.Fragment>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
  </React.Fragment>;
}

export default AnectodeList;