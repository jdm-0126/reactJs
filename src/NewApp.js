import React from 'react';
import './MyApp.css';


class App extends React.Component {
  render() {
    return (
      <div className="contacts">
  
        <div className="contact-card">
          <img alt="" src="http://placekitten.com/300/200"/>
          <h3>Mr. Whiskerson</h3>
          <p>Phone: (212) 555-2345</p>
          <p>Email: mr.whizkaz@catnap.meow</p>
        </div>
  
        <div className="contact-card">
          <img alt=""  src="http://placekitten.com/300/200"/>
          <h3>Mr. Whiskerson</h3>
          <p>Phone: (212) 555-2345</p>
          <p>Email: mr.whizkaz@catnap.meow</p>
        </div>
  
        <div className="contact-card">
          <img alt=""  src="http://placekitten.com/400/200"/>
          <h3>Mr. Whiskerson</h3>
          <p>Phone: (212) 555-2345</p>
          <p>Email: mr.whizkaz@catnap.meow</p>
        </div>
  
        <div className="contact-card">
          <img alt="" src="http://placekitten.com/200/100"/>
          <h3>Mr. Whiskerson</h3>
          <p>Phone: (212) 555-2345</p>
          <p>Email: mr.whizkaz@catnap.meow</p>
        </div>
      </div>
    );
  }
}

export default App;
