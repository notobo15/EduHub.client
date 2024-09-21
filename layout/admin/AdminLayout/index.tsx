"use client";
import React from "react";
import style from "./style.module.scss";
import { Button, Layout } from "antd";
import { useAppSelector } from "@/redux/hooks";
import { PlusOutlined } from "@ant-design/icons";
import Sider from "../../../components/admin/Sider";
import Header from "../../../components/admin/Header";
import Breadcrumb from "../../../components/admin/Breadcrumb";
import Footer from "../../../components/admin/Footer";
const { Content } = Layout;

export default function AdminLayout({
  title,
  breadcrumb,
  onCreateForm,
  children,
  isShowBtnCreate = true,
}: {
  title: string;
  breadcrumb: any;
  onCreateForm?: any;
  children: React.ReactNode;
  isShowBtnCreate?: boolean;
}) {
  const isCollapse = useAppSelector((state) => state.admin.isCollapseSider);

  return (
    <>
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout
          style={{
            marginInlineStart: isCollapse ? `80px` : `200px`,
            transition: "all 0.3s ease-out",
          }}
        >
          <Header />
          <Content className={style.content}>
            <Breadcrumb data={breadcrumb} />
            <div className={style.header}>
              <h1>{title}</h1>
              {isShowBtnCreate && (
                <Button
                  icon={<PlusOutlined />}
                  type="primary"
                  onClick={onCreateForm}
                >
                  Create
                </Button>
              )}
            </div>
            {children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
}
