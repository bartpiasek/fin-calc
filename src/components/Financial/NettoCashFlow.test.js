import { render, screen } from "@testing-library/react";
import NettoCashFlow from "./NettoCashFlow";

test("Update interest when interest change", () => {
  render(<NettoCashFlow />);

  // Make sure interest starts out at 0
  const interestInput = screen.getByPlaceholderText("odsetki");
  expect(interestInput).toEqual("0");
});
