import Event from "./Event"
import './Card.css';

function Card(props) {
    return <Event content = {props.content} date = {props.date} lineColor = {props.lineColor} description = {props.description} />;
  }

  export default Card;