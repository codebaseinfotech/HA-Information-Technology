import React, { useState, useRef, useEffect } from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import { Phone, Mail } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const locations = [
  {
    id: "dubai",
    name: "Dubai",
    coordinates: { lat: 24.9745, lng: 55.1983 },
    address: "274 Street - Dubai Investment Park - 2, Dubai - U.A.E.",
    phones: ["+971 523003423"],
    emails: ["info@alattastech.com"],
  },
  {
    id: "india",
    name: "Surat, India",
    coordinates: { lat: 21.2349, lng: 72.8163 },
    address:
      "201, Akshar Square, opp. Cancer Hospital, Dabholi, Surat, Gujarat, India - 395004",
    phones: ["+91-7096859504"],
    emails: ["codebaseinfotech@gmail.com"],
  },
];

const LocationMapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [viewState, setViewState] = useState({
    latitude: 23.5,
    longitude: 64.0,
    zoom: 3.8,
    pitch: 0,
    bearing: 0,
  });

  const mapRef = useRef(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
    setViewState({
      ...viewState,
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
      zoom: 12,
      transitionDuration: 1500,
    });
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <style>
        {`
                    .mapboxgl-ctrl-group { display: none !important; }
                    .mapboxgl-ctrl { display: none !important; }
                    .mapboxgl-ctrl-bottom-right { display: none !important; }
                    .mapboxgl-ctrl-bottom-left { display: none !important; }
                `}
      </style>
      <div className="container mx-auto px-4 xl:px-12">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold uppercase tracking-wider text-sm block mb-4">
            CONTACT US
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Get <span className="text-[#1A3C8B]">in Touch</span> With Us. We are
            <br />
            Happy Help.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          {/* Top - Map */}
          <div className="w-full h-[400px] lg:h-[500px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-white group/map bg-gray-100 mb-16">
            <Map
              ref={mapRef}
              {...viewState}
              onMove={(evt) => setViewState(evt.viewState)}
              mapStyle="mapbox://styles/mapbox/light-v11"
              mapboxAccessToken={MAPBOX_TOKEN}
              attributionControl={false}
              antialias={true}
              minZoom={3}
              maxZoom={18}
            >
              {locations.map((loc) => (
                <Marker
                  key={loc.id}
                  latitude={loc.coordinates.lat}
                  longitude={loc.coordinates.lng}
                  anchor="bottom"
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    handleMarkerClick(loc);
                  }}
                >
                  <div className="group relative cursor-pointer flex flex-col items-center">
                    <div className="mb-2 bg-[#1a2332] text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">
                      {loc.name}
                    </div>

                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${selectedLocation.id === loc.id ? "bg-[#1A3C8B] scale-110 ring-4 ring-blue-100" : "bg-[#1a2332] hover:bg-[#1A3C8B]/80"}`}
                    >
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </Marker>
              ))}
            </Map>
          </div>

          {/* Bottom - Details Cards Side by Side */}
          <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 lg:gap-12 relative px-2 md:px-0">
            {locations.map((loc, index) => {
              const isActive = selectedLocation.id === loc.id;
              
              // Slide animation variables
              // Initially hidden and offset, then transitions to visibility and 0 offset
              // The left card slides from left (-translate-x-20), right card from right (translate-x-20)
              const [isVisible, setIsVisible] = useState(false);
              
              useEffect(() => {
                const timer = setTimeout(() => setIsVisible(true), 100);
                return () => clearTimeout(timer);
              }, []);

              const slideClass = isVisible 
                ? "translate-x-0 opacity-100" 
                : (index === 0 ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0");

              // Styling for active state
              const cardStyles = isActive
                ? "z-20 scale-[1.03] shadow-2xl border-[#1A3C8B]"
                : "z-10 scale-100 shadow-md border-gray-200 hover:border-blue-300 hover:shadow-lg";

              return (
                <div
                  key={loc.id}
                  onClick={() => {
                    if (!isActive) {
                      handleMarkerClick(loc);
                    }
                  }}
                  className={`bg-white rounded-3xl p-8 md:p-10 border-t-[6px] transition-all duration-700 ease-out cursor-pointer flex flex-col items-center justify-between min-h-[420px] ${cardStyles} ${slideClass}`}
                >
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a2332] mb-8 text-center">
                    Location in{" "}
                    <span className="text-green-600">
                      {loc.name.split(",")[0]}
                    </span>
                  </h3>

                  <div className="w-full space-y-6 flex flex-col items-center">
                    {loc.phones.map((phone, idx) => {
                      const cleanPhone = phone.replace(/[^0-9]/g, "");
                      const whatsappLink = `https://api.whatsapp.com/send/?phone=${cleanPhone}&text&type=phone_number&app_absent=0`;

                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-4 text-xl font-bold text-[#1a2332]"
                        >
                          <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full text-[#1A3C8B]">
                            <Phone className="w-5 h-5 transform rotate-12" />
                          </div>
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-green-600 transition-colors cursor-pointer"
                            onClick={(e) => {
                              if (!isActive) e.preventDefault();
                            }}
                            title="Chat on WhatsApp"
                          >
                            {/* <FaWhatsapp className="w-6 h-6 text-green-500 cursor-pointer" /> */}
                            <span className="cursor-pointer">{phone}</span>
                          </a>
                        </div>
                      );
                    })}

                    {loc.emails.map((email, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 text-lg font-semibold text-gray-700"
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full text-[#1A3C8B]">
                          <Mail className="w-5 h-5" />
                        </div>
                        <span className="truncate max-w-[250px] text-wrap">
                          {email}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 w-full bg-[#f1f8e9] p-6 rounded-2xl text-center shadow-sm border border-[#c5e1a5]">
                    <p className="text-[#1a2332] font-semibold text-sm md:text-base leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMapSection;
