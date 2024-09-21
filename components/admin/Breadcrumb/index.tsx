import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

export type BreadcrumbItem = {
  url: string;
  title: string;
};

export default function Index({ data }: { data: BreadcrumbItem[] }) {
  // Map your breadcrumb data to the structure expected by the `items` prop
  const breadcrumbItems = data.map((item) => ({
    key: item.url,
    title: <Link href={item.url}>{item.title}</Link>,
  }));

  return <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} />;
}
