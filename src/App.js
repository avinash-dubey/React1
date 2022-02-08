import "./styles.css";
import contact from "./contact.js";
import Card from "./Card.js";
function insertcard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      source={contact.source}
      email={contact.email}
    />
  );
}
export default function App() {
  return (
    <div className="App">
      {contact.map(insertcard)}
      {/*  
      <Card
        name={contact[0].name}
        source={contact[0].source}
        email={contact[0].email}
      />

      <Card
        name={contact[1].name}
        source={contact[1].source}
        email={contact[1].email}
      />
      <Card
        name={contact[2].name}
        source={contact[2].source}
        email={contact[2].email}
      />
      */}
    </div>
  );
}
