import { useState } from "react";

const ColorChanger = () => {

    const [color, setColor] = useState('lime');
    return ( 
        <div className="content">
            <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                >
                <option value="lime"
                style={{'backgroundColor':'lime'}}>Lime</option>
                <option value="lavender"
                style={{'backgroundColor':'lavender'}}>Lavender</option>
                <option value="crimson"
                style={{'backgroundColor':'crimson'}}>Crimson</option>
                <option value="darkblue"
                style={{'backgroundColor':'darkblue'}}>Darkblue</option>
                <option value="teal"
                style={{'backgroundColor':'teal'}}>Teal</option>
                <option value="rebeccapurple"
                style={{'backgroundColor':'rebeccapurple'}}>Rebecca Purple</option>
                <option value="ghostwhite"
                style={{'backgroundColor':'ghostwhite'}}>Ghost White</option>
                <option value="aquamarine"
                style={{'backgroundColor':'aquamarine'}}>Aquamarine</option>
                <option value="aliceblue"
                style={{'backgroundColor':'aliceblue'}}>Aliceblue</option>
            </select>
            <div className="color-changer"
                style={{'backgroundColor':`${color}`}}>
            
            </div>
        </div>
     );
}
 
export default ColorChanger;