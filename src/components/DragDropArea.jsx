import React from 'react';
import { cardContainers, cardData } from '../assets/data';
import CardContainer from './CardContainer';

const DragDropArea = () => {
  
  return (
    <>
            {cardContainers.map(cardContainer => 
              (
                <CardContainer 
                    key={cardContainer.id} 
                    name={cardContainer.name} 
                    type={cardContainer.type}
                    data={cardData} 
                />
              )
            )}

    </>
  )
}

export default DragDropArea