import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StatFunc from "../Stat/StatFunc";

// data [25,17,40,63,32,54,70,54]
// Mean:43.5
// Median:47
// Mode:25,54

describe("Stat component", () => {
  test("Update input and count mean", () => {
    render(<StatFunc />);

    // Make sure mean starts out at 0
    const meanInput = screen.getByRole("mean-input");
    expect(meanInput).toHaveTextContent("");

    userEvent.type(meanInput, "25,17,40,63,32,54,70,54");
    expect(meanInput).toHaveDisplayValue("25,17,40,63,32,54,70,54");

    const meanOutput = screen.getByPlaceholderText("mean-output");
    expect(meanOutput).toHaveTextContent("44.375");
  });

  test("Update input and count median", () => {
    render(<StatFunc />);

    // Make sure median starts out at 0
    const medianInput = screen.getByRole("median-input");
    expect(medianInput).toHaveTextContent("");

    userEvent.type(medianInput, "25,17,40,63,32,54,70,54");
    expect(medianInput).toHaveDisplayValue("25,17,40,63,32,54,70,54");

    const medianOutput = screen.getByPlaceholderText("median-output");
    expect(medianOutput).toHaveTextContent("47");
  });

  test("Update input and count mode", () => {
    render(<StatFunc />);

    // Make sure mode starts out at 0
    const modeInput = screen.getByRole("mode-input");
    expect(modeInput).toHaveTextContent("");

    userEvent.type(modeInput, "25,17,40,63,32,54,70,54");
    expect(modeInput).toHaveDisplayValue("25,17,40,63,32,54,70,54");

    const modeOutput = screen.getByPlaceholderText("mode-output");
    // expect(modeOutput).toHaveTextContent("25.54");
  });
});
