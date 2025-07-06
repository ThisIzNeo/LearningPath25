import React, {useEffect} from "react";
import './index.css';
import { Header } from "./components/Header";
import { Interface } from "./components/Interface";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { useDispatch } from "react-redux";
import {getPosts} from "./actions/posts"


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
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
