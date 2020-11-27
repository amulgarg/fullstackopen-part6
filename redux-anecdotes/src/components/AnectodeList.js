import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { setNotification, unsetNotification } from '../reducers/notificationReducer';

const AnectodeList = () => {

  const dispatch = useDispatch();

  const anecdotes = useSelector((state) => {
    const sortedAnectodes = state.anecdotes.sort((a, b) => {
      if(a.votes > b.votes) return -1;
      else return 1;
    });
    if(state.filter){
      const filteredAnectodes = sortedAnectodes.filter( anectode => anectode.content.includes(state.filter));
      return filteredAnectodes;
    }
    return sortedAnectodes;
  });

  const vote = (anectode) => {
    dispatch(addVote(anectode.id));
    dispatch(setNotification(`Upvoted anectode - ${anectode.content}`));
    window.setTimeout(() => dispatch(unsetNotification()), 5000);
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
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}
  </React.Fragment>;
}

export default AnectodeList;