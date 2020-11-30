const initialState = [];

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'UPDATE_ANECDOTE':
      return state.map(anectode => {
        if(anectode.id === action.id){
          return action.changedAnectode;
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

export const updateAnecdote = (id, changedAnectode) => {
  return {
    type: 'UPDATE_ANECDOTE',
    id,
    changedAnectode
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