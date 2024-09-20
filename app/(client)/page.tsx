"use client";
import GlobalProvider from "@/redux/GlobalProvider";
import { useAppSelector } from "@/redux/hooks";
import styles from "./style.module.scss";
import clsx from "clsx";
import Header2 from "@/components/client/Header2";
import Sidebar from "@/components/client/Sidebar";
import Content from "@/components/client/Content";
export default function Home() {
  const theme = useAppSelector((state) => state.global.theme);

  return (
    <div className={clsx(styles.app, theme)}>
      <Header2 />
      <div>
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </div>
  );
}
