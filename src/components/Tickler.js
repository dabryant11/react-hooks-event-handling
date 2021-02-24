import React from "react";

function Tickler() {
  function tickle(num) {
    console.log(`button ${num} was pressed`);
  }

  return <button onClick={() => tickle(3)}>Tickle me!</button>;
}

export default Tickler;
