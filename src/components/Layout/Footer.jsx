import React from 'react'
import { AiFillYoutube, AiOutlineHome, AiOutlineTwitter } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
import { TbBrandMedium, TbBrandSvelte } from 'react-icons/tb'

import src from "../../img/329622775_522818929717742_3183361083749383225_n.png"
function Footer() {
    return (
        <div className='container w-100 max-w-[1130px] pb-3 flex flex-col m-auto '>
            <div className='w-100 flex '>
                <div className='w-[15%] gap-2 flex flex-col py-3'>
                    <h4 className='font-medium'>Trang chủ </h4>
                    <h4 className='font-medium'>Video</h4>
                    <h4 className='font-medium'>Podcasts</h4>
                    <h4 className='font-medium'>Ảnh</h4>
                    <h4 className='font-medium border-b-2 pb-3'>Infographics</h4>
                    <h4 className='font-medium'>Mới nhất</h4>
                    <h4 className='font-medium'>Xem nhiều</h4>
                    <h4 className='font-medium'>Tin nóng</h4>

                </div>

                <div className='w-[15%] gap-2 flex flex-col py-3'>
                    <h4 className=''>Thời sự </h4>
                    <h4 className=''>Góc nhìn </h4>
                    <h4 className=''>Thế giới </h4>
                    <h4 className=''>Kinh doanh </h4>
                    <h4 className=''>Giải trí </h4>
                </div>

                <div className='w-[15%] gap-2 flex flex-col py-3'>
                    <h4 className=''>Thể thao </h4>
                    <h4 className=''>Pháp luật </h4>
                    <h4 className=''>Giáo dục </h4>
                    <h4 className=''>Sức khỏe </h4>
                    <h4 className=''>Đời sống </h4>
                    <h4 className=''>Du lịch </h4>
                </div>

                <div className='w-[15%] border-r-2 gap-2 flex flex-col py-3'>
                    <h4 className=''>Khoa học </h4>
                    <h4 className=''>Số hóa </h4>
                    <h4 className=''>Xe </h4>
                    <h4 className=''>Ý kiến </h4>
                    <h4 className=''>Tâm sự </h4>
                    <h4 className=''>Hài </h4>
                </div>

                <div className='w-[15%] border-r-2 pl-4 gap-2 flex flex-col py-3' >
                    <h4 className=''>Rao vặt </h4>
                    <h4 className=''>Startup </h4>
                    <h4 className=''>Mua ảnh VnExpress </h4>
                    <h4 className=''>eBox </h4>
                    <h4 className=''>eWork</h4>
                </div>

                <div className='w-[25%] px-4 gap-2 flex flex-col py-3' >
                    <p className='text-[#757575]'>Tải ứng dụng</p>
                    <div className='flex gap-1'>
                        <button className='flex gap-1 border rounded-md px-6 py-2'><img src={src} alt="" className='w-[20px]' />VnExpress</button>
                        <button className='flex gap-1 border rounded-md px-6 py-2'><img src={src} alt="" className='w-[20px]' />International</button>
                    </div>
                    <p className='text-[#757575]'>Liên hệ</p>
                    <div className='flex flex-wrap gap-3 border-b-2 pb-3'>
                        <p className='flex gap-2 hover:cursor-pointer transition-all hover:text-blue-500 items-center'>
                            <AiOutlineHome className='text-lg' />
                            Tòa soạn
                        </p>

                        <p className='flex gap-2 hover:cursor-pointer transition-all hover:text-blue-500 items-center'>
                            <TbBrandSvelte className='text-lg' />
                            Quảng cáo
                        </p>

                        <p className='flex gap-2 hover:cursor-pointer transition-all hover:text-blue-500 items-center'>
                            <TbBrandMedium className='text-lg' />
                            Hợp tác bản quyền
                        </p>
                    </div>

                    <p className='text-[#757575]'>Đường dây nóng</p>
                    <div className='flex justify-between'>
                        <div>
                            <p className='font-medium'> 083.888.0123</p>
                            <span className='text-xs text-[#757575]'>(Hà Nội)</span>
                        </div>
                        <div>
                            <p className='font-medium'> 083.888.0123</p>
                            <span className='text-xs text-[#757575]'>(TP.Hồ Chí Minh)</span>

                        </div>
                    </div>
                </div>
            </div>

            <div className='py-3 border-y-2 flex justify-between mt-5'>
                <p className='flex gap-2 w-[30%]'>
                    Báo điện tử
                    <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v736/v2_2019/pc/graphics/logo.svg" alt="" />
                </p>

                <div className='flex'>
                    <p className='border-r-2 pr-3 mr-3'>RSS</p>
                    <p>Theo dõi VnExpress trên</p>
                    <div className='w-[30px] h-[30px] rounded-full border text-lg text-[#757575] ml-2 transition-all hover:bg-blue-500 hover:text-white flex justify-center items-center hover:cursor-pointer'>
                        <RiFacebookFill />
                    </div>

                    <div className='w-[30px] h-[30px] rounded-full border text-lg text-[#757575] ml-2 transition-all hover:bg-blue-300 hover:text-white flex justify-center items-center hover:cursor-pointer'>
                        <AiOutlineTwitter />
                    </div>

                    <div className='w-[30px] h-[30px] rounded-full border text-lg text-[#757575] ml-2 transition-all hover:bg-red-500 hover:text-white flex justify-center items-center hover:cursor-pointer'>
                        <AiFillYoutube />
                    </div>
                </div>
            </div>

            <div className='py-3 w-100 flex justify-between'>
                <div className='w-[32%]'>
                    <p className='font-medium'>Báo tiếng Việt nhiều người xem nhất</p>
                    <p className='text-sm'>Thuộc Bộ Khoa học Công nghệ</p>
                    <p className='text-sm'>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</p>
                </div>

                <div className='w-[32%]'>
                    <p className='text-sm'>Tổng biên tập: Phạm Hiếu</p>
                    <p className='text-sm'>Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                    <p className='text-sm'>Điện thoại: 024 7300 8899 - máy lẻ 4500</p>
                </div>

                <div className='w-[32%]'>
                    <p className='text-sm text-right'>© 1997-2023. Toàn bộ bản quyền thuộc VnExpress</p>
                </div>
            </div>
        </div>
    )
}

export default Footer