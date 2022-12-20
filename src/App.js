import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />

        <Home />

        <Footer />
      </div>
    </div>
  );
}

export default App;
