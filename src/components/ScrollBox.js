import React from 'react';

const ScrollBox = (props) => {
    return (
        <div className='box' style={{height:'800px'}}>
            {props.children}
        </div>
    )
}

export default ScrollBox;