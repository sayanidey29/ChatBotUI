import { useState } from "react";
import "./App.css";
// import RoutingPage from "./pages/RoutingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  return (
    <div className="app">
      {/*<RoutingPage/>; */}
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
