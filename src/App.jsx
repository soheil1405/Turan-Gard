import React from "react";
import Header from "./components/Header";
import "./font.css";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Packages from "./components/Packages";
import BestTrip from "./components/BestTrip";
import Blogs from "./components/Blogs";
import Records from "./components/Records";
import Footer from "./components/Footer";
import Develop from "./components/Develop";

const App = () => {
  return (
    <div className="font-sans font">
      <Navbar />
      <Header />
      <Search />
      <Packages />
      <BestTrip />
      <Blogs />
      <Records />
      <Footer />
      <Develop />
    </div>
  );
};

export default App;
