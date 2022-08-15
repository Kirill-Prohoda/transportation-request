import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import st from "./detailedCard.module.scss";

const DetailedCard: FC = () => {
  const { selectedRoute } = useTypedSelector((state) => state.pointsReducers);

  let { label, id, startPoint, endPoint, checkPoints } = selectedRoute;

  return (
    <div className={st.container}>
      <h3 className={st.header}>Карточка маршрута</h3>
      <ul className={st.list}>
        <li>id: {id}</li>
        <li>Название: {label}</li>
        <li>Начало: {JSON.stringify(startPoint)}</li>
        <li>Остановки: {JSON.stringify(checkPoints)}</li>
        <li>Конец: {JSON.stringify(endPoint)}</li>
      </ul>
    </div>
  );
};
export default DetailedCard;
