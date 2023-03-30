import React from 'react'
import Card from './Card'
import { cardData } from '../assets/data';

const CardContainer = ({name, type, data, isDragging, handleDragging, handleUpdateList }) => {
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
  const handleDrop = (e) => {
    const id =+ e.dataTransfer.getData('text')
    handleUpdateList(id, type)
    handleDragging(false)
  }
  
  const cardsByStatus = cardData.filter(card => card.status === type)
  const cardsLen = cardsByStatus.length

  return (
    <div 
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`border border-1 border-[#C9D2CE] rounded-md w-96 overflow-y-scroll  h-[600px]  ${isDragging ? 'bg-gray-200 border-2 border-dashed' : ''}`}>
      <div className="bg-[#F2FAF6] border-b  rounded-t-md  border-[#C9D2CE] p-2">
        <h3 className="font-semibold text-lg">{name} &bull; {cardsLen} </h3>
      </div>

      <div className=''>
        {data.map(
          (cardData) => {
            if (type === cardData.status) {
              return (
                <>
                  <Card
                    key={cardData.id}
                    data={cardData}
                    handleDragging={handleDragging}
                    isDragging={isDragging}
                  />
                </>
              )
            }
            else return (null)
           }
          )}
      </div>
    </div>
  )
}

export default CardContainer
