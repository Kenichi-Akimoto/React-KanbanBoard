import React from "react";
import Tooltip from "./Tooltip/Tooltip";

function Event(props) {
  const lineColor = {backgroundColor : props.lineColor};
    return <Tooltip content={props.description}>
              <div class = "cardbk" >
                <tbody>
                  <tr>
                    <td class = "colorLine" style={lineColor} ></td>
                  </tr>
                  <tr>
                    <td class = "event">{props.content}</td>
                  </tr>
                  <tr>
                    <td class = "event">{props.date}</td>
                  </tr>
            </tbody>
           
        </div></Tooltip>
  }
   
  export default Event;

