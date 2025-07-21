import React from "react";

class NewUserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
        console.log(this.props.name, "New Child Constuctor")
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        console.log(this.props.name, "New Child componentDidMount")
    }

    render() {
        console.log(this.props.name, "New Child render")
        return (
            <div>
                <h2>Hey Im class component</h2>
                <p>{this.props.name}</p>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => this.handleClick()}>Increment</button>
            </div>
        )
    }
}

export default NewUserClass