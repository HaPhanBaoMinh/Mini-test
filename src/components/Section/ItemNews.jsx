import React from 'react'
import { MdMessage } from 'react-icons/md'

function ItemNews({ newItem, isLastIndex }) {
    if (isLastIndex)
        return (
            <div className='w-100 py-5 '>
                <h4 className='text-left font-medium mb-3 hover:text-blue-400 transition-all hover:cursor-pointer'>{newItem.title}</h4>
                <div className='flex gap-2'>
                    <img className='w-[145px]' src={newItem.img} alt="" />
                    <p className='text-left text-sm'>{newItem.discription}</p>
                </div>
            </div>
        )

    return (
        <div className='w-100 py-5 border-b-2'>
            <h4 className='text-left font-medium mb-3 hover:text-blue-400 transition-all hover:cursor-pointer'>{newItem.title}</h4>
            <div className='flex gap-2'>
                <img className='w-[145px]' src={newItem.img} alt="" />
                <p className='text-left text-sm'>{newItem.discription}</p>
            </div>
        </div>
    )
}

export default ItemNews