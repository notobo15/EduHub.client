'use client'
import React, { useState } from 'react'
import x from './search.module.scss'
import { IoFilterOutline } from "react-icons/io5"
import { Select, Space, Radio, Rate, Pagination } from 'antd'
import Button from 'react-bootstrap/Button'
import type { RadioChangeEvent } from 'antd'
import ProductSearch from './ProductSearch'
const handleChange = (value: string) => {
    console.log(`selected ${value}`)
}
export default function Search() {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div>
            <div className={x.headerSearch}>
                <h1>34 kết quả cho 'Photoshop'</h1>
                <div className={x.filterSearch}>
                    <button> <div className={x.iconFillter}> <IoFilterOutline /> Bộ lọc</div> </button>
                    <Select
                        title='sắp xếp theo'
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
            <div className={x.infoSearch}>
                <div className={x.reviewSearch}>
                    <div className={x.reviewStarSearch}>
                        <h1>Đánh giá</h1>
                        <Radio value={1}><Rate allowHalf defaultValue={4.5} className='ms-1' /> Từ 4.5 trở lên</Radio> <br />
                        <Radio value={2}><Rate allowHalf defaultValue={4} className='ms-1' /> Từ 4 trở lên</Radio> <br />
                        <Radio value={3}><Rate allowHalf defaultValue={3} className='ms-1' /> Từ 3 trở lên</Radio>
                    </div>
                    <div className={x.reviewTimeSearch}>
                        <h1>Theo thời lượng</h1>
                        <Radio value={1}>1 đến 3 giờ (1)</Radio> <br />
                        <Radio value={1}>3 đến 6 giờ (14)</Radio> <br />
                        <Radio value={1}>6 đến 15 giờ (13)</Radio>
                    </div>

                </div>
                <div className={x.productSearch}>
                    <ProductSearch />
                    <ProductSearch />
                    <ProductSearch />
                    <ProductSearch />
                    <ProductSearch />
                    <ProductSearch />
                    <ProductSearch />
                    <ProductSearch />
                    <div className={x.paginationProductSearch}>
                        <Pagination
                            total={85}
                            showSizeChanger
                            showQuickJumper
                            showTotal={(total) => `Total ${total} items`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
