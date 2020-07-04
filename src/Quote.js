import React from "react";

export default ({ quoteProperty, myOnClick }) => {
  return (
    <div>
      <p>{quoteProperty}</p>
      <button onClick={myOnClick}>Refetch</button>
    </div>
  );
};
