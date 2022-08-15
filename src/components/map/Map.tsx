import React, { useEffect, useRef, FC, useCallback } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import st from "./map.module.scss";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface MapType {
  mapRef: any;
}

const Map: FC<MapType> = (props) => {
  const { mapRef } = props;
  const routeRef = useRef(null);

  const { selectedRoute } = useTypedSelector((state) => state.pointsReducers);
  const { changeRoute } = useActions();

  useEffect(() => {
    if (!mapRef.current) {
      L.Marker.prototype.setIcon(
        L.icon({
          iconUrl: markerIconPng,
        })
      );

      let map = L.map("map", {
        center: [51.505, -0.09],
        zoom: 13,
      });

      [
        {
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          options: {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        },
      ].forEach(({ url, option }: any) => {
        let layerCopy = new L.TileLayer(url, option);
        map.addLayer(layerCopy);
      });

      mapRef.current = map;
    }
  }, [mapRef]);

  useEffect(() => {
    if (mapRef.current && !routeRef.current) {
      //@ts-ignore
      routeRef.current = L.Routing.control({
        waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
      }).addTo(mapRef.current);

      //@ts-ignore
      routeRef.current.on("waypointschanged", (e) => {
        changeRoute({
          mode: "CHANGE_POINT",
          value: e.waypoints.map((point: any) => point.latLng),
        });
      });
    }
  }, [mapRef.current]);

  return (
    <div className={st.section}>
      <div id={`map`} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};
export default Map;
