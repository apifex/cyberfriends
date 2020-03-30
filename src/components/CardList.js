import React from 'react';
import Card from './Card';

const CardList = ({ friends }) => {
    return (
        <div>
            {friends.map((_user, i) => {
                return <Card 
                    key= {friends[i].id} 
                    name={friends[i].name} 
                    email={friends[i].email} 
                    id={friends[i].id}/>
                })
            }
        </div>
    )
}

export default CardList;