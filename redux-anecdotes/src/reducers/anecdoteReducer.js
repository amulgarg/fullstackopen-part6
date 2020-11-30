const initialState = [];

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'VOTE_ANECTODE':
      const anectode = state.find(anectode => anectode.id === action.id);
      const changedAnectode = { ...anectode, votes: anectode.votes + 1 };
      return state.map(anectode => {
        if(anectode.id === action.id){
          return changedAnectode;
        }
        return anectode;
      });
    case 'ADD_ANECTODE':
      return [...state, action.anecdote];
    case 'INIT_ANECDOTES':
        return [...action.anecdotesList];
    default:
      return state;
  }
}

export const addVote = (id) => {
  return {
    type: 'VOTE_ANECTODE',
    id
  };
};

export const addAnectode = (anecdote) => {
  return {
    type: 'ADD_ANECTODE',
    anecdote
  }
}

export const initAnecdotes = (anecdotesList) => {
  return {
    type: 'INIT_ANECDOTES',
    anecdotesList
  }
}

export default reducer