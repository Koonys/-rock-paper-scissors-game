import React from 'react';


const Box = (props) => {
    let result;
    if(props.title==="COMPUTER" && props.result !== "TIE" && props.result !==""){
        result = props.result === "WIN" ? "LOSE" : "WIN";
    }else {
        result = props.result;
    }
    return (
        <div className={`box ${result.toLowerCase()}`}>
            <h1>{props.title}</h1>
            <img className="item-img" src={props.item && props.item.img} alt=""/>
            <h2>{result}</h2>
        </div>
    );
};

export default Box;