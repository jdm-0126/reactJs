import React from "react"
import '../../MyApp.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "Blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <form className="body">
              <div className="main">
                <card className="">
                  <div className="">
                    <input type="text"
                      value={this.state.firstName}
                      name="firstName" placeholder="Some text" onChange={this.handleChange} />
                    <input type="text"
                      value={this.state.lastName}
                      name="lastName" placeholder="Some text" onChange={this.handleChange} />
                    <br />

                    <br />
                    <input
                      type="checkbox"
                      name="isFriendly"
                      checked={this.state.isFriendly}
                      value={this.state.isFriendly}
                      onChange={this.handleChange} />is friendly?
          <br />
                    <label>
                      <input type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange} />Male
          </label>
                    <br />
                    <label>
                      <input type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange} />Female
          </label>
                    <br />
                    Your favorite color <select
                      value={this.state.favColor}
                      onChange={this.handleChange}
                      name="favColor">
                      <option value="Blue">Blue</option>
                      <option value="Yellow">Yellow</option>
                      <option value="Red">Red</option>
                      <option value="Orange">Orange</option>
                      <option value="Green">Green</option>
                    </select>
                  </div>
                </card>
              </div>
              <h3>{this.state.firstName} {this.state.lastName}</h3>
              <h3>You are {this.state.gender}</h3>
              <h3>You're favorite color is {this.state.favColor}</h3>

              <button>Submit</button>
            </form>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}


// function handleClick() {
//   console.log("I was clicked")
// } 

// function Homepage() {
//       return (
//         <div className="contacts">
//           <img onMouseOver={() => {console.log("Hovered")}} src="https://www.fillmurray.com/200/100" alt=""/>
//           <br />
//           <br /><br />
//           <button onClick={handleClick}>Click me</button>
//         </div>
//       ) 
//     }
// class Homepage extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }

//   render(){
//       const todoItems = this.state.todos.map(item => <TodoItems key={item.id} todosData={item}/>)

//       return (
//           <div className="contacts">
//             { todoItems }
//           </div>
//       )
//   }
// }

//  <h1>You are logged {this.state.prevState ? 'in' : 'out'}</h1>

// const todoComponent = todosData.map(item => <TodoItems key={item.id} todosData={item}/>)
// return (
//   <div className="contacts">
//     { todoComponent }
//   </div>
// )
// const productComponent = products.map(prod => <Product key={prod.id} name={prod.name} price={prod.price} description={prod.description} />)
//     return (
//       <div className="contacts">
//         {productComponent}
//       </div>
//     )

// function Homepage() {
// const firstName = "Bob";
// const lastName = "Zirol"
// const date = new Date()
// const hours = date.getHours()
// let timeOfDay

// if (hours < 12){
//     timeOfDay = "morning"
// } else if (hours >= 12) {
//     timeOfDay = "afternoon"
// } else {
//     timeOfDay = "night"
// }

// }


//  class Homepage extends React.Component {
//   constructor() {
//     super()
//     this.state ={
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//    this.setState(prevState => {
//      const updateTodos = prevState.todos.map(todo => {
//        if(todo.id === id){
//          todo.completed = !todo.completed
//        }
//        return todo
//      })
//      return {
//        todos: updateTodos
//      }
//    })
//   }

//   render() {
//     const todoItems =this.state.todos.map(item => <TodoItems key={item.id} item={item} handleChange={this.handleChange}/>)

//     return (
//       <div>
//         {todoItems}
//     </div>
//     )    
//   }
// }



// login() {
//   this.setState(prevState => {
//     return {
//       isLogged: !prevState.isLogged
//     }
//   })

// }

// render() {
//   let buttonText = this.state.isLogged ? 'LOG OUT' : 'LOG IN'
//   return (
//     <div>
//       <h1>You are Logged{this.state.isLogged ? ' in' : ' out'}</h1>
//       <div>
//       <button onClick={this.login}>{buttonText}</button>
//       </div>
//     </div>
//   )    
// }
export default Homepage