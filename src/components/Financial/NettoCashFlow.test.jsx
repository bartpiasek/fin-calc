import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NettoCashFlow from "./NettoCashFlow";

describe("NCF component", () => {
  // const NettoCashFlow = screen.getByRole("cell", )
  // Update taxrate to 20, interest to 5000
  // expect(NettoCashFlow).toHaveTextContent("")
  // Data: przepływ z działalności operacyjnej = +1500
  // przepływ z działalności inwestycyjnej = -300
  // odsetki = 50
  // stopa = 20%
  // NCF = 1190

  test("Update interest/taxrate when interest/taxrate change and count taxShield", () => {
    render(<NettoCashFlow />);

    // Make sure interest starts out at 0
    const interestInput = screen.getByRole("interest-input");
    expect(interestInput).toHaveTextContent("");

    // Make sure tax rate starts out at 0
    const taxRateInput = screen.getByRole("taxrate-input");
    expect(taxRateInput).toHaveTextContent("");

    // Update interest to 50 and tax rate to 20 - check taxShield
    const taxShield = screen.getByRole("taxshield-output");

    userEvent.type(interestInput, "50");
    userEvent.type(taxRateInput, "20");

    expect(taxShield).toHaveTextContent("-10");
  });

  test("NCF form updates and count NFC properly", () => {
    render(<NettoCashFlow />);

    const interestInput = screen.getByRole("interest-input");
    const taxRateInput = screen.getByRole("taxrate-input");

    // Make sure operationCashFlow starts out at 0
    const operationCashFlowInput = screen.getByRole("operationcashflow-input");
    expect(operationCashFlowInput).toHaveTextContent("");

    // Make sure investCashFlow starts out at 0
    const investCashFlowInput = screen.getByRole("investcashflow-input");
    expect(investCashFlowInput).toHaveTextContent("");

    // Update invest cashflow,operation cashflow and tax shield
    userEvent.type(interestInput, "50");
    userEvent.type(taxRateInput, "20");
    userEvent.type(operationCashFlowInput, "1500");
    userEvent.type(investCashFlowInput, "300");

    const nettoCashFlowOutput = screen.getByRole("nettocashflow-output");
    expect(nettoCashFlowOutput).toHaveTextContent("1190");
  });
});
