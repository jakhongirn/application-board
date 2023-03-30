import React from 'react'
import Card from './Card'

const CardContainer = ({name, type, data, isDragging, handleDragging, handleUpdateList }) => {
  
  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const handleDrop = (e) => {
    const id =+ e.dataTransfer.getData('text')
    handleUpdateList(id, type)
    handleDragging(false)
  }

  return (
    <div 
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border border-1 border-[#C9D2CE] rounded-md w-96">
      <div className="bg-[#F2FAF6] border-b  rounded-t-md  border-[#C9D2CE]  p-2">
        <h3 className="font-semibold text-lg">{name} &bull; 4</h3>
      </div>

      {data.map(
        (cardData) =>
          type === cardData.status && (
            <Card
              key={cardData.id}
              data={cardData}
              handleDragging={handleDragging}
            />
          ),
      )}
    </div>
  )
}

export default CardContainer
