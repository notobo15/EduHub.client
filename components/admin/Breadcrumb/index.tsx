import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
export type Breadcrumb = {
  url: string;
  title: string;
};
export default function Index({ data }: { data: Breadcrumb[] }) {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {data.map((item: Breadcrumb) => (
        <Breadcrumb.Item key={item.url}>
          <Link href={item.url}>{item.title}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
