import React from 'react'
import Card from './Card'

const CardContainer = ({ children, name, type, data }) => {
  return (
    <div className="border border-1 border-[#C9D2CE] rounded-md w-96">
      <div className="bg-[#F2FAF6] border-b  rounded-t-md  border-[#C9D2CE]  p-2">
        <h3 className="font-semibold text-lg">{name} &bull; 4</h3>
      </div>

      {data.map(
        (card) =>
          type === card.status && (
            <Card
              key={card.id}
              title={card.title}
              department={card.department}
              status={card.status}
              people={card.people}
              docs={card.docs}
              recName={card.recName}
              recImageName={card.recImageName}
            />
          ),
      )}
    </div>
  )
}

export default CardContainer
