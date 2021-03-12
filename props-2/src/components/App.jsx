import React from "react";
import Card from './Card';
import contacts from '../contacts';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        {contacts.map((index, value) => {
          return <Card  key ={value} img={index.imgURL} name={index.name} tel={index.phone} email={index.email} />
        })}
      {/* <Card
        img={contacts[0].imgURL}
        name={contacts[0].name}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        img={contacts[1].imgURL}
        name={contacts[1].name}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        img={contacts[2].imgURL}
        name={contacts[2].name}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
       */}
    </div>
  )
}

export default App;
