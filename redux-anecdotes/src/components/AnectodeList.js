import React from 'react';
import { connect } from 'react-redux';
import { initializeAnecdotes, voteAnecdote } from '../actionCreators/anectodes';

const AnectodeList = (props) => {

  console.log(props);
  const vote = (anectode) => {
    props.voteAnecdote(anectode);
  }

  React.useEffect(() => {
    props.initializeAnecdotes();
  }, []);

  return <React.Fragment>
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
  </React.Fragment>;
}

const getFilteredAndSortedAnectodes = (state) => {
  const sortedAnectodes = state.anecdotes.sort((a, b) => {
    if(a.votes > b.votes) return -1;
    else return 1;
  });
  if(state.filter){
    const filteredAnectodes = sortedAnectodes.filter( anectode => anectode.content.includes(state.filter));
    return filteredAnectodes;
  }
  return sortedAnectodes;
}

const mapStateToProps = (state) => ({
  anecdotes: getFilteredAndSortedAnectodes(state)
});

const mapDispatchToProps = dispatch => {
  return { 
    initializeAnecdotes: () => {
      dispatch(initializeAnecdotes());
    },

    voteAnecdote: (anectode) => {
      dispatch(voteAnecdote(anectode));
    }
  }
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnectodeList);

export default ConnectedAnecdoteList;