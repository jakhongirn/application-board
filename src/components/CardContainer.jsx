import React, { useEffect } from 'react'
import Card from './Card'
import { cardData } from '../assets/data'

const CardContainer = ({
  name,
  type,
  data,
  isDragging,
  handleDragging,
  handleUpdateList,
  setListItems,
}) => {
  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDrop = (e) => {
    const id = +e.dataTransfer.getData('text')
    handleUpdateList(id, type)
    handleDragging(false)
  }
  useEffect(() => {
    
    setListItems(data)
  }, [setListItems, data])

  
 

  const cardsByStatus = cardData.filter((card) => card.status === type)
  const cardsLen = cardsByStatus.length

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`border border-1 border-[#C9D2CE] rounded-md w-96 overflow-y-scroll h-[600px]  ${
        isDragging ? 'bg-gray-200 border-2 border-dashed' : ''
      }`}
    >
      <div className="bg-[#F2FAF6] border-b  rounded-t-md  border-[#C9D2CE] p-2">
        <h3 className="font-semibold text-lg">
          {name} &bull; {cardsLen}{' '}
        </h3>
      </div>

      <div className="">
        {data.map(
          (cardData) =>
            type === cardData.status && (
              <>
                <Card
                  key={cardData.id}
                  data={cardData}
                  handleDragging={handleDragging}
                  isDragging={isDragging}
                  setListItems={setListItems}
                  listItems={data}
                />
              </>
            ),
        )}
        {cardsLen === 0 && (
          <div className="flex items-center justify-center mt-20 mx-4 ">
            <div className="text-center">
              <img src="assets/add_files.png" className="w-64 inline" alt="" />
              <p className="text-lg text-gray-800 font-medium ">
                Если есть подходящие заявки, перетащите их сюда 🤓
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardContainer
