
const initialState = null;

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_FILTER':
      return action.filter;
    case 'UNSET_FILTER':
      return null;
    default:
      return state;
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
};

export const unsetFilter = () => {
  return {
    type: 'UNSET_FILTER'
  }
}

export default reducer;