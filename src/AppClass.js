import React, {Component} from 'react';
import BoxClass from "./component/BoxClass";

class AppClass extends Component {

    choice = {
        scissors:{
            name: "Scissors",
            img: "https://img.freepik.com/premium-vector/cute-funny-scissors-character_464314-1809.jpg"
        },
        rock:{
            name: "Rock",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQki-ULwaW4rRZz8SLVzL71jiCi2lYyx06ZKLSw4GZHHATZv90Q7di7ftglMHbtbCvj-vY&usqp=CAU"
        },
        paper:{
            name: "Paper",
            img: "https://images.freeimages.com/cme/images/istock/previews/2812/28128664-cartoon-paper-letter-character.jpg"
        }
    }

    image1 ={
        img: "https://artmugfile2.cafe24.com/image/goods_img1/7204.jpg?ver=1673481683"
    }
    image2 = {
        img: "https://image.idus.com/image/files/dac2455cde48431f9654fd18571867bb.jpg"
    }
    constructor(props) {
        super(props);
        this.state = {
            userSelect: this.image1,
            computerSelect: this.image2,
            result: "",
            counter: 0
        }
    }

    play = (userChoice)=>{
        let computerChoice = this.randomChoice();
        console.log(computerChoice);
        this.setState({
            userSelect: this.choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(this.choice[userChoice],computerChoice),
            counter: this.state.result === "WIN" ? this.state.counter+1:this.state.counter
        })
    }

    reset = () => {
        this.setState({
            counter: 0,
            userSelect: this.image1,
            computerSelect: this.image2,
            result: ""
        })
    }

    judgement = (user,computer) => {
        if(user.name === computer.name){
            return "TIE"
        }else if(user.name === "Rock"){
            return computer.name === "Scissors" ? "WIN" : "LOSE";
        }else if(user.name === "Scissors"){
            return computer.name === "Paper" ? "WIN" : "LOSE";
        }else{
            return computer.name === "Rock" ? "WIN" : "LOSE";
        }
    }

    randomChoice = () => {
        const itemArray = Object.keys(this.choice);
        const randomItem = Math.floor(Math.random()*itemArray.length);
        const final = itemArray[randomItem];
        return this.choice[final];
    }

    render() {
        return (
            <div>
                <div className="app">
                    <BoxClass title="YOU" item={this.state.userSelect} result ={this.state.result}></BoxClass>
                    <BoxClass title="COMPUTER" item={this.state.computerSelect} result = {this.state.result}></BoxClass>
                </div>
                <div className="app">
                    <button onClick={() => this.play("scissors")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>
                <div className="app">
                    <span>
                        {this.state.result=== "" ? "Start" : this.state.result}
                    </span>
                </div>
                <div className="app">
                    <span>
                        이긴 횟수 : {this.state.counter}
                    </span>
                    <button onClick={this.reset}>리셋</button>
                </div>
            </div>
        );
    }
}

export default AppClass;