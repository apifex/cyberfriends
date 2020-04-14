import React from 'react';

const SearchBox = ({ searchListener }) => {
    return (
        <div>
            <h1 className= 'f1'>Cyber Friends</h1>
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