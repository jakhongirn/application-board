import React from 'react';
import { cardContainers, cardData } from '../assets/data';
import CardContainer from './CardContainer';
import Card from './Card';

const DragDropArea = () => {
  
  return (
    <>
            {cardContainers.map(cardContainer => 
              (
                <CardContainer 
                    key={cardContainer.id} 
                    type={cardContainer.name} 
                    data={cardData} 
                />
              )
            )}

    </>
  )
}

export default DragDropArea