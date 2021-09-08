import React from 'react';
import Oven from "./Oven";
import Sink from "./Sink"


function Kitchen() {
        return (
            <div>
               <h3>Kitchen</h3>
               <Oven />
               <Sink />
            </div>
        );
    }


export default Kitchen;