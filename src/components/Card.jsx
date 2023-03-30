import React from 'react'

const Card = ({title, department, status, people, docs, recName, recImageName }) => {
  return (
    <div className='bg-white m-4 p-4 rounded-md shadow-md'>
        <div className='grid grid-cols-12'>
        <div className='col-span-11'>
          <h3 className='font-bold text-lg'>{title}</h3>
          <p className='text-gray-500 text-md'>{department}</p>
          <div className='flex gap-x-2 my-2 '>
              <div className='p-1 text-sm rounded bg-[#F6F2FF] text-[#856EC6] font-medium'>{status}</div>
              <div className='p-1 text-sm rounded bg-[#F2FAF6] font-medium'><img src="assets/icons/icon_people.svg" className='inline w-6' alt="" /> {people}</div>
              <div className='p-1 text-sm rounded bg-[#F2FAF6] font-medium'><img src="assets/icons/icon_doc.svg" className='inline w-6' alt="" /> {docs}</div>
          </div>
          <div className='grid grid-rows-2 grid-flow-col auto-cols-max '>
            <div className='row-span-2 self-center mr-2'><img src={`assets/people/${recImageName}`} className='h-10' alt=""/></div>
            <p className='text-gray-400'>Рекруитер</p>
            <h3 className='font-medium text-gray-800'>{recName}</h3>
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