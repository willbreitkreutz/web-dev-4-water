import { useCDA } from "../hooks/useCDA";
import { useState } from "react";
import Loader from "./loader";

function LocationListItem({ loc, officeName }) {
  return (
    <a
      className="list-group-item list-group-item-action mb-1"
      href={`/#/office/${officeName}/location/${window.btoa(
        loc.identity.name
      )}`}
    >
      {`${loc.identity.name}`}
      <span className="badge bg-info float-end">
        {loc.classification["location-type"]}
      </span>
    </a>
  );
}

function LocationList({ routeParams }) {
  const [searchString, setSearchString] = useState("");
  const locations = useCDA(
    `https://cwms-data.usace.army.mil/cwms-data/locations?office=${routeParams.officeName}`
  );
  if (!locations) return <Loader />;
  const filterMatcher = new RegExp(searchString, "ig");
  return (
    <div>
      <h2>Locations</h2>
      <input
        placeholder="Filter..."
        className="form-control mb-4"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      ></input>

      <ul className="list-group">
        {locations.locations.locations
          .filter((loc) => {
            return filterMatcher.test(
              `${loc.identity.name} ${loc.classification["location-type"]}`
            );
          })
          .map((loc, i) => {
            return (
              <LocationListItem
                key={i}
                loc={loc}
                officeName={routeParams.officeName}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default LocationList;
