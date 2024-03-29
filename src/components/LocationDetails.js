import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

function LocationDetails(props) {
  const { city, country } = props;
  return <h1>{`${city}, ${country}`}</h1>;
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
