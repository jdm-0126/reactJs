import React from 'react'
import StateTest from './StateTest';

class ChildComponent extends React.Component {
    render(){
        return (
            <div>
                <h6><StateTest/>{this.props.answer}</h6>
            </div>
        )
    }
}
export default ChildComponent 