import React, { useState } from 'react';
import { cardContainers, cardData } from '../assets/data';
import CardContainer from './CardContainer';

const DragDropArea = () => {

  const [isDragging, setIsDragging] = useState(false)

  const handleDragging = (dragging) => setIsDragging(dragging)
  
  const [listItems, setListItems] = useState(cardData)

  const handleUpdateList = (id, newStatus) => {
    let card = listItems.find(item => item.id === id)
    
    if (card && card.status !== newStatus) {
      card.status = newStatus
      setListItems(prev => ([
        card,
        ...prev.filter(item => item.id !== id)
      ]))
    }
  }  

  return (
    <>
            {cardContainers.map(cardContainer => 
              (
                <CardContainer 
                    key={cardContainer.id} 
                    name={cardContainer.name} 
                    type={cardContainer.type}
                    data={listItems}
                    
                    isDragging={isDragging}
                    handleDragging={handleDragging}
                    handleUpdateList={handleUpdateList}
                />
              )
            )}

    </>
  )
}

export default DragDropArea