import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function PodcastsSection() {
    return (
        <div className='container w-100 mb-5 max-w-[1130px] flex flex-col m-auto border-b-2'>
            {/* Category */}
            <div className='w-100'>
                <div className='w-100 flex gap-5'>
                    <h4 className=' text-xl font-medium text-end hover:text-blue-400 hover:cursor-pointer transition-all border-b-2 pb-1 border-[#9f224e]'>Podcasts</h4>
                    <p className='text-[#4f4f4f] hover:text-blue-400 hover:cursor-pointer transition-all'>VnExpress hôm nay</p>
                    <p className='text-[#4f4f4f] hover:text-blue-400 hover:cursor-pointer transition-all'>Tiền làm gì?</p>
                    <p className='text-[#4f4f4f] hover:text-blue-400 hover:cursor-pointer transition-all'>Giải mã</p>
                    <p className='text-[#4f4f4f] hover:text-blue-400 hover:cursor-pointer transition-all'>Thẩm định</p>
                </div>
            </div>

            {/* News 2 */}
            <div className='h-[50%] w-100 flex mt-5 border-b-2'>
                <div className='w-[50%] flex gap-3 items-center'>
                    <div className='w-[120px]'>
                        <img src="https://i1-vnexpress.vnecdn.net/2023/02/06/duong-ham-dao-tau-cua-trum-ma-tuy-quyen-luc-nhat-the-gioi-1675682521.jpg?w=160&h=160&q=100&dpr=2&fit=crop&s=L86lHijGrnIANUIBuHuejg" alt="" />
                    </div>
                    <div className='w-[75%] pr-5'>
                        <h4 className='text-left text-xl font-medium mb-3 hover:text-blue-400 transition-all hover:cursor-pointer m-0'>16 tháng đào hầm vượt ngục của trùm ma túy thế giới</h4>
                        <p className='text-left text-sm'>Năm 2014, đàn em của trùm ma túy El Chapo đào một đường hầm dài 1,5 km thông từ phòng giam ra ngoài giúp hắn trốn thoát thành công bất chấp lệnh canh gác nghiêm ngặt. </p>
                    </div>
                </div>

                <div className='w-[50%] flex gap-3 items-center border-l-2 pl-5'>
                    <div className='w-[120px]'>
                        <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/diem-tin-6h-thuyen-chim-o-dong-nai-khong-duoc-don-khach-hon-2-300-nguoi-chet-vi-dong-dat-o-tho-nhi-ky-syria-ss-1675724423.jpg?w=160&h=160&q=100&dpr=2&fit=crop&s=mekiYjlX04zoBcUW3EECfw" alt="" />
                    </div>
                    <div className='w-[75%] pr-5'>
                        <h4 className='text-left text-xl font-medium mb-3 hover:text-blue-400 transition-all hover:cursor-pointer m-0'>Điểm tin 21h: Cơ sở bảo dưỡng có thể được kiểm định; Nga cảnh báo chiến sự Ukraine leo thang</h4>
                        <p className='text-left text-sm'>Khởi tố người lái ca nô khiến 17 khách thiệt mạng; Tòa Hàn Quốc yêu cầu chính phủ bồi thường nạn nhân vụ thảm sát ở </p>
                    </div>
                </div>

            </div>

            {/* News 3 */}
            <div className='w-100 flex justify-between'>
                <div className='w-[32%] px-3 my-5 pl-0 border-r-2'>
                    <h4 className='text-left text-lg font-medium mb-1 hover:text-blue-400 transition-all hover:cursor-pointer m-0'>Người trẻ bôn ba, người già cô đơn</h4>
                    <p className='text-sm'>Chưa kịp mừng khi được tặng smartphone để tiện liên lạc với con trên thành phố, cô Thuý lại tủi thân vì nảy sinh mâu thuẫn khi nhờ con dạy cách dùng điện thoại.</p>
                </div>

                <div className='w-[32%] px-3 my-5 pl-0 border-r-2'>
                    <h4 className='text-left text-lg font-medium mb-1 hover:text-blue-400 transition-all hover:cursor-pointer m-0'>'Chỉ nên đầu tư Crypto bằng tiền nhàn rỗi'</h4>
                    <p className='text-sm'>Từng mất trắng vì Crypto trong đợt giảm sâu năm 2017, song lại trụ vững trong mùa đông tiền số năm 2022, chị Ngô Hương Giang chia sẻ 5 bài học rút ra.</p>
                </div>

                <div className='w-[32%] px-3 my-5 pl-0'>
                    <h4 className='text-left text-lg font-medium mb-1 hover:text-blue-400 transition-all hover:cursor-pointer m-0'>Vỡ nợ vì lướt sóng bất động sản</h4>
                    <p className='text-sm'>Từng kiếm 300-400 triệu chênh lệch mỗi mảnh khi lướt sóng bất động sản, anh Mạnh tất tay khiến toàn bộ gia sản "chôn" trong đất. </p>
                </div>
            </div>
        </div>
    )
}

export default PodcastsSection