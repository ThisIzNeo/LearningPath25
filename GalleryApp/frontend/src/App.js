import React from "react";
import './index.css';
import { Header } from "./components/Header";
import { Interface } from "./components/Interface";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";


const App = () => {
  return (
    <div className="w-full min-h-screen">
        <Header />
        <Interface />
        <Gallery/>
        <Footer />
    </div>
  );
};

export default App;
