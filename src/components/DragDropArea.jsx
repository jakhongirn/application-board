import React from 'react';
import { cardContainers } from '../assets/data';
import CardContainer from './CardContainer';
import Card from './Card';

const DragDropArea = () => {
    
  return (
    <div>
            {cardContainers.map(cardContainer => 
              (
                <CardContainer key={cardContainer.id} type={cardContainer.name}>
                  <Card />
                </CardContainer>
              )
            )}

    </div>
  )
}

export default DragDropArea