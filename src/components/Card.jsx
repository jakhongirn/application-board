import React from 'react'

const Card = ({data, handleDragging }) => {

  const handleDragStart = (event) => {
    event.dataTransfer.setData("Text", `${data.id}`)
    handleDragging(true)
  }

  const handleDragEnd = () => handleDragging(false)

  return (
    <div 
      draggable="true"
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
      className='bg-white m-4 p-4 rounded-md shadow-md' 
      >
        <div className='grid grid-cols-12'>
        <div className='col-span-11'>
          <h3 className='font-bold text-lg'>{data.title}</h3>
          <p className='text-gray-500 text-md'>{data.department}</p>
          <div className='flex gap-x-2 my-2 '>
              <div className='p-1 text-sm rounded bg-[#F6F2FF] text-[#856EC6] font-medium'>{data.priority}</div>
              <div className='p-1 text-sm rounded bg-[#F2FAF6] font-medium'><img src="assets/icons/icon_people.svg" className='inline w-6' alt="" /> {data.people}</div>
              <div className='p-1 text-sm rounded bg-[#F2FAF6] font-medium'><img src="assets/icons/icon_doc.svg" className='inline w-6' alt="" /> {data.docs}</div>
          </div>
          <div className='grid grid-rows-2 grid-flow-col auto-cols-max '>
            <div className='row-span-2 self-center mr-2'><img src={`assets/people/${data.recImageName}`} className='h-10' alt=""/></div>
            <p className='text-gray-400'>Рекруитер</p>
            <h3 className='font-medium text-gray-800'>{data.recName}</h3>
          </div>
        </div>
        <div className=' justify-self-end'>
            <img src="assets/icons/three_dots.svg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Card