import { useCDA } from "../hooks/useCDA";
import Loader from "./loader";
import LocationTSList from "./location-ts-list";

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
      <pre>{JSON.stringify(location, null, 2)}</pre>
      <LocationTSList location={location} routeParams={routeParams} />
    </div>
  );
}

export default LocationDetail;
