import { title } from "process";
import {
  PointActionType,
  PointType,
  RouteType,
  StatePoints,
  PointAction,
} from "./types";

const initState: StatePoints = {
  routes: [],
  selectedRoute: {} as RouteType,

  isLoadingPoints: false,
  errorPoints: "",
};

const pointsReducers = (propsState = initState, propsAction: PointAction) => {
  const state = Object.assign({}, propsState);
  const action = Object.assign({}, propsAction);

  switch (action.type) {
    case PointActionType.FETCH_ROUTES: {
      return {
        ...state,
        routes: action.payload,
      };
    }
    case PointActionType.SELECT_ROUTE: {
      return {
        ...state,
        selectedRoute: action.payload,
      };
    }
    case PointActionType.CHAGE_ROUTE: {
      let copyselectedRoute = state.selectedRoute as any;
      let { mode, value } = action.payload;
      if (mode === "CHANGE_POINT" && value.length > 1) {
        copyselectedRoute = {
          ...copyselectedRoute,
          startPoint: {
            ...copyselectedRoute.startPoint,
            coords: value[0],
            title: "Start",
            time: new Date(),
          },
          endPoint: {
            ...copyselectedRoute.endPoint,
            coords: value[value.length - 1],
            title: "End",
            time: new Date(),
          },
          checkPoints: value.slice(1, -1).map((coords: any, index: number) => {
            return {
              id: "checkpoint" + index,
              coords: coords,
              title: "checkpoint",
              time: new Date(),
            };
          }),
        };
      }

      if (mode === "CHANGE_DESCRIPTION") {
        copyselectedRoute = {
          ...copyselectedRoute,
          title: value,
        };
      }

      let copyRoutes = state.routes.map((route: RouteType) => {
        if (route.id === copyselectedRoute.id) {
          return copyselectedRoute;
        }
        return route;
      });

      return {
        ...state,
        routes: copyRoutes,
        selectedRoute: copyselectedRoute,
      };
    }

    case PointActionType.DELETE_ROUTE: {
      return {
        ...state,
        routes: state.routes.filter(
          (route: RouteType) => route.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};

export default pointsReducers;
