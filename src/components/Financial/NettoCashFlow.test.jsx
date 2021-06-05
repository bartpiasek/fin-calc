import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NettoCashFlow from "./NettoCashFlow";

describe("NCF component", () => {
  test("Update interest/taxrate when interest/taxrate change and count taxShield", () => {
    render(<NettoCashFlow />);

    // Make sure interest starts out at 0
    const interestInput = screen.getByRole("interest-input");
    expect(interestInput);
    // Make sure tax rate starts out at 0
    const taxRateInput = screen.getByRole("taxrate-input");
    expect(taxRateInput);

    // Update interest to 50 and tax rate to 20 - check taxShield
    const taxShield = screen.getByRole("taxshield-output");

    userEvent.type(interestInput, "50");
    userEvent.type(taxRateInput, "20");

    expect(taxShield).toHaveTextContent("-10");
  });

  test("NCF form updates and count NFC properly", () => {
    // const NettoCashFlow = screen.getByRole("cell", )
    // Update taxrate to 20, interest to 5000
    // expect(NettoCashFlow).toHaveTextContent("")
    // Data: przepływ z działalności operacyjnej = +1500
    // przepływ z działalności inwestycyjnej = -300
    // odsetki = 50
    // stopa = 20%
    // NCF = 1190
    const operationCashFlow = screen.getByRole("operationcashflow-input");
    const investCashFlow = screen.getByRole("investcashflow-input");
    const nettoCashFlowOutput = screen.getByRole("nettocashflow-output");
    // Make sure operationCashFlow starts out at 0
    // Make sure investCashFlow starts out at 0
  });
});
