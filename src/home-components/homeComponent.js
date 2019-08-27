import React from "react";
import Homepage from "./main-component/homepage";
import Header from "./header-component/header.";
import Footer from "./footer-component/footer";
import '../MyApp.css';

  class HomeComponent extends React.Component {
    render() {
      return (
        <div className="body">
            <Header />
            <Homepage />
            <Footer />
        </div>
      );
    }
  }
  
  export default HomeComponent;