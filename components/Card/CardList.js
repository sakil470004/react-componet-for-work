import React from 'react';
import Card from './Card';

const CardList = ({ drinks }) => {
  return (
    <div className= 'tc'>
      {
        drinks.map((user, i) => {
          return (
            <Card 
              key={i}
              id={drinks[i].idDrink}
              name={drinks[i].strDrink}
              image={drinks[i].strDrinkThumb}
             
              />
          );
        })
      }
    </div>
  );
}

export default CardList;