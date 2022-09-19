function Event(props) {
    return  <tbody>
            <div class = "cardbk">
              <tr>
                <td class = {props.color}></td>
              </tr>
              <tr>
                <td class = "event">{props.content}</td>
              </tr>
              <tr>
                <td class = "event">{props.date}</td>
              </tr>
              </div>
            </tbody> 
  }

  export default Event;