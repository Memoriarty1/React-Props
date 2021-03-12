import React from "react";
import Card from './Card';
import contacts from '../contacts';
import Avatar from './Avatar';


function createCard(contact) {
  return <Card 
  key={contact.id}
    id={contact.id}
    img={contact.imgURL} 
    name={contact.name} 
    tel={contact.phone} 
    email={contact.email}
   />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img='https://icdn.lenta.ru/images/2018/08/23/11/20180823110031977/pic_33c12aa3a20161bbd2e3962a8dc6254d.jpg' />
      {contacts.map(createCard)}
        {/* {contacts.map((index, value) => {
          return <Card  key ={value} img={index.imgURL} name={index.name} tel={index.phone} email={index.email} />
        })} */}
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
