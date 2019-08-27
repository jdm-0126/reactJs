import React from "react"
import "../MyApp.css"

class ContactCard extends React.Component {
    render(props) {
        return (
            <div>
                <div className="contact-card">
                    <img src={this.props.imgUrl} alt=""/>
                    <h3>{this.props.name}</h3>
                    <p>Phone: {this.props.phone}</p>
                    <p>Email: {this.props.email}</p>
                </div>
            </div>
        )
    }
}

export default ContactCard;