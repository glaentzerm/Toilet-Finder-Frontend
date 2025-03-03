import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const BRUSSELS_API_URL =
  "https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/toilettes_publiques_vbx/records?limit=100";

const toiletIcon = L.icon({
  iconUrl: "https://img.icons8.com/?size=100&id=MqgCEBAJgyEc&format=png&color=000000",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapComponent = ({ onToiletSelect }) => {
  const [toilets, setToilets] = useState([]);

  useEffect(() => {
    fetch(BRUSSELS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results) {
          setToilets(data.results);
        }
      })
      .catch((error) => console.error("Error fetching toilet data:", error));
  }, []);

  return (
    <div className="relative w-full" style={{ height: "50vh" }}>
      <MapContainer
        center={[50.8503, 4.3517]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full rounded-lg shadow-md"
        style={{ borderRadius: "20px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {toilets.map((toilet, index) =>
          toilet.geo_point_2d ? (
            <Marker
              key={index}
              position={[toilet.geo_point_2d.lat, toilet.geo_point_2d.lon]}
              icon={toiletIcon}
              eventHandlers={{
                click: () => {
                  const toiletData = {
                    address: toilet.location || "No address available",
                    walkTime: Math.floor(Math.random() * 15) + 1, // Random walk time
                    filters: [
                      toilet.acces_pmr ? "♿ Accessible" : "",
                      toilet.paying === "YES" ? "💰 Paid" : "🆓 Free",
                      toilet.opening_hours === "24/7" ? "🟢 Open Now" : "",
                    ].filter(Boolean),
                  };
                  onToiletSelect(toiletData);
                },
              }}
            >
              <Popup>
                <strong>{toilet.nom || "Public Toilet"}</strong>
                <br />
                {toilet.location || "No address available"}
              </Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
