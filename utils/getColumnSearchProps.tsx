import React from "react";
import { Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnType } from "antd/es/table";
import type { FilterDropdownProps } from "antd/es/table/interface";

export const getColumnSearchProps = <T extends object>(
  dataIndex: keyof T
): ColumnType<T> => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }: FilterDropdownProps) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Search ${dataIndex.toString()}`}
        value={selectedKeys[0] as string}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => confirm()}
        style={{ marginBottom: 8, display: "block" }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => confirm()}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && clearFilters()}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
  onFilter: (value, record) => {
    const recordValue = record[dataIndex];
    if (recordValue != null) {
      return recordValue
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase());
    }
    return false;
  },
  sorter: (a, b) => {
    const aValue = a[dataIndex];
    const bValue = b[dataIndex];

    if (aValue && bValue) {
      return aValue > bValue ? 1 : -1;
    }
    return 0;
  },
});
