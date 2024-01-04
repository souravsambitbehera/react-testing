import Draggable from "react-draggable";
import React, { useState } from "react";
import "./piece.css";

const ForthTesting = () => {
  const [currentPosition, setCurrentPosition] = useState({
    xRate: 10,
    yRate: 10
  });

  const onDrag = (e, data) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };
  const onDragStop = (e, data) => {
    e.stopPropagation();
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };

  return (
    <Draggable

      position={{
        x: currentPosition.xRate,
        y: currentPosition.yRate
      }}
      onDrag={onDrag}
      onStop={onDragStop}
    >
      <div className="Piece">
        <span className="Piece-phrase" 
    data-testid="test-element" 
        
        >sourav</span>
      </div>
    </Draggable>
  );
};

export default ForthTesting;
