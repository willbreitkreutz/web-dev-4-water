import featherRouteMatcher from "feather-route-matcher";
import OfficeList from "./app_components/office-list";
import NotFound from "./app_components/404";
import LocationList from "./app_components/location-list";
import LocationDetail from "./app_components/location-detail";
import TimeseriesDetail from "./app_components/timeseries-detail";

const origin = window.location.origin;

export default featherRouteMatcher({
  [`${origin}/`]: OfficeList,
  [`${origin}/#/office/:officeName`]: LocationList,
  [`${origin}/#/office/:officeName/location/:locationId`]: LocationDetail,
  [`${origin}/#/office/:officeName/location/:locationId/ts/:tsName`]:
    TimeseriesDetail,
  "*": NotFound,
});
