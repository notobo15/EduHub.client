"use client";
import Table from "@/components/admin/Table";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getColumnSearchProps } from "@/utils/getColumnSearchProps";
import { ColumnsType, TableRowSelection } from "antd/es/table/interface";
import React, { useState } from "react";
import {
  SELECTION_ALL,
  SELECTION_INVERT,
  SELECTION_NONE,
} from "antd/lib/table/hooks/useSelection";

export default function Index() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(50);
  const [search, setSearch] = useState<string>("");

  const columns: ColumnsType<IUser> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      ...getColumnSearchProps<IUser>("userName"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps<IUser>("email"),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      ...getColumnSearchProps<IUser>("phoneNumber"),
    },
    {
      title: "Email Confirmed",
      dataIndex: "emailConfirmed",
      key: "emailConfirmed",
      render: (confirmed) => (confirmed ? "Yes" : "No"),
    },
    {
      title: "Phone Number Confirmed",
      dataIndex: "phoneNumberConfirmed",
      key: "phoneNumberConfirmed",
      render: (confirmed) => (confirmed ? "Yes" : "No"),
    },
  ];

  const rowSelection: TableRowSelection<IUser> = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
    selections: [
      SELECTION_ALL,
      SELECTION_INVERT,
      SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          const newSelectedRowKeys = changeableRowKeys.filter(
            (_, index) => index % 2 === 0
          );
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          const newSelectedRowKeys = changeableRowKeys.filter(
            (_, index) => index % 2 !== 0
          );
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <AdminLayout
      title="Categories"
      breadcrumb={[
        { title: "Admim", url: "/admin" },
        { title: "Categories", url: "/admin/categories" },
      ]}
      isShowBtnCreate={false}
    >
      <Table<IUser>
        columns={columns}
        dataSource={[]}
        loading={false}
        pagination={{
          current: currentPage,
          pageSize: limit,
          total: 0,
          onChange: (page, pageSize) => {
            setCurrentPage(page);
            if (pageSize) setLimit(pageSize);
          },
        }}
        onRowSelection={rowSelection}
      />
    </AdminLayout>
  );
}
