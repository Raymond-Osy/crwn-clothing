import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./WithSpinner.styles";

// This is a HOC that renders the the spinner if the is:Loading is true or false
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;