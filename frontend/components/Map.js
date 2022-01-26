import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map({ searchResult }) {
    const coordinate = searchResult.map(({ lat, long }) => ({
        latitude: lat,
        longitude: long,
    }));

    const centerCordinate = getCenter(coordinate);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: centerCordinate.latitude,
        longitude: centerCordinate.longitude,
        zoom: 8,
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/itscoolvatsa/ckydxf1yrstxp14pex1d43lec"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResult.map((res) => (
                <div key={res.long}>
                    <Marker
                        longitude={res.long}
                        latitude={res.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <LocationMarkerIcon className="h-6 text-red-400 animate-bounce cursor-pointer" />
                    </Marker>
                </div>
            ))}
        </ReactMapGL>
    );
}

export default Map;
