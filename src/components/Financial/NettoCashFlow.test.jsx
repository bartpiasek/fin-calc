import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NettoCashFlow from "./NettoCashFlow";

describe("NCF component", () => {
  test("Update interest when interest change", () => {
    render(<NettoCashFlow />);

    // Make sure interest starts out at 0
    const interestInput = screen.getByPlaceholderText("odsetki");
    expect(interestInput);
    // Make sure tax rate starts out at 0
    const taxRateInput = screen.getByPlaceholderText("stopa podatkowa");
    expect(taxRateInput);

    // Update interest to 50 and tax rate to 20 - check taxShield
    const taxShield = screen.getByRole("alert");

    userEvent.type(interestInput, "50");
    userEvent.type(taxRateInput, "20");

    expect(taxShield).toHaveTextContent("-10");
  });

  test("NCF form updates and count NFC properly", () => {
    // const NettoCashFlow = screen.q
    // Update taxrate to 20, interest to 5000
    // expect(NettoCashFlow).toHaveTextContent("")
  });
});
