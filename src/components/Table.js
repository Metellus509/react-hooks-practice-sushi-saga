import { useContext } from "react";
import SushiContext from "../__tests__/Context/SushiContext";

function Table({ plates = [] }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const {balance}=useContext(SushiContext)
  
  return (
    <>
      <h1 className="remaining">
        You have: ${/* Give me how much money I have left */balance } remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
