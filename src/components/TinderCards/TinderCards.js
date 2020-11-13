import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'

import { apiInstance } from '../../api/Axios';

import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await apiInstance.get('/tinder/cards');

      setPeople(data);
    }
    
    fetchData();
  }, [])

  const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
    //   setLastDirection(direction);
  }

  const outOfFrame = (name) => {
      console.log(name + " left the screen!");
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person, i) => (
          <TinderCard
            className="swipe"
            key={`character_${i}`}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
              <div 
                className="card"
                style ={{backgroundImage: `url(${person.imgUrl})`}}>
                  <h3>{person.name}</h3>
              </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
