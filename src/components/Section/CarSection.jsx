import React from 'react'

function CarSection() {
    return (
        <div className='container w-100 mb-5 max-w-[1130px] flex flex-col m-auto border-b-2 pb-5'>

            <div className='w-100 flex gap-5 items-end border-t-2 pt-5 mt-8'>
                <h4 className=' text-xl font-medium text-end hover:text-[#9f224e] hover:cursor-pointer transition-all'>Xe</h4>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Thị trường </p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>cầm lái</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>V-Car</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Diễn đàn</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Video</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Cẩm nang lái xe</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Thi bằng lái</p>
                <p className='text-[#4f4f4f] text-sm hover:text-blue-400 hover:cursor-pointer transition-all'>Mua bán</p>
            </div>

            <div className='w-100 mt-3 flex'>
                <div className='w-[46%] h-auto border-r-2' >
                    <img className='w-[100%] pr-5' src="https://i1-vnexpress.vnecdn.net/2023/02/07/BAC3-1675756287-3233-1675756402.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=8I6gFTwpEseExgwP-jHwVQ" alt="" />
                    <h4 className='text-[#867428] hover:text-blue-400 text-[25px] hover:cursor-pointer font-medium transition-all mt-4'>Hầu hết các nước trên thế giới áp dụng 'vùng xanh' khi xử phạt nồng độ cồn</h4>
                    <p className='text-sm'>Vi phạm có thể xác định qua máu hoặc hơi thở, và nhiều nơi, tài xế có thể uống bia hoặc rượu trong mức cho phép.  </p>
                </div>

                <div className='w-[27%] border-r-2 px-5'>
                    <div className='pb-5 border-b-2'>
                        <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/stargazervne-1675739902-167573-4206-9203-1675740450.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=3WLBRsaHFz_QRzurjxziVw" alt="" />
                        <p className='mt-1 font-medium text-[#867428]'>Loạt MPV cỡ nhỏ giảm giá mạnh sau Tết</p>
                    </div>

                    <div className='pt-5'>
                        <img src="https://i1-vnexpress.vnecdn.net/2023/02/06/328624093-1192563868104976-633-3031-5598-1675668137.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=l7aSFjTWNXfJtSC0HkuKGw" alt="" />
                        <p className='mt-1 font-medium text-[#867428]'>'Nhiều người hằm hè chỗ đỗ ôtô vô căn cứ'</p>
                    </div>
                </div>

                <div className='w-[27%] border-r-2 px-4'>
                    <div className='flex pb-5 border-b-2'>
                        <p className='mt-1 mr-2 tmdt-sm font-medium text-[#867428]'>'Nên có 'vùng xanh' trong việc giới hạn nồng độ cồn'</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-sohoa.vnecdn.net/2023/02/07/phone-5139-1675743788.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=rxiLgKRxXQsDHm26PS3uCg" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5 border-b-2'>
                        <p className=' mr-2 text-md font-medium text-[#867428]'>Gần 7.000 nhân viên Dell mất việc</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-sohoa.vnecdn.net/2023/02/06/screenshot-2023-02-06-at-21-13-7161-1939-1675693127.png?w=120&h=72&q=100&dpr=1&fit=crop&s=-gTPw3T8h7mYFGgMrboB1w" alt="" />
                    </div>

                    <div className='mt-5 flex pb-5'>
                        <p className=' mr-2 text-md font-medium text-[#867428]'>Xe đi 15.000 km bảo dưỡng những gì?</p>
                        <img className='w-[100px] h-[60px]' src="https://i1-vnexpress.vnecdn.net/2023/02/07/baoduongxeoto2-1675754149-1998-1675754150.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=zfS66i0GkdaqyGRNsaTHGg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarSection