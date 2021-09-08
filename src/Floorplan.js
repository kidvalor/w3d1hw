import React from 'react';
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath"


function Floorplan(){
        return (
            <div className="floorplan">
                <Bedroom number="1"/>
                <Kitchen />
                <Bath name ="Full"/>
                <Bedroom number ="2"/>
                <LivingRoom />
                <Bath name ="Half"/>
                <Bedroom number ="3"/>
            </div>
        );
    }


export default Floorplan;