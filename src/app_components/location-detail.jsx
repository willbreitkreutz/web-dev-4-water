import { useCDA } from "../hooks/useCDA";
import Loader from "./loader";
import LocationTSList from "./location-ts-list";

import LocationMap from "./location-map";

function LocationDetail({ routeParams }) {
  const locationName = window.atob(routeParams.locationId);
  const location = useCDA(
    `https://cwms-data.usace.army.mil/cwms-data/locations/${encodeURI(
      locationName
    )}?office=${routeParams.officeName}`
  );
  if (!location) return <Loader />;
  return (
    <div>
      <h2>Location Detail for {locationName}</h2>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-sm" style={{ overflow: "hidden" }}>
            <pre style={{ textOverflow: "ellipsis" }}>
              {JSON.stringify(location, null, 2)}
            </pre>
          </div>
          <div className="col-sm">
            <div className="float-end">
              <LocationMap lon={location.longitude} lat={location.latitude} />
            </div>
          </div>
        </div>
      </div>

      <LocationTSList location={location} routeParams={routeParams} />
    </div>
  );
}

export default LocationDetail;
