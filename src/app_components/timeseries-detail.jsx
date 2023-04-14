import { useCDA } from "../hooks/useCDA";
import Loader from "./loader";
import TSChart from "./timeseries-chart";

function TimeseriesDetail({ routeParams }) {
  const timeseries = useCDA(
    `https://cwms-data.usace.army.mil/cwms-data/timeseries?name=${window.atob(
      routeParams.tsName
    )}&office=${routeParams.officeName}`
  );
  if (!timeseries) return <Loader />;
  return (
    <div>
      <h2>{timeseries.name}</h2>
      <TSChart timeseries={timeseries} />
      <pre>{JSON.stringify(timeseries, null, 2)}</pre>
    </div>
  );
}

export default TimeseriesDetail;
