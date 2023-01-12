import React from "react";
import Tooltip from "./Tooltip/Tooltip";

function Event(props) {
  const lineColor = {backgroundColor : props.lineColor};
    return <Tooltip content={props.description} cardName={props.content}>
              <div class = "cardbk" >
                <tbody>
                  <tr>
                    <td class = "colorLine" style={lineColor} ></td>
                  </tr>
                  <tr>
                    <td class = "event">{props.content}</td>
                  </tr>
                  <tr>
                    <td class = "event">{dateFormat(props.date)}</td>
                  </tr>
            </tbody>
           
        </div></Tooltip>
}

function dateFormat(date){
  var formatDate = new Date(date)
  return formatDate.getFullYear() + "-" 
    + ("00" + (formatDate.getMonth() + 1)).slice(-2) + "-" 
    + ("00" + formatDate.getDate()).slice(-2) + " " 
    + formatDate.getHours().toString().padStart(2, '0') + ":"
    + formatDate.getMinutes().toString().padStart(2, '0');
}

export default Event;

