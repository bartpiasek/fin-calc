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
      <form>
        <h5>Tarcza podatkowa</h5>
        <input
          name="interest"
          placeholder="odsetki"
          onChange={(e) => setInterest(e.target.value)}
        ></input>
        <input
          name="taxrate"
          placeholder="stopa podatkowa"
          onChange={(e) => setTaxRate(e.target.value)}
        ></input>
        <p name="taxshield">Tarcza podatkowa: {taxShield}</p>
      </form>
      <hr />
      <form>
        <h5>NCF - Netto Cash Flow</h5>
        <input
          name="operationcashflow"
          placeholder="przepływ z działalności operacyjnej"
          onChange={(e) => setOperationCashFlow(e.target.value)}
        ></input>
        <input
          name="investcashflow"
          placeholder="przepływ z działalności inwestycyjnej"
          onChange={(e) => setInvestCashFlow(e.target.value)}
        ></input>
        <p>NCF: {NettoCashFlow}</p>
      </form>
    </div>
  );
}

export default NettoCashFlow;
