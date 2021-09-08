import React from 'react';

function Bedroom(props) {
    
        return (
            <div className="bedroom" id={`bed-${props.number}`}>
              <h3>Bedroom {props.number}</h3>  
            </div>
        );
    
}

export default Bedroom;