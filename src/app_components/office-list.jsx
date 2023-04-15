import { useCDA } from "../hooks/useCDA";
import { useState } from "react";
import debounce from "../utils/debounce";
import Loader from "./loader";

function OfficeListItem({ item }) {
  return (
    <a
      href={`/#/office/${item.name}`}
      className="list-group-item list-group-item-action mb-1"
    >
      {item["long-name"]}
    </a>
  );
}

export default function OfficeList() {
  const [searchString, setSearchString] = useState("");
  const offices = useCDA(
    "https://cwms-data.usace.army.mil/cwms-data/offices?format=json"
  );
  if (!offices) return <Loader />;
  const filterMatcher = new RegExp(searchString, "ig");
  return (
    <div>
      <h2>Offices</h2>
      <input
        placeholder="Filter..."
        className="form-control mb-4"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      ></input>
      <ul className="list-group">
        {offices.offices.offices
          .filter((office) => {
            return filterMatcher.test(office["long-name"]);
          })
          .map((office, i) => {
            return <OfficeListItem item={office} key={i} />;
          })}
      </ul>
    </div>
  );
}
