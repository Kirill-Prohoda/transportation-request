import React, { FC } from "react";
import { HeaderLayoutType } from "./HeaderLayoutType";
import st from "./headerLayout.module.scss";
import { Layout as ALayout } from "antd";
import Header from "./../../components/header/Header";

const { Header: AHeader, Content: AContent } = ALayout;

const HeaderLayout: FC<HeaderLayoutType> = (props) => {
  const { children } = props;

  return (
    <ALayout className={st.container}>
      <AHeader className={st.header}>
        <Header />
      </AHeader>
      <AContent className={st.main}>{children}</AContent>
    </ALayout>
  );
};

export default HeaderLayout;
