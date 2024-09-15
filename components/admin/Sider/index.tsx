"use client";
import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  ProductOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import style from "./Sider.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { SetIsCollapseSider } from "@/redux/adminReducer";
import Link from "next/link";
import { FaPerson, FaUserGroup, FaUserPen } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { MdLibraryBooks, MdOutlineWidgets } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { FiTag } from "react-icons/fi";
import { TfiSharethis } from "react-icons/tfi";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { FaShoppingCart } from "react-icons/fa";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  url: string,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link href={url}>{label}</Link>,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", "/admin", <PieChartOutlined />),
  getItem("Products", "2", "/admin/products", <ProductOutlined />),
  getItem("Authors", "3", "/admin/authors", <FaUserPen />),
  getItem("Orders", "4", "/admin/orders", <FaShoppingCart />),
  getItem("Categories", "5", "/admin/categories", <BiCategory />),
  getItem("Publishers", "6", "/admin/publishers", <MdLibraryBooks />),
  getItem("Brands", "7", "/admin/brands", <FaUserGroup />),
  getItem("Sellers", "8", "/admin/sellers", <GrGroup />),
  getItem("Specifications", "9", "/admin/specifications", <TfiSharethis />),
  getItem("Badges", "10", "/admin/badges", <FiTag />),
  getItem("Users", "11", "/admin/users", <UserOutlined />),
  getItem("Widgets", "12", "/admin/widgets", <MdOutlineWidgets />, [
    getItem("Banners", "13", "/admin/widgets/banners"),
    getItem("QuickLinks", "14", "/admin/widgets/quick-links"),
    getItem("Reasons To Believe", "15", "/admin/widgets/reason-to-believes"),
  ]),
];

const { Sider } = Layout;

export default function Index() {
  const dispatch = useAppDispatch();
  const path = usePathname();
  console.log("path", path);
  const isCollapse = useAppSelector((state) => state.admin.isCollapseSider);

  const [selectedKey, setSelectedKey] = useState<string>("0");

  useEffect(() => {
    const matchedItem = items.find((item: any) => {
      console.log(item?.label?.props?.href);
      return path === item?.label?.props?.href;
    });
    if (matchedItem) {
      setSelectedKey(matchedItem.key as string);
    }
  }, [path]);

  function handleCollaps(value: boolean) {
    dispatch(SetIsCollapseSider(value));
  }

  return (
    <Sider
      collapsible
      collapsed={isCollapse}
      onCollapse={(value) => handleCollaps(value)}
      className={style.container}
    >
      <div className={style.logo} />
      <Menu
        theme="light"
        selectedKeys={[selectedKey]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}
