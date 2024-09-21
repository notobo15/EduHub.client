import React from "react";
import style from "./Header.module.scss";
import { Avatar, Button, Dropdown, Layout } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { IoLanguage } from "react-icons/io5";
import { FaBell, FaMoon, FaRegSun } from "react-icons/fa";
import { SetIsCollapseSider } from "@/features/admin/adminSlice";
const items: MenuProps["items"] = [
  {
    key: "1",
    icon: (
      <img
        width={26}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/383px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
      />
    ),
    label: "English",
  },
  {
    key: "2",
    icon: (
      <img
        width={26}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
      />
    ),
    label: "VietNam",
  },
];
export default function Index() {
  const { Header, Content } = Layout;
  const collapsed = useAppSelector((state) => state.admin.isCollapseSider);
  const dispatch = useAppDispatch();
  function handleCollapse(value: boolean) {
    dispatch(SetIsCollapseSider(value));
  }
  return (
    <Header className={style.header}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => handleCollapse(!collapsed)}
        className={style.btnCollapse}
      />
      <div className={style.headerRight}>
        <Button type="text" icon={<FaBell fontSize={20} />}></Button>
        <Button type="text" icon={<FaMoon fontSize={20} />}></Button>
        <Button type="text" icon={<FaRegSun fontSize={20} />}></Button>

        <Dropdown menu={{ items }} placement="topRight">
          <Button type="text" icon={<IoLanguage fontSize={20} />}></Button>
        </Dropdown>
        <Avatar size={36} icon={<UserOutlined />} />
      </div>
    </Header>
  );
}
