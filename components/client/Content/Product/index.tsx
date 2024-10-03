import React from 'react'
import product from './Product.module.scss'
import { FaStar } from "react-icons/fa"
import { Rate } from 'antd'
import Button from 'react-bootstrap/Button'
export default function Product() {
    return (
        <div className={product.ItemProduct}>
            <img src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/goi-hoi-vien-500-khoa-183k.jpg" alt="#" />
            <div className={product.TitleProduct}>
                Kỹ năng giao tiếp thông minh
            </div>
            <div className={product.AuthorProduct}>
                Nguyễn Văn A
            </div>
            <div className={product.reviewProduct}>
                4.0  <Rate allowHalf defaultValue={4} className='ms-1' />
                <span>(234)</span>
            </div>
            <div className={product.PriceProduct}>
                360.000 đ
                <p><s>390.000 đ</s></p>
            </div>
            <Button variant='warning' className='mt-3' >Bestseller</Button>
        </div>
    )
}
