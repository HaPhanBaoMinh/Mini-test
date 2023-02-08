import React from 'react'

function BoxGiaVang() {
    return (
        <div className='w-[700px] pb-5 float-right mb-5 border-b-2'>
            <table className='w-100 block text-[#063C73] bg-[#f5f8ff]'>
                <tr className='w-100'>
                    <th className='border-2 text-sm text-left px-3 w-[63%]'>TỶ GIÁ NGOẠI TỆ</th>
                    <th className='border-2 text-sm w-[21%] text-right px-3'>Mua TM</th>
                    <th className='border-2 text-sm w-[21%] text-right px-3'>Mua CK	</th>
                    <th className='border-2 text-sm w-[21%] text-right px-3'>Bán</th>
                </tr>
                <tr>
                    <td className='border-2 text-sm w-[21%] text-left px-3'>USD/VNĐ</td>
                    <td className='border-2 text-sm w-[21%] text-right px-3'>23.410	</td>
                    <td className='border-2 text-sm w-[21%] text-right px-3'>23.430	</td>
                    <td className='border-2 text-sm w-[21%] text-right px-3'>23.730</td>
                </tr>
                <tr>
                    <td className='border-2 text-sm w-[21%] text-left px-3'>EUR/VNĐ	</td>
                    <td className='border-2 text-sm w-[21%] text-right px-3'>24.891	</td>
                    <td className='border-2 text-sm w-[21%] text-right px-3'>24.966	</td>
                    <td className='border-2 text-sm w-[21%] text-right px-3'>25.567</td>
                </tr>

            </table>
        </div>
    )
}

export default BoxGiaVang