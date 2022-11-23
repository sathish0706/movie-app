import React, { useState } from 'react';

function AddColor() {
  const [color, setColor] = useState("");

  const [colorList, setColorList] = useState(["blue", "yellow", "green", "orange"]);
  const styles = {
    "backgroundColor": color,
  };
  return (
    <>
      <input
        type="text"
        style={styles}
        onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => setColorList([...colorList, color])}>Add color</button>

      {colorList.map((clr,i) => <ColorBox key={i} color={clr} />)}

    </>
  );
}
function ColorBox ({ color }) {
  const styles ={
    height : "30px",
    width : "500px",
    background : color,
    marginTop : "10px"
  }
  return(
    <>
    <div style={styles}></div>
    </>
  )
}
export default AddColor;