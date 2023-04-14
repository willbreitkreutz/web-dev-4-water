import { useState } from "react";

function LocationMap({ lon, lat, h = 200, w = 300 }) {
  const token = import.meta.env.VITE_MAPBOX_TOKEN;
  const [z, setZ] = useState(14);
  const [bearing, setBearing] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [basemap, setBasemap] = useState("satellite-streets-v11");
  return (
    <div>
      <img
        width={w}
        height={h}
        src={`https://api.mapbox.com/styles/v1/mapbox/${basemap}/static/pin-l+ce1cc9(${lon},${lat})/${lon},${lat},${z},${bearing},${pitch}/${w}x${h}@2x?before_layer=bridge-path&access_token=${token}`}
      />
      <div className="mt-2">
        <label className="form-label">Z Level</label>
        <input
          className="form-control"
          type="number"
          value={z}
          min={0}
          max={20}
          onChange={(e) => {
            setZ(e.target.value);
          }}
        ></input>
        <label className="form-label mt-1">Bearing</label>
        <input
          className="form-control"
          type="number"
          value={bearing}
          min={0}
          max={360}
          onChange={(e) => {
            setBearing(e.target.value);
          }}
        ></input>
        <label className="form-label mt-1">Pitch</label>
        <input
          className="form-control"
          type="number"
          value={pitch}
          min={0}
          max={60}
          onChange={(e) => {
            setPitch(e.target.value);
          }}
        ></input>
        <label className="form-label mt-1">Basemap</label>
        <select
          className="form-control"
          value={basemap}
          onChange={(e) => {
            setBasemap(e.target.value);
          }}
        >
          <option value="light-v10">Mapbox Light</option>
          <option value="dark-v10">Mapbox Dark</option>
          <option value="streets-v11">Mapbox Streets</option>
          <option value="outdoors-v11">Mapbox Outdoors</option>
          <option value="satellite-v9">Mapbox Satellite</option>
          <option value="satellite-streets-v11">
            Mapbox Satellite Streets
          </option>
        </select>
      </div>
    </div>
  );
}

export default LocationMap;
