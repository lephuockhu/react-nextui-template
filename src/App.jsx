// import { useState } from "react";
import "./App.css";
import { Avatar, Badge } from "@nextui-org/react";

import img from "@/assets/react.svg"

function App() {
  return (
    <Badge content="5" color="primary">
      <Avatar
        radius="md"
        size="lg"
        src={img}
      />
    </Badge>
  );
}

export default App;
