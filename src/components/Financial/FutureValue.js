import React, { useState } from "react";
import conv_number from "./ConvNumber";

function FutureValue() {
  const [rate, setRate] = useState();
  const [nper, setNper] = useState();
  const [pmt, setPmt] = useState();
  const [pv, setPv] = useState();
  let [fvValue, setFvValue] = useState();

  if (nper == 0) return 0;

  if (rate == 0) {
    fvValue = -(pv + pmt * nper);
  } else {
    let x = Math.pow(1 + rate, -nper);
    fvValue = -(-pmt + x * pmt + rate * x * pv) / rate;
  }

  return (
    (fvValue = conv_number(fvValue, 2)),
    (
      <div>
        <hr />
        <form>
          <h5>Future Value</h5>
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
          <h5>[pv]</h5>
          <input
            role="pv-input"
            name="pv"
            onChange={(e) => setPv(e.target.value)}
          ></input>
          <p placeholder="fv-output">{fvValue}</p>
        </form>
      </div>
    )
  );
}

export default FutureValue;
