import { AppDispatch } from "../../index";
import { PointAction, PointActionType, RouteType } from "./types";

const rndN = () => Math.floor(Math.random() * 10000);
const rndS = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);

const rndPoint = (title: string = rndS()) => ({
  id: rndN() + "",
  title,
  coords: { lat: rndN(), lng: rndN() },
  time: new Date(),
});

const randomRoute = () => {
  return {
    id: rndN() + "",
    label: rndS(),
    startPoint: rndPoint("start"),
    endPoint: rndPoint("end"),
    checkPoints: [],
  };
};

const poi = {
  fetchRoutesAction: (payload: RouteType[]): PointAction => ({
    type: PointActionType.FETCH_ROUTES,
    payload,
  }),
  createRouteActions: (payload: RouteType) => ({
    type: PointActionType.CREATE_ROUTE,
    payload,
  }),
  selectRouteAction: (payload: RouteType) => ({
    type: PointActionType.SELECT_ROUTE,
    payload,
  }),
  changeRouteAction: (payload: RouteType) => ({
    type: PointActionType.CHAGE_ROUTE,
    payload,
  }),
  deleteRouteAction: (payload: RouteType) => ({
    type: PointActionType.DELETE_ROUTE,
    payload,
  }),

  setStatusLoading: (payload: boolean) => ({
    type: PointActionType.SET_STATUS_LOADING,
    payload,
  }),
  setErrorMessage: (payload: string) => ({
    type: PointActionType.SET_ERROR_MESSAGE,
    payload,
  }),

  fetchRoutes: () => async (dispatch: AppDispatch) => {
    try {
      poi.setStatusLoading(true);
      const result = {
        status: true,
        data: [
          randomRoute(),
          randomRoute(),
          randomRoute(),
          randomRoute(),
          randomRoute(),
          randomRoute(),
          randomRoute(),
          randomRoute(),
          randomRoute(),
          randomRoute(),
        ],
      };
      if (result.status) {
        dispatch(poi.fetchRoutesAction(result.data));
      }
    } catch (e) {
      dispatch(poi.setErrorMessage(JSON.stringify(e)));
    } finally {
      poi.setStatusLoading(false);
    }
  },
  selectRoute: (route: RouteType) => async (dispatch: AppDispatch) => {
    dispatch(poi.selectRouteAction(route));
  },

  createRoute: () => async (dispatch: AppDispatch) => {
    try {
      poi.setStatusLoading(true);
      const result = await (() => ({ status: true, data: randomRoute() }))();
      if (result.status) {
        dispatch(poi.changeRouteAction(result.data));
      }
    } catch (e) {
      dispatch(poi.setErrorMessage(JSON.stringify(e)));
    } finally {
      poi.setStatusLoading(false);
    }
  },

  changeRoute: (route: any) => async (dispatch: AppDispatch) => {
    try {
      poi.setStatusLoading(true);
      const result = await (() => ({
        status: true,
        data: [randomRoute(), randomRoute()],
      }))();

      if (result.status) {
        dispatch(poi.changeRouteAction(route));
      }
    } catch (e) {
      dispatch(poi.setErrorMessage(JSON.stringify(e)));
    } finally {
      poi.setStatusLoading(false);
    }
  },
  deleteRoute: (route: RouteType) => async (dispatch: AppDispatch) => {
    try {
      poi.setStatusLoading(true);
      const result = await (() => ({
        status: true,
        data: [randomRoute(), randomRoute()],
      }))();
      if (result.status) {
        dispatch(poi.deleteRouteAction(route));
      }
    } catch (e) {
      dispatch(poi.setErrorMessage(JSON.stringify(e)));
    } finally {
      poi.setStatusLoading(false);
    }
  },
};
export default poi;

// let Point: PointType = {
//   id: "1",
//   title: "start",
//   coords: { lat: 0, lng: 0 },
//   time: new Date(),
// };
// let TimeRoute = {
//   id: "1",
//   label: "Time Route",
//   startPoint: Point,
//   endPoint: Point,
//   checkPoints: [Point, Point, Point],
// };

// let SecondRoute = {
//   id: "2",
//   label: "Second Route",
//   startPoint: Point,
//   endPoint: Point,
//   checkPoints: [Point, Point, Point],
// };
