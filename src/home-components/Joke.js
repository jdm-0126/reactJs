import React from 'react'

function Joke(props) {
        return (
            <div>
                <h3>Question: {props.question}</h3>
                <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
                <hr />
            </div>
        )
}

export default Joke