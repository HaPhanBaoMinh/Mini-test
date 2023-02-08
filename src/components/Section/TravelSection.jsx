import React from 'react'

function TravelSection() {
    return (
        <div className='container w-100 max-w-[1130px] flex flex-col m-auto '>

            <div className='w-100 flex gap-5 items-end border-t-2 pt-5 mt-8'>
                <h4 className=' text-xl font-medium text-end hover:text-[#9f224e] hover:cursor-pointer transition-all'>Du lịch</h4>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Điểm đến </p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Ẩm thực</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Dấu chân</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Tư vấn</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Cẩm nang</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Ảnh</p>
            </div>

            <div className='w-100 mt-3 flex'>
                <div className='w-[46%] h-auto border-r-2' >
                    <img className='w-[100%] pr-5' src="https://i1-dulich.vnecdn.net/2023/02/07/bao-tang-nghe-thuat-hoi-giao-b-1120-7431-1675771748.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=mBQjj4S0JUAYT3V7-4Ebuw" alt="" />
                    <h4 className='text-[#867428] hover:text-blue-400 text-[25px] hover:cursor-pointer font-medium transition-all mt-4'>Kinh nghiệm khám phá Qatar khi transit</h4>
                    <p className='text-sm'>Du khách không phải xin visa transit, thủ tục tham quan đơn giản, có thể lựa chọn thời gian từ một đến 4 tiếng, tùy nhu cầu và chi phí.</p>
                </div>

                <div className='w-[27%] border-r-2 px-5'>
                    <div className='pb-5 border-b-2'>
                        <img src="https://i1-dulich.vnecdn.net/2023/02/07/1-1675735692-9999-1675735787.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=Wwwtdhu4kG6SnvL9h2-u9g" alt="" />
                        <p className='mt-1 font-medium text-[#867428]'>Trung Quốc mở lại tour du lịch nước ngoài tới 20 quốc gia</p>
                    </div>

                    <div className='pt-5'>
                        <img src="https://i1-dulich.vnecdn.net/2023/02/07/1-6000-1675746937-1675747140-3234-1675747392.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=LI2VeS6_CFOqGCrVXk2PMQ" alt="" />
                        <p className='mt-1 font-medium text-[#867428]'>Lâu đài 2.000 năm tuổi ở Thổ Nhĩ Kỳ sụp vì động đất</p>
                    </div>
                </div>

                <div className='w-[27%] border-r-2 px-4'>
                    <div className='flex pb-5 border-b-2'>
                        <p className='mt-1 mr-2 tmdt-sm font-medium text-black'>Các quán cà phê mở xuyên đêm ở trung tâm TP HCM</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-dulich.vnecdn.net/2023/02/07/139758181-2778502455734767-138-7750-4268-1675738351.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=DFJKgq8j8IjyAw0YNDgtbQ" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5 border-b-2'>
                        <p className=' mr-2 text-md font-medium text-black'>Ngủ lều giữa cái lạnh 3 độ C dưới tán hoa mận</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-dulich.vnecdn.net/2023/02/06/1-1675663103-3040-1675663319.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=wKa1pWq1t8GJ9H9uy6YBPw" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5 border-b-2'>
                        <p className=' mr-2 text-md font-medium text-black'>Làng cổ Nhật Bản phủ tuyết dày trong đợt lạnh kỷ lục</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-dulich.vnecdn.net/2023/02/06/nb3-1-1675656556-1675656886.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=_xtEzhcOcluSjCcQJt5iIg" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5'>
                        <p className=' mr-2 text-md font-medium text-black'>Trứng vịt lộn vào top 100 món ăn tệ nhất thế giới 2023</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-dulich.vnecdn.net/2023/02/06/1-1675650379-6174-1675650431.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=gUIgAe0ivJXEQatl2p0P9w" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TravelSection