import React, { useState } from "react";

function Button(props) {
  //here

  return (
    <button
      type="button"
      className="p-2 bg-indigo-600 text-white rounded"
      onClick={() => props.setCurrentPage(() => props.currentPage + 1)}
    >
      {props.text} {props.currentPage}
    </button>
  );
}

export default Button;
