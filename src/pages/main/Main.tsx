import React, { FC, useEffect, useRef } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import Table from "../../components/tableRoutes/TableRoutes";
import HeaderLayout from "../../layouts/headerLayout/HeaderLayout";
import Map from "./../../components/map/Map";
import { useActions } from "../../hooks/useActions";
import DetailedCard from "./../../components/detailedCard/DetailedCard";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface MainType {}

const Main: FC<MainType> = () => {
  const { fetchRoutes } = useActions();

  const { selectedRoute } = useTypedSelector((state) => state.pointsReducers);
  const { changeRoute } = useActions();

  const mapRef = useRef<any>(null);

  const handlerResize = () => {
    if (mapRef?.current) {
      mapRef.current.invalidateSize();
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <HeaderLayout>
      <Splitter
        style={{ height: "100%" }}
        layout="horizontal"
        onResizeEnd={handlerResize}
      >
        <SplitterPanel
          className="flex align-items-center justify-content-center"
          style={{ maxWidth: "600px" }}
        >
          <Table />
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center">
          <Map mapRef={mapRef} />
        </SplitterPanel>

        <SplitterPanel
          className="flex align-items-center justify-content-center"
          style={{
            display: !Object.keys(selectedRoute).length && "none",
            maxWidth: "500px",
          }}
        >
          <DetailedCard />
        </SplitterPanel>
      </Splitter>
    </HeaderLayout>
  );
};
export default Main;
