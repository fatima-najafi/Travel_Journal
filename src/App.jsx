import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "../src/components/data";
function App() {
  const cards = data.map((item) => {
    return (
      <Card
      key={item.id}
      item={item}
  />
    )
  });
  return (
    <>
      <Navbar />
      {cards}
      <Footer />
    </>
  );
}

export default App;
