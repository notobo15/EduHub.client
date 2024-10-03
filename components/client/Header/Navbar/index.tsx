'use client'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import DropdownItem from '../DropdownItem/page'
import header from '../Navbar/Navbar.module.scss'
import { CiSearch, CiShoppingCart } from "react-icons/ci"
import Form from 'react-bootstrap/Form'
import { Input, Space, MenuProps, Dropdown, Badge } from 'antd'
import type { GetProps } from 'antd'
import { DownOutlined } from '@ant-design/icons';

const { Search } = Input
type SearchProps = GetProps<typeof Input.Search>
const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value)
export default function Narbar() {
    return (
        <div className={header.Appbar}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <div className={header.logo}>MiniShop</div>
                <div>
                    <DropdownItem />
                </div>
                <div className={header.search}>
                    <Link href={'/search'}>
                        <Search
                            placeholder="Search..."
                            onSearch={onSearch}
                            style={{ width: 500 }}
                        /></Link>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Link href={'#'} className='me-4 fs-6'>Doanh Nghiệp</Link>
                <Link href={'#'} className='me-4 fs-6'>Hội Viên</Link>
                <div className={header.car}>
                    <Badge count={99} >
                        <CiShoppingCart className={header.iconCar} />
                    </Badge>
                </div>
                <Button className={header.btnLogin} variant=''>Đăng Nhập</Button>
                <Button className={header.btnLogin} >Đăng Ký</Button>
                <div className="user-profile">

                </div>
            </div>
        </div>
    )
}