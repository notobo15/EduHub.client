import React from "react";
import { Table, Space, Button } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import style from "./Table.module.scss";

interface MyTableProps<T> {
  columns: ColumnsType<T>;
  dataSource: T[];
  loading?: boolean;
  pagination?: TablePaginationConfig | false;
  onView?: (record: T) => void;
  onEdit?: (record: T) => void;
  onDelete?: (record: T) => void;
  onSelectChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
  onRowSelection?: TableRowSelection<T>;
  expandable?: { expandedRowRender: (record: T) => React.ReactNode };
}

const Index = <T extends { id: React.Key }>({
  columns,
  dataSource,
  loading,
  pagination,
  onView,
  onEdit,
  onDelete,
  onSelectChange,
  onRowSelection,
  expandable,
}: MyTableProps<T>) => {
  const actionColumn = {
    title: "Actions",
    key: "actions",
    width: 100,
    render: (text: string, record: T) => (
      <div className={style.space}>
        {onView && (
          <span className={style.btnView} onClick={() => onView(record)}>
            <EyeOutlined />
          </span>
        )}
        {onEdit && (
          <span className={style.btnEdit} onClick={() => onEdit(record)}>
            <EditOutlined />
          </span>
        )}
        {onDelete && (
          <span className={style.btnDelete} onClick={() => onDelete(record)}>
            <DeleteOutlined />
          </span>
        )}
      </div>
    ),
  };

  return (
    <Table<T>
      rowSelection={onRowSelection}
      columns={[...columns, actionColumn]}
      dataSource={dataSource}
      loading={loading}
      pagination={pagination}
      rowKey={(record) => record.id} // Use id as the key
      expandable={expandable}
    />
  );
};

export default Index;
