import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, humidity, wind, temperature } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__humidity">{humidity}%</div>
      <div className="forecast-details__wind-speed">{wind.speed}</div>
      <div className="forecast-details__wind-direction">{wind.direction}</div>
      <div className="forecast-details__max-temp">{temperature.max}&deg;C</div>
      <div className="forecast-details__min-temp">{temperature.min}&deg;C</div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
