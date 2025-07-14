import React, { useState } from "react";

function Sushi({item,setBalance,balance}) {
  const [displayImage,setDisplayImage]=useState(false)

  function handleDispaly(){
    if (balance < item.price){
      setDisplayImage(false)
    }
    else{
      setDisplayImage(true)
      setBalance(balance - item.price)
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ handleDispaly}>
        {/* Tell me if this sushi has been eaten! */}
        {displayImage ? null : (
          <img
            src={/* Give me an image source! */ item.img_url}
            alt={/* Give me a name! */ item.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */item.name} - ${/* Give me a price! */item.price}
      </h4>
    </div>
  );
}

export default Sushi;
