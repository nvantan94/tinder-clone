import React, { useState } from "react";
import TinderCard from 'react-tinder-card'

import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
    },
  ]);

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
                style ={{backgroundImage: `url(${person.url})`}}>
                  <h3>{person.name}</h3>
              </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
