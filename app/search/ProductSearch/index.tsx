import React from 'react'
import x from './productsearch.module.scss'
import { Rate } from 'antd'
export default function ProductSearch() {
    return (
        <div className={x.productSearch}>
            <div className={x.imgProductSearch}>
                <img src="https://static.unica.vn/upload/images/2019/04/thiet-ke-concept-nhan-vat-tren-photoshop_m_1555657260.jpg" alt="" />
            </div>
            <div className={x.inforProductSearch}>
                <div className={x.leftInforProductSearch}>
                    <div className={x.TitleProduct}>
                        Kỹ năng giao tiếp thông minh
                    </div>
                    <div className={x.AuthorProduct}>
                        Nguyễn Văn A
                    </div>
                    <div className={x.reviewProduct}>
                        4.0  <Rate allowHalf defaultValue={4} className='ms-1' />
                        <span>(234)</span>
                    </div>
                    <div className={x.timeLessonProduct}>
                        Thời lượng: 32 giờ, 34 bài giảng
                    </div>
                </div>
                <div className={x.priceProductSearch}>
                    360.000 đ
                    <p><s>420.000 đ</s></p>
                </div>
            </div>

        </div>
    )
}