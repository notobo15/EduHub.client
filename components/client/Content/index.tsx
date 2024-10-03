'use client'
import Button from 'react-bootstrap/Button'
import Slider from './Slider/page'
import Product from './Product/index'
import X from './Content.module.scss'
import { MdKeyboardArrowRight, MdArrowRight } from "react-icons/md"
import Link from 'next/link'
export default function Content() {
    return (
        <div style={{ marginTop: '15px' }}>
            <Slider />
            <div className={X.title_header}>
                <h1>TÓP BÁN CHẠY</h1>
                <div className={X.seeArrow}>
                    <Link href={'#/'}>Xem thêm </Link>
                    <MdArrowRight />
                </div>
            </div>
            <div className='row'>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
            </div>


            <div className={X.title_header}>
                <h1>SIÊU ƯU ĐÃI HÔM NAY</h1>
                <div className={X.seeArrow}>
                    <Link href={'#/'}>Xem thêm </Link>
                    <MdArrowRight />
                </div>
            </div>
            <div className='row'>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
                <div className="col-3">
                    <Product />
                </div>
            </div>

            {/* Giải pháp khác từ Minishop */}
            <div className={X.uppercase}>
                <div className={X.headerUppercase}>
                    <h1>GIẢI PHÁP KHÁC TỪ MINISHOP</h1>
                </div>
                <div className={X.inforUppercase}>
                    <div className={X.itemUppercase}>
                        <img src="https://static.unica.vn/media/images_v2018/hb-edu.jpg" alt="online" />
                        <h2>Edibit.vn - Ai cũng có thể dạy online</h2>
                        <p>Giải pháp elearning giúp tạo bài giảng, bài trắc nghiệm online chỉ với 1 click
                            chuột
                        </p>
                    </div>
                    <div className={X.itemUppercase}>
                        <img src="https://static.unica.vn/media/images_v2018/hb-aca.jpg" alt="online" />
                        <h2>Acabiz.vn - Ai cũng có thể dạy online</h2>
                        <p> Nâng cao năng lực đội ngũ nền tảng Acabiz và hơn 500 khóa học
                            chọn lọc từ Minishop
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}