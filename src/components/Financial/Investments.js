import React, { useState } from "react";

function Investments() {
  const [nettoCashflow, setNettoCashflow] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [numOfPeriods, setNumOfPeriods] = useState("");

  const [rate, setRate] = useState();
  const [nper, setNper] = useState();
  const [pmt, setPmt] = useState();
  const [fv, setFv] = useState();

  function NetPresentValue() {}

  function PresentValue(rate, nper, pmt, fv) {
    // const rate = parseFloat(rate);
    // const nper = parseFloat(nper);
    // const pmt = parseFloat(pmt);
    // const fv = parseFloat(fv);

    if (nper == 0) return 0;

    if (rate == 0) {
      let pv_value = -(fv + pmt * nper);
    } else {
      let x = Math.pow(1 + rate, -nper);
      let y = Math.pow(1 + rate, nper);
      let pv_value = -(x * (fv * rate - pmt + y * pmt)) / rate;
    }
    return <div>{/* <p>{pv_value}</p> */}</div>;
  }

  function FutureValue() {}

  return (
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
        {/* <p placeholder="pv-output">PresentValue()</p> */}
      </form>
    </div>
  );
}

export default Investments;
