import React from 'react';
import './Number.css';

function Number(props) {
    return (
        <div className='number'>
            {props.number}
        </div>
    );
}

export default Number;