import React, { useRef } from 'react'
import { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

function SwiperCategory() {
    const [swiperItem, setSwiperItem] = useState(document.getElementsByClassName("swiper-item"))
    const [transform, setTransform] = useState(0);
    const [indexSwiper, setIndexSwiper] = useState(0);

    const onClickToLeft = (swiperItem) => {
        if (indexSwiper === 1) {
            setTransform(0);
            return;
        }
        setTransform(x => x + swiperItem.offsetWidth + 10)
        setIndexSwiper(index => index - 1);
    }

    const onClickToRight = (swiperItem) => {
        console.log(swiperItem.offsetWidth)
        if (indexSwiper > 9) return;
        setTransform(x => x - swiperItem.offsetWidth - 10)
        setIndexSwiper(index => index + 1);
    }

    return (
        <div className='w-[700px] float-right pb-5 flex items-center justify-between mb-5 border-b-2'>
            <p>Cẩm nang các bệnh:</p>

            <div className='w-[70%] h-[32px] whitespace-nowrap overflow-hidden'>
                <div style={{ transform: `translateX(${transform}px)` }} className="transition-all swiper" >
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Tim mạch</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Hô hấp</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Nội tiết</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Dinh dưỡng</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Tiêu hóa</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Tai mũi họng</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Thần kinh</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Hiếm muộn</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Nhi - Sơ sinh</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Cơ xương khớp</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Tiết niệu - Nam học</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Ung thư</span>
                    <span className='swiper-item px-3 py-1 mx-[5px] inline-block rounded-[4px] text-[#0c4b71] bg-[#bcdff4]'>Sản phụ khoa</span>
                </div>
            </div>

            <div className='flex gap-1 z-10 overflow-hidden' style={{ boxShadow: "-5px 0px 14px 12px #ffffff" }} >
                <button onClick={() => onClickToLeft(swiperItem[indexSwiper])} className='w-[30px] flex justify-center items-center h-[30px] border-y rounded-md'>
                    <MdKeyboardArrowLeft />
                </button>
                <button onClick={() => onClickToRight(swiperItem[indexSwiper])} className='w-[30px] flex justify-center items-center h-[30px] border rounded-md'>
                    <MdKeyboardArrowRight />

                </button>
            </div>
        </div>
    )
}

export default SwiperCategory