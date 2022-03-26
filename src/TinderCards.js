import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card"
import "./TinderCards.css";


function TinderCards() {

    const [people, setPeople] = useState([{
        name : 'Elon Musk',
        url : "https://kawa-news.com/wp-content/uploads/2021/04/elonmusk-820x500.jpg" 
    },
    {
        name : "Jeff Bezoz",
        url : "https://media.gettyimages.com/photos/amazoncom-founder-and-ceo-jeff-bezos-presents-the-companys-first-the-picture-id450831356?k=20&m=450831356&s=612x612&w=0&h=xtse65yD_T3NXAkl_bhz4BMxNHvGKyXY_t5LPWQJYHE="
    }
]);

const swiped = (direction, nameToDelete) => {
  
}

const outOfFrame = (name) => {

}


  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe = {["up", "down"]}
          onSwipe = {(dir) => swiped(dir, person.name)}
          onCardLeftScreen = {() => outOfFrame(person.name)}
          >
              <div
        style={{backgroundImage: "url(" + person.url + ")"}}
        className="card"
        >
        <h3>{person.name}</h3>
        </div>
          </TinderCard>
        ))}
    
      </div>
    </div>
  );
}

export default TinderCards