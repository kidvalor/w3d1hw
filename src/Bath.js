import React from 'react';

function Bath(props) {
    
        return (
            <div className="bath" id={`bath-${props.name}`}>
              <h3>{props.name} Bath</h3>  
            </div>
        );
    
}

export default Bath;