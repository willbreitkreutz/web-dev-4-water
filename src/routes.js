import featherRouteMatcher from "feather-route-matcher";
import OfficeList from "./app_components/office-list";
import NotFound from "./app_components/404";
import LocationList from "./app_components/location-list";
import LocationDetail from "./app_components/location-detail";
import TimeseriesDetail from "./app_components/timeseries-detail";

export default featherRouteMatcher({
  "/": OfficeList,
  "/office/:officeName": LocationList,
  "/office/:officeName/location/:locationId": LocationDetail,
  "/office/:officeName/location/:locationId/ts/:tsName": TimeseriesDetail,
  "*": NotFound,
});
