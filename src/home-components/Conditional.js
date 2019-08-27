import React from 'react'

function Conditional(props) {
        return (
            <div>
            <h1>{props.isLoading ? "Loading..." : "Some cool stuff about conditional rendering"}</h1>
            </div>
        )
}
export default Conditional