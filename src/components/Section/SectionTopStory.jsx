import React from 'react'
import { MdMessage } from "react-icons/md"

function SectionTopStory() {
    return (
        <div className='w-100 flex h-auto bg-white'>
            <div className='container w-100 my-5 max-w-[1130px] flex m-auto border-b-2'>
                <div className='w-[780px] h-auto bg-white pb-4 m-auto'>
                    <div>
                        <div className='w-100 flex bg-[#f7f7f7]'>
                            {/* img */}
                            <div className='w-[520px]'>
                                <img src="https://i1-vnexpress.vnecdn.net/2023/02/06/dongdatthonhiky3-1675696127-1649-1675696202.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=XpadKeX1Ji-5xXqDXTB5YA" alt="" />
                            </div>

                            {/* header */}
                            <div className=' w-[260px] p-5'>
                                <h3 className='text-left text-xl font-medium mb-3 hover:text-blue-400 transition-all hover:cursor-pointer'>Hơn 3.800 người chết vì động đất ở Thổ Nhĩ Kỳ, Syria</h3>
                                <p className='text-left text-sm'>Số người chết trong trận động đất ở Thổ Nhĩ Kỳ và Syria đã tăng lên 3.823, nhiều người vẫn kẹt dưới các đống đổ nát.</p>
                                <p className='flex gap-3 mt-3 text-[#757575]'>
                                    <span>56' trước </span>
                                    <span className='flex items-center gap-1 text-blue-400'>
                                        <MdMessage className='text-sm text-[#bdbdbd]' />
                                        21
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className='w-100 flex'>
                            <div className='w-[32.5%] text-sm mt-5 pl-5'>
                                <h3 className='text-left text-lg font-medium mb-3 hover:text-blue-400 transition-all hover:cursor-pointer'>Real mất loạt trụ cột khi đá FIFA Club World Cup</h3>
                                <p className='text-left text-md'>Danh sách 22 cầu thủ Real đăng ký đấu Al Ahly ở bán kết FIFA Club World Cup 2022 vắng nhiều ngôi sao ở hàng thủ và hàng công.</p>
                            </div>

                            <div className='w-[32.5%] text-sm mt-5 pl-5 mr-2'>
                                <h3 className='text-left text-lg font-medium mb-3 hover:text-blue-400 transition-all hover:cursor-pointer'>Lãi suất liên ngân hàng tăng lên 13% một năm</h3>
                                <p className='text-left text-md'>Lãi suất vay mượn tiền đồng giữa các ngân hàng, kỳ hạn 9 tháng hôm 2/2 lên 13% một năm, nhưng doanh số giao dịch chỉ 200 tỷ đồng.</p>
                            </div>

                            <div className='w-[35%] text-sm mt-5 pl-5 border-l-2'>
                                <h4 className='text-left font-medium text-base text-[#9f224e]'>Góc nhìn</h4>
                                <h3 className='text-left text-lg font-medium hover:text-blue-400 transition-all hover:cursor-pointer'>Bất ngờ bị sa thải</h3>
                                <p className='text-left text-md'>Vừa hạ cánh tại Sân bay Nội Bài, tôi nhận được email từ CEO Google Sundar Pichai.</p>
                                <div className='w-100 mt-auto h-auto flex items-end justify-between'>
                                    <div>
                                        <p className='mb-1 text-[#757575] italic font-medium'>Lê Văn Thành</p>
                                        <span className='flex items-center gap-1 text-blue-400'>
                                            <MdMessage className='text-sm text-[#bdbdbd]' />
                                            21
                                        </span>
                                    </div>
                                    <div className='w-[70px] h-[70px] rounded-full overflow-hidden'>
                                        <img src="https://i1-vnexpress.vnecdn.net/2021/11/05/unnamed2removebgpreviewpng-1636111303.png?w=100&h=100&q=100&dpr=2&fit=crop&s=mapg2hd0dCYKw4LSEPceow" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[320px] pl-[20px]'>

                </div>
            </div>
        </div>
    )
}

export default SectionTopStory