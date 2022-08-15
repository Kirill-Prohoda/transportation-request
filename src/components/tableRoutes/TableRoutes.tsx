import React from "react";
import { Table } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import st from "./tableRoutes.module.scss";
import "./tableRoutes.module.scss";
import { useActions } from "../../hooks/useActions";

const TableRoutes = () => {
  const { routes, selectedRoute } = useTypedSelector(
    (state) => state.pointsReducers
  );
  const { selectRoute } = useActions();

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Label",
      dataIndex: "label",
    },
  ];

  console.log("selectedRoute", selectedRoute);
  return (
    <div className={st.section}>
      <Table
        dataSource={routes.map((i: any) => {
          i.key = i.id;
          return i;
        })}
        columns={columns}
        rowSelection={{
          columnWidth: "100px",
          selectedRowKeys: [selectedRoute.id],
          onChange: (key, row) => {
            selectRoute(row[0]);
          },
          type: "radio",
        }}
      />
    </div>
  );
};
export default TableRoutes;
