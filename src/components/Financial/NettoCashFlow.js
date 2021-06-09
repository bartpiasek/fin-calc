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
          role="interest-input"
          placeholder="odsetki"
          onChange={(e) => setInterest(e.target.value)}
        ></input>
        <input
          role="taxrate-input"
          placeholder="stopa podatkowa"
          onChange={(e) => setTaxRate(e.target.value)}
        ></input>
        <p role="taxshield-output" name="taxshield">
          Tarcza podatkowa: {taxShield} PLN
        </p>
      </form>
      <hr />
      <form>
        <h5>NCF - Netto Cash Flow</h5>
        <input
          role="operationcashflow-input"
          placeholder="przepływ z działalności operacyjnej"
          onChange={(e) => setOperationCashFlow(e.target.value)}
        ></input>
        <input
          role="investcashflow-input"
          placeholder="przepływ z działalności inwestycyjnej"
          onChange={(e) => setInvestCashFlow(e.target.value)}
        ></input>
        <p role="nettocashflow-output">NCF: {NettoCashFlow} PLN</p>
      </form>
    </div>
  );
}

export default NettoCashFlow;
