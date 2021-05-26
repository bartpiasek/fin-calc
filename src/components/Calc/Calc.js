import Button from "react-bootstrap/Button";
import "../../components/classes.css";
import React, { useState } from "react";

function Calc() {
  const [input, setInput] = useState("");
  const calculationButtons = [];

  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "00", "000", ".", "%"].forEach((item) => {
    calculationButtons.push(
      <Button
        variant="flat"
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </Button>
    );
  });
  return (
    <div className="wrapper">
      <div></div>
      <div className="digits flex">{calculationButtons}</div>
    </div>
  );
}

export default Calc;
