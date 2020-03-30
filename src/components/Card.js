import React from 'react';

const Card = function({name, email, id}) {
    return (
        <div className='tc bg-light-blue pa3 ma2 grow dib br3 bw3 shadow-5'>
            <img alt='text' width='220' height='220' src={`https://flathash.com/${id}`}/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}

export default Card;