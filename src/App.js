import "./styles.css";

import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data.js";

export default function App() {
  const cardSection = data.map((x) => <Card key={x.id} items={x} />);
  return (
    <>
      <Navbar />
      {cardSection}
      {/*<Card />*/}
    </>
  );
}
