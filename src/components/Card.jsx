import React, {useRef, useState} from 'react'

const Card = ({data, handleDragging, isDragging, setListItems, listItems }) => {

  const dragItem = useRef();
  const dragItemNode = useRef();

  const handleDragStart = (event, paramId) => {
    console.log("Dragging start...")
    event.dataTransfer.setData("text", `${data.id}`)
    handleDragging(true)

    dragItem.current = paramId;
    dragItemNode.current = event.target;
    console.log(dragItemNode)
    dragItemNode.current.addEventListener('dragend', handleDragEnd)

    setTimeout(() => {
      handleDragging(true);
    }, 0)
  }

  const handleDragEnd = () => {
    console.log("Dragging end...")
    handleDragging(false)
    
    dragItem.current = null;
    dragItemNode.current.removeEventListener('dragend', handleDragEnd)
    dragItemNode.current = null;
  }

  const getStyle = (cardId) => {
    const currentId = dragItem.current;

    if (cardId === currentId) {
      return '!bg-gray-300';
    }
    return '';
  }

  return (
    <div 
      draggable="true"
      onDragStart={(e) => {handleDragStart(e, data.id)}} 
      className="px-2" 
      >
        <div className={`border-[3px] rounded border-blue-500 m-2 invisible `} />
        <div className={`bg-white p-4 rounded-md shadow-md hover:cursor-pointer ${isDragging ? getStyle(data.id) : ''  }`}>
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
    </div>
  )
}

export default Card