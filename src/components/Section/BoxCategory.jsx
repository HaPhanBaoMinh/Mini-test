import React from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { v4 as uuidv4 } from 'uuid';

function BoxCategory({ box }) {
    console.log(box)
    return (
        <div className='w-[700px] float-right mb-5'>
            {/* Category */}
            <div className='w-100'>
                <div className='w-100 flex gap-5'>
                    <h4 className=' text-xl font-medium text-end hover:text-blue-400 hover:cursor-pointer transition-all border-b-2 pb-1 border-[#9f224e]'>{box.title}</h4>
                    {
                        box.category.map(category => <p key={uuidv4()} className='text-[#4f4f4f] hover:text-blue-400 hover:cursor-pointer transition-all'>{category}</p>)
                    }

                </div>
            </div>

            {/* News */}
            <div className='w-100 flex'>

                {/* section */}
                <div className='w-[67%] py-5 border-b-2 flex'>
                    <img className='w-[50%]' src={box.news_1.img} alt="" />
                    <div className='px-5 flex gap-1 flex-col'>
                        <h4 className='text-left font-medium mb-3 hover:text-blue-400 transition-all hover:cursor-pointer m-0'>{box.news_1.title}</h4>
                        <p className='text-left text-sm'>{box.news_1.description}</p>
                    </div>

                </div>

                <div className='w-[33%] py-5 border-b-2 flex'>
                    <div className='pl-5 flex gap-1 flex-col border-l-2 p-l-3'>
                        <h4 className='text-left font-medium hover:text-blue-400 transition-all hover:cursor-pointer m-0'>{box.news_2.title}</h4>
                        <p className='text-left text-sm'>{box.news_2.description}</p>
                    </div>

                </div>



            </div>

            {/* News title */}
            <div className='w-100 justify-between flex py-3'>
                {
                    box.news_title.map(news =>
                        <div className='w-[30%] flex '>
                            <RxDotFilled className='text-xl w-[50px]' />
                            <p className='text-start text-md font-medium'>{news}</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default BoxCategory