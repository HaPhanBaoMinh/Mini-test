import React, { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { MdMessage } from 'react-icons/md'
import ItemNews from './ItemNews'
import BoxCategory from './BoxCategory'
import BoxGiaVang from './BoxGiaVang'
import SwiperCategory from './SwiperCategory'
import { v4 as uuidv4 } from 'uuid';

const news1 = [
    {
        title: "Hơn 4.300 người chết vì động đất ở Thổ Nhĩ Kỳ, Syria",
        discription: "Số người chết trong trận động đất ở Thổ Nhĩ Kỳ và Syria đã tăng lên 4.365, nhiều người vẫn kẹt dưới các đống đổ nát.",
        img: "https://i1-vnexpress.vnecdn.net/2023/02/06/dongdatthonhiky3-1675696127-1649-1675696202.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=kfV2jzQWA5IN8AhpP0nLeA"
    },
    {
        title: "Bốn thanh thiếu niên tử vong sau va chạm với ôtô",
        discription: "ĐIỆN BIÊNSau va chạm liên hoàn với ba xe máy trên quốc lộ 279, chiếc bán tải lật ngửa làm bốn thanh thiếu niên tử vong, năm người khác bị thương, đêm 6/2.",
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/329194614-1971086549900645-658-5527-5156-1675735060.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=9STKPNDJyaBMXkwm0Ny7zQ"
    },
    {
        title: "Lãi suất liên ngân hàng tăng lên 13% một năm",
        discription: "Lãi suất vay mượn tiền đồng giữa các ngân hàng, kỳ hạn 9 tháng hôm 2/2 lên 13% một năm, nhưng doanh số giao dịch chỉ 200 tỷ đồng. ",
        img: "https://i1-kinhdoanh.vnecdn.net/2023/02/07/vpbank-thanhtung36-1675706581-3202-1675706616.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=vkYIsLs1aclvXLrdTmEVSw"
    },
    {
        title: "Mỹ không trả mảnh vỡ khí cầu cho Trung Quốc",
        discription: "Mỹ thông báo đang thu hồi các mảnh vỡ từ khí cầu Trung Quốc bị bắn hạ để phân tích và không có kế hoạch trả lại cho Bắc Kinh.",
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/cats-1675737924-7749-1675737974.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=Jl9ITVZ1bvfept2Ljfvt7g"
    },
    {
        title: "Nga mất nửa nguồn thu thuế từ dầu khí",
        discription: "Các lệnh trừng phạt và xung đột với phương Tây khiến nguồn thu từ dầu khí trong tháng 1 của Nga giảm mạnh, từ đó kéo thâm hụt ngân sách lên cao. ",
        img: "https://i1-kinhdoanh.vnecdn.net/2023/02/07/oilgasrussia-1675742414-7257-1675742431.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=esCqMh6fyebnvdJG26XF9w"
    },
    {
        title: "Loạt MPV cỡ nhỏ giảm giá mạnh sau Tết",
        discription: "Tất cả các xe ở phân khúc MPV giảm giá hàng chục triệu đồng hoặc tặng phụ kiện để kích cầu tiêu dùng",
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/stargazervne-1675739902-167573-4206-9203-1675740450.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=khyqVIU8dSQAYUJdP7mDaA"
    },
    {
        title: "Người dân té nước, đập nồi trong lễ hội Làm Chay",
        discription: "LONG AN - Màn dội nước, đập nồi, nhảy bao bố, bắt vịt tại lễ hội Làm Chay ở thị trấn Tầm Vu, diễn ra sau 3 năm dừng vì Covid-19, thu hút 20.000 người tham gia. ",
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/dsc00818-jpg-1675719839-1675732147.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=SVvpCS-v0a1g0hAiGaFihg"
    }
]

const news2 = [
    {
        title: "Tiếng kêu cứu trong đêm sau trận động đất Thổ Nhĩ Kỳ",
        discription: "Tiếng la hét cầu cứu liên tục vang lên từ dưới đống đổ nát, khi cứu hộ Thổ Nhĩ Kỳ nỗ lực xuyên đêm tìm kiếm nạn nhân thảm họa động đất.",
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/338n8rk-highres-1-1675736729-7542-1675736915.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=eKfEV0msxprxEVsjzHrFzw"
    },
    {
        title: "Một ngày của Elon Musk diễn ra thế nào",
        discription: "Ở tuổi 51, việc điều hành Twitter cùng bốn công ty khác khiến Elon Musk phải đánh đổi, không có thời gian nghỉ ngơi, đặc biệt là giấc ngủ.",
        img: "https://i1-sohoa.vnecdn.net/2023/02/06/screenshot-2023-02-06-at-16-06-4523-2170-1675674551.png?w=220&h=132&q=100&dpr=1&fit=crop&s=yFq3LF967XUt7pCnYgmOUA"
    },
    {
        title: "Nông dân mang sâm Ngọc Linh đi thi",
        discription: "KON TUM-Những gia đình, doanh nghiệp ở huyện Tu Mơ Rông đã đào những củ sâm Ngọc Linh chất lượng đi dự thi, củ đạt giải nhất nặng 250 gram, bán giá 250 triệu",
        img: "https://i1-vnexpress.vnecdn.net/2023/02/06/7b0c0c96-1d76-4f12-8818-bf8ab7e0ea81-jpeg-1675668031-1675690423.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=97USbtoJdVyb23RBPx8wGw"
    },
    {
        title: "Hàng không năm 2022 - bay nhiều vẫn lỗ",
        discription: "Du lịch phục hồi nhưng năm 2022, Vietnam Airlines, Vietjet vẫn chịu nhiều khó khăn, trong khi các doanh nghiệp phụ trợ đã lãi lớn trở lại.",
        img: "https://i1-kinhdoanh.vnecdn.net/2023/02/06/WEBmaybay101599313801995315993-2359-1115-1675674622.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=QNqXEQ6VDhgibIhycR9uxQ"
    },
    {
        title: "Tướng Mỹ thừa nhận nhiều lần để lọt khí cầu Trung Quốc",
        discription: 'Chỉ huy Bộ tư lệnh phương Bắc quân đội Mỹ thừa nhận nước này nhiều lần không phát hiện khí cầu Trung Quốc do "lỗ hổng" trong hệ thống giám sát. ',
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/2023-02-04t221944z-180973893-r-8168-9491-1675739557.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=qZYJVdxWCPKxzOt2nSs2sQ"
    },
    {
        title: "Kherson hứng chịu mùa đông cay đắng dưới hỏa lực pháo binh Nga",
        discription: 'Kherson là niềm tự hào của Ukraine sau chiến dịch phản công chớp nhoáng, nhưng thành phố giờ đây trở thành "túi hỏa lực" của pháo binh Nga bên kia sông Dnieper.',
        img: "https://i1-vnexpress.vnecdn.net/2023/02/06/kherson-3-jpeg-9130-1675673673-1947-3364-1675683864.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=N02q7O4Zmmfp4XMUg7eJBA"
    },
]

const new_box = [
    {
        title: 'Kinh doanh',
        category: ['Quốc tế', 'Doanh nghiệp', 'Chứng khoán', 'Bất động sản', 'Bảo hiểm'],
        news_title: [
            'Năm lãi lớn của ngành hóa chất',
            'Vietnam Airlines nối thêm đường bay đến Trung Quốc',
            'Nga mất nửa nguồn thu thuế từ dầu khí 121'
        ],
        news_1: {
            title: 'Mỹ muốn áp thuế 200% lên nhôm Nga',
            img: "https://i1-kinhdoanh.vnecdn.net/2023/02/07/Russiaaluminumbloom-1675757065-7503-1675757081.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=AEons42vHQ_zQ6ytQxNT1w",
            description: "Mỹ đang cân nhắc nâng thuế nhập khẩu với nhôm Nga lên 200%, nhằm tăng sức ép với Moskva quanh vấn đề Ukraine."
        },
        news_2: {
            title: 'Khách có thể gọi Cục Hàng không nếu mua vé máy bay cao hơn quy định',
            description: "Nhiều cổ phiếu vốn hóa lớn bị xả hàng trong khoảng nửa tiếng cuối phiên khiến VN-Index lao nhanh, giảm hơn 23 điểm."
        }
    },
    {
        title: 'Thể thao',
        category: ['Bóng đá', 'Tennis', 'Marathon', 'Lịch thi đấu'],
        news_title: [
            'Chuyện gì xảy ra nếu Man City bị trừ điểm?',
            'Djokovic cách kỷ lục thế giới ba tuần',
            'Tsitsipas: ‘Djokovic chưa đạt giới hạn’'
        ],
        news_1: {
            title: 'Cựu ngôi sao Liverpool đòi chức vô địch Ngoại hạng Anh',
            img: "https://i1-thethao.vnecdn.net/2023/02/07/anh-1675761569-2240-1675761579.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=cwiGwb1bcrKSn0mkksrEmA",
            description: "ANH-  Jose Enrique, Lucas Leiva rồi Jon Flanagan cùng đặt câu hỏi về khả năng nhận danh hiệu Ngoại hạng Anh sau ... "
        },
        news_2: {
            title: 'HAGL đã gửi đơn kiện VPF',
            description: "HÀ NỘISáng 7/2, Toà án Nhân dân quận Nam Từ Liêm đã tiếp nhận đơn của CLB HAGL kiện Công ty VPF độc quyền tài trợ V-League."
        }
    },
    {
        title: 'Giải trí',
        category: ['Giới sao', 'Phim', 'Nhạc', 'Thời trang', 'Sách'],
        news_title: [
            'Ocean Vương - tác giả gốc Việt chinh phục văn đàn Mỹ',
            'Những kiểu mặc khiến bạn trông già hơn',
            'Hà Lê ra MV cưới'
        ],
        news_1: {
            title: 'Thiếu nữ trong tranh Alexander Averin',
            img: "https://i1-giaitri.vnecdn.net/2023/02/07/toptranh2-1675761246-8294-1675761405.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=D7FyvpLRNU4QNM-2-ZQ2jQ",
            description: "Họa sĩ Nga Alexander Averin khắc họa các cô gái giữa thảo nguyên, bên bờ biển, trong vườn hoa gợi cuộc sống hài hòa, yên bình. "
        },
        news_2: {
            title: "Nhật Cường: 'Tôi sống an nhàn ở tuổi U60'",
            description: 'Nhật Cường nói 30 năm đi diễn anh sống tiết kiệm, không dính vào cờ bạc, rượu chè nên sống bình yên ở tuổi 58.'
        }
    },
    {
        title: 'Sức khỏe',
        category: ['Tin tức', 'Dinh dưỡng', 'Khỏe đẹp', 'Các bệnh', 'Vaccine', 'Di chứng Covid'],
        news_title: [
            'Bé gái ngã vỡ thận',
            'Những thực phẩm có thể gây hại sinh lý nam giới',
            'Kem da cho trẻ em bị Mỹ nghi nhiễm chì'
        ],
        news_1: {
            title: 'Bé trai ở Phú Thọ chào đời nặng 5,4 kg',
            img: "https://i1-suckhoe.vnecdn.net/2023/02/07/0f92c6270469de378778-167576163-2472-8202-1675761798.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=2rNa2YCLhOjDfJyvHqsQ5A",
            description: "Thai phụ 21 tuổi mang thai lần đầu, được các bác sĩ Trung tâm y tế huyện Hạ Hòa mổ đẻ, đón em bé nặng 5,4 kg chào đời."
        },
        news_2: {
            title: "Cứu thai phụ bị vỡ tử cung, em bé chui ra ổ bụng",
            description: 'TP HCM-Thai phụ 41 tuổi, bị vỡ tử cung do nhau cài răng lược, em bé chui ra ổ bụng, cả mẹ lẫn con ... '
        }
    },
    {
        title: 'Đời sống',
        category: ['Bài học sống', 'Tổ ấm', 'Nhà', 'Tiêu dùng', 'Cooking'],
        news_title: [
            'Ít tình cũ giúp hôn nhân hạnh phúc hơn',
            'Góc khuất của những video việc tử tế',
            'Bi hài xem bói đầu năm'
        ],
        news_1: {
            title: '9 loại thực phẩm nên cất trữ trong tủ đá',
            img: "https://i1-giadinh.vnecdn.net/2023/02/07/thucpham-1675763672-6864-1675763748.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=jrbbw4FeQsAN-Vb4QKV0cw",
            description: "Nấm, chanh, gừng, phô mai... là những loại thực phẩm có thể bảo quản trong tủ đá để trữ trong thời gian dài mà không làm giảm hương vị. "
        },
        news_2: {
            title: "3 nguyên tắc của một bữa ăn ngon",
            description: 'Hướng dẫn chế độ ăn của Mỹ khuyên nên tập trung 85% lượng thức ăn nhằm nuôi dưỡng cơ thể, phần còn lại dành cho những món bạn thấy . . .'
        }
    },
    {
        title: 'Giáo dục',
        category: ['Tin tức', 'Tuyển sinh', 'Chân dung', 'Du học', 'Giáo dục 4.0', 'Trắc nghiệm'],
        news_title: [
            'Phản ứng trái ngược của trường học Mỹ với ChatGPT',
            'Bốn kinh nghiệm nâng điểm từ 8.0 lên 8.5 IELTS',
            'Công nghệ thông tin và Kỹ thuật phần mềm khác gì nhau?'
        ],
        news_1: {
            title: 'Du học sinh Việt gặp khó khi giá thuê nhà ở Australia tăng mạnh',
            img: "https://i1-vnexpress.vnecdn.net/2023/02/07/329754382-719691063022796-6738-9875-4420-1675762540.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=Fg1GV9lpfSBPXRbos-pX6A",
            description: "Hoàng Thắng phải tính toán để không tiêu quá số tiền học bổng, khi giá thuê nhà ở Australia tăng cao nhất trong ..."
        },
        news_2: {
            title: "Tổng thống đầu tiên dùng ChatGPT để viết bài phát biểu là ai?",
            description: 'Trước gần 20.000 khán giả tại một hội thảo về an ninh mạng hôm 1/2, ông tiết lộ phần mở đầu bài phát ... '
        }
    }
]

function SectionSteamHome() {
    const [news_1, setnews_1] = useState(news1)
    const [news_2, setnews_2] = useState(news2)
    const [newBox, setnewBox] = useState(new_box)

    console.log(newBox[0])
    return (
        <div className='container w-100 mb-5 max-w-[1130px] flex m-auto border-b-2'>
            <div className='w-100 h-100'>
                <div className='w-[400px] pr-5 float-left'>

                    {/* Item */}
                    {
                        news_1.map(newItem => <ItemNews key={uuidv4()} newItem={newItem} />)
                    }

                    <div className='w-100 py-5 border-b-2'>
                        <img className='w-[100%]' src='https://s1.vnecdn.net/vnexpress/restruct/i/v736/v2_2019/pc/graphics/Nga-Ukraine-Pc.jpg' alt="" />
                    </div>

                    {
                        news_2.map((newItem, index) => <ItemNews key={uuidv4()} newItem={newItem} isLastIndex={index === news_2.length - 1} />)
                    }

                </div>

                <BoxCategory box={newBox[0]} />
                <BoxGiaVang />
                <BoxCategory box={newBox[1]} />
                <BoxGiaVang />
                <BoxCategory box={newBox[2]} />
                <SwiperCategory />
                <BoxCategory box={newBox[3]} />
                <BoxCategory box={newBox[4]} />
                <BoxCategory box={newBox[5]} />

            </div>
        </div>
    )
}

export default SectionSteamHome