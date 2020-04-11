import React from "react";
import PropTypes from "prop-types";

function Congrats(props) {
  const { success } = props;

  const getCongratsMessage = (
    <div data-test="congrats-message">congratulations</div>
  );

  return (
    <div data-test="component-congrats">
      {success ? getCongratsMessage : ""}
    </div>
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
