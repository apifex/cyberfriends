import React from 'react';

const SearchBox = ({ searchListener }) => {
    return (
        <div className='pa2'>
            <input 
                className='bg-light-blue b--light-blue pa3 ba br2'
                type='search' 
                placeholder='search friends'
                onChange = { searchListener }
                />
        </div>
       
    )
}



export default SearchBox;