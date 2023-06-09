import React, { useState } from 'react';
import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
  
    const increaser = () => {
      setQuantity(quantity + 1);
    };
  
    const decreaser = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };
  
    return (
      <div>
        <RiArrowUpLine onClick={increaser} />
        <RiArrowDownLine onClick={decreaser} />
        Updated quantity: {quantity}
      </div>
    );
  }

export default ProductQuantity;
  
  
  
  
  
  