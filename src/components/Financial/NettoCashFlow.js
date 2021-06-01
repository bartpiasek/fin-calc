import React, { useState } from "react";
import "../classes.css";

function NettoCashFlow() {
  const [taxRate, setTaxRate] = useState(0);
  const [interest, setInterest] = useState(0);

  const [OperationCashFlow, setOperationCashFlow] = useState(0);
  const [InvestCashFlow, setInvestCashFlow] = useState(0);

  function opposite(num) {
    return -num;
  }

  const taxShield = opposite((interest / 100) * taxRate);
  const NettoCashFlow = OperationCashFlow - InvestCashFlow + taxShield;
  return (
    <div>
      <hr />
      <h5>Tarcza podatkowa</h5>
      <form>
        <input
          placeholder="odsetki"
          onChange={(e) => setInterest(e.target.value)}
        ></input>
        <input
          placeholder="stopa podatkowa"
          onChange={(e) => setTaxRate(e.target.value)}
        ></input>
      </form>

      <p role="article">Tarcza podatkowa: {taxShield}</p>
      <hr />
      <h5>NCF - Netto Cash Flow</h5>
      <form>
        <input
          placeholder="przepływ z działalności operacyjnej"
          onChange={(e) => setOperationCashFlow(e.target.value)}
        ></input>
        <input
          placeholder="przepływ z działalności inwestycyjnej"
          onChange={(e) => setInvestCashFlow(e.target.value)}
        ></input>
      </form>
      <p>NCF: {NettoCashFlow}</p>
    </div>
  );
}

export default NettoCashFlow;
