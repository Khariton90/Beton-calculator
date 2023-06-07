import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";

type CuttBox = {
  x: number;
  y: number;
  width: number;
  height: number;
  id: string;
}

type BoxProps = {
  cuttBox: CuttBox
}

const x = 386;
const y = 186;

export function CuttingBox({cuttBox}: BoxProps): JSX.Element {
  const [position, setPosition] = useState({
    x: cuttBox.x,
    y: cuttBox.y
  })

  const handleChangePosition = (x:number, y:number) => {
    setPosition((prev) => ({x, y}));
  }

  useEffect(() => {
    if (position.x > x) {
      setPosition({...position, x: x + cuttBox.x})
    }

    if (position.x < 0) {
      setPosition({...position, x: 0})
    }

    if (position.y - cuttBox.height / 2 > y) {
      setPosition({...position, y: 136})
    }
    
    console.log(cuttBox.height);
    if (position.y < 0) {
      setPosition({...position, y: y})
    }
  }, [position]);


  return (
    <Rnd
    onDragStop={(e, position) => handleChangePosition(position.x, position.y)}
    position={
     {
      ...position
     }
    }
      default={{
        x: 0,
        y: 0,
        width: cuttBox.width,
        height: cuttBox.height,
      }}
    >
      <div style={{ width: cuttBox.width, height: cuttBox.height, border: '1px solid black', background: 'white' }}>{cuttBox.id}</div>
    </Rnd>
  )
}