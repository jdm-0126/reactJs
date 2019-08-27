import React from 'react'

class StateTest extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedin: false
        }
    }
    render(){
        // let wordDisplay
        // if (this.state.isLoggedin === true) {
        //     wordDisplay = "in"
        // } else {
        //     wordDisplay = "out"
        // }
        return (
            <div>
                <h1>You are currently logged {this.state.isLoggedin ? 'in' : 'out'}</h1>
            </div>
        )
    }
}

export default StateTest