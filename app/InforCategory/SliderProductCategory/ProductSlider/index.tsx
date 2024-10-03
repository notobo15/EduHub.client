import React from 'react'
import x from './productslider.module.scss'
import { FaStar } from "react-icons/fa"
import { Rate } from 'antd'
import Button from 'react-bootstrap/Button'
export default function ProductSlider() {
    return (
        <div className={x.ItemProductSlider}>
            <img src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/goi-hoi-vien-500-khoa-183k.jpg" alt="#" />
            <div className={x.TitleProductSlider}>
                Kỹ năng giao tiếp thông minh
            </div>
            <div className={x.AuthorProductSlider}>
                Nguyễn Văn A
            </div>
            <div className={x.reviewProductSlider}>
                4.0  <Rate allowHalf defaultValue={4} className='ms-1' />
                <span>(234)</span>
            </div>
            <div className={x.PriceProductSlider}>
                360.000 đ
                <p><s>390.000 đ</s></p>
            </div>
            <Button variant='warning' className='mt-3' >Bestseller</Button>
        </div>
    )
}
