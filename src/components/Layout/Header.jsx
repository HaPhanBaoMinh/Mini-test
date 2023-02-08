import React from 'react'
import { HiOutlineClock } from "react-icons/hi"
import { CiLocationOn, CiUser } from "react-icons/ci"
import { BsBell } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"
import src from "../../img/329622775_522818929717742_3183361083749383225_n.png"
function Header() {
    return (
        <div className='text-3xl'>
            {/* Container */}
            <div className='w-full bg-white max-w-[1130px] px-2 m-auto flex justify-between'>
                {/* Logo */}
                <div className='flex py-2 items-center'>
                    <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v736/v2_2019/pc/graphics/logo.svg" alt="" />
                    <p className='text-sm ml-2 pl-2 border-l-[1px] border-[#e5e5e5] text-[#757575]'>
                        Thứ hai,6/6/2023
                    </p>
                </div>

                {/*  */}
                <div className='flex gap-5 py-2'>
                    <div className='bg-white flex items-center gap-1 hover:cursor-pointer'>
                        <HiOutlineClock className='text-lg text-[#9f9f9f]' />
                        <p className='text-sm leading-[32px] text-[#757575] hover:text-black transition-all'>Mới nhất</p>
                    </div>

                    <div className='bg-white flex items-center gap-1 hover:cursor-pointer relative group'>
                        <CiLocationOn className='text-lg text-[#9f9f9f]' />
                        <p className='text-sm leading-[32px] text-[#757575] hover:text-black transition-all group'>Tin theo khu vực </p>
                        <div className='w-[150px] bg-white shadow absolute top-[120%] left-0 rounded-md opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-[100%] invisible transition-all duration-200'>
                            <p className='font-medium text-sm p-3 text-left hover:text-[#9f224e]  hover:cursor-pointer'> Hà Nội </p>
                            <p className='font-medium text-sm p-3 text-left hover:text-[#9f224e]  hover:cursor-pointer'> TP Hồ Chí Minh </p>
                        </div>
                    </div>

                    <div className='bg-white flex items-center gap-1 hover:cursor-pointer'>
                        <img src={src} alt="logo" className='w-[17px]' />
                        <p className='text-sm leading-[32px] text-[#757575] hover:text-black transition-all'>International</p>
                    </div>

                    <div className='bg-slate-50 flex w-[165px] items-center gap-1 hover:cursor-pointer pl-2 border-l-[1px] border-[#e5e5e5]'>
                        <div className='w-[100%] h-[32px] bg-white border rounded-2xl flex items-center justify-center'>
                            <input type="text" className='text-sm pl-1 w-[80%] h-[80%] outline-none' placeholder='Tìm kiếm ' />
                            <AiOutlineSearch className='text-lg text-[#9f9f9f]' />
                        </div>
                    </div>

                    <div className='bg-white flex items-center gap-1 hover:cursor-pointer'>
                        <CiUser className='text-lg text-[#9f9f9f]' />
                        <p className='text-sm text-[#757575] hover:text-blue-500 leading-[32px] transition-all'>Đăng nhập</p>
                    </div>

                    <div className='bg-white flex items-center gap-1 hover:cursor-pointer'>
                        <BsBell className='text-lg text-[#9f9f9f]' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header