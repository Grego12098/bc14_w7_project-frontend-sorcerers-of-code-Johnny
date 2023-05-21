import LogoForPages from "./LogoForPages";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
describe("LogoForPages", () => {
  it("renders the logo correctly", () => {
    const { getByAltText } = render(<LogoForPages />);
    const logo = getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain("logo.png");
  });
});