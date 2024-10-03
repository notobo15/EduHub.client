'use client'
import x from './footer.module.scss'
import Container from 'react-bootstrap/Container'
import { RiFacebookBoxFill, RiYoutubeFill } from "react-icons/ri"
import { Select, Space } from 'antd'
export default function Footer() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`)
    }
    return (
        <div className={x.footer}>

            <Container>
                <div className={x.footerContent}>

                    <div className={x.footerItem}>
                        <h1>Logo</h1>
                        <p>308 quận 2, TP.Hồ Chí Minh</p>
                        <p>Hotline 1: 0998765541</p>
                        <p>Hotline 2: 0986754321</p>
                        <p>Email: 123@gmail.com</p>
                        <p>08h00-17h00, thứ 2-thứ7</p>
                    </div>
                    <div className={x.footerItem}>
                        <h1>Về Minishop</h1>
                        <p>Giới thiệu về Minishop</p>
                        <p>Câu hỏi thường gặp</p>
                        <p>Chính sách bảo mật</p>
                        <p>Hướng dẫn thanh toán</p>
                        <p>Kích hoạt khóa học</p>
                        <p>Góc chia sẻ</p>
                    </div>
                    <div className={x.footerItem}>
                        <h1>Hợp tác</h1>
                        <p>Đăng ký giảng viên</p>
                        <p>Giải pháp của Minishop</p>
                        <p>Đào tạo doanh nghiệp</p>
                        <p>Đào tạo Minishop</p>
                        <p>Affiliate</p>
                    </div>
                    <div className={x.footerItem}>
                        <h1>Mobile</h1>
                        <img src="https://unica.vn/master/image/app-store.png" alt="#" />
                        <img src="https://unica.vn/master/image/google.png" alt="#" />
                    </div>

                </div>
                <div className={x.footerEnd}>
                    <div className={x.footerBar}>

                    </div>
                    <div className={x.footerInfor}>
                        <div className={x.footerAddress}>
                            <p>Công ty cổ phần đào tạo trực tuyến Unica - Số 247 Cầu Giấy, P. Dịch Vọng, Q. Cầu Giấy, TP Hà Nội. <br />
                                Đại Diện: Ông Nguyễn Trọng Thơ <br />
                                Mã số thuế: 0107695756 cấp tại Phòng đăng ký kinh doanh Sở Kế hoạch và Đầu tư Thành phố Hà Nội <br /></p>
                        </div>
                        <div className={x.footerPage}>
                            <RiFacebookBoxFill />
                            <RiYoutubeFill />
                            <Select
                                defaultValue="Vietnamese"
                                style={{ width: 120 }}
                                onChange={handleChange}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: 'Vietnamese', label: 'Vietnamese' },
                                    { value: 'Yiminghe', label: 'yiminghe' },
                                    { value: 'disabled', label: 'Disabled', disabled: true },
                                ]}
                                className={x.footerSelector}
                            />
                        </div>
                    </div>
                </div>
            </Container>

        </div>

    )
}