import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    forecast: {
      date: 1111111,
      humidity: 10,
      temperature: {
        min: 12,
        max: 18,
      },
      wind: {
        speed: 24,
        direction: "n",
      },
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails forecast={validProps.forecast} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(
      <ForecastDetails forecast={validProps.forecast} />
    );

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("10%")).toHaveClass("forecast-details__humidity");
    expect(getByText("12°C")).toHaveClass("forecast-details__min-temp");
    expect(getByText("18°C")).toHaveClass("forecast-details__max-temp");
    expect(getByText("24")).toHaveClass("forecast-details__wind-speed");
    expect(getByText("n")).toHaveClass("forecast-details__wind-direction");
  });
});
