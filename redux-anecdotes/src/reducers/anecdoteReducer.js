const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

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
      return [...state, asObject(action.anectodeContent)];
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

export const addAnectode = (anectodeContent) => {
  return {
    type: 'ADD_ANECTODE',
    anectodeContent
  }
}

export default reducer