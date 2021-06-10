import React, { useState } from "react";
import conv_number from "./ConvNumber";

function PresentValue() {
  const [rate, setRate] = useState();
  const [nper, setNper] = useState();
  const [pmt, setPmt] = useState();
  const [fv, setFv] = useState();
  let [pvValue, setPvValue] = useState();

  if (nper == 0) return 0;

  if (rate == 0) {
    pvValue = -(fv + pmt * nper);
  } else {
    let x = Math.pow(1 + rate, -nper);
    let y = Math.pow(1 + rate, nper);
    pvValue = -(x * (fv * rate - pmt + y * pmt)) / rate;
  }

  return (
    (pvValue = conv_number(pvValue, 2)),
    (
      <div>
        <hr />
        <form>
          <h5>Present Value</h5>
          <h5> [rate]</h5>
          <input
            role="rate-input"
            name="rate"
            onChange={(e) => setRate(e.target.value)}
          ></input>
          <h5>[nper]</h5>
          <input
            role="nper-input"
            name="nper"
            onChange={(e) => setNper(e.target.value)}
          ></input>
          <h5>[pmt]</h5>
          <input
            role="pmt-input"
            name="pmt"
            onChange={(e) => setPmt(e.target.value)}
          ></input>
          <h5>[fv]</h5>
          <input
            role="fv-input"
            name="fv"
            onChange={(e) => setFv(e.target.value)}
          ></input>
          <p placeholder="pv-output">{pvValue}</p>
        </form>
      </div>
    )
  );
}

export default PresentValue;
