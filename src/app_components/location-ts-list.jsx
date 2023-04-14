import { useCDA } from "../hooks/useCDA";
import Loader from "./loader";

function LocationTSList({ location, routeParams }) {
  const timeseries = useCDA(
    `https://cwms-data.usace.army.mil/cwms-data/catalog/TIMESERIES?office=${
      routeParams.officeName
    }&like=${encodeURI(`${location.name}.*`)}`
  );
  if (!timeseries) return <Loader />;
  return (
    <div>
      <hr />
      <h3>Timeseries</h3>
      <ul className="list-group">
        {timeseries.entries.map((ts) => {
          return (
            <a
              key={ts.name}
              href={`${window.location}/ts/${window.btoa(ts.name)}`}
              className="list-group-item list-group-item-action mb-1"
            >
              {ts.name}
              {!!ts.extents.length ? (
                <span className="badge bg-success float-end">extents</span>
              ) : null}
            </a>
          );
        })}
      </ul>
    </div>
  );
}

export default LocationTSList;
