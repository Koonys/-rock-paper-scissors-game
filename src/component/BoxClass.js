import React, {Component} from 'react';

class BoxClass extends Component {

    constructor() {
        super();
        this.result = "";
    }

    getResult = ()=>{
        if(
            this.props.title === "COMPUTER" &&
            this.props.result !== "TIE" &&
            this.props.result !== ""
        ){
            this.result = this.props.result === "WIN" ? "LOSE" : "WIN";
        }else{
            this.result = this.props.result;
        }
    }
    render() {

        this.getResult();

        return (
            <div>
                <div className={`box ${this.result.toLowerCase()}`}>
                    <h1>{this.props.title}</h1>
                    <img className="item-img" src={this.props.item && this.props.item.img} alt=""/>
                </div>
            </div>
        );
    }
}

export default BoxClass;