import React from 'react';
import { connect } from 'react-redux';
import { setFilter, unsetFilter } from '../reducers/filterReducer';

const Filter = (props) => {

  const handleChange = (event) => {
    if(event.target.value === ''){
      return props.unsetFilter();
    }
    return props.setFilter(event.target.value);
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

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => {
    dispatch(setFilter(filter));
  },
  unsetFilter: () => {
    dispatch(unsetFilter())
  }
})

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;