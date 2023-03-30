import React from 'react'

const CardContainer = ({children, type}) => {

  return (
    <div className='border border-1 border-[#C9D2CE] rounded-md w-96'>
        <div className='bg-[#F2FAF6] border-b  rounded-t-md  border-[#C9D2CE]  p-2'>
            <h3 className='font-semibold text-lg'>{type} &bull; 4</h3>
        </div>
        {children}
    </div>
  )
}

export default CardContainer