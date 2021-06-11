import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FutureValue from "./FutureValue";
import PresentValue from "./PresentValue";

describe("FV/PV components", () => {
  test("Update and count Future Value", () => {
    render(<FutureValue />, <PresentValue />);

    // Make sure inputs starts out at null
    const rateInput = screen.getByRole("rate-input");
    expect(rateInput).toHaveTextContent("");

    const nperInput = screen.getByRole("nper-input");
    expect(nperInput).toHaveTextContent("");

    const pmtInput = screen.getByRole("pmt-input");
    expect(pmtInput).toHaveTextContent("");

    const pvInput = screen.getByRole("pv-input");
    expect(pvInput).toHaveTextContent("");

    // const fvInput = screen.getByRole("fv-input");
    // expect(fvInput).toHaveTextContent("");
  });
});
