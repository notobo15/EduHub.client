'use client'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { FcWorkflow } from "react-icons/fc"
export default function DropdownItem() {
    const items: MenuProps['items'] = [
        {
            key: '1',
            type: 'group',
            label: 'Group title',
            children: [
                {
                    key: '1-1',
                    label: '1st menu item',
                },
                {
                    key: '1-2',
                    label: '2nd menu item',
                },
            ],
        },
        {
            key: '2',
            label: 'sub menu',
            children: [
                {
                    key: '2-1',
                    label: '3rd menu item',
                },
                {
                    key: '2-2',
                    label: '4th menu item',
                },
            ],
        },
        {
            key: '3',
            label: 'disabled sub menu',
            disabled: true,
            children: [
                {
                    key: '3-1',
                    label: '5d menu item',
                },
                {
                    key: '3-2',
                    label: '6th menu item',
                },
            ],
        },
    ];
    return (
        <div>
            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                    <FcWorkflow/>
                    DANH MỤC
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}