import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, unsetFilter } from '../reducers/filterReducer';

const Filter = () => {

  const dispatch = useDispatch();

  const handleChange = (event) => {
    if(event.target.value === ''){
      return dispatch(unsetFilter());
    }

    return dispatch(setFilter(event.target.value));
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter