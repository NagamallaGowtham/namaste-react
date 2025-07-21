import { Component } from "react"
import UserClass from "./UserClass"
import NewUserClass from "./NewUserClass"


class About extends Component {
    constructor(props) {
      super(props)
    
        console.log("Parent Constuctor")
    }

    componentDidMount() {
        console.log("Parent componentDidMount")
    }

    render() {
        console.log("Patent Render")
        return (
            <div>
                <h2>About the page</h2>

                <UserClass name={"Child 1"} />
                <UserClass name={"Child 2"} />
                <NewUserClass name={"New Child 1"} />
            </div>
        )
    }
}

export default About