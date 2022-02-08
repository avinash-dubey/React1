import react from "react";
function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img alt="DevOps" src={props.source}></img>
      <h1>{props.email}</h1>
    </div>
  );
}

export default Card;
