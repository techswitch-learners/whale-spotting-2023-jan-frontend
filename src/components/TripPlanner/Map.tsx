import React from "react";
import {useState, useEffect} from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import { fetchListSighting as fetchAllApprovedSightings, WhaleSighting } from "../../clients/apiClient";

export const MapChart: React.FC = () => {
   const [listWhaleSighting, setListWhaleSighting] = useState<WhaleSighting[]>([]);
    useEffect(() => {
        fetchAllApprovedSightings()
            .then(response => setListWhaleSighting(response));
    }, []);

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

    if (listWhaleSighting.length === 0) {
      return <div> Loading... </div>;
    } 
  
  return (
    <ComposableMap>
      <ZoomableGroup center={[0, 0]} zoom={1}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {listWhaleSighting.map((ws) => (
        <Marker key={ws.id} coordinates={[ws.locationLongitude,ws.locationLatitude]}>
          <g
            fill="none"
            stroke="#043949"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>

           <text
            textAnchor="middle"
            y={-30}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {ws.dateOfSighting.slice(0,10)}
          </text>
        </Marker>
      ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};