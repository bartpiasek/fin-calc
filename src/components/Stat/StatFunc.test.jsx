import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StatFunc from "../Stat/StatFunc";

// data [25,17,40,63,32,54,70,54]
// Mean:43.5
// Median:47
// Mode:25,54

describe("Stat component", () => {
  test("Update input and count mean", () => {
    render(<StatFunc />);
    // Make sure mean,median,mode starts out at 0
    const meanInput = screen.getByRole("input", { name: "mean" });
    expect(meanInput).toBeNull();

    userEvent.type(meanInput, {
      target: { value: "25,17,40,63,32,54,70,54" },
    });
    expect(meanInput).toBe("44.375");
  });

  //   test("Update input and count median", () => {
  //     render(<StatFunc />);
  //     // Make sure mean,median,mode starts out at 0
  //     const medianInput = screen.queryByRole("input", { name: "median" });
  //     expect(medianInput).toHaveTextContent("0");
  //   });

  //   test("Update input and count mode", () => {
  //     render(<StatFunc />);
  //     // Make sure mean,median,mode starts out at 0
  //     const modeInput = screen.queryByRole("input", { name: "mode" });
  //     expect(modeInput).toHaveTextContent("0");
  //   });
});
