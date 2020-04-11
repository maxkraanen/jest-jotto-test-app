import React from "react";

export default function Congrats(props) {
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
