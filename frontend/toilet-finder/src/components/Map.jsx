import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const BRUSSELS_API_URL = "https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/toilettes_publiques_vbx/records?limit=100";

const toiletIcon = L.icon({
  iconUrl: "https://img.icons8.com/?size=100&id=MqgCEBAJgyEc&format=png&color=000000",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapViewUpdater = ({ toilets }) => {
  const map = useMap();

  useEffect(() => {
    if (toilets.length === 0) return;

    const bounds = L.latLngBounds(toilets.map(toilet => [toilet.geo_point_2d.lat, toilet.geo_point_2d.lon]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [toilets, map]);

  return null;
};

const MapComponent = ({ onToiletSelect, activeFilter, searchQuery }) => {
  const [toilets, setToilets] = useState([]);
  const [filteredToilets, setFilteredToilets] = useState([]);

  useEffect(() => {
    fetch(BRUSSELS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results) {
          console.log("Fetched toilets:", data.results);
          setToilets(data.results);
          setFilteredToilets(data.results);
        }
      })
      .catch((error) => console.error("Error fetching toilet data:", error));
  }, []);

  useEffect(() => {
    console.log("Search query:", searchQuery);

    if (!searchQuery) {
      setFilteredToilets(toilets);
      return;
    }

    const filtered = toilets.filter((toilet) => {
      const toiletName = toilet.location?.toLowerCase() || "";
      const toiletMunicipalityFR = toilet.municipality_fr?.toLowerCase() || "";
      const toiletMunicipalityNL = toilet.municipality_nl?.toLowerCase() || "";
      const toiletPostalCode = toilet.postalcode?.toLowerCase() || "";
      const toiletTerritoryFR = toilet.territory_fr?.toLowerCase() || "";
      const toiletTerritoryNL = toilet.territory_nl?.toLowerCase() || "";

      return (
        toiletName.includes(searchQuery.toLowerCase()) ||
        toiletMunicipalityFR.includes(searchQuery.toLowerCase()) ||
        toiletMunicipalityNL.includes(searchQuery.toLowerCase()) ||
        toiletPostalCode.includes(searchQuery.toLowerCase()) ||
        toiletTerritoryFR.includes(searchQuery.toLowerCase()) ||
        toiletTerritoryNL.includes(searchQuery.toLowerCase())
      );
    });

    console.log("Filtered toilets:", filtered);
    setFilteredToilets(filtered);
  }, [searchQuery, toilets]);

  return (
    <div className="w-full" style={{ height: "50vh" }}>
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

        {/* ✅ Update map view when search results change */}
        <MapViewUpdater toilets={filteredToilets} />

        {filteredToilets.length > 0 ? (
          filteredToilets.map((toilet, index) =>
            toilet.geo_point_2d ? (
              <Marker
                key={index}
                position={[toilet.geo_point_2d.lat, toilet.geo_point_2d.lon]} // ✅ Use correct coordinates
                icon={toiletIcon}
                eventHandlers={{
                  click: () => {
                    const toiletData = {
                      address: toilet.location || "No address available",
                      filters: [
                        toilet.pmr_en === "PRM" ? "♿ Accessible" : "",
                        toilet.pricing_en === "Free" ? "🆓 Free" : "💰 Paid",
                        toilet.openinghours.includes("24") ? "🟢 Open 24/7" : "⏳ Limited Hours",
                      ].filter(Boolean),
                    };
                    onToiletSelect(toiletData);
                  },
                }}
              >
                <Popup>
                  <strong>{toilet.location || "Public Toilet"}</strong><br />
                  {toilet.municipality_fr || toilet.municipality_nl || "Unknown Municipality"}
                </Popup>
              </Marker>
            ) : null
          )
        ) : (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-3 shadow-lg rounded-md">
            <p className="text-red-500 font-semibold">🚫 No toilets found for this location</p>
          </div>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
