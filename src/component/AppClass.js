import React, {Component} from 'react';

class AppClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter2: 0,
            num:1,
            value: 0
        }
    }

    increase = () => {
        this.setState({counter2:this.state.counter2 + 1})
    }
    render() {
        return (
            <div>
                <div>state:{this.state.counter2}</div>
                <button onClick={this.increase}>클릭!</button>
            </div>
        );
    }
}

export default AppClass;