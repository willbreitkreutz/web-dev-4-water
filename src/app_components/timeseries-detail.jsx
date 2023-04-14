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
  const meta = { ...timeseries };
  delete meta.values;
  return (
    <div>
      <h2>{timeseries.name}</h2>
      <TSChart timeseries={timeseries} />
      <pre>{JSON.stringify(meta, null, 2)}</pre>
    </div>
  );
}

export default TimeseriesDetail;
