import React from 'react'
import x from './productcategory.module.scss'
import { Rate } from 'antd'
export default function ProductCategory() {
    return (
        <div className={x.productCategory}>
            <div className={x.imgProductCategory}>
                <img src="https://static.unica.vn/upload/images/2019/04/thiet-ke-concept-nhan-vat-tren-photoshop_m_1555657260.jpg" alt="" />
            </div>
            <div className={x.inforProductCategory}>
                <div className={x.leftInforProductCategory}>
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
                <div className={x.priceProductCategory}>
                    360.000 đ
                    <p><s>420.000 đ</s></p>
                </div>
            </div>

        </div>
    )
}
