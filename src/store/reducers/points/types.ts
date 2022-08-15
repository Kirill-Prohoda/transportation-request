interface StatePoints {
  routes: RouteType[];
  selectedRoute: RouteType;

  isLoadingPoints: boolean;
  errorPoints: string;
}

enum PointActionType {
  FETCH_ROUTES = "Fetch_Routes",
  SELECT_ROUTE = "SELECT_ROUTE",
  CHAGE_ROUTE = "CHAGE_ROUTE",
  DELETE_ROUTE = "DELETE_ROUTE",
  CREATE_ROUTE = "CREATE_ROUTE",
  SET_STATUS_LOADING = "SET_STATUS_LOADING",
  SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
}

type RouteType = {
  id: string;
  label: string;
  startPoint: PointType;
  endPoint: PointType;
  checkPoints: PointType[];
};

type PointType = {
  id: string;
  title: string;
  coords: { lat: number; lng: number };
  time: Date;
};

type PointAction = {
  type: PointActionType,
  payload: any
};

export { PointActionType };
export type { PointAction, StatePoints, PointType, RouteType };
