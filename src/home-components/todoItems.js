import React from "react"
import "../MyApp.css"

function TodoItems(props) {
        return (
            <div className="todo-items">
                <input type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
                />
                <p>{props.item.text}</p>
            </div>
        ); 
}

export default TodoItems;