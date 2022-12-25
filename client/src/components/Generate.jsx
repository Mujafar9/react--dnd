import React, { useState } from "react";


const Generate = () => {

    const genetare = ((req,res)=>{
        fetch("C:\Users\MUZ_K\Downloads\react-dnd-main\client\src\data\index.js");
    })

    return (
        <div className={"generate"}>
            <button className="generate" onclick={genetare}>Generate</button>
        </div>
    );
};

export default Generate;