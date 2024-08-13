import './App.css';
import Box from "./component/Box";
import {useState} from "react";


const choice = {
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

const image1 ={
    img: "https://artmugfile2.cafe24.com/image/goods_img1/7204.jpg?ver=1673481683"
}
const image2 = {
    img: "https://image.idus.com/image/files/dac2455cde48431f9654fd18571867bb.jpg"
}
function App() {

    const [userSelect, setUserSelect] = useState(image1);
    const [computerSelect, setComputerSelect] = useState(image2);
    const [result,setResult] = useState("");
    const [conter, setCounter] = useState(0);
    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);
        setResult(judgement(choice[userChoice],computerChoice));
        if(judgement(choice[userChoice],computerChoice)==="WIN"){
            setCounter(conter+1);
        }
    };

    const reset = () =>{
        setCounter(0);
        setUserSelect(image1);
        setComputerSelect(image2);
        setResult("");
    }

    const judgement = (user,computer)=>{
        if(user.name === computer.name){
            return "TIE"
        }else if(user.name==="Rock"){
            return computer.name === "Scissors"?"WIN":"LOSE";
        }else if(user.name==="Scissors"){
            return computer.name === "Paper"?"WIN":"LOSE";
        }else if(user.name==="Paper"){
            return computer.name === "Rock"?"WIN":"LOSE";
        }
    }
    const randomChoice = () =>{
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random()*itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    }
  return (
      <div>
          <div className="app">
              <Box title="YOU" item={userSelect} result={result}></Box>
              <Box title="COMPUTER" item={computerSelect} result={result}></Box>
          </div>
          <div className="app">
              <button onClick={()=>play("scissors")}>가위</button>
              <button onClick={()=>play("rock")}>바위</button>
              <button onClick={()=>play("paper")}>보</button>
          </div>
          <div className="app">
              <span>{result === ""? "Start" : result}</span>
          </div>
          <div className="app">
              <span>이긴 횟수 : {conter}</span>
              <button onClick={reset}>리셋</button>
          </div>
      </div>
  );
}

export default App;
