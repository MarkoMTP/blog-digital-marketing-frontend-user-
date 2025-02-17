import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";

import App from "../component/App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
