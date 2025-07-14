import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
import SushiContext from "../__tests__/Context/SushiContext";

function SushiContainer(props) {
  const [sushiList,setSushiList]=useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
 
    const moreSushi = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= sushiList.length ? 0 : prevIndex + 4
    );
  };
  
  const {balance,setBalance}=useContext(SushiContext)
  
  
  useEffect(()=>{
    fetch('http://localhost:3001/sushis')
    .then(r=>r.json())
    .then(data=>setSushiList(data))
  },[])
 
  return (
    <div className="belt">
      {/* Render Sushi components here! */
        <ul>
            {
            sushiList
            .slice(currentIndex, currentIndex + 4)
            .map((item, index) => (
            <li key={item.id}>
              <Sushi
                item={item}
                setBalance={setBalance}
                balance={balance}
              />
            </li>
          ))}
        </ul>
      }
      <MoreButton handleMoreButton={moreSushi} />
    </div>
  );
}

export default SushiContainer;

