import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='ma2 pa3 tc '>
      <input
        className='pa3 b--none bg-lightest-blue br-pill'
        type='search'
        placeholder='Search Food'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;