import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

function Category() {
    return (
        <div className='w-100 flex h-auto border-t-[1px] border-b-[1px] border-[#e5e5e5]'>
            <div className='w-full py-4 bg-white max-w-[1370px] px-2 m-auto flex justify-between items-center'>
                <div className='w-[25px] h-[25px] bg-[#e5e5e5] justify-center flex items-center rounded-full group hover:cursor-pointer hover:bg-[#9f224e] transition-all'>
                    <AiFillHome className='text-base text-center text-[#757575] group-hover:text-white transition-all' />
                </div>
                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Thời sự
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Góc nhìn
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Thế giới
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Video
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Podcasts
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Kinh Doanh
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Khoa học
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Giải trí
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Thể thao
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Pháp luật
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Giáo dục
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Sức khỏe
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Đời sống
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Du lịch
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Số hóa
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Xe
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Ý kiến
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Tâm sự
                </p>

                <p className='font-medium hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Hài
                </p>

                <p className='text-[#9f9f9f] flex justify-center items-center gap-1 hover:cursor-pointer hover:text-[#9f224e] transition-all'>
                    Tất cả
                    <GiHamburgerMenu className='text-lg ' />
                </p>

            </div>
        </div>
    )
}

export default Category