import React from 'react'

function TechSection() {
    return (
        <div className='container w-100 mb-5 max-w-[1130px] flex flex-col m-auto border-b-2 bg-[#fcfaf6] p-5'>
            <h2 className='text-[#867428] text-3xl font-medium pb-5'>Khoa học - Công nghệ</h2>

            <div className='w-100 flex gap-5 items-end'>
                <h4 className=' text-xl font-medium text-end hover:text-[#9f224e] hover:cursor-pointer transition-all'>Khoa học</h4>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Việt Nam</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Phát minh</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Ứng dụng</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Thế giới tự nhiên</p>
            </div>
            <div className='w-100 mt-3 flex'>
                <div className='w-[46%] h-auto border-r-2' >
                    <img className='w-[100%] pr-5' src="https://i1-vnexpress.vnecdn.net/2023/02/07/Caoconset-1675755541-9830-1675755905.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=Nh2alnb4zz-MpA2CnxVb7A" alt="" />
                    <h4 className='text-[#867428] hover:text-blue-400 text-[25px] hover:cursor-pointer font-medium transition-all mt-4'>Đàn cáo con phá hỏng chuyến đi săn của mẹ</h4>
                    <p className='text-sm'>TRUNG QUỐC-Chưa học được cách lặng lẽ rình mồi, đàn cáo con khiến mẹ chúng không thể săn thỏ pika. </p>
                </div>

                <div className='w-[27%] border-r-2 px-5'>
                    <div className='pb-5 border-b-2'>
                        <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/Taucamap-1675763046-1420-1675763800.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=8dIPbNPuKpKPxmEjQZeTkw" alt="" />
                        <p className='mt-1 font-medium text-[#867428]'>'Tàu cá mập' tốc độ 89 km/h</p>
                    </div>

                    <div className='pt-5'>
                        <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/VNEBuild-1675759100-7444-1675759214.png?w=380&h=228&q=100&dpr=1&fit=crop&s=6GCdVkjJlZ2VxA_MqRjVwA" alt="" />
                        <p className='mt-1 font-medium text-[#867428]'>Nhà chọc trời xây từng tầng từ trên xuống</p>
                    </div>
                </div>

                <div className='w-[27%] px-4'>
                    <div className='flex pb-5 border-b-2'>
                        <p className='mt-1 mr-2 text-sm font-medium text-[#867428]'>Cửa sổ kiểm soát ánh sáng lấy cảm hứng từ da mực</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-vnexpress.vnecdn.net/2023/02/07/cuasolong-1675742271-8820-1675742648.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=xcopISAhBtAR7kNrOtUgMg" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5 border-b-2'>
                        <p className=' mr-2 text-sm font-medium text-[#867428]'>Xe điện của Elon Musk sau 5 năm bay vào vũ trụ</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-vnexpress.vnecdn.net/2023/02/07/VNETesla-1675744146-8228-1675744272.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=txko6ihZg10f2t9oFu5jAQ" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5 border-b-2'>
                        <p className=' mr-2 text-sm font-medium text-[#867428]'>Trung Quốc thúc đẩy chương trình thám hiểm Mặt Trăng</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-vnexpress.vnecdn.net/2023/02/07/mattrang2-1675738549-7306-1675738923.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=eawSa_Hz5eTkeXh3CM-8TA" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5'>
                        <p className=' mr-2 text-sm font-medium text-[#867428]'>Những công trình lịch sử bị phá hủy trong động đất Thổ Nhĩ Kỳ</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-vnexpress.vnecdn.net/2023/02/07/VNECastle-1675735865-2528-1675736048.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=nt7wbF2u0V_4Ny1XFUSYZw" alt="" />
                    </div>
                </div>
            </div>

            <div className='w-100 flex gap-5 items-end border-t-2 pt-5 mt-8'>
                <h4 className=' text-xl font-medium text-end hover:text-[#9f224e] hover:cursor-pointer transition-all'>Số hóa</h4>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Công nghệ</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Sản phẩm</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Blockchain</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Startup</p>
            </div>
            <div className='w-100 mt-3 flex'>
                <div className='w-[46%] h-auto border-r-2' >
                    <img className='w-[100%] pr-5' src="https://i1-sohoa.vnecdn.net/2023/02/07/GG-2968-1675739784.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=n2bjbzNS0oBJ3zP-6SQiwg" alt="" />
                    <h4 className='text-[#867428] hover:text-blue-400 text-[25px] hover:cursor-pointer font-medium transition-all mt-4'>Google ra chatbot AI cạnh tranh với ChatGPT</h4>
                    <p className='text-sm'>Google bắt đầu cho một nhóm người dùng thử nghiệm chatbot có tên Bard trước khi phát hành rộng rãi thời gian tới. </p>
                </div>

                <div className='w-[27%] border-r-2 px-5'>
                    <div className='pb-5 border-b-2'>
                        <img src="https://i1-sohoa.vnecdn.net/2023/02/06/screenshot-2023-02-06-at-16-06-4523-2170-1675674551.png?w=380&h=228&q=100&dpr=1&fit=crop&s=rpX_wXM7IovKBTgiHleiAQ" alt="" />
                        <p className='mt-1 font-medium text-[#867428]'>Một ngày của Elon Musk diễn ra thế nào</p>
                    </div>

                    <div className='pt-5'>
                        <img src="https://i1-sohoa.vnecdn.net/2023/02/06/1x-1-1675670086-5505-1675670354.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=0jc59DsN-tLJLBmrsT8hnw" alt="" />
                        <p className='mt-1 font-medium text-[#867428]'>Bán dẫn Trung Quốc đối mặt áp lực ngay đầu năm</p>
                    </div>
                </div>

                <div className='w-[27%] px-4'>
                    <div className='flex pb-5 border-b-2'>
                        <p className='mt-1 mr-2 tmdt-sm font-medium text-[#867428]'>Giá iPhone tăng 66% kể từ 2009</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-sohoa.vnecdn.net/2023/02/07/phone-5139-1675743788.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=rxiLgKRxXQsDHm26PS3uCg" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5 border-b-2'>
                        <p className=' mr-2 text-md font-medium text-[#867428]'>Mở hộp Galaxy S23 Ultra</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-sohoa.vnecdn.net/2023/02/06/DSC8699.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=oNizTIM62gbnbbsQUJdwrg" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5 border-b-2'>
                        <p className=' mr-2 text-md font-medium text-[#867428]'>Gần 7.000 nhân viên Dell mất việc</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-sohoa.vnecdn.net/2023/02/06/screenshot-2023-02-06-at-21-13-7161-1939-1675693127.png?w=120&h=72&q=100&dpr=1&fit=crop&s=-gTPw3T8h7mYFGgMrboB1w" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5'>
                        <p className=' mr-2 text-md font-medium text-[#867428]'>Tại sao có điều hòa vẫn nên mua máy hút ẩm</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-sohoa.vnecdn.net/2023/02/06/dehumidifier-vs-air-conditione-8928-1749-1675675927.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=eQss7CEG8oe0wMQzvEBcKw" alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TechSection