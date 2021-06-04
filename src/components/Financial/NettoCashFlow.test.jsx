import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NettoCashFlow from "./NettoCashFlow";

describe("NCF component", () => {
  test("Update interest/taxrate when interest/taxrate change and count taxShield", () => {
    render(<NettoCashFlow />);

    // Make sure interest starts out at 0
    const interestInput = screen.getByRole("input", { name: "interest" });
    expect(interestInput);
    // Make sure tax rate starts out at 0
    const taxRateInput = screen.getByRole("input", { name: "taxrate" });
    expect(taxRateInput);

    // Update interest to 50 and tax rate to 20 - check taxShield
    const taxShield = screen.getByRole("paragraph", { name: "taxshield" });

    userEvent.type(interestInput, "50");
    userEvent.type(taxRateInput, "20");

    // expect(taxShield).toHaveDisplayValue("-10");
    expect(taxShield).toHaveTextContent("-10");
  });

  test("NCF form updates and count NFC properly", () => {
    // const NettoCashFlow = screen.getByRole("cell", )
    // Update taxrate to 20, interest to 5000
    // expect(NettoCashFlow).toHaveTextContent("")
  });
});
